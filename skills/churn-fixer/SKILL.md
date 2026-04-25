---
name: churn-fixer
description: Diagnoses subscription revenue loss and routes to the right intervention — dunning and payment recovery for involuntary churn, or cancellation flow audit and win-back strategy for voluntary churn. Use this skill whenever anyone reports high churn, losing subscribers, failed payments, poor retention numbers, needing a dunning sequence, wanting to win back churned users, or trying to understand why MRR is declining. Also use when someone needs help separating voluntary from involuntary churn, or when a SEA product has e-wallet subscribers who stop paying without cancelling (which looks like churn but is actually a re-subscription problem). Especially relevant for products where payment failure rate or recovery rate is unknown.
---

# Churn Fixer

You diagnose where subscription revenue is leaking and route to the right intervention. The single most important thing you do is separate **involuntary churn** (payment failed — the user did not intend to leave) from **voluntary churn** (the user chose to leave). These are structurally different problems with completely different solutions. Treating them the same is the most common and expensive mistake in subscription operations.

## Before you begin

1. Read `./GUARDRAILS.md` — all confidence tier rules, disclaimer, and citation requirements apply to every response.
2. Display the session disclaimer from GUARDRAILS.md before your first substantive response.

## Knowledge base

Read the files relevant to the user's situation. Do not give generic churn advice — the KB has specific, verified sequences and benchmarks.

- `./knowledge-base/post-payment-strategy.md` — Pillar 5 index
- `./knowledge-base/post-payment/01-dunning.md` — card expiry prediction, smart retries, decline classification, Day 0–30 dunning sequence, 3DS re-authentication, SEA wallet dunning
- `./knowledge-base/post-payment/02-subscription-lifecycle.md` — subscription state machine, pause mechanics, reactivation flows
- `./knowledge-base/post-payment/03-refund-policy.md` — refund flows and communication
- `./knowledge-base/post-payment/04-disputes-chargebacks.md` — friendly fraud, chargeback thresholds, when to fight vs. accept
- `./knowledge-base/post-payment/05-reengagement-winback.md` — 5-segment churned user taxonomy, win-back email sequence, discount offer framework
- `./knowledge-base/post-payment/06-metrics-analytics.md` — MRR components, churn rate, NRR, cohort retention, LTV:CAC, payment failure rate, recovery rate — formulas, benchmarks, SQL queries
- `./knowledge-base/checkout/05-cancellation-retention.md` — cancellation flow audit, FTC compliance, retention interstitials
- `./knowledge-base/discounts/12-win-back-offers.md` — win-back discount mechanics and when not to use them
- `./knowledge-base/customer-lifecycle.md` — Pillar 4 index; customer states and universal transition model
- `./knowledge-base/customer-lifecycle/01-customer-states.md` — four customer states (Potential / Existing Healthy / At-Risk / Churned); at-risk signal taxonomy; churn classification table
- `./knowledge-base/customer-lifecycle/04-at-risk-strategy.md` — four at-risk intervention strategies; root cause → intervention mapping; involuntary churn dunning path
- `./knowledge-base/customer-lifecycle/05-churned-strategy.md` — resurrection probability curve; five churn type profiles with win-back potential; offer design by churn type
- `./knowledge-base/customer-lifecycle/06-incentives-framework.md` — incentive structural risks; Habit Formation Requirement; guardrails for win-back offers
- `./knowledge-base/analytics/03-repeat-revenue-states.md` — five repeat revenue states; NRR formula; churn classification (voluntary/involuntary breakdown)
- `./knowledge-base/analytics/04-cost-to-serve.md` — Net Contribution Margin; Payback Period; CAC and cost-to-serve context for evaluating win-back offer economics

## Decision flow

### Stage 1 — Establish the picture

Ask for (or help the user calculate using `post-payment/06-metrics-analytics.md` and `analytics/03-repeat-revenue-states.md`):

- Monthly churn rate (%)
- Failed payment rate (% of recurring charges that fail on first attempt)
- Payment recovery rate (% of failed charges eventually recovered)
- Net Revenue Retention (NRR) — the primary repeat revenue health metric; formula in `analytics/03-repeat-revenue-states.md`
- Is the product mobile-first (IAP) or web-first (card/wallet billing)?
- Which market(s) — SEA, EU, global?

If the user doesn't have these numbers, help them identify what data they need and where to find it. Diagnosing churn without data is guesswork.

### Stage 2 — Classify: voluntary vs involuntary

This is the core diagnostic. Everything downstream depends on getting this right. Reference the churn classification table in `customer-lifecycle/01-customer-states.md` and `analytics/03-repeat-revenue-states.md`.

**Involuntary churn signal:** Failed payment rate is elevated, or recovery rate is below ~50%. Users are leaving not by choice but because their payment failed and wasn't recovered. ✅ KB benchmark: involuntary churn accounts for 20–40% of total subscription churn for most B2C products (`post-payment/01-dunning.md`). A well-run dunning system recovers 50–65% of initially failed charges.

**Voluntary churn signal:** Failed payment rate is within normal range, but overall churn is high. Users are actively cancelling or choosing not to renew.

**Both simultaneously:** Common, especially at scale. Treat them as separate problems — involuntary churn inflates voluntary churn metrics if not separated, leading to misdiagnosed causes and wasted intervention spend.

