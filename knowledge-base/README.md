# Payment Strategy Knowledge Base

> **Context:** B2C SaaS/App products targeting Southeast Asia, Europe, and Global markets.
> **Scope:** Revenue models, pricing strategy, payment methods, checkout UX, discount mechanics, and post-payment operations.
> **Last fact-checked:** April 2026

---

## What This Knowledge Base Is

This is a structured reference library for anyone responsible for reviewing payment strategy and making commercial decisions for B2C digital products. It covers the full commercial lifecycle — from the revenue model and pricing structure, through the payment methods available in each market, to the UX flows that guide users through checkout, the discount mechanics that can influence the decision, and the operational systems that retain them as a subscriber afterward.

It is not a single recommendation document. It is an exploration-first knowledge base: each section lays out what is possible, how it works, what the trade-offs are, and where the real-world constraints lie. The strategy synthesis and final recommendations happen after the exploration is complete and the product context is understood.

**Who should use this:** Product managers, business development leads, founding teams, engineers making payment integration decisions, and product designers using the UX flows as a reference for design decisions — anyone involved in how a B2C digital product charges, converts, and retains users in SEA, Europe, or globally.

**What this is not:** A legal document, a guarantee of gateway availability, or a substitute for validating integration details with your chosen payment provider before building.

---

## Six Pillars

The knowledge base is organised into six pillars. Each pillar has an index file (high-level summary + comparison tables) and a set of deep-dive files (one per topic).

```
Pillar 1 — Revenue & Paid Models        revenue-models.md + models/
Pillar 2 — Pricing Strategy             pricing-strategy.md + pricing/
Pillar 3 — Payment Methods by Market    payment-methods.md + markets/
Pillar 4 — Checkout UX & Flows          checkout-ux.md + checkout/
Pillar 5 — Post-Payment Strategy        post-payment-strategy.md + post-payment/
Pillar 6 — Discount Mechanisms          discount-mechanisms.md + discounts/
```

---

## Pillar 1 — Revenue & Paid Models

**Index:** `revenue-models.md`

Covers the eight fundamental B2C revenue model archetypes, each with mechanics, economics, real-world examples, trade-offs, best-fit criteria, and UX flow documentation.

| File | Model | Key concept |
|------|-------|-------------|
| `models/01-freemium.md` | Freemium | Permanently free tier; volume-driven conversion |
| `models/02-free-trial.md` | Free Trial (Traditional) | Card captured upfront; auto-charges at trial end |
| `models/03-reverse-trial.md` | Reverse Trial | Full premium → auto-downgrade to free; loss aversion |
| `models/04-flat-rate-subscription.md` | Flat-Rate Subscription | Single price, all features |
| `models/05-tiered-subscription.md` | Tiered Subscription | 2–4 plans; decoy pricing; ARPU expansion |
| `models/06-one-time-purchase.md` | One-Time Purchase | Perpetual license; LTD mechanics |
| `models/07-usage-based.md` | Usage-Based / Credits | Per-action pricing; credit/token model |
| `models/08-hybrid.md` | Hybrid Models | 5 documented combination patterns |

**Key insight for SEA:** No-card-required entry points (Freemium, Reverse Trial) structurally outperform card-capture models due to low card penetration in Indonesia, Vietnam, and the Philippines.

**Key insight for Europe:** Tiered Subscription with SEPA Direct Debit is the most cost-efficient recurring revenue structure.

**Fact-check note:** Conversion rate benchmarks were verified in April 2026. Spotify's conversion rate is ~40% (not the often-cited 26–30%). Dropbox is ~2–2.5% (not 4%). Free trial card-capture conversion is 25–50% for optimised products (not 40–60%). Reverse trial benchmark is 8–12% for most products, 15–25% for top performers.

---

## Pillar 2 — Pricing Strategy

**Index:** `pricing-strategy.md`

Covers how to structure, position, and localise pricing for B2C digital products across SEA, Europe, and globally. Distinct from the revenue model (what you charge for) and discount mechanisms (what you reduce it by) — Pricing Strategy defines the actual numbers, tier structure, and price framing.

| File | Topic | Key concept |
|------|-------|-------------|
| `pricing/01-price-architecture.md` | Tier structure & packaging | Good-Better-Best; decoy pricing; value fence design; feature packaging logic |
| `pricing/02-price-localisation.md` | PPP-based regional pricing | Four localisation approaches; Netflix/Spotify case studies; arbitrage risk and mitigation |
| `pricing/03-anchoring-framing.md` | Anchoring & psychological framing | Annual-as-monthly-equivalent; 9-endings by market; Most Popular badge; reference price rules |
| `pricing/04-price-testing.md` | Price validation methods | Van Westendorp PSM; Gabor-Granger; A/B test traffic requirements; cohort LTV analysis; repricing playbook |
| `pricing/05-sea-pricing.md` | SEA market price points | Concrete IDR/VND/PHP/THB/MYR/SGD ranges per tier; per-market psychology; digital services tax table |
| `pricing/06-eu-pricing.md` | EU pricing & compliance | Per-market EUR/GBP/PLN ranges; VAT-inclusive display rules; Omnibus Directive compliance; right of withdrawal |

