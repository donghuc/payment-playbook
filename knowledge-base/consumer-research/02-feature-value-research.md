# Feature Value Research — Max-Diff Methodology

> Part of the Consumer Research section. See [consumer-research.md](../consumer-research.md) for the index.

---

## Purpose

Feature value research identifies which product features customers actually value — and how much — so that packaging decisions are based on evidence rather than internal assumptions about what the product "should" charge for.

**Output of this research:** A 2×2 packaging matrix that maps each feature to its correct tier placement, with clear signals on which features drive conversion vs. which create resentment if gated.

---

## Why Feature Value Research Comes Before Packaging

Teams commonly package features based on:
- What was most expensive to build
- What competitors charge for
- What makes logical sense internally

None of these predict what customers value or will pay for. Gating the wrong features creates two failure modes:

1. **Gating high-value, table-stakes features** → blocks activation; users churn before experiencing the product's actual differentiators
2. **Charging for low-value features** → creates resentment and price sensitivity without increasing perceived value

---

## Step 1 — Catalogue Features by Use Case

List all existing and planned product features, grouped by the use case they serve. For multi-persona products, run separate catalogues per persona.

**Template:**

| Feature | Use Case | Free / Paid (Current) | Notes |
|---|---|---|---|
| Feature name | Primary use case it serves | Current tier status | Known signal (e.g., high engagement, support request) |

Keep the list exhaustive at first — Max-Diff will cull it.

**Limit for survey:** Max-Diff works best with 15–25 items. If your feature list exceeds 25, pre-filter to remove clear clutter (features with near-zero usage) before the survey.

---

## Step 2 — Run Max-Diff Survey (Feature Value)

### Survey Design

The same Best-Worst Scaling methodology as value metric research, applied to feature preferences.

- **Items per question:** 4–6 features
- **Questions per respondent:** 12–20 (each feature appears ~3 times)
- **Sample size minimum:** 200 respondents per segment (slightly higher than value metric — feature preferences have more variance)
- **Respondent types needed:**
  - Current free users (conversion signal)
  - Current paid users (retention signal)
  - Churned users (post-churn regret signal)

### Item Framing

Write features as outcomes for the user, not product capability descriptions:

| Weak Framing | Strong Framing |
|---|---|
| "Real-time threat analysis" | "Know instantly whether a call is a scam before you answer" |
| "Multi-caregiver coordination" | "Let your siblings see the same safety alerts without extra calls" |
| "30-day history" | "See patterns in your parent's wellbeing over the past month, not just today" |

### What to Measure

Ask: "Which of these capabilities matters most / least to you personally when deciding whether [product] is worth paying for?"

Frame toward **payment decision**, not just preference — this is different from a general satisfaction survey.

---

## Step 3 — Score and Segment

Apply the same Best-Worst Scoring formula:

```
Score = (# times chosen as Most Important − # times chosen as Least Important) ÷ # times item appeared
```

Scale to 0–100.

### Segmentation Cuts

Run separate analyses for:
- Free vs. paid users (conversion signal vs. retention signal)
- By persona (caregiver vs. secondary caregiver; solo user vs. family account holder)
- By market (Indonesia vs. Vietnam; US vs. SEA)
- By age / income bracket where relevant

**Key cross-segment comparison:** A feature that ranks high for paid users but low for free users may be a retention driver that doesn't need to be a conversion trigger. A feature that ranks high for free users but is currently gated may be suppressing conversions.

---

## Step 4 — Collect WTP Signal Per Feature

After Max-Diff scoring, collect a directional WTP signal for the top 8–10 features using a simple question:

> "If [product] charged separately for [feature], what would you expect to pay for it per month?"

