# Freemium

> Part of the Revenue & Paid Models series. See [revenue-models.md](../revenue-models.md) for the full index.

---

## Mechanic

Freemium offers a permanently free tier alongside one or more paid tiers. There is no time limit on the free experience — users can stay free indefinitely. The paid tier unlocks additional features, higher usage limits, or a better experience. No credit card is required to sign up.

The conversion trigger is not a deadline or a charge — it is the user organically hitting a ceiling, forming a habit, or recognising that the paid tier delivers meaningfully more value than what they currently have.

The business bet is: acquire a large user base at low marginal cost, and convert a small percentage of them to paid at a margin that sustains the whole.

---

## B2C Reality

### How it fits B2C

Freemium is fundamentally a volume model, and B2C is where volume lives. The model scales well in consumer markets because:

- Customer acquisition happens largely through organic and viral channels — users share, invite, and recommend, lowering paid CAC significantly
- Free users in B2C carry far lower support costs than B2B free users (self-serve by design, no procurement, no enterprise onboarding)
- Mobile app distribution (App Store, Play Store) makes a zero-friction free install the default expectation

The model does not require users to trust you with a credit card before experiencing your product — a meaningful advantage in markets like Southeast Asia where card penetration is lower and digital payment trust is still maturing.

### Economic standpoint

The freemium unit economics equation:

```
Revenue = Total Users × Conversion Rate × ARPU
Cost    = (Total Users × Cost per User) + Fixed Costs
```

The sustainability of freemium depends on three levers:

**1. Conversion rate** — Industry benchmarks for B2C freemium vary widely. Spotify converts approximately **~40%** of monthly active users to paid Premium (290M premium / ~700M+ MAUs as of Q4 2025 — the often-cited 26–30% figure is outdated, from pre-2021 data). Dropbox's conversion has been historically cited at ~2–4% (S-1 filing era); current estimates put it closer to ~2–2.5% (FY2023: ~17.77M paying users). Most B2C SaaS products fall in the **2–8%** range. The wide variance reflects product type, free tier design, and upgrade trigger quality.

**2. Cost per free user** — If your product is compute or storage-heavy, free users can be loss-making. If your marginal cost per additional user is near zero (pure software, no AI generation, no heavy infra), the model is viable even at low conversion. AI-powered B2C products have fundamentally different economics here — every free user action has a real cost.

**3. ARPU of paid users** — The paid tier must generate enough revenue to fund the entire free base. Higher ARPU creates more headroom; lower ARPU requires higher conversion rates.

### How it performs in B2C

Freemium performs best in B2C when:

- The product has strong **viral or social mechanics** — sharing, collaboration, public outputs — so free users become acquisition channels (Spotify Wrapped, Duolingo streaks, Canva public designs)
- The product creates **daily habits** — users who open the app frequently are more likely to hit upgrade triggers and less likely to churn from the free tier
- The free tier is **genuinely useful but clearly limited** — users experience real value, but the ceiling is visible and felt, not hidden

Freemium performs poorly in B2C when:

- Free users never meaningfully engage (high download, low activation)
- The free tier is too generous — users have no reason to upgrade
- The free tier is too limited — users churn before forming a habit
- The product lacks viral loops — free users accumulate costs but generate no new acquisition

---

## Real World Examples

**Spotify**
Free tier: Full music library, shuffle-only on mobile, ads. Paid tier: On-demand playback, offline, no ads. Conversion: ~**40%** of monthly active users as of 2025 (290M premium subscribers out of ~700M+ MAUs). The free tier is genuinely enjoyable but with deliberate friction (shuffle, ads) that increases in salience as users develop listening habits. Spotify Wrapped is the most effective viral loop in consumer SaaS — a shareable annual report that makes free users advocates.

**Duolingo**
Free tier: Full language learning curriculum, unlimited lessons, but with ads and a "hearts" system that limits mistakes per day. Paid tier (Super Duolingo): No ads, unlimited hearts, offline mode. Conversion: Estimated 8–10%. The habit loop (streaks, notifications, social leaderboards) is built into the free tier. The upgrade trigger is frustration with losing hearts, not a feature ceiling.

