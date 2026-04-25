# Cost to Serve and Unit Economics

> Part of the Revenue Analytics Framework. See [revenue-analytics.md](../revenue-analytics.md) for the index.

---

## Purpose

Unit economics answers the question: is each customer profitable, and how long does it take to recover the cost of acquiring them? Without unit economics, revenue growth can mask a fundamentally unsustainable business — where each new customer costs more to acquire and serve than they contribute in revenue.

---

## The Core Unit Economics Metrics

### Primary Metrics (Use These)

**Net Contribution Margin** and **Payback Period** are the primary unit economics metrics. They are more complete and operationally actionable than LTV:CAC alone.

```
Net Contribution Margin = Revenue − Cost to Serve − CAC

Payback Period = time for cumulative Net Contribution Margin to exceed CAC
```

### Secondary Metrics (Use With Stated Assumptions)

**LTV** and **LTV:CAC** are useful directional metrics but should always be accompanied by explicit assumptions about churn rate, discount rate, and time horizon.

```
LTV (simple) = ARPC ÷ Monthly Churn Rate

LTV (with margin) = (ARPC × Gross Margin %) ÷ Monthly Churn Rate

LTV:CAC = LTV ÷ CAC
  Benchmark: > 3:1 is healthy; < 1:1 is unsustainable
```

**Why LTV:CAC is insufficient alone:**
- LTV is based on assumed future churn — small churn rate changes produce large LTV swings
- LTV:CAC ignores when the CAC is recovered — a 3:1 ratio paid back over 5 years is far worse than 2:1 paid back in 4 months
- Neither metric accounts for the ongoing cost to serve beyond gross margin
- **Use Net Contribution Margin + Payback Period as the primary decision metrics**

---

## Cost to Serve — The Seven Categories

Cost to serve includes all costs that scale with serving a customer. Exclude fixed/non-variable costs (they do not change per customer served).

| Category | Examples | Scaling Behaviour |
|---|---|---|
| **Physical product** | Manufacturing, packaging, assembly | Variable (per unit) |
| **Logistics** | Shipping, delivery, returns handling | Variable (per transaction) |
| **Product development & maintenance** | R&D, ongoing feature work, technical debt | Semi-variable |
| **Storage & hosting** | Cloud infrastructure, data storage, media | Semi-variable (per user) |
| **Customer support & success** | Support team hours, retention marketing | Semi-variable (scales with user volume and complexity) |
| **Program & tooling** | Internal SaaS tools (CRM, analytics, design, comms) | Semi-variable |
| **Partnerships & integrations** | Revenue share, reseller fees, API partner costs | Variable (per transaction or per user) |

