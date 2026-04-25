# Value Metric Research — Max-Diff Methodology

> Part of the Consumer Research section. See [consumer-research.md](../consumer-research.md) for the index.

---

## Purpose

Value metric research identifies which pricing unit — the metric by which price scales — best matches how customers experience value from the product. The wrong value metric creates persistent pricing friction, even when price level and features are correct.

**Output of this research:** A ranked list of value metric candidates, segmented by persona and market, with a defensible recommendation for which metric to test in live pricing.

---

## Step 1 — Identify the Core Customer Motivation

Before generating metric candidates, identify the primary motivation driving product usage:

| Motivation Type | Description | Example |
|---|---|---|
| **Personal** | Time savings, convenience, peace of mind, flexibility | Family safety app: caregiver peace of mind |
| **Financial** | Earn more, save money, avoid costs | Thumbtack pro: more customers |
| **Social** | Status, recognition, belonging, connection | LinkedIn: professional visibility |

**Why this matters:** The value metric must be a measurable proxy for the outcome the customer cares about. A personal-motivation product with a financial metric will feel misaligned to users.

---

## Step 2 — Generate Metric Candidates

For each use case, generate 6–10 candidate value metrics that plausibly represent how value scales for that customer.

### Candidate Types

| Metric Type | How It Scales | Predictability | Value Alignment |
|---|---|---|---|
| **Feature-based** | Access to features increases | High | Low |
| **Usage-based** | Volume of usage (seats, devices, events, contacts) | Medium | Medium |
| **Outcome-based** | Measurable result (leads, tickets, bookings) | Low | High |

### Generation Prompts

- "As the customer's problem is solved more fully, what changes?"
- "What would a customer point to if asked 'I got more value this month because…'?"
- "What unit could you add more of that would make the product obviously worth more?"

### Example — B2C Subscription App (Illustrative)

| Candidate Metric | Type | Notes |
|---|---|---|
| Number of units covered (devices / members) | Usage-based | Familiar, predictable; scales naturally with household or team size |
| Number of events or incidents handled | Outcome-based | Directly tied to problem outcome, but variable/unpredictable; creates billing anxiety |
| Number of secondary users on account | Usage-based | Coordination value; natural expansion trigger |
| Level of protection or access (tiers) | Feature-based | Easy to communicate; low value alignment |
| Alerts or notifications per month | Outcome-based | Hard to predict; variable across users |
| Days of history accessible | Feature-based | Perceived as arbitrary unless outcome is clearly tied to history length |

---

## Step 3 — Run Max-Diff Survey

Max-Diff (Best-Worst Scaling) presents sets of 4–6 items at a time and asks respondents to select the most and least important/valuable in each set. This produces reliable relative preference scores even with small sample sizes.

### Survey Design

- **Items per question:** 4–6 value metric descriptions
- **Questions per respondent:** 10–20 (each item appears approximately 3 times)
- **Sample size minimum:** 150 respondents per segment
- **Respondent requirement:** Must be current users or qualified prospects for the specific use case being tested

### Item Framing

Write each value metric as a concrete benefit statement, not a product feature:

| Weak Framing | Strong Framing |
|---|---|
| "Number of devices" | "Protection extends to all family devices (phone, tablet)" |
| "Scam calls blocked" | "Blocks more scam attempts as your family encounters more threats" |
| "Number of dependents" | "Monitor more family members as your household grows" |

### What to Measure

Ask respondents: "Which of these factors matters most / least when thinking about whether you're getting value from [product]?"

Do **not** ask about pricing directly — this is a value perception exercise, not a WTP exercise. WTP comes in Step 5.

---

## Step 4 — Score and Interpret

### Max-Diff Scoring Formula

```
Best-Worst Score = (# times chosen as Best − # times chosen as Worst) ÷ # times item appeared
```

Scores range from −1 (always worst) to +1 (always best). Convert to a 0–100 scale for readability.

### Interpretation Framework

| Score Range | Interpretation | Action |
|---|---|---|
| Top 1–2 items (>60) | Strongly preferred value drivers | Primary value metric candidates |
| Items scoring 40–60 | Moderate preference | Consider as secondary metrics or tier differentiators |
| Items scoring <30 | Low preference | Avoid as primary metric; may still work as feature-tier signals |

### Segmentation Requirement

**Never use aggregate Max-Diff scores alone.** Run separate analyses for:

- Each use case (e.g., passive daily-protection use case vs. active scam-response use case)
- Each target market (Indonesia vs. Vietnam vs. US)
- Key demographic splits (age, income bracket, device ownership)

A metric that ranks #1 in aggregate may rank #3 in the primary SEA segment. That asymmetry is the useful finding.

---

## Step 5 — Scaled WTP Validation

After identifying the top 2–3 metric candidates from Max-Diff, run a **Scaled WTP** check to validate that the preferred metric also corresponds to higher willingness to pay.

### Method

1. Take the top candidates from Max-Diff
2. For each candidate metric, create three scenarios: low, medium, high value (e.g., 1 device / 3 devices / 5 devices)
3. For each scenario, ask Van Westendorp's four price questions (see `03-willingness-to-pay.md`)
4. Plot how WTP shifts across metric levels

### Passing Criteria

The right value metric shows WTP that increases meaningfully as the metric increases. If WTP is flat across metric levels, the metric does not represent perceived value — it's a feature gate, not a true value driver.

```
Right metric: WTP(low) < WTP(medium) < WTP(high)  ✓
Wrong metric: WTP(low) ≈ WTP(medium) ≈ WTP(high)  ✗
```

---

## Step 6 — Growth Loop Compatibility Check

Before finalising the value metric, verify it does not place friction on actions critical to acquisition or retention loops.

| Check | Requirement |
|---|---|
| Does the metric gate the viral/sharing action? | If yes → disqualify |
| Does the metric tax the core habitual behaviour? | If yes → disqualify |
| Is the metric opaque or hard to predict? | If yes → prefer banded pricing |
| Does the metric align with how the free tier transitions to paid? | Must be a natural step up |

### Continuous vs. Banded Decision

Once the metric is selected:
- **If the metric is familiar and predictable** → continuous pricing is acceptable (e.g., per editor)
- **If the metric is usage-based with variance** → use banded pricing (e.g., 1–3 devices / 4–6 devices) to reduce billing anxiety, especially in SEA markets

---

## Worked Example — Selecting a Value Metric

### B2C Subscription App (Illustrative)

**Recommended metric:** Number of units covered (banded: Solo / Family / Extended)

**Rationale:**
- Familiar and predictable — users understand what "covering more devices or people" means
- Scales naturally with household or team size; creates a clear expansion path
- Does not gate the core free feature that drives acquisition and referral
- Banded pricing reduces budget anxiety vs. continuous per-unit billing, which is especially important in price-sensitive markets

**Reject:** Events or incidents handled per month — outcome-based, high variance across users, creates perception of "paying more when things go wrong" and makes budgeting unpredictable

---

## Common Mistakes

| Mistake | Why It Fails |
|---|---|
| Using aggregate Max-Diff scores without segmentation | Conceals segment-level differences that are the real signal |
| Testing features as value metrics | Features are attributes, not proxies for outcomes; they produce flat WTP scaling |
| Skipping the Scaled WTP validation | A metric can rank high in preference but show flat WTP scaling — that means it's table stakes, not a value driver |
| Selecting a metric that taxes the viral loop | The metric must never gate actions that drive acquisition |
| Choosing outcome-based metrics in early markets | Outcome unpredictability creates billing anxiety; only viable when outcomes are stable and well understood |

---

*Last updated: April 2026*
