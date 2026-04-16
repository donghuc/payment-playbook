# Payment Failure & Recovery Flows

> Part of the Checkout UX series. See [checkout-ux.md](../checkout-ux.md) for the full index.

---

## Overview

Payment failures fall into two categories with distinct UX requirements:

1. **Checkout failure** — payment fails during the initial subscription or purchase attempt
2. **Renewal failure (involuntary churn)** — a recurring charge fails after the subscription is established

Both require immediate, actionable communication. Silent failures — where the payment fails and the user is not informed — are the most damaging: they generate chargebacks, support tickets, and lost revenue without giving the user any chance to recover.

---

## Part 1 — Checkout Payment Failure

### Failure at Initial Subscription

When a payment fails during checkout, the user is still on the checkout page. This is the easiest recovery scenario — the user is present and motivated.

```
[User submits payment]
          │
          ▼
[Gateway processes — 2–5 seconds]
          │
          ▼
[Payment declined / error returned]
          │
          ▼
[Checkout page — error state]
  ├── Error displayed in-context (near payment form, not at top of page)
  ├── Error message: specific and actionable (see error copy below)
  ├── Payment form remains pre-filled (do not clear all fields — only CVC)
  ├── CTA re-enabled for retry
  └── Alternative payment methods shown:
        "Having trouble with this card? Try a different payment method."
        [PayPal] [Apple Pay] [Different card]
```

**The pre-filled form principle:** After a card decline, clear only the CVC field (security requirement) — not the card number or expiry. Making the user re-enter all fields to retry is unnecessary friction that compounds the frustration of the decline.

**Alternative payment method prompt:** A user whose card is declined is a motivated buyer who cannot complete the purchase via their intended method. Surfacing an alternative (PayPal, Apple Pay, a different card) at this exact moment captures a meaningful percentage of recoverable conversions that would otherwise abandon.

### Failure-Specific Error Copy

```
card_declined (generic):
  Header: "Your card was declined"
  Body:   "Please try a different card or contact your bank for more information."
  Action: "Try a different card"

insufficient_funds:
  Header: "Insufficient funds"
  Body:   "Your card doesn't have enough funds to complete this purchase."
  Action: "Try a different card or payment method"

do_not_honor / generic bank decline:
  Header: "Your bank declined this transaction"
  Body:   "This may be a security block on your card. Please contact your bank
           or try a different card."
  Action: "Try a different card"

card_expired:
  Header: "This card has expired"
  Body:   "Please enter a card with a valid expiry date."
  Action: (focus on expiry date field directly)

incorrect_cvc:
  Header: "Incorrect security code"
  Body:   "Please check the 3-digit code on the back of your card."
  Action: (focus on CVC field directly)

3ds_cancelled / authentication_required:
  Header: "Authentication not completed"
  Body:   "Please complete the bank verification step to proceed."
  Action: "Try again"

processing_error (gateway error):
  Header: "Something went wrong"
  Body:   "There was a temporary issue processing your payment. Please try again."
  Action: "Try again"

wallet_insufficient_balance (SEA e-wallet):
  Header: "Your [GoPay / GCash / wallet name] balance is insufficient"
  Body:   "Please top up your wallet and try again, or use a different payment method."
  Action: "Try a different method"

wallet_authentication_failed (SEA e-wallet):
  Header: "Payment not confirmed"
  Body:   "The payment was not confirmed in your [wallet name] app.
           Please try again and tap 'Confirm' in the app."
  Action: "Try again"
```

### Checkout Retry Limit

After 3 failed attempts with the same card, surface a stronger alternative method prompt and optionally suggest the user contact support:

```
[After 3rd failure with same card]
  ├── "This card appears to be unavailable for this purchase."
  ├── "Please try a different payment method."
  ├── Alternative methods prominently shown
  └── "Need help? Contact support: [email / chat]"
```

Do not allow unlimited retries on the same card without limit — this creates card-testing attack surface for fraudsters.

---

## Part 2 — Recurring Charge Failure (Involuntary Churn)

Involuntary churn — subscriptions that lapse because a recurring charge fails — accounts for 20–40% of total subscription churn in most B2C SaaS products. The primary causes:
- Card expiry (most common)
- Card replacement (lost/stolen card → new number)
- Insufficient funds
- Bank fraud block
- Wallet balance insufficient (SEA)

The dunning sequence is the UX and operational response to these failures.

### Dunning Sequence

```
Day 0 — Charge fails
  ├── Immediate email to user:
  │     Subject: "Action required: Payment for [Product] failed"
  │     Body:
  │       "We weren't able to process your [Pro] subscription payment."
  │       "Amount: $9.00"
  │       "Reason: [Card declined / Insufficient funds / Card expired]"
  │       "Your access continues while we retry."
  │       [Update payment method →]
  │
  ├── In-product notification (on next login):
  │     Banner: "Your last payment failed — update your payment method to keep access"
  │     [Update now →]
  │
  └── Stripe Smart Retries automatically schedules first retry
      (optimal retry timing determined by Stripe ML — typically 3–5 days)

Day 3–5 — Retry #1
  ├── Stripe retries charge automatically
  ├── If success: subscription resumes, send receipt, clear banner
  └── If fails: continue to Day 7

Day 7 — Retry #2
  ├── Stripe retries charge automatically
  ├── Email reminder (2nd notice):
  │     Subject: "Reminder: Update your payment to avoid losing access"
  │     Body: Same core message + urgency: "Your access may be suspended soon."
  │     [Update payment method →]
  ├── If success: subscription resumes, send receipt, clear banner
  └── If fails: continue to Day 14

Day 14 — Final retry + suspension warning
  ├── Stripe retries charge automatically
  ├── Email (final warning):
  │     Subject: "Your [Product] access will be suspended on [Day 21]"
  │     Body: "We've tried to process your payment 3 times without success."
  │     "Update your payment method by [date] to keep Pro access."
  │     [Update payment method →]  ← Large, prominent CTA
  ├── In-product banner escalated: "Your access suspends in 7 days"
  ├── If success: subscription resumes, send receipt, clear banner
  └── If fails: access suspended on Day 21

Day 21 — Access suspended
  ├── Subscription status → past_due or unpaid (not cancelled)
  ├── Access to paid features suspended (not account deleted)
  ├── Data preserved
  ├── Email:
  │     Subject: "Your [Product] access has been suspended"
  │     "Your Pro access has been paused due to a payment issue."
  │     "Update your payment method to restore access immediately."
  │     [Restore access →]
  ├── In-product: Full paywall on Pro features
  │     "Your access is paused — update payment to continue"
  │     [Update payment method →]
  └── Subscription remains recoverable (not cancelled)

Day 30 — Final offboarding
  ├── If still no payment recovery: subscription cancelled
  ├── Email:
  │     Subject: "Your [Product] subscription has ended"
  │     "We've cancelled your subscription after being unable to collect payment."
  │     "Your data is preserved for [30 days / your retention period]."
  │     "You can resubscribe anytime: [link]"
  └── Account moved to free tier (if exists) or deactivated
```

