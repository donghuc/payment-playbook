# Gateway Selection Framework & Multi-Gateway Architecture

> Part of the Payment Gateways series. See [payment-gateways.md](../payment-gateways.md) for the full index.

---

## Gateway Selection Framework

Choosing gateways is a function of five variables: your target markets, your payment method requirements, your subscription model complexity, your transaction volume, and your engineering capacity.

### Decision Tree

```
Step 1: What are your primary markets at launch?
├── Global / EU primary → Start with Stripe alone
├── SEA primary (SG/MY/TH) → Stripe covers these adequately
└── SEA primary (ID/PH/VN) → Stripe + Xendit from day one

Step 2: What is your revenue model?
├── Subscription → Stripe Billing (most complete)
├── Credit/Token → Stripe (global) + Xendit (SEA one-time top-ups)
├── One-time → Stripe + Xendit sufficient
└── Marketplace → Stripe Connect or Adyen for Platforms

Step 3: What is your transaction volume?
├── <$100K/month → Stripe alone (blended pricing fair)
├── $100K–$1M/month → Stripe primary; evaluate GoCardless for EU SEPA
└── >$1M/month → Evaluate Adyen for interchange++ savings

Step 4: What is your engineering capacity?
├── Small team / solo → Stripe only (one integration)
├── Mid-size team → Stripe + Xendit
└── Dedicated payment team → Stripe + Xendit + Adyen/GoCardless

Step 5: Do you need to outsource tax compliance?
├── Yes (no finance team, selling globally) → Paddle or Lemon Squeezy
└── No (tax infrastructure in place) → Stripe Tax + Stripe/Xendit
```

---

## Multi-Gateway Architecture

Running more than one gateway requires architectural decisions around routing, reconciliation, and failure handling.

### Payment Routing Layer

The routing layer sits between your product's checkout and the individual gateways. Its job: determine which gateway handles each transaction based on payment method, user geography, and business rules.

```
┌──────────────────────────────────────┐
│         Your Product Checkout        │
└──────────────────┬───────────────────┘
                   │ Payment intent created
                   ▼
┌──────────────────────────────────────┐
│         Payment Routing Layer        │
│  (your backend or orchestration tool)│
│                                      │
│  if method == SEA_local_wallet:      │
│     → route to Xendit                │
│  elif method == SEPA:                │
│     → route to Stripe or GoCardless  │
│  elif method == card:                │
│     → route to Stripe (primary)      │
│     → fallback to Adyen if decline   │
│  else:                               │
│     → route to Stripe (default)      │
└──────┬──────────────────┬────────────┘
       │                  │
       ▼                  ▼
  ┌─────────┐        ┌─────────┐
  │ Stripe  │        │ Xendit  │
  └─────────┘        └─────────┘
```

**Simple routing implementation (Stripe + Xendit):**

You don't need a sophisticated orchestration tool at early stage. Routing logic can live directly in your backend:

```python
def create_payment_intent(payment_method, user_country, amount, currency):
    SEA_LOCAL_METHODS = ['gopay', 'ovo', 'dana', 'gcash', 'maya',
                         'truemoney', 'momo', 'virtual_account', 'qris']

    if payment_method in SEA_LOCAL_METHODS:
        return xendit.create_invoice(amount, currency, payment_method)
    else:
        return stripe.payment_intents.create(amount, currency,
                                             payment_method_types=[payment_method])
```

**Advanced routing (payment orchestration):** At scale, consider payment orchestration platforms — Spreedly, Gr4vy, or Rapyd — that provide a single API abstraction over multiple gateways with built-in routing rules, failover logic, and unified reporting.

---

### Subscription State Machine

In a multi-gateway architecture, your product must own the subscription state machine — not delegate it entirely to any single gateway. This is because:
- A subscriber might pay via Stripe in month 1 (card) and Xendit in month 3 (new e-wallet)
- A payment might succeed in one gateway and fail in another
- Gateway-specific subscription IDs don't translate across providers

**Your subscription state (in your database):**

```
Subscription {
  id: UUID (your internal ID)
  user_id: UUID
  plan_id: string
  status: enum [trialing, active, past_due, canceled, paused]
  current_period_start: datetime
  current_period_end: datetime
  payment_gateway: enum [stripe, xendit, app_store, play_store]
  gateway_subscription_id: string (gateway-specific reference)
  payment_method_type: string
  last_payment_status: enum [succeeded, failed, pending]
  created_at: datetime
  updated_at: datetime
}
```

