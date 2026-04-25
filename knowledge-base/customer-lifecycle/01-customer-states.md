# Customer States — Diagnosis Framework

> Part of the Customer Lifecycle Optimisation section. See [customer-lifecycle.md](../customer-lifecycle.md) for the index.

---

## Purpose

Applying the wrong strategy to the wrong customer state wastes resources and can accelerate churn. A retention offer sent to a healthy customer is unnecessary cost. A win-back campaign sent to a churned-satisfied customer reinforces their decision to leave. Accurate state diagnosis precedes all intervention.

---

## The Four States

### State 1 — Potential Customer

**Definition:** Has not yet made a first payment. May be a free user, a trial user, a signed-up-but-inactive user, or a raw lead.

**Sub-states within Potential:**

| Sub-state | Signal | Priority |
|---|---|---|
| Unaware | Has not interacted with the product at all | Low — acquisition problem |
| Aware, not signed up | Visited pricing page; did not register | Medium — friction or value communication problem |
| Signed up, not activated | Created account; did not complete onboarding | High — activation problem |
| Trial active | In trial; engaging with core features | High — conversion trigger timing |
| Trial active, disengaged | In trial; not engaging | High — immediate re-engagement required |

**Goal:** Move to first payment and first activation (Aha Moment).

**Key diagnosis question:** Where in the Educate → Convert → Activate funnel is the potential customer stalling?

---

### State 2 — Existing Healthy Customer

**Definition:** Currently paying and demonstrating positive engagement signals. Not at immediate risk of churn.

**Positive signals (any combination):**
- Regular usage at or above the product's natural frequency
- Breadth of feature engagement (using multiple features, not just one)
- Expansion behaviour (upgraded, added dependents/devices, invited others)
- Stable or declining support ticket volume (product is working for them)
- NPS/satisfaction scores above baseline

**Goal:** Expand revenue from this customer — deepen usage, upgrade tier, or expand to new use cases.

**Risk of misclassification:** A customer paying on annual billing may look "healthy" purely because they cannot easily churn. Track engagement, not just payment status.

---

### State 3 — At-Risk Customer

**Definition:** Currently paying but showing signals that predict churn.

**At-risk signals (treat any of these as triggers):**

| Signal | Churn Probability | Type |
|---|---|---|
| Login frequency drops >40% vs. prior 30-day average | High | Engagement |
| Core feature usage stops for 14+ days | High | Engagement |
| Support ticket opened with dissatisfaction language | High | Sentiment |
| Visited cancellation page without completing cancellation | Very High | Intent |
| Downgraded from higher to lower plan | High | Revenue + Engagement |
| Failed payment + did not update payment method within 7 days | High | Involuntary |
| Approaching plan limit repeatedly without upgrading | Medium | Engagement |
| Referral activity stopped (for referral-heavy products) | Medium | Engagement |

**Goal:** Return to Existing Healthy state. The correct intervention depends on why the customer is at risk — not all at-risk states have the same cause.

**Critical rule:** Do not apply retention offers (discounts) to customers who have expressed firm churn intent. This often validates the churn decision and damages brand trust. Address the underlying issue first.

---

### State 4 — Churned Customer

**Definition:** Was a paying customer; no longer paying.

**Churn classification (must segment before any win-back strategy):**

| Type | Definition | Win-Back Potential |
|---|---|---|
| **Voluntary — price** | Explicitly cited cost as reason | High — price offer may recover |
| **Voluntary — product** | Cited feature gaps or broken functionality | Medium — only if product has improved |
| **Voluntary — fit** | Use case changed; product no longer relevant | Low — targeting error, not retention problem |
| **Voluntary — satisfied** | Achieved their goal; no ongoing need | Low — but may resubscribe when need recurs |
| **Involuntary** | Payment failure; subscription lapsed passively | High — re-engagement often successful within 30 days |

**Goal:** Selectively resurrect high-potential churned customers. Not all churned customers are worth the cost of a win-back campaign.

**Resurrection probability:** Probability of resubscription declines non-linearly over time. The window is most effective within 30–90 days of churn. After 6 months, most churned users are effectively lost.

---

## State Diagnosis in Practice

### Signal Sources

| Signal Type | Where to Find It | Reliability |
|---|---|---|
| Engagement data | Product analytics (event logs, session data) | High |
| Revenue state | Subscription/billing system | High |
| Support tickets | Help desk platform | Medium (biased toward unhappy users) |
| In-product behaviour | Funnel and retention dashboards | High |
| Survey responses | NPS, cancellation surveys | Medium (stated preference) |
| Cancellation page visits | Web/app analytics events | High intent signal |

### State Transition Triggers

Define specific triggers that move a customer between states:

```
Potential → Existing Healthy:  First successful payment + first core feature use
Existing Healthy → At-Risk:    Any at-risk signal (see list above)
At-Risk → Existing Healthy:    Re-engagement with core feature for 7+ consecutive days
At-Risk → Churned:             Cancellation event or final failed payment + no recovery
Churned → Potential:           Clicks win-back email, visits pricing page
Potential → Existing Healthy:  Re-subscribe (resurrection)
```

**Automate state transition detection.** Manual review of customer states does not scale. Trigger-based automation (engagement drops, payment failures, cancellation page visits) should automatically queue at-risk interventions.

---

## Common Misclassification Errors

| Misclassification | What Goes Wrong |
|---|---|
| Treating paying-but-disengaged as Healthy | Miss the pre-churn signal; lose the recovery window |
| Treating annual subscribers as Healthy by default | Annual billing masks churn intent; engagement data is the signal, not billing |
| Treating all Churned as win-back eligible | Wastes spend on product-fit or satisfied churners; may drive negative sentiment |
| Applying At-Risk interventions to Existing Healthy | Unnecessary cost; may signal lack of product confidence |
| Not distinguishing voluntary from involuntary churn | Different causes, completely different interventions |

---

*Last updated: April 2026*
