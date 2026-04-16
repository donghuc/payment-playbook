# Mobile IAP Flow — App Store & Google Play

> Part of the Checkout UX series. See [checkout-ux.md](../checkout-ux.md) for the full index.

---

## Overview

In-App Purchase (IAP) on iOS and Android is structurally different from web checkout. The payment interface is platform-owned — Apple and Google control the UX, the payment methods, and the billing relationship. The developer receives revenue net of platform commission (15–30%) and has no direct visibility into the user's payment method.

For B2C SaaS in Southeast Asia, IAP is often the most practical path to recurring subscription billing because Apple and Google handle local payment method integration (GCash, GoPay, TrueMoney, etc.) that would otherwise require complex gateway integrations.

---

## iOS App Store IAP Flow

### Platform-Managed UX

Apple controls the payment sheet entirely. The developer triggers the purchase; Apple presents the UI.

```
[User taps "Subscribe" or "Upgrade" in your app]
          │
          ▼
[Your app calls StoreKit API]
  product = try await Product.products(for: ["com.yourapp.pro.monthly"])
  result = try await product.purchase()
          │
          ▼
[Apple's native payment sheet appears]
  ┌────────────────────────────────┐
  │   Subscribe to Pro             │
  │                                │
  │   Your App                     │
  │   Pro Monthly                  │
  │   $9.00/month                  │
  │   Auto-renewable subscription  │
  │                                │
  │   ⓘ The subscription will     │
  │   automatically renew unless   │
  │   cancelled at least 24 hours  │
  │   before the end of the period.│
  │                                │
  │   [Confirm with Face ID]       │
  │   [Cancel]                     │
  └────────────────────────────────┘
          │
          ▼
[User authenticates: Face ID / Touch ID / Apple ID password]
          │
          ├── Success → StoreKit returns Transaction
          │
          └── Cancelled → Return to your app's upgrade screen
          │
          ▼
[Your app processes StoreKit Transaction]
  ├── Verify transaction with App Store Server API
  ├── Update subscription state in your backend
  └── Unlock features
          │
          ▼
[Your app shows confirmation]
  └── Custom confirmation screen (Apple's sheet closes)
      ├── "You're now on Pro"
      ├── Features unlocked
      └── CTA: "Get started" → product
```

### StoreKit 2 (iOS 15+, recommended)

```swift
// Product loading
let products = try await Product.products(for: productIDs)

// Purchase
let result = try await product.purchase()

switch result {
case .success(let verification):
    let transaction = try verification.payloadValue
    await transaction.finish()
    // Update your backend: user is now subscribed
case .userCancelled:
    // User tapped Cancel — no action needed
case .pending:
    // Purchase requires parental approval (Ask to Buy)
    // Show "pending" state; complete when approved
}

// Listen for transaction updates (renewals, cancellations)
for await update in Transaction.updates {
    // Handle subscription lifecycle events
}
```

### App Store Server Notifications

Apple sends server-to-server notifications for subscription lifecycle events. Configure the URL in App Store Connect:

```
Key events to handle:
  SUBSCRIBED          → Initial purchase / resubscription
  DID_RENEW           → Successful renewal
  DID_FAIL_TO_RENEW   → Failed renewal (billing issue)
  EXPIRED             → Subscription expired after grace period
  DID_CHANGE_RENEWAL_STATUS → User cancelled (will expire at period end)
  REFUND              → Apple issued a refund
  GRACE_PERIOD_EXPIRED → Grace period ended without payment recovery
```

These notifications are your source of truth for subscription state on iOS, equivalent to Stripe webhooks on web.

### Free Trial via App Store

App Store supports introductory offers — free trials before the first charge:

```swift
// Check if user is eligible for introductory offer
if product.subscription?.isEligibleForIntroOffer == true {
    // User has never subscribed to this product — show trial offer
    // "Free for 14 days, then $9/month"
} else {
    // User previously subscribed — show standard price
}
```

Free trials on App Store are automatically managed by Apple — no card charge at trial end, standard Apple cancellation flow applies.