Your product's access control reads from **your subscription table**, not from the gateway's subscription API. Gateway webhooks update your subscription table; your product never queries the gateway in real-time for access decisions.

---

### Webhook Architecture (Multi-Gateway)

In a multi-gateway setup, webhooks arrive from multiple sources. Each gateway has its own signature format, event naming convention, and delivery behaviour.

**Unified webhook handler pattern:**

```
POST /webhooks/stripe   → Stripe webhook handler
POST /webhooks/xendit   → Xendit webhook handler
POST /webhooks/apple    → App Store Server Notification handler
POST /webhooks/google   → Google Play Real-Time Notification handler
```

Each handler:
1. Verifies the webhook signature (gateway-specific)
2. Parses the event
3. Translates to a normalised internal event format
4. Updates your subscription state table
5. Triggers downstream actions (grant access, send receipt, trigger dunning)

**Normalised internal event format (example):**
```python
InternalPaymentEvent {
  event_type: enum [payment_succeeded, payment_failed, subscription_cancelled,
                    subscription_renewed, refund_created, dispute_opened]
  user_id: UUID
  subscription_id: UUID
  amount: integer (in smallest currency unit)
  currency: string
  gateway: enum [stripe, xendit, apple, google]
  gateway_event_id: string
  occurred_at: datetime
}
```

**Idempotency:** Gateways may deliver the same webhook more than once (retry on your failure to acknowledge). Always check if an event has already been processed before acting on it. Use the `gateway_event_id` as a deduplication key.

**Webhook acknowledgement:** Always return HTTP 200 immediately on webhook receipt. Do processing asynchronously (queue). If your webhook handler takes too long to respond, the gateway will time out and retry — causing duplicate processing.

---

### Fallback & Retry Logic

**Gateway-level fallback (for card payments):**
If your primary gateway (Stripe) declines a card transaction, you can retry on a secondary gateway (Adyen) before presenting failure to the user. This is called "cascade routing" and can recover 1–3% of transactions that are falsely declined by one acquirer but would be approved by another (due to different acquiring bank relationships).

```
Card charge → Stripe
   └── If declined (issuer decline, not fraud):
          → Retry on Adyen
          └── If declined: present failure to user
```

This requires careful implementation — only retry on "soft" declines (insufficient funds, temporary hold) not "hard" declines (stolen card, fraud block). Retrying hard declines escalates fraud risk.

**Subscription retry (dunning):**
For failed recurring charges, implement a retry sequence:
- Day 0: Initial failure
- Day 3: Retry #1 (Stripe Smart Retries handles this automatically)
- Day 7: Retry #2
- Day 14: Retry #3 + access suspension warning
- Day 21: Final retry + access suspended
- Day 30: Account offboarding if no recovery

For multi-gateway subscriptions, the retry must use the same gateway that holds the payment method token (tokens are gateway-specific and cannot be transferred).

---

### Currency & Settlement Architecture

**Multi-currency pricing:**
Store prices in your database in the smallest unit of each supported currency (cents, satoshi equivalent for each currency). Never calculate prices by converting from USD at runtime — rates fluctuate and this creates inconsistent user-facing prices.

```
Price table:
  plan_id | currency | amount_in_smallest_unit | billing_cycle
  pro     | USD      | 900                     | monthly
  pro     | EUR      | 900                     | monthly
  pro     | SGD      | 1200                    | monthly
  pro     | IDR      | 120000                  | monthly
  pro     | VND      | 200000                  | monthly
```

Update these periodically (quarterly or on significant FX movement) — not dynamically.

**Settlement currencies:**
Stripe settles in the currency of your Stripe account's country (or a configured payout currency). Xendit settles in the local currency of each country (IDR, PHP, etc.) and transfers to your configured payout bank account.

Plan your banking infrastructure: you'll need bank accounts (or virtual bank accounts via a multi-currency fintech like Wise, Airwallex, or Payoneer) to receive settlements in USD, EUR, SGD, IDR, PHP, etc., and convert/consolidate to your operating currency.

**Airwallex** and **Wise Business** are both worth evaluating for multi-currency collection and FX conversion — they offer significantly better rates than traditional bank FX conversion, which can add up to a material cost at volume.

---

### PCI DSS Compliance

