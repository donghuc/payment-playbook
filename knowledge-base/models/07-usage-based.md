# Usage-Based (Consumption-Based)

> Part of the Revenue & Paid Models series. See [revenue-models.md](../revenue-models.md) for the full index.

---

## Mechanic

Usage-based pricing charges users based on what they actually consume rather than a fixed recurring fee. The unit of consumption varies by product — AI generations, API calls, minutes of processing, storage gigabytes, messages sent, exports completed, or tokens used.

There is no fixed monthly commitment in a pure usage-based model. You use it, you pay for it. You use nothing, you pay nothing.

In B2C, pure usage-based rarely appears in isolation. The dominant implementation patterns are:

```
1. Pure usage-based (pay-as-you-go)
   Use → Measure → Charge
   No base fee. Rare in B2C consumer products. Common in developer-facing APIs.

2. Credit / Token model (prepaid usage)
   Purchase credits upfront → Spend credits on actions → Top up when depleted
   Most common B2C implementation. Used by AI image, video, and voice tools.

3. Base + Variable (subscription + overage)
   Fixed subscription covers a usage allowance → Additional usage charged above the cap
   Hybrid approach. Covered more fully in the Hybrid Models section.

4. Metered subscription tiers
   Subscription price scales with a usage metric (e.g., number of seats, storage size, messages/month)
   Technically tiered subscription with a usage dimension — distinct from pure usage-based.
```

The **credit / token model** is the most strategically relevant for B2C in 2024–2026, driven almost entirely by the rise of AI-powered consumer products. It deserves detailed treatment.

---

## B2C Reality

### How it fits B2C

Usage-based pricing has historically been a developer and enterprise model — Twilio charges per SMS, AWS charges per compute hour, Stripe charges per transaction. Consumer products resisted it because variable billing creates anxiety: users don't know what their monthly cost will be, and unexpected charges destroy trust.

The AI wave changed this dynamic. AI-powered consumer tools have real, variable compute costs — every image generated, every video processed, every voice transcription completed costs the provider real money. A flat subscription that covers unlimited AI usage is economically unsustainable at consumer price points unless heavily usage-constrained. Credit and token models emerged as the practical solution: give users a concrete, visible pool of capacity to spend, make the cost of each action legible, and let users control their own consumption.

The shift is significant because it introduced **budget literacy** into B2C SaaS for the first time at scale. Consumer users of Midjourney, Adobe Firefly, or ChatGPT are now managing credits and understanding per-action costs in a way that would have been alien to the average consumer software user five years ago.

For B2C specifically, the credit/token model works because it:

- Translates variable compute cost into a consumer-friendly abstraction (credits feel like currency, not metered billing)
- Gives users direct control over their spending — you cannot be surprised by a large bill if you prepay
- Removes the anxiety of open-ended metered billing — once credits are gone, you stop, not incur debt
- Allows users to match spending to their actual usage intensity — a light user buys a small pack; a heavy user buys a large pack

The model struggles in B2C when:

- The unit of consumption is not intuitive — if users cannot predict how many credits an action costs, spending feels unpredictable and anxiety-inducing
- Credits expire — expiring credits feel like a trap, eroding trust
- The per-credit cost is not legible — users who cannot calculate what they're getting for their money distrust the pricing
- The product has no non-credit path — users who run out of credits mid-task and cannot continue without purchasing more experience friction at the worst possible moment

### Economic standpoint

Usage-based economics in B2C are fundamentally different from subscription in one critical dimension: **revenue and cost move together**.

```
Revenue = Credits Sold × Price per Credit Pack
Cost    = Actions Performed × Compute Cost per Action
```

In subscription models, there is a meaningful risk of under-consumption — a user pays $15/month and barely uses the product. The provider captures the full $15 with minimal cost incurred. In usage-based, this dynamic largely disappears — if a user doesn't use the product, they don't purchase credits, and the provider earns nothing. The model is honest in a way subscription is not, but it removes the subscription's structural advantage of capturing revenue from inactive users.

