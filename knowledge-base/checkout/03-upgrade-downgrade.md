# Upgrade & Downgrade Flows

> Part of the Checkout UX series. See [checkout-ux.md](../checkout-ux.md) for the full index.

---

## Upgrade Flows

### Tier Upgrade (e.g., Starter → Pro)

The tier upgrade is a positive revenue event. The flow should be fast, clear, and proportionately celebratory. Every unnecessary step between "I want to upgrade" and "I'm on the new plan" costs conversion.

```
[Upgrade trigger: in-product CTA / settings / pricing page]
          │
          ▼
[Upgrade Confirmation Modal or Page]
  ├── Current plan → New plan (visual delta, not just text):
  │     "Upgrading from Starter to Pro"
  ├── Feature delta summary (what's newly unlocked):
  │     "You're gaining: Unlimited projects, AI features, Priority support"
  ├── Price and billing summary:
  │     "New charge today: $4.50 (prorated for remaining 15 days this cycle)"
  │     "Then $9.00/month from May 28 onwards"
  │     ── OR ──
  │     "New price applies from your next billing date: May 28"
  │     (depending on proration setting)
  ├── Payment method:
  │     "Charged to card ending 4242"
  │     [Change payment method] (link, not primary)
  └── CTA: "Upgrade to Pro" (single, clear)
          │
          ▼
[Processing — 1–3 seconds]
          │
          ▼
[Confirmation]
  ├── "You're now on Pro" (in-context, not full page reload if modal)
  ├── Features unlocked immediately
  ├── "Explore [specific new feature]" → deep link
  └── Next billing date confirmed
```

**Proration — two approaches:**

*Immediate proration (recommended):*
Charge the prorated difference today. New features unlock immediately. The user pays for what they use from the moment of upgrade.
```
"You'll be charged $4.50 today (15 days remaining × $0.30/day)"
"Then $9.00/month from May 28"
```

*Next-cycle billing:*
No charge today. New plan activates at the start of next billing cycle. Features may or may not unlock immediately (product-specific decision).
```
"Pro features will be available from May 28"
"You'll be charged $9.00 on May 28"
```

Immediate proration with instant feature access is generally the better UX — the user gets what they paid for immediately. Next-cycle billing creates an awkward gap between "I upgraded" and "I have Pro features."

### Monthly → Annual Upgrade

This is a billing cycle change, not a feature tier change. The framing should emphasise savings, not commitment.

```
[Trigger: in-product prompt / settings / promotional email]
          │
          ▼
[Annual Upgrade Prompt]
  ├── Savings framing (lead with benefit, not price):
  │     "Switch to annual and save $18/year"
  │     "That's 2 months free"
  ├── Concrete charge shown:
  │     "You'll be charged $90.00 today"
  │     "Your next renewal: April 28, 2027"
  ├── Proration of remaining monthly cycle:
  │     "We'll credit your $4.50 remaining monthly balance"
  │     "Net charge today: $85.50"
  │     ── OR ──
  │     "Annual billing starts at your next renewal (May 28)"
  │     "No charge today"
  │     (Simpler but delays the savings — less compelling)
  └── CTA: "Switch to annual — save $18"
          │
          ▼
[Processing]
          │
          ▼
[Confirmation]
  ├── "You're now on annual billing"
  ├── "Next renewal: April 28, 2027"
  ├── Receipt emailed
  └── No "features unlocked" message (no feature change — just billing cycle)
```

**Best timing to surface the annual upgrade prompt:**
- 2–3 months after monthly subscription starts (habit formed, churn risk lower)
- After a positive product usage event (just completed a workflow, hit a milestone)
- Black Friday / year-end promotional period
- On the renewal reminder email ("Switch to annual before your next renewal and save")

---

## Downgrade Flows

Downgrade is a loss-mitigation flow. The goal is to retain the user at a lower tier rather than losing them to cancellation. Every design decision should reduce unnecessary friction while remaining honest and non-manipulative.

### Tier Downgrade (e.g., Pro → Starter)

```
[User navigates to Account → Subscription → Change plan]
          │
          ▼
[Downgrade Confirmation Page / Modal]
  ├── Feature loss summary (specific, not alarming):
  │     "On Starter you'll lose access to:"
  │     "• Unlimited projects (limit: 3)"
  │     "• AI features"
  │     "• Priority support"
  │     (Show what they lose, but frame it factually — not designed to guilt)
  │
  ├── What they keep (important for trust):
  │     "You'll still have access to:"
  │     "• Core features"
  │     "• All your existing data (preserved, accessible on Starter)"
  │
  ├── Timing:
  │     "Starter plan begins on your next billing date: May 28"
  │     "Pro features remain active until then"
  │
  ├── Retention offer (optional — use strategically):
  │     "Before you go — stay on Pro for $6/month for 3 months"
  │     (Discount offer — see retention section below)
  │
  ├── Reason prompt (optional, 1 question):
  │     "Why are you changing plans? (optional)"
  │     [Too expensive] [Not using Pro features] [Taking a break]
  │     [Switching products] [Other]
  │
  └── CTAs:
        [Downgrade to Starter]   ← Primary (confirm)
        [Keep Pro]               ← Secondary (cancel)
```

