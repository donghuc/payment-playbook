# Subscription Health Metrics & Analytics

> Part of the Post-Payment Strategy series. See [post-payment-strategy.md](../post-payment-strategy.md) for the full index.

---

## Overview

Metrics are only useful when they drive decisions. This section covers the core subscription health metrics, how to calculate them, what they reveal, and which decisions they should inform.

The hierarchy matters: not all metrics are equally important. Tracking too many creates noise; tracking too few creates blind spots. The framework below organises metrics into tiers.

---

## Tier 1 — Primary Business Health Metrics

These are the metrics that directly measure whether the subscription business is growing, stable, or declining.

### MRR — Monthly Recurring Revenue

MRR is the normalised monthly revenue from active subscriptions. It is the foundational metric.

```
Calculation:
  MRR = Σ (monthly equivalent of each active subscription)
  
  Monthly subscriber paying $9: contributes $9/month MRR
  Annual subscriber paying $90/year: contributes $7.50/month MRR
  
  Never count one-time charges (setup fees, credits) in MRR.
  Never count annual revenue as a lump sum in MRR.

MRR components:
  New MRR:        Revenue from new subscribers this month
  Expansion MRR:  Revenue increase from existing subscribers
                  (upgrades, adding seats, plan changes)
  Contraction MRR: Revenue decrease from existing subscribers
                  (downgrades)
  Churned MRR:    Revenue lost from cancellations
  Reactivation MRR: Revenue from win-back (previously churned users)

Net New MRR = New MRR + Expansion MRR - Contraction MRR - Churned MRR + Reactivation MRR
```

**What it tells you:** The overall health trajectory. Rising MRR with rising churned MRR = top-of-funnel is strong but retention is failing. Rising MRR with falling new MRR = existing subscribers are expanding (healthy, but acquisition is slowing).

### ARR — Annual Recurring Revenue

```
ARR = MRR × 12

Used for:
  - Investor/board reporting
  - Comparing with industry benchmarks
  - Calculating LTV (needs stable ARR base)

Caution: ARR is a projection, not a guarantee.
         It assumes no churn, which is never true.
         MRR is the more honest operational metric.
```

### Churn Rate

**Monthly Subscriber Churn Rate:**
```
Monthly churn rate = (subscribers who cancelled this month / 
                      subscribers at start of month) × 100%

Example:
  500 active subscribers at start of month
  25 cancelled during the month
  Churn rate = 25/500 = 5%

Healthy benchmark (B2C SaaS): 2–5% monthly churn
Warning zone: 5–8%
High churn: > 8%
```

**Revenue Churn Rate (MRR churn):**
```
Revenue churn rate = (MRR lost to churn this month / 
                      MRR at start of month) × 100%

Revenue churn < subscriber churn: Lower-value plans are churning
                                  (higher-value subscribers staying)
Revenue churn > subscriber churn: Higher-value plans are churning
                                  (more serious — your best customers are leaving)
```

**Annual churn rate:**
```
Annual churn rate ≈ 1 - (1 - monthly churn rate)^12

If monthly churn = 3%: Annual churn ≈ 30.6%
If monthly churn = 5%: Annual churn ≈ 46%
If monthly churn = 7%: Annual churn ≈ 58%

This is why monthly churn above 5% is a business viability problem:
at 5% monthly churn, you are replacing ~46% of your subscriber base each year.
```

### Net Revenue Retention (NRR)

NRR measures whether the revenue from your existing subscriber cohort is growing or shrinking over time, accounting for expansion, contraction, and churn.

```
NRR = ((Starting MRR + Expansion MRR - Contraction MRR - Churned MRR) 
       / Starting MRR) × 100%

Example:
  January 1: $10,000 MRR from 200 subscribers
  January 31:
    $500 expansion (upgrades)
    $200 contraction (downgrades)
    $800 churned MRR
  
  NRR = (10,000 + 500 - 200 - 800) / 10,000 = 95%

NRR > 100%: Revenue from existing subscribers is growing
            (expansion exceeds contraction + churn).
            This is the "net revenue retention expansion" state.
NRR 90–100%: Stable; churn is balanced by expansion.
NRR < 90%: Declining; existing subscribers are contracting faster
           than they're expanding.

B2C SaaS benchmark: NRR > 90% is healthy; > 100% is excellent.
B2B SaaS benchmark is typically higher (> 110%) due to seat expansion.
```

**NRR as the primary health signal:** NRR above 100% means the business can grow purely from its existing subscriber base — a powerful economic position. NRR below 90% means new subscriber acquisition is running against a draining bucket.

---

## Tier 2 — Acquisition and Conversion Metrics

### Trial-to-Paid Conversion Rate

```
For products with free trials:
  Conversion rate = (users who converted to paid / users who started trial) × 100%
  
  Measure by cohort (users who started trial in month X, conversion within 30 days).
  
  Benchmarks:
    Card-capture trial: 40–60% conversion (lower bar; some users never intended to pay)
    No-card trial: 15–30% conversion (higher intent signal required to convert)
    Reverse trial (auto-downgrade): 20–40% conversion
```

