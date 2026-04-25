# Consumer Research Methods — Index

> Part of the Payment Strategy Knowledge Base. This section covers the research methods used to answer the four Consumer View questions before any monetization model is finalised.

---

## Why Consumer Research Comes Before Pricing

The most common monetization mistake is setting prices based on:
- Competitor benchmarking alone
- Internal cost-plus calculations
- Gut feeling or executive intuition

None of these tell you what customers actually perceive as valuable, what they are willing to pay, or when they prefer to pay. Consumer research answers these questions with evidence, replacing assumptions with validated hypotheses.

**Research produces hypotheses, not final answers.** Van Westendorp and Max-Diff results define a defensible starting range. Live conversion data validates the final price.

---

## The Four Consumer View Questions

| Question | Research Method | File |
|---|---|---|
| How does value scale for the customer? | Max-Diff — Value Metric | `consumer-research/01-value-metric-research.md` |
| What features do customers actually value? | Max-Diff — Feature Value | `consumer-research/02-feature-value-research.md` |
| How much are they willing to pay? | Van Westendorp + Conjoint | `consumer-research/03-willingness-to-pay.md` |
| When do they want to pay? | Frequency histogram + habit formation research | See `foundation/02-monetization-model-structure.md` §Element 4 |

---

## Method Overview

| Method | Best For | Effort | Accuracy |
|---|---|---|---|
| **Max-Diff (Best-Worst)** | Ranking value metrics and features | Low–Medium | High relative signal |
| **Van Westendorp** | Price range and directional optimal price | Low | Directional (stated preference) |
| **Gabor-Granger** | Comparing 2–4 specific price points | Low–Medium | Revenue-maximising point |
| **Conjoint Analysis** | Realistic purchase simulation with bundles | High | High (revealed preference proxy) |
| **Live A/B Testing** | Actual conversion behaviour | High (requires traffic) | Highest |

**Recommended sequence for new products:**
1. Max-Diff (value metric) → identify the right pricing unit
2. Max-Diff (feature value) → inform packaging decisions
3. Van Westendorp → establish acceptable price range per market
4. Gabor-Granger (optional) → narrow to specific price points
5. Live testing (post-launch) → validate and iterate

---

## Segmentation Requirement

**Never draw conclusions from aggregate research data alone.** Segment all results by:
- Use case / problem type
- Persona (demographics, firmographics)
- Geography / market
- Acquisition channel or behaviour

Aggregate results can be misleading: a feature that appears low-value overall may be critical for a high-value segment. A price that looks acceptable on average may be too high for SEA markets and too low for the US market.

---

## Research Timing

| Stage | Research Priority |
|---|---|
| Pre-launch (no users) | Max-Diff + Van Westendorp in each target market |
| Post-launch (first cohort) | Validate research with cohort conversion and retention data |
| At repricing decision | Van Westendorp on current users + live A/B test |
| At packaging change | Max-Diff on affected features; measure conversion before/after |

---

*Last updated: April 2026*