**Key structural insight:** Revenue Models (Pillar 1) defines *how* you charge. Pricing Strategy (this pillar) defines *how much* and *how it's presented*. Discount Mechanisms (Pillar 6) defines *when and by how much you reduce it*. Set the base price architecture before configuring discounts — discounts operate as modifications to the base, not the other way around.

**Key SEA finding:** The income gap between Singapore (~USD 88K GDP per capita) and Vietnam (~USD 4.3K) is roughly 20×. A single global USD price cannot serve both markets. PPP-adjusted price bands or country-level pricing are required for meaningful conversion in lower-income SEA markets.

**Key EU finding:** EU prices must be displayed VAT-inclusive by law. The EU Omnibus Directive requires any crossed-out "reference price" to have been the actual active price for 30 consecutive days before the promotion. Annual plan pricing (monthly equivalent vs. annual total) is the most common legitimate reference price usage.

---

## Pillar 3 — Payment Methods by Market

**Index:** `payment-methods.md`

The most technically nuanced pillar. Documents every significant payment method in SEA, Europe, and globally — with a critical focus on whether each method supports **recurring billing**, since this is the central infrastructure constraint for subscription SaaS in SEA.

| File | Market |
|------|--------|
| `markets/01-southeast-asia.md` | Indonesia, Vietnam, Philippines, Thailand, Malaysia, Singapore |
| `markets/02-europe.md` | EU cards, SEPA, iDEAL, Bancontact, SOFORT/Klarna, BLIK, Swish/Vipps MobilePay, Apple/Google Pay |
| `markets/03-global.md` | Cards, PayPal, Apple Pay, Google Wallet, WeChat Pay/Alipay, Crypto |

**The most important structural finding:** The framing of "most SEA payment methods don't support recurring billing" is an oversimplification. The correct picture:

