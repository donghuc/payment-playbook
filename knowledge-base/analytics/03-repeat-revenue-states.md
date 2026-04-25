# Repeat Revenue States

> Part of the Revenue Analytics Framework. See [revenue-analytics.md](../revenue-analytics.md) for the index.

---

## Purpose

Repeat revenue analysis measures what happens to revenue from customers who were already paying in the previous period. While cohort analysis tracks new revenue (see `analytics/02-revenue-creation-cohorts.md`), repeat revenue analysis tracks the health of the existing revenue base.

---

## The Five Repeat Revenue States

Every customer who paid last period will be in exactly one of five states in the current period:

| State | Definition | Revenue Impact |
|---|---|---|
| **Existing** | Still paying; same plan, same amount | Neutral (revenue maintained) |
| **Expansion** | Still paying; more than before (upgrade, seat add, usage increase) | Positive (NRR > 100% territory) |
| **Contraction** | Still paying; less than before (downgrade, seat reduction) | Negative (partial revenue loss) |
| **Churned** | Stopped paying entirely | Negative (full revenue loss) |
| **Resurrected** | Was churned previously; paying again | Positive (recovery) |

These five states aggregate into **Net Revenue Retention (NRR)**.

---

## Net Revenue Retention (NRR)

NRR measures the aggregate of all five states for a defined customer cohort over a defined period.

```
NRR = (Starting MRR + Expansion MRR − Contraction MRR − Churned MRR) ÷ Starting MRR × 100%

Note: Reactivation/Resurrection MRR is typically excluded from standard NRR
      (it represents new revenue, not repeat revenue retention).
      Some companies include it as "gross NRR" — be explicit about which you use.

Example:
  January starting MRR from existing subscribers: $10,000
  February Expansion MRR: $600
  February Contraction MRR: $200
  February Churned MRR: $900
  
  NRR = (10,000 + 600 − 200 − 900) ÷ 10,000 = 95%
```

**NRR benchmarks:**

| NRR | Interpretation |
|---|---|
| > 110% | Excellent — expansion outpaces all churn; business can grow from existing customers alone |
| 100–110% | Healthy — some net growth from existing base |
| 90–100% | Stable — churn roughly balanced by expansion |
| < 90% | Declining — existing revenue base is shrinking |
| < 80% | Critical — churn is dramatically outpacing expansion |

**B2C context:** NRR > 100% is harder to achieve in B2C than B2B (no seat expansion in the same way), but products with family plan upsell, add-on purchases, or usage-based tiers can reach it. Target > 90% as the health floor for B2C SaaS.

---

## Analysing Each State

### Existing (Stable) Customers

These customers are the bedrock. They are not at risk, not expanding — they are simply retained.

**What to measure:**
- % of prior period customers in Existing state (retention rate)
- Engagement metrics for this group (DAU/WAU, feature usage breadth)
- Time in Existing state before Expansion or Churn event

**What signals health:** High product engagement alongside Existing state predicts future Expansion and low Churn risk.

**What signals risk:** Declining engagement while revenue is stable — these users are pre-churn. Their payment continues by habit, but they are not receiving value.

---

### Expansion State

Customers generating more revenue than last period. In B2C, expansion comes from:
- **Plan upgrade** — moving from a lower to a higher tier
- **Seat/quantity add** — adding more devices, dependents, or family members
- **Add-on purchase** — buying a feature or usage pack on top of the base plan
- **Billing cycle upgrade** — moving from monthly to annual (one-time revenue jump)

**What to measure:**
- Expansion MRR as a % of total MRR (expansion rate)
- Time from first payment to first expansion event (expansion velocity)
- Which feature/trigger drove the expansion event

**Target for B2C:** Expansion MRR should represent 5–15% of total MRR in a healthy consumer subscription business. Higher is achievable with usage-based tiers or strong add-on portfolios.

---

### Contraction State

