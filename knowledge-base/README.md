# Payment Strategy Knowledge Base

> **Context:** B2C SaaS/App products targeting Southeast Asia, Europe, and Global markets.
> **Scope:** Monetization strategy foundation, consumer research, revenue analytics, customer lifecycle, revenue models, pricing, payment methods, checkout UX, discount mechanics, and post-payment operations.
> **Last fact-checked:** April 2026

---

## What This Knowledge Base Is

A structured reference library for anyone responsible for making commercial decisions for B2C digital products. It covers the full monetization lifecycle — from validating the use case and understanding consumer willingness to pay, through choosing the right revenue model and pricing structure, through the payment methods available in each market, to the UX flows that guide users through checkout, the discount mechanics that can influence the decision, and the operational systems that retain them as a subscriber afterward.

**Who should use this:** Product managers, business development leads, founding teams, engineers making payment integration decisions, and product designers using the UX flows as a reference — anyone involved in how a B2C digital product charges, converts, and retains users in SEA, Europe, or globally.

**What this is not:** A legal document, a guarantee of gateway availability, or a substitute for validating integration details with your chosen payment provider before building.

---

## Two Layers

The knowledge base is organised into two layers that work in sequence.

```
Layer 1 — Monetization Strategy Framework   (what to monetize and why)
Layer 2 — Payment Operations KB             (how to execute it)
```

Complete the Strategy Framework before optimising the Operations KB. Teams that skip the strategy layer execute well against the wrong target.

---

## Layer 1 — Monetization Strategy Framework

### Pillar 0 — Foundation

**Index:** `monetization-strategy.md`

Defines the upstream decisions that determine which revenue model, pricing structure, and optimization approach is appropriate. Must be completed before working on any execution pillar.

| File | Topic | Key concept |
|------|-------|-------------|
| `foundation/01-use-case-framework.md` | Use Case Framework | 5-part structure: Problem / Persona / Alternatives / Why / Frequency |
| `foundation/02-monetization-model-structure.md` | Model Structure | Monetization Triad; Revenue = Breadth × Depth equation |
| `foundation/03-monetization-triad.md` | Triad Validation | Consumer View × Growth Loops × Cost of Revenue gap analysis |
| `foundation/04-model-friction.md` | Model Friction | Where free-to-paid friction sits across acquisition, activation, and expansion loops |

**The Monetization Triad:** Every monetization decision must pass Consumer View × Growth Loops × Cost of Revenue. A model can be well-designed on paper and still fail if any leg is misaligned. Consumer View must be validated first.

---

### Consumer Research Methods

**Index:** `consumer-research.md`

The research methods used to answer the four Consumer View questions before any monetization model is finalised. Consumer research precedes pricing — it tells you what to price, for whom, and at what level, before you set any number.

| File | Topic | Key concept |
|------|-------|-------------|
| `consumer-research/01-value-metric-research.md` | Value Metric Research | Max-Diff (Best-Worst Scaling) to identify what users most associate with value; growth loop compatibility check |
| `consumer-research/02-feature-value-research.md` | Feature Value Research | Max-Diff for feature ranking; 2×2 Packaging Matrix (Table Stakes / Differentiators / Niche / Clutter); upgrade trigger identification |
| `consumer-research/03-willingness-to-pay.md` | Willingness to Pay | Van Westendorp PSM (Acceptable Range + OPP); Gabor-Granger demand curve; Conjoint Analysis; SEA market considerations |

**Recommended sequence:** Value metric research → Feature value research → WTP research → Price architecture (Pillar 2). Each step informs the next. Running WTP research before confirming the value metric produces ranges anchored to the wrong unit.

---

### Revenue Analytics

**Index:** `revenue-analytics.md`

The measurement layer for monetization decisions. Tells you whether the model is working and where to optimise. Read after Foundation — analytics without strategy measures the wrong things.