### Freemium-to-Paid Conversion Rate

```
Conversion rate = (free users who upgraded to paid in month / 
                   total free users at start of month) × 100%

Benchmarks (B2C SaaS):
  Strong: > 5% monthly
  Healthy: 2–5% monthly
  Weak: < 2% monthly
  
  Note: Absolute rate varies significantly by product category.
  Spotify (~26% paid/free), Duolingo (~7% Super), Dropbox (historically ~4%).
  The key is trajectory, not just absolute rate.
```

### Payback Period

```
Payback period = CAC / (ARPU − Cost to Serve per month)

If CAC = $30, ARPU = $9/month, Cost to serve = $1.75/month:
  Payback = $30 / ($9.00 − $1.75) = $30 / $7.25 = ~4.1 months

Note: Some teams use gross margin as a proxy for (ARPU − Cost to Serve).
      Use actual cost to serve when available — it is more precise.
      See analytics/04-cost-to-serve.md for the full cost to serve methodology.

Healthy benchmark (B2C): < 6 months payback
Acceptable: 6–12 months
Challenging: > 12 months
```

---

## Tier 3 — Retention and Lifecycle Metrics

### Cohort Retention Analysis

Cohort analysis answers the question: of users who subscribed in month X, what percentage are still active in month X+3, X+6, X+12?

```
Example cohort table:
            Month 0  Month 1  Month 3  Month 6  Month 12
Jan cohort:  100%     87%      72%      61%       45%
Feb cohort:  100%     85%      71%      59%       —
Mar cohort:  100%     89%      74%      —         —

Reading this table:
  - Jan cohort: retaining 45% at month 12 = 55% annual churn for this cohort
  - Month 1 retention improving (87% → 85% → 89%): onboarding is getting better
  - Month 3 retention stable (~72%): mid-term engagement is consistent
```

Cohort analysis is more informative than aggregate churn rate because it reveals *when* users leave. If most churn happens at month 1, your onboarding is the problem. If most churn happens at month 12 (annual renewal), your perceived value at renewal is the problem.

### LTV — Lifetime Value

```
LTV (simple) = ARPU / monthly churn rate

If ARPU = $9/month and monthly churn = 4%:
  LTV = $9 / 0.04 = $225

LTV (with gross margin) = (ARPU × gross margin) / monthly churn rate
  = ($9 × 0.70) / 0.04 = $6.30 / 0.04 = $157.50 (gross LTV)

LTV:CAC ratio:
  If CAC = $30 and LTV (gross) = $157.50:
  LTV:CAC = 5.25 : 1  (healthy)
  
  Benchmark:
  > 3:1  — Healthy business
  1–3:1  — Marginal; growth is expensive
  < 1:1  — Unsustainable; losing money per subscriber acquired
```

**LTV by segment is more useful than blended LTV.** Annual subscribers have dramatically higher LTV than monthly subscribers (lower churn rate, higher average lifetime). Tracking LTV by plan type guides your acquisition investment decisions.

**Important caveats on LTV:CAC:**
LTV:CAC is a useful directional ratio, but it is an incomplete unit economics metric on its own:
- LTV is based on assumed future churn — small changes in the churn rate assumption produce large LTV swings (e.g., 3% vs 4% monthly churn = $300 vs $225 LTV at $9 ARPC)
- LTV:CAC does not capture *when* the CAC is recovered — a 4:1 ratio with a 24-month payback is far worse than a 2:1 ratio with a 4-month payback
- Neither metric accounts for ongoing cost to serve beyond gross margin

**Preferred primary unit economics metrics:** Net Contribution Margin and Payback Period (see `analytics/04-cost-to-serve.md`):

```
Net Contribution Margin = Revenue − Cost to Serve − CAC

Payback Period = CAC ÷ (ARPU − Cost to Serve per month)

Example:
  ARPU = $9/month, Cost to serve = $1.75/month, CAC = $30
  Monthly Net Contribution = $9.00 − $1.75 = $7.25
  Payback Period = $30 ÷ $7.25 = ~4.1 months

  B2C benchmarks:
  Excellent:  < 6 months payback
  Healthy:    6–12 months
  Concerning: > 12 months
```

Use LTV:CAC as a supporting metric with explicit assumptions stated. Use Net Contribution Margin and Payback Period as the primary decision metrics.

---

## Tier 4 — Payment Health Metrics

### Payment Failure Rate

```
Payment failure rate = (failed charges / total attempted charges) × 100%

Segment by:
  - New vs. renewal charges (renewal failures are the dunning target)
  - Payment method (card vs. e-wallet vs. SEPA)
  - Geography (SEA e-wallet failures are structurally higher)
  
Healthy renewal failure rate: 5–8% (some failures are inevitable)
Warning: > 10% (payment method mix or dunning issue)
```

### Recovery Rate

```
Recovery rate = (failed charges eventually recovered / 
                 total failed charges) × 100%

Benchmark with good dunning: 50–65%
Without dunning: 10–20%

Track by:
  - Recovery channel (auto-retry / user-updated method / 3DS re-auth)
  - Days to recovery (histogram)
  - Gateway (Stripe Smart Retries vs. manual retry)
```

