# Expansion Strategy — Existing Healthy Customers

> Part of the Customer Lifecycle Optimisation section. See [customer-lifecycle.md](../customer-lifecycle.md) for the index.

---

## Purpose

Expansion strategy extracts additional revenue from customers who are already paying and healthy. It is the most capital-efficient growth lever available: no CAC, no acquisition friction, no onboarding cost. A customer who expands their spend is already past every barrier that a new customer must clear.

**Expansion must come after health is confirmed.** Do not push expansion on customers who are at risk or whose engagement signals are declining — it accelerates churn.

---

## The Three Expansion Paths

### Path 1 — Deepen (More of What They Already Use)

**Definition:** Increase usage depth within the customer's existing use case — more units, more seats, more devices, more capacity.

**How it manifests in B2C:**
- Adding more family members or dependents to a family plan
- Adding more devices to a device protection plan
- Increasing storage or usage quota on a usage-capped plan
- Moving from monthly to annual billing (billing cycle expansion)

**Trigger signals:**
- Customer approaching plan limit (>80% of cap used)
- Customer manually adding another eligible family member or device
- Customer has been on monthly billing for 3+ months with consistent usage → ready for annual upgrade prompt

**Intervention pattern:**
1. Detect the trigger signal automatically
2. Show an in-product nudge at the moment the limit is relevant (not a generic email blast)
3. Frame as extending something already working ("Add [family member] to keep them protected")
4. Not: "Upgrade your plan" (product-centric) → Yes: "Your family has 3 phones — protect all of them" (outcome-centric)

**Annual plan upgrade — the highest-ROI expansion event:**

Upgrading a monthly subscriber to annual billing is one of the single highest-ROI expansion moves:
- Locks in 12 months of revenue upfront (eliminates monthly churn window)
- Typically offered at 15–25% discount (net positive despite lower ARPC — churn elimination outweighs discount)
- Increases LTV by 3–5x on average vs. the monthly equivalent cohort

Best timing for annual upgrade prompt: after 60–90 days of consistent monthly usage (habit is established; user is confident in the product).

---

### Path 2 — Upgrade (Higher Tier)

**Definition:** Move the customer to a higher-value plan tier with access to more features or capabilities.

**When upgrade is appropriate:**
- Customer is using the highest-utilisation features of their current tier
- Customer has encountered a paywall for a feature in the next tier
- Customer's use case has evolved to require more advanced capabilities

**Upgrade trigger signals:**
- Customer hits a feature paywall 2+ times in a week
- Customer opens a "compare plans" or "see all features" page
- Customer completes a milestone that suggests greater product sophistication
- Time on the current plan exceeds the expected upgrade window for the persona

**Upgrade framing principles:**
- Show the specific feature or capability they will gain — not a tier name
- Use context from their current usage: "You've [blocked X calls / checked in Y times] — unlock [next feature] to [next outcome]"
- Provide social proof from users at the higher tier if available
- Reduce commitment friction: allow monthly billing for the upgrade before annual is offered

**What makes a good upgrade trigger (the right paywall):**
- Feature is visible to the current user (they can see it exists)
- Feature delivers value the user already wants, based on their usage pattern
- The value of the feature is understandable without explanation
- The price step is proportional to the perceived value gained

---

### Path 3 — Add Use Case (Horizontal Expansion)

**Definition:** Expand the customer to an additional, distinct use case — either within the same product or via an adjacent product.

This is an AND decision (customer already has X; add Y on top of X), not an OR decision (switch from X to Y). See `foundation/02-monetization-model-structure.md` for the vertical vs. horizontal distinction.

**B2C examples of horizontal expansion:**
- A subscriber adds a secondary protection or monitoring module on top of their existing base subscription
- A user adds a complementary add-on (e.g., broader coverage, extended history, or an adjacent feature set) that addresses a related problem they already have
- A health monitoring user adds medication reminders as a separate subscription module

**When horizontal expansion is viable:**
- Customer has exhausted the expansion depth of their current use case
- Customer shows signals of a related adjacent problem (search behaviour, in-app exploration, support questions)
- The adjacent use case has demonstrably higher WTP than the current one

**When horizontal expansion fails:**
- Pushed before the primary use case is fully activated and habitual (customer feels overwhelmed, not expanded)
- The adjacent product requires significant new onboarding (high friction for a customer who chose you for simplicity)
- The use case is a vertical variant (different persona needs a different plan, not an additional purchase)

---

## Identifying Non-Expansion Candidates

Not every healthy customer is ready to expand. Identify and exclude:

| Signal | Interpretation | Action |
|---|---|---|
| Usage flat at low utilisation of current plan | Customer is under-using current plan; not ready for more | Focus on deepening activation first |
| No engagement with advanced features | Customer is not exploring beyond core | Do not push upgrade; build engagement with current tier |
| Usage declining month-over-month | Customer may be moving toward at-risk; not healthy | Re-classify to At-Risk; focus on retention |
| Recent support ticket unresolved | Customer has an unresolved negative experience | Resolve the issue before any expansion attempt |

---

## Expansion Metrics

| Metric | Definition | Target (B2C) |
|---|---|---|
| Expansion MRR rate | Expansion MRR ÷ Starting MRR | 5–15% monthly |
| Upgrade rate | % of eligible customers who upgrade per month | 1–4% monthly |
| Annual conversion rate | % of monthly subscribers who convert to annual | 10–20% of monthly base per year |
| Time to first expansion | Median days from first payment to first expansion event | Track and optimise |
| Expansion by trigger source | % of expansion events attributed to each trigger type | Identifies highest-ROI trigger |

---

## Common Mistakes

| Mistake | Why It Fails |
|---|---|
| Pushing expansion before activation is complete | User is still deciding if the product is worth keeping; expansion prompts feel premature and pushy |
| Upgrading users to tiers they don't need | Creates mismatch; customer downgrades or churns when they realise they don't use the extra features |
| Generic upgrade prompts not tied to usage | "Upgrade to Premium" with no context converts poorly; usage-specific prompts convert 3–5× better |
| Offering annual plan on first login | Habit is not yet formed; user doesn't know if they'll still want the product in a month, let alone a year |
| Ignoring horizontal expansion until the product is mature | Adjacent use cases can be revenue drivers much earlier if the customer already trusts the brand |

---

*Last updated: April 2026*
