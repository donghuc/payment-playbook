# Price Architecture

> Part of the Pricing Strategy pillar. See [pricing-strategy.md](../pricing-strategy.md) for the index.

---

## Overview

Price architecture is the structural design of your pricing: how many tiers exist, what each tier contains, how the tiers relate to each other, and how features are packaged into those tiers. It is the foundation that all other pricing decisions — localisation, framing, discounts — operate on.

A poorly designed price architecture cannot be fixed by clever framing or aggressive discounts. The structure itself must be coherent.

---

## How Many Tiers?

The empirical evidence from B2C SaaS points consistently to three tiers as the optimal count. The reasoning has both psychological and economic dimensions.

**The psychology of three:** Humans apply relative judgment when evaluating options. When presented with three options, the middle option serves as a cognitive anchor — most users default to "not the cheapest, not the most expensive." This is the compromise effect (or centre-stage effect), documented extensively in behavioural economics. The middle option typically captures 40–60% of paying conversions in a three-tier structure.

**The economics of three:** Two tiers (free/paid, or basic/pro) leave the market segmented at only two points. Users with higher willingness-to-pay have no option to pay more; you leave revenue unrealised. Four or more tiers (in a B2C context) create decision paralysis — the marginal revenue gain from a fourth tier rarely offsets the conversion loss from increased complexity.

### One Tier

```
[ Single Plan ]
```