- **QR payments** (QRIS, PromptPay, VNPay-QR, PayNow QR): ❌ One-time by design
- **Virtual Accounts, bank transfers, OTC cash**: ❌ One-time by design
- **Major e-wallets** (GCash, MoMo, GoPay, Touch 'n Go, ZaloPay): ⚠️ **Do support recurring** via tokenization/account-linking APIs — but each requires separate merchant integration and (in some cases) merchant pre-approval. Not unified like card-on-file.
- **NAPAS domestic cards** (Vietnam): ✅ Support tokenization and recurring billing via Adyen
- **VNPay Auto-Debit** (Vietnam): ✅ Documented auto-debit utility for periodic billing

The implementation complexity of wallet-by-wallet tokenization is real — which is why App Store/Google Play IAP remains the path of least resistance for mobile products.

**Fact-check note:** SEA recurring billing support was substantially corrected in April 2026. Europe: SEPA now covers 41 countries (not 36). UK participates in SEPA schemes. BLIK has 18.9M active users (not 15M). BLIK Recurring is a live product, not a pilot. Vipps MobilePay has 12M+ users across 4 Nordic countries after the 2022 Vipps–MobilePay merger.

---

## Pillar 4 — Checkout UX & End-to-End Flows

**Index:** `checkout-ux.md`

Six complete checkout flows documented with screen-level UX specifications, copy principles, legal requirements, and failure state handling.

| File | Flow |
|------|------|
| `checkout/01-web-subscription-flow.md` | Web checkout: payment method selector, card form, 3DS/SCA handling, confirmation screen, error copy table |
| `checkout/02-mobile-iap-flow.md` | iOS StoreKit 2 + Google Play Billing Library: code examples, server notifications, cross-platform state |
| `checkout/03-upgrade-downgrade.md` | Tier upgrade (proration), monthly→annual, annual→monthly, downgrade retention interstitials |
| `checkout/04-payment-failure-recovery.md` | Failed checkout recovery, dunning sequence (Day 0–30), SEA wallet failure states |
| `checkout/05-cancellation-retention.md` | FTC Click-to-Cancel compliant flow, 4 legitimate retention interstitials, post-cancellation offboarding |
| `checkout/06-sea-flows.md` | E-wallet deep link hierarchy, QR expiry handling, Virtual Account UX, OTC payment codes, network interruption states |

**Key UX principles enforced throughout:**
- Equal CTA weight on cancel/continue (legal requirement in EU, UK, US)
- Billing disclosure must state exact charge date and amount — not just "after 30 days"
- Upgrade confirmation shows net charge amount after proration, not just plan price
- Pre-filled form on payment failure — only clear the CVC field, never the whole form
- SEA: always provide "I've paid" button with polling during QR and wallet flows — network interruptions are common

---

## Pillar 5 — Post-Payment Strategy

**Index:** `post-payment-strategy.md`

Everything that happens after the first successful charge — the operational and strategic systems that protect subscriber retention and recover losses.

| File | Topic |
|------|-------|
| `post-payment/01-dunning.md` | Card expiry prediction, Smart Retries, soft vs. hard decline classification, Day 0–30 dunning sequence, 3DS re-authentication, SEA e-wallet dunning (fundamentally a re-subscription problem, not a retry problem) |
| `post-payment/02-subscription-lifecycle.md` | Subscription state machine, pause mechanics (billing pause vs. full pause), Stripe `pause_collection`, holds, reactivation flows, plan change scheduling, annual renewal communication sequence |
| `post-payment/03-refund-policy.md` | EU right of withdrawal + waiver mechanic, recommended policy tiers, Stripe/Xendit/IAP refund flows, communication templates, refund rate monitoring |
| `post-payment/04-disputes-chargebacks.md` | Chargeback types and reason codes, friendly fraud, Visa/Mastercard threshold programs, prevention strategy, evidence collection, when to fight vs. accept, SEA wallet dispute considerations |
| `post-payment/05-reengagement-winback.md` | Churned user segmentation (5 segments), win-back email sequence, discount offer framework (when to offer, when not to), free-tier re-engagement triggers, SEA channels (WhatsApp, Zalo, push) |
| `post-payment/06-metrics-analytics.md` | Full metrics framework: MRR components, churn rate, NRR, cohort retention, LTV:CAC, payment failure rate, recovery rate — formulas, benchmarks, SQL queries, dashboard design, reporting cadence |

**Most critical insight:** Involuntary churn (payment failure, not intent to leave) accounts for 20–40% of total subscription churn. A well-run dunning system recovers 50–65% of initially failed charges. This is the highest-ROI retention lever that requires no product changes.

---

## Pillar 6 — Discount Mechanisms

**Index:** `discount-mechanisms.md`

Twelve discount mechanics documented separately from revenue models. A discount mechanism modifies *how much* is charged; a revenue model defines *how* the product charges. They are composable but distinct.

| File | Mechanism | Primary objective |
|------|-----------|------------------|
| `discounts/01-introductory-pricing.md` | Introductory Pricing | Lower initial conversion barrier |
| `discounts/02-flash-sales.md` | Flash Sales | Demand spike / reactivation |
| `discounts/03-seasonal-promotions.md` | Seasonal Promotions | Predictable demand cycles |
| `discounts/04-volume-discounts.md` | Volume Discounts | Higher commitment / ARPU |
| `discounts/05-bundle-discounts.md` | Bundle Discounts | Cross-sell / ARPU expansion |
| `discounts/06-loyalty-rewards.md` | Loyalty Rewards | Long-term retention |
| `discounts/07-referral-discounts.md` | Referral Discounts | Viral acquisition / low CAC |
| `discounts/08-tenure-discounts.md` | Tenure Discounts | Proactive churn prevention |
| `discounts/09-first-purchase-discount.md` | First-Purchase Discount | First payment conversion |
| `discounts/10-promo-codes.md` | Promo Codes | Channel attribution + targeting |
| `discounts/11-annual-prepay-discount.md` | Annual Prepay Discount | Cash flow + churn reduction |
| `discounts/12-win-back-offers.md` | Win-Back Offers | Churned user re-acquisition |

**The highest-ROI discount mechanism for subscription B2C:** Annual Prepay Discount. Simultaneously improves cash flow, reduces monthly churn, and increases LTV — all from a single pricing decision. Standard depth is 20–25% off the monthly equivalent.

**SEA-specific note:** Price sensitivity in SEA is high, but discount-trained cohorts show lower LTV. Annual prepay and referral mechanics outperform flash sales in LTV terms for SEA markets.

**EU compliance note:** The EU Omnibus Directive requires that any crossed-out "reference price" shown during a promotion must have been the actual price for at least 30 consecutive days prior. Do not fabricate inflated reference prices.

---

## How to Use This Knowledge Base

### Scenario 1 — "We're starting from scratch, which model should we use?"

Start at `revenue-models.md` for the comparison table. Then read the deep-dives for the 2–3 models most relevant to your product type. Pay specific attention to the **B2C Reality** section in each model file — it covers the economic standpoint and real-world performance data, not just mechanics. After reading the models, check `payment-methods.md` to understand how your chosen model maps to recurring billing capability in your target markets.

### Scenario 2 — "We're building in SEA specifically"

Read `markets/01-southeast-asia.md` in full first — the structural reality of the SEA payment landscape will constrain your model options before you choose one. Key question to answer: will you be mobile-first (IAP path) or web-first (requiring wallet tokenization integration per market)? Then read `pricing/05-sea-pricing.md` for SEA-specific price points and affordability framing, and `checkout/06-sea-flows.md` for the SEA-specific UX flows.

### Scenario 3 — "We need to set or validate our pricing"

Start at `pricing-strategy.md` (Pillar 2 index) for the overview. `pricing/01-price-architecture.md` covers tier structure and packaging logic. `pricing/02-price-localisation.md` covers PPP-based pricing and regional gaps. `pricing/03-anchoring-framing.md` covers how to frame the monthly vs. annual choice. Cross-reference with `discount-mechanisms.md` (Pillar 6) to understand how discounts interact with your base price architecture before finalising.

### Scenario 4 — "Our churn is high, what do we look at?"

Separate voluntary from involuntary churn first using the metrics framework in `post-payment/06-metrics-analytics.md`. If involuntary churn is high (>40% of total churn) — go to `post-payment/01-dunning.md`. If voluntary churn is high — read `checkout/05-cancellation-retention.md` for the cancellation flow and `post-payment/05-reengagement-winback.md` for win-back strategy. The segment taxonomy in the win-back file is important: different churn reasons require different recovery approaches.

### Scenario 5 — "We want to run a promotion or discount"

Start at `discount-mechanisms.md` for the overview table. Every mechanism has a "Churn Risk" rating — check this before deploying. For subscriptions, the Annual Prepay Discount (`discounts/11-annual-prepay-discount.md`) and Referral Discounts (`discounts/07-referral-discounts.md`) typically offer the best long-term economics.

### Scenario 6 — "We're expanding to Europe"

Read `markets/02-europe.md` for the full method landscape and regulatory context. Key items not to miss: SEPA Direct Debit setup flow, SCA/PSD2 requirements for card recurring, right of withdrawal waiver at checkout, EU Omnibus Directive pricing rules. Then read `pricing/06-eu-pricing.md` for VAT-inclusive pricing requirements, per-market price ranges, and Omnibus compliance specifics before setting live EU prices.

## File Map

```
Payment Strategy/
│
├── README.md                          ← This document
│
├── revenue-models.md                  ← Pillar 1 index
├── models/
│   ├── 01-freemium.md
│   ├── 02-free-trial.md
│   ├── 03-reverse-trial.md
│   ├── 04-flat-rate-subscription.md
│   ├── 05-tiered-subscription.md
│   ├── 06-one-time-purchase.md
│   ├── 07-usage-based.md
│   └── 08-hybrid.md
│
├── pricing-strategy.md                ← Pillar 2 index
├── pricing/
│   ├── 01-price-architecture.md
│   ├── 02-price-localisation.md
│   ├── 03-anchoring-framing.md
│   ├── 04-price-testing.md
│   ├── 05-sea-pricing.md
│   └── 06-eu-pricing.md
│
├── payment-methods.md                 ← Pillar 3 index
├── markets/
│   ├── 01-southeast-asia.md
│   ├── 02-europe.md
│   └── 03-global.md
│
├── checkout-ux.md                     ← Pillar 4 index
├── checkout/
│   ├── 01-web-subscription-flow.md
│   ├── 02-mobile-iap-flow.md
│   ├── 03-upgrade-downgrade.md
│   ├── 04-payment-failure-recovery.md
│   ├── 05-cancellation-retention.md
│   └── 06-sea-flows.md
│
├── post-payment-strategy.md           ← Pillar 5 index
├── post-payment/
│   ├── 01-dunning.md
│   ├── 02-subscription-lifecycle.md
│   ├── 03-refund-policy.md
│   ├── 04-disputes-chargebacks.md
│   ├── 05-reengagement-winback.md
│   └── 06-metrics-analytics.md
│
├── discount-mechanisms.md             ← Pillar 6 index
└── discounts/
    ├── 01-introductory-pricing.md
    ├── 02-flash-sales.md
    ├── 03-seasonal-promotions.md
    ├── 04-volume-discounts.md
    ├── 05-bundle-discounts.md
    ├── 06-loyalty-rewards.md
    ├── 07-referral-discounts.md
    ├── 08-tenure-discounts.md
    ├── 09-first-purchase-discount.md
    ├── 10-promo-codes.md
    ├── 11-annual-prepay-discount.md
    └── 12-win-back-offers.md
```

---

*Built: April 2026. Fact-checked: April 2026.*
