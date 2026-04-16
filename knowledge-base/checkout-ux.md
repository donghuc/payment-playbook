# Checkout UX & End-to-End Flows — Reference Index

> Context: B2C SaaS/App targeting Southeast Asia, Europe, and Global markets.
> This document is a living index. Each flow links to its own deep-dive file.

---

## Why Checkout UX Is a Revenue Decision

Checkout is not a back-end concern. It is the final conversion surface — every point of friction between "I want this" and "I paid for this" directly reduces revenue. A product with strong acquisition and strong product-market fit but poor checkout UX will underperform its potential consistently.

Conversion benchmarks for digital subscription checkout:
- Well-optimised web checkout: 60–80% completion rate from pricing page click
- Poorly designed checkout: 30–45% completion rate
- Mobile checkout without wallet support (Apple Pay/Google Pay): ~15% lower conversion than desktop
- Checkout requiring card entry on mobile without autofill: significant additional drop-off

The difference between the top and bottom of that range is not product quality — it is checkout design.

---

## Core UX Principles for Payment Checkout

### 1. Fewest possible steps
Every screen between "click CTA" and "payment confirmed" is friction. The goal is the minimum viable number of steps that collect necessary information and create necessary trust. Every optional field, confirmation screen, or intermediate redirect has a measurable conversion cost.

### 2. Progressive disclosure
Show users only what they need at each step. Do not front-load billing terms, renewal dates, and cancellation policy on the first screen. Surface them at the right moment — billing disclosure at payment, cancellation info in confirmation or settings.

### 3. Radical transparency on costs
Show the exact amount, billing cycle, and next charge date before the user confirms. No surprises. Users who feel informed at checkout are less likely to churn, less likely to dispute charges, and more likely to trust the product with future renewals.

### 4. Local payment methods by default
Surface the most relevant payment methods first based on the user's detected geography. A Dutch user should see iDEAL at the top. An Indonesian user should see GoPay and QRIS. A UK user should see card and PayPal. Generic "card first everywhere" checkout underperforms locally-tuned checkout in every market.

### 5. Mobile-first
The majority of B2C SaaS users in SEA access products on mobile. Checkout must be designed for thumb interaction first — large tap targets, minimal text input, native keyboard types (numeric for card fields), and wallet payment (Apple Pay / Google Pay) as a prominent option.

### 6. Trust signals at the right moments
SSL indicator, payment method logos, security copy ("Your payment is encrypted"), and social proof (star rating, user count) should be present — but not overwhelming. A checkout page that looks like a security warning is itself a trust signal problem.

### 7. Actionable error messages
Payment errors should tell the user what happened and what to do next. "Payment failed" is not an error message. "Your card was declined — please try a different card or contact your bank" is an error message.

### 8. No dark patterns
Pre-ticked upsell boxes, hidden fees revealed at the last step, obscured cancellation paths, and misleading CTA copy are dark patterns. Beyond being ethically wrong, they generate chargebacks, support tickets, negative reviews, and in Europe, regulatory exposure.

### 9. Graceful loading states
Payment processing takes 1–5 seconds. Users who don't see feedback during this window will click again (double charges), navigate away (lost conversion), or assume failure. Show a clear processing state immediately on payment submission.

### 10. Confirmation is a product moment
The post-payment confirmation screen is the emotional peak of the purchase journey. It should be celebratory (proportionately), clearly confirm what was purchased, and give the user an immediate, obvious path into the product. A generic "thank you for your order" confirmation is a missed onboarding opportunity.

---

## Flow Index

### [01 — Web Subscription Checkout Flow](./checkout/01-web-subscription-flow.md)
Complete end-to-end: pricing page → plan selection → signup/login → payment → confirmation → onboarding entry. Covers freemium entry, reverse trial, and direct paid signup variants.

### [02 — Mobile IAP Flow](./checkout/02-mobile-iap-flow.md)
iOS App Store and Google Play In-App Purchase flows. Platform-managed checkout, subscription management, and the "web checkout loophole" considerations.

### [03 — Upgrade & Downgrade Flows](./checkout/03-upgrade-downgrade.md)
Tier change flows: upgrade (Starter → Pro, monthly → annual), downgrade (Pro → Starter), and the UX of proration disclosure and confirmation.

### [04 — Payment Failure & Recovery Flows](./checkout/04-payment-failure-recovery.md)
Failed checkout, failed renewal (dunning), grace period management, and payment method update flows.

### [05 — Cancellation & Retention Flows](./checkout/05-cancellation-retention.md)
Cancellation initiation, retention interstitials (pause, discount, downgrade offer), confirmed cancellation, and post-cancellation offboarding.

### [06 — SEA-Specific Flows](./checkout/06-sea-flows.md)
E-wallet redirect flows (GoPay, GCash, Momo), Virtual Account payment flows, QR payment flows, and handling network interruptions in SEA mobile environments.

---

## Anti-Patterns Reference

Common checkout UX mistakes documented across B2C SaaS:

| Anti-Pattern | Problem | Better Approach |
|---|---|---|
| Requiring account creation before payment | Adds a step before value is captured | Create account from payment email post-checkout |
| Showing all payment methods equally | Buries locally relevant methods | Surface top 2–3 methods for user's geo by default |
| "Your card was declined" with no next step | Unhelpful; user doesn't know what to do | Suggest specific recovery action (different card, contact bank) |
| Auto-renewal buried in fine print | Dark pattern; leads to chargebacks | Show renewal date and amount explicitly before confirmation |
| Redirect chains (3+ redirects) | High drop-off in SEA mobile environments | Minimise redirects; use deep links and callbacks |
| Processing spinner with no timeout | User abandons assuming failure | Set a timeout state with "still processing" message |
| Post-payment confirmation without CTA | Missed onboarding opportunity | Confirmation screen → direct path into product |
| Generic error messages | Users can't act on them | Error-specific copy with actionable next step |
| Pre-ticked annual billing without disclosure | Dark pattern | Always make billing cycle selection explicit |
| Cancellation requiring phone call | Hostile retention tactic; illegal in some EU jurisdictions | Always provide self-serve cancellation path |

---

*Last updated: April 2026*
