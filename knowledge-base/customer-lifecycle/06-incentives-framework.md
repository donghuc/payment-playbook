# Incentives Framework

> Part of the Customer Lifecycle Optimisation section. See [customer-lifecycle.md](../customer-lifecycle.md) for the index.

---

## Purpose

Incentives — discounts, trials, credits, gifts, and promotional offers — are powerful conversion and retention tools, but they carry long-term structural risks that are frequently underweighted. This file defines when incentives are appropriate, when they are not, and the guardrails that prevent incentive programs from undermining the business they're meant to support.

---

## What Counts as an Incentive

For the purpose of this framework, an incentive is any mechanism that modifies the standard price or terms to encourage a desired customer behaviour. This includes:

- Introductory discounts (first month free, first 3 months at reduced price)
- Trial periods (free trial, reverse trial)
- Win-back offers (discount for churned users to resubscribe)
- Annual prepay discounts (price reduction for committing upfront)
- Referral rewards (credit or discount for both referrer and referee)
- Retention offers (discount offered at cancellation moment)
- Flash sales and seasonal promotions

---

## The Long-Term Risks of Incentives

### Risk 1 — Price Anchoring

Every discount creates an anchor. If a product launches with a 50% introductory discount, the customer's mental price reference is the discounted price, not the full price. When the price normalises, the customer experiences it as a 100% price increase — even if the "original" price was never paid.

```
Effect: Full-price conversion rates drop; churn spikes at discount expiry.
Measurement: Track conversion rate from discounted cohort to full price
             vs. conversion rate from non-discounted cohort at the same transition.
```

### Risk 2 — Discount-Trained Behaviour

Customers who receive discounts frequently learn to wait for the next sale. This is most severe in:
- Flash sale programs run more than quarterly
- Win-back offers that become predictable (e.g., always sent at 30 days post-churn)
- Seasonal promotions that run in the same window every year

```
Effect: Customers deliberately churn before the expected discount window,
        then resubscribe at the discount rate.
Measurement: Track % of resubscriptions that arrive within 7 days of
             the window when the previous win-back offer was sent.
```

### Risk 3 — Growth Loop Degradation

If discounts make up a significant portion of acquisition, the customer base becomes disproportionately price-sensitive. These customers:
- Have lower LTV than organically acquired customers (proven empirically in SEA market data)
- Are more likely to churn when the price rises
- Are less likely to refer others (they position the product as a bargain, not a premium choice)

```
Effect: LTV:CAC ratio declines as discount-acquired cohorts dilute the base.
Measurement: Segment LTV and 12-month retention by acquisition incentive status:
             incentive-acquired vs. organically acquired.
```

### Risk 4 — Cost Pressure

Sustained incentive programs become structural costs. They are easy to start and difficult to remove without triggering a negative customer reaction. Organisations frequently underestimate the cumulative cost of "small" discounts at scale.

```
Effect: Gross margin declines as incentive programs scale; cost savings require
        cutting the programs that have now become customer expectations.
Measurement: Incentive cost as % of gross revenue, trended quarterly.
```

---

## The Habit Formation Requirement

**The single most important rule for incentives:**

> An incentive that brings a customer in before habit is formed is a loan, not an investment. The customer will leave when the incentive ends unless the habit has been established.

**Habit Moment = Action + Frequency + Timeframe**

An incentive is effective when:
1. The customer performs the core product action
2. At the product's natural frequency
3. For long enough that the action feels automatic — not deliberate

Only after the habit is formed does the customer value the product independently of the incentive. Removing the incentive before habit is formed will produce churn at the rate of discount expiry.

**Practical implications:**

| Incentive Type | Habit Formation Check |
|---|---|
| Free trial (14 days) | For daily-use products: 14 days may be enough. For weekly-use products: 14 days is likely too short. |
| Introductory pricing (3 months) | 90 days is typically sufficient for daily/weekly habit; test by measuring usage at day 85 vs. day 15. |
| Win-back offer (1 month discount) | A 1-month discount does not establish new habit; only works if the habit was previously established and the churn was price-driven. |
| Annual plan discount | Customer has already been on monthly for 60–90 days; habit formed; safe to offer annual. |

---

## Guardrails — When Not to Use Incentives

| Situation | Why Incentives Don't Help |
|---|---|
| Customer churning for product/fit reasons | A discount doesn't fix the product. Offering one validates the churn and creates a price anchor for any future resubscription. |
| Customer with firm, stated cancellation intent | Intervening with a discount on a decided churner can produce negative reactions and public complaints about dark patterns. |
| Before the product has found PMF | Incentivising users into a product that isn't ready creates false acquisition signals and a churn wave when the incentive expires. |
| Repeated win-back offers to the same customer | After two declined win-back offers, additional offers are ignored or resented. Stop the sequence. |
| As a substitute for fixing an activation problem | If users are churning because they don't find value, discounting their subscription makes them dissatisfied customers for longer — it doesn't solve the problem. |

---

## Guardrails — How to Use Incentives Safely

| Guardrail | Implementation |
|---|---|
| **Sunset all introductory discounts** | Define a clear expiry at launch. Communicate it. Do not extend indefinitely. |
| **Measure discount-cohort LTV vs. organic LTV** | If discount cohorts retain at <70% of organic cohort LTV, the incentive is net-negative and should be restructured. |
| **Limit win-back offers to 2 per churned user** | Track prior offers in the CRM. Suppress from campaigns after two declined attempts. |
| **Never disclose predictable win-back timing** | If customers know they'll receive a 30% offer 30 days after cancellation, they will plan around it. Vary timing; do not publicise the programme. |
| **Use incentives to accelerate decisions, not to create them** | Incentives work when the customer is already at 80% of a purchase decision. They do not work when the customer doesn't want the product. |
| **Track cost of incentives as a first-class metric** | Incentive cost as % of revenue should be on the monthly metrics dashboard alongside CAC and MRR. |
| **Apply EU Omnibus Directive compliance for EU markets** | A crossed-out "original price" must have been the actual price for 30+ days prior. Fabricated reference prices are illegal. |

---

## Incentive Design by Objective

| Objective | Right Incentive Type | Wrong Incentive Type |
|---|---|---|
| Acquire new users | Free trial / reverse trial / referral program | Flash sale (attracts wrong cohort) |
| Convert trial users | Price guarantee / plan lock-in | Deep discount (creates price anchor) |
| Reduce early-month churn | Extended trial / onboarding completion reward | Retention discount (too early; habit not formed) |
| Upgrade monthly to annual | Annual plan discount (15–25%) | Offering annual before 60 days monthly |
| Recover price-driven churners | Targeted win-back discount (time-boxed) | Sending to all churned users |
| Retain at-risk customers | Downgrade path / pause option / feature unlock | Blanket discount not tied to stated reason |

---

*Last updated: April 2026*
