# Price Testing & Validation

> Part of the Pricing Strategy pillar. See [pricing-strategy.md](../pricing-strategy.md) for the index.

---

## Overview

Price setting is not a one-time decision. Pricing is a hypothesis: you are asserting that users in a specific market, for a specific product, at a specific stage of maturity, will pay a specific amount at a meaningful conversion rate. Every one of these variables changes over time, and the optimal price changes with them.

Price testing is the discipline of validating that hypothesis empirically, iterating toward better prices, and understanding *why* users do or don't convert at given price points — not just *that* they do or don't.

This file covers four methods: qualitative willingness-to-pay research (what to charge before you have traffic), A/B testing (what to charge when you have traffic), cohort analysis (how to measure the long-term impact of price changes), and competitive benchmarking (where to start before any data exists).

> **Note on sequencing:** WTP research (Van Westendorp, Gabor-Granger, Conjoint) should be run *after* completing value metric research (Max-Diff on value metric) and feature value research (Max-Diff on packaging). Pricing a product before the value metric and tier structure are validated produces WTP data that may not apply to the final product. See `consumer-research/03-willingness-to-pay.md` for the full WTP methodology including segmentation requirements and geographic variation. The summaries below are operational references; the Consumer Research section is the canonical methodology.

---

## Method 1 — Competitive Benchmarking (Pre-Launch Baseline)

### When to Use

Before launching a product, before you have any paying users, before any data exists. Competitive benchmarking gives you a starting bracket for pricing based on what comparable products charge for comparable value.

### How to Do It

1. **Identify 5–10 comparable products.** Look for products that:
   - Target the same user segment
   - Solve the same or adjacent problem
   - Operate in the same geographic markets
   - Are at a similar or slightly more mature stage

2. **Map their pricing tiers.** Record: tier names, price per month (monthly billing), price per month (annual billing equivalent), what's included at each tier, and any freemium or free trial structure.

3. **Identify your positioning intent.** Do you want to be:
   - **Price leader** (below market average): appropriate when product is newer, less proven, or when price is the primary acquisition lever
   - **Market rate** (at average): appropriate for established-feature parity products
   - **Price premium** (above average): only defensible with demonstrably superior UX, outcomes, or brand

4. **Set initial pricing 10–20% below the positioning anchor.** Most products launch slightly below their long-term intended price to reduce the activation barrier. It is easier to raise prices than lower them — underprice at launch and increase as the product matures and social proof accumulates.

### Limitations

Competitive benchmarking tells you what your competitors are charging, not what users are willing to pay for your specific product. Two products solving the same problem may have radically different willingness-to-pay if one has significantly better UX, deeper features, or stronger brand positioning. Use benchmarking as a starting point, not a ceiling.

---

## Method 2 — Willingness-to-Pay Research (Qualitative)

### Van Westendorp Price Sensitivity Meter

The Van Westendorp PSM (Price Sensitivity Meter) is a survey-based method developed by Dutch economist Peter Van Westendorp in 1976. It is the most widely used qualitative pricing research method and produces actionable price range data without requiring an A/B test.

**How it works:** Survey a sample of target users or existing users with four questions about a product they've seen described or used:

1. "At what price would you consider this product **too expensive** to consider buying?" [Too Expensive]
2. "At what price would you consider this product **so cheap** that you would question its quality?" [Too Cheap]
3. "At what price would you consider this product **starting to get expensive**, but you'd still consider it?" [Expensive but Acceptable]
4. "At what price would you consider this product a **good deal / excellent value**?" [Cheap / Good Value]

**Analysis:** Plot the four cumulative distribution curves. The intersections define:
- **Acceptable Price Range:** Between the "Too Cheap" and "Too Expensive" intersections
- **Optimal Price Point (OPP):** Where the "Too Cheap" and "Too Expensive" lines cross — maximum respondents neither find it too cheap nor too expensive
- **Point of Marginal Cheapness (PMC):** Where "Too Cheap" exceeds "Cheap/Good Value" — below this, price implies low quality
- **Point of Marginal Expensiveness (PME):** Where "Too Expensive" exceeds "Expensive but Acceptable" — above this, price is broadly rejected

**Required sample size:** 30+ responses produces directionally useful results; 100–200 gives reliable data. More is better, but don't wait for statistical perfection before acting on broad signals.

**Limitations:** Van Westendorp measures stated preference, not revealed preference. Users often give aspirational answers about price tolerance that overstate actual willingness-to-pay. Treat the OPP as the upper bound of your initial pricing, not a confirmed sweet spot.

### Gabor-Granger Method

