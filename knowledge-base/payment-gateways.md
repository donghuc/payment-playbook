# Payment Gateways & Infrastructure — Reference Index

> Context: B2C SaaS/App targeting Southeast Asia, Europe, and Global markets.
> This document is a living index. Each gateway links to its own deep-dive file.

---

## What is a Payment Gateway?

A payment gateway is the infrastructure layer that sits between your product and the financial system. It handles payment method acceptance, fraud screening, currency conversion, recurring billing logic, and settlement to your bank account. Choosing the right gateway — or combination of gateways — determines which payment methods you can offer, what your transaction costs are, and how complex your payment engineering needs to be.

**Gateway vs. Acquirer vs. Processor:** Some gateways are also their own acquirer (they process the transaction directly with card networks). Others route through third-party acquirers. Stripe and Adyen are both gateway and acquirer. This distinction matters for pricing (interchange++ vs. blended rates) and settlement speed.

**Merchant of Record (MoR):** Some platforms (Paddle, Lemon Squeezy) act as the legal seller of your product, handling tax registration, VAT remittance, invoicing, and chargebacks globally. This trades higher fees for significant compliance overhead reduction — particularly valuable for early-stage teams selling globally without dedicated finance/legal resources.

---

## Gateway Comparison Matrix

| Gateway | Global | SEA | EU | Recurring | SaaS Billing | Self-Serve | Best For |
|---|---|---|---|---|---|---|---|
| **Stripe** | ✅ | ✅ Partial | ✅ Full | ✅ | ✅ Full | ✅ Yes | Most B2C SaaS |
| **Adyen** | ✅ | ✅ Full | ✅ Full | ✅ | ✅ | ⚠️ Enterprise | High-volume / Enterprise |
| **Xendit** | ❌ | ✅ Full | ❌ | ⚠️ Limited | ⚠️ | ✅ Yes | SEA local methods |
| **2C2P** | ⚠️ | ✅ Full | ⚠️ | ⚠️ Limited | ⚠️ | ⚠️ | Thailand + SEA orchestration |
| **Midtrans** | ❌ | ✅ ID | ❌ | ⚠️ | ⚠️ | ✅ | Indonesia specialist |
| **PayMongo** | ❌ | ✅ PH | ❌ | ⚠️ | ⚠️ | ✅ | Philippines specialist |
| **Mollie** | ⚠️ | ❌ | ✅ EU | ✅ | ⚠️ | ✅ | Netherlands / Belgium focus |
| **GoCardless** | ⚠️ | ❌ | ✅ EU | ✅ Best-in-class | ⚠️ | ✅ | SEPA/BACS recurring specialist |
| **Paddle** | ✅ | ⚠️ | ✅ | ✅ | ✅ Full | ✅ | Global tax compliance (MoR) |
| **Braintree** | ✅ | ❌ | ✅ | ✅ | ⚠️ | ✅ | PayPal + card depth |

---

## Pricing Model Overview

| Gateway | Pricing Model | Typical Card Rate | Notes |
|---|---|---|---|
| Stripe | Blended flat rate | 2.9% + $0.30 (US) / 1.5% + €0.25 (EU) | Volume discounts negotiable; local rates vary by country |
| Adyen | Interchange++ | Processing fee + interchange | Cheaper at high volume; complex to model |
| Xendit | Per-transaction | Varies by method + country | Cards ~2.9%; e-wallets 1.5–2.5%; VAs flat fee |
| 2C2P | Negotiated | Custom | Enterprise pricing; minimum volume typically required |
| Midtrans | Per-transaction | ~2.9% cards; flat fee for VA/wallets | Transparent public pricing |
| PayMongo | Per-transaction | 3.5% + PHP 15 for cards | GCash/Maya ~2.5% |
| Mollie | Per-transaction | 1.8% + €0.25 EU cards | No monthly fees |
| GoCardless | Per-transaction | 0.5–1% + cap | Cheapest recurring billing option in EU |
| Paddle | Revenue share | ~5% + payment processing | All-inclusive (tax, billing, fraud) |
| Braintree | Blended | 2.59% + $0.49 | PayPal-owned; volume pricing available |

---

## Deep-Dive Files

### [01 — Stripe](./gateways/01-stripe.md)
The default starting point for most B2C SaaS products. Best developer experience, widest global coverage from a single integration, full subscription billing stack, and growing SEA local method support.

### [02 — SEA Gateways](./gateways/02-sea-gateways.md)
Covers Xendit (best overall SEA coverage), 2C2P (Thailand + SEA orchestration), Midtrans (Indonesia specialist), and PayMongo (Philippines specialist). Use alongside Stripe to fill local method gaps.

### [03 — Other Global Gateways](./gateways/03-other-gateways.md)
Covers Adyen (enterprise global), Mollie (EU specialist), GoCardless (SEPA/BACS recurring specialist), Paddle (Merchant of Record / global tax compliance), and Braintree (PayPal depth).

### [04 — Gateway Selection Framework & Architecture](./gateways/04-architecture.md)
Framework for selecting the right gateway(s) for your stage and market. Multi-gateway routing architecture, reconciliation, webhook handling, and practical implementation guidance.

---

## Recommended Starting Stack (B2C SaaS — SEA + EU + Global)

```
Stage 1 — Launch (single gateway):
   Stripe
   → Covers global cards, EU local methods, select SEA methods,
     Apple Pay, Google Pay, PayPal
   → Full subscription billing, trials, proration, dunning built-in
   → Tax handling via Stripe Tax
   → Sufficient for Singapore, Malaysia, Thailand early traction

Stage 2 — SEA scale (add SEA gateway):
   Stripe + Xendit
   → Xendit fills Indonesia (GoPay, OVO, Dana, VA), Philippines (GCash, Maya),
     Vietnam (Momo, ZaloPay), Malaysia (TnG deeper), Thailand (PromptPay deeper)
   → Route SEA local method transactions to Xendit
   → Route cards, EU methods, PayPal to Stripe

Stage 3 — EU optimisation (add SEPA specialist):
   Stripe + Xendit + GoCardless (optional)
   → GoCardless for SEPA Direct Debit if EU subscriber base is large enough
     to justify the lower per-transaction cost vs. Stripe SEPA
   → Typically worth evaluating when EU subscriber count exceeds ~5,000

Stage 4 — Scale / Enterprise:
   Evaluate Adyen as primary or co-primary alongside Stripe
   → Adyen's interchange++ pricing becomes cost-advantageous at high volume
   → Adyen's local acquiring in additional markets
```

---

*Last updated: April 2026*