**Canva**
Free tier: Core design tools, limited template access, limited premium elements. Paid tier: Full template library, brand kits, background remover, more storage. Conversion: Estimated 5–10% (Canva is private and does not disclose conversion rates — this is an industry estimate). Every premium element is watermarked and clearly labelled in the editor, creating consistent, low-friction upgrade prompts during normal product use.

**Notion**
Free tier: Unlimited personal pages, limited collaboration (up to 10 guests). Paid tier: Unlimited collaboration, version history, advanced permissions. The free tier is extremely generous for individual use, driving high adoption. Conversion happens naturally when users try to collaborate with teams.

**Dropbox**
Free tier: 2GB storage. Paid tier: 2TB+ storage. Conversion historically cited at ~2–4% (S-1 filing era, 2017–2018); current estimates are closer to ~2–2.5% (FY2023: ~17.77M paying users). At hundreds of millions of registered users, even 2% is commercially significant. The upgrade trigger is purely hitting the storage ceiling — a natural and non-arbitrary moment.

---

## Trade-offs

**Advantages:**
- Very high top-of-funnel — lowest signup friction of any model
- Organic and viral growth potential
- Builds large installed base useful for network effects and data
- Works well in low-card-penetration markets (SEA)
- Users experience product value before any payment decision

**Disadvantages:**
- Requires scale to work — low conversion rates only produce meaningful revenue with a very large user base
- Free users create real infrastructure and support costs
- Risk of free tier being too good — undermining paid conversion
- Requires careful, ongoing feature gate design — wrong gating creates user resentment
- Monetisation is slower to ramp vs. trial-first models
- Difficult to reverse if the free tier becomes too entrenched in user expectation
- AI-powered features fundamentally break the economics — each free action has a real cost

---

## Best Fits For

- Products with strong viral or social sharing mechanics
- Products with near-zero marginal cost per user (no heavy compute/AI per action)
- Consumer tools targeting high-volume, price-sensitive markets (SEA, emerging markets)
- Products where the "aha moment" is fast and achievable on the free tier
- Products with a long consideration cycle — users who need months before making a paid decision
- Mobile-first apps where zero-friction install is the acquisition strategy