**Revenue predictability** is the central challenge. Subscription MRR is stable by definition. Usage-based revenue fluctuates with user activity — a product where users binge-use in creative sprints and then go dormant will see volatile monthly revenue even with a stable user base. This makes financial planning and investor communication more complex.

**Credit pack economics:** Credit packs are typically structured to improve margin at higher volumes — buying a larger pack gives a lower per-credit cost. This is a deliberate LTV lever: heavy users who buy large packs spend more in absolute terms but pay less per unit. The pricing ladder incentivises volume commitment.

```
Example credit pack structure:
  100 credits  →  $9    ($0.09/credit)
  500 credits  →  $39   ($0.078/credit — 13% cheaper)
  2000 credits →  $129  ($0.065/credit — 28% cheaper)
```

**Unused credit liability:** In some accounting treatments, prepaid but unconsumed credits represent a liability (deferred revenue). Products must decide whether credits expire (reduces liability, damages user trust) or carry forward indefinitely (better for trust, creates a balance sheet liability). Most consumer-facing credit models choose no-expiry to maintain trust, accepting the accounting complexity.

**The AI cost curve:** For AI-powered products specifically, the per-action compute cost is declining over time as model efficiency improves and infrastructure costs fall. A product launched with credits calibrated to 2024 compute costs will have significantly better margins on those same credit packs by 2026 if the per-action cost drops. This creates a natural margin expansion opportunity without requiring price increases.

### How it performs in B2C

Usage-based in B2C performs best when:

- **The unit of consumption is tangible and intuitive.** "1 credit = 1 image" or "1 credit = 1 minute of audio transcription" is legible. "1 credit = approximately 3,000 tokens, which varies by model configuration" is not. Consumer-facing credit systems must abstract away technical complexity.
- **Actions have a consistent, predictable cost.** Variable per-action credit costs (where complex actions cost more than simple ones) work in developer tools but create anxiety in consumer products. Flat per-action costs — even if they mean slight subsidisation of complex actions — are strongly preferable in B2C.
- **The product has natural usage intensity variation.** A user who creates 3 images this month and 50 next month benefits from usage-based more than a flat subscription. A user with highly consistent usage may prefer the predictability of a subscription.
- **The "out of credits" state is handled gracefully.** Users who run out of credits mid-workflow — particularly in AI tools where a generation is interrupted — experience a sharp negative moment. The product must handle credit depletion without creating hostility.

---

## Real World Examples

**Midjourney**
Midjourney is the most prominent B2C credit-based usage model in AI. Their subscription tiers include a monthly allocation of "Fast GPU hours" — the unit of compute consumed by image generation. Standard image generations consume a defined amount of fast hours; complex or high-resolution generations consume more. Users on lower tiers who exhaust their fast hours can switch to "Relax mode" (slower generation, no additional cost) or purchase additional fast-hour top-ups. This is a hybrid of subscription + usage-based with a graceful fallback (Relax mode) that prevents hard stops at depletion.

**Adobe Firefly / Creative Cloud credits**
Adobe introduced a generative AI credit system across Creative Cloud. Subscribers on paid plans receive a monthly credit allocation included with their subscription. Credits are consumed by AI generative features — Generative Fill in Photoshop, text-to-image in Firefly, etc. Users who exhaust their monthly allocation can purchase additional credits. This is a base + variable model (subscription covers an included allocation, additional usage is separately charged). Adobe's credit system is notable for being entirely invisible to users who stay within their allocation — it only surfaces as a constraint for heavy users.

**ChatGPT (OpenAI)**
ChatGPT's consumer tier is a tiered subscription (Free, Plus, Pro), but within tiers, usage of advanced models (o1, o3) is credit-rationed. Plus subscribers receive a monthly allocation of o1 queries; exceeding the allocation means falling back to GPT-4o for the remainder of the month. This is a metered subscription — the subscription price is fixed, but premium model access is usage-constrained. It communicates the reality that advanced model inference costs more, without exposing users to variable billing. OpenAI's API is pure usage-based (token pricing), but their consumer product deliberately shields users from that complexity.

