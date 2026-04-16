# Web Subscription Checkout Flow

> Part of the Checkout UX series. See [checkout-ux.md](../checkout-ux.md) for the full index.

---

## Overview

The web subscription checkout is the highest-leverage conversion surface in your product. It is the path from "I want this" to "I paid for this." Every design decision on this path has a measurable impact on conversion.

This document covers three entry variants into the checkout flow:
1. **Direct paid signup** — user arrives at pricing page and subscribes immediately
2. **Freemium upgrade** — existing free user upgrades to a paid tier
3. **Reverse trial conversion** — trial user converts after downgrade to free tier

All three share a common payment step but have different entry contexts that require different framing.

---

## Entry Variant 1 — Direct Paid Signup

The user arrives at your pricing page (from marketing, referral, or organic search) and has no existing account.

### Full Flow Diagram

```
[Marketing / Landing page]
          │
          ▼
[Pricing Page]
  ├── Monthly / Annual toggle (Annual default or highlighted)
  ├── Tier cards: Free | Pro ★ | Business
  ├── "Start free trial" or "Get Pro" CTA per tier
  └── "Most popular" badge on anchor tier
          │
          ▼ User clicks paid tier CTA
          │
[Entry Gate Decision]
  ├── Does user have an account?
  │     Yes → Login flow → return to checkout
  │     No  → Continue to signup (below)
          │
          ▼
[Step 1: Account Creation] ← Lightweight; no payment yet
  ├── Email field
  ├── Password (or "Continue with Google / Apple")
  ├── No credit card at this step (for freemium/reverse trial entry)
  │   OR: proceed directly to payment (for card-capture trial)
  ├── Privacy policy checkbox (single, not multiple)
  └── CTA: "Create account"
          │
          ▼
[Step 2: Plan Confirmation] ← Optional if plan already clear from CTA
  ├── Selected plan shown: "Pro — $9/month" or "Pro — $90/year (Save 17%)"
  ├── Monthly / Annual switcher (allow change at this step)
  ├── Trial offer if applicable: "Your 14-day trial starts today"
  └── CTA: "Continue to payment"
          │
          ▼
[Step 3: Payment Details]
  ├── Payment method selector (geo-adapted):
  │     EU:     [Card] [SEPA Direct Debit] [PayPal] [iDEAL if NL] [Bancontact if BE]
  │     SEA:    [Card] [GrabPay] [PayNow if SG] [FPX if MY] [PromptPay if TH]
  │     Global: [Card] [PayPal] [Apple Pay] [Google Pay]
  ├── Apple Pay / Google Pay shown as first option on mobile (if available)
  ├── Card form (if card selected):
  │     Card number | Expiry | CVC
  │     Name on card (optional — reduces friction if removed)
  │     Billing address (required for fraud; use postcode-only where possible)
  ├── Billing disclosure (required, prominent):
  │     "You will be charged $9.00 on [exact date]"
  │     "Your subscription renews automatically. Cancel anytime."
  │     Link to cancellation policy
  ├── EU users — right of withdrawal waiver (required):
  │     "I agree that my subscription begins immediately and waive my
  │      right of withdrawal."
  └── CTA: "Start subscription" / "Start free trial" (not "Submit" or "Pay now")
          │
          ▼ [Payment processing state]
  ├── Immediate visual feedback on CTA press:
  │     Button → loading spinner (disabled)
  │     "Processing your payment…" text
  ├── 3DS challenge (if triggered by issuer):
  │     Handled by Stripe.js / gateway SDK inline
  │     Bank authentication modal appears
  │     User completes biometric/OTP
  │     Returns to checkout on success
  └── Processing: 1–5 seconds typical
          │
          ▼
[Confirmation Screen]
  ├── Success visual (icon, not confetti explosion — proportionate)
  ├── Plan name and price confirmed
  ├── Next billing date shown explicitly
  ├── Account email confirmed
  ├── Receipt: "A receipt has been sent to [email]"
  └── Primary CTA: "Start using [Product]" → direct into product onboarding
      Secondary: "View receipt" → opens invoice PDF or page
```

---

## Entry Variant 2 — Freemium Upgrade (Existing User)

The user is already on the free tier, hits a feature gate or usage ceiling, and upgrades.

### Trigger Points
- Ceiling trigger: user hits usage limit or locked feature
- Intent signal: in-product upgrade banner at behavioural threshold
- Settings page: user navigates to Account → Subscription → Upgrade

### Flow Diagram

```
[In-product trigger: feature gate / banner / settings]
          │
          ▼
[Upgrade Modal or Page]
  ├── Context-aware header:
  │     Ceiling trigger: "Unlock [feature] with Pro"
  │     Settings page: "Upgrade your plan"
  ├── What they get: 3–4 key benefits of Pro (not full feature list)
  ├── Price: "$9/month" or "$90/year — save 17%"
  ├── Monthly / Annual toggle
  └── CTA: "Upgrade to Pro"
          │
          ▼
[Payment Step] ← User is already logged in; no account creation
  ├── If payment method on file:
  │     "Pay with [Card ending 4242]" → one-click confirm
  │     "Use a different payment method" option
  ├── If no payment method on file:
  │     Full payment details form (as above)
  ├── Upgrade summary:
  │     "Upgrading from Free to Pro"
  │     Price and billing date shown
  └── CTA: "Confirm upgrade"
          │
          ▼
[Processing state]
          │
          ▼
[Confirmation]
  ├── "You're now on Pro"
  ├── Features unlocked (2–3 specific features, not full list)
  ├── Next billing date
  └── CTA: "Explore your new features" → deep link into a Pro feature
```

