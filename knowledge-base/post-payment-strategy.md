# Post-Payment Strategy

> Pillar 5 of the Payment Strategy series. Covers everything that happens after the initial charge succeeds — the operational and strategic systems that determine long-term subscription health.

---

## Why Post-Payment Strategy Matters

Acquiring a subscriber is expensive. The economics of B2C SaaS work only when you retain subscribers long enough to recover acquisition cost and generate profit. Post-payment strategy is the set of systems that protect and extend that retained value.

The four failure modes it addresses:

1. **Involuntary churn** — subscriptions that lapse because a payment fails (not because the user wanted to leave). Accounts for 20–40% of total churn in most B2C SaaS.
2. **Voluntary churn** — users who actively cancel. The post-payment layer can recover some of these, and understand the rest.
3. **Dispute and chargeback losses** — users who claim payments they authorised. Damages revenue, gateway relationships, and product reputation.
4. **Re-engagement gaps** — churned users who would resubscribe with the right prompt at the right time.

---

## Index

| File | Topic |
|------|-------|
| [01-dunning.md](post-payment/01-dunning.md) | Dunning & Involuntary Churn Recovery |
| [02-subscription-lifecycle.md](post-payment/02-subscription-lifecycle.md) | Subscription Lifecycle Management |
| [03-refund-policy.md](post-payment/03-refund-policy.md) | Refund Policy Framework |
| [04-disputes-chargebacks.md](post-payment/04-disputes-chargebacks.md) | Dispute & Chargeback Management |
| [05-reengagement-winback.md](post-payment/05-reengagement-winback.md) | Re-engagement & Win-back Strategy |
| [06-metrics-analytics.md](post-payment/06-metrics-analytics.md) | Subscription Health Metrics & Analytics |

---

## Quick Reference: The Post-Payment Stack

```
Subscription acquired
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│  SUBSCRIPTION LIFECYCLE MANAGEMENT                        │
│  Pauses · Plan changes · Holds · Reactivation             │
└───────────────────────────────────────────────────────────┘
        │
        ▼ (on renewal)
┌───────────────────────────────────────────────────────────┐
│  PAYMENT PROCESSING                                       │
│  Smart retries · Dunning · Grace period · Recovery        │
└───────────────────────────────────────────────────────────┘
        │
        ├── Payment succeeds → Receipt → Continue lifecycle
        │
        └── Payment fails → DUNNING SEQUENCE
                │
                ├── Recovered → Resume subscription
                └── Not recovered → Offboarding + Re-engagement queue
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│  VOLUNTARY CHURN HANDLING                                 │
│  Cancellation · Retention interstitials · Offboarding     │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│  DISPUTE & CHARGEBACK MANAGEMENT                          │
│  Prevention · Response · Radar/fraud signals              │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│  RE-ENGAGEMENT & WIN-BACK                                 │
│  Timed sequences · Feature-triggered · Promotional        │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│  METRICS & ANALYTICS                                      │
│  MRR · Churn rate · NRR · LTV · Cohort retention          │
└───────────────────────────────────────────────────────────┘
```

---

## Key Metrics to Track Across All Pillars

| Metric | What It Measures | Target (B2C SaaS) |
|--------|-----------------|-------------------|
| MRR | Monthly Recurring Revenue | Absolute growth |
| Churn rate (monthly) | % subscribers who cancel | < 5% monthly |
| Involuntary churn rate | % who lapse due to payment failure | < 1.5% monthly |
| Recovery rate | % of failed payments eventually recovered | > 50% |
| NRR (Net Revenue Retention) | Revenue retained + expansion from cohort | > 100% |
| LTV:CAC ratio | Lifetime value vs acquisition cost | > 3:1 |
| Dispute rate | Chargebacks as % of transactions | < 0.5% (Visa/MC threshold) |
| Refund rate | Refunds as % of revenue | < 5% |

---

*Last updated: April 2026*
