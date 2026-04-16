# Subscription Lifecycle Management

> Part of the Post-Payment Strategy series. See [post-payment-strategy.md](../post-payment-strategy.md) for the full index.

---

## Overview

Subscription lifecycle management covers everything that happens to a subscription between acquisition and final cancellation — pauses, holds, plan changes, reactivations, and transitions. Doing this well reduces voluntary churn and builds user trust; doing it poorly creates customer service escalations and regulatory exposure.

The subscription state machine is the core concept: a subscription exists in one of several defined states, and transitions between states must be explicitly handled in both the backend and the UX.

---

## Subscription State Machine

```
                    ┌──────────────┐
                    │   TRIALING   │
                    │  (free trial │
                    │  active)     │
                    └──────┬───────┘
                           │ trial ends / user converts
                           ▼
┌──────────┐  upgrade  ┌──────────┐  renewal fails  ┌──────────────┐
│  FREE    │◄──────────│  ACTIVE  │────────────────►│  PAST_DUE    │
│  (no sub)│           │          │                 │  (in grace   │
│          │──────────►│          │◄────────────────│  period)     │
└──────────┘ subscribe └────┬─────┘  payment update └──────┬───────┘
                            │          succeeds             │
                            │ user pauses                   │ extended non-payment
                            ▼                               ▼
                    ┌──────────────┐               ┌──────────────┐
                    │   PAUSED     │               │  SUSPENDED   │
                    │  (access     │               │  (access     │
                    │  maintained, │               │  blocked,    │
                    │  no billing) │               │  recoverable)│
                    └──────┬───────┘               └──────┬───────┘
                           │ pause ends /                  │ 30 days no recovery
                           │ user resumes                  ▼
                           └──────────────────────►┌──────────────┐
                                     reactivation  │  CANCELLED   │
                                                   │  (ended)     │
                                                   └──────────────┘
```

### State Definitions

| State | Access | Billing | User Action | Recovery Path |
|-------|--------|---------|-------------|---------------|
| Trialing | Full (paid-tier features) | None until trial ends | None required | — |
| Active | Full | Billing on cycle | — | — |
| Past Due | Full (grace period) | Retrying payment | Prompted to update | Update payment method |
| Paused | Full or limited (policy) | No billing during pause | Initiated by user | Auto-resume or manual |
| Suspended | Blocked | No billing | Prompted to update | Update payment method |
| Cancelled | Free tier / none | None | Cancellation confirmed | Resubscribe |

---

## Subscription Pausing

### What Pause Is For

A pause is a temporary stop to billing (and optionally access) without cancelling the subscription. It is a retention tool for users who need to stop paying temporarily but intend to return.

Use cases where pause is the right offer:
- User is travelling and won't use the product for a month
- User is going through a financially tight period
- User uses the product seasonally (e.g., a tool for annual tax season)
- User is taking a sabbatical or parental leave

**Pause is not appropriate for:** users who have not used the product in 60+ days and are clearly disengaged. Offering them a pause just delays the inevitable cancellation while consuming your pause offer budget.

### Pause Mechanics

**Option A — Billing pause, access maintained:**
No charges during the pause period. User retains full access. Subscription resumes automatically on a scheduled date.

```
Monthly Pro subscriber: $9/month
Pauses for 1 month on May 1.
Next charge: June 1 (skips the May 1 charge).
Pro access: maintained throughout pause.
```

This is the most user-friendly pause and the best retention approach. The cost is one forgone monthly charge — far less than the cost of the user cancelling and requiring re-acquisition.

**Option B — Full pause (billing and access):**
No charges. Access also paused. Used when the product's value is tied entirely to consumption (e.g., a usage-based tool where giving free access during pause has direct cost).

```
User pauses for 2 months.
No charges for 2 months.
No access for 2 months.
Resume: access and billing restart.
```

Less retention-friendly — users on full pause may forget they subscribed and cancel when reminded.

### Implementing Pause in Stripe

```python
# Pause collection (billing pause — Stripe Billing feature)
stripe.Subscription.modify(
    subscription_id,
    pause_collection={
        'behavior': 'keep_as_draft',  # or 'mark_uncollectible' or 'void'
        'resumes_at': int(resume_date.timestamp())  # Unix timestamp
    }
)

# Resume manually (before scheduled resume date)
stripe.Subscription.modify(
    subscription_id,
    pause_collection=''  # empty string removes the pause
)
```

**Stripe's `pause_collection` behaviours:**
- `keep_as_draft` — invoices are created but not sent; charges accumulate as draft
- `mark_uncollectible` — invoices are created and marked uncollectible (revenue not counted)
- `void` — invoices are voided; no record in revenue

For a user-friendly pause (skip the charge entirely), use `void` or `mark_uncollectible`. `keep_as_draft` is not appropriate — it results in a large catch-up charge at resume, which is hostile UX.

### Pause Duration Limits

Recommend offering specific pause durations (1 month, 3 months) rather than open-ended pauses. Indefinite pauses that never resume create zombie subscriptions that inflate your active subscriber count.