Customers generating less revenue than last period. In B2C, contraction comes from:
- **Downgrade** — moving to a lower tier (voluntary)
- **Promotional expiry** — intro price ends; customer downgrades rather than paying full price
- **Seat reduction** — removing family members or devices

**What to measure:**
- Contraction MRR as a % of total MRR
- Contraction rate by plan (which tiers have the most downgrade activity?)
- % of contracting customers who churn within 3 months after downgrade

**Key insight:** Contraction often precedes churn. A customer who downgrades is signalling reduced perceived value — they are partially at risk. Treat downgrade events as early churn signals and initiate re-engagement.

---

### Churned State

Customers who were paying last period and are not paying this period.

**Segment by churn type immediately:**

| Churn Type | Definition | Intervention |
|---|---|---|
| **Voluntary — price** | Cancelled explicitly citing cost | Win-back offer; review pricing vs. WTP |
| **Voluntary — product** | Cancelled citing feature gaps or UX | Product roadmap; unlikely to win back short-term |
| **Voluntary — fit** | Cancelled because use case changed | Accept; target different personas |
| **Voluntary — satisfied** | Completed their goal; no longer need the product | Educate on ongoing value; different framing |
| **Involuntary** | Payment failed; subscription lapsed | Dunning sequence; payment method update |

**What to measure:**
- Churned MRR as a % of starting MRR (revenue churn rate)
- Subscriber churn rate (separate from revenue churn rate — they diverge when high and low value plans churn differently)
- % of churn that is involuntary (target: < 30–40% of total churn)
- Churn by plan, market, acquisition channel, and cohort age

**Revenue churn vs. subscriber churn divergence:**
```
If revenue churn rate > subscriber churn rate:
  → High-value subscribers are churning disproportionately (serious)
  
If revenue churn rate < subscriber churn rate:
  → Low-value subscribers are churning (better; high-value base is stable)
```

---

### Resurrection State

Customers who previously churned and have resubscribed.

**What to measure:**
- Resurrection rate = resubscribers this period ÷ total churned pool
- Time from churn to resurrection (histogram)
- Resurrection MRR: typically lower than pre-churn MRR (users often re-enter at a lower tier or with a win-back discount)
- Resurrection retention: do resurrected users retain better or worse than first-time subscribers?

**Resurrection probability curve:** The probability of a churned user returning declines non-linearly over time. Most resurrections occur within 30–90 days of churn. After 6 months, the probability drops sharply. After 12 months, most churned users are effectively permanently lost.

---

## Building a Repeat Revenue State Dashboard

A monthly repeat revenue state report should show:

```
Period: [Month]
Starting MRR from existing subscribers: $X

State breakdown:
  Existing (unchanged):   $X  (XX% of starting MRR)
  Expansion:             +$X  (+X% expansion rate)
  Contraction:           −$X  (−X% contraction rate)
  Churned:               −$X  (−X% revenue churn rate)
  ─────────────────────────────────────────────────
  Ending MRR:            $X
  NRR:                   XX%

Key signals:
  - Largest expansion trigger this month: [upgrade / add-on / billing cycle]
  - Largest churn driver: [voluntary price / involuntary / product]
  - Contraction-to-churn pipeline: XX% of last month's contractions have now churned
```

---

## Common Mistakes in Repeat Revenue Analysis

| Mistake | Why It Fails |
|---|---|
| Tracking only aggregate churn rate | Obscures whether expansion is masking high churn (they can cancel out in NRR) |
| Not segmenting voluntary from involuntary churn | Different causes, different interventions; treating them the same produces wrong responses |
| Treating downgrade as neutral | Contraction is an early churn warning; failing to act on it loses customers who were still recoverable |
| Counting resurrection in NRR without disclosure | Inflates NRR; makes retention look better than it is for the stable cohort |
| Blending NRR across markets | A global NRR of 95% may be 102% in one market and 82% in another — radically different business health |

---

*Last updated: April 2026*