| File | Topic | Key concept |
|------|-------|-------------|
| `analytics/01-revenue-equation.md` | Revenue Equation | Revenue = Breadth × Depth; MRR components formula; model-specific decomposition |
| `analytics/02-revenue-creation-cohorts.md` | Revenue Creation Cohorts | New revenue measurement; velocity formula; retention curve patterns; channel quality comparison |
| `analytics/03-repeat-revenue-states.md` | Repeat Revenue States | 5 states (Existing / Expansion / Contraction / Churned / Resurrected); NRR formula; churn classification |
| `analytics/04-cost-to-serve.md` | Cost to Serve & Unit Economics | 7 cost categories; Net Contribution Margin; Payback Period; free tier sustainability; LTV:CAC caveats |

**Primary metric:** Net Revenue Retention (NRR). Target >100% for healthy revenue (expansion offsets churn). Use Net Contribution Margin and Payback Period over LTV:CAC for unit economics — they reflect the actual cost structure, not a theoretical projection.

---

### Customer Lifecycle Optimisation

**Index:** `customer-lifecycle.md`

How to move customers through the revenue lifecycle — from potential to converted, expanded, retained, and (if churned) resurrected. Optimise transitions within the current model before changing the model itself.

| File | Topic | Key concept |
|------|-------|-------------|
| `customer-lifecycle/01-customer-states.md` | Customer States | 4 states with sub-states; at-risk signal taxonomy (8 triggers); churn classification table |
| `customer-lifecycle/02-educate-convert-activate.md` | Educate → Convert → Activate | Tell→Show→Experience spectrum; 3 conversion barrier types; Aha Moment; Habit Moment |
| `customer-lifecycle/03-expansion-strategy.md` | Expansion Strategy | 3 paths (Deepen / Upgrade / Add Use Case); annual plan as highest-ROI event; upgrade trigger signals |
| `customer-lifecycle/04-at-risk-strategy.md` | At-Risk Strategy | 4 strategies mapped to 4 root causes; involuntary churn dunning path; anti-pattern table |
| `customer-lifecycle/05-churned-strategy.md` | Churned User Strategy | Resurrection probability curve; 5 churn type profiles with win-back potential; offer design by type |
| `customer-lifecycle/06-incentives-framework.md` | Incentives Framework | 4 structural risks; Habit Formation Requirement; 7 guardrails; when NOT to use incentives |

**Critical insight — Habit Formation Requirement:** An incentive given before habit is formed is a loan, not an investment. The user arrives for the discount. When it expires, they evaluate the product at full price having never fully engaged. Design incentives so that activation and habit formation happen before the first full-price charge.

---

### Pre-Launch Research Checklist

**File:** `pre-launch-research-checklist.md`

A 7-phase gate that must be completed before monetization goes live. Each phase has specific pass/fail criteria. A phase cannot be skipped — if the answer is unknown, the team needs more research, not a faster launch.

| Phase | Gate |
|-------|------|
| 1 | Use Case Foundation confirmed |
| 2 | Value Metric Research completed |
| 3 | Feature Value Research completed |
| 4 | WTP Research completed |
| 5 | Monetization Triad validated |
| 6 | Charge Timing Decision made |
| 7 | Pre-Launch Validation Plan in place |

---

## Layer 2 — Payment Operations KB

### Pillar 1 — Revenue Models

**Index:** `revenue-models.md`

Eight B2C revenue model archetypes, each with mechanics, economics, real-world examples, trade-offs, best-fit criteria, and UX flow documentation.

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

---

### Pillar 2 — Pricing Strategy

**Index:** `pricing-strategy.md`

How to structure, position, and localise pricing for B2C digital products across SEA, Europe, and globally. Distinct from the revenue model (what you charge for) and discount mechanisms (what you reduce it by) — Pricing Strategy defines the actual numbers, tier structure, and price framing.

**Important prerequisite:** Pricing decisions should be made after completing Consumer Research (value metric, feature packaging, WTP). Refer to `consumer-research/` before working through this pillar.

