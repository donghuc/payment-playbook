# Revenue & Paid Models — Reference Index

> Context: B2C SaaS/App targeting Southeast Asia, Europe, and Global markets.
> This document is a living index. Each model links to its own deep-dive file.

---

## Models Overview

| Model | Top-of-Funnel | Conversion Rate | Revenue Predictability | B2C Fit | Complexity |
|---|---|---|---|---|---|
| Freemium | Very high | Low (2–8%) | Low | High (at scale) | Low |
| Free Trial (Traditional) | Medium | Medium–High (25–50%) | High | Medium | Low |
| Reverse Trial | High | Medium–High | Medium | High | Medium |
| Flat-Rate Subscription | Medium | Medium | High | Niche | Very low |
| Tiered Subscription | Medium | Medium | High | Very high | Medium |
| One-Time Purchase | Medium | High (intent buyers) | Low | Niche/growing | Low |
| Usage-Based | High | Variable | Low | Growing (AI) | High |
| Hybrid | High | Medium–High | Medium–High | High | High |

---

## Model Summaries

### 1. [Freemium](./models/01-freemium.md)
Permanently free tier alongside a paid tier. No time limit. Volume-driven B2C model that leverages viral loops and habit formation. Works at scale when free users create compounding network value or convert over time.

### 2. [Free Trial (Traditional)](./models/02-free-trial.md)
Full or near-full access for a fixed period, credit card captured upfront, auto-charges at trial end. Higher conversion rate from a smaller, pre-qualified funnel. Best for fast time-to-value products.

### 3. [Reverse Trial](./models/03-reverse-trial.md)
Full premium access with no card required, automatic downgrade to free tier after the trial window. Leverages loss aversion. Combines wide top-of-funnel with strong upgrade motivation.

### 4. [Flat-Rate Subscription](./models/04-flat-rate-subscription.md)
One price, all features, billed monthly or annually. Simple but leaves revenue on the table. Best for media/content products with a uniform offering.

### 5. [Tiered Subscription](./models/05-tiered-subscription.md)
2–4 defined plans with progressive feature/capacity bundles. Dominant model for consumer SaaS. Allows revenue segmentation across willingness-to-pay cohorts.

### 6. [One-Time Purchase](./models/06-one-time-purchase.md)
User pays once, owns the product or version permanently. Revenue is lumpy and acquisition-dependent. Seeing a revival in productivity/utility apps as subscription fatigue grows.

### 7. [Usage-Based](./models/07-usage-based.md)
Pay based on actual consumption — API calls, messages, minutes, exports, storage. Lowers entry barrier but creates revenue unpredictability. Growing fast in AI-powered B2C tools.

### 8. [Hybrid Models](./models/08-hybrid.md)
Combinations of the above. Common structures: Freemium + usage cap, Reverse Trial + subscription, Subscription + usage add-ons. Most powerful but operationally complex.

---

## Before Choosing a Model — Prerequisite

Revenue model selection is a downstream decision that must be grounded in use case analysis and validated against the Monetization Triad (Consumer View × Growth Loops × Cost of Revenue). Choosing a model without completing these steps produces a model that is structurally misaligned with how customers experience value.

See `monetization-strategy.md` for the full foundation framework and the required decision sequence.

---

## Strategic Notes

- **For SEA markets:** No-card-required entry points (Freemium, Reverse Trial) outperform card-capture models due to lower card penetration and higher signup friction sensitivity.
- **For Europe:** Tiered Subscription with SEPA Direct Debit for recurring billing is the most cost-efficient recurring revenue structure.
- **Annual vs. Monthly billing:** Annual plans substantially improve retention and reduce churn; typically offered at 15–25% discount. Note that LTV improvement from annual plans should be measured via Net Contribution Margin and Payback Period, not LTV:CAC alone — see `analytics/04-cost-to-serve.md`.
- **Loss aversion** (Kahneman & Tversky Prospect Theory) underpins the effectiveness of Reverse Trial — users feel the pain of losing premium features ~2x more than the equivalent gain from upgrading.
- **Model friction:** Each model creates different friction levels across the growth loop. Placing friction before the viral/sharing action or before the Aha Moment is the most common model-level mistake. See `foundation/04-model-friction.md` for friction placement principles.

---

*Last updated: April 2026*
