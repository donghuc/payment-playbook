# First-Purchase Discount

> Part of the Discount Mechanisms series. See [discount-mechanisms.md](../discount-mechanisms.md) for the full index.

---

## What It Is

A first-purchase discount is a one-time price reduction applied exclusively to a new user's first transaction — their first subscription payment, their first credit pack purchase, or their first one-time purchase. After this single discounted transaction, standard pricing applies for all subsequent payments.

The mechanism targets the most psychologically significant barrier in the purchase journey: the **first payment decision**. The first time a user parts with money for a digital product is the highest-friction moment in the acquisition funnel. Users are simultaneously evaluating unfamiliar perceived value, making a trust judgement about the company, and committing to a recurring cost (if subscription-based). A first-purchase discount reduces the financial risk of that initial commitment — if the product disappoints, the cost of learning that was lower.

Unlike introductory pricing (which can apply for multiple months), a first-purchase discount is explicitly one-time. This distinction is important: the user is not being sold a lower ongoing rate — they are receiving a one-time welcome offer, which feels qualitatively different and sets a more honest expectation about the product's value.

---

## Variants

### First Month Discount (Subscription)
The first billing period of a subscription is discounted. The most common form: "Your first month is $1 / $4.99 / 50% off — then $9.99/mo."

### First Payment Discount + Upsell to Annual
The first month is discounted, but the user is simultaneously presented with an annual plan offer: "First month 50% off — or commit to annual and save 25% all year." Creates a choice that anchors the annual plan as the higher-value option.

### First Credit Pack Discount (Usage-Based)
The initial credit purchase is offered at a discounted rate — often at cost or near cost — to lower the barrier to first top-up and get the user into the credit spending habit.

*Example: "Get your first 1,000 credits for $1 — starter pack only available once."*

### First Purchase Discount for One-Time Products
A reduction on the first app purchase, course, or digital product buy. Particularly common in App Stores where search-driven discovery and price sensitivity interact — a discounted introductory price can drive chart rankings that bring organic discovery.

### Welcome Discount (Email Capture)
The user provides their email address (sign-up intent) and receives a first-purchase discount code by email. Serves dual purpose: captures the email for future marketing and converts first-time visitors. Common in e-commerce; growing in SaaS.

---

## Performance in B2C

First-purchase discounts consistently improve conversion rates from pricing page to payment, but the long-term value depends on product quality, activation, and the renewal rate at full price.

**Documented conversion effects:**
- First-month discounts in the range of $1 for first month (vs. $10+/mo standard) have been used by major B2C SaaS companies (including Dollar Shave Club, Headspace, and multiple streaming services) specifically because they reduce the cognitive cost of the initial payment to near-zero.
- Welcome discount codes (captured via email) typically show 15–30% conversion rate on the email sent within 24 hours of signup — this cohort is pre-qualified and already interested.
- App Store discounted launch pricing has documented correlation with chart rankings, which compounds organic discovery.

**The renewal challenge:**
First-purchase discounts optimise for conversion. But a cohort that converted at $1/mo and renews at $9.99/mo is experiencing a 10x price increase. Retention after the first renewal is the critical metric — and it is directly tied to how well the product activated the user during the discounted first period.

**SEA context:** First-purchase discounts are extremely effective in SEA markets due to the combination of high price sensitivity and significant first-payment psychological friction. However, they work best when the discounted price is in a locally-recognisable "accessible" range — absolute price sensitivity matters as much as percentage discount.

**Risks:**
- **Low-quality cohort:** Users who convert primarily because of a $1 first month and not because of product value will have very high churn at renewal. The activation and engagement quality during the discounted period must be strong.
- **Perpetual offer seekers:** Some users create new accounts repeatedly to claim first-purchase discounts. Require verified payment method and/or phone number to limit this.
- **Expectation mismatch at renewal:** Users who don't recall committing to a higher renewal price will dispute charges. Pre-renewal communication is essential.

---

## Best For

- Products with a high-friction first-payment barrier (SaaS in price-sensitive markets, first-time digital product buyers)
- Products with strong activation mechanics that can convert a discount-motivated initial conversion into a habit within the first billing period
- App Store launches where discounted pricing drives chart performance and organic discovery
- Products where the delta between discounted first month and standard renewal is not extreme (2x is manageable; 10x is risky)