| File | Topic | Key concept |
|------|-------|-------------|
| `pricing/01-price-architecture.md` | Tier structure & packaging | Good-Better-Best; decoy pricing; value fence design; feature packaging logic |
| `pricing/02-price-localisation.md` | PPP-based regional pricing | Four localisation approaches; Netflix/Spotify case studies; arbitrage risk |
| `pricing/03-anchoring-framing.md` | Anchoring & psychological framing | Annual-as-monthly-equivalent; 9-endings by market; Most Popular badge |
| `pricing/04-price-testing.md` | Price validation methods | Van Westendorp PSM; Gabor-Granger; A/B test traffic requirements; repricing playbook |
| `pricing/05-sea-pricing.md` | SEA market price points | Concrete IDR/VND/PHP/THB/MYR/SGD ranges per tier |
| `pricing/06-eu-pricing.md` | EU pricing & compliance | EUR/GBP/PLN ranges; VAT-inclusive display rules; Omnibus Directive compliance |

**Key SEA finding:** The income gap between Singapore (~USD 88K GDP per capita) and Vietnam (~USD 4.3K) is roughly 20×. A single global USD price cannot serve both markets.

**Key EU finding:** EU prices must be displayed VAT-inclusive. The EU Omnibus Directive requires any crossed-out reference price to have been the actual active price for 30 consecutive days before the promotion.

---

### Pillar 3 — Payment Methods by Market

**Index:** `payment-methods.md`

Documents every significant payment method in SEA, Europe, and globally — with a critical focus on whether each method supports **recurring billing**, since this is the central infrastructure constraint for subscription SaaS in SEA.

| File | Market |
|------|--------|
| `markets/01-southeast-asia.md` | Indonesia, Vietnam, Philippines, Thailand, Malaysia, Singapore |
| `markets/02-europe.md` | EU cards, SEPA, iDEAL, Bancontact, SOFORT/Klarna, BLIK, Swish/Vipps MobilePay |
| `markets/03-global.md` | Cards, PayPal, Apple Pay, Google Wallet, WeChat Pay/Alipay, Crypto |

**The most important structural finding:** Recurring billing support for SEA wallets must be resolved at the **wallet × gateway × market** intersection — not at the wallet level alone:

- **QR payments** (QRIS, PromptPay, VNPay-QR, PayNow QR): ❌ One-time by design
- **Virtual Accounts, bank transfers, OTC cash**: ❌ One-time by design
- **GoPay** (Indonesia): ✅ Recurring via Midtrans and Adyen
- **GCash** (Philippines): ⚠️ Recurring via PayMongo, Xendit, Ezypay — **NOT via Adyen**
- **Touch 'n Go** (Malaysia): ⚠️ Recurring via Curlec — **NOT via Adyen**
- **GrabPay** (multi-market): ⚠️ Recurring requires direct Grab partnership — **NOT via Adyen**
- **MoMo** (Vietnam): ✅ Recurring via MoMo's Thanh Toán Tự Động API

> **Read this first:** [`_principles/payment-reality.md`](./_principles/payment-reality.md) — seven load-bearing principles for working with recurring billing claims.

---

### Pillar 4 — Checkout UX & End-to-End Flows

**Index:** `checkout-ux.md`

Six complete checkout flows with screen-level UX specifications, copy principles, legal requirements, and failure state handling.

| File | Flow |
|------|------|
| `checkout/01-web-subscription-flow.md` | Web checkout: payment method selector, card form, 3DS/SCA handling, confirmation, error copy |
| `checkout/02-mobile-iap-flow.md` | iOS StoreKit 2 + Google Play Billing Library; server notifications; cross-platform state |
| `checkout/03-upgrade-downgrade.md` | Tier upgrade (proration), monthly→annual, annual→monthly, downgrade retention interstitials |
| `checkout/04-payment-failure-recovery.md` | Failed checkout recovery, dunning sequence (Day 0–30), SEA wallet failure states |
| `checkout/05-cancellation-retention.md` | FTC Click-to-Cancel compliant flow, 4 legitimate retention interstitials, post-cancellation |
| `checkout/06-sea-flows.md` | E-wallet deep link hierarchy, QR expiry handling, Virtual Account UX, OTC codes |

**Key UX principles:**
- Equal CTA weight on cancel/continue (legal requirement in EU, UK, US)
- Billing disclosure must state exact charge date and amount — not just "after 30 days"
- Pre-fill form on payment failure — only clear CVC, never the whole form
- SEA: always provide "I've paid" button with polling during QR and wallet flows

---

