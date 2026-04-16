# Win-Back Offers

> Part of the Discount Mechanisms series. See [discount-mechanisms.md](../discount-mechanisms.md) for the full index.

---

## What It Is

A win-back offer is a targeted discount or incentive sent to a user who has already cancelled their subscription or has been dormant (not active, not paying) for a defined period, with the goal of re-acquiring them as a paying customer. Unlike all other discount mechanisms in this index — which are preventive (act before the user leaves) — win-back offers are remedial: the user has already left, and the offer is an attempt to bring them back.

The mechanism works on the **sunk cost of prior familiarity**: a churned user already knows the product, has been onboarded, may have historical data inside it, and has a formed (if faded) relationship with its value. Re-acquiring a churned user is materially cheaper than acquiring a brand-new user — there is no onboarding friction, no trust-building to do, and the conversion path is much shorter because the user knows exactly what they're returning to.

Win-back offers are most effective for users who churned for **price or circumstance reasons** (too expensive, temporary budget pressure, seasonal disengagement) and least effective for users who churned for **value or fit reasons** (product didn't solve their problem, used it once and didn't see ROI, or left for a competitor with better features). The offer should not be sent uniformly to all churned users — segmentation by churn reason dramatically improves win-back ROI.

---

## Variants

### Time-Sequenced Win-Back Emails
A structured email sequence after cancellation, offering progressively deeper discounts over time. The first email is sent shortly after cancellation; subsequent emails are triggered at 30, 60, and 90 days if the user has not returned. Each offer may be slightly more generous than the previous.

*Structure:*
- Day 7 post-cancellation: "We miss you — come back and see what's new"
- Day 30: "We'll give you a month free to try again"
- Day 60: "Your best offer — 3 months at 50% off, this week only"

### Milestone / Feature Update Win-Back
Triggered by a significant product release or milestone. Users who churned before a key feature existed are contacted when that feature launches: "You asked for [X] — we built it. Come back and try it free for a month."

### Personalised Re-Engagement
Win-back offer customised to the user's historical usage patterns. If a churned user was a heavy user of Feature A, the win-back message leads with Feature A's improvements. Requires user-level behavioural data and basic personalisation infrastructure.

### Dormant User Win-Back (Freemium)
For freemium products, users who signed up but never converted and have been inactive for a defined period (30, 60, 90 days) are targeted with an activation offer: "You have an account — try Pro free for 30 days, no card required." Technically not "churned" — they never paid — but the mechanics are similar.

### Reactivation Through New Context
Win-back framed around a new reason to return: a new product collaboration, a limited-time event, or a seasonal hook. "New Year, new workflow — come back to [Product] with 2 months free." The context provides permission to re-engage.

---

## Performance in B2C

Win-back campaigns are among the most cost-efficient acquisition levers available because the audience is pre-qualified, familiar with the product, and requires no onboarding investment.

**Documented performance:**
- Win-back email open rates are consistently 2–3x higher than acquisition email open rates — churned users recognise the brand and feel a degree of personal relevance.
- Win-back offer conversion rates vary significantly by churn reason: users who indicated "too expensive" at cancellation convert at 20–40% on a win-back discount offer. Users who provided no cancellation reason or indicated "not using it" convert at 5–10%. Users who cited competitor switch or product dissatisfaction convert at 2–5%.
- Users who return via win-back offers show modestly lower LTV than users who were never churned, but significantly higher LTV than new cold acquisitions due to the absence of onboarding friction costs.

**Timing matters:**
The 30–90 day window after cancellation is the highest-conversion win-back window. After 6 months, conversion drops sharply as users have either found an alternative, forgotten the product, or the dormancy gap is too wide to feel relevant. After 12 months, a win-back email may generate more unsubscribes than returns.

**SEA context:** Win-back via messaging app (WhatsApp, LINE, Zalo) where the product has an in-app component or existing notification permissions can outperform email in SEA markets — messaging app open rates are dramatically higher than email in the region.

**Risks:**
- **Devaluation signal:** Win-back discounts communicated too broadly can signal to users who never churned that they are paying more than necessary. Keep win-back offers exclusive to the churned cohort and ensure they are not publicly discoverable.
- **Training churn behaviour:** If users learn that cancelling their subscription is rewarded with a better offer, some percentage will cancel strategically to access the win-back price. This is the "churning for discounts" problem. Mitigate by limiting win-back offers to first re-acquisition only.
- **Offer depth mismatch:** A win-back offer that's too modest ("10% off") for a user who churned due to price will be ignored. An offer that's too deep ("6 months free") for a user who would have returned for much less destroys margin unnecessarily. Segment and test offer depth against churn reason.

---

## Best For

- Subscription products with a churned user base (any time a subscriber has actively cancelled)
- Products that have launched significant new features since users churned — feature-led win-backs have strong emotional relevance
- Products where the churn reason data is available and segmentation is feasible
- Products with users who have historical data, work product, or connections inside the product that they would value returning to
- Seasonal campaigns where a re-engagement angle is naturally available

**Not ideal for:**
- Products with no churn reason data — untargeted win-backs have poor ROI and risk devaluation
- Products that churned users because of fundamental fit or quality issues that haven't been addressed — the win-back will fail and burn the communication channel
- Very early-stage products with minimal churn history

---

## Revenue Model Fit

