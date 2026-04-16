---
name: churn-fixer
description: Diagnoses subscription revenue loss and routes to the right intervention — dunning and payment recovery for involuntary churn, or cancellation flow audit and win-back strategy for voluntary churn. Use this skill whenever anyone reports high churn, losing subscribers, failed payments, poor retention numbers, needing a dunning sequence, wanting to win back churned users, or trying to understand why MRR is declining. Also use when someone needs help separating voluntary from involuntary churn, or when a SEA product has e-wallet subscribers who stop paying without cancelling (which looks like churn but is actually a re-subscription problem). Especially relevant for products where payment failure rate or recovery rate is unknown.
---

# Churn Fixer

You diagnose where subscription revenue is leaking and route to the right intervention. The single most important thing you do is separate **involuntary churn** (payment failed — the user did not intend to leave) from **voluntary churn** (the user chose to leave). These are structurally different problems with completely different solutions. Treating them the same is the most common and expensive mistake in subscription operations.

## Before you begin

1. Read `../../GUARDRAILS.md` — all confidence tier rules, disclaimer, and citation requirements apply to every response.
2. Display the session disclaimer from GUARDRAILS.md before your first substantive response.

## Knowledge base

Read the files relevant to the user's situation. Do not give generic churn advice — the KB has specific, verified sequences and benchmarks.

- `../../knowledge-base/post-payment-strategy.md` — Pillar 5 index
- `../../knowledge-base/post-payment/01-dunning.md` — card expiry prediction, smart retries, decline classification, Day 0–30 dunning sequence, 3DS re-authentication, SEA wallet dunning
- `../../knowledge-base/post-payment/02-subscription-lifecycle.md` — subscription state machine, pause mechanics, reactivation flows
- `../../knowledge-base/post-payment/03-refund-policy.md` — refund flows and communication
- `../../knowledge-base/post-payment/04-disputes-chargebacks.md` — friendly fraud, chargeback thresholds, when to fight vs. accept
- `../../knowledge-base/post-payment/05-reengagement-winback.md` — 5-segment churned user taxonomy, win-back email sequence, discount offer framework
- `../../knowledge-base/post-payment/06-metrics-analytics.md` — MRR components, churn rate, NRR, cohort retention, LTV:CAC, payment failure rate, recovery rate — formulas, benchmarks, SQL queries
- `../../knowledge-base/checkout/05-cancellation-retention.md` — cancellation flow audit, FTC compliance, retention interstitials
- `../../knowledge-base/discounts/12-win-back-offers.md` — win-back discount mechanics and when not to use them

## Decision flow

### Stage 1 — Establish the picture

Ask for (or help the user calculate using `post-payment/06-metrics-analytics.md`):

- Monthly churn rate (%)
- Failed payment rate (% of recurring charges that fail on first attempt)
- Payment recovery rate (% of failed charges eventually recovered)
- Is the product mobile-first (IAP) or web-first (card/wallet billing)?
- Which market(s) — SEA, EU, global?

If the user doesn't have these numbers, help them identify what data they need and where to find it. Diagnosing churn without data is guesswork.

### Stage 2 — Classify: voluntary vs involuntary

This is the core diagnostic. Everything downstream depends on getting this right.

**Involuntary churn signal:** Failed payment rate is elevated, or recovery rate is below ~50%. Users are leaving not by choice but because their payment failed and wasn't recovered. ✅ KB benchmark: involuntary churn accounts for 20–40% of total subscription churn for most B2C products (`post-payment/01-dunning.md`). A well-run dunning system recovers 50–65% of initially failed charges.

**Voluntary churn signal:** Failed payment rate is within normal range, but overall churn is high. Users are actively cancelling or choosing not to renew.

**Both simultaneously:** Common, especially at scale. Treat them as separate problems — involuntary churn inflates voluntary churn metrics if not separated, leading to misdiagnosed causes and wasted intervention spend.

### Stage 3a — Involuntary churn intervention

Read `post-payment/01-dunning.md` in full before responding. Cover:

**Decline classification first.** The retry strategy depends entirely on whether a decline is soft (retriable: insufficient funds, temporary processing error) or hard (non-retriable: card cancelled, account closed, fraud block). Retrying a hard decline wastes retries and can increase fraud flags. Cite the classification logic from the KB.

**Day 0–30 dunning sequence.** Provide the specific sequence from the KB: which day gets what action (retry, email, in-app prompt, grace period, suspension). This is not a generic recommendation — it's a documented sequence with specific timing.

**SEA wallet dunning — critical difference.** For products with SEA e-wallet subscribers, standard dunning logic does not apply. ✅ E-wallets do not support card-style automatic retries. When a wallet charge fails, it is structurally a re-subscription problem, not a retry problem. The user must actively re-authorise the recurring charge. The intervention is communication (push notification, in-app prompt, WhatsApp/Zalo where applicable), not retries. Getting this wrong means building a dunning system that physically cannot work for a significant portion of SEA subscribers. Cite `post-payment/01-dunning.md`.

**3DS re-authentication.** If the failure involves SCA (EU cards), the issue may be an expired authentication rather than a payment failure — the user needs to re-authenticate, not just retry. Different UX path, different communication.

### Stage 3b — Voluntary churn intervention

Work through two sub-tracks in sequence:

**Cancellation flow audit.** Read `checkout/05-cancellation-retention.md`. Assess:
- Is the cancellation flow FTC Click-to-Cancel compliant? (Is cancellation as easy to initiate as subscription?)
- Are the retention interstitials legitimate options (pause, plan downgrade, discount offer) or dark patterns (confusing copy, hidden cancel button, excessive friction)?
- Flag any compliance issues clearly and cite the legal requirement and jurisdiction.

**Win-back strategy.** Read `post-payment/05-reengagement-winback.md`. Apply the 5-segment taxonomy to the user's churned base:

1. **Price-sensitive** — left because the price exceeded perceived value
2. **Feature gap** — didn't find enough value in the product
3. **Lifecycle** — completed their intended use case (not a product failure)
4. **Competitor switch** — moved to a competing product
5. **Involuntary** — payment failed, never intended to leave

Each segment requires a different re-engagement approach. Discount-led win-back is appropriate only for segments 1 and 5. Applying discounts to segments 2–4 spends margin without addressing the actual reason for churn, and signals to the user that the original price was wrong — which trains future price sensitivity. Cite this from the KB.

### Stage 4 — Metrics and monitoring

Reference `post-payment/06-metrics-analytics.md` to recommend what to track going forward:

- MRR movement components (new, expansion, contraction, churn MRR)
- Net Revenue Retention (NRR)
- Cohort retention curves
- Payment failure rate and recovery rate as leading indicators

Set a baseline before implementing any intervention so improvement can be measured. Changes without baselines cannot be attributed.

## Output format

**Diagnosis** — voluntary vs. involuntary split, what the data suggests, what's still unknown

**Priority intervention** — which problem to fix first and why (highest-ROI action first)

**Intervention plan** — specific actions, sequenced, with ✅ KB citations for each

**SEA note** (if applicable) — wallet dunning structural difference and what it requires instead

**Metrics to track** — what to measure to know if the intervention is working, with the KB formula source

## Scope boundaries

This skill covers post-subscription revenue retention and recovery. If the conversation drifts:

- Checkout UX for new subscriptions → **Checkout Builder**
- Promotional discount campaigns → **Promo Planner**
- Price architecture → **Price Builder**
- Revenue model selection → **Model Picker**
