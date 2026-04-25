# Churned Customer Strategy

> Part of the Customer Lifecycle Optimisation section. See [customer-lifecycle.md](../customer-lifecycle.md) for the index.

---

## Purpose

Not all churned customers are worth pursuing. Not all win-back campaigns work. Churned customer strategy begins with classification — understanding why the customer left — before any outreach is planned.

---

## The Resurrection Probability Curve

The probability of a churned customer resubscribing declines non-linearly over time:

```
Days since churn  | Resurrection probability
0–30 days         | High — decision is fresh; may have churned impulsively
30–90 days        | Moderate — customer has adapted; needs a strong reason to return
90–180 days       | Low — product is no longer in daily context
180+ days         | Very low — in most B2C categories, effectively lost
```

**Implication:** The win-back window is concentrated in the first 90 days. Campaigns sent after 6 months typically have conversion rates under 1–2% and may generate more unsubscribe events than resubscriptions.

**Exception:** Seasonal or situational use cases may see resurrection outside the normal window. A travel app churned by a user who wasn't travelling may resurrect when they book a new trip. Track use case frequency cycles when designing win-back timing.

---

## Churn Classification (Must Precede Any Win-Back)

### Type 1 — Voluntary, Price-Driven

**Profile:** Customer explicitly cited cost as the reason. May have loved the product but couldn't justify the price.

**Win-back potential:** High — the product fit is there; the barrier is financial.

**Approach:**
- A targeted price offer (discount, plan downgrade, annual plan at a lower monthly equivalent)
- Timing: 7–14 days post-churn (while the product is still top of mind)
- Framing: "We want to keep you — here's an option that might work better financially" (not "FLASH SALE")
- Do not repeat the offer more than twice — declining twice is a strong signal the price is not the real issue, or the customer has moved on

**What not to do:** Send the same discount offer regardless of usage history. A customer who used the product heavily and churned for price is a very different profile from one who barely used it.

---

### Type 2 — Voluntary, Product-Driven

**Profile:** Customer churned citing feature gaps, bugs, or poor UX.

**Win-back potential:** Medium — only viable if the specific product issue has been addressed.

**Approach:**
- **Timed win-back:** After shipping a meaningful product update that directly addresses the stated reason for churn, send a targeted notification. Subject line: "The thing you told us bothered you — we fixed it."
- **No offer until fix is validated:** Offering a discount for a product problem the customer flagged, without fixing it, produces either no resubscription or immediate re-churn.
- **Honest framing:** Acknowledge the gap they experienced. Customers who feel heard are more likely to give the product a second chance.

**What not to do:** Claim a fix was made when it wasn't. If a churned customer resubscribes based on a false claim and re-encounters the same issue, they will not return a third time and will actively discourage others.

---

### Type 3 — Voluntary, Fit-Driven

**Profile:** Customer churned because their situation changed — moved geographically, completed a life stage, job changed, family situation changed.

**Win-back potential:** Low — the use case is no longer relevant to them.

**Approach:**
- Do not attempt immediate win-back — it wastes budget and risks annoying a customer who may refer others
- **Stay visible:** Include in a low-frequency "product updates" digest so the product is remembered when the use case re-emerges
- **Future re-entry:** Make it easy to resubscribe when the situation changes; don't require full re-onboarding

---

### Type 4 — Voluntary, Satisfied

**Profile:** Customer achieved their goal and no longer needs ongoing subscription. Common in goal-oriented products (weight loss, one-time home project, short-term learning goal).

**Win-back potential:** Low for immediate re-engagement; possible for recurrence.

**Approach:**
- Do not treat this as a failure — a satisfied churner may be a strong referral source
- Identify whether the use case recurs (if so, timing-based win-back is viable)
- Offer an easy way to "pause and come back" rather than full cancellation if the product supports it
- Include in a long-dormancy win-back sequence at 6–12 months for products where the use case recurs seasonally or situationally

---

### Type 5 — Involuntary (Payment Failure)

**Profile:** Subscription lapsed due to payment failure; customer may not have made a conscious cancellation decision.

**Win-back potential:** High — often the highest win-back rate of any churn type, especially within 30 days.

**Approach:**
- Immediate re-engagement: email + in-app message within 1–3 days of subscription lapse
- Framing: "Your account is on hold — here's how to restore access in one step"
- Remove friction: one-click payment update link, no new plan selection required
- Offer a grace period if the customer responds: "Your access is restored; payment will process in 3 days"
- After 30 days without recovery, transition to a voluntary-style win-back sequence

**This is the highest-ROI win-back category.** Customers who lapsed involuntarily did not decide to leave — they simply fell through a payment gap. Fast re-engagement can recover 30–50% of this cohort within 30 days.

---

## Win-Back Campaign Design

### Segmentation requirements before sending:

- [ ] Churn type classified (voluntary-price / voluntary-product / voluntary-fit / voluntary-satisfied / involuntary)
- [ ] Days since churn calculated (target within 90-day window for most types)
- [ ] Usage history reviewed (heavy users vs. light users → different offer depth)
- [ ] Prior win-back attempts checked (do not repeat if already declined twice)

### Communication principles:

| Principle | Rationale |
|---|---|
| Single clear call to action | Churned customers are low intent; complexity kills conversion |
| Acknowledge the departure | "We know you left — here's what's changed" is more credible than ignoring the churn |
| Time-box the offer | "For the next 7 days" creates legitimate urgency without dishonest scarcity |
| Easy re-entry | Pre-fill plan selection; no new onboarding required if settings are preserved |
| Suppress from general marketing | Do not include churned users in active product newsletters while a win-back sequence is running |

### Offer design by churn type:

| Churn Type | Win-Back Offer |
|---|---|
| Price-driven | Discount (30–50%), downgrade option, or annual plan at monthly-equivalent savings |
| Product-driven | No discount until product fix validated; lead with "here's what changed" |
| Fit-driven | No immediate offer; maintain low-frequency visibility |
| Satisfied | No immediate offer; future seasonal timing |
| Involuntary | Re-access prompt; payment update link; grace period |

---

## Resurrection Metrics

| Metric | Definition | Benchmark |
|---|---|---|
| Win-back rate | Resubscriptions ÷ win-back campaign reach | 3–8% (varies by churn type) |
| Resurrection MRR | Revenue from resurrected customers | Track separately from new MRR |
| Resurrected customer retention | % of resurrected customers still active at 90 days | Expect 15–25% lower than first-time subscriber retention |
| Win-back campaign ROI | Revenue from resurrections ÷ cost of win-back campaign | Target > 3:1 |

**Resurrected customers typically retain at lower rates than first-time subscribers.** The reason for their initial churn often recurs. Budget and plan win-back campaigns with this expectation.

---

## Common Mistakes

| Mistake | Why It Fails |
|---|---|
| Running a generic "come back" campaign to all churned users | Applies price offers to satisfied churners and product-fit churners who won't respond |
| Sending win-back at 6+ months post-churn | Outside the effective resurrection window for most B2C products |
| Offering the same discount that was previously declined | Customer already said no to that offer; sending it again wastes spend |
| Not preserving account state for resurrected users | Requiring full re-onboarding adds friction and reduces win-back conversion |
| Counting resurrections in NRR without flagging them | Inflates NRR; resurrected customers have different behaviour profiles than stable subscribers |

---

*Last updated: April 2026*