```
Maximum pause duration: 3 months (recommended)
After 3 months: subscription resumes automatically
  → If payment succeeds: subscription reactivated
  → If payment fails at resume: enter dunning sequence
  
Email reminder 7 days before resume:
  Subject: "Your [Product] pause ends in 7 days"
  "Your Pro subscription will resume on [date]."
  "Amount: $9.00 on [date]."
  [Change resume date] [Cancel instead]
```

### Pause UX Flow

```
[User navigates to: Account → Subscription → Pause]
          │
          ▼
┌─────────────────────────────────────────────────┐
│  Take a break from Pro                          │
│                                                 │
│  Pause your subscription — no charge while      │
│  paused. Pro access continues.                  │
│                                                 │
│  ○  Pause for 1 month  (resumes [date])         │
│  ○  Pause for 3 months (resumes [date])         │
│                                                 │
│  [Pause subscription]                           │
│  [Cancel instead →]  ← Offer this; some users  │
│                         genuinely want cancel   │
└─────────────────────────────────────────────────┘
          │
          ▼
[Pause confirmed]
  "Your Pro subscription is paused."
  "It resumes on [date]. We'll remind you 7 days before."
  "Resume early at any time: Account → Subscription."
  [Resume early →] [Continue]
```

---

## Subscription Holds

A hold is an administratively-initiated pause — applied by your system, not the user. Appropriate uses:

- **Fraud review hold** — suspicious activity detected; subscription placed on hold while reviewed
- **Dispute hold** — a chargeback or dispute filed; subscription held until resolved
- **Compliance hold** — regulatory requirement in a specific market
- **Account verification hold** — platform identity verification required

Holds differ from pauses: the user did not request them, and the communication must be clear about why the hold was placed and how to resolve it.

```
Hold notification email:
  Subject: "Your [Product] account has been temporarily placed on hold"
  
  Body:
    "We've temporarily placed your account on hold while we
     [review recent activity / resolve a payment dispute / verify
     your account information]."
    
    "Your access to [Product] is [maintained / paused] during this period."
    
    "This is typically resolved within [X days]."
    
    "If you believe this is an error, contact us: [email / chat]"
```

Do not hold accounts without a clear communication path for the user to understand and resolve the hold.

---

## Reactivation Flows

### Reactivation After Cancellation (Voluntary)

A user who cancelled voluntarily is the most valuable reactivation target — they know the product and chose it before.

```
[User navigates to Account → Subscription (on free tier post-cancel)]
          │
          ▼
┌─────────────────────────────────────────────────┐
│  Welcome back to Pro                            │
│                                                 │
│  [Visual plan comparison: Free vs Pro]          │
│                                                 │
│  Your previous plan: Pro Monthly ($9/month)     │
│  Last active: [date]                            │
│                                                 │
│  All your [projects / data] are preserved.      │
│                                                 │
│  ┌─────────────────┐  ┌─────────────────────┐  │
│  │  Monthly        │  │  Annual             │  │
│  │  $9/month       │  │  $7.50/month        │  │
│  │                 │  │  Save $18/year      │  │
│  └─────────────────┘  └─────────────────────┘  │
│                                                 │
│  [Resubscribe — Pro Monthly]                    │
│  [Switch to Annual — Save $18]                  │
└─────────────────────────────────────────────────┘
```

**Pre-fill payment method:** If the user's previous payment method is still valid (Stripe stores it), pre-fill it. Don't make them re-enter card details to resubscribe.

**Reactivation discount:** For users who cancelled more than 60 days ago, a reactivation offer ("First month back at $5") can be effective. For users who cancelled recently (< 30 days), a discount may not be needed and sends the wrong signal.

### Reactivation After Suspension (Involuntary)

A suspended user (payment failure) is still willing to pay — they're different from a voluntary canceller. The reactivation flow must be fast and frictionless.

```
[User logs in — hit with full paywall due to suspension]
          │
          ▼
┌─────────────────────────────────────────────────┐
│  Your Pro access is paused                      │
│                                                 │
│  We weren't able to process your payment.       │
│  Update your payment method to restore access   │
│  immediately.                                   │
│                                                 │
│  [Card ending 4242 — failed]                    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │  [New payment method form]              │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  We'll charge $9.00 and restore access now.    │
│                                                 │
│  [Restore access]                               │
└─────────────────────────────────────────────────┘
```

Suspended users should not need to navigate — bring the payment update form directly to them on login, in context.

---

## Plan Changes at Scale

For products with multiple tiers, managing plan changes cleanly at scale requires careful database architecture and clear UX.

### Subscription State in Your Database

Regardless of gateway, your subscription state should be the source of truth. Do not query Stripe / Xendit in real-time for access decisions.