**When it works:** Simple, focused tools with a single clear use case. Products where the value is binary (you either need it or you don't). Productivity tools with no natural usage segments.

**Revenue ceiling:** You cannot charge different amounts to different willingness-to-pay segments. Everyone pays the same price regardless of how much value they extract.

**B2C reality:** Single-price products often signal either an early-stage product (pricing not yet optimised) or a deliberate simplicity choice. 1Password Family and similar "single plan for households" models work here. Most mature B2C SaaS moves to multi-tier.

---

### Two Tiers (Free/Paid)

```
[ Free ]  →  [ Paid ]
```

**When it works:** Freemium products where the free tier serves as acquisition channel and the paid tier captures willing payers. The division is simple: free = limited, paid = full.

**The conversion problem:** Without a higher tier, power users (who extract significantly more value than average) pay the same as casual users. This undermonetises the top of the market.

**Two tiers without free:** Some products use Basic/Pro with no free tier. This works when the product has no natural free use case and acquisition happens via trial rather than permanent free tier. The risk is that the gap between Basic and Pro may be too large.

---

### Three Tiers (Good-Better-Best)

```
[ Basic / Starter ]  →  [ Pro / Standard ]  →  [ Premium / Plus ]
```

The standard architecture for B2C SaaS. Three tiers create a clear value ladder, enable the compromise effect, and segment the market across different willingness-to-pay points.

**The critical design requirement:** The middle tier must be genuinely better — not superficially, but substantively. If the feature gap between Basic and Pro is marginal, users rationally choose Basic and the conversion rate to Pro collapses. If the gap between Pro and Premium is too large, users resist the jump to Premium. The middle tier must be the tier most users want.

**Typical tier ratios (by paying users):**
- Basic: 15–25%
- Pro (middle): 40–60%
- Premium: 20–35%

These vary significantly by product and pricing. The goal is not to hit these numbers exactly but to understand that they reflect the compromise effect in action.

**Price ratio guidance:** The price ratio between tiers should feel proportionate to the value gap. Common observed ratios:
- Basic → Pro: 2–3× price
- Pro → Premium: 1.5–2.5× price

If Pro is 10× the price of Basic with marginal additional features, the architecture is broken regardless of framing.

---

### Four or More Tiers

```
[ Basic ]  →  [ Standard ]  →  [ Pro ]  →  [ Enterprise / Business ]
```

**B2C risk:** Four tiers in B2C SaaS consistently shows lower conversion rates than three-tier equivalents, due to decision overload. The 2010 Iyengar-Lepper jam study (and hundreds of subsequent replications) demonstrates that choice abundance reduces purchase probability when the quality differences between options are perceived as subtle.

**When four tiers are justified in B2C:**
- When there is a genuine fourth user segment with distinct needs (e.g., individual, couple, family, multi-family)
- When the fourth tier is "Enterprise" and is priced/positioned as contact-sales rather than self-serve
- When usage-based pricing creates natural breakpoints that cannot be collapsed

**Practical guidance:** If you are considering four tiers, first validate that your user research produces four meaningfully distinct segments with different willingness-to-pay. If segments blur or overlap, collapse to three.

---

## Feature Packaging Logic

How you distribute features across tiers is as important as the number of tiers. Poorly designed packaging creates a situation where no tier feels right — either the free/basic tier is too generous (no reason to upgrade) or the high tier contains only features nobody actually wants.

### The Value Fence

The "value fence" is the specific feature or capability that creates a compelling reason to upgrade. Every tier boundary needs a value fence — a clear, meaningful difference that makes the next tier worth paying for.

**Weak value fences (common mistakes):**
- More storage (unless storage is the primary value driver, users don't upgrade for storage)
- Custom branding (meaningful for B2B, irrelevant for most B2C users)
- Priority support (most users don't contact support enough for this to matter)
- Minor usage limits (raising from 50 to 100 operations rarely drives upgrades)

**Strong value fences for B2C SaaS:**
- Access to a qualitatively different capability (AI features, advanced analysis, collaboration)
- Removal of a meaningful constraint (watermarks, export limits on core output quality)
- Time-saving features that compound with usage (automation, bulk actions, templates)
- Identity features (custom domains, white labelling for the user's own audience)

### The Packaging Checklist

For each tier boundary, ask:
1. Can a user in the lower tier *feel* what they're missing? If they never encounter the fence, they won't upgrade.
2. Does the upgrade pay for itself in perceived value within the first billing cycle?
3. Is the feature genuinely unavailable in the lower tier, or just limited? (Limited features can feel arbitrary; absent features feel more honest)
4. Would a non-paying user describe the upgrade as "obviously worth it" for their use case?

---

## Decoy Pricing

Decoy pricing (also called the asymmetric dominance effect) introduces a third option that is dominated by the target option — making the target option feel like the clear best value.

### Classic Decoy Structure

The canonical example: Dan Ariely's *Predictably Irrational* documented The Economist's pricing:
- Online only: $59
- Print only: $125
- Print + Online: $125

The print-only option is a decoy — nobody rationally chooses print-only at the same price as print + online. Its presence makes the combo feel like exceptional value. Result: most subscribers chose the $125 combo.

### Applying Decoy Pricing in B2C SaaS

**Pattern 1 — The dominated middle:** Create a middle tier that is priced close to the premium tier but lacks one key feature. The premium tier then feels like the rational choice.

```
Basic:   $5/mo  — core features
Standard: $14/mo — core + X
Pro:     $15/mo — core + X + Y (only $1 more than Standard)
```

The Standard → Pro gap being only $1 makes Pro feel like an obvious upgrade. This shifts the distribution toward Pro.

**Pattern 2 — The annual plan as decoy:** The monthly price serves as an anchor that makes the annual plan (shown as monthly equivalent) look obviously better.

```
Monthly: $15/month
Annual: $9/month (billed $108/year)
```

The monthly price anchors the perception of value at $15; the annual plan looks 40% cheaper, driving annual plan uptake.

**Pattern 3 — Feature quantity anchoring in comparison tables:** Listing 15 features in the Pro column versus 8 in Basic creates an implicit decoy effect — the feature count signals density of value even before the user reads each item.

### Decoy Ethics and Disclosure

Decoy pricing is standard practice across subscription businesses. It is distinct from deceptive pricing because no false claims are made — the options genuinely exist at those prices. The EU Omnibus Directive's restrictions apply to reference prices (crossed-out "was" prices), not to tier comparison structures. However, be cautious about creating plans that are designed never to be chosen — some users will intentionally select them to test boundaries, and the support burden of "I chose the wrong plan" tickets increases if the plan structure is obviously manipulative.

---

## Annual vs. Monthly Packaging

Offering both annual and monthly billing is standard for subscription B2C SaaS. The packaging question is how prominently to feature each and whether to default to annual.

### Default Billing Cycle

Most SaaS products default to monthly billing at checkout, with annual presented as an alternative with a discount. Some products (Notion, Bear) have shifted to defaulting to annual. The conversion to annual is measurably higher when annual is the default, but the trade-off is a higher initial barrier — users must commit to 12 months upfront.

**Recommended approach for B2C SaaS:**
- Display both monthly and annual on the pricing page
- Show annual as "monthly equivalent" price prominently
- Show annual total in smaller text below
- Default the toggle to annual on the pricing page (not checkout) — users can switch

### Billing Period Toggle UX

The standard pattern is a billing period toggle above the pricing table:

```
[ Monthly ]  ●  [ Annually  — Save 20% ]
```

When toggled to Annual, prices in all tier cards update to the monthly equivalent. The "Save X%" or absolute savings amount is displayed. This framing makes the comparison feel immediate and concrete.

---

## Freemium Tier Architecture

When the product includes a permanent free tier (freemium model), the free tier's design is itself a packaging decision with significant downstream consequences.

### The Free Tier Value Fence

The free tier must be genuinely useful — good enough that users adopt the product and build habits around it — while constrained in a way that creates meaningful upgrade pressure over time.

**The generosity calibration problem:** Too generous → no upgrade pressure, low conversion rates. Too restrictive → users don't adopt, no audience to convert.

**The correct calibration principle:** The free tier should deliver the core value proposition with constraints on *scale or depth*, not on *access to the core function*. A user should be able to do the thing the product promises, just less of it or with lower ceiling.

**Examples of well-calibrated free tiers:**
- Spotify Free: full music access, no skip control, ads — core value (music listening) delivered, constraint is experience quality
- Notion Free: full note-taking and database features, limited to 1,000 blocks — core value delivered, constraint is volume
- Canva Free: design creation, limited templates and assets — core value delivered, constraint is asset variety

**Examples of poorly calibrated free tiers:**
- Free tier requires connecting a credit card to use (removes the trust benefit of free)
- Free tier is time-limited (becomes a free trial with a different name — removes "free forever" positioning)
- Free tier lacks the core value proposition entirely (becomes a product teaser rather than a value delivery)

### Free Tier in SEA Context

In SEA markets with low card penetration and high price sensitivity, the free tier does additional work: it is the primary channel for user acquisition in markets where paid conversion at Western price points is low. For SEA-targeted products, the free tier should be designed to serve as a standalone useful product for a significant portion of the user base, with monetisation coming from local pricing, credits/tokens, or annual billing at locally-appropriate price points.

---

## Common Price Architecture Mistakes

**1. Too many features in Basic**
The free or basic tier is so capable that there's no compelling reason to upgrade. Symptoms: low trial-to-paid conversion, high free tier engagement with low upgrade requests.

**2. Arbitrary limits that feel punitive**
Limiting a feature to exactly 3 items on the free tier when the natural use case requires 4–5 feels manipulative rather than generous. Limits should be set above the point where most casual users hit them, not below.

**3. Premium tier containing only vanity features**
If the top tier contains primarily status signals (priority badge, dedicated support email) rather than substantive capabilities, high-value users have no reason to pay the premium. Symptoms: very low Premium tier conversion, top tier primarily used by large purchasers who need it for billing reasons.

**4. Price gaps that don't reflect value gaps**
If the price ratio between tiers is 5× but the feature gap is marginal, users will rationalise staying on the lower tier regardless of framing or discounts.

**5. Constant restructuring**
Repricing and repackaging too frequently (more than once per 18–24 months) creates trust issues with existing subscribers and complicates cohort analysis. Major structural changes should be treated as product launches, not routine adjustments.

---

*Last updated: April 2026*
