# Seasonal Promotions

> Part of the Discount Mechanisms series. See [discount-mechanisms.md](../discount-mechanisms.md) for the full index.

---

## What It Is

Seasonal promotions are discounts or special offers tied to calendar events — holidays, cultural celebrations, industry cycles, or recurring cultural moments. Unlike flash sales (internally-triggered, campaign-calendar-driven), seasonal promotions are externally anchored: they coincide with moments when consumer spending intent is already elevated and discount expectations are culturally normalised.

The mechanism benefits from **ambient permission**: users expect deals around Black Friday, Tet, Ramadan Eid, Chinese New Year, or back-to-school season. This means the discount does not signal desperation or undermine brand pricing — it is a socially expected participation in a cultural moment. The psychological barrier to responding is lower because the decision frame ("should I upgrade?") is already open.

Seasonal promotions are also a coordination mechanism for the product team: they create predictable high-conversion windows that marketing, product, and engineering can plan around.

---

## Variants

### Global Calendar Promotions
Events with broad cross-market relevance:
- **Black Friday / Cyber Monday** — highest-volume discount event globally; B2C SaaS conversion spikes are consistently documented
- **New Year** — renewal and "fresh start" framing aligns well with annual plan conversions
- **Back-to-School** (August–September) — strong for productivity, learning, and creative tools targeting students or professionals

### Regional / Cultural Promotions
Events requiring market-specific execution:
- **Tet** (Vietnam) — late January/early February; high gifting and spending intent
- **Chinese New Year** — SEA-wide; relevant for Singapore, Malaysia, Indonesia Chinese diaspora
- **Ramadan / Eid Al-Fitr** — Indonesia, Malaysia; Eid especially drives consumer spending
- **Songkran** — Thailand; April; relevant for Thai market
- **Diwali** — India and Indian diaspora globally; October/November
- **Singles Day (11.11)** — originated in China; now significant across Southeast Asia via Shopee, Lazada

### Lifecycle-Based Seasonal Hooks
Not calendar-based but user-lifecycle-based:
- **Product birthday / anniversary** — "We're turning 3 — celebrate with us at 30% off"
- **User anniversary** — "You've been with us for 1 year — here's a loyalty offer"
- These are covered more fully in [Tenure Discounts](./08-tenure-discounts.md)

### New Year Annual Plan Push
A specific and highly effective sub-variant: a New Year campaign positioned around "commit to your goals" framing, offering a significant annual plan discount. Annual plan conversions benefit from the natural resolution-setting behaviour in January.

---

## Performance in B2C

Seasonal promotions are among the most reliable revenue levers in B2C because they leverage existing consumer spending intent rather than creating it from scratch.

**Black Friday benchmarks (B2C SaaS):**
- Typical revenue lift of 3–6x vs. average daily revenue during the promotional window
- Annual plan conversions see the most disproportionate lift — users treating annual billing as a "purchase" align naturally with Black Friday spend psychology
- Acquisition-focused campaigns (new users) often outperform upgrade campaigns in absolute numbers during Black Friday due to the large new-user intent volume

**New Year benchmarks:**
- Annual plan conversions show particularly strong performance due to goal-setting framing
- New user signups driven by productivity, health, and learning tool categories outperform during this period

**Regional performance (SEA):**
- Eid and Chinese New Year promotions in the respective markets show strong response in consumer-facing categories; however, the recurring billing constraint means conversion mechanisms need to be adapted (one-time annual payment rather than monthly subscription)
- 11.11 and 12.12 are the most commercially significant discount events in SEA for consumer products and show strong performance when positioned alongside platform campaigns (App Store featured placement, platform-wide promotions)

**Risk:**
The primary risk of seasonal promotions is **expectation normalisation**: if a product runs a Black Friday sale every year, users will defer conversion until Black Friday. This creates a discount dependency cycle. Mitigate by scoping promotions to new users or annual upgrades, excluding users who would have converted anyway (monthly → annual cohorts only).

**EU Omnibus Directive compliance:** Same requirement as flash sales — the reference (crossed-out) price must be the lowest price in the 30 days before the promotion. Plan reference price management well in advance of seasonal events.

---

## Best For

- Products with a large dormant paid-intent user base (signed up, engaged, but not yet converted)
- Annual plan upgrade campaigns for existing monthly subscribers
- Markets with strong cultural discount events that align to the product's target demographic
- Products targeting students, young professionals, or consumers where back-to-school and New Year framing is relevant
- Teams with sufficient planning capacity — seasonal promotions require 4–6 weeks of preparation for effective execution

**Not ideal for:**
- Premium-positioned products where discount participation conflicts with brand positioning
- Products without an established user base to run campaigns against
- Teams without capacity to manage the campaign communication, compliance, and support volume

---

## Revenue Model Fit

