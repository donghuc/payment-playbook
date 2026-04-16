# Pricing Strategy — Index

> Part of the Payment Strategy Knowledge Base. See [README.md](./README.md) for the full index.
> **Pillar 2 of 6.** Covers how to structure, position, and localise pricing — distinct from which revenue model you use (Pillar 1) and what discounts you apply (Pillar 6).

---

## What Pricing Strategy Is (and Is Not)

**Revenue model** (Pillar 1) answers: *How do you charge?* — subscription, freemium, one-time, usage-based.

**Pricing strategy** (this pillar) answers: *How much do you charge, how do you structure it, and how do you present it?*

**Discount mechanisms** (Pillar 6) answer: *When and by how much do you reduce it?*

These three are composable but distinct. A product can use a tiered subscription model (Pillar 1), with localised price points by market (Pillar 2), and a 30% annual prepay discount (Pillar 6). The pricing strategy pillar focuses on the base price architecture that discounts operate on.

---

## The Five Dimensions of Pricing Strategy

```
1. Price Architecture       How many tiers, what they contain, how they're packaged
2. Price Localisation       Whether prices vary by market and how
3. Anchoring & Framing      How prices are presented to influence perception
4. Price Testing            How to validate, iterate, and optimise prices empirically
5. Market-Specific Pricing  SEA and EU specific price points, constraints, and norms
```

---

## Quick Reference: Pricing Approaches

### Price Architecture Patterns

| Pattern | Plans | Best for | Risk |
|---------|-------|----------|------|
| Single price | 1 | Simple product, one use case | Leaves money on table; no expansion path |
| Two-tier | 2 | Clear free/paid distinction | Middle segment underserved |
| Good-Better-Best | 3 | Most B2C SaaS | Middle plan must be genuinely better |
| Four-tier+ | 4+ | Complex feature sets, B2B | Analysis paralysis; avoid for B2C |
| Usage-based | Variable | API, credits, consumption | Unpredictable revenue; anxiety for users |

### Price Localisation Approaches

| Approach | Description | Used by | Complexity |
|----------|-------------|---------|------------|
| USD everywhere | Single global price in USD | Early-stage SaaS | Low | 
| Local currency display, same price | Convert USD to local currency at spot rate | Many SaaS tools | Low — cosmetic only |
| PPP-adjusted regional pricing | Different actual price per region based on purchasing power | Netflix, Spotify, Adobe | Medium — requires geo-gating |
| Tiered regional pricing | 2–4 global price bands (e.g., Tier A/B/C countries) | Setapp, many tools | Medium |
| Fully individualised country pricing | Each country set independently | Large platforms | High |

### Anchoring Techniques

| Technique | Mechanism | Measured effect |
|-----------|-----------|-----------------|
| Annual plan framing as monthly equivalent | "Just $X/month" for annual plan | Reduces perceived price of annual |
| Most Popular badge on middle tier | Cognitive shortcut — social proof | Shifts mix toward middle |
| Crossed-out reference price | Higher anchor makes current price feel lower | 10–30% conversion lift in tests |
| Per-day framing | "$0.33/day" instead of "$10/month" | Reduces psychological cost |
| Decoy pricing | Third option that makes target option dominate | Measurable shift toward target |
| Feature quantity anchoring | "200+ templates" in feature list | Perceived value increase |

---

## Critical Pricing Decisions for B2C SaaS in SEA/EU

### Decision 1 — One global price or localised?

The revenue mathematics of global pricing is clear: the absolute willingness-to-pay in Indonesia, Vietnam, or the Philippines is 3–6× lower than in Singapore, the UK, or Australia when measured in USD. A $10/month product at US pricing represents 1–2% of monthly income for a user in Vietnam versus 0.03% for a user in the US. This makes a single global price either economically inaccessible for SEA users or underpriced for Western markets.

See `pricing/02-price-localisation.md` for the full analysis.

### Decision 2 — How many tiers?

Three tiers (Good-Better-Best) is the empirically validated optimum for most B2C SaaS products. Two tiers (free/paid) work at the extremes. Four or more tiers increases decision complexity without proportionate revenue gain in B2C contexts (B2B is different).

See `pricing/01-price-architecture.md` for the full analysis.

### Decision 3 — Monthly-only, annual-only, or both?

Offering both is standard. Annual plan discount (20–25%) is the primary lever for cash flow improvement and churn reduction. The framing of annual plans (monthly equivalent displayed, not annual total) significantly affects uptake.

See `pricing/03-anchoring-framing.md` for the framing analysis.

### Decision 4 — How to set the actual number?

There are four methods — competitor benchmarking, cost-plus, value-based, and willingness-to-pay research. Each has specific applicability and blind spots. Price testing (A/B) is the only way to empirically validate before launch or after changes.

See `pricing/04-price-testing.md` for methodology.

---

## Pricing Strategy Files

| File | Topic | Status |
|------|-------|--------|
| `pricing/01-price-architecture.md` | Tier structure, number of plans, decoy pricing, packaging logic | ✅ |
| `pricing/02-price-localisation.md` | PPP-based pricing, local currency display, geo-pricing strategy, regional price gaps | ✅ |
| `pricing/03-anchoring-framing.md` | Price anchoring, annual vs. monthly framing, plan naming, feature grouping | ✅ |
| `pricing/04-price-testing.md` | A/B testing pricing, cohort analysis, willingness-to-pay research methods | ✅ |
| `pricing/05-sea-pricing.md` | SEA-specific price points, round-number psychology, affordability benchmarks | ✅ |
| `pricing/06-eu-pricing.md` | VAT-inclusive display, cross-border consistency, Omnibus compliance | ✅ |

---

## How Pricing Strategy Interacts with Other Pillars

```
Pillar 1 — Revenue Models
     ↓
     Defines HOW you charge (subscription, freemium, usage-based)
     
Pillar 2 — Pricing Strategy  ← You are here
     ↓
     Defines HOW MUCH and HOW IT'S STRUCTURED
     (tier count, price points per market, framing)

Pillar 3 — Payment Methods
     ↓
     Defines WHICH METHODS can support your chosen billing model
     (recurring billing availability constrains some pricing models in SEA)

Pillar 4 — Checkout UX
     ↓
     Defines HOW THE PRICING IS PRESENTED at the point of conversion
     (pricing table design, plan comparison, upgrade flows)

Pillar 6 — Discount Mechanisms
     ↓
     Defines MODIFICATIONS to your base price
     (introductory discounts, annual prepay, win-back offers)
```

**Critical dependency:** Set the base pricing architecture (Pillar 2) before configuring discount mechanics (Pillar 6). Discounts operate as a percentage or fixed reduction from base price — if the base price is wrong, the discount strategy is built on a flawed foundation.

---

*Last updated: April 2026*