**Not ideal for:**
- Premium-positioned products where a $1 first month undermines perceived quality
- Products with weak activation flows where the discounted first period won't produce engaged subscribers
- Very high-volume products where the per-unit cost of discounted acquisitions is material

---

## Revenue Model Fit

| Revenue Model | Fit | Notes |
|---|---|---|
| [Freemium](../models/01-freemium.md) | Medium | Freemium already addresses the first-payment barrier with a free tier. A first-payment discount on the first month of the paid tier can accelerate conversion from free to paid. |
| [Free Trial (Traditional)](../models/02-free-trial.md) | Medium | A first-month discount post-trial ("Trial ended — stay for $X your first month") is a softer step-down than going directly to full price. Effective for trial-to-paid rescue. |
| [Reverse Trial](../models/03-reverse-trial.md) | High | A first-payment discount at the reverse trial conversion moment (just downgraded to free) is a high-leverage rescue mechanic. "Upgrade to paid today — first month $X." |
| [Flat-Rate Subscription](../models/04-flat-rate-subscription.md) | Very High | Simplest and cleanest application — one price, clearly discounted for one period. No tier complexity. |
| [Tiered Subscription](../models/05-tiered-subscription.md) | High | First-month discount on the anchor tier (Pro/Plus) is the primary use case. Drives initial paid cohort onto the right tier. |
| [One-Time Purchase](../models/06-one-time-purchase.md) | Very High | The first-purchase discount is its most natural home — a one-time buy discounted for first-timers, with full price on subsequent purchases. |
| [Usage-Based](../models/07-usage-based.md) | High | Discounted first credit pack to get users into the spending habit — a minimal cost-of-entry to start the usage cycle. |
| [Hybrid Models](../models/08-hybrid.md) | High | Discount on the subscription component's first billing period; standard credit pricing from day one. |

---

## UX Flow

### Phase 1 — First-Purchase Discount Discovery

**Goal:** Surface the discount at the right moment — when the user has already experienced value and is close to a purchase decision, not at the moment of first arrival.

```
Trigger conditions (choose one based on product):
   → After user completes onboarding / first session (earned-discount framing)
   → On first visit to pricing page (welcome framing)
   → Email to signed-up but not paid users (re-engagement framing)
   → Post-reverse-trial downgrade (rescue framing)
        ↓
Discount presentation:
   → "Welcome offer: your first month for $X" (positive framing — not "DISCOUNT!")
   → Standard price shown: "Then $9.99/mo — cancel anytime"
   → Time-limited visibility (show for 24–72 hrs after trigger, not permanently)
   → CTA: "Start for $X"
```

---

### Phase 2 — Checkout

**Goal:** Confirm the discount clearly before payment and set honest renewal expectations.

```
Payment screen
   → First-period pricing: "First month: $X"
   → Renewal pricing: "From [specific date]: $9.99/mo"
   → Payment method (localised)
   → Auto-renewal disclosure with specific amount and date
   → CTA: "Confirm — Pay $X today"
        ↓
Payment processing
        ↓
Confirmation
   → "Welcome! You're now on [Product] Pro — first month for $X"
   → Show renewal date and amount (transparent)
   → CTA into product
```

---

### Phase 3 — Activation Window (Discounted Period)

**Goal:** Use the discounted period to maximise activation. Every feature engagement during this window is an investment in renewal probability.

```
User enters product post-payment
        ↓
Personalised onboarding (not generic — tailored to signup context or use case)
   → Goal: reach aha moment in session 1
        ↓
Engagement prompts during discounted period
   → Feature discovery nudges (not upsells — product value demonstrations)
   → Usage milestones celebrated: "You've done X — look what else you can do"
        ↓
Pre-renewal reminder (7 days before standard billing begins)
   → Email: "Your intro rate ends on [date] — your next charge will be $9.99/mo"
   → In-product notification
   → No aggressive retention CTA — clean, informative
```

---

### Edge Case — User Attempts to Claim Again

```
Returning user or multi-account attempt detected
        ↓
System suppresses first-purchase offer
   → Standard pricing shown without offer
   → No error or accusation — just standard pricing
        ↓
[If user reaches out: "Why don't I see the offer?"]
   → Honest response: "This offer is available for new subscribers only — we'd love to have you back at our standard pricing"
   → Optionally: offer a win-back discount via support (see Win-Back Offers)
```

---

*Last updated: April 2026*
