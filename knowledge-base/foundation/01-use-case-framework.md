# Use Case Framework

> Part of the Monetization Strategy Foundation. See [monetization-strategy.md](../monetization-strategy.md) for the index.

---

## Core Principle

Monetization is a downstream consequence of the problem you solve, who you solve it for, and how often that problem occurs. Teams that design pricing without grounding it in use cases create misaligned, fragile monetization models.

**Every monetization decision assumes a fully defined use case. If the use case is missing or wrong, the monetization model will likely fail.**

---

## The 5-Part Use Case Framework

Each product use case is defined by answering five questions:

### 1. Problem
What problem is the user trying to solve, in their words?

- Products often solve one macro problem with multiple sub-use cases
- The problem statement must come from the customer's perspective, not the product's feature list
- Different problems for the same product justify different monetization models

### 2. Persona (Who)
Who experiences this problem?

- Key demographic / firmographic attributes: age, income, company size, geography, role
- **Same product + same problem ≠ same monetization if persona differs**
- The persona who *pays* and the persona who *uses* may be different — this split has direct monetization implications (e.g., caregiver pays, elderly parent uses)

### 3. Alternatives
What would the user do if this product did not exist?

- Depends on category maturity:
  - **New categories** → fragmented or manual workflows (low bar to beat, but also low WTP baseline)
  - **Mature categories** → direct competitors (higher WTP but stronger switching cost to overcome)
- Alternatives shape willingness to pay and positioning. Understanding alternatives tells you what users compare your price against.

### 4. Why (Motivation + Differentiation)
Two dimensions:

**Motivation type:**
- **Personal** — time savings, convenience, flexibility, peace of mind
- **Financial** — earn more money, save money, avoid costs
- **Social** — status, recognition, belonging, connection

**Differentiation:**
- Clear, specific reason users choose this product over the alternatives
- "Better / easier / higher quality" are not real differentiators — they describe a feeling, not a reason
- The differentiation must be something the alternative cannot easily replicate

### 5. Frequency
How often does the problem naturally occur?

| Frequency | Example Products | Pricing Implication |
|---|---|---|
| Daily | Slack, Gmail, Duolingo | Subscription (daily habit) |
| Weekly | Figma, Notion, Trello | Subscription (weekly workflow) |
| Monthly | Instacart, ClassPass | Subscription or transactional |
| Quarterly / Yearly | Tax software, travel booking | Transactional or annual subscription |
| Once-in-a-lifetime | Wedding planning, mortgage tools | One-time purchase or transactional |

**Frequency directly determines:**
- Whether subscription or transactional pricing is appropriate
- The minimum viable subscription term (must be long enough for habit to form)
- Price magnitude (higher frequency = smaller per-use perceived cost)

---

## Multiple Use Cases Within One Product

Most products serve multiple use cases. Each use case should have its own monetization model.

**Pattern recognition:**

| Use Case Type | Monetization Implication |
|---|---|
| Use cases differ by persona | Likely different plans or tiers |
| Use cases differ by frequency | Likely different billing models (subscription vs. transactional) |
| Use cases differ by motivation | Likely different feature packaging and messaging |
| Use cases differ by WTP | Likely different price points or vertical strategy |

---

## Examples

### Figma
- **Problem:** Collaborative visual design
- **Sub-use cases:** Individual freelancer / Small team / Large organisation
- **Persona shifts:** Individual (personal motivation) → Team lead (coordination) → Org admin (security + compliance)
- **Frequency:** Weekly
- **Why:** Real-time collaboration, no desktop install, per-editor pricing scales with team
- **Result:** Tiered subscription by team size — each tier is a distinct use case with distinct monetization

### Thumbtack (Two-sided marketplace)
- **Pro use case:** Need more customers (financial motivation, weekly frequency) → transactional lead pricing
- **Consumer use case:** Need trustworthy providers (personal motivation, monthly frequency) → free access to maximise demand-side volume

### B2C Subscription App (Illustrative)
| Dimension | Detail |
|---|---|
| Problem | User cannot easily manage or monitor something important in their daily life without being physically present |
| Persona | Paying: the account holder (adult decision-maker). Using: account holder and/or dependents. When the paying and using personas differ, monetization must target the payer while UX must work for both |
| Alternatives | Manual workarounds, phone-based coordination, free but limited OS-level tools |
| Why | Passive, automated coverage that removes the need for active daily effort; family-coordinated access |
| Frequency | Core background function is daily/passive; meaningful alerts or events are episodic (weekly or less) |

**Critical note for dual-frequency products:** When a product has one passive/daily sub-use case and one episodic sub-use case, these should be treated as separate monetization problems with different frequency profiles and different WTP. Collapsing them into a single model produces pricing that fits neither well.

---

## Common Mistakes

1. **Using product features as the use case definition** — "AI-powered monitoring" is a feature, not a use case. The use case is the problem it solves.
2. **Single persona assumption** — Assuming all users of a product have the same motivations and frequency, which leads to a single plan that serves no one optimally.
3. **Ignoring the paying vs. using persona split** — When the person who pays is not the person who uses the product, marketing, pricing, and UX must be designed for both.
4. **Treating frequency as a binary** — Products often have users across multiple frequency bands. A frequency histogram will reveal this distribution; don't assume it's uniform.

---

*Last updated: April 2026*