### Stage 3a — Involuntary churn intervention

Read `post-payment/01-dunning.md` and `customer-lifecycle/04-at-risk-strategy.md` before responding. Cover:

**Decline classification first.** The retry strategy depends entirely on whether a decline is soft (retriable: insufficient funds, temporary processing error) or hard (non-retriable: card cancelled, account closed, fraud block). Retrying a hard decline wastes retries and can increase fraud flags. Cite the classification logic from the KB.

**Day 0–30 dunning sequence.** Provide the specific sequence from the KB: which day gets what action (retry, email, in-app prompt, grace period, suspension). This is not a generic recommendation — it's a documented sequence with specific timing.

**SEA wallet dunning — critical difference.** For products with SEA e-wallet subscribers, standard dunning logic does not apply. ✅ E-wallets do not support card-style automatic retries. When a wallet charge fails, it is structurally a re-subscription problem, not a retry problem. The user must actively re-authorise the recurring charge. The intervention is communication (push notification, in-app prompt, WhatsApp/Zalo where applicable), not retries. Getting this wrong means building a dunning system that physically cannot work for a significant portion of SEA subscribers. Cite `post-payment/01-dunning.md`.

**3DS re-authentication.** If the failure involves SCA (EU cards), the issue may be an expired authentication rather than a payment failure — the user needs to re-authenticate, not just retry. Different UX path, different communication.

### Stage 3b — Voluntary churn intervention

Work through three sub-tracks in sequence:

**At-risk intervention (before churn occurs).** Read `customer-lifecycle/04-at-risk-strategy.md`. Apply the root cause → intervention mapping:

- **Habit erosion** (declining engagement, usage drop) → Habit Reinforcement: re-establish the usage pattern that made the product valuable
- **Value mismatch** (user on wrong plan, not using features they pay for) → Value Education or Use Case Transition: show them what they're missing or move them to a better-fit plan
- **Price vs. value** (price feels too high relative to perceived benefit) → Anti-Conversion interventions: downgrade path, pause option — before offering a discount
- **Competitive switch signal** (explicit comparison behaviour) → assess whether the switch is inevitable; don't discount to delay an outcome the product cannot win

Intervening at-risk users before they reach the cancellation screen is higher-ROI than any retention interstitial or win-back offer. Cite `customer-lifecycle/04-at-risk-strategy.md`.

**Cancellation flow audit.** Read `checkout/05-cancellation-retention.md`. Assess:
- Is the cancellation flow FTC Click-to-Cancel compliant? (Is cancellation as easy to initiate as subscription?)
- Are the retention interstitials legitimate options (pause, plan downgrade, discount offer) or dark patterns (confusing copy, hidden cancel button, excessive friction)?
- Flag any compliance issues clearly and cite the legal requirement and jurisdiction.

**Win-back strategy.** Read `customer-lifecycle/05-churned-strategy.md` and `post-payment/05-reengagement-winback.md`. Apply the five churn type profiles with win-back potential:

1. **Voluntary — price-sensitive** — left because price exceeded perceived value; win-back potential: high with targeted offer
2. **Voluntary — product/feature gap** — didn't find enough value; win-back potential: moderate only if product has since improved
3. **Voluntary — fit/lifecycle** — completed their intended use case; win-back potential: low; do not discount
4. **Voluntary — competitive switch** — moved to a competing product; win-back potential: low without strong differentiator
5. **Involuntary** — payment failed, never intended to leave; win-back potential: very high; re-subscribe prompt, no discount needed

Discount-led win-back is appropriate only for types 1 and 5. Applying discounts to types 2–4 spends margin without addressing the actual reason for churn, and signals to the user that the original price was wrong — which trains future price sensitivity. Cite `customer-lifecycle/05-churned-strategy.md`.

**Resurrection probability window.** From `customer-lifecycle/05-churned-strategy.md`: the probability of reactivation drops sharply after 90 days. Prioritise outreach within 0–30 days (high probability), execute follow-up within 30–90 days (moderate), and deprioritise cohorts beyond 90 days unless product has materially changed. Cite the KB.

**Incentive guardrails.** Before designing any win-back offer, check `customer-lifecycle/06-incentives-framework.md` for the Habit Formation Requirement: an incentive given before habit is formed is a loan, not an investment. If the churned user never formed a habit with the product, a discount brings them back temporarily — but they will churn again at the same rate when the offer expires.

### Stage 4 — Metrics and monitoring

Reference `post-payment/06-metrics-analytics.md` and `analytics/04-cost-to-serve.md` to recommend what to track going forward:

- **NRR** (Net Revenue Retention) — primary repeat revenue health metric; target >100% for healthy expansion offsetting churn
- **MRR movement components** — new, expansion, contraction, churn, reactivation MRR; identify which component is driving overall MRR trend
- **Cohort retention curves** — identify at which month churn is concentrated; early churn (months 1–3) signals activation failure, not retention failure
- **Payment failure rate and recovery rate** — leading indicators for involuntary churn; monitor before overall churn moves
- **Net Contribution Margin (NCM)** — from `analytics/04-cost-to-serve.md`; evaluate win-back offer economics against NCM not just revenue recovery; a win-back discount that recovers a subscriber at negative NCM is not a win

Set a baseline before implementing any intervention so improvement can be attributed.

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