**Rule:** Include variable and semi-variable costs. Exclude fixed costs (rent, founders' salaries, non-user-scaling headcount).

---

## Calculating Cost to Serve Per Customer

```
Step 1: Identify all 7 cost categories for your model
Step 2: Determine which costs are per-user, per-transaction, or time-based
Step 3: Calculate total variable/semi-variable cost per customer per month

Example (consumer subscription app):
  Hosting & infrastructure:          $0.40/user/month
  Support (blended hourly rate):     $0.60/user/month
  Payment processing (2.9% + $0.30): ~$0.55/user/month (at $9 ARPC)
  Third-party API integrations:      $0.20/user/month
  ─────────────────────────────────────────────────────
  Total cost to serve:               $1.75/user/month

  Gross margin = ($9.00 − $1.75) ÷ $9.00 = 80.6%
```

**Free tier has a real cost to serve.** Free users are not zero-cost — they consume infrastructure, support, and tooling. The cost to serve free users is acquisition cost (CAC equivalent), not zero.

```
Free tier unit economics:
  Cost to serve free user:    $0.30/month
  Conversion rate to paid:    3%
  Payback period contribution: $0.30 ÷ 0.03 = $10 implied CAC from free tier cost
  
  This implied CAC must be included in total CAC calculation:
  Total CAC = Paid acquisition CAC + Implied free tier CAC
```

---

## Customer Acquisition Cost (CAC)

```
CAC = Total Acquisition Spend in Period ÷ New Customers Acquired in Period

Important: Use the same time period for spend and acquisition.
           Lag effects (spend in month N produces customers in month N+1)
           should be accounted for — typically use a 1-month lag for paid channels.

Example:
  Paid marketing spend (month): $5,000
  Organic content investment:   $1,000
  New paying customers:         200
  
  CAC = $6,000 ÷ 200 = $30/customer
```

**Segment CAC by channel.** Blended CAC conceals that some channels are efficient and others are not.

```
Channel-level CAC analysis:
  Paid social:      $8,000 spend → 150 customers → $53 CAC
  Referral program: $2,000 spend → 80 customers  → $25 CAC
  Organic/SEO:      $1,000 spend → 60 customers  → $17 CAC
  
  Blended:          $11,000 spend → 290 customers → $38 CAC
  
  Decision: Scale referral and organic, scrutinise paid social ROI
```

---

## Payback Period — The Primary Velocity Metric

Payback period tells you how long it takes for the cumulative contribution from a customer to recover their acquisition cost. It is the primary measure of growth velocity and capital efficiency.

```
Monthly Net Contribution = ARPC − Cost to Serve

Payback Period (months) = CAC ÷ Monthly Net Contribution

Example:
  ARPC = $9/month
  Cost to serve = $1.75/month
  Monthly Net Contribution = $7.25/month
  CAC = $30
  
  Payback Period = $30 ÷ $7.25 = ~4.1 months

B2C benchmarks:
  Excellent:  < 6 months
  Healthy:    6–12 months
  Concerning: 12–18 months
  Unsustainable: > 24 months (for most B2C models)
```

**Payback period by channel** is the most actionable version — it tells you which channels you can afford to scale:

```
Channel payback analysis (same product, different channels):
  
  Paid social: CAC $53, Net Contribution $7.25/month → 7.3 months payback
  Referral:    CAC $25, Net Contribution $7.25/month → 3.4 months payback
  Organic:     CAC $17, Net Contribution $7.25/month → 2.3 months payback
  
  Decision: Organic and referral are scale-ready;
            paid social is borderline at current CAC level
```

---

## Net Contribution Margin

Net Contribution Margin is the cumulative revenue minus all variable costs (cost to serve + CAC), measured over a specific time horizon.

```
Net Contribution Margin (12-month) = 
  (ARPC × Retention Rate × 12 months) − (Cost to Serve × 12 months) − CAC

Example:
  ARPC = $9/month
  Monthly retention rate = 96% (4% churn)
  Avg months retained in 12-month window: ~8.3 months (using geometric series)
  Cost to serve = $1.75/month
  CAC = $30
  
  Revenue (12-month): $9 × 8.3 = $74.70
  Cost to serve (12-month): $1.75 × 8.3 = $14.53
  CAC: $30.00
  
  Net Contribution Margin (12-month) = $74.70 − $14.53 − $30.00 = $30.17
```

**Use the 12-month NCM as the standard.** It is short enough to be empirically validated with real cohort data (unlike 5-year LTV projections) and long enough to capture the payback period for most B2C products.

---

## Free Tier Sustainability Check

```
A free tier is sustainable when:
  Revenue from paid conversions > Cost to serve all free users in the same cohort

Example:
  Free cohort of 1,000 users
  Cost to serve: $0.30/user/month = $300/month total
  Conversion rate: 3% → 30 paid users
  ARPC of converted users: $9/month → $270 MRR
  
  Free tier cost: $300/month
  Paid revenue from conversions: $270/month
  
  Result: Slightly negative in month 1 — but if 30 paid users retain for 10+ months,
          cumulative revenue from the free-to-paid cohort exceeds the free tier cost
  
  Break-even: $300 total free cost ÷ $270 monthly paid revenue = ~1.1 months retention needed
```

If the free tier cost per converted paid user exceeds the payback period threshold, either:
- Reduce free tier scope (reduce cost to serve free users)
- Increase conversion rate (improve monetization triggers)
- Increase ARPC (improve pricing or packaging)

---

## Common Mistakes in Unit Economics

| Mistake | Why It Fails |
|---|---|
| Using LTV:CAC as the sole health metric | Ignores payback period; LTV assumptions inflate the ratio |
| Not including free tier cost in CAC | Understates true acquisition cost; makes paid conversion look more efficient than it is |
| Using gross margin instead of net contribution margin | Gross margin excludes CAC; overstates profitability |
| Blending all channels into one CAC | Hides that some channels are loss-making |
| Calculating LTV with a low assumed churn rate | Small churn rate changes produce exponentially large LTV swings — e.g., 3% vs. 4% monthly churn = $300 vs. $225 LTV at $9 ARPC |
| Not updating cost to serve as the business scales | Infrastructure and support costs change; cost assumptions from year 1 may be wrong by year 3 |

---

*Last updated: April 2026*
