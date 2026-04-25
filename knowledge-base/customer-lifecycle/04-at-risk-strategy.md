# At-Risk Customer Strategy

> Part of the Customer Lifecycle Optimisation section. See [customer-lifecycle.md](../customer-lifecycle.md) for the index.

---

## Purpose

At-risk customers are the highest-value intervention target in the subscription lifecycle. They are still paying — revenue is recoverable — but their behaviour predicts churn. The window for intervention is narrow. Acting before the churn decision is made is dramatically more effective than acting after.

**Do not wait for a cancellation event to identify at-risk customers.** By the time a customer cancels, their decision is often already made. At-risk strategy operates on the pre-cancellation signals, not the cancellation itself.

---

## Diagnosing the Cause Before Choosing a Strategy

At-risk customers have different root causes — and different causes require different interventions. Applying the wrong intervention to an at-risk customer can accelerate churn.

| Root Cause | Description | Signals |
|---|---|---|
| **Habit erosion** | Customer used the product regularly; usage has dropped. Product still relevant; engagement has lapsed. | Login frequency drop; core feature sessions declining |
| **Value mismatch** | Customer doesn't understand how to get full value from their plan. May be under-using features that would solve their problem. | Low feature breadth; never explored beyond one use case |
| **Perceived price > perceived value** | Customer re-evaluates subscription cost vs. value received, especially at renewal windows. | Visited pricing page; downgraded plan; approaching renewal date |
| **Competitive switch** | Customer is actively evaluating alternatives. | Support ticket asking "does your product do X" (X is a competitor feature); cancellation survey cites competitor |
| **Life change** | Use case is no longer relevant (moved, graduated, family situation changed). | Cancellation survey or support response indicating the problem no longer exists |
| **Involuntary (payment failure)** | Payment failed; customer is passively at risk of lapsing. | Payment failure event in billing system |

Segment at-risk customers by cause before intervening. The strategies below map to specific causes.

---

## Strategy 1 — Habit Reinforcement

**For:** At-risk customers whose usage has declined but whose use case is still relevant.

**Goal:** Re-establish the core product habit before the customer consciously decides to cancel.

**Mechanisms:**
- **Re-engagement notification:** Triggered when core action hasn't occurred for 7–14 days (app push notification or email). Framed as a reminder of value received, not a promotional message.
- **Progress summary:** Show the customer what they've achieved since subscribing ("You've blocked 23 scam calls this month / Your parent checked in 18 times"). Makes the value tangible.
- **Feature spotlight:** Surface a feature the customer hasn't used that would be relevant to their situation. Frame as solving a problem they have, not as a product education exercise.
- **Re-activation sequence:** 3–5 touch communication sequence at declining intervals (day 7, 14, 21) if the initial re-engagement doesn't restore activity.

**What not to do:**
- Do not lead with a discount offer for habit-erosion customers — they haven't signalled price as the issue. Offering a discount trains price sensitivity.
- Do not send generic "we miss you" emails with no personalisation — they are ignored.

**Success signal:** Customer logs back in and completes the core action at least once. Measure 14-day and 30-day re-engagement rates post-trigger.

---

## Strategy 2 — Value Education (Anti-Mismatch)

**For:** At-risk customers who are paying but not getting full value from their current plan.

**Goal:** Unlock value the customer is entitled to but isn't using, before they conclude the product isn't worth the cost.

**Mechanisms:**
- **Usage audit prompt:** In-app or email showing current vs. potential utilisation ("You're using 2 of 5 available features — here's what you might be missing")
- **Personalised feature introduction:** Based on use case and persona data, surface the one feature most likely to change their perception of value
- **Success milestone framing:** Show what the product has done for them, even if they don't feel it ("Your data hasn't been exposed in 3 data breaches while you've been subscribed")
- **Live or recorded walkthrough:** For higher-value plans, a short product walkthrough (5–10 minutes) delivered on-demand

**What not to do:**
- Do not educate customers on features they've already tried and stopped using — they've formed a view; try a different angle.
- Do not send a feature list — send a single, specific, relevant use case.