| Revenue Model | Fit | Notes |
|---|---|---|
| [Freemium](../models/01-freemium.md) | High | Seasonal promotions targeting the free tier for paid conversion are the dominant application. Black Friday and New Year work particularly well against a large free user base. |
| [Free Trial (Traditional)](../models/02-free-trial.md) | Medium | Seasonal promotions on extended trial length or reduced first-month post-trial pricing can work. Trial entry promotions ("Start a free trial + first month 50% off") are effective. |
| [Reverse Trial](../models/03-reverse-trial.md) | Medium | A seasonal promotion timed to launch a new reverse trial cohort can amplify entry volume. Post-reverse-trial paid conversion during a seasonal window is a strong combo. |
| [Flat-Rate Subscription](../models/04-flat-rate-subscription.md) | High | Simple model benefits from seasonal price discounts on subscription. Annual prepay + seasonal framing is the most effective combination. |
| [Tiered Subscription](../models/05-tiered-subscription.md) | High | Tier upgrade promotions (Starter → Pro, or monthly → annual) during seasonal windows are the highest-ROI application. |
| [One-Time Purchase](../models/06-one-time-purchase.md) | High | Native fit — seasonal promotions originated in one-time purchase (retail) contexts. Very effective for B2C apps with one-time purchase models. |
| [Usage-Based](../models/07-usage-based.md) | Medium | Bonus credits during seasonal events ("Buy 5,000 credits, get 2,500 free — Eid special") are a clean fit. Monthly subscription discounts are less applicable. |
| [Hybrid Models](../models/08-hybrid.md) | High | Multi-component promotions (subscription + credit bonus + feature unlock) during seasonal events can create compelling offers across the hybrid model's components. |

---

## UX Flow

### Phase 1 — Pre-Campaign Awareness

**Goal:** Build anticipation and capture intent before the promotional window opens. "Early access" mechanics increase day-1 conversion speed.

```
2–4 weeks before promotion:
   → Teaser email to non-paying users: "Something's coming for [Black Friday / Eid / New Year]"
   → In-product banner (optional): "Be first to know — [Early Access] sign-up"
        ↓
1 week before promotion:
   → "Unlock early access" email: users who click receive access 24 hrs before public launch
   → Builds urgency by creating an "insider" cohort
```

---

### Phase 2 — Promotion Launch

**Goal:** High-visibility, channel-coordinated launch that surfaces the offer at every relevant touchpoint.

```
Promotion goes live
        ↓
Simultaneous entry points:
   → Email broadcast to all eligible users (non-paying / monthly → annual upgrade)
   → In-product hero banner (highest-visibility placement, cannot be dismissed without seeing it)
   → Push notification (mobile)
   → Pricing page seasonal state (seasonal offer replaces standard pricing display)
   → App Store featured placement (if applicable — coordinate with editorial submission)
        ↓
Each entry point shows:
   → Seasonal framing ("Black Friday Deal" / "Eid Mubarak — Special Offer")
   → Discount prominently stated
   → Window duration ("Until [date]" or "48 hours remaining")
   → CTA: "Claim your offer"
```

---

### Phase 3 — Checkout (Seasonal State)

**Goal:** Capture conversion in as few steps as possible. Seasonal periods have elevated abandonment from competing promotions — don't lose users to checkout friction.

```
User clicks CTA
        ↓
Seasonal pricing page
   → Clean seasonal design (not overdone — avoid design debt from seasonal skins)
   → Offer terms clearly visible
   → Compliance display (reference price, renewal terms) per market
        ↓
Plan selection (simplified — emphasise the promoted plan)
        ↓
Payment screen
   → Summary: seasonal price + renewal amount + renewal date
   → Localised payment methods
   → "Confirm — Pay [amount]"
        ↓
Confirmation
   → Seasonal messaging: "Welcome to Pro — Happy [Eid / New Year]"
   → Confirm renewal amount and date
   → CTA into product
```

---

### Phase 4 — During & Post-Promotion

**Goal:** Communicate close of window to drive final conversions; manage the post-promotion return to standard pricing cleanly.

```
[Final 24 hours of promotion]
   → Final reminder email to users who opened but did not convert
   → In-product "last chance" banner update
        ↓
[Promotion closes]
   → Pricing page returns to standard state immediately
   → No "Sorry you missed it" dark patterns — just standard pricing
   → Optional: waitlist for next promotion (captures intent for future campaigns)
        ↓
[Pre-renewal communication for seasonal conversions]
   → 7 days before renewal at standard rate: email reminder
   → In-app notification
```

---

### Regional Localisation Notes

```
SEA Markets:
   → Localise copy and visuals to regional holiday (Tet, Eid, CNY)
   → Use local currency pricing prominently
   → Ensure payment method selection reflects local methods (e-wallet, QR)
   → For ID, PH, VN, TH: prefer annual billing (single payment) over monthly
        ↓
Europe:
   → Ensure reference price compliance (EU Omnibus Directive)
   → Use SEPA-friendly payment flow for EU recurring
   → GDPR-compliant promotional email (consent-based list only)
        ↓
Global:
   → Default to card + PayPal
   → Localise currency but keep copy in English unless market-specific version exists
```

---

*Last updated: April 2026*