**Not a good fit for:**
- AI-first products where every user action incurs compute cost
- Products without a credible free tier (can't give away the core value)
- Products with a small total addressable market (freemium requires volume)
- Early-stage products without the user base to make the conversion math work

---

## UX Flow

The freemium UX is not a single moment — it is an ongoing journey structured around three phases: activation, habit formation, and upgrade conversion.

### Phase 1 — Signup & Activation

**Goal:** Get the user to the "aha moment" as fast as possible. Every step before activation is friction.

```
Landing page / App Store listing
        ↓
Sign up (email, social login, or SSO — no credit card)
        ↓
Onboarding flow (3–5 steps max)
   → Personalisation questions (what brings you here?)
   → Core feature demonstration or first-use prompt
   → First value moment (the "aha")
        ↓
Free tier home state
```

**Example — Duolingo:** After signup, you pick your language and set a daily goal within 60 seconds, then immediately start your first lesson. The aha moment (completing a lesson, earning XP) happens before you've seen a single paywall. Activation is tied to completing the first session, not to exploring a feature menu.

**Example — Canva:** After signup, you're dropped directly into the editor with a template pre-loaded. The aha moment is creating something visually complete in minutes. Premium elements are present and clearly marked but don't block the first-use experience.

**Key UX principle:** The free tier onboarding should not mention paid plans at all. The user's first job is to experience value, not to evaluate pricing.

---

### Phase 2 — Habit Formation & Free Tier Experience

**Goal:** Make the free tier genuinely sticky. Users who don't form a habit will churn before they ever convert.

The free tier UX must:
- Surface the product's core value loop clearly and repeatedly
- Create behavioural hooks (streaks, saved work, history, connections, data)
- Make returning easy (notifications, empty states that prompt re-engagement)
- Show premium features in context — visible but non-intrusive

**Contextual premium exposure (the right way):**
Premium features should appear naturally within the product flow, clearly marked, and clickable — but clicking them should show a brief upgrade prompt, not a hard block. The goal is to build awareness of what paid unlocks during normal usage, not to create frustration.

```
User attempting a premium action
        ↓
Soft paywall modal
   → "This is a [Pro] feature"
   → Brief value statement (what it does, why it matters)
   → "Upgrade to Pro" CTA
   → "Not now" dismiss option (non-guilt-tripping copy)
        ↓
User continues on free tier
```

**Example — Notion:** Premium features (version history, large file uploads) are accessible in the UI and labelled with a lock icon. Clicking them shows a clean modal explaining the feature and the plan it's on. The free experience is not degraded by constant upsell pressure.

---

### Phase 3 — Upgrade Conversion

**Goal:** Meet the user at the natural moment they feel the ceiling, with a frictionless path to paid.

The three most effective upgrade trigger patterns in B2C freemium:

**1. Ceiling trigger — user hits a hard limit**
```
User reaches storage limit / usage cap / feature gate
        ↓
Contextual upgrade prompt (inline, not a modal storm)
   → Explain exactly what they've hit
   → Show the upgrade path and price
   → CTA: "Upgrade to [Pro]" + plan details
   → Optional: Show annual vs. monthly with savings highlighted
        ↓
Payment flow (see below)
        ↓
Confirmation + immediate access to unlocked features
```

**2. Intent signal — user demonstrates power-user behaviour**
Triggered by usage analytics: users who export N times, create N projects, or invite N collaborators are statistically more likely to upgrade. A contextual prompt at this moment (not a generic email blast) converts meaningfully better.

```
User hits behavioural threshold (e.g. 5 exports in a month)
        ↓
In-product prompt (banner or modal)
   → "You're getting serious — here's what Pro unlocks for you"
   → Personalised based on features they've been using
   → CTA to upgrade
```

**3. Social/collaboration trigger — user tries to share or collaborate**
Collaboration is one of the most powerful upgrade triggers because it creates external accountability. The user wants to invite someone and discovers a gate.

```
User clicks "Share" / "Invite" / "Collaborate"
        ↓
Feature gate or limit reached
        ↓
Upgrade prompt framed around the collaboration benefit
   → "Invite unlimited collaborators with Pro"
        ↓
Option to upgrade or share a limited view (keeps the user engaged)
```

**Upgrade / Payment Flow:**
```
User clicks upgrade CTA
        ↓
Plan selection page
   → Monthly vs. Annual (highlight annual savings prominently)
   → 2–3 tier options if applicable (avoid 4+)
   → Current plan clearly marked for context
        ↓
Payment details
   → Local payment methods surfaced by geo (card, e-wallet, SEPA, etc.)
   → Clear total, billing cycle, and cancellation policy visible
        ↓
Confirmation
   → Immediate feature unlock (no waiting)
   → Welcome to Pro moment (brief, celebratory — not overwhelming)
   → Optional: Prompt to explore a newly unlocked feature
```

---

### Downgrade / Churn Flow

Often neglected but strategically important. When a paid user cancels, they return to the free tier — they should not be fully offboarded.

```
User initiates cancellation
        ↓
Cancellation confirmation page
   → Acknowledge the cancellation clearly (no dark patterns)
   → Summarise what they'll lose (loss aversion, honest)
   → Offer a pause or downgrade option if relevant
   → Optional: Offer a discount to stay (use sparingly — devalues the product)
        ↓
Downgrade to free tier (not full removal)
   → Data preserved (critical for re-engagement)
   → Clear communication of what's now limited
   → Re-engagement path kept open
```

**Key principle:** Never delete user data on downgrade. The ability to return to their work is the most powerful re-upgrade trigger over time.

---

*Last updated: April 2026*