### Involuntary Churn Rate

```
Involuntary churn rate = (subscriptions cancelled due to payment failure /
                          total active subscriptions) × 100%

Monthly benchmark: < 1.5%
This is a subset of total churn rate.

If involuntary churn > 40% of total churn:
  → Dunning sequence needs improvement
  → Consider improving payment method mix (move users to SEPA / direct debit
    for lower failure rates)
  → Check card expiry notification timing
```

---

## Metrics Dashboard Design

A practical subscription metrics dashboard should answer four questions at a glance:

```
Question 1: Is the business growing?
  → MRR trend (current month vs. last 3 months)
  → MRR breakdown: New / Expansion / Churn / Net

Question 2: Is retention healthy?
  → Monthly churn rate
  → NRR (trailing 90 days)
  → Cohort retention table (12-month rolling)

Question 3: Is payment processing healthy?
  → Renewal payment failure rate
  → Recovery rate (this month)
  → Dispute rate

Question 4: Is acquisition converting?
  → Trial/freemium conversion rate
  → New subscribers this month vs. last month
  → LTV:CAC by acquisition channel
```

### Sample SQL Queries

```sql
-- MRR calculation
SELECT
    DATE_TRUNC('month', current_period_start) as month,
    SUM(
        CASE 
            WHEN billing_interval = 'monthly' THEN amount_cents / 100.0
            WHEN billing_interval = 'annual'  THEN amount_cents / 100.0 / 12
        END
    ) as mrr
FROM subscriptions
WHERE status = 'active'
GROUP BY 1
ORDER BY 1 DESC;

-- Monthly churn rate
WITH monthly_base AS (
    SELECT
        DATE_TRUNC('month', d) as month,
        COUNT(*) as active_start
    FROM subscriptions
    CROSS JOIN LATERAL generate_series(
        current_period_start, current_period_end, '1 month'
    ) as d
    WHERE status IN ('active', 'cancelled')
    GROUP BY 1
),
monthly_churn AS (
    SELECT
        DATE_TRUNC('month', cancelled_at) as month,
        COUNT(*) as churned
    FROM subscriptions
    WHERE status = 'cancelled'
    GROUP BY 1
)
SELECT
    b.month,
    b.active_start,
    c.churned,
    ROUND(100.0 * c.churned / b.active_start, 2) as churn_rate_pct
FROM monthly_base b
LEFT JOIN monthly_churn c USING (month)
ORDER BY 1 DESC;

-- Cohort retention
SELECT
    DATE_TRUNC('month', s.created_at) as cohort_month,
    EXTRACT(MONTH FROM AGE(DATE_TRUNC('month', CURRENT_DATE), 
                           DATE_TRUNC('month', s.created_at))) as months_since_start,
    COUNT(*) as active_subscribers,
    ROUND(
        100.0 * COUNT(*) / FIRST_VALUE(COUNT(*)) OVER (
            PARTITION BY DATE_TRUNC('month', s.created_at)
            ORDER BY EXTRACT(MONTH FROM AGE(...))
        ), 1
    ) as retention_pct
FROM subscriptions s
WHERE status = 'active'
GROUP BY 1, 2
ORDER BY 1, 2;
```

---

## Metrics by Market — SEA vs. EU vs. Global

Some metrics behave differently by market:

| Metric | SEA | EU | Global (US/ROW) |
|--------|-----|-----|-----------------|
| Payment failure rate | Higher (wallet balance, no recurring) | Moderate (SCA issues) | Baseline |
| Dispute rate | Lower (wallets have fewer disputes) | Higher (EU consumer rights awareness) | Baseline |
| Trial conversion | Lower (higher friction with local payment methods) | Moderate | Higher |
| Annual upgrade rate | Lower (price sensitivity, wallet limits) | Moderate | Higher |
| Win-back via email | Lower (WhatsApp > email) | Moderate | Higher |
| Refund rate | Lower (fewer systematic refund requests) | Higher (right of withdrawal awareness) | Moderate |

Track metrics by geography if you have significant multi-market volume. A blended 6% churn rate may be masking 4% in the US and 10% in SEA — very different problems requiring different solutions.

---

## Reporting Cadence

| Metric | Frequency | Audience |
|--------|-----------|----------|
| MRR + components | Weekly | Founders, growth team |
| Churn rate | Monthly | Founders, product, growth |
| NRR | Monthly | Founders, investors |
| Cohort retention | Quarterly | Product, growth |
| Payment failure rate | Weekly | Engineering, ops |
| Dispute rate | Weekly | Finance, ops |
| Net Contribution Margin | Quarterly | Founders, finance |
| Payback Period by channel | Monthly | Growth, marketing |
| LTV:CAC by channel (with stated assumptions) | Quarterly | Founders, investors |

**Avoid metric proliferation:** A dashboard with 40 metrics encourages cherry-picking the good ones and ignoring the bad. The 6–8 metrics above cover the health of the full subscription lifecycle. Add others only when a specific decision requires a specific measurement.

---

*Last updated: April 2026*
