# Stripe

> Part of the Payment Gateways series. See [payment-gateways.md](../payment-gateways.md) for the full index.

---

## What It Is

Stripe is a full-stack payment platform — gateway, acquirer, subscription billing engine, fraud tool, tax calculator, and financial reporting layer in one. It is the default choice for most SaaS products and the benchmark against which all other gateways are measured for developer experience.

Founded in 2010, Stripe is available to merchants in 47+ countries. It processes payments in 135+ currencies and supports 100+ payment methods across its global network.

**Core products relevant to B2C SaaS:**
- **Stripe Payments** — payment processing (one-time and recurring)
- **Stripe Billing** — subscription management, invoicing, trials, proration, dunning
- **Stripe Radar** — ML-based fraud detection
- **Stripe Tax** — automated tax calculation and collection (VAT, GST, sales tax)
- **Stripe Identity** — identity verification (KYC)
- **Stripe Sigma** — SQL-based reporting on payment data
- **Stripe Connect** — marketplace and platform payments

---

## Market & Method Coverage

### Merchant availability (where you can create a Stripe account):
Australia, Austria, Belgium, Brazil, Bulgaria, Canada, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Ghana, Gibraltar, Greece, Hong Kong, Hungary, India, Indonesia, Ireland, Italy, Japan, Latvia, Liechtenstein, Lithuania, Luxembourg, Malaysia, Malta, Mexico, Netherlands, New Zealand, Nigeria, Norway, Philippines, Poland, Portugal, Romania, Singapore, Slovakia, Slovenia, Spain, Sweden, Switzerland, Thailand, United Arab Emirates, United Kingdom, United States.

### Payment methods by region (as of 2025–2026):