---

## Google Play IAP Flow

### Platform-Managed UX

Google Play Billing Library handles the payment bottom sheet:

```
[User taps "Subscribe" in your app]
          │
          ▼
[Your app calls Play Billing Library]
  billingClient.launchBillingFlow(activity, billingFlowParams)
          │
          ▼
[Google's native billing bottom sheet appears]
  ┌────────────────────────────────┐
  │   Subscribe                   ↓│
  │                                │
  │   Pro Monthly — $9.00/month   │
  │                                │
  │   [GoPay]    ← SEA local      │
  │   [Credit card]                │
  │   [Google Pay]                 │
  │                                │
  │   Renews monthly. Cancel       │
  │   anytime in Google Play.      │
  │                                │
  │   [Subscribe]                  │
  └────────────────────────────────┘
          │
          ▼
[User selects payment method and confirms]
          │
          ├── Success → PurchasesUpdatedListener fires
          │
          └── Cancelled → onPurchaseError(USER_CANCELED)
          │
          ▼
[Your app acknowledges purchase]
  billingClient.acknowledgePurchase(...)
  // Critical: must acknowledge within 3 days or Google refunds
          │
          ▼
[Verify with Google Play Developer API]
  GET /androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}
          │
          ▼
[Update subscription state in your backend]
          │
          ▼
[Your app shows confirmation]
```

### Google Play Real-Time Developer Notifications (RTDN)

Configure via Google Cloud Pub/Sub for server-to-server subscription events:

```
Key events:
  SUBSCRIPTION_PURCHASED      → New subscription
  SUBSCRIPTION_RENEWED        → Successful renewal
  SUBSCRIPTION_IN_GRACE_PERIOD → Payment failed; grace period started
  SUBSCRIPTION_ON_HOLD        → After grace period; subscription paused
  SUBSCRIPTION_CANCELED       → User cancelled
  SUBSCRIPTION_EXPIRED        → Subscription ended
  SUBSCRIPTION_RESTARTED      → User re-subscribed after cancellation
  SUBSCRIPTION_REVOKED        → Purchase revoked (refund / fraud)
```

### Google Play SEA Local Payment Methods

Google Play's biggest advantage for SEA: it accepts local payment methods natively in each country:
- **Indonesia:** GoPay, OVO, Dana, bank transfers
- **Philippines:** GCash, over-the-counter
- **Thailand:** TrueMoney Wallet, PromptPay
- **Malaysia:** Touch 'n Go, online banking
- **Vietnam:** local bank cards, e-wallets (expanding)

Users who subscribed via a local wallet method are managed entirely by Google — you receive the subscription state notification; Google handles the payment method relationship.

---

## Subscription Management — Platform vs. Self-Managed

A critical architectural decision: where does your subscription state live?

### Platform-Only (simpler, limited control)
App Store and Google Play manage subscription state entirely. Users manage subscriptions via platform settings (iOS: Settings → Apple ID → Subscriptions; Android: Play Store → Subscriptions).

**Advantages:**
- No subscription management UI to build
- Platform handles billing, retries, dunning