### Payment Method Update Flow

The payment method update CTA in dunning emails and in-product banners must link to a simple, direct update flow — not to the general account settings page.

```
[User clicks "Update payment method" from email or in-product]
          │
          ▼
[Payment method update page — not full account settings]
  ├── Context: "Update your payment method to restore [Product] Pro access"
  ├── Current failed method shown: "Card ending 4242 — failed"
  ├── New payment method form:
  │     [Card form — full, standard]
  │     OR [Choose different payment method — PayPal / SEPA / etc.]
  ├── Billing summary:
  │     "After updating, we'll immediately charge $9.00 to restore your access"
  └── CTA: "Update and restore access"
          │
          ▼
[Processing]
          │
          ├── Success:
          │     Immediate charge on new payment method
          │     If charge succeeds: subscription restored
          │     "Your Pro access has been restored"
          │     CTA: "Continue to [Product]"
          │
          └── Failure:
                Error shown in context
                Alternative methods offered
```

**Direct email link to update form is critical.** Sending users to a generic settings page from a payment failure email adds unnecessary navigation steps. The email CTA should deep-link to the payment update page pre-loaded with context.

---

## Grace Period Design

A grace period is a defined window after a failed charge where the user retains access while recovery is attempted. This is a UX and business decision:

**Grace period options:**
- **No grace period:** Access suspended immediately on first failure. Aggressive; generates more support tickets and resentment. Not recommended for SaaS.
- **7-day grace period (standard):** Access continues for 7 days while retrying and communicating. Stripe's default dunning window.
- **14-day grace period (generous):** More time for recovery; particularly appropriate for annual billing subscribers or high-value users.

**In-product grace period indicator:**
```
[Non-blocking banner during grace period]
"Payment issue — your access continues until [date]. Update payment method."
[Update now →]                    [Dismiss ×]
```

The banner should be dismissible — forcing an undismissable payment banner on every product screen during the grace period is disruptive and damages the product experience. One prominent banner per session is sufficient.

---

## Failed Payment UX for SEA E-Wallets

SEA e-wallet payment failures have different characteristics than card failures and require specific UX handling.

**Failure types unique to e-wallets:**
- **Insufficient wallet balance** — most common; user hasn't topped up
- **Authentication abandoned** — user didn't confirm in the wallet app before timeout
- **Wallet app crash / network interruption** — redirect failed
- **Transaction limit exceeded** — wallet has daily/transaction limits
- **Unverified wallet account** — transaction limit for unverified accounts

**E-wallet failure at checkout:**
```
[User selects GoPay / GCash / Momo → redirected to wallet app]
          │
          ▼
[Wallet app: user abandons or authentication fails]
          │
          ▼
[Redirect back to your checkout — failure state]
  ├── Clear failure message:
  │     "Your [GoPay] payment was not completed."
  │     (Don't say "declined" for wallet — "not completed" is more accurate)
  ├── Specific guidance based on failure type if determinable:
  │     Insufficient balance: "Your wallet balance may be insufficient.
  │                            Top up GoPay and try again."
  │     Abandoned/timeout:    "The payment was not confirmed in your app.
  │                            Please try again and confirm the payment."
  ├── Retry CTA: "Try GoPay again"
  └── Alternative: "Use a different payment method"
```

**Network interruption handling (SEA-specific):**
On mobile connections in Indonesia, Philippines, and Vietnam, redirect flows can fail silently — the user completes payment in the wallet app but the callback to your system fails due to network interruption. The user believes they paid; your system thinks they didn't.

```
[User completes payment in wallet app — callback fails]
          │
          ▼
[User lands back on checkout — appears to still be pending]

UX requirement:
  ├── Show "Payment verification in progress" state (not "failed")
  ├── Poll for payment status for 30 seconds
  │     "We're confirming your payment — please wait…"
  ├── If payment confirmed via delayed callback: proceed to success
  ├── If still unconfirmed after 30 seconds:
  │     "We haven't received confirmation yet."
  │     "This can sometimes take a few minutes."
  │     [Check payment status] ← triggers manual status lookup
  │     [Try a different method]
  └── Backend: reconcile against Xendit / 2C2P webhook with extended timeout
```

**Proactive reconciliation:** Run a background job that checks pending payment statuses every 5 minutes for up to 2 hours after a pending state. If the wallet payment is confirmed via delayed webhook, activate the subscription and send a confirmation email — even if the user has navigated away.

---

*Last updated: April 2026*
