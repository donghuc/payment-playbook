# Monetization Triad

> Part of the Monetization Strategy Foundation. See [monetization-strategy.md](../monetization-strategy.md) for the index.

---

## Overview

A monetization strategy is only viable if it aligns with all three elements of the Monetization Triad:

```
Consumer View  ×  Growth Loops  ×  Cost of Revenue
```

Misalignment with any leg creates a monetization gap — which is both a problem and an opportunity. Gaps signal where the current model needs to evolve.

---

## The Decision Sequence (Critical)

The triad must be evaluated in this order:

```
1. Consumer View       (most critical — determines model viability)
         ↓
2. Update Business Hypothesis
         ↓
3. Align with Growth Loops
         ↓
4. Validate against Cost of Revenue
```

**Why this order matters:** Optimising growth loops or reducing costs without consumer-perceived value is risky. Price increases only work if they align with customer WTP — otherwise they reduce conversion and slow growth loops regardless of the cost structure.

---

## Leg 1: Consumer View

The consumer view asks four questions, each mapped to a monetization model element:

| Business Assumption | Consumer Reality Check | Misalignment Risk |
|---|---|---|
| How does price scale? | How does value scale for me? | Wrong value metric → poor acquisition and high churn |
| What do we charge for? | Which features do I actually value? | Gating wrong features → low conversion or resentment |
| What is our price? | What is my willingness to pay? | Overpricing blocks conversion; underpricing leaves value untapped |
| When do we charge? | When do I want to pay? | Timing friction suppresses transactions |

### Consumer View Gaps = Opportunities

When consumer perception and business hypothesis diverge:
- Revenue is lost or left on the table
- Customers churn for reasons not attributed to the product
- Latent value remains uncaptured

**Example — Mixpanel:** Charged per analytics event (usage metric); customers perceived value scaling with users (different metric). Result: wrong value metric caused pricing friction. Fix: shifted to Monthly Tracked Users.

**Example — Thumbtack:** Charged monthly subscription to pros; pros preferred flexible per-lead payments. Result: subscription created wrong friction for that persona. Fix: shifted to transactional → enabled scale toward $1B business.

### Consumer Research Methods

| Research | What It Answers | File |
|---|---|---|
| Max-Diff (value metric) | Which usage metric best represents customer-perceived value | `consumer-research/01-value-metric-research.md` |
| Max-Diff (feature value) | Which features customers actually value vs. just use | `consumer-research/02-feature-value-research.md` |
| Van Westendorp | Acceptable price range and directional optimal price | `consumer-research/03-willingness-to-pay.md` |

---

## Leg 2: Growth Loops

### What Growth Loops Are

Closed systems where an input creates an output that feeds back into the input:

- **Micro loops** — tactical acquisition and retention cycles (e.g., SurveyMonkey: user creates survey → sends to respondents → respondents see branding → some convert)
- **Macro loops** — system-level amplifiers that multiply micro loop effectiveness (e.g., Figma's direct network effect: more collaborators → higher product value → more engagement → more invitations)

```
Growth = Σ(Micro Loops) × Macro Loops
Performance = Loop Design − Model Friction (Amount × Placement)
```

### How Monetization Affects Growth Loops

Monetization introduces friction. Friction is not inherently bad — it must be *placed* at the right point in the loop.

| Friction Placement | Effect |
|---|---|
| Before viral action (e.g., invite, share) | Kills acquisition loop — users can't invite without paying |
| Before habit formation | Kills activation — users churn before experiencing value |
| After habit is formed | Acceptable — users are committed and understand value |
| On low-frequency actions | Usually fine — doesn't slow the primary loop |
| On high-frequency core actions | High risk — taxes the behaviour that drives retention |

**Examples:**
- **Slack:** Unlimited users → removes friction from viral acquisition loop. Monetise on message history and integrations after habit forms.
- **Figma:** Free viewers and commenters → zero friction for viral spread. Monetise editors (the power users who create value).
- **Zoom:** Free hosting → enables viral host→attendee→host loop. Paying upfront would have killed the loop entirely.

### Detecting a Growth Loop Gap

Signs that monetization is misaligned with growth loops:
- Acquisition rate slows after introducing a paywall on a sharing/invite action
- Activation rate drops when onboarding features are gated behind payment
- Viral coefficient (invites per user) declines after a pricing change
- Retention falls for users who convert before completing the setup/aha sequence

---

## Leg 3: Cost of Revenue

### What Cost of Revenue Includes

Every dollar of revenue has an associated cost:

| Category | Examples | Scaling Behaviour |
|---|---|---|
| Physical product | Manufacturing, packaging | Variable |
| Logistics | Shipping, delivery, returns | Variable |
| Product development & maintenance | R&D, ongoing feature work | Semi-variable |
| Storage & hosting | Data, media, infrastructure | Semi-variable |
| Customer support & success | Support teams, retention marketing | Semi-variable |
| Program & tooling | Internal SaaS (CRM, analytics, design) | Semi-variable |
| Partnerships & integrations | Revenue share, reseller costs | Variable |

**Rule:** Include variable and semi-variable costs in cost to serve. Exclude fixed/non-variable costs.

**Free tier principle:** Free use cases are cost to acquire, not zero cost. If free tier support and infrastructure costs exceed revenue from conversions, the model is unsustainable.

### Measuring Sustainability

```
Dollar Margin = Revenue − Cost to Serve
Margin % = Dollar Margin ÷ Revenue

Net Contribution Margin = Revenue − Cost to Serve − CAC
Payback Period = time for cumulative margin to exceed CAC
```

**Note on LTV:CAC:** LTV:CAC is an incomplete metric — it relies on assumptions, ignores payback period, and excludes ongoing cost to serve. Use Net Contribution Margin and Payback Period as the primary unit economics metrics.

### Cost of Revenue Gaps = Opportunities

| Gap Pattern | Implication |
|---|---|
| Free tier cost > conversion revenue | Reduce free tier scope, or improve conversion rate |
| High-cost segment priced same as low-cost segment | Create higher-priced tier or horizontal add-on for high-cost segment |
| Delivery cost not covered by transaction revenue | Introduce minimum order thresholds or delivery fees |
| Acquisition cost unrecoverable in reasonable timeframe | Reduce CAC or increase price/retention |

---

## Applying the Triad — Worked Example

### B2C Subscription App (Illustrative)

| Leg | Known Gap | Action Required |
|---|---|---|
| Consumer View | WTP is unvalidated in price-sensitive markets; assumptions from higher-WTP markets cannot be applied directly | Van Westendorp per market before setting price |
| Consumer View | Users may perceive core value as binary (have it / don't have it) rather than scaling with plan tier | Max-Diff to validate that the chosen value metric produces meaningful WTP scaling |
| Consumer View | Paying persona and using persona differ in friction tolerance — checkout must suit the payer; UX must suit the user | Design checkout for the paying persona; onboard the using persona separately |
| Growth Loops | The free-tier core feature is the acquisition loop driver — monetising it removes the loop | Never gate the feature that drives organic referral and word-of-mouth |
| Growth Loops | Referral/sharing loop must remain frictionless — upgrade prompt must not appear before the referral moment | Sequence upgrade prompt after the referral event, not before |
| Growth Loops | Data or network effects (if applicable) require broad free tier to accumulate volume | Free tier breadth is a growth loop investment, not just a conversion funnel |
| Cost of Revenue | Free tier has real infrastructure and support costs | Model free tier cost as implied CAC; track cost per acquired paid subscriber |
| Cost of Revenue | Support cost may scale with certain user types (dependents, elderly, non-technical users) | Track support cost per subscriber by user type; inform tier pricing |

---

## Model Opportunity Types

When a gap is identified, there are two categories of response:

### Model Strategies (Change the Hypothesis)
- Change value metric
- Change packaging (what's charged for)
- Change price amount
- Change charge timing
- Introduce a new use case (vertical = OR decision; horizontal = AND decision)

### Optimization Strategies (Move Users Between States)
- Improve conversion of potential customers (Educate → Convert → Activate)
- Expand revenue from existing healthy customers
- Recover at-risk customers before they churn
- Resurrect churned customers

**Rule:** Default to optimization strategies first. Escalate to model changes only when optimization has been exhausted. Model changes are high-stakes and slow; optimization changes are lower-risk and faster to test.

---

*Last updated: April 2026*