**Disadvantages:**
- No visibility into user's payment method
- Cannot offer promotions or custom pricing outside platform
- No cross-platform subscription (iOS subscriber can't access on web)
- Platform commission on all revenue

### Cross-Platform Subscription (recommended for SaaS)
Your backend is the source of truth. IAP transactions are verified and recorded in your database. Web checkout (Stripe/Xendit) and mobile IAP are both inputs to the same subscription state.

```
            IAP (iOS)
                │ StoreKit receipt verified
                ▼
    ┌───────────────────────┐
    │   Your Subscription   │
    │       Database        │──── Drives access control
    └───────────────────────┘
                ▲
                │ Stripe webhook
            Web checkout (Stripe)
```

**Access control always reads from your database:**
```python
def has_active_subscription(user_id):
    subscription = db.subscriptions.get(user_id=user_id)
    return subscription and subscription.status == 'active'
```

Never call the App Store or Play Store API in real-time for access decisions — it is slow and creates a dependency on external service availability.

---

## Your App's Upgrade Screen — Pre-IAP UX

Before triggering the platform's payment sheet, your app shows its own upgrade screen. This is your opportunity to communicate value before Apple or Google takes over.

```
┌────────────────────────────────────┐
│     Unlock Pro                     │
│                                    │
│  ✓ [Feature 1 — specific benefit] │
│  ✓ [Feature 2 — specific benefit] │
│  ✓ [Feature 3 — specific benefit] │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  Monthly     Annual          │  │
│  │  $9/mo    $7.50/mo  Save 17% │  │
│  └──────────────────────────────┘  │
│                                    │
│  [Start free trial — 14 days]      │← Primary CTA
│  [Not now]                         │← Visible; no guilt-trip copy
└────────────────────────────────────┘
```

**Design principles for the in-app upgrade screen:**
- Feature benefits over feature names — "Write 3x faster with AI" not "AI writing assistant"
- Annual shown as per-month equivalent — "$7.50/month" not "$90/year" as the primary display
- Free trial CTA is primary on first exposure; direct subscribe on return visits
- Dismiss option always visible — forcing the user through the screen creates resentment
- No full-screen modals that block all interaction — use a sheet or dedicated screen

---

## Handling the "Web Checkout Loophole"

The "web checkout loophole" refers to directing mobile users to subscribe via your web product rather than IAP, to avoid the platform commission. Policy and legality by platform:

### Apple App Store (as of 2025–2026)
Following court decisions (Epic v. Apple, 2021) and EU Digital Markets Act enforcement (2024), Apple now permits apps in the EU to include links to external websites for purchases. Outside the EU, Apple's guidelines still restrict directing users away from IAP in many circumstances. Apple has implemented a "link-out" entitlement for select regions.

**Practical approach:**
- In the EU: You can include a "Subscribe on web — save on fees" link with proper disclosure
- Outside EU: Do not include in-app links to web checkout without confirming current App Store guidelines
- Always check the most current Apple Developer guidelines — this policy is actively evolving

### Google Play
Google has historically been less restrictive than Apple. Google Play allows apps to inform users of alternative purchase methods and include links to web checkout. Google Play's User Choice Billing program also allows some apps to offer alternative billing systems alongside Google Play Billing.

**Practical approach:**
- Android: Can reasonably include "Subscribe on our website" link with appropriate disclosure
- Still subject to Google Play policy review — confirm for your specific app category

**Economics of the decision:**
Platform commission is 15% (after first year) to 30% (year 1 for most apps). If a user subscribes annually at $90, the platform keeps $13.50–27.00. At 10,000 subscribers, this is $135,000–$270,000/year. The web checkout path recovers this margin at the cost of user friction (requiring browser redirect, separate account/login).

For SEA markets specifically: the web checkout path may actually reduce conversion because local payment method support via IAP (GoPay, GCash, etc.) is better than most direct integrations. Don't assume web checkout is always better — test it.

---

## Subscription Management UI (In-App)

Regardless of whether users subscribed via IAP or web, your app should have a self-serve subscription management screen.

```
Account → Subscription

┌─────────────────────────────────────┐
│  Your Plan: Pro Monthly             │
│  Next renewal: May 28, 2026         │
│  $9.00/month                        │
│                                     │
│  [Upgrade to Annual — Save 17%]     │← Upgrade CTA always visible
│  [Manage payment method]            │← Links to platform settings if IAP
│  [Cancel subscription]              │← Self-serve; always accessible
│                                     │
│  Subscribed via: App Store          │← Transparency
│  To manage billing, go to:          │
│  Settings → Apple ID → Subscriptions│← Platform management link
└─────────────────────────────────────┘
```

**IAP subscription management important note:** For subscriptions managed by App Store or Google Play, you cannot modify the subscription directly — you must direct the user to platform settings for cancellation and payment method changes. Hiding or obscuring this path is a dark pattern and violates platform guidelines.

---

*Last updated: April 2026*
