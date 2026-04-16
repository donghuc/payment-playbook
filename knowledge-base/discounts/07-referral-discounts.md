# Referral Discounts

> Part of the Discount Mechanisms series. See [discount-mechanisms.md](../discount-mechanisms.md) for the full index.

---

## What It Is

A referral discount rewards an existing user (the referrer) and a new user (the referred) when the new user signs up and/or completes a qualifying action (first payment, first use, etc.). The discount functions as both a customer acquisition mechanism and a retention mechanism simultaneously — the referrer is incentivised to remain engaged and advocate, while the referred user receives a lower-friction entry into the product.

The mechanic exploits **social proof at its most powerful**: a recommendation from a known person carries exponentially more trust than advertising or organic discovery. The user receiving the referral is not just getting a deal — they are receiving a pre-qualified signal that someone they trust found the product valuable enough to recommend. The discount reduces the final friction barrier (price) after the trust barrier has already been cleared.

Referral programmes are one of the lowest cost-per-acquisition (CAC) channels in B2C when designed well — because the customer doing the acquiring (the referrer) is already in the product, believes in it, and has a social network that shares relevant characteristics with your target audience.

---

## Variants

### Bilateral Discount (Both Sides Rewarded)
The most common and most effective structure: both the referrer and the referred receive a benefit when the referral converts. The referrer gets a credit, free month, or cash reward; the referred gets a discount on their first payment.

*Example: Dropbox's classic referral programme — both referrer and referred received additional free storage. Uber's referral — both sides received a ride credit.*

### Referrer-Only Reward
Only the referrer receives a benefit. Lower conversion rate on the referred side (no incentive to act), but lower programme cost. More common when the product already has high organic appeal and the referrer reward is the primary driver.

### Referred-Only Discount (Referral Code)
The referrer shares a unique code; the referred user receives a discount on first payment. The referrer may receive no monetary reward — but receives social currency ("use my code"). Common in creator or influencer contexts where the referrer has an audience they monetise separately.

### Tiered Referral Rewards
Referrers who bring in more users receive progressively better rewards. "Refer 1 friend — 1 free month. Refer 5 friends — 3 free months. Refer 10 friends — free year." Creates an advocacy ladder with top advocates earning material benefits.

### Team / Collaborative Referral
When a user invites a colleague or collaborator to a shared workspace, both receive a benefit. Particularly effective for products with collaboration features — the referral is motivated by genuine product use (I need my colleague in here) rather than purely by the reward.

---

## Performance in B2C

Referral programmes are among the most well-documented acquisition channels in B2C, with multiple landmark cases establishing their effectiveness:

**Benchmark performance:**
- **Dropbox** (2008–2010): Referral programme drove a 60% permanent increase in signups. Estimated 35% of daily signups came from referrals at peak.
- **Airbnb**: Referral programme generated acquisition at 25% lower CAC than paid channels, with referred users showing 25% higher LTV than average.
- **PayPal**: Early referral programme ($10 for new users, $10 for referrers) drove viral growth at a fraction of paid acquisition cost once the network effect kicked in.

**Why referred users perform better:**
Referred users consistently show higher conversion rates, lower churn, and higher LTV than users acquired through advertising. The mechanism: social trust pre-selects users with genuine intent, and social commitment (I signed up because my friend recommended it) creates an additional psychological barrier to churning.

**SEA-specific performance:** Referral programmes perform strongly in SEA, where social and messaging app sharing is the dominant content distribution channel. WhatsApp, Line, Telegram, and Facebook Messenger are the primary referral vectors — a referral mechanic must be designed around share-by-link (not share-by-email) for SEA markets.

**Risks:**
- **Reward exploitation:** Users who create fake accounts to self-refer and claim both-sides rewards. Mitigate with payment verification, device fingerprinting, and phone number verification.
- **Referral fatigue in the referrer base:** Aggressive referral prompts feel like multi-level marketing. The programme should feel like sharing something genuinely good, not like recruitment.
- **Discount-motivated low-quality cohorts:** If the referred user's primary motivation is the discount rather than the product, LTV may be lower than expected. Ensure the qualifying action (paying, activating) filters for genuine intent.

---

## Best For

- Products with strong social or collaborative mechanics (sharing, inviting, co-creation)
- Products with a high-trust, word-of-mouth user base who would recommend organically without a programme
- Acquisition phases where CAC from paid channels is high and LTV justifies a per-referral reward
- Products targeting social-sharing-dominant markets (SEA via messaging apps; global via social platforms)
- Products where the referred user's entry into the product creates value for the referrer (collaboration, network effects)

**Not ideal for:**
- Products where the social graph overlap between users is low (users don't know people who'd want the product)
- Products where the referral reward would be perceived as exploitative (healthcare, sensitive contexts)
- Products with very low ARPU — the economics of per-referral rewards may not work

---

## Revenue Model Fit