---

## Strategy 3 — Anti-Conversion (Downgrade Path)

**For:** At-risk customers whose perceived price exceeds perceived value — but who are still extractable at a lower price point.

**Goal:** Retain some revenue by offering a lower commitment option, rather than losing the customer entirely.

**Mechanisms:**
- **Downgrade path at cancellation:** Offer a lower-tier option before confirming cancellation. Frame as a way to keep the core benefit at lower cost: "Before you go — keep [core free benefit] at no cost / keep [essential feature] at $X/month."
- **Pause option:** For subscription fatigue (not product dissatisfaction), offer a 1–3 month pause instead of cancellation. Reduces short-term churn without requiring a decision.
- **Billing frequency shift:** Offer a price reduction by switching to monthly billing (for annual subscribers who feel over-committed) or annual billing (for monthly subscribers who feel the monthly cost is high — annual equivalent appears lower).

**Important limits:**
- The downgrade path should only be offered if the lower tier retains genuine value for the customer.
- Do not offer discounts on a downgrade path to customers who haven't cited price — you're creating a new price anchor.
- Do not offer a pause to customers who are churning due to product dissatisfaction — a 3-month pause changes nothing about the product.

---

## Strategy 4 — Use Case Transition

**For:** At-risk customers whose original use case is no longer relevant, but who might be served by a different use case.

**Goal:** Redirect the customer to a use case that is still active for them, rather than losing them entirely.

**When applicable:**
- Multi-use-case products where one use case has become obsolete for the customer but another hasn't
- Products that serve a primary and a secondary persona where the customer's situation has changed their needs

**How to execute:**
- Identify an active alternative use case from their behaviour data
- Frame the transition as discovering additional value, not as a product pivot
- Reduce friction of the transition (pre-configure for the new use case; don't require full re-onboarding)

**This strategy has limited applicability in single-use-case products.** If the use case is gone, the customer should be released gracefully — a forced retention of a mismatched customer generates negative word-of-mouth and support cost.

---

## Involuntary Churn — Payment Failure Recovery

**For:** At-risk customers whose subscription has failed due to a payment issue (not a deliberate decision to cancel).

This is treated as a separate category because the intervention is technical/operational, not relationship-based.

**Dunning sequence principles:**
1. **Retry intelligently:** Use smart retry logic (Stripe's Smart Retries or equivalent) — retry at different times of day, different days of week, not just same time on a fixed schedule.
2. **Notify early:** Email or push notification immediately on failure, before retries are exhausted. Frame as "we had trouble processing your payment — help us fix this." Not accusatory.
3. **In-app prompt:** If the customer logs in during a dunning period, show a banner prompting payment method update.
4. **Grace period:** Maintain access during the dunning window (typically 7–14 days). Cutting access immediately converts an operational problem into a voluntary churn event.
5. **Final notice:** Clear warning 48 hours before access will be suspended. Include a simple one-click link to update payment method.
6. **Recovery window:** After suspension, keep the account recoverable (not deleted) for 30–60 days. Some users will return after sorting out their payment situation.

**Recovery rate benchmarks with good dunning:** 50–65% of failed charges recovered.

For full dunning methodology, see `post-payment/01-dunning.md`.

---

## Anti-Patterns for At-Risk Intervention

| Anti-Pattern | Why It Fails |
|---|---|
| Offering a discount as the first at-risk response | Teaches customers that reducing engagement triggers a discount — trains them to game the system |
| Sending a discount offer to customers with firm cancellation intent | Validates the decision to leave; does not address the underlying reason; damages trust |
| Using the same intervention for all at-risk signals | Habit erosion and value mismatch require different responses; one-size-fits-all interventions underperform |
| Waiting for a cancellation survey to understand churn reasons | By the time a customer fills out a cancellation survey, they've already decided. Pre-churn signals are the diagnostic tool. |
| Adding friction to the cancellation flow without offering value | Friction-only cancellation tactics (dark patterns) generate regulatory risk and negative reviews; always pair friction with a genuine value offer |

---

*Last updated: April 2026*
