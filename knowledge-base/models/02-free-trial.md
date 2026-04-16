# Free Trial (Traditional)

> Part of the Revenue & Paid Models series. See [revenue-models.md](../revenue-models.md) for the full index.

---

## Mechanic

A traditional free trial grants users full or near-full access to the product for a fixed time window — typically 7, 14, or 30 days. A credit card (or other payment method) is captured at signup. At the end of the trial, the user is automatically charged and converted to a paid subscription unless they actively cancel before the deadline.

The conversion trigger is the trial expiry. No action from the user = paid. This is an opt-out model.

There is no free fallback tier. If the user cancels or the trial ends without payment, they lose access entirely.

---

## B2C Reality

### How it fits B2C

The traditional free trial is a commitment funnel, not an acquisition funnel. By requiring payment details upfront, it filters out casual or low-intent users before they enter the product. The users who do sign up are self-selected as higher-intent — they've judged the product worth the friction of providing card details.

This makes the model fundamentally different from freemium in its B2C posture. It trades top-of-funnel breadth for conversion depth. You attract fewer users but convert a much higher proportion of them.

In B2C specifically, the model performs best when:

- The product's core value can be experienced within days, not weeks
- The target market has high credit card adoption and comfort with card-on-file billing
- The product category has established consumer familiarity (streaming, fitness, wellness, software tools)
- Brand trust is sufficient for users to feel safe providing payment details before experiencing the product

In markets like Southeast Asia — where card penetration is lower and digital billing trust is still developing — this model faces meaningful headwinds. A card-capture trial in Vietnam or Indonesia will lose a significant portion of potential users at the payment details step who would have converted through a no-card-required flow.

### Economic standpoint

The free trial economics are more favourable on a per-user basis than freemium, but operate on a narrower funnel:

```
Revenue = Signups × Trial Conversion Rate × ARPU
Cost    = (Signups × Cost per Trial User) + Fixed Costs
```

**Trial conversion rates** for card-capture trials in well-optimised products range from **25–50%**, with a median closer to 25–35% for most B2C SaaS. Top-performing consumer products in established categories (streaming, security software, fitness) can reach 40–50%. The often-cited "40–60%" figure reflects a ceiling, not a typical outcome — if your trial experience is poor or time-to-value is slow, 15–25% is a more realistic expectation. This is still significantly higher than freemium's 2–8%, because card-capture filters for higher-intent users from the start.

**Chargeback risk** is a real economic cost. Users who forget they signed up, or who feel surprised by the charge, generate chargebacks and disputes. High chargeback rates (above 1%) trigger penalties from payment processors and can result in account termination with Stripe, Adyen, or others. This risk is managed through clear pre-charge communication but cannot be fully eliminated.

**CAC impact:** The card-capture requirement raises effective CAC — some percentage of intent users who would have converted are lost at the payment details step. The exact drop-off varies by market, device, and payment method availability, but card-capture signup forms typically convert 15–35% lower than no-card-required equivalents in B2C.

### How it performs in B2C

Traditional free trials perform strongest in B2C categories where:

- The product is well-known and the trial is a proof-of-value confirmation, not a discovery mechanism (streaming services, fitness apps, antivirus software)
- The trial length matches the activation timeline — a 7-day trial for a product that takes 14 days to become habit-forming will underperform
- Email and in-product communication during the trial is well-sequenced — users who receive timely reminders of trial expiry and feature discovery prompts convert at higher rates

The model has seen notable retreat in consumer streaming. Netflix removed its free trial in most markets in 2020–2021, citing abuse and low incremental conversion from trial users vs. direct signup. This reflects a broader B2C trend: as subscription literacy increases, the traditional trial's role as a trust-builder diminishes, and its friction costs become harder to justify.

---

## Real World Examples

**Apple TV+ / Apple One**
New device purchases include a bundled Apple TV+ trial (3–6 months depending on device). Card is on file via Apple ID. Conversion at trial end is passive — the user is charged unless they cancel. Apple's ecosystem lock-in and trusted billing relationship make this frictionless in a way standalone apps cannot replicate. The trial length is unusually long (3 months) because Apple is willing to subsidise acquisition at the hardware margin.

**Headspace (historically)**
Headspace used a 7–14 day free trial with card capture as its primary acquisition model for several years before introducing a more generous free tier. The trial worked because meditation app value (reduced stress, improved sleep) is perceptible within days, matching the trial window. Headspace later moved toward a hybrid approach — adding a limited free tier — reflecting the industry shift toward no-card-required entry.