### Pillar 5 — Post-Payment Strategy

**Index:** `post-payment-strategy.md`

Everything that happens after the first successful charge — the operational and strategic systems that protect subscriber retention and recover losses.

| File | Topic |
|------|-------|
| `post-payment/01-dunning.md` | Card expiry prediction, Smart Retries, decline classification, Day 0–30 dunning sequence, 3DS re-auth, SEA wallet dunning |
| `post-payment/02-subscription-lifecycle.md` | Subscription state machine, pause mechanics, reactivation flows, annual renewal communication |
| `post-payment/03-refund-policy.md` | EU right of withdrawal, recommended policy tiers, refund flows, communication templates |
| `post-payment/04-disputes-chargebacks.md` | Chargeback types, friendly fraud, Visa/Mastercard threshold programs, when to fight vs. accept |
| `post-payment/05-reengagement-winback.md` | Churned user segmentation (5 segments), win-back email sequence, discount offer framework |
| `post-payment/06-metrics-analytics.md` | MRR components, churn rate, NRR, cohort retention, NCM, Payback Period, payment failure rate |

**Most critical insight:** Involuntary churn (payment failure, not intent to leave) accounts for 20–40% of total subscription churn. A well-run dunning system recovers 50–65% of initially failed charges.

**SEA wallet dunning — critical difference:** Standard dunning retry logic does not apply to e-wallets. Failed wallet charges are a re-subscription problem, not a retry problem. The intervention is communication, not retries.

---

### Pillar 6 — Discount Mechanisms

**Index:** `discount-mechanisms.md`

Twelve discount mechanics with churn risk ratings, LTV implications, and an Incentive Guardrails framework to prevent discount-trained cohort decay.

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
| `discounts/11-annual-prepay-discount.md` | Annual Prepay Discount | Cash flow + churn reduction + LTV |
| `discounts/12-win-back-offers.md` | Win-Back Offers | Churned user re-acquisition |

**The highest-ROI discount mechanism:** Annual Prepay Discount. Simultaneously improves cash flow, reduces monthly churn, and increases LTV. Standard depth: 20–25% off the monthly equivalent.

**SEA-specific note:** Price sensitivity in SEA is high, but discount-trained cohorts show lower LTV. Annual prepay and referral mechanics outperform flash sales in LTV terms.

**Incentive guardrails:** See `customer-lifecycle/06-incentives-framework.md` for the Habit Formation Requirement and 7 structural guardrails before designing any discount campaign.

---

## How to Use This Knowledge Base

### Scenario 1 — "We're starting from scratch. Where do we begin?"

Start at `monetization-strategy.md` (Pillar 0). Work through the Use Case Framework (`foundation/01-use-case-framework.md`) to validate the problem, the paying persona, and the value. Then run the consumer research sequence (value metric → feature value → WTP) before touching the revenue model or pricing pillar. Teams that skip this step build pricing on assumptions.

### Scenario 2 — "Which revenue model should we use?"

Complete Pillar 0 first. Then go to `revenue-models.md` for the comparison table. Read the 2–3 models most relevant to your product type. Check `payment-methods.md` to validate that your chosen model maps to recurring billing capability in your target markets.

### Scenario 3 — "We're building in SEA specifically"

Read `markets/01-southeast-asia.md` in full first — the structural reality of the SEA payment landscape constrains model options before you choose one. Key question: will you be mobile-first (IAP path) or web-first (wallet tokenisation per market)? Then read `pricing/05-sea-pricing.md` for price points and `checkout/06-sea-flows.md` for SEA-specific UX.

### Scenario 4 — "We need to set or validate our pricing"

Confirm you have completed consumer research first (`consumer-research/` files). Then start at `pricing-strategy.md`. `pricing/01-price-architecture.md` covers tier structure. `pricing/02-price-localisation.md` covers PPP-based pricing. Cross-reference `discount-mechanisms.md` to understand how discounts interact with your base architecture.

### Scenario 5 — "Our churn is high. What do we look at?"

