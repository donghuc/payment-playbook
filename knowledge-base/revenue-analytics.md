# Revenue Analytics Framework — Index

> Pillar 3 of the Monetization Strategy Knowledge Base. Covers how to measure revenue creation, retention, and unit economics with precision.

---

## Why Revenue Analytics Sits After Foundation

Revenue analytics provides the measurement layer for monetization decisions. It tells you whether the model is working and where to optimise — but it cannot tell you *what* to optimise without the Consumer View, Growth Loop, and Use Case frameworks first. Analytics without strategy measures the wrong things.

---

## What This Section Covers

| File | Topic | What It Answers |
|---|---|---|
| `analytics/01-revenue-equation.md` | Revenue equation by model type | How does revenue decompose for my model? |
| `analytics/02-revenue-creation-cohorts.md` | New revenue measurement | Is acquisition working? How fast are new cohorts growing? |
| `analytics/03-repeat-revenue-states.md` | Repeat revenue and NRR | Is existing revenue expanding, stable, or declining? |
| `analytics/04-cost-to-serve.md` | Unit economics | Is each customer profitable? When do I recover acquisition cost? |

---

## The Revenue Equation (Summary)

```
Revenue = Breadth × Depth

Breadth = number of paying customers
Depth   = revenue extracted per customer (ARPC)

For subscription models:
  Revenue = Customers × Avg Value Metric/Customer × Avg Revenue/Unit

For marketplace models:
  Revenue = Paying Providers × Avg Transactions/Provider × Avg Revenue/Transaction

For transactional models:
  Revenue = Customers × Transactions/Customer × Avg Order Value × Fee%
```

---

## The Two Revenue Pools

Every revenue stream divides into two fundamentally different measurement problems:

| Pool | Definition | Primary Metric | Primary Risk |
|---|---|---|---|
| **Revenue Creation** | Revenue from customers who did not pay last period | Cohort velocity, conversion rate | Poor acquisition or activation |
| **Revenue Retention** | Revenue from customers who paid last period | NRR, churn rate | Contraction and churn |

These pools require different analytical approaches and different interventions when they underperform.

---

## Unit Economics Summary

The course-validated hierarchy for unit economics metrics:

```
Primary metrics (use these):
  1. Net Contribution Margin = Revenue − Cost to Serve − CAC
  2. Payback Period = time for cumulative margin to exceed CAC

Secondary/supporting metrics (use with caveats):
  3. LTV (directional; use with stated assumptions)
  4. LTV:CAC (useful as a ratio but incomplete without payback period)
```

**LTV:CAC alone is insufficient** — it relies on assumptions, ignores payback period, and excludes ongoing cost to serve. See `analytics/04-cost-to-serve.md` for the full unit economics framework.

---

*Last updated: April 2026*