**Dashlane / 1Password (password managers)**
Premium password managers commonly use 30-day free trials with card capture. The use case is well-understood, the product installs quickly, and value (passwords imported, auto-fill working) is immediate. The 30-day window is long enough to build genuine dependency. Churn after trial tends to be low because data portability friction deters cancellation.

**Adobe Creative Cloud**
Offers 7-day free trials for individual apps with card required. Converts well because the product category (professional creative tools) commands high intent — users signing up have a specific use case in mind. Trial conversion is bolstered by the high switching cost: users who spend a week learning the interface are reluctant to walk away.

**Fitness apps (Peloton, Noom, MyFitnessPal Premium)**
Many fitness and wellness apps use 7–14 day card-capture trials. The category benefits from high motivation at the point of signup (New Year, post-holiday, pre-event). Trial conversion correlates strongly with how quickly the user completes an initial session — apps that get the user exercising or logging food on day one convert significantly better than those with lengthy onboarding.

---

## Trade-offs

**Advantages:**
- High trial-to-paid conversion rate (qualified funnel)
- Predictable revenue — converted users become recurring subscribers immediately
- Lower ongoing infra cost vs. freemium (no large non-paying base)
- Clear, time-bounded conversion event simplifies lifecycle marketing
- Opt-out model creates passive conversion — users who forget to cancel become customers

**Disadvantages:**
- Significant signup friction — card capture at entry reduces top-of-funnel volume
- Trust barrier — unfamiliar brands asking for card details face meaningful user skepticism, especially in SEA
- Chargeback risk from forgotten subscriptions — reputational and financial cost
- No fallback tier — users who don't convert are fully lost, not retained in a free experience
- Trial abuse — some users create multiple accounts to extend trial access
- Effectiveness depends on fast time-to-value — mismatched trial length and activation timeline is a common failure mode
- Increasingly seen as a dated pattern in B2C as freemium and reverse trial have become more prevalent
- Regulatory exposure in some markets — EU and UK consumer protection rules require prominent disclosure of auto-renewal terms; non-compliance carries fines

---

## Best Fits For