**Global:**
Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, PayPal, Link (Stripe's accelerated checkout)

**Europe:**
SEPA Direct Debit, iDEAL, Bancontact, SOFORT/Klarna, Klarna (BNPL), BLIK, Przelewy24, Swish, Giropay, EPS (Austria), Multibanco (Portugal), MB WAY (Portugal)

**Southeast Asia:**
GrabPay (Singapore, Malaysia), PayNow (Singapore), FPX (Malaysia), PromptPay (Thailand), GoPay (Indonesia), OVO (Indonesia), Dana (Indonesia), QRIS (Indonesia), GCash (Philippines), Maya (Philippines)

**Others:**
WeChat Pay, Alipay, ACH Direct Debit (US), Canadian pre-authorised debit, OXXO (Mexico), Boleto (Brazil)

**Note on SEA coverage depth:** Stripe's SEA local method support is growing but not as deep as Xendit. Stripe handles the tier-1 SEA methods (GrabPay, PayNow, PromptPay, GCash) but may lack coverage for secondary wallets (OVO, Dana, TrueMoney, Momo) and virtual accounts that Xendit handles natively.

---

## Pricing

### Standard rates (indicative — verify current rates at stripe.com/pricing):

| Market | Card Processing | Notes |
|---|---|---|
| US | 2.9% + $0.30 | Standard blended rate |
| EU | 1.5% + €0.25 (EU cards) / 2.9% + €0.25 (non-EU) | Lower rate for EU-issued cards |
| UK | 1.5% + 20p (UK cards) / 2.9% + 20p (non-UK) | |
| SG | 3.4% + S$0.50 | |
| MY | 3.4% + MYR 2.00 | |
| TH | 3.65% | |
| ID | 3.4% + IDR 2,000 | |
| PH | 3.5% + PHP 15 | |

**Additional fees:**
- International card surcharge: +1.5% for cards issued outside the processing country
- Currency conversion: +1% if currency conversion required
- SEPA Direct Debit: €0.80 per transaction (capped at €5, with €4 dispute fee)
- Stripe Billing: 0.5–0.8% of recurring revenue (waived at higher Stripe plan tiers)
- Stripe Tax: 0.5% of transactions where tax is calculated

**Volume discounts:** Negotiable at ~$250K+/year in processing volume. Stripe's enterprise team can offer custom interchange++ or blended rates below standard pricing.

**Stripe Billing fee nuance:** The 0.5% Billing fee on top of payment processing is easy to overlook when estimating total cost. On a $10/month subscription, 0.5% is $0.05 — minor. On a $10M/year subscription business, it is $50,000/year. Understand the total fee stack before committing at scale.

---

## Stripe Billing — SaaS Subscription Features

Stripe Billing is the most complete out-of-the-box subscription management layer available in a payment gateway. Key features:

### Products & Prices
```
Products: Define what you sell (e.g., "Pro Plan")
Prices: Define how you charge for it
   → Flat rate: $9.99/month
   → Tiered: first 100 units at $X, next 100 at $Y
   → Usage-based (metered): charge per unit reported
   → Per-seat: price multiplied by quantity
   → Multiple currencies: set prices in each currency independently
```

### Subscriptions & Trials
- Free trial (no card, or with card): configurable trial days
- Trial end behaviour: auto-charge, prompt to add payment method, or cancel
- Subscription lifecycle: active, trialing, past_due, canceled, unpaid, paused
- Pause subscriptions (without cancellation) — built-in feature
- Subscription schedules: plan future tier changes, price increases, trial-to-paid transitions

### Proration
Stripe calculates prorations automatically when a subscription tier changes mid-cycle:
- Upgrade: immediate charge for the prorated difference
- Downgrade: credit applied to next invoice

Proration behaviour is configurable (immediate, next cycle, or none).

### Invoicing
- Automatic invoice generation for every subscription charge
- PDF invoices with customisable branding (logo, colour, memo)
- Manual invoice creation for one-time charges
- Invoice payment links for customers who prefer to pay manually
- Net payment terms (e.g., pay within 30 days)

### Dunning & Smart Retries
- **Smart Retries:** ML-based retry timing for failed subscription charges — Stripe's system analyses optimal retry windows based on card issuer patterns. Documented to recover a meaningful percentage of failed charges vs. fixed-interval retries.
- **Customer Portal:** A hosted, no-code portal where customers can manage their own subscription: update payment method, view invoices, cancel, or upgrade. Embeds in your product with a single link. Eliminates the need to build a full subscription management UI from scratch.
- **Dunning emails:** Configurable sequence of automated emails for failed payment recovery.

### Metered / Usage-Based Billing
Stripe Billing supports usage-based pricing:
- Report usage via API (e.g., "this customer used 500 API calls this period")
- Stripe aggregates usage and generates invoices accordingly
- Supports sum, max, and last-value aggregation modes
- Ideal for credit/token models and consumption-based products

---

## Stripe Radar — Fraud Detection

Stripe Radar is an ML fraud detection system trained on data from the entire Stripe network (processing trillions of dollars annually). It scores every transaction for fraud risk and can:

- Block high-risk transactions automatically
- Route transactions to 3DS challenge based on risk score
- Maintain allow/block lists (trusted customers, known fraud patterns)
- Custom rules (e.g., "block all transactions from IP ranges associated with past fraud")

For B2C SaaS, Radar is primarily relevant for:
- Blocking credit card testing attacks (fraudsters testing stolen cards via small charges)
- Reducing chargeback rates (high-risk transactions declined before they become disputes)

Radar is included in standard Stripe pricing (Radar for Fraud Teams with custom rules is $0.02/screened transaction additional).

---

## Stripe Tax

Stripe Tax automatically calculates, collects, and reports the right amount of tax based on the customer's location and the product type. Supports:
- EU VAT (including OSS rules for cross-border digital services)
- UK VAT
- US sales tax (state-by-state)
- Australian GST
- Canadian GST/PST/HST
- Singapore GST
- And 50+ other jurisdictions

**How it works:**
1. Enable Stripe Tax on your Stripe account
2. Add your product's tax code (e.g., "Software as a Service")
3. Stripe calculates the appropriate tax on each transaction based on customer location
4. Tax is collected as part of the transaction
5. Stripe generates tax reports for each jurisdiction for filing

**Cost:** 0.5% of each transaction where tax is calculated.

**Limitation:** Stripe Tax calculates and collects; it does not file on your behalf. You still need to file returns (manually or via a tax compliance tool like Quaderno, Avalara, or a local accountant). For full outsourcing of tax compliance including filing, Paddle (Merchant of Record) is the alternative.

---

## Stripe Connect — If You Need Marketplace Features

If your product ever involves paying out to other parties (creators, service providers, sellers), Stripe Connect handles the payout infrastructure:
- Split payments: charge customer, distribute to connected accounts
- Instant payouts: near-real-time payouts to bank accounts
- KYC/onboarding for connected accounts (Stripe handles identity verification)

Not relevant for a standard SaaS product but worth knowing if your product evolves toward a marketplace or platform model.

---

## Integration

### Stripe.js + Payment Element
The recommended front-end integration for most B2C products:

```javascript
// Stripe.js initialisation
const stripe = Stripe('pk_live_...');
const elements = stripe.elements({ clientSecret });

// Payment Element — renders the optimal payment method UI
// for the customer's location and device automatically
const paymentElement = elements.create('payment');
paymentElement.mount('#payment-element');

// Confirm payment on form submit
const { error } = await stripe.confirmPayment({
  elements,
  confirmParams: { return_url: 'https://yourapp.com/success' }
});
```

The **Payment Element** is Stripe's adaptive payment UI — it automatically shows the most relevant payment methods for the customer's location (iDEAL for Dutch users, BLIK for Polish users, GrabPay for Singaporean users, etc.) without requiring you to manually list every payment method. This is the recommended integration approach rather than manually adding individual payment method integrations.

### Stripe Customer Portal
```javascript
// Create portal session on your backend
const session = await stripe.billingPortal.sessions.create({
  customer: customerId,
  return_url: 'https://yourapp.com/account',
});
// Redirect user to session.url
```
The Customer Portal handles: view subscription details, update payment method, view invoice history, cancel subscription, upgrade/downgrade (if configured). Eliminates need to build this UI yourself.

### Webhooks
```javascript
// Verify webhook signature
const event = stripe.webhooks.constructEvent(
  req.body, sig, process.env.STRIPE_WEBHOOK_SECRET
);

// Handle key events
switch (event.type) {
  case 'payment_intent.succeeded':       // grant access
  case 'invoice.payment_failed':         // trigger dunning
  case 'customer.subscription.deleted':  // revoke access
  case 'customer.subscription.updated':  // handle tier change
  case 'invoice.payment_succeeded':      // send receipt
}
```

### SDKs
Official Stripe SDKs: Node.js, Python, Ruby, PHP, Java, Go, .NET. iOS and Android SDKs for mobile payment flows.

---

## Limitations

- **SEA local method depth:** Stripe is improving but Xendit has deeper coverage for secondary wallets (OVO, Dana, TrueMoney, Momo) and virtual accounts across SEA.
- **Cost at high volume:** Blended pricing becomes more expensive than Adyen's interchange++ model above ~$10M/year in processing volume (varies by product mix).
- **Stripe Billing fee:** The 0.5–0.8% additional fee on recurring revenue is a cost to model explicitly.
- **Settlement timing:** 2-day standard settlement in most markets; instant payouts available at additional cost. Slower than some regional gateways for day-to-day cash flow at early stage.
- **Support:** Stripe's support is email/chat — no dedicated account manager at standard tier. Enterprise tier gets dedicated support. Self-serve documentation is excellent.
- **Restricted business categories:** Stripe has restrictions on certain business types. Review Stripe's restricted and prohibited businesses list to confirm eligibility.

---

## Best Fits

- B2C SaaS products at any stage — launch through scale
- Products targeting global, European, and Singapore/Malaysia/Thailand markets as primary
- Products that want full subscription billing, trials, dunning, and tax in a single integration
- Teams that prioritise developer experience and self-serve setup speed
- Products that need the Payment Element's adaptive local method display without managing each method individually

---

*Last updated: April 2026*
