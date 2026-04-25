# Willingness to Pay Research

> Part of the Consumer Research section. See [consumer-research.md](../consumer-research.md) for the index.

---

## Purpose

Willingness to Pay (WTP) research establishes the price range that customers will accept, the point at which price becomes prohibitively high, and the point at which price becomes so low it triggers quality concerns. It does not produce a final price — it produces a defensible starting range for live testing.

**Output of this research:** Acceptable price range per market, directional optimal price point, and a ranked understanding of how WTP varies by feature tier or value metric level.

---

## WTP Variation Drivers

WTP is not a fixed property of a product. It varies by:

| Driver | Example |
|---|---|
| **Geography / Market** | SEA markets typically 30–60% lower WTP than US for equivalent products |
| **Persona** | Power users vs. casual users; paying vs. non-paying persona |
| **Use Case** | Daily habitual use case vs. episodic use case |
| **Category Maturity** | New categories have lower WTP anchors; mature categories have competitive anchors |
| **Alternatives** | Users with strong free alternatives have lower WTP; users with no alternatives or costly alternatives have higher WTP |
| **Value Metric Level** | WTP should scale with the metric — validated separately (see `01-value-metric-research.md`) |

**Rule:** Run separate WTP studies per market and per primary persona. Do not use aggregate WTP results to set prices.

---

## Method 1 — Van Westendorp Price Sensitivity Meter

### What It Measures

Van Westendorp is a stated-preference survey method that establishes the acceptable price range and an indicative optimal price. It is best used for directional guidance, not as a substitute for live price testing.

### The Four Questions

Ask each respondent for a specific product or tier description:

1. **Too Cheap** — "At what price would you consider [product] so cheap that you would question its quality?"
2. **Cheap / Bargain** — "At what price would you consider [product] to be a bargain — a great buy for the money?"
3. **Expensive** — "At what price would you consider [product] to be getting expensive, but you'd still consider buying it?"
4. **Too Expensive** — "At what price would you consider [product] so expensive that you would not consider buying it?"

Present these questions with a slider or free text input. Do not anchor the respondent with a current price or competitor price beforehand.

### Graphing the Results

Plot the cumulative percentage of respondents answering each question against price points on the x-axis:

- **Too Cheap curve** — % who say the price is too cheap (rises as price decreases)
- **Cheap curve** — % who say the price is cheap (inverted — falls as price increases)
- **Expensive curve** — % who say the price is expensive (rises as price increases)
- **Too Expensive curve** — % who say the price is too expensive (rises as price increases)

### Key Outputs

| Intersection | Label | Meaning |
|---|---|---|
| Too Cheap ∩ Too Expensive | **Acceptable Range** | Prices outside this range are rejected by most respondents |
| Cheap ∩ Expensive | **Indifference Price Point (IDP)** | Most "normal" price — least price-sensitive response |
| Too Cheap ∩ Expensive | **Optimal Price Point (OPP)** | Maximises number of buyers who are not price-sensitive |
| Too Expensive ∩ Cheap | **Stress Point** | Price triggers active resistance from previously open buyers |

**The OPP is the most useful single output** — it represents the price that minimises price-related objections from the largest share of respondents.

### Limitations

- Van Westendorp reflects stated preference, not revealed behaviour. Actual conversion rates at the tested price may differ from what respondents indicate.
- Respondents anchoring to free alternatives will produce lower WTP estimates than actual conversion data would show.
- Always validate Van Westendorp outputs with live conversion testing before committing.

---

## Method 2 — Gabor-Granger

### What It Measures

Gabor-Granger tests specific price points directly by asking respondents whether they would purchase at each price. It produces a demand curve and identifies the revenue-maximising price point within the tested range.

### Survey Design

- Test 4–6 discrete price points spanning the Van Westendorp acceptable range
- Present prices sequentially in descending order (starting high reduces anchoring to a low number)
- Ask: "At a price of [X] per month, how likely are you to subscribe?" (5-point likelihood scale, or binary yes/no)

### Reading the Output

```
Price     % Would Buy    Revenue Index
$3/mo     72%            216
$5/mo     58%            290  ← Revenue-maximising
$8/mo     38%            304
$10/mo    22%            220
$15/mo    11%            165
```