**ElevenLabs (voice AI)**
ElevenLabs offers a credit-based model for AI voice generation. Credits equate to character counts of text-to-speech conversion. Subscription tiers include monthly credit allocations; additional credits can be purchased. The character-based unit is legible — users can estimate how many credits a script of known length will consume. This is a well-executed B2C usage-based implementation because the unit of consumption maps directly to a user-comprehensible metric (text length).

**Canva (AI credits)**
Canva's paid plans include a monthly allocation of AI credits for generative features (Magic Media, AI image generation, etc.). Free users receive a smaller allocation. Heavy users on Pro who exhaust their monthly allocation are prompted to upgrade to a higher tier or wait for the monthly reset. Canva deliberately abstracts the credit system from casual users — it only becomes visible at the ceiling, not during normal use.

**Runway ML (video AI)**
Runway offers credit-based video generation on a per-second-of-output basis. Video generation is compute-intensive, making flat-rate unlimited access economically impossible at consumer prices. Credits are sold in packs with volume discounts. This is pure consumer-facing usage-based pricing for a compute-heavy AI product — one of the cleaner B2C implementations because the unit (seconds of generated video) is immediately intuitive.

---

## Trade-offs

**Advantages:**
- Revenue scales directly with product value delivered — you earn more when users use more
- Natural cost alignment — high compute costs are covered by high usage revenue
- Low barrier to entry — users can start with a small credit purchase rather than committing to a monthly subscription
- Appeals to irregular users — those who use the product in bursts rather than consistently benefit from not paying for idle months
- Transparent value exchange — users understand exactly what their money buys
- Prepaid model (credit packs) eliminates the billing surprise problem of open-ended metered billing
- In SEA markets, single-purchase credit top-ups can be fulfilled via e-wallets and QR codes — no recurring payment infrastructure needed

**Disadvantages:**
- Revenue is unpredictable — fluctuates with user activity, difficult to project MRR/ARR
- Users who run out of credits mid-task experience hard stops — a poor experience requiring careful UX handling
- Credit system design is a product discipline in itself — unit definitions, credit costs, pack sizes, expiry policy all require careful calibration
- Budget anxiety — some users are uncomfortable with any non-fixed-cost spending, even if prepaid
- Metric confusion — if credit consumption is not intuitive, users disengage rather than top up
- Does not reward habitual, consistent users the way subscription does — power users may resent paying per use vs. a flat rate
- Susceptible to gaming — users may optimise their workflow to minimise credit consumption rather than using the product naturally
- Investor and financial reporting complexity — usage-based revenue requires different metrics (NRR, cohort consumption, credit burn rate) vs. subscription MRR

---

## Best Fits For

- AI-powered B2C tools where per-action compute cost is real and significant (image, video, voice, text generation)
- Products with high usage variance across the user base — some users generate 5 items/month, others generate 500
- Products where a subscription would either be over-priced for light users or under-priced for heavy users
- Launch-phase products in AI categories where sustainable flat-rate pricing cannot be established until cost curves are understood
- Markets where recurring billing infrastructure is fragile — SEA specifically, where single credit top-ups via e-wallet or QR are operationally simpler than monthly recurring charges
- Products with a strong developer or prosumer audience comfortable with metered consumption models

**Not a good fit for:**
- Products where the unit of consumption is not intuitive or legible to a consumer audience
- Products with highly consistent, predictable usage across users — subscription is more appropriate
- Products where the "out of credits" state creates a dangerous or deeply frustrating experience (e.g., mid-document, mid-communication)
- Products attempting to build long-term habit and daily engagement — subscription's always-available model is better for habit formation than a metered model that creates micro-decisions before each use

---

## UX Flow

Usage-based UX in B2C centres on three design challenges that don't exist in subscription models: **making consumption visible without creating anxiety**, **handling the depletion state gracefully**, and **making top-ups frictionless**. Each of these is a distinct design problem.

---

### Phase 1 — Onboarding & Initial Credit Allocation

