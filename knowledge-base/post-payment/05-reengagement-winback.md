# Re-engagement & Win-back Strategy

> Part of the Post-Payment Strategy series. See [post-payment-strategy.md](../post-payment-strategy.md) for the full index.

---

## Overview

Win-back is the practice of re-acquiring users who have already churned. It is structurally different from new user acquisition: win-back targets people who have already demonstrated willingness to pay, have product familiarity, and (often) existing data inside the product. These are your highest-probability conversion targets.

**Win-back vs. re-engagement — the distinction:**
- **Re-engagement:** Users still on your free tier (never paid, or downgraded from paid). Still in your funnel. Goal: upgrade.
- **Win-back:** Users who were paying subscribers and fully churned. Left the funnel. Goal: resubscribe.

Both are valuable. Win-back has the higher conversion ceiling (prior paying intent) but requires a longer time horizon.

---

## Segmenting Your Churned Users

Not all churned users are equal. Targeting the right segment with the right message is more important than message volume.

### Segmentation Framework

```
Segment 1 — Involuntary churn (payment failure)
  Characteristics:
    - Did not intend to leave
    - May not know they churned
    - High product engagement before churn
  
  Win-back approach:
    Immediate, direct: "Your subscription lapsed — here's how to get back"
    No discount needed (they intended to pay; friction removed is the win)
    Priority: HIGH

Segment 2 — Voluntary churn, price-sensitive
  Characteristics:
    - Cancelled citing "too expensive" / selected "price" in exit survey
    - May have been a light user
  
  Win-back approach:
    Price-led offer: "Come back at a reduced rate"
    Timing: 30–60 days after cancellation (after financial pressure may have eased)
    Priority: MEDIUM

Segment 3 — Voluntary churn, low engagement
  Characteristics:
    - Cancelled due to low usage
    - Had not been logging in regularly before cancellation
  
  Win-back approach:
    Product-led: "Here's what's new / what you were missing"
    Trigger: New feature release relevant to their use case
    Discount: Lower priority — if they didn't use it at full price, discount may not change behaviour
    Priority: MEDIUM-LOW

Segment 4 — Voluntary churn, feature gap
  Characteristics:
    - Cited "missing a feature" in exit survey
    - Switched to a competitor
  
  Win-back approach:
    Feature announcement: "We built the thing you wanted"
    Only send when the specific gap is actually addressed
    Priority: LOW until the gap is closed; HIGH at the moment it is

Segment 5 — Voluntary churn, use case no longer applies
  Characteristics:
    - Was a student, completed their project, seasonal user, etc.
  
  Win-back approach:
    Long-term nurture only; context-triggered re-engagement
    Do not aggressively target — the use case may return naturally
    Priority: LOW
```

---

## Win-back Email Sequence

### Sequence for Voluntary Churn (Standard)

The guiding principle: fewer, better emails. Over-sending to churned users damages your sender reputation and creates a negative final association with your brand.

```
Day 0 (cancellation confirmed):
  Transactional email:
    "Your subscription has been cancelled."
    Access end date, data preservation, resubscribe link.
    (Not a marketing email — informational.)

Week 2 (Day 14):
  Product update email:
    Subject: "What's new in [Product] — [month]"
    Content: Genuine product updates since their cancellation.
    Tone: Newsletter, not sales.
    CTA: One resubscribe link at the bottom — low prominence.
    
    Rule: Only send if there is actually something worth sharing.
    Don't manufacture product updates to justify an email.

Month 1 (Day 30):
  "We miss you" email (use sparingly — once only):
    Subject: "It's been a month — [specific thing they created/did]
              is still here"
    
    Personalise with something real from their account if possible:
      "Your [Project Name] is waiting for you."
      "You completed [X tasks] with [Product]. Still here when you're ready."
    
    Body:
      "Here's what you're missing:" [2–3 specific updates]
      Optional: "Come back — first month at $5" (price-sensitive segment only)
    
    CTA: [Resubscribe →]
    
    If no engagement: stop here. Do not continue sending win-back emails.
    Move to long-term nurture (product announcements only, no sales pressure).

Month 3 (Day 90) — Feature gap segment ONLY:
  Send ONLY if a feature they cited as missing has been shipped:
    Subject: "We built the thing you asked for"
    
    Body:
      "When you cancelled, you mentioned [feature request]."
      "We shipped it. Here's how it works." [Brief demo / screenshot]
    
    CTA: [Try it free for 7 days →] → reverse trial or direct resubscribe
```

**Email frequency rule:** Maximum 3 win-back emails in 90 days, for most churned users. Price-sensitive and feature-gap segments can receive one more (the targeted offer / feature announcement). No exceptions for users who have explicitly unsubscribed from marketing.

### Subject Line Principles

Win-back subject lines that work best for B2C subscription:
- Specific and personal over generic ("Your [project name] is waiting" vs. "Come back to Pro")
- Curiosity-driven product updates ("We shipped something you asked for")
- Honest and direct ("It's been 30 days — here's what changed")

Subject lines that perform poorly:
- "We miss you!!!" (hollow, generic)
- "SPECIAL OFFER — 50% off for 24 hours only" (creates distrust; cheap-feels the product)
- "Your account will be deleted soon" (dark pattern; often factually false; damages brand)

---

## Win-back Offers

### When to Offer a Discount

Not every win-back requires a discount. Over-discounting trained users to wait for a deal before resubscribing, which compresses the subscription cycle and devalues the product.

