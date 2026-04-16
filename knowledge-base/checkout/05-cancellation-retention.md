# Cancellation & Retention Flows

> Part of the Checkout UX series. See [checkout-ux.md](../checkout-ux.md) for the full index.

---

## Overview

Cancellation is the hardest UX challenge in subscription design: you must be honest and frictionless (ethical and legally required in many jurisdictions) while also creating legitimate retention opportunities. The goal is not to trap users — it is to ensure that users who leave are making an informed decision, and that users who might stay with the right offer get that offer.

**Legal context:** Several jurisdictions now require self-serve cancellation paths:
- **US (FTC "Click-to-Cancel" rule, 2024):** Cancellation must be as easy as the original subscription signup. If you signed up online, you must be able to cancel online.
- **EU Consumer Rights Directive:** Right to cancel digital services with clear, accessible process.
- **UK CMA subscription guidance:** Self-serve cancellation required; no phone-only cancellation for online subscriptions.

Any cancellation flow that makes it materially harder to cancel than to subscribe is a dark pattern and carries regulatory exposure in these jurisdictions.

---

## Cancellation Flow — Standard

### Entry Points
- Account Settings → Subscription → Cancel
- Billing page → Cancel subscription
- Help / FAQ → "How do I cancel?" → direct link to cancellation

**All three paths should lead to the same cancellation flow.** Making cancellation hard to find via settings while it's accessible elsewhere creates an inconsistent experience and signals bad faith.

### Flow Diagram

```
[User navigates to cancellation]
          │
          ▼
[Cancellation Page — Step 1: What You'll Lose]
  ├── Plan name and next charge date:
  │     "You're cancelling Pro Monthly"
  │     "Your next charge of $9.00 on May 28 will not occur"
  │
  ├── Feature loss summary (honest, not alarming):
  │     "After May 28, you'll lose access to:"
  │     "• AI features"
  │     "• Unlimited projects (limit: 3 on free)"
  │     "• Priority support"
  │
  ├── What they keep:
  │     "You'll keep access to your [X] projects and all your data"
  │     "Free plan continues — no account deletion"
  │
  ├── Retention offer (optional — show once, honestly):
  │     See "Retention Interstitial" section below
  │
  ├── Cancellation reason (optional, not a gate):
  │     "Help us improve — why are you cancelling? (optional)"
  │     [Too expensive] [Not using it enough] [Missing a feature]
  │     [Switching to another product] [Taking a break] [Other]
  │
  └── CTAs (equal visual weight, clear choice):
        [Cancel subscription]          ← Clear, direct
        [Keep Pro]                     ← Clear secondary option
```

**The equal visual weight principle:** The "Cancel subscription" CTA and the "Keep Pro" CTA should be visually equal — neither should be hidden, greyed out, or styled to discourage clicking. This is both an ethical design principle and a legal requirement under the FTC Click-to-Cancel rule.

```
[User confirms cancellation]
          │
          ▼
[Step 2: Cancellation Confirmed]
  ├── No "Are you REALLY sure?" (unnecessary friction, dark pattern)
  ├── Clear confirmation:
  │     "Your subscription has been cancelled"
  │     "Pro access continues until May 28, 2026"
  │     "After May 28, your account moves to the free plan"
  │
  ├── Data preservation confirmation:
  │     "Your [projects / data / content] is safe — nothing will be deleted"
  │
  ├── Resubscription path clearly visible:
  │     "Changed your mind? You can resubscribe anytime from your account settings"
  │     [Resubscribe — Pro]  ← link, not a dominant CTA
  │
  └── Email confirmation sent immediately:
        Subject: "Your [Product] Pro subscription has been cancelled"
        Confirm cancellation details + access end date
        Data preservation policy
        "We'd love to have you back" with re-subscribe link
```

---

## Retention Interstitials — What's Legitimate

A retention interstitial is a screen shown between "I want to cancel" and "cancellation confirmed." It is legitimate if it presents a genuine alternative. It is a dark pattern if it creates confusion, false urgency, or makes cancellation harder.

### Interstitial 1 — Pause Offer

Most appropriate for: users cancelling due to temporary disuse, financial pressure, or busy periods.

```
┌─────────────────────────────────────────────────────┐
│  Before you go — would a break help?               │
│                                                     │
│  Pause your Pro subscription for 1 or 3 months.    │
│  Your features and data stay exactly as they are.  │
│  Resume anytime — or we'll remind you when the     │
│  pause ends.                                        │
│                                                     │
│  [Pause for 1 month]  [Pause for 3 months]         │
│                                                     │
│  [I still want to cancel →]                        │← Always visible
└─────────────────────────────────────────────────────┘
```

**Show if:** Usage in last 30 days > 0 (user is active but wants to cancel — pause is relevant).
**Don't show if:** Usage = 0 for 60+ days (user has already disengaged — a pause won't help).

### Interstitial 2 — Plan Downgrade Offer

Most appropriate for: users cancelling due to price ("too expensive").

```
┌─────────────────────────────────────────────────────┐
│  A lighter plan might work better                   │
│                                                     │
│  Switch to Starter — free, forever.                 │
│  You'll keep core features and all your data.       │
│                                                     │
│  Or stay on Pro for less:                           │
│  [$5/month for 3 months]  ← if retention discount  │
│                               is offered            │
│                                                     │
│  [Switch to Starter free]                           │
│  [I still want to remove all access →]             │← Only if no free tier
└─────────────────────────────────────────────────────┘
```