This is not a rigorous WTP measurement (that is Van Westendorp's role for the full product). The purpose here is to identify **which features drive willingness to pay vs. which are merely important** (i.e., expected free).

Features can be important yet expected to be free — those are table stakes. Features that are both important AND generate WTP uplift are differentiators.

---

## Step 5 — Map to the 2×2 Packaging Matrix

Plot each feature on two axes:
- **X-axis:** Relative Preference Score (from Max-Diff)
- **Y-axis:** WTP contribution (% deviation above/below median WTP in the full product Van Westendorp)

```
                      High WTP
                         |
    Table Stakes         |    Differentiators
    (include in all      |    (gate in premium
     tiers or free)      |     or upgrade tiers)
                         |
  ─────────────────────────────────────────────
                         |
    Clutter              |    Niche
    (keep free or        |    (add-ons or
     remove)             |     specialised tiers)
                         |
                      Low WTP
              Low Value     High Value
              (Max-Diff)    (Max-Diff)
```

### Quadrant Definitions

| Quadrant | Definition | Action |
|---|---|---|
| **Table Stakes** | High value perception, low WTP contribution | Include in free tier or all paid tiers. Gating causes resentment and reduces conversion. |
| **Differentiators** | High value perception, high WTP contribution | Gate in paid or upgrade tiers. These are the features that justify premium pricing. |
| **Niche** | Low value perception overall, high WTP from a subset | Consider as add-ons or within a specialised plan segment. Do not place in the core tier stack. |
| **Clutter** | Low value perception, low WTP | Do not charge for. Keep free, de-emphasise, or consider removing. |

### Override Rule

**Even if a feature scores as a Differentiator in the 2×2, do NOT gate it if:**
- It sits on the viral/invite/sharing path (kills acquisition loop)
- It is required for the Aha Moment / core activation experience
- It is the habitual daily-use action that drives retention

The Packaging Matrix is a starting point. Growth loop compatibility is a hard constraint that overrides the matrix.

---

## Step 6 — Tier Design Rules

Once features are classified, apply these rules to build tier structure:

### Rule 1 — Each tier must have a clear persona

Do not design tiers by feature count. Design tiers around who they serve:
- "The [persona] tier includes everything [persona] needs to [achieve their core outcome]"

### Rule 2 — Upgrade triggers must be self-evident

The feature that triggers an upgrade from Free to Paid, or Tier 1 to Tier 2, must be:
- Visible to the user (not hidden behind the paywall)
- Experienced as a partial preview or blocked after trial period
- Clearly connected to an outcome the user has already experienced and wants more of

### Rule 3 — Never create a free tier with no upgrade path

If the free tier is complete — all core outcomes achievable for free — there is no conversion pressure. Ensure at least one Differentiator feature is visible but gated in each paid tier.

### Rule 4 — Limit tiers to 3 (max 4) in B2C

B2C buyers do not compare 5-tier plans. 3 tiers is the standard (typically: Free / Core / Premium or similar). A 4th tier is only justified if there is a clearly distinct enterprise/family persona with demonstrably different WTP.

---

## Worked Example — Feature Classification

### B2C Subscription App (Illustrative)

| Feature | Quadrant | Tier Placement |
|---|---|---|
| Core free feature (basic version) | Table Stakes | Free — acquisition loop driver; never gate |
| Basic usage history / activity log | Table Stakes | Free — reinforces perceived value; supports habit formation |
| Basic alerts / notifications | Table Stakes | Free — core activation loop; gating causes early churn |
| Advanced detection or analysis (real-time) | Differentiator | Paid — primary upgrade trigger |
| Multi-user / family account coordination | Differentiator | Paid — natural expansion trigger; high perceived value |
| Extended history access | Differentiator | Paid or premium tier — value grows with engagement depth |
| Long-term trend or pattern analysis | Differentiator | Premium tier — requires sustained engagement to perceive value |
| Data export / report sharing | Niche | Add-on or premium — useful for specific use cases, low general WTP |
| Advanced configuration / customisation | Clutter | Free (if retained) — low conversion impact; not a purchase trigger |

**Upgrade trigger pattern:** User experiences the core free feature and begins to see value. A preview of the key Differentiator feature is shown (limited activations or a timed preview window). When the preview ends, a paywall appears with framing tied to the specific outcome the user has already experienced: "You've seen what's possible — keep it going."

---

## Common Mistakes

| Mistake | Why It Fails |
|---|---|
| Gating table stakes features | Creates resentment before value is experienced; blocks activation |
| Packaging by feature count ("5 features in Free, 10 in Paid") | Arbitrary — customers do not count features; they evaluate outcomes |
| Treating all high-usage features as Differentiators | Usage ≠ willingness to pay. High-usage features may be table stakes that users would leave over if gated. |
| Building tiers for every use case segment | Complexity backfires in B2C; keep to 3 tiers and handle segments via add-ons |
| Skipping segmentation in the analysis | Aggregate feature scores conceal persona-level differences; a feature may be a Differentiator for one persona and Clutter for another |
| Placing upgrade triggers after the Aha Moment is already complete | Once the user feels satisfied with the free experience, upgrade motivation is low |

---

*Last updated: April 2026*
