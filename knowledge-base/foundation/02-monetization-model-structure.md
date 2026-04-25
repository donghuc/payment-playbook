# Monetization Model Structure

> Part of the Monetization Strategy Foundation. See [monetization-strategy.md](../monetization-strategy.md) for the index.

---

## Overview

A monetization model is a working hypothesis, not a fixed truth. It must be grounded in use case analysis and validated against the Monetization Triad. A monetization model has four elements:

```
MonetizationModel = {
  Scale (Value Metric),
  What (Paid Attributes),
  Amount (Price Level),
  When (Charge Timing)
}
```

Each element can be changed independently. Changing one element without revisiting the others creates misalignment.

---

## Element 1: Scale (Value Metric)

**Purpose:** Define how price scales with customer value. Price must increase as value increases.

### Three Types of Value Metrics

| Type | Definition | Predictability | Value Alignment | Examples |
|---|---|---|---|---|
| **Feature-based** | Price increases as features unlocked increase | Highest | Lowest | Tiered SaaS plans, subscription boxes |
| **Usage-based** | Price scales with how much the product is used | Medium | Medium | Per editor (Figma), per contact (Mailchimp), per active user |
| **Outcome-based** | Price scales with a measurable outcome delivered | Lowest | Highest | Per lead (Thumbtack), per ticket (Eventbrite), % of booking (Airbnb) |

### Metric Shape

- **Continuous** — price changes for every unit of usage (e.g., per editor, per event). Better value alignment, lower predictability, risk of "nickel-and-diming" perception.
- **Banded** — price applies to predefined ranges (e.g., 1–5 users = $X, 6–10 users = $Y). Higher predictability, lower friction, preferred in price-sensitive markets.

### Multiple Metrics

A single use case may use more than one value metric:
- Flat fee + percentage (e.g., subscription + transaction fee)
- Fixed feature tier + usage overage
- Base subscription + add-on units

### Selecting the Right Metric

1. Identify the core customer motivation (personal / financial / social)
2. Generate measurable proxies closely linked to that motivation
3. Run Max-Diff survey to rank which proxy customers value most
4. Validate with Scaled WTP analysis (Max-Diff × Van Westendorp × usage calibration)
5. Check that the metric does not place friction on actions critical to growth loops

See `consumer-research/01-value-metric-research.md` for full methodology.

---

## Element 2: What (Paid Attributes)

**Purpose:** Define what customers pay for — features, capabilities, limits, permissions, access levels.

### Packaging Principles

- Free users may receive value, but no monetised attributes
- Each paid tier must have clearly distinct, valued attributes for its target persona
- Not all valued features are monetisable — some are table stakes (expected free) or would damage growth loops if gated

### The 2×2 Packaging Matrix

Plot each feature by: Relative Preference (Max-Diff score) × % deviation from median WTP (Van Westendorp)

| | Low WTP | High WTP |
|---|---|---|
| **High Value** | Table Stakes → include in all tiers or free | Differentiators → upgrade triggers in premium tiers |
| **Low Value** | Clutter → keep free or remove | Niche → add-ons or specialised use cases |

**Override rule:** Even if WTP is high, do NOT gate features that drive acquisition, activation, or retention loops.

See `consumer-research/02-feature-value-research.md` for the full packaging methodology.

---

## Element 3: Amount (Price Level)

**Purpose:** Define how much is charged for the defined value metric.

### Normalise to AARPC

All pricing should be normalised to **Average Annual Revenue Per Customer (AARPC)** — not per user, not per seat, not per month. This enables apples-to-apples comparison across models.

### Common AARPC Bands

| Band | Market Position |
|---|---|
| $0 | Free — strategic choice to support acquisition or viral loops |
| ~$100/year | Consumer products (B2C SaaS, apps) |
| ~$1,000/year | SMB SaaS |
| ~$10,000/year | Mid-market B2B |
| $100,000+/year | Enterprise software |

### Price Setting Process

1. **Van Westendorp** survey → establishes acceptable price range and directional optimal point
2. **Gabor-Granger** (optional) → tests discrete price points for revenue maximisation
3. **Conjoint analysis** (optional) → mimics real purchase decisions with bundles
4. **Live A/B testing** → validates actual conversion behaviour at scale (requires traffic)

**Important:** All survey methods produce hypotheses, not final prices. Always validate with live conversion data before committing.

See `consumer-research/03-willingness-to-pay.md` for full WTP methodology.
See `pricing/04-price-testing.md` for live testing methodology.

### Geographic Segmentation

WTP is market-specific. Indonesia, Vietnam, and other SEA markets have materially different willingness to pay than US or European markets. Run separate Van Westendorp studies per target market before setting price points.

---

## Element 4: When (Charge Timing)

**Purpose:** Define when payment occurs relative to value delivery.

### Supported Timing Models

| Model | Best For | Risk |
|---|---|---|
| **Never** | Free tier; growth loop acquisition | Requires conversion path to paid |
| **Per transaction** | High-variance usage; episodic problems | Revenue volatility; no recurring base |
| **Monthly** | Frequent use; early-stage markets; low commitment tolerance | Higher churn opportunity |
| **Annually** | Established habit; cost-conscious users wanting discount | Commitment friction at signup |
| **Multi-year** | Enterprise; long sales cycles | Unusual in B2C |

### Transactional vs. Recurring Decision

Use frequency histogram analysis:
- **High frequency + low variance** → recurring subscription
- **High variance across users** → transactional pricing

Build the histogram by counting active usage days over a window matching your qualitative frequency hypothesis (e.g., last 28 days for a weekly product).

### Term of Recurrence Decision

Determine minimum commitment length using:
1. **Natural frequency of adoption** — how often do users consider solutions for this problem? (qualitative interviews)
2. **Time to Habit Moment** — how long until the product feels essential? (Habit Moment = Action + Frequency + Timeframe)

**Rule:** Longer time to habit → longer minimum commitment gives users runway to form habits without re-deciding to pay.

| Market / Segment | Typical Habit Formation | Implied Term |
|---|---|---|
| Consumer apps (daily use) | Days to weeks | Monthly |
| Consumer apps (weekly use) | 2–6 weeks | Monthly, offer annual |
| SEA markets (new category) | Longer (category unfamiliarity) | Monthly initially; annual once validated |
| Enterprise | Months | Annual or multi-year |

---

## Revenue Equation Per Model

Once all four elements are defined, the revenue equation can be constructed:

| Model Type | Revenue Equation |
|---|---|
| Subscription | # Customers × Avg Value Metric/Customer × Avg Revenue/Unit |
| Marketplace (provider side) | # Paying Providers × Avg Transactions/Provider × Avg Revenue/Transaction |
| Transactional | # Customers × Transactions/Customer × Avg Order Value × Fee% |

See `analytics/01-revenue-equation.md` for full breakdown by model type.

---

## Example: Applying the Framework

### B2C Subscription App (Illustrative)

| Element | Hypothesis | Validation Needed |
|---|---|---|
| Scale | Banded by number of units covered (e.g., 1 / up to 3 / family tier) | Max-Diff to confirm the banded unit is the right value proxy; not outcomes/events |
| What | Core passive protection feature stays free (acquisition loop driver); advanced detection, history access, and coordination features are paid | Feature value Max-Diff to validate the free/paid split |
| Amount | Market-specific price points; higher in high-WTP markets, lower in price-sensitive markets | Van Westendorp per market |
| When | Monthly subscription; annual offered at discount after habit is established (60–90 days) | Frequency histogram + habit formation study |

---

*Last updated: April 2026*
