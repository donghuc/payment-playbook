# Payment Playbook

A skills library for B2C payment strategy decisions — built for product managers, business development leads, and product designers working in Southeast Asia, Europe, and global markets.

**Five decision-support skills. One verified knowledge base. No hallucinating.**

---

## What This Is

Payment Playbook bundles a fact-checked knowledge base (6 pillars, 40+ files, covering SEA and EU markets) with five Claude skills that help different people make different payment decisions without having to read every document.

Each skill is grounded in the knowledge base, cites its sources with confidence tiers, and operates under shared guardrails that prevent it from filling gaps with unverified information.

## The Skills

| Skill | What it does | Who uses it |
|---|---|---|
| **Model Picker** | Chooses the right revenue model (freemium, trial, subscription, one-time, usage-based) for your product and market | PM, Monetization lead |
| **Price Builder** | Designs tier structure, localised price points, annual/monthly framing, and anchoring strategy | PM, Monetization lead, BD |
| **Checkout Builder** | Delivers screen-by-screen checkout flow specs with copy, legal requirements, and failure states | Product Designer, PM |
| **Churn Fixer** | Diagnoses voluntary vs involuntary churn and routes to the right intervention (dunning or win-back) | PM, Monetization lead |
| **Promo Planner** | Matches discount mechanics to business objectives, flags LTV risk, checks EU Omnibus compliance | BD Manager, Monetization lead |

## The Knowledge Base

The `knowledge-base/` folder contains a structured reference library covering:

- **Pillar 1 — Revenue Models:** 8 B2C model archetypes with verified conversion benchmarks
- **Pillar 2 — Pricing Strategy:** Tier architecture, PPP localisation, SEA and EU price ranges, anchoring and framing
- **Pillar 3 — Payment Methods by Market:** SEA (6 countries), Europe, Global — with recurring billing support status for every method
- **Pillar 4 — Checkout UX:** 6 complete flow specifications including SEA wallet flows, mobile IAP, cancellation compliance
- **Pillar 5 — Post-Payment Strategy:** Dunning sequences, subscription lifecycle, disputes, win-back, full metrics framework
- **Pillar 6 — Discount Mechanisms:** 12 documented mechanics with churn risk ratings and LTV implications

Fact-checked: April 2026. See `knowledge-base/fact-check-log.md` for what was corrected.

## Guardrails

All skills enforce the same rules defined in `GUARDRAILS.md`:

- Every factual claim is labeled with a confidence tier: ✅ Verified / ⚠️ Inferred / ❓ Outside KB
- No stat is stated without citing the KB file it comes from
- KB gaps are never filled with general knowledge — the skill says what it doesn't know
- Time-sensitive information is flagged for freshness verification
- Legal and compliance sections always route to qualified counsel
- A decision-support disclaimer is displayed once at the start of every session

---

## Install

### Option 1 — npx CLI (recommended)

No git clone needed. The installer downloads skills and the knowledge base directly from GitHub.

**Install all 5 skills (interactive):**
```bash
npx payment-playbook
```

**Install a single skill:**
```bash
npx payment-playbook --skill model-picker
npx payment-playbook --skill price-builder
npx payment-playbook --skill checkout-builder
npx payment-playbook --skill churn-fixer
npx payment-playbook --skill promo-planner
```

**Install globally (all projects) or into current project:**
```bash
npx payment-playbook --global          # → ~/.claude/skills/
npx payment-playbook --project         # → ./.claude/skills/
```

**List available skills:**
```bash
npx payment-playbook --list
```

The installer patches knowledge base path references automatically so skills work regardless of where they're installed.

---

### Option 2 — Cowork plugin (full bundle)

Install all 5 skills as a single Cowork plugin. Point your Claude plugin installer at the repo root:

```
https://github.com/donghuc/payment-playbook
```

The `.claude-plugin/plugin.json` manifest handles the rest.

---

### Option 3 — Manual (individual skill)

Clone the repo and point your Claude skill installer at a specific skill folder:

```
https://github.com/donghuc/payment-playbook/tree/main/skills/model-picker
https://github.com/donghuc/payment-playbook/tree/main/skills/price-builder
https://github.com/donghuc/payment-playbook/tree/main/skills/checkout-builder
https://github.com/donghuc/payment-playbook/tree/main/skills/churn-fixer
https://github.com/donghuc/payment-playbook/tree/main/skills/promo-planner
```

> **Note:** Manual installs require the full repo structure to be preserved so that skill files can resolve `../../knowledge-base/` correctly.

---

## Using Your Own Knowledge Base

The skills reference the knowledge base by relative path. To adapt Payment Playbook for your own KB:

1. Fork the repo
2. Replace the contents of `knowledge-base/` with your own structured payment documentation
3. Update the file path references in each `SKILL.md` if your file naming differs

The skill logic, decision flows, and guardrails are reusable with any KB that covers the same topic areas.

---

## Disclaimer

Payment Playbook is a decision-support tool, not a decision guarantee. Outputs are based on documented best practices and market research. Before acting on any recommendation: validate payment infrastructure with your provider, verify regulatory requirements with legal counsel, and test pricing assumptions against your own data.

---

## License

MIT License. See `LICENSE` for details.

Built and maintained by [donghuc](https://github.com/donghuc).