An alternative to Van Westendorp that tests discrete price points rather than open-ended ranges.

**How it works:** Present a series of price points to survey respondents and ask for each: "Would you buy this product at $X/month?" Starting from the highest price, step down through pre-defined price points, recording the percentage of respondents who say yes at each level.

**Analysis:** Plot the demand curve (% yes vs. price). The revenue-maximising price is the price × conversion rate combination that produces the highest expected revenue.

**Example:**
| Price | % would buy | Revenue index |
|-------|------------|---------------|
| $20 | 12% | 2.40 |
| $15 | 22% | 3.30 |
| $12 | 31% | 3.72 |
| $10 | 41% | 4.10 |
| $8  | 52% | 4.16 |
| $6  | 67% | 4.02 |

In this example, $8/month maximises revenue index. The curve also shows that $12 and $10 have similar revenue potential with lower volume — relevant if higher price signals quality for the specific product.

**Advantage over Van Westendorp:** Tests specific price points rather than ranges; directly informs the revenue-maximising price. Better for deciding between 2–3 candidate prices.

---

## Method 3 — A/B Price Testing (Live Traffic)

### When to Use

When the product has sufficient traffic to run a statistically significant test in a reasonable time window. A/B price testing is the only method that measures *actual conversion behaviour* rather than stated preferences.

### Minimum Traffic Requirements

The minimum traffic required depends on your current conversion rate and the effect size you want to detect.

**Rule of thumb for SaaS pricing tests:**

| Monthly unique visitors | Baseline conversion rate | Time to significance (80% power, 5% significance, 10% relative effect) |
|------------------------|------------------------|---------------------------------------------------------------------|
| 1,000 | 2% | ~20 weeks |
| 5,000 | 2% | ~4 weeks |
| 10,000 | 2% | ~2 weeks |
| 10,000 | 5% | ~1 week |

*Use a sample size calculator (e.g., Optimizely's calculator, Evan Miller's) to compute exact requirements for your specific numbers.*

**Practical implication:** Most early-stage products do not have enough traffic for statistically rigorous A/B testing. Van Westendorp or Gabor-Granger research should be the primary pricing validation method at early stage. A/B testing becomes viable at scale.

### A/B Test Design for Pricing

**What to test:**
- Absolute price level (e.g., $9/month vs. $12/month vs. $15/month)
- Annual vs. monthly default (which billing cycle is shown first)
- Framing of the same price (monthly equivalent vs. annual total)
- Tier packaging (different feature sets at the same price)

**What NOT to test simultaneously:**
- Price level AND packaging — you won't know which variable drove any change
- Price level AND framing — same issue
- Keep tests single-variable whenever possible

**Segment assignment:** Assign users to price variants by user ID (not session or cookie) to ensure the same user sees the same price on repeated visits. Never split existing paying customers into different pricing experiences.

**Geographic cohort consideration:** If running localised pricing tests, test separately within each geographic cohort. A test that shows $9 vs. $12 for US users tells you nothing about Vietnam users' response to VND 49,000 vs. VND 79,000.

### Success Metrics for Price Tests

Primary metric: **Revenue per visitor** (not just conversion rate). A higher price may convert less, but if the revenue per visitor is higher, it is the better price. Always calculate both:

```
Revenue per visitor = Conversion rate × Average Revenue Per Conversion

Variant A: $9/month, 5% conversion  → 0.05 × $9   = $0.45/visitor
Variant B: $12/month, 4% conversion → 0.04 × $12  = $0.48/visitor
```

In this example, Variant B is 7% better on revenue per visitor despite 20% lower conversion rate.

Secondary metric: **Retention by price cohort.** Users who convert at a lower price point sometimes show lower retention rates (lower price attracts more casual or less-committed users). Don't evaluate a price test purely on initial conversion — measure 30-day and 90-day retention by variant if possible.

### Avoiding Ethical Issues in Price Testing

**Fairness concern:** Showing two different users two different prices for the same product at the same time is a standard practice in dynamic pricing, but some users find it unfair if they discover it. To minimise exposure:
- Don't expose the test — don't include variant identifiers in URLs that users share
- Apply the lower price uniformly after the test concludes — the winning price becomes the standard price
- Do not apply higher prices to users who have already seen the lower price in the same session

**Legal consideration:** In the EU, price discrimination between EU consumers for the same product based on location (geo-discrimination) is restricted under the EU Geo-blocking Regulation (2018). Price tests that differentiate by EU country may require legal review. Price differentiation by non-geographic variables (device, session length, referral source) is less regulated but may still be challenged under general consumer protection principles.