PCI DSS (Payment Card Industry Data Security Standard) applies to any business that processes, stores, or transmits cardholder data. The compliance level depends on transaction volume and how card data is handled.

**The easy path (SAQ A):**
If you never touch raw card data — all card handling is done via hosted payment pages, Stripe.js / Payment Element, or tokenisation APIs — you qualify for the simplest PCI compliance level (SAQ A, Self-Assessment Questionnaire A). Stripe, Xendit, and all major gateways are designed to enable this: card data goes directly from the user's browser to the gateway, never passing through your servers.

**What this means in practice:**
- Never log card numbers, CVV codes, or full PANs
- Never store card data in your own database
- Always use gateway-provided front-end components (Stripe Elements, Xendit.js) that handle card data client-side
- Use gateway-provided tokens for recurring charges, never raw card numbers

**Annual SAQ A self-assessment** is still required at most card network volumes. Stripe and most gateways provide guidance documentation for this process.

---

### App Store / Google Play IAP Architecture

For mobile-first products in SEA, App Store and Google Play IAP bypass the gateway complexity entirely for mobile users. The platform handles payment method, currency, and recurring billing.

**The trade-off:**
- ✅ Platform handles SEA local wallet, QR, and carrier billing integration
- ✅ Platform handles recurring billing state machine and retries
- ✅ No PCI compliance exposure for mobile transactions
- ❌ 15–30% platform commission on all IAP revenue
- ❌ Limited ability to offer promotions, custom pricing, or referral discounts
- ❌ Revenue reporting and reconciliation is from the platform, not your own data

**Hybrid IAP + direct billing architecture:**
Many products run IAP for mobile acquisition and direct billing (Stripe/Xendit) for web. This is called the "web checkout loophole" — encouraging users to subscribe via your web product (where you keep 97–100% of revenue) rather than via in-app (where you keep 70–85%). This practice is now in a complex legal/policy environment: Apple has historically resisted it; court decisions (Epic v. Apple) and EU Digital Markets Act enforcement are reshaping the rules. Monitor current platform policy before implementing.

---

### Reconciliation

Reconciliation is the process of matching your internal subscription records against gateway settlement reports to ensure every charge is correctly reflected in your accounts.

**Daily reconciliation process:**
1. Pull settlement report from each gateway (Stripe dashboard / API, Xendit dashboard)
2. Match each settlement line item to your internal subscription event
3. Flag discrepancies (charges with no matching subscription, subscriptions with no matching charge)
4. Reconcile refunds and chargebacks against original charges
5. Confirm bank receipt of settled funds

At early stage, this can be done manually (Stripe's and Xendit's dashboards have export functionality). At scale, use accounting integrations: Stripe has native integrations with QuickBooks, Xero, and NetSuite. Xendit has CSV exports compatible with most accounting software.

**Chargeback tracking:**
Monitor chargeback rate per gateway. Card networks penalise merchants with chargeback rates above 1% (Visa) or 0.9% (Mastercard) of transactions. Sustained high chargeback rates can result in gateway account termination. Radar (Stripe) and gateway-level fraud rules are your primary defence.

---

## Recommended Implementation Sequence

```
Phase 1 — Launch:
   Integrate Stripe (Payments + Billing + Tax)
   Enable: Cards, PayPal, Apple Pay, Google Pay, SEPA, iDEAL, Bancontact
   Subscription: Stripe Billing (plans, trials, proration, dunning)
   Tax: Stripe Tax enabled from day one
   Mobile: App Store + Google Play IAP

Phase 2 — SEA scale (when SEA users > 20% of user base):
   Integrate Xendit
   Add routing logic: SEA local methods → Xendit
   Enable: GoPay, OVO, Dana (ID), GCash, Maya (PH), TnG (MY), PromptPay (TH), Momo (VN)
   Annual billing emphasis for markets without recurring wallet support

Phase 3 — EU optimisation (when EU subscribers > 5,000):
   Evaluate GoCardless for SEPA Direct Debit
   Add mandate setup flow alongside card checkout for EU users
   Run cost comparison: GoCardless SEPA vs. Stripe SEPA at current volume

Phase 4 — Scale (>$10M/year processing):
   Evaluate Adyen for interchange++ pricing
   Implement payment orchestration layer (Spreedly or Gr4vy)
   Negotiate custom rates with Stripe
   Consider Adyen local acquiring for key markets
```

---

*Last updated: April 2026*