**Goal:** Get the user started with enough credits to experience real value before asking them to purchase.

```
Signup (no credit card required for initial allocation)
        ↓
Free credit allocation on signup
   → Stated clearly: "You have X free credits to start"
   → Unit explained simply: "1 credit = 1 [action]"
   → No complex credit math at onboarding — keep it simple
        ↓
Onboarding flow
   → Walk through a core action that uses credits
   → Show the credit consumption in real-time (subtle, not alarming)
   → First action feels rewarding — the credit spend must feel worth it
        ↓
Post-first-action state
   → Credits remaining displayed (prominent but not anxiety-inducing)
   → Prompt to explore more (not to buy more — not yet)
```

**Free credit allocation strategy:** Most credit-based B2C products give new users enough free credits to complete 3–10 meaningful actions — enough to form an opinion about the product's quality, not enough to fulfil a full workflow. The calibration is intentional: generous enough to demonstrate value, constrained enough to create a natural top-up moment.

---

### Phase 2 — Active Usage & Credit Visibility

**Goal:** Make credit consumption visible at all times without making users afraid to use the product.

**The credit meter — design principles:**

```
Credit display (persistent, in-product)
   → Always visible but not dominant — sidebar, header, or account area
   → Shows remaining credits as a number and/or progress bar
   → Does NOT show credits consumed per action inline (this creates micro-anxiety)
   → Color states:
      Healthy (>50% remaining): neutral display, no urgency
      Low (20–30% remaining): subtle yellow indicator
      Critical (<10%): orange/red with top-up prompt
```

**Before a costly action (high-credit-consumption actions only):**
```
User initiates a high-cost action (e.g., video generation, complex processing)
        ↓
Pre-action credit disclosure
   → "This will use approximately X credits"
   → "You have Y credits remaining"
   → Confirm / Cancel
```

This pre-confirmation should only appear for meaningfully expensive actions — not for every single action. Over-confirming creates friction and trains users to feel anxious before each use. Reserve it for actions that consume 10%+ of a typical credit pack.

---

### Phase 3 — Depletion State & Top-Up Flow

The depletion state is the most sensitive moment in the usage-based UX. Handle it poorly and users churn. Handle it well and it becomes a natural, frictionless conversion moment.

**Credit depletion — graceful handling:**

```
User attempts an action with insufficient credits
        ↓
Depletion state (NOT a hard error — a clear, helpful prompt)
   → "You've used all your credits"
   → Summary of what they accomplished (positive framing)
   → Credit top-up options presented immediately (not a redirect — inline)
   → Option A: Top up credits (purchase)
   → Option B: Upgrade to subscription tier (if applicable — presented as "better value for regular use")
   → Option C: Wait for free credit reset (if monthly reset exists)
        ↓
User selects top-up option
   → Credit pack selection (see below)
   → Payment
   → Credits loaded immediately
   → Return to interrupted action automatically (if technically feasible)
```

**The "return to interrupted action" UX** is high value and rarely implemented. If a user was mid-workflow when they ran out of credits, automatically resuming that action after purchase removes the cognitive cost of re-navigating to what they were doing. It signals that the system understood the context, not just processed a transaction.

**Credit top-up flow:**

```
Top-up / purchase credits
        ↓
Credit pack selection
   → 3–4 pack sizes displayed
   → Price per credit shown for each (makes volume discount legible)
   → Recommended pack highlighted (based on usage history if available,
     or default to mid-range pack for new users)
   → "X credits ≈ Y [actions]" — translate credits back to concrete actions
        ↓
Payment
   → Stored payment method (one-click if available)
   → Or: new payment method (card, e-wallet by geo, PayPal)
   → Single-step: select pack → confirm payment → done
   → No account page navigation — inline where possible
        ↓
Confirmation
   → "X credits added"
   → New balance shown immediately
   → Return to product (not to a purchase confirmation page — back to work)
```

**One-click top-up:** For users with a stored payment method, the entire top-up flow should be achievable in 2 taps: select pack size → confirm. Every additional step between "I'm out of credits" and "I'm back in the product" is churn risk.

