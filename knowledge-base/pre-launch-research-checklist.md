# Pre-Launch Monetization Research Checklist

> A decision-gate checklist. Each item must be completed, or a conscious decision must be made to defer it with a documented rationale. Do not launch a monetization model that skips these steps without acknowledging the assumptions being made.

---

## How to Use This Checklist

Work through each phase in order. Each phase produces outputs that the next phase depends on. Skipping phases does not remove the dependency — it replaces evidence with assumptions.

For each item: **Complete**, **Deferred with rationale**, or **Not applicable** (with explanation).

---

## Phase 1 — Use Case Foundation

*Reference: `foundation/01-use-case-framework.md`*

- [ ] **Problem statement defined from the customer's perspective** — not from the product feature list
- [ ] **Primary persona identified** — demographics, geography, income bracket, device behaviour
- [ ] **Paying persona and using persona distinguished** — if they are different people (e.g., caregiver pays, dependent uses), both are documented with separate monetization and UX implications
- [ ] **Alternatives mapped** — what does the user do if this product doesn't exist? What does that imply about WTP baseline?
- [ ] **Core motivation classified** — Personal / Financial / Social
- [ ] **Differentiation articulated** — a specific, testable reason users choose this product over alternatives (not "better/easier")
- [ ] **Usage frequency estimated** — daily / weekly / monthly / episodic; supported by qualitative interviews or analogous product data
- [ ] **Multiple use cases identified and separated** — if the product serves more than one distinct use case, each has its own monetization hypothesis
- [ ] **Sub-use case frequency variance checked** — if one sub-use case is daily and another is episodic, they have been assessed as separate monetization problems

**Phase 1 output:** A completed use case definition for each primary use case. These definitions feed all subsequent research.

---

## Phase 2 — Value Metric Research

*Reference: `consumer-research/01-value-metric-research.md`*