**Inline upgrade (no full-page redirect):**
For ceiling triggers during active product use, the upgrade confirmation should be a modal — not a full page redirect. Sending the user to a new page interrupts their workflow. A modal confirms the upgrade and returns them to exactly where they were.

---

## Entry Variant 3 — Reverse Trial Conversion

The user completed a premium trial, was downgraded to free tier, and is now upgrading.

### Context Differences from Freemium Upgrade
- The user has already experienced premium features — they know what they're getting
- The framing should acknowledge their trial: "Welcome back to Pro" not "Upgrade to Pro"
- The payment step may be their first payment interaction — handle it as a trust-building moment

### Flow Diagram

```
[Upgrade trigger: feature gate in free tier / re-engagement email / settings]
          │
          ▼
[Upgrade Page — Reverse Trial Context]
  ├── Header: "Get back everything you had during your trial"
  ├── Feature summary: "During your trial you used [X, Y, Z] — unlock them again"
  │   (Personalised based on trial usage data if available)
  ├── Price and billing cycle selection
  └── CTA: "Unlock Pro — $9/month"
          │
          ▼
[Payment Step]
  ├── No payment method on file (trial was no-card) → full payment form
  ├── Trust context: "Your data from your trial is safe and will be restored"
  ├── Billing disclosure (as above)
  └── CTA: "Start Pro"
          │
          ▼
[Confirmation]
  ├── "Welcome back to Pro"
  ├── Restore premium access immediately
  ├── Prompt to re-engage with most-used trial feature
  └── Next billing date
```

---

## Payment Step Design — Detailed Breakdown

The payment step is the highest-friction point in checkout. This section documents each component in detail.

### Payment Method Selector

**Desktop layout:**
```
How would you like to pay?

[💳 Card          ]  [🏦 SEPA Direct Debit]
[🅿️ PayPal        ]  [iDEAL              ]   ← shown only for NL users

[▼ More payment options]  ← collapsed; expands to show less common methods
```

**Mobile layout:**
```
[Apple Pay    ]  ← full width, shown prominently if on iOS Safari
[Google Pay   ]  ← full width, shown if on Android Chrome
─────────────────
Or pay with:
[💳 Card  ▼  ]  ← dropdown or tab; full-width input below
[PayPal      ]
```

Apple Pay and Google Pay should always appear as the first, full-width options on mobile. They convert significantly better than card on mobile — no form filling, biometric confirmation, one tap. De-emphasising them in favour of card on mobile is a conversion mistake.

### Card Form Component

```
Card number:    [                    ] [card brand icon auto-detected]
Expiry date:    [MM / YY]
Security code:  [CVC] [?]             ← tooltip explains CVC location
                                       (reduces support contacts)

Country:        [Auto-detected ▼]     ← pre-fill from geo
Postcode:       [        ]            ← postcode-only, not full address
                                          where fraud rules allow
```

**Input behaviour:**
- Card number: auto-spaces in groups of 4 (1234 5678 9012 3456)
- Expiry: auto-advances to CVC field after MM/YY complete
- Card brand detected live from first 6 digits → show brand icon
- Numeric keyboard type on mobile for all numeric fields
- CVC field: mask after entry (show dots), not plain text

**Removing the name field:**
The cardholder name field is required by some acquirers but not all. If your gateway supports name-free card charging, removing this field reduces form length without impacting approval rates in most cases. Test removal — a single field removal can improve completion rate by 3–5%.

### Billing Disclosure Component

This must be visible without scrolling on the payment step:

```
┌─────────────────────────────────────────────────────┐
│  📋 Billing summary                                  │
│                                                      │
│  Pro Monthly                              $9.00/mo   │
│  First charge:                    April 28, 2026     │
│  Renews automatically every month                    │
│                                                      │
│  ✓ Cancel anytime — no cancellation fee              │
│  ✓ Encrypted and secure                              │
└─────────────────────────────────────────────────────┘
```

For EU users, add below this block:
```
By subscribing, I agree that my subscription begins immediately
and I waive my right of withdrawal under the Consumer Rights Directive.
[Checkbox — required]
```

### CTA Copy

CTA copy on the payment confirmation button matters. Guidelines:

| Avoid | Use Instead | Why |
|---|---|---|
| "Submit" | "Start subscription" | "Submit" is form language, not product language |
| "Pay now" | "Start Pro" / "Unlock Pro" | Product-first framing |
| "Complete purchase" | "Start your free trial" (if trial) | Accurate to the actual event |
| "Buy" | "Get Pro" | Less transactional for SaaS |