- Products with fast, clear, demonstrable time-to-value (value felt within 1–7 days)
- Higher-intent B2C categories: professional tools, security software, creative software, fitness/wellness
- Markets with high card adoption and established subscription culture: Western Europe, Singapore, Australia
- Products with high switching cost post-activation — users who invest time in setup are unlikely to churn
- Established or well-known brands where card-capture trust is not a barrier
- Products where a free tier would cannibalise the paid value proposition (i.e., you can't give away a meaningful slice without undermining conversion)

**Not a good fit for:**
- Price-sensitive, low-card-penetration markets (Indonesia, Vietnam, Philippines)
- Products with slow activation (value takes weeks to surface)
- Early-stage or unknown brands where card-capture creates distrust
- Products with strong viral potential — card-capture trials suppress the top-of-funnel needed to make viral loops effective

---

## UX Flow

The traditional free trial UX is built around three distinct moments: the signup commitment, the trial experience (activation + value delivery), and the conversion event (charge or cancel).

### Phase 1 — Signup & Card Capture

**Goal:** Convert intent into a committed trial start. Minimise friction while being fully transparent about billing terms.

```
Pricing page / Landing page
        ↓
"Start your free trial" CTA
   → Prominent trial length (e.g. "Try free for 14 days")
   → Subtext: "Cancel anytime before [date]. We'll remind you 3 days before."
        ↓
Signup form
   → Email + Password (or social login)
   → No card step yet — confirm identity first
        ↓
Payment details step
   → Card / local payment method form
   → Clear billing disclosure: "You won't be charged until [exact date]"
   → Total amount shown explicitly
   → Trust signals: SSL, payment logos, cancellation policy link
        ↓
Confirmation screen
   → "Your trial starts now"
   → Trial end date stated clearly
   → CTA to begin onboarding
```

**Critical UX principle:** The billing disclosure must be prominent, not buried. Dark patterns (hiding the charge date, obscuring auto-renewal terms) are increasingly regulated and destroy trust when discovered. Lead with transparency — users who feel informed are less likely to churn or file chargebacks.

**Example — well-designed:** Dashlane's trial signup states "Your 30-day free trial begins today. You'll be charged $X on [exact date] unless you cancel." The exact charge date, not just "after 30 days," is the disclosure standard to aim for.

**Example — poorly designed:** Any flow that buries "auto-renews at $X/month" in greyed-out footnote text below the CTA button. This is a dark pattern that increases chargebacks and erodes trust.

---

### Phase 2 — Trial Experience

**Goal:** Drive activation fast, build habit, create switching cost before the trial ends.

The trial experience must be sequenced with urgency — unlike freemium, where the timeline is open-ended, a trial user has a countdown clock running. Every day of the trial that passes without the user experiencing core value is a wasted conversion opportunity.

**Day 0–1: Immediate activation**
```
Post-signup onboarding
   → Personalisation (role, use case, goal) — maximum 3 questions
   → Core feature setup (import data, connect accounts, create first item)
   → First value moment within the session
        ↓
Welcome email
   → Sent within minutes of signup
   → Reinforces the trial start date and end date
   → Links to 1–2 features to explore (not 10)
```

**Day 2–5: Feature discovery**
```
In-product tooltips or guided tours
   → Highlight 2–3 high-value features the user hasn't tried yet
   → Triggered by behaviour, not by timer (if user hasn't used feature X, surface it)
        ↓
Behavioural email sequence
   → "Did you know you can do [X]?" based on actions not yet taken
   → Not a generic newsletter — personalised to their trial behaviour
```

**Day N-3 (3 days before trial ends): Reminder sequence**
```
In-product banner (non-intrusive)
   → "Your trial ends in 3 days"
   → CTA to review plan or upgrade
        ↓
Email reminder
   → Exact charge date, amount, plan name
   → "Manage or cancel your subscription" link — easy to find, not hidden
   → Option to extend trial if warranted (used sparingly for high-intent users)
```

**Day N-1: Final reminder**
```
Email + in-product notification
   → "Your trial ends tomorrow"
   → Summary of what they've used / created during trial (personalised)
   → Value reinforcement: "Here's what you'll keep access to as a [Plan] member"
```

**Key UX principle:** Proactive reminders reduce chargebacks and support requests. Users who feel informed about the charge — even if they convert passively — are less likely to feel deceived. Reminders are not just good ethics; they are economically sound.

---

### Phase 3 — Conversion Event (Charge Day)

**Goal:** Convert passively (users who forgot to cancel and are happy to pay) or actively (users who return to confirm their subscription).

```
Charge day
        ↓
Charge notification email (immediately on charge)
   → "Your [Plan] subscription has started"
   → Receipt with amount, date, and next billing date
   → "Manage subscription" link (clearly accessible)
   → Brief welcome-to-paid message (low-key, not a hard sell)
        ↓
In-product: Welcome to paid experience
   → No dramatic gate changes (user is already using the product)
   → Optional: Surface 1–2 paid-exclusive features they haven't explored
```

---

### Phase 4 — Cancellation During Trial

**Goal:** Retain the user in some form even if they cancel, and understand why.

```
User clicks "Cancel trial"
        ↓
Cancellation confirmation flow
   → Cancellation reason survey (optional, 1 question, max 5 options)
   → Offer to pause instead of cancel (if relevant to product)
   → Offer a downgrade option (if a free tier exists — increasingly common hybrid)
   → Clear confirmation: "Your access continues until [trial end date]"
        ↓
Post-trial end: Access removed
   → Offboarding email: "Your trial has ended"
   → Data retention policy stated clearly
   → Re-engagement CTA: "Come back anytime" with a direct signup link
```

**Important:** If you have or later introduce a free tier, routing trial cancellations to the free tier (rather than full offboarding) dramatically improves re-engagement potential. This is the structural move toward a Reverse Trial or Freemium hybrid.

---

### Handling Failed Payments at Trial Conversion

A specific failure state unique to this model: the card on file is declined when the charge fires at trial end.

```
Charge attempt fails
        ↓
Immediate email notification
   → "We couldn't process your payment"
   → Direct link to update payment method
   → Grace period stated: "Update by [date] to keep access"
        ↓
Grace period (typically 3–7 days)
   → Daily reminder emails
   → In-product banner if user logs in
        ↓
Grace period expires without update
   → Access suspended (not deleted)
   → Final email with re-subscribe option
```

This payment recovery flow is often neglected in early product builds. A failed charge that leads to a silent access removal — without communication — creates a disproportionate support burden and negative brand perception.

---

*Last updated: April 2026*