```sql
-- Core subscription table
CREATE TABLE subscriptions (
    id              UUID PRIMARY KEY,
    user_id         UUID NOT NULL REFERENCES users(id),
    
    -- Current state
    status          VARCHAR(20) NOT NULL,
    -- active | trialing | past_due | paused | suspended | cancelled
    
    plan_id         VARCHAR(50) NOT NULL,
    -- e.g. 'pro_monthly', 'pro_annual', 'starter_monthly'
    
    -- Billing
    gateway         VARCHAR(20) NOT NULL,
    -- stripe | xendit | apple_iap | google_play
    
    gateway_subscription_id VARCHAR(100),
    -- Stripe subscription ID / Xendit subscription ID / etc.
    
    current_period_start    TIMESTAMP WITH TIME ZONE,
    current_period_end      TIMESTAMP WITH TIME ZONE,
    
    -- Plan change scheduling
    scheduled_plan_id       VARCHAR(50),
    -- Plan change scheduled for next billing cycle
    
    scheduled_change_at     TIMESTAMP WITH TIME ZONE,
    
    -- Pause
    paused_at               TIMESTAMP WITH TIME ZONE,
    pause_resumes_at        TIMESTAMP WITH TIME ZONE,
    
    -- Cancellation
    cancel_at_period_end    BOOLEAN DEFAULT FALSE,
    cancelled_at            TIMESTAMP WITH TIME ZONE,
    
    -- Metadata
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Handling Scheduled Plan Changes

When a user downgrades (e.g., Pro → Starter, to take effect at next billing cycle), your system needs to track the pending change and execute it on billing cycle end:

```python
# Schedule a plan downgrade at period end
def schedule_downgrade(user_id, new_plan_id):
    subscription = db.subscriptions.get(user_id=user_id)
    
    # Update Stripe to switch plan at period end
    stripe.Subscription.modify(
        subscription.gateway_subscription_id,
        items=[{
            'id': subscription.stripe_item_id,
            'price': new_plan_price_id  # The new plan's price ID
        }],
        proration_behavior='none',  # No proration for period-end changes
        billing_cycle_anchor='unchanged'
    )
    
    # Record pending change in your database
    db.subscriptions.update(
        user_id=user_id,
        scheduled_plan_id=new_plan_id,
        scheduled_change_at=subscription.current_period_end
    )
    
    # Send confirmation email
    send_downgrade_scheduled_email(
        user_id=user_id,
        new_plan_id=new_plan_id,
        effective_date=subscription.current_period_end
    )

# On webhook: invoice.paid or customer.subscription.updated
# Check if scheduled_change_at has passed and execute the plan change
def process_scheduled_changes():
    pending = db.subscriptions.where(
        scheduled_plan_id__is_not_null=True,
        scheduled_change_at__lte=datetime.utcnow()
    )
    for subscription in pending:
        subscription.plan_id = subscription.scheduled_plan_id
        subscription.scheduled_plan_id = None
        subscription.scheduled_change_at = None
        db.subscriptions.save(subscription)
```

---

## Annual Renewal Management

Annual subscriptions require specific handling because the renewal involves a large, predictable charge that users are more likely to dispute or cancel.

### Annual Renewal Reminder Sequence

```
60 days before annual renewal:
  Email: "Your annual plan renews in 2 months"
  Subject: "[Product] Pro Annual — renewing [date] for $90.00"
  Body:
    "Your Pro Annual subscription renews on [date] for $90.00."
    "That works out to $7.50/month — your current rate."
    
    "Want to make changes before renewal?"
    [Switch to monthly] [Review your plan] [Continue annual]
  
  Purpose: Early notice reduces renewal surprises and chargebacks.

30 days before annual renewal:
  Email: "Your annual plan renews in 30 days"
  Subject: "Reminder: [Product] Pro Annual renews [date] — $90.00"
  Body:
    More prominent renewal details.
    CTA: [Manage subscription →]
  
  In-product: Non-blocking informational banner on login.

7 days before annual renewal:
  Email: "Your annual plan renews in 7 days — $90.00"
  In-product: Banner with manage link.

On renewal day (if renewal succeeds):
  Email: Receipt / "Your Pro Annual has renewed"
  Subject: "Receipt: [Product] Pro Annual — $90.00"
  Attach PDF receipt.
  Confirm next renewal date.
```

**Why 60-day and 30-day notices for annual:** Many markets (EU, UK) require adequate advance notice for auto-renewal charges above a threshold. 60 days exceeds all known requirements and significantly reduces "I didn't know this was charging me" disputes.

---

## Gifted and Promotional Subscriptions

### Gifted Subscriptions

When a subscription is funded by a gift or promotion (e.g., "3 months free from a partnership"), it needs lifecycle management at expiry:

```
[Gift or promotional period ends]
          │
          ▼
Email 7 days before:
  "Your complimentary Pro access ends in 7 days"
  "To continue, add a payment method."
  [Continue with Pro →]
  
  Note: This is NOT a dunning email — the user owes nothing.
  They are being invited to continue, not recovered from failure.

Email on expiry day (if no payment method added):
  "Your complimentary Pro access has ended"
  "We hope you enjoyed [Product] Pro."
  "Ready to continue? Your data is preserved."
  [Resubscribe →]
  
Access: Move to free tier (if available).
Data: Preserved per standard data retention policy.
```

---

*Last updated: April 2026*