For free trials specifically, the CTA should reflect the trial — "Start free trial" not "Pay". If a card is being captured but not charged, this should be unambiguous.

### 3DS / SCA Handling

When a card issuer requires Strong Customer Authentication (EU PSD2), Stripe.js handles the challenge inline:

```
[User clicks "Start subscription"]
          │
          ▼
[Gateway detects SCA required]
          │
          ▼
[3DS modal appears over checkout]
  ├── "Complete authentication with your bank"
  ├── Option A: Bank app notification (user taps confirm in their banking app)
  ├── Option B: SMS OTP (user enters code)
  ├── Option C: QR code scan (some banks)
  └── [Stripe.js handles this automatically — no custom implementation needed]
          │
          ▼ On success
[Checkout completes normally]
          │
          ▼ On failure / abandonment
[Return to payment step]
  └── Error: "Authentication was not completed. Please try again or use a different card."
```

**Frictionless 3DS:** For low-risk transactions, issuers may approve the 3DS challenge silently (frictionless flow) — no user action required. Stripe's Radar risk scoring influences this. Lower-risk transactions get frictionless authentication more often.

---

## Confirmation Screen Design

The confirmation screen is underdesigned in most SaaS products. It should accomplish three things:

**1. Confirm what happened (resolve anxiety)**
```
✓  You're all set

    Pro Monthly — $9.00/month
    First charge: April 28, 2026
    Receipt sent to: alex@example.com
```

**2. Set expectation (reduce future confusion)**
```
What happens next:
• Your subscription renews automatically on May 28
• Manage or cancel anytime in Account Settings
• Questions? support@yourproduct.com
```

**3. Direct into the product (capture activation momentum)**
```
[Start using Pro →]          ← Primary CTA — goes to product, not dashboard
[View receipt     ]          ← Secondary
```

The primary CTA should deep-link into a specific feature that is newly unlocked — not the generic home screen. A user who just paid for "AI writing tools" should land on the AI writing tool, not the dashboard. This reduces time-to-first-paid-feature-use, which is a strong predictor of retention.

---

## Annual vs. Monthly — Checkout Toggle Behaviour

When a user toggles between monthly and annual billing at checkout:

```
Price display updates immediately (no page reload)

Monthly selected:
  "Pro — $9.00/month"
  "Billed monthly. Cancel anytime."

Annual selected:
  "Pro — $7.50/month"   ← per-month equivalent shown
  "Billed annually: $90.00/year"  ← actual charge amount shown
  "Save $18 vs. monthly"   ← concrete saving shown
  "Next charge: April 28, 2026 → April 28, 2027"  ← 12-month commitment visible
```

The annual billing disclosure should show both the per-month equivalent AND the actual charge amount. Showing only "$7.50/month" when the actual charge is $90 is misleading — this is the most common annual billing dark pattern and generates the most "I didn't know I was charged $90" support tickets.

---

## Form Validation & Error Handling

### Real-Time Validation (inline, on field blur)
```
Card number:   [4111 1111 1111 1111  ✓]   ← green check on valid
Expiry:        [12/23               ✗]   ← red X on expired date
               "This card has expired"   ← immediate, specific
CVC:           [123                 ✓]
```

### Payment Submission Errors
Never show generic errors. Map gateway error codes to user-actionable messages:

| Gateway Error | User-Facing Message | Suggested Action |
|---|---|---|
| card_declined | "Your card was declined" | "Please try a different card or contact your bank" |
| insufficient_funds | "Your card has insufficient funds" | "Please try a different card or payment method" |
| card_expired | "Your card has expired" | "Please enter a card with a valid expiry date" |
| incorrect_cvc | "The security code you entered is incorrect" | "Please check the 3-digit code on the back of your card" |
| do_not_honor | "Your bank declined this transaction" | "Please contact your bank or try a different card" |
| 3ds_failed | "Authentication was not completed" | "Please try again or use a different payment method" |
| processing_error | "Something went wrong processing your payment" | "Please try again in a moment" |
| wallet_insufficient_balance (SEA) | "Your [wallet] balance is insufficient" | "Please top up your wallet or use a different payment method" |
| wallet_auth_failed (SEA) | "Payment was not confirmed in [wallet] app" | "Please try again and confirm the payment in your [wallet] app" |

**Show errors in context, not at the top of the page.** An error on the card number field should appear below that field, not in a banner at the top. The user's eye is on the field, not the top of the form.

---

## Checkout Performance Requirements

Payment checkout has specific technical performance requirements that directly affect conversion:

- **Page load time:** Checkout page should load in < 2 seconds. Stripe Elements is lightweight (~60KB); avoid loading additional analytics or marketing scripts on the checkout page.
- **Payment button response:** Button should show loading state within 100ms of click. Users who don't see immediate feedback will click again.
- **3DS modal load:** Should appear within 1 second of gateway initiating challenge.
- **Confirmation page:** Should load within 1 second of payment confirmation.
- **Webhook processing:** Subscription activation should be processed within 5 seconds of payment success. Users who land on confirmation and find features not yet unlocked will contact support.

---

*Last updated: April 2026*