First check the metrics framework in `post-payment/06-metrics-analytics.md` to separate voluntary from involuntary churn. Then map at-risk users to root causes using `customer-lifecycle/04-at-risk-strategy.md` — intervening before cancellation is higher-ROI than any win-back offer. For involuntary churn, go to `post-payment/01-dunning.md`. For win-back, apply the churn type taxonomy from `customer-lifecycle/05-churned-strategy.md` before designing any offer.

### Scenario 6 — "We want to run a promotion or discount"

Start at `discount-mechanisms.md` for the comparison table. Before choosing a mechanic, run the Habit Formation check from `customer-lifecycle/06-incentives-framework.md` — an incentive given before habit is formed is a loan, not an investment. For subscriptions, Annual Prepay (`discounts/11-annual-prepay-discount.md`) and Referral (`discounts/07-referral-discounts.md`) offer the best long-term economics.

### Scenario 7 — "We're expanding to Europe"

Read `markets/02-europe.md` for the full method landscape and regulatory context. Key items: SEPA Direct Debit setup, SCA/PSD2 requirements, right of withdrawal waiver at checkout, EU Omnibus Directive pricing rules. Then read `pricing/06-eu-pricing.md` for VAT-inclusive requirements, per-market price ranges, and Omnibus compliance before setting live EU prices.

---

## File Map

```
knowledge-base/
│
├── README.md                              ← This document
├── fact-check-log.md                      ← Running record of corrections
├── _principles/
│   └── payment-reality.md                 ← Load-bearing principles (read first)
│
│── LAYER 1 — MONETIZATION STRATEGY FRAMEWORK ─────────────────────────────────
│
├── monetization-strategy.md              ← Pillar 0 index
├── foundation/
│   ├── 01-use-case-framework.md
│   ├── 02-monetization-model-structure.md
│   ├── 03-monetization-triad.md
│   └── 04-model-friction.md
│
├── consumer-research.md                  ← Consumer Research index
├── consumer-research/
│   ├── 01-value-metric-research.md
│   ├── 02-feature-value-research.md
│   └── 03-willingness-to-pay.md
│
├── revenue-analytics.md                  ← Revenue Analytics index
├── analytics/
│   ├── 01-revenue-equation.md
│   ├── 02-revenue-creation-cohorts.md
│   ├── 03-repeat-revenue-states.md
│   └── 04-cost-to-serve.md
│
├── customer-lifecycle.md                 ← Customer Lifecycle index
├── customer-lifecycle/
│   ├── 01-customer-states.md
│   ├── 02-educate-convert-activate.md
│   ├── 03-expansion-strategy.md
│   ├── 04-at-risk-strategy.md
│   ├── 05-churned-strategy.md
│   └── 06-incentives-framework.md
│
├── pre-launch-research-checklist.md      ← 7-phase pre-launch gate
│
│── LAYER 2 — PAYMENT OPERATIONS KB ───────────────────────────────────────────
│
├── revenue-models.md                     ← Pillar 1 index
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
├── pricing-strategy.md                   ← Pillar 2 index
├── pricing/
│   ├── 01-price-architecture.md
│   ├── 02-price-localisation.md
│   ├── 03-anchoring-framing.md
│   ├── 04-price-testing.md
│   ├── 05-sea-pricing.md
│   └── 06-eu-pricing.md
│
├── payment-methods.md                    ← Pillar 3 index
├── markets/
│   ├── 01-southeast-asia.md
│   ├── 02-europe.md
│   └── 03-global.md
│
├── checkout-ux.md                        ← Pillar 4 index
├── checkout/
│   ├── 01-web-subscription-flow.md
│   ├── 02-mobile-iap-flow.md
│   ├── 03-upgrade-downgrade.md
│   ├── 04-payment-failure-recovery.md
│   ├── 05-cancellation-retention.md
│   └── 06-sea-flows.md
│
├── post-payment-strategy.md              ← Pillar 5 index
├── post-payment/
│   ├── 01-dunning.md
│   ├── 02-subscription-lifecycle.md
│   ├── 03-refund-policy.md
│   ├── 04-disputes-chargebacks.md
│   ├── 05-reengagement-winback.md
│   └── 06-metrics-analytics.md
│
├── discount-mechanisms.md                ← Pillar 6 index
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
