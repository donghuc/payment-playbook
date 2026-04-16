# Dunning & Involuntary Churn Recovery

> Part of the Post-Payment Strategy series. See [post-payment-strategy.md](../post-payment-strategy.md) for the full index.

---

## Overview

Involuntary churn is subscription loss caused by payment failure — not by user intent to leave. It is structurally different from voluntary churn and requires a different response system.

**Scale of the problem:** Industry benchmarks consistently put involuntary churn at 20–40% of total subscription churn. A product with 5% monthly total churn is likely experiencing 1–2% involuntary churn. Recovering half of that involuntary churn materially changes business economics without requiring any product improvement or acquisition spend.

**Root causes:**
- Card expiry (the most predictable cause — expiry dates are known in advance)
- Card replacement after loss/theft (new card number issued)
- Insufficient funds (temporary — often recoverable)
- Bank fraud blocks (card present but bank blocking international/subscription charges)
- Soft bank declines (temporary system issues)
- Wallet balance insufficient (SEA — e-wallet users who haven't topped up)
- 3DS/SCA authentication failures (EU — card requires re-authentication)

---

## Part 1 — Pre-Failure Prevention

The most effective dunning is the kind that prevents failure before it happens.

### Card Expiry Prediction

Card expiry dates are stored in your payment vault. You can predict failures before they happen and prompt users to update proactively.

```
30 days before expiry:
  In-product banner (non-blocking):
    "Your card ending 4242 expires next month."
    "Update your payment method to avoid any interruption."
    [Update payment method →]
  
  Email:
    Subject: "Your payment card expires soon — update before [Month Year]"
    Body: Direct, no urgency theatre — just factual notice
    CTA: [Update payment method →] → deep link to payment update page

14 days before expiry:
  Email reminder (if not updated):
    Subject: "Reminder: Update your payment card before [date]"
    More specific urgency: "Your next charge of $9.00 is on [date]"
    [Update payment method →]

At renewal with expired card (if still not updated):
  Treat as payment failure → enter dunning sequence
```

**Implementation with Stripe:**
```python
# Query subscriptions where card expires in next 30 days
def get_expiring_cards():
    customers = stripe.Customer.list(limit=100)
    expiring = []
    
    for customer in customers.auto_paging_iter():
        pm = customer.invoice_settings.default_payment_method
        if pm and pm.type == 'card':
            card = pm.card
            today = datetime.today()
            expiry = datetime(card.exp_year, card.exp_month, 1)
            days_until_expiry = (expiry - today).days
            
            if 0 < days_until_expiry <= 30:
                expiring.append({
                    'customer_id': customer.id,
                    'days_until_expiry': days_until_expiry,
                    'last4': card.last4
                })
    
    return expiring
```

### Stripe's Card Account Updater

Stripe automatically updates stored card details when issuers push new card numbers via Visa Account Updater and Mastercard Automatic Billing Updater. This happens transparently — a replaced card due to loss/theft is updated in Stripe before the next charge, without user action.

**Coverage:** Visa and Mastercard in most markets. Not available for all issuers or all geographies. American Express has a separate program. Debit cards have lower coverage than credit cards.

**Practical impact:** A significant percentage of "card replacement" involuntary churn (new card issued after loss/theft) is recovered automatically via card updater with no user action required.

### Pre-Renewal Reminder (General)

3–5 days before each renewal, send a brief receipt preview:

```
Subject: "Your [Product] Pro renews in 3 days — $9.00 on May 28"
Body:
  "Just a heads up — your Pro subscription renews on May 28."
  "Amount: $9.00"
  "Card: ending 4242"
  
  "Questions? Reply to this email."
  "Manage subscription: [link]"
```

This accomplishes two things: reduces surprise chargebacks (users who forgot they were subscribed), and gives users who want to cancel a clear window to do so without confusion.

---

## Part 2 — The Dunning Sequence

When a renewal charge fails, the dunning sequence is the structured recovery process.

### Stripe Smart Retries

Stripe Billing's Smart Retries uses ML to determine optimal retry timing based on:
- Historical success patterns for the specific decline reason
- Time of day, day of week patterns for the issuer
- Card type and geography

Smart Retries is enabled by default in Stripe Billing and is superior to fixed-schedule retries for card failures. The retry schedule is determined dynamically.

**For gateway-agnostic or multi-gateway implementations:** Build your own retry schedule using soft/hard decline classification (see below).

### Decline Classification

Not all declines have the same recovery probability. Classifying declines correctly determines retry strategy.

```
HARD DECLINES — Do not retry
  card_declined (do_not_honor, permanent)
  invalid_account (account closed)
  lost_card / stolen_card (card cancelled by issuer)
  fraudulent (Stripe Radar flagged)
  
  Action: Immediately prompt user to update payment method.
  Do not retry — it will not succeed and may worsen standing.

SOFT DECLINES — Retry with schedule
  insufficient_funds → retry in 3–5 days (payday timing)
  generic_decline → retry in 3 days, then 7 days
  do_not_honor (temporary bank block) → retry in 2–3 days
  processing_error → retry in 1 day
  
  Action: Enter retry schedule. Email user in parallel.

AUTHENTICATION REQUIRED — Special handling (EU/SCA)
  authentication_required → 3DS challenge needed
  
  Action: Send "payment confirmation needed" email with 3DS link.
  Cannot retry automatically — user must re-authenticate.
```

### Standard Dunning Timeline

```
DAY 0 — Initial charge fails
  ├── Classify decline (soft / hard / auth required)
  │
  ├── Hard decline:
  │     Email: "Action required — update your payment method"
  │     Subject: "We couldn't process your [Product] payment"
  │     In-product: Non-blocking banner on next login
  │     Action: Prompt immediate payment method update
  │
  ├── Soft decline:
  │     Email: "We had a problem processing your payment"
  │     Subject: "Action required: Payment for [Product] failed"
  │     Body:
  │       "We weren't able to process your Pro subscription."
  │       "Amount: $9.00"
  │       "Your access continues while we retry."
  │       [Update payment method →]
  │     In-product: Non-blocking banner on next login
  │
  └── Auth required (3DS/SCA):
        Email: "Complete payment verification"
        Subject: "Action required: Confirm your [Product] payment"
        Body:
          "Your bank requires you to verify this payment."
          "This only takes 30 seconds."
          [Verify payment →] → 3DS hosted page
        
        Note: Generate a Payment Intent with
        payment_method_options.card.request_three_d_secure = 'any'
        and send the hosted verification URL

DAY 3–5 — Retry #1 (soft declines only)
  ├── Stripe Smart Retries / scheduled job retries charge
  ├── Success → subscription resumed, clear banner, send receipt
  └── Fail → continue to Day 7

DAY 7 — Retry #2 + email reminder
  ├── Retry charge
  ├── Email (2nd notice):
  │     Subject: "Reminder: Your [Product] payment is still failing"
  │     Body:
  │       "We've tried to process your payment twice without success."
  │       "Your access continues for now."
  │       "Please update your payment method to avoid interruption."
  │       [Update payment method →]
  ├── In-product banner escalated:
  │     "Payment issue — your access may be affected soon. Update now."
  ├── Success → resumed, receipt
  └── Fail → continue to Day 14

DAY 14 — Final retry + suspension warning
  ├── Retry charge
  ├── Email (final warning):
  │     Subject: "Your [Product] access will be suspended on [Day 21]"
  │     Body:
  │       "We've been unable to process your payment after 3 attempts."
  │       "Update by [date] to keep your Pro access."
  │       [Update payment method now →]  ← Large, prominent CTA
  │     Send at a time with historically high email open rates
  │     (typically 10am–noon in user's timezone if known)
  ├── In-product: Escalated banner — "7 days until access suspended"
  ├── Success → resumed, receipt
  └── Fail → Day 21 suspension

DAY 21 — Access suspended
  ├── Status → past_due / account_hold (not cancelled)
  ├── Pro features suspended (data preserved)
  ├── Email:
  │     Subject: "Your [Product] Pro access has been suspended"
  │     Body:
  │       "Your Pro access is paused due to a payment issue."
  │       "Update your payment method to restore access immediately."
  │       [Restore access →]
  ├── In-product: Full paywall on Pro features
  │     "Your access is paused — update payment to continue"
  │     [Update payment method →]
  └── Subscription remains recoverable — do NOT cancel yet

DAY 28–30 — Final cancellation
  ├── If no recovery: cancel subscription
  ├── Email:
  │     Subject: "Your [Product] subscription has ended"
  │     "We've cancelled your subscription after being unable
  │      to collect payment over 30 days."
  │     "Your data is preserved. Resubscribe anytime: [link]"
  └── Account moves to free tier (if exists)
      User enters re-engagement sequence (see 05-reengagement-winback.md)
```

### 3DS Re-Authentication Flow (EU/SCA)

SCA regulations require user re-authentication for recurring charges when the issuer demands it. This can't be retried automatically — it requires user action.

```
[Charge fails with authentication_required]
          │
          ▼
[Generate 3DS verification session]
  stripe.PaymentIntent.create(
    amount=900,
    currency='eur',
    customer=customer_id,
    payment_method=payment_method_id,
    confirm=True,
    payment_method_options={
        'card': {'request_three_d_secure': 'any'}
    },
    return_url='https://yourapp.com/payment/verify-complete'
  )
          │
          ▼
[Send verification email to user]
  Subject: "Your bank requires you to verify this payment"
  
  Body:
    "Your bank is requiring additional verification for your
     [Product] subscription renewal."
    
    "This is a one-time step — click below to verify in 30 seconds."
    
    [Verify payment — [Amount] →]  ← Links to Stripe hosted 3DS page
    
    "After verifying, your subscription will renew automatically
     without this step in the future."
          │
          ▼
[User completes 3DS verification]
          │
          ├── Success → charge succeeds, subscription renewed
          └── Fail / abandon → return to dunning sequence Day 0 logic
                (treat as soft decline for retry purposes)
```

**Important SCA note:** Stripe Billing has a built-in 3DS recovery flow via Customer Portal. If using Stripe Billing with Customer Portal enabled, Stripe handles 3DS re-authentication for you and sends its own hosted email. Review whether to use Stripe's built-in flow or build your own — avoid sending duplicate emails.

---

## Part 3 — Payment Method Update UX

The payment update flow is the conversion point of the dunning sequence. Every email and in-product banner leads here.

### Requirements

- **Direct deep link** — email CTA goes directly to payment update page, not to account settings home
- **Context preserved** — page shows the subscription context: "Update your payment method to restore [Product] Pro"
- **Immediate charge on update** — on successful payment method update, charge immediately (don't wait for next billing cycle)
- **Clear outcome** — "After updating, we'll immediately charge $9.00 to restore your access"

### Payment Method Update Page

```
┌─────────────────────────────────────────────────────────────┐
│  Restore your Pro access                                    │
│                                                             │
│  Update your payment method to resume [Product] Pro.       │
│                                                             │
│  Your current method: Visa ending 4242 (payment failed)    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  [Card form — Stripe Payment Element]               │   │
│  │  Or: [PayPal] [Apple Pay] [SEPA Direct Debit]       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  After updating, we'll charge $9.00 immediately            │
│  and restore your access.                                   │
│                                                             │
│  [Update and restore access]                               │
└─────────────────────────────────────────────────────────────┘
```

### Success and Failure States

```
Success:
  "Your Pro access has been restored."
  "Amount charged: $9.00"
  "Next renewal: [date]"
  [Continue to [Product] →]

Failure (new card also declined):
  Error shown inline (specific error copy — see checkout/04-payment-failure-recovery.md)
  Alternative payment methods offered
  "Still having trouble? Contact support: [email]"
```

---

## Part 4 — Recovery Rate Benchmarks

| Dunning Stage | Typical Recovery (% of initially failed charges) |
|--------------|--------------------------------------------------|
| Day 0 (user updates immediately) | 15–20% |
| Day 3–5 retry | 25–35% cumulative |
| Day 7 retry | 35–45% cumulative |
| Day 14 retry | 40–50% cumulative |
| Day 21+ (user updates after suspension) | 50–60% cumulative total |

**Industry context:** A well-run dunning system with Smart Retries + proactive email communication typically recovers 50–65% of all initially failed charges. Products without a dunning sequence recover 10–20% (only users who notice and update voluntarily).

### SEA-Specific Dunning Considerations

E-wallet failures in SEA require different dunning logic because most SEA e-wallets do not support recurring billing — they are one-time charge instruments.

For e-wallet users in SEA, the "dunning sequence" cannot retry the original payment method. Instead:

```
E-wallet payment failure at renewal:
  (GoPay, GCash, Momo, etc. — one-time charge instruments)
          │
          ▼
Day 0 email:
  "Your [Product] subscription couldn't be renewed."
  "GoPay / GCash doesn't support automatic renewal."
  "To continue Pro, you have two options:"
  
  Option A: "Pay with GoPay for another month"
    [Pay now with GoPay →] → redirects to wallet checkout
  
  Option B: "Add a card for automatic renewal"
    [Add payment card →] → card form
  
  "Your access continues for 7 days while you decide."
```

This is fundamentally a re-subscription prompt, not a retry prompt. The user must actively initiate the next payment — there is no automated recovery path.

This is why the recommended strategy for SEA recurring billing is to use Google Play IAP (which handles local wallet billing natively) or encourage card-on-file at signup.

---

*Last updated: April 2026*
