# Model Friction

> Part of the Monetization Strategy Foundation. See [monetization-strategy.md](../monetization-strategy.md) for the index.

---

## Definition

Model friction = the resistance created by a monetization model that affects a user's ability to convert, activate, engage, retain, and drive growth.

**Key insight:** Friction must be *placed*, not just minimised. The question is not "how do we reduce friction?" but "where in the growth model can we afford friction, and where must we remain frictionless to protect growth loops?"

---

## The Four Friction Levers

Each monetization model element contributes friction on a low → high spectrum:

| Element | Low Friction | High Friction |
|---|---|---|
| **Scale (Value Metric)** | Familiar, predictable metrics (users, storage) | Hard-to-predict or opaque metrics (MTUs, events) |
| **What (Paid Attributes)** | Familiar, well-known features | New or unfamiliar concepts requiring education |
| **Amount (Price)** | Low price | High price |
| **When (Timing)** | Free or transactional | Annual or multi-year contracts |

### Friction Spectrum by Business Model

| Product | Model | Friction Level |
|---|---|---|
| Fortnite | Free, familiar, optional transactions, low commitment | Very low |
| Shopify | Predictable metrics, ~$1K AARPC, monthly billing | Medium |
| Workday | Very high price, annual/multi-year contracts | High |

---

## Friction Placement Across Growth Loops

Friction is not uniformly bad — it must be evaluated relative to where it sits in the growth model.

### Micro Loops (Tactical)
Tactical acquisition and retention cycles. Friction placed here directly impacts volume.

| Loop Type | Friction Risk | Example |
|---|---|---|
| Viral / invite loop | Never gate the sharing/invite action | Zoom's free hosting; Figma's free commenters |
| UGC / content loop | Never gate content creation or discovery | Spotify free tier drives content network |
| Usage-driven loop | Avoid taxing the core habitual action | Slack's free unlimited users |

### Macro Loops (System-Level)
Amplify and connect micro loops. Friction that degrades macro loops compounds negatively over time.

| Loop Type | Friction Risk | Example |
|---|---|---|
| Direct network effect | Free tier must be broad enough to build the network | Figma: more collaborators → higher value |
| Data network effect | Free tier must generate sufficient data volume | Threat detection app: more users → better threat intelligence |
| Economies of scale | Growth volume must be sustained to realise cost benefits | Amazon: more customers → better terms → lower prices |

---

## Friction Placement Principles

### Principle 1 — Place friction after value is experienced
Users who have not yet had their "Aha Moment" will not convert. Place monetisation friction after the point where users have experienced the core product value.

### Principle 2 — Match friction level to growth stage
| Stage | Friction Strategy |
|---|---|
| Early (pre-PMF) | Minimise friction everywhere to maximise learning signals |
| Growth (post-PMF, pre-profitability) | Low friction in acquisition loops; moderate friction in retention |
| Scale | Can afford higher friction if growth loops are self-sustaining |

### Principle 3 — Higher friction can be acceptable if it funds critical loops
Example: Figma's Enterprise plan (high friction, high price) funds a sales-assisted growth loop that acquires large organisations — a segment that wouldn't convert through self-serve regardless.

### Principle 4 — Friction has compound effects
Increasing friction in one part of the model creates downstream effects:
- More friction → lower conversion rates in loops
- Higher prices → more reinvestment capital available
- Net effect depends on which force dominates in the specific loop structure

**Example (Spotify):** Higher prices slow the micro loop (fewer new users) → slows the data network effect macro loop (less listening data) → degrades recommendation quality → reduces value for remaining users → cascading churn risk.

---

## Friction and the Conversion Equation

```
User converts when:
  Perceived Value of Target State > Perceived Price + Friction to Convert

Anti-churn holds when:
  Perceived Value of Staying > Perceived Value of Churning + (Effort to Stay − Friction of Leaving)
```

Every monetization change affects both equations. The goal is to ensure perceived value consistently outweighs price + friction at every stage of the customer lifecycle.

---

## Friction Placement — Worked Example

### B2C Subscription App (Illustrative)

| Action | Friction Level | Rationale |
|---|---|---|
| App install / account creation | Zero | Entry point to acquisition loop; every friction step here reduces funnel volume |
| Core free feature activation | Zero | The acquisition loop driver; gating removes the viral/referral trigger |
| Viewing usage history / basic logs | Zero | Reinforces perceived value during free tier; builds habit |
| Paying persona account creation | Low | The converting persona must find signup easy |
| Dependent / secondary user setup | Near-zero | Non-paying users are the product's value delivery mechanism; high friction = product failure |
| Accessing advanced premium feature | Low paywall | Upgrade trigger after partial value is experienced; show preview before hard gate |
| Adding first additional unit (device / member) | Zero | Referral/sharing loop; gate at a higher unit count, not the first addition |
| Adding second/third additional unit | Low–Moderate | Expansion revenue; user has established value at this point |
| Annual plan commitment | Moderate | Acceptable after 60–90 days of consistent monthly usage; not on first login |

---

## Anti-Patterns

| Pattern | Why It Fails |
|---|---|
| Gating viral/referral actions behind payment | Kills the acquisition loop before it starts |
| Placing hard paywall before Aha Moment | User hasn't experienced value; conversion fails |
| Maximising friction reduction without regard to placement | Removes friction that was doing useful work (e.g., commitment friction that prevented casual signups) |
| Adding friction to at-risk users with firm churn intent | Produces backlash and negative word-of-mouth with zero retention benefit |
| Free tier with no conversion path | Funds growth without revenue; unsustainable if cost to serve is material |

---

*Last updated: April 2026*