| Revenue Model | Fit | Notes |
|---|---|---|
| [Freemium](../models/01-freemium.md) | Very High | Referrals that land new users into the free tier grow the top of funnel. Referral rewards that give the referred user a free-to-paid trial are especially effective. |
| [Free Trial (Traditional)](../models/02-free-trial.md) | High | "Refer a friend — they get an extended trial, you get a free month" is a clean, easy-to-communicate structure. |
| [Reverse Trial](../models/03-reverse-trial.md) | High | Referral entry into the reverse trial (full premium access, no card) is the lowest-friction referred-user experience possible. Combines wide funnel with loss-aversion retention. |
| [Flat-Rate Subscription](../models/04-flat-rate-subscription.md) | High | Bilateral credit rewards (referrer + referred each get one free month) are simple to implement and communicate on flat-rate models. |
| [Tiered Subscription](../models/05-tiered-subscription.md) | Very High | Tiered referral rewards (refer more → earn more) are particularly elegant on tiered models — the reward can be a tier upgrade rather than just a discount. |
| [One-Time Purchase](../models/06-one-time-purchase.md) | Medium | Referral discount on first purchase works, but the single-transaction nature limits the bilateral reward structure. |
| [Usage-Based](../models/07-usage-based.md) | High | Bilateral credit reward (both sides receive usage credits) is perfectly aligned with usage-based models — the reward is in the product's native currency. |
| [Hybrid Models](../models/08-hybrid.md) | Very High | Flexible reward options (subscription discount, credit reward, or tier upgrade) can be tailored to the referrer's and referred user's plan type. |

---

## UX Flow

### Phase 1 — Referral Programme Discovery

**Goal:** Surface the referral opportunity at the right moment — when the user has just experienced value, not before they've used the product.

```
Trigger moments (contextual — not generic):
   → After achieving first "aha moment" (completed first meaningful task)
   → After N sessions or N days of active use
   → At billing renewal (positive moment — they chose to stay)
   → At the feature-usage milestone ("You've shared 10 projects — love your work!")
        ↓
In-product referral prompt
   → "Know someone who'd love [Product]? Share your link — you both get [reward]"
   → Prominent but non-intrusive (banner or modal at the right moment, not a persistent nag)
   → CTA: "Share my link"
```

---

### Phase 2 — Referral Link Generation & Sharing

**Goal:** Make sharing effortless. Each friction point in the share flow reduces referrals.

```
User clicks "Share my link"
        ↓
Referral dashboard / share screen
   → Unique referral link generated
   → Sharing options:
       → Copy link (one tap)
       → Share via WhatsApp / Line / Telegram (primary for SEA)
       → Share via email
       → Share via social (Twitter, Facebook)
   → Message pre-written and editable: "I've been using [Product] — try it free with my link, you'll get [X]"
        ↓
[User shares link]
   → Tracking begins on referral link click-through
```

---

### Phase 3 — Referred User Onboarding

**Goal:** The referred user must experience the value of the referral's promise immediately — delay between arriving and experiencing value kills referred conversion.

```
Referred user clicks referral link
        ↓
Landing page (personalised to referral context)
   → "[Referrer name] invited you to [Product]"
   → Referred user offer: "Your first month is free / 50% off / etc."
   → CTA: "Accept invite — start free"
        ↓
Signup flow
   → Referral code / source pre-applied (user doesn't need to enter anything)
   → Email or social login
   → No credit card required for free tier / trial entry
        ↓
Onboarding → aha moment sequence (standard product onboarding)
        ↓
[At qualifying action — first payment / X days of use]
   → Referred discount applied automatically to first bill
   → Referrer reward triggered simultaneously
```

---

### Phase 4 — Referrer Reward Delivery

**Goal:** Close the loop for the referrer. They shared — they need to see the outcome.

```
Qualifying action by referred user completed
        ↓
Referrer notification
   → Push + email: "[Friend's name] joined [Product] using your link — you've earned [reward]"
   → Reward credited to account immediately
   → Updated referral dashboard: X friends referred, Y rewards earned
        ↓
Reward redemption path (if credit-based)
   → Reward automatically applied to next invoice
   → OR: apply manually from referral dashboard
        ↓
[If tiered referral programme]
Progress toward next tier displayed:
   → "Refer X more to reach [next tier] and earn [better reward]"
```

---

### Edge Case — Referral Fraud Detection

```
System flags potential self-referral or abuse:
   → Same device, IP, or payment method as referrer
   → Multiple referral accounts from same email domain
        ↓
Reward hold — not awarded immediately
   → Standard qualifying period (e.g., 30 days of paid subscription)
   → Fraud check runs in background
        ↓
[If legitimate] — Reward released after qualifying period
[If fraudulent] — Reward voided; no notification to user about fraud detection
   → Repeat abuse: account review
```

---

*Last updated: April 2026*