---

### Phase 4 — Proactive Top-Up Nudges (Low Credit Warnings)

**Goal:** Surface the top-up option before the user hits zero, at a moment when they are not under workflow pressure.

```
Low credit threshold reached (e.g., 20% remaining)
        ↓
Subtle in-product indicator
   → Credit meter changes color (yellow)
   → Optional: one-line banner "Running low on credits — top up"
   → Non-blocking, dismissible
        ↓
Optional: Push notification (mobile) or email
   → "You have X credits remaining — that's approximately Y [actions]"
   → Direct top-up CTA
   → Timing: send at a moment of active usage, not at 2am
        ↓
No top-up action taken → usage continues until depletion
   → Depletion flow (Phase 3) handles the terminal state
```

**Notification calibration:** One low-credit notification per depletion cycle is appropriate. Multiple notifications for the same low-credit state feel harassing and train users to ignore them. If the user dismisses the first low-credit notification, respect that and only re-surface at critical level (< 5% remaining).

---

### Phase 5 — Usage History & Transparency

A unique UX requirement in usage-based models: users need to understand where their credits went.

```
Usage history (account settings or dedicated page)
        ↓
Per-action log (or summarised by day/week)
   → Date / time of each credit-consuming action
   → Action type and credits consumed
   → Searchable/filterable for heavy users
        ↓
Summary view
   → Total credits used this month
   → Top actions by credit consumption
   → Average daily usage (helps users predict top-up frequency)
        ↓
"Why did I use X credits?" explainer
   → If a user contacts support about unexpected consumption, this page should answer the question
   → Transparent log builds trust — users who can see their usage don't feel cheated
```

**The transparency principle:** In usage-based billing, the number one source of support tickets and trust erosion is "I didn't know I used that many credits." A clear, accessible usage log eliminates most of these tickets and transforms a potential negative experience into a neutral one.

---

### Auto Top-Up (Optional Feature)

For power users who want uninterrupted access, an auto top-up option removes the depletion friction entirely.

```
Auto top-up setting (opt-in, not opt-out)
   → "Automatically add X credits when my balance drops below Y"
   → Stored payment method required
   → Clear confirmation of the trigger and amount
   → Easy to disable at any time — this must be prominently accessible
        ↓
Auto top-up fires
   → Transaction email sent immediately (not silent)
   → Amount, trigger balance, new balance
   → "Manage auto top-up" link in every such email
```

**Opt-in is non-negotiable.** Auto top-up must never be the default. It is an enhanced service for users who want it. Defaulting to auto top-up — even with a disclosed opt-out — is the fastest way to generate chargebacks and consumer complaints in the usage-based model. The distinction between "opted into this" and "this happened to me" is the entire difference between a trusted product feature and a billing horror story.

---

### SEA-Specific Considerations for Credit Top-Ups

In SEA markets, the credit top-up model has a structural advantage: each top-up is a discrete, single transaction — not a recurring charge. This maps naturally to how consumers in Indonesia, Vietnam, and the Philippines already manage digital wallet balances (GoPay, Momo, GCash).

```
SEA top-up flow:
        ↓
Payment method selection
   → E-wallet options surfaced first (GoPay, OVO, Momo, GCash, TrueMoney — by country)
   → QR payment option
   → Bank transfer / virtual account (Indonesia)
   → Card (secondary, not primary)
        ↓
E-wallet redirect flow
   → User redirected to wallet app (or in-app redirect via deep link)
   → Confirms payment in wallet interface
   → Returns to product automatically (callback URL)
   → Credits loaded on successful callback confirmation
        ↓
Failure handling
   → If redirect fails or user abandons: clear "Your payment did not complete" state
   → Retry option immediately available
   → No partial credit loading on failed transactions
```

The e-wallet redirect flow must handle network interruptions gracefully. In SEA mobile environments on 4G connections, redirect failures are common enough to require explicit "payment did not go through — try again" states rather than ambiguous loading screens.

---

*Last updated: April 2026*