| Revenue Model | Fit | Notes |
|---|---|---|
| [Freemium](../models/01-freemium.md) | Medium | Freemium churned users typically downgraded to free rather than fully cancelling. Win-backs target the subset who deleted accounts or became fully dormant. |
| [Free Trial (Traditional)](../models/02-free-trial.md) | Medium | Users who completed a trial and did not convert are a win-back audience — "trial didn't convince you? Here's an extended second chance." |
| [Reverse Trial](../models/03-reverse-trial.md) | Medium | Users who downgraded from reverse trial and never converted can be re-targeted with a second premium access window or a first-payment discount. |
| [Flat-Rate Subscription](../models/04-flat-rate-subscription.md) | Very High | Win-back discount is simple to apply and communicate — "Come back at $X for your first 3 months." No tier complexity. |
| [Tiered Subscription](../models/05-tiered-subscription.md) | Very High | Win-backs can target users at the tier they were on (Pro win-back at a discount) or offer a tier upgrade to re-engage: "Come back to Starter free for 2 months, or go straight to Pro at 50% off." |
| [One-Time Purchase](../models/06-one-time-purchase.md) | Medium | Win-back applies to users who bought once and didn't return. A discount on a second purchase or on a subscription upgrade can re-engage them. |
| [Usage-Based](../models/07-usage-based.md) | High | Win-back credit bonus: "Come back — your account has been topped up with 1,000 free credits to get started again." Zero upfront cost; payment only when credits are consumed or renewed. |
| [Hybrid Models](../models/08-hybrid.md) | Very High | Flexible win-back offers: subscription discount, bonus credits, or feature unlock. The hybrid model's multiple value dimensions allow for highly personalised win-back offers. |

---

## UX Flow

### Phase 1 — Churn Moment (Cancellation Capture)

**Goal:** Capture the churn reason at the moment of cancellation. This data determines win-back segmentation and offer design.

```
User completes cancellation
        ↓
Post-cancellation screen (not a retention interstitial — they've already decided):
   → Acknowledge cancellation clearly and immediately
   → "Your subscription has been cancelled. Access continues until [end of paid period]."
        ↓
Optional exit survey (1 question, voluntary):
   → "Before you go — can you tell us why you cancelled? (Helps us improve)"
   → Options: "Too expensive" / "Not using it enough" / "Missing a feature" / "Switching to another product" / "Other"
   → No penalty for skipping
        ↓
Thank-you and clean offboarding:
   → "Thanks for being a subscriber. Your data is preserved — you can return anytime."
   → No guilt-tripping; no "are you sure you want to leave?" at this stage
```

---

### Phase 2 — Win-Back Email Sequence

**Goal:** Re-engage at the right moment with a relevant, personalised offer. The first email is relational; subsequent emails are increasingly offer-driven.

```
Day 7 post-cancellation (Email 1 — low pressure):
   → Subject: "You're always welcome back, [Name]"
   → Tone: warm, not desperate
   → Content: "Here's what's been happening in [Product] since you left"
   → CTA: "See what's new" (no discount yet — test willingness to re-engage)
        ↓
Day 30 (Email 2 — soft offer):
   → [If Email 1 opened/clicked] → personalised based on which features they used
   → [If Email 1 not opened] → generic win-back
   → Offer: "Come back — your first month back is on us"
   → CTA: "Reactivate my account — first month free"
        ↓
Day 60 (Email 3 — stronger offer, if still not returned):
   → "This is the best offer we'll send: 3 months at 50% off"
   → Urgency: "Offer valid for 7 days"
   → CTA: "Claim offer"
        ↓
Day 90 (Email 4 — final):
   → Feature-led: "Since you left, we've launched [significant feature]"
   → Soft offer or free access to try the new feature
   → "After this, we'll stop reaching out — but your account is always here"
```

---

### Phase 3 — Win-Back Redemption

**Goal:** Remove all friction from the return path. A churned user returning should feel welcomed, not made to re-onboard.

```
User clicks win-back CTA
        ↓
Landing page (personalised where possible):
   → "Welcome back, [Name]"
   → Offer confirmed: "Your win-back offer: [X]"
   → Account status: "Your [data / projects / history] are right where you left them"
   → CTA: "Reactivate — pay [discounted amount]"
        ↓
Payment screen
   → Pre-filled from previous payment method (if stored and not expired)
   → OR: payment method re-entry (minimal friction — saved card check first)
   → Offer terms: discounted period + standard renewal
   → CTA: "Confirm and reactivate"
        ↓
Confirmation
   → "You're back — welcome!"
   → NOT a full onboarding flow — the user knows the product
   → CTA: "Pick up where you left off" → direct to their last active context (project, dashboard, etc.)
```

---

### Phase 4 — Post-Return Retention

**Goal:** Ensure the win-back conversion becomes a durable return, not a second churn.

```
Post-reactivation:
   → No immediate upsell — let the user re-engage
   → In-product: "You've been away — here's what's new since you left" (feature digest)
        ↓
Day 7 post-return:
   → Check-in email: "How's it going? [quick survey or usage prompt]"
        ↓
Pre-renewal reminder (standard renewal communication)
   → Before the win-back discount expires: "Your win-back rate ends on [date] — renewal at $X"
   → Honest disclosure; no surprises
        ↓
[If user cancels again post-win-back]
   → No further win-back offers (third attempt at this discount level)
   → Document second-churn in CRM for future product-improvement signal
```

---

*Last updated: April 2026*