- [ ] **6–10 value metric candidates generated** — using the three generation prompts (customer's perspective, not product-centric)
- [ ] **Metric types assessed** — feature-based / usage-based / outcome-based trade-offs evaluated for each candidate
- [ ] **Max-Diff survey designed** — 4–6 items per question; 10–20 questions per respondent; minimum 150 respondents per segment
- [ ] **Survey framing validated** — each metric written as a benefit statement, not a feature label
- [ ] **Max-Diff fielded per target market** — separate study per market (do not blend markets)
- [ ] **Max-Diff segmented** — results analysed by use case, persona, market, and key demographics
- [ ] **Top 2–3 metric candidates identified** from scores; not just the single top scorer
- [ ] **Scaled WTP check run** — WTP tested at low / medium / high levels of the top candidates; confirmed that WTP increases meaningfully as the metric increases
- [ ] **Growth loop compatibility checked** — confirmed that the chosen metric does not gate actions critical to acquisition or retention loops
- [ ] **Continuous vs. banded decision made** — if metric has high variance or user budget anxiety risk, banded pricing selected

**Phase 2 output:** A recommended value metric with documented rationale, segmented scores, and a Scaled WTP validation result.

---

## Phase 3 — Feature Value Research

*Reference: `consumer-research/02-feature-value-research.md`*

- [ ] **Full feature catalogue built** — all existing and planned features listed with their use case and current free/paid status
- [ ] **Feature list trimmed to 15–25 items** for survey (near-zero usage features pre-filtered)
- [ ] **Max-Diff survey designed** — separate survey from value metric research; minimum 200 respondents per segment
- [ ] **Survey respondent mix confirmed** — includes current free users, current paid users, and (if available) churned users
- [ ] **Survey item framing validated** — features written as outcomes, not product capabilities
- [ ] **Scores segmented** — results analysed by persona, plan level (free vs. paid), and market
- [ ] **2×2 Packaging Matrix populated** — each feature plotted against Relative Preference (Max-Diff) × WTP contribution
- [ ] **Table stakes identified** — high-value, low-WTP features confirmed as free in all tiers
- [ ] **Differentiators identified** — high-value, high-WTP features confirmed as upgrade triggers
- [ ] **Growth loop override applied** — confirmed that no feature critical to the viral/referral path or Aha Moment is gated, regardless of 2×2 matrix placement
- [ ] **Tier structure designed** — maximum 3 tiers (4 only if a clearly distinct persona justifies it); each tier designed for a specific persona with a clear upgrade trigger

**Phase 3 output:** A 2×2 feature classification matrix, a tier structure design with tier-level personas, and identified upgrade triggers for each tier transition.

---

## Phase 4 — Willingness to Pay Research

*Reference: `consumer-research/03-willingness-to-pay.md`*

- [ ] **Van Westendorp designed** — survey built around the finalised tier description(s) from Phase 3 (not an abstract product)
- [ ] **Survey presented in local currency** — one survey per market; never USD for SEA markets
- [ ] **No current price shown before the survey** — respondents not anchored to an existing price
- [ ] **Van Westendorp fielded per target market** — separate studies; do not blend markets into a single result
- [ ] **Acceptable Price Range identified** — lower and upper bounds per market
- [ ] **Optimal Price Point (OPP) identified** — the directional price that minimises price resistance
- [ ] **WTP segmented** — results separated by paying vs. non-paying users, primary persona, and geography
- [ ] **Gabor-Granger run (optional)** — if Van Westendorp range is wide or team needs specific price points before launch
- [ ] **Price point candidates selected** — 2–3 candidate prices within the Van Westendorp acceptable range per market
- [ ] **AARPC calculated** — price candidates normalised to annual revenue per customer for benchmarking

**Phase 4 output:** Acceptable price ranges per market, 2–3 candidate price points per tier per market, and a documented justification for the initial launch price.

---

## Phase 5 — Monetization Triad Validation

*Reference: `foundation/03-monetization-triad.md`*

- [ ] **Consumer View gaps reviewed** — confirmed that value metric, feature packaging, price, and timing align with consumer research outputs
- [ ] **Growth loop friction assessed** — confirmed that no monetization element places friction on:
  - The viral/referral/sharing action
  - The Aha Moment / core activation sequence
  - The primary habitual daily/weekly action
- [ ] **Free tier cost modelled** — cost to serve free users calculated as implied CAC; confirmed that conversion revenue from free-to-paid cohorts covers the free tier cost within a reasonable payback window
- [ ] **Cost to Serve calculated** — all 7 cost categories assessed per customer per month (see `analytics/04-cost-to-serve.md`)
- [ ] **Payback Period calculated** — at the launch price, for each target market
- [ ] **Net Contribution Margin calculated** — at the launch price, for each target market
- [ ] **Triad gaps documented** — any identified gap between model and triad is documented with a stated plan for validation or resolution post-launch

**Phase 5 output:** A documented triad gap analysis with clear open items and a post-launch validation plan.

---

## Phase 6 — Charge Timing Decision

*Reference: `foundation/02-monetization-model-structure.md` §Element 4*

- [ ] **Usage frequency distribution assessed** — frequency histogram or analogous product data reviewed; not assumed
- [ ] **Transactional vs. recurring decision made** — high-frequency / low-variance → recurring; high-variance across users → transactional or hybrid
- [ ] **Habit Moment defined** — Action + Frequency + Timeframe; minimum subscription term set to cover the time required for habit formation
- [ ] **Monthly vs. annual default chosen** — monthly default for new markets / categories; annual option available with appropriate discount
- [ ] **Annual offer timing defined** — annual plan upgrade prompt planned for after 60–90 days of consistent monthly usage (habit confirmed)

**Phase 6 output:** A documented timing model with the minimum commitment period justified by the Habit Moment framework.

---

## Phase 7 — Pre-Launch Validation Plan

- [ ] **Live test design specified** — A/B test design (variants, traffic split, primary metric, minimum sample size, significance threshold)
- [ ] **Post-launch monitoring metrics defined** — which metrics will be checked at day 7, 30, 90 post-launch
- [ ] **Cohort tagging confirmed** — first-payment cohort tagging by market, channel, plan, and billing cycle implemented in the billing system before launch
- [ ] **Churn classification system in place** — cancellation survey live; voluntary vs. involuntary churn trackable from day 1
- [ ] **Activation milestone defined** — the Aha Moment is defined and measurable; time-to-aha trackable from first payment
- [ ] **At-risk signal triggers defined** — automated flags for at-risk signals (login drop, feature inactivity) configured before launch

---

## Deferred Items Log

Use this section to document any checklist items being deferred at launch, with the assumption being made and the plan to validate post-launch:

| Item | Assumption Made | Validation Plan | Target Date |
|---|---|---|---|
| Example: Van Westendorp not run in Market B | Price from Market A is directionally applicable | Run Van Westendorp in Market B at 500 paid users | Q2 post-launch |

---

*Last updated: April 2026*