The revenue-maximising point is where `Price × % Would Buy` is highest. This is the candidate price for live A/B testing.

### When to Use Gabor-Granger

Use Gabor-Granger when:
- Van Westendorp has established a range but the team needs to narrow to 1–2 specific price points
- Comparing 2–3 discrete pricing scenarios (e.g., monthly vs. annual equivalent)
- Evaluating price sensitivity before a price change for an existing product

---

## Method 3 — Conjoint Analysis

### What It Measures

Conjoint analysis mimics realistic purchase decisions by presenting respondents with bundles of features and prices, and asking them to choose between them. It isolates how much each feature and price level contributes to purchase likelihood, making it the most accurate proxy for real purchase behaviour among survey methods.

### When to Use Conjoint

Conjoint is the highest-effort method and is typically reserved for:
- Products with complex tier structures where features and prices interact
- Situations where the team needs to simultaneously test packaging and pricing
- When Gabor-Granger produces ambiguous results

### Trade-off

| Method | Effort | Accuracy | Best For |
|---|---|---|---|
| Van Westendorp | Low | Directional | Early-stage price range |
| Gabor-Granger | Low–Medium | Revenue-maximising point | Narrowing to specific prices |
| Conjoint | High | Highest among surveys | Full bundle + price optimisation |
| Live A/B | High (requires traffic) | Actual behaviour | Final validation |

---

## Recommended Sequence

For a new B2C product entering a market:

```
1. Van Westendorp (per target market)
   → Output: Acceptable range + OPP per market

2. Gabor-Granger (optional — if range is wide or team needs specific points)
   → Output: Revenue-maximising price candidate(s)

3. Live A/B Testing (post-launch)
   → Output: Actual conversion rate and revenue validation
```

Conjoint analysis is optional and is most valuable when you have multiple tiers to test simultaneously.

---

## Geographic Segmentation in WTP Studies

B2C products targeting multiple markets must run independent WTP studies per market. Do not use a single study to set prices across regions.

### SEA Market Considerations

| Factor | Implication |
|---|---|
| Lower nominal income benchmarks | Absolute price points will be lower than US/EU equivalents |
| Category unfamiliarity (new categories) | WTP anchors may be lower than category value warrants; educational framing in the survey matters |
| Mobile-first usage | Monthly billing is preferred; annual commitment friction is higher |
| Price-sensitivity signalling | Respondents may understate WTP in stated-preference surveys more than US/EU equivalents |
| Local currency framing | Always present prices in local currency; USD pricing creates conversion friction in the survey itself |

**Approach for multi-market products:** Run Van Westendorp per market → set market-specific price points → test in live conversion per market separately.

---

## WTP and Packaging Interaction

WTP is not independent of packaging. A feature that is in the free tier reduces WTP for the paid tier because the perceived value of "upgrading" is lower. Conversely, moving a high-value feature from paid to free increases activation but reduces paid tier WTP.

**Sequence:** Complete feature value research (see `02-feature-value-research.md`) before finalising WTP measurement, so respondents are evaluating a realistic tier description, not an abstract product.

---

## Research Output Checklist

Before concluding WTP research, confirm the following outputs are available:

- [ ] Van Westendorp acceptable range per target market
- [ ] Optimal Price Point per target market
- [ ] Gabor-Granger demand curve (if conducted)
- [ ] WTP segmented by primary persona
- [ ] WTP segmented by free vs. paid users (if existing product)
- [ ] Confirmation that survey was conducted in local currency per market
- [ ] Notes on respondent quality (source, qualification criteria, n per segment)

---

## Common Mistakes

| Mistake | Why It Fails |
|---|---|
| Running a single global WTP study | Masks material market differences; produces price points wrong for every market |
| Presenting a current price before the survey | Anchors respondents; results reflect the anchor, not true WTP |
| Using Van Westendorp output as a final price | It is a range, not a conversion rate; validate with live testing |
| Testing WTP before defining the tier/bundle | Respondents cannot assess WTP for an undefined product |
| Ignoring the Too Cheap threshold | Setting prices below this threshold triggers quality doubt and reduces conversion |
| Aggregating paid and free user WTP | Free users systematically understate WTP; segment separately |

---

*Last updated: April 2026*
