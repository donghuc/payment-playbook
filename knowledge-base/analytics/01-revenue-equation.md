# Revenue Equation

> Part of the Revenue Analytics Framework. See [revenue-analytics.md](../revenue-analytics.md) for the index.

---

## Purpose

The revenue equation decomposes total revenue into its component variables so that teams can identify which lever to pull when revenue is underperforming. Without decomposition, "revenue is down" is not actionable. With decomposition, the cause is isolatable.

---

## The Universal Structure

```
Revenue = Breadth × Depth

Breadth = number of paying customers
Depth   = revenue extracted per customer (ARPC — Average Revenue Per Customer)
```

Every revenue model is a specific implementation of this formula. Choosing a model means choosing how breadth and depth are defined and traded off.

**Breadth vs. Depth trade-off:**
- Strategies that maximise breadth (e.g., freemium, low price) sacrifice depth initially
- Strategies that maximise depth (e.g., premium pricing, usage-based add-ons) sacrifice breadth
- The optimal balance depends on the growth loop structure — breadth-first for network effects, depth-first for high-cost-to-serve products

---

## Revenue Equation by Model Type

### Subscription Model

```
Revenue = # Active Subscribers × ARPC/month × 12

Where:
  ARPC = weighted average of monthly equivalent revenue per subscriber
         (normalise annual plans to monthly: annual price ÷ 12)

Example:
  500 subscribers at $9/month (monthly billing)  → $4,500 MRR
  200 subscribers at $7.50/month (annual billing) → $1,500 MRR
  Total MRR: $6,000 → ARR: $72,000
```

**MRR components (track separately):**

| Component | Definition |
|---|---|
| New MRR | Revenue from first-time subscribers this period |
| Expansion MRR | Revenue increase from existing subscribers (upgrades, added seats) |
| Contraction MRR | Revenue decrease from existing subscribers (downgrades) |
| Churned MRR | Revenue lost from cancellations |
| Reactivation MRR | Revenue from previously churned subscribers who returned |

```
Net New MRR = New MRR + Expansion MRR − Contraction MRR − Churned MRR + Reactivation MRR
```

### Marketplace Model (Provider Side)

```
Revenue = # Paying Providers × Avg Transactions/Provider × Avg Revenue/Transaction

Where:
  Revenue/Transaction = platform take rate × GMV per transaction

Example:
  100 paying providers
  × 8 transactions/provider/month
  × $5 platform fee/transaction
  = $4,000/month platform revenue
```

**Variables to track separately:**
- Provider activation rate (from signup to first paid transaction)
- Transactions per active provider (engagement depth)
- Average transaction value (affects take rate revenue per transaction)
- Provider churn rate (similar to subscriber churn in subscription models)

### Transactional Model

```
Revenue = # Customers × Transactions/Customer × Avg Order Value × Fee%

Example:
  1,000 active customers
  × 2 transactions/customer/month
  × $25 average order value
  × 15% platform fee
  = $7,500/month revenue
```

**Variables to track separately:**
- Purchase frequency distribution (not all customers transact at the average rate)
- Average order value trend (influenced by promotions, product mix)
- Fee percentage (may vary by tier, volume, or negotiated rate)

---

## Drilling into Underperformance

When revenue is below target, decompose first:

```
Step 1: Breadth or Depth?
  Revenue shortfall = fewer customers (breadth) or lower revenue per customer (depth)?

Step 2: If breadth — acquisition or retention?
  Is the customer base smaller than expected because:
  (a) Not enough new customers entering? → Acquisition/conversion problem
  (b) Too many customers leaving?        → Retention/churn problem

Step 3: If depth — price, usage, or mix?
  Is ARPC lower than expected because:
  (a) Price is lower than modelled?      → Pricing model or discount problem
  (b) Usage per customer is lower?       → Engagement or feature adoption problem
  (c) Tier mix is worse than expected?   → Packaging or upgrade incentive problem
```

---

## AARPC — The Normalised Depth Metric

All pricing and depth analysis should normalise to **Average Annual Revenue Per Customer (AARPC)** — not per seat, not per month.

AARPC enables apples-to-apples comparison across models, billing cycles, and markets.

```
AARPC = total annual revenue ÷ average number of paying customers in the year

Common B2C AARPC bands:
  ~$100/year    Consumer apps
  ~$1,000/year  SMB SaaS
  ~$10,000/year Mid-market B2B
  $100,000+     Enterprise
```

If AARPC is falling while customer count is rising, depth is eroding — often a sign of a tier mix shift toward lower plans or an acquisition channel bringing in lower-value customers.

---

## Revenue Velocity

Revenue at a point in time is a static measure. Revenue velocity — the rate at which the revenue pool is growing — is the forward-looking signal.

```
Cohort Velocity = Revenue from new cohort at period N ÷ Revenue from same cohort at period N−1

If velocity > 1: cohorts are growing over time (expansion-led growth)
If velocity = 1: cohorts are stable (flat, no growth or contraction)
If velocity < 1: cohorts are shrinking (contraction > expansion)
```

See `analytics/02-revenue-creation-cohorts.md` for full cohort velocity methodology.

---

## Common Mistakes in Revenue Analysis

| Mistake | Why It Fails |
|---|---|
| Tracking total revenue without decomposing breadth vs. depth | Conceals whether growth is coming from acquisition or from existing customers expanding |
| Including one-time charges in MRR | Inflates recurring revenue signal; makes MRR trend misleading |
| Using annual revenue as monthly MRR (lump-summing) | Overstates MRR; creates spike-and-drop patterns that obscure real trends |
| Blending monthly and annual subscribers in ARPC without normalising | Annual subscribers at $90/year are not $90 ARPC if monthly is your unit; normalise to $7.50/month equivalent |
| Tracking revenue without tracking its components | "Revenue is up 10%" — but if expansion is flat and new MRR is doing all the work, churn is being masked |

---

*Last updated: April 2026*