**Offer a discount when:**
- User churned citing price as primary reason
- User was a long-term subscriber (>6 months) before churning
- User is on the 30-day or later win-back touchpoint (not the immediate cancellation email)
- You have not already offered a retention discount before they cancelled

**Do not offer a discount when:**
- User churned citing "not using it enough" — a discount won't change usage behaviour
- User was a short-term subscriber (< 2 months) — likely never committed to the product
- User churned due to a feature gap — a discount doesn't fix the gap
- User already received a retention discount in the last 6 months

### Discount Structure

```
Standard win-back offer:
  "First month back at $5" (vs. $9 standard)
  OR
  "2 months free with annual — pay $72 instead of $90"
  
  State expiry clearly: "Offer valid for 14 days"
  (Creates genuine urgency; 14 days is long enough to be real)

Do not:
  "50% off forever" (unsustainable; devalues the product)
  "Hurry — ends in 4 hours" (false urgency; destroys trust)
  Show the offer multiple times ("You still have [X] hours left!")
```

---

## Free Tier Re-engagement (Non-Win-back)

Free-tier users who have never paid — or users who downgraded from paid to free — represent an upgrade opportunity. This is ongoing product-led growth, not a win-back campaign.

### Upgrade Trigger Events

Product-led re-engagement is most effective when triggered by specific user behaviour, not by time elapsed.

```
Trigger 1 — Usage ceiling hit:
  User hits the free tier limit:
    "You've reached [3 projects / 50 notes / X actions]."
    "Upgrade to Pro for unlimited access."
    Timing: Real-time, at the moment of friction.

Trigger 2 — Dormancy break:
  User hasn't logged in for 14+ days and returns:
    "Welcome back — here's what's new since your last visit."
    Include 1–2 new features.
    One upgrade prompt at the bottom.

Trigger 3 — Milestone:
  User completes a meaningful action on free tier:
    "You've created [X items] — you're a power user."
    "Pro unlocks [specific capability] that could save you [time/effort]."
    Trigger when user completes a workflow that maps to a paid feature.

Trigger 4 — Feature discovery:
  User tries to access a Pro feature from the free tier:
    Lock screen / upgrade prompt inline.
    Show the feature (grayed out or with preview).
    CTA: "Upgrade to Pro to use this feature."
    Never block the user's current workflow — the lock is on the locked feature only.
```

### Re-engagement Email for Free Tier

```
Trigger: User inactive for 21 days (still on free tier, never paid)

Subject: "3 things you haven't tried yet in [Product]"

Body:
  "You've been using [Product] for [X] days — thanks for sticking with it."
  
  "A few things that might change how you use it:"
  
  1. [Feature they haven't tried — free tier]
     Brief description + link to try it
  
  2. [Feature they haven't tried — free tier]
     Brief description + link to try it
  
  3. [Pro feature preview]
     "This one requires Pro — here's what it looks like:"
     [Screenshot or 3-second GIF]
     [Try Pro free for 14 days →]
  
Tone: Educational, not salesy.
Frequency: Once per 30 days of inactivity, max 2 emails.
```

---

## SEA Win-back Considerations

### Communication Channels

In SEA markets, email is not the only re-engagement channel — and in some markets, it is not the primary one.

```
Indonesia:
  WhatsApp: Primary customer communication channel.
  If the user consented to WhatsApp marketing at signup,
  WhatsApp messages have materially higher open rates than email.
  
  WhatsApp Business API (via Twilio / 360Dialog / Gupshup):
  - Win-back messages must use pre-approved message templates
  - Cannot send promotional content without prior user consent
  - Opt-in at checkout or in-app required
  
  Push notifications (if mobile app):
  - Higher open rates than email in SEA mobile-first markets
  - Deep link directly to the in-app resubscribe flow

Philippines:
  Facebook Messenger + SMS widely used alongside email.
  GCash / Maya in-app notifications if referring to wallet-linked subscriptions.

Vietnam:
  Zalo (Vietnamese messaging app): Primary messaging for many users.
  Zalo Official Account API available for business messaging.
```

### Local Discount Framing

Win-back discounts should be framed in local purchasing power context, not in USD. An offer of "$3 off" means little to a user who thinks in IDR, PHP, or VND.

```
Indonesia win-back offer:
  "Kembali ke Pro — hanya IDR 35,000 bulan pertama"
  (Back to Pro — only IDR 35,000 the first month)
  [Standard: IDR 75,000]

Philippines win-back offer:
  "Come back — PHP 150 for your first month back"
  [Standard: PHP 290]
```

Localised copy + local price framing outperforms global pricing in SEA win-back campaigns.

---

## Win-back Metrics

| Metric | How to Measure | Target |
|--------|----------------|--------|
| Win-back rate | % of churned users who resubscribe within 90 days | 10–20% voluntary churn; 40–60% involuntary churn |
| Win-back CAC | Revenue recovery cost per resubscribed user | < 0.5× original acquisition CAC |
| Resubscription LTV | Average subscription duration of win-back cohort | > 0.75× original subscriber LTV |
| Email engagement | Open rate, click rate of win-back sequence | Open > 25%; Click > 5% |
| Discount claim rate | % who use win-back discount vs. return without it | Track to calibrate discount necessity |

**Cohort tracking for win-back:**
The most useful win-back insight is: of users who churned in month X, what % resubscribed within 90 days, and what triggered the return? This tells you which win-back touchpoints actually work, vs. which users would have returned on their own.

---

*Last updated: April 2026*