**Important:** If you have a free tier, "cancel" should move the user to the free tier — not remove their account. "Cancel subscription" ≠ "delete account." This distinction must be clear in your UX copy and your technical implementation.

### Interstitial 3 — Discount Offer

Most appropriate for: price-sensitive users who haven't received a previous discount.

```
┌─────────────────────────────────────────────────────┐
│  Stay for less                                       │
│                                                     │
│  We can offer you Pro at $5/month for the           │
│  next 3 months.                                     │
│                                                     │
│  After 3 months: $9/month (standard rate).          │
│                                                     │
│  [Accept — $5/month × 3]                            │
│  [No thanks — cancel anyway]                        │← Always visible
└─────────────────────────────────────────────────────┘
```

**Constraints on discount offers:**
- Show only once per cancellation attempt, not repeatedly
- Show only to users who have not received a previous retention discount
- Be fully transparent about the term end price ("after 3 months: $9/month")
- Do not use discount as a default response to all cancellations — devalues the product

### Interstitial 4 — Exit Survey (Lightweight)

Most appropriate for: understanding why users cancel, to inform product and pricing decisions. Not a retention tactic — a data collection moment.

```
┌─────────────────────────────────────────────────────┐
│  Quick question before you go                       │
│                                                     │
│  What's the main reason for cancelling?             │
│  (Takes 10 seconds — helps us improve)              │
│                                                     │
│  ○ Too expensive                                    │
│  ○ Not using it enough                              │
│  ○ Missing a feature I need                         │
│  ○ Switching to a different product                 │
│  ○ Just taking a break                              │
│  ○ Other: [___________]                             │
│                                                     │
│  [Submit and cancel]    [Skip and cancel]           │← Both cancel
└─────────────────────────────────────────────────────┘
```

Both CTAs complete the cancellation — the survey is optional. A user who doesn't want to tell you why they're leaving should not be forced to.

---

## Cancellation for Annual Subscribers

Annual cancellations require different handling because the user has prepaid for the year.

```
[Annual subscriber initiates cancellation]
          │
          ▼
[Annual Cancellation Confirmation]
  ├── Distinguish between two options:
  │
  │   Option A: Cancel at renewal (recommended as default)
  │     "Cancel at next renewal — April 28, 2027"
  │     "You'll have full Pro access until then"
  │     "No charge on April 28"
  │     [Cancel at renewal]
  │
  │   Option B: Cancel immediately (with refund)
  │     "Cancel now and receive a prorated refund"
  │     "Refund amount: $[calculated]"
  │     "Access ends today"
  │     [Cancel immediately]
  │     (Only show if your policy supports prorated refunds)
  │
  └── Default: Option A (cancel at renewal)
      Most users who want to "cancel their annual subscription"
      mean they don't want to be charged again — not that they
      want to lose their remaining paid access today.
```

**The "cancel at renewal" default is critically important for annual subscribers.** Cancelling an annual subscription "immediately" by accident — losing 8 months of remaining paid access — is one of the most common customer service escalations. Always default to "cancel at renewal" and make immediate cancellation an explicit, secondary choice.

---

## Post-Cancellation Offboarding

### Access End Communication

```
Email on the day access ends:
  Subject: "Your [Product] Pro access has ended"
  ├── Confirm plan change: "You're now on the free plan"
  ├── What's still available on free (positive framing)
  ├── Data preservation: "All your [projects / content] is preserved"
  │   (If data is NOT fully preserved on free, state this clearly)
  ├── Resubscription CTA: "Miss Pro? Resubscribe anytime" [link]
  └── Feedback invitation (optional): "Tell us how we could do better" [link]
```

### Re-engagement Sequence (Post-Cancellation)

A measured, non-spammy re-engagement sequence for cancelled users:

```
Week 2: Product update email
  "Here's what's new in [Product]"
  Not a sales email — genuine product news
  If new features were added that address their cancellation reason: highlight them

Month 2: "We miss you" email (one-time)
  "It's been a month — here's what you're missing"
  Show value that has been added since they left
  Offer: "Come back — first month Pro at $5" (optional)

No further promotional emails after this
  (unless they re-engage with the product on the free tier)
```

**Re-engagement email frequency:** The common mistake is over-sending. After cancellation, 2 emails in 60 days is the maximum that doesn't read as harassment. Users who cancelled and opted out of marketing should receive zero re-engagement emails.

---

## Data Retention Policy

Communicate your data retention policy clearly at cancellation and at account downgrade. Ambiguity about whether data will be deleted creates anxiety and support tickets.

**Recommended policy (clearly stated):**
```
"After [30 days / 90 days / 1 year] on the free plan, [specific data types]
created on Pro may become read-only / archived / deleted."

Example:
"Projects created on Pro remain accessible on the free plan.
If your free plan has more than 3 active projects, older projects
will become read-only (not deleted) until you resubscribe."
```

State this at three moments:
1. At the cancellation/downgrade confirmation screen
2. In the cancellation confirmation email
3. In the "access ending" email (if applicable)

**Never delete user data without explicit notice and adequate advance warning.** Even if your terms of service permit it, deleting data without warning generates more negative outcomes than any cost saving from earlier deletion warrants.

---

*Last updated: April 2026*