**Critical:** The "Keep Pro" option must be clearly visible. A downgrade confirmation that makes "stay on current plan" hard to find is a dark pattern.

**Data preservation messaging is essential.** Users downgrading are often worried about losing their work. Explicitly confirming "your data is preserved" prevents both support contacts and the user abandoning the downgrade process due to anxiety.

### Downgrade Execution Timing

**End of billing cycle (standard):**
The downgrade is scheduled; Pro access continues until the current billing period ends. The user is not charged again for Pro. Starter billing begins on the next cycle.

This is the correct approach for most SaaS products. Immediate downgrade (losing Pro features the moment the user confirms) is hostile UX — the user has paid for Pro until the end of the cycle.

```
User confirms downgrade on April 14
Pro access continues through May 28 (end of billing period)
Starter plan begins May 28
Starter billing begins May 28
```

**Immediate downgrade (rare, specific use cases):**
Only appropriate when the user is initiating a downgrade as part of a plan change that gives them an immediate refund credit. Even then, communicate the timing explicitly.

### Annual → Monthly Downgrade

A user on annual billing who wants to switch to monthly is essentially requesting a partial refund — they paid for a year and want to exit early.

```
[User initiates annual → monthly switch]
          │
          ▼
[Downgrade Confirmation]
  ├── Current situation:
  │     "You're on Annual Pro — $90/year, renews April 28, 2027"
  │
  ├── Options presented:
  │     Option A: "Switch to monthly at next renewal"
  │       "Your annual plan continues until April 28, 2027"
  │       "From April 28, you'll be billed $9.00/month"
  │       "No refund — you've already paid for the full year"
  │
  │     Option B: "Switch to monthly immediately"
  │       "You'll lose access to [X months remaining] of your annual plan"
  │       "Refund: $[calculated remaining value]"
  │       "Monthly billing starts today at $9.00/month"
  │       (Only offer this if your refund policy supports it)
  │
  └── CTA: "Switch to monthly at renewal" (Option A recommended as default)
```

**Refund policy for annual-to-monthly mid-cycle:** Varies by business and jurisdiction. EU consumer protection law may entitle users to a prorated refund if they cancel within a certain window. Clearly state your refund policy on the confirmation screen.

---

## Retention Interstitials

Retention interstitials are optional screens or offers shown between "I want to downgrade/cancel" and "confirmed." When designed honestly, they can retain a meaningful percentage of would-be churners. When designed manipulatively, they create resentment.

### Legitimate Retention Tactics

**1. Pause option**
```
"Before you downgrade — need a break?"

Take a break instead of downgrading:
[Pause for 1 month — free] → subscription pauses, no charge next month
[Pause for 3 months — free] → subscription pauses for 3 months

"Your Pro features return automatically when your pause ends."
[Or continue with downgrade →]
```

Pause is most effective for users who are downgrading due to temporary financial pressure or low recent usage — they intend to return, not to leave permanently. Pause keeps them as active subscribers with minimal revenue sacrifice (one month forgone vs. full churn).

**2. Targeted discount**
```
"Stay on Pro for less?"

We can offer you Pro at $5/month for the next 3 months.
After 3 months, your price returns to $9/month.

[Accept — $5/month for 3 months]
[No thanks — continue to Starter]
```

**Important constraints on discount offers:**
- Show discount offers to users who are downgrading, not to users who simply open the downgrade flow
- Offer once per downgrade event — not on every page view
- Be honest about the offer terms (what happens after 3 months)
- Do not show the discount as a "special" offer if it is routinely shown to all downgraders

**3. Feature discovery**
For users downgrading due to "not using Pro features," show them what they have that they haven't tried:
```
"You haven't tried [AI features] yet — that's included in your Pro plan."
[Explore AI features] [Continue to Starter]
```

This is legitimate if it's genuinely informative — showing the user something of real value they've missed, not creating a guilt trip.

### Dark Patterns to Avoid

| Pattern | Problem |
|---|---|
| "Are you sure you want to leave? You'll lose everything." | Exaggerates loss to manipulate |
| Making "Keep Pro" button tiny / grey / hard to find | Obscures the user's easy exit |
| Confirmation of confirmation ("Are you really sure?") | Creates friction through repetition |
| Showing the discount offer 3 times in a row | Harassment |
| "Your teammates will lose access" (when user has no teammates) | Fabricated social pressure |
| Requiring a phone call to downgrade | Hostile retention; illegal in some EU jurisdictions |

---

## Post-Downgrade State

After downgrade is confirmed:

```
Email notification (sent immediately):
  Subject: "Your plan change is confirmed"
  ├── "You're switching to Starter on May 28"
  ├── "Pro features remain active until then"
  ├── "Here's what's changing: [specific feature list]"
  ├── "Your data is safe — [specific data preservation promise]"
  └── "Changed your mind? Upgrade back anytime: [link]"

In-product (from May 28):
  ├── First login post-downgrade: one-time informational modal
  │     "You're now on Starter"
  │     "Here's what's available to you" (positive framing)
  │     "Upgrade anytime" (CTA, not dominant)
  ├── Locked features show lock icon / upgrade prompt inline
  └── No persistent "you're on Starter" banner (don't rub it in)
```

---

*Last updated: April 2026*