---

## Method 4 — Cohort Analysis for Pricing Changes

### What It Measures

Cohort analysis tracks the behaviour of users who subscribed at a specific price point over time, allowing comparison across price cohorts. It answers questions like: "Did users who subscribed when we charged $8/month retain better than users who subscribed at $12/month?"

### How to Structure Pricing Cohorts

When you change prices (either from a test or from a deliberate repricing), tag each subscriber at the time of their initial subscription with:
- The price they were shown at signup
- The plan they chose
- The date range their pricing cohort covers

This tagging enables later analysis of:
- MRR retention by price cohort (do different price cohorts churn at different rates?)
- Upgrade rates by price cohort (do lower-price entry cohorts upgrade more or less frequently?)
- LTV by price cohort (which price produces higher lifetime value, accounting for both conversion rate and retention?)

### LTV Analysis by Price Cohort

The most important long-term pricing metric is LTV by price cohort:

```
LTV = Average Monthly Revenue × (1 / Monthly Churn Rate)

For a subscriber cohort at $9/month with 4% monthly churn:
LTV = $9 × (1 / 0.04) = $9 × 25 = $225

For a subscriber cohort at $12/month with 5% monthly churn:
LTV = $12 × (1 / 0.05) = $12 × 20 = $240
```

In this example, the $12 cohort has higher LTV ($240 vs $225) despite slightly higher churn — the higher price more than offsets the retention difference.

**Important:** LTV analysis requires at least 6–12 months of cohort data to be meaningful. Early churn curves may not reflect long-term retention. Do not make permanent pricing decisions based on 30-day cohort data.

---

## Method 5 — Continuous Pricing Monitoring

### What to Track Ongoing

Once pricing is set, maintain a quarterly pricing health review:

| Metric | What it tells you | Action threshold |
|--------|------------------|-----------------|
| Trial-to-paid conversion rate | Whether current price is converting trials effectively | Drop of >3pp month-over-month |
| Revenue per visitor | Overall monetisation efficiency of pricing page | Drop of >10% over quarter |
| Plan distribution | Whether users are migrating toward lower tiers | Sustained shift of >5pp toward lower tiers |
| Churn by price cohort | Whether different price cohorts retain differently | Any cohort showing materially higher churn |
| Upgrade rate | Whether users are moving up tiers over time | Drop below 2% monthly upgrade rate |

### Competitive Price Monitoring

Maintain a quarterly competitive pricing audit:
1. Check pricing pages of 5–10 direct competitors
2. Record any pricing changes
3. Note new feature packages or tier additions
4. Assess whether your price positioning relative to competitors has shifted

The market price for a given feature set is not fixed — it shifts as categories mature, as features commoditise, and as new entrants redefine the baseline. A price that was premium in 2022 may be at-market by 2025.

---

## Repricing: How to Raise Prices

Price increases are among the highest-ROI commercial decisions a SaaS company can make. A 10% price increase with 95% retention produces more revenue than a 10% increase in new customer acquisition with the same acquisition cost. But price increases require careful execution to avoid churn spikes and reputational damage.

### Principles for Price Increases

**1. Grandfather existing subscribers:** When raising prices, grandfather existing paying subscribers at their current price for at least 3–6 months (ideally 12 months or indefinitely for loyal long-term subscribers). Applying a price increase to existing subscribers is the most common cause of sudden churn spikes.

**2. Communicate value before announcing price:** In the months before a price increase, communicate product improvements, new features, and value delivered. The announcement should feel like "because we've done X, Y, and Z, we're updating pricing" — not "we're raising prices."

**3. Give advance notice:** Standard practice is 30–60 days notice for monthly subscribers, 60–90 days for annual subscribers. Shorter notice windows trigger more reactive churn.

**4. Offer lock-in at old price:** Give existing subscribers the option to lock in the current price by upgrading to annual billing before the price change takes effect. This simultaneously captures annual commitments (cash flow benefit) and reduces churn from the price increase.

**5. Start with new users:** Always apply new pricing to new users first, before making a decision about existing subscribers. This tests the market impact before creating a retention problem.

### Messaging Templates

**New user pricing change:**
> "Starting [date], [Product] will be priced at [new price]/month. Sign up before [date] to lock in current pricing."

**Existing subscriber notification:**
> "We're updating our pricing on [date] to reflect the significant improvements we've made to [Product] over the past [period]. As a valued subscriber, your current rate of [old price]/month is grandfathered until [date]. You'll have the option to lock in your current pricing by switching to annual billing before [date]."

---

*Last updated: April 2026*
