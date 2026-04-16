# SEA-Specific Checkout Flows

> Part of the Checkout UX series. See [checkout-ux.md](../checkout-ux.md) for the full index.

---

## Overview

SEA checkout flows have specific requirements that differ meaningfully from Western web checkout. The three structural differences that drive most of the design decisions are:

1. **Redirect-based payment flows** — most SEA methods (e-wallets, QR, virtual accounts) require redirecting the user to a third-party app or page, then receiving a callback. This is fundamentally different from card payments where the transaction happens on your page.

2. **Mobile-first with variable network quality** — most SEA transactions happen on mobile, often on 4G connections with variable reliability. Redirect flows are vulnerable to network interruptions that card flows are not.

3. **Payment method selection is identity** — in Indonesia, Vietnam, and Philippines especially, the payment method a user selects carries social and practical significance. GoPay is associated with Gojek users; GCash is essential for Filipino digital life. Presenting these methods poorly (buried in a dropdown, displayed with incorrect logos, forced into an unfamiliar flow) creates distrust.

---

## E-Wallet Redirect Flow (Universal Pattern)

All major SEA e-wallets — GoPay, OVO, GCash, Maya, Momo, TrueMoney — use a redirect-based checkout pattern. The user leaves your product, authenticates and confirms in the wallet app, and returns. Xendit and 2C2P handle the technical integration; the UX design is your responsibility.

### Standard E-Wallet Checkout Flow

```
[User arrives at payment step]
          │
          ▼
[Payment method selection — geo-adapted]

Indonesia:
  ┌──────────────────────────────────┐
  │  Choose payment method           │
  │                                  │
  │  [GoPay  ]  [OVO    ]  [Dana  ] │  ← Tier 1 wallets, equal prominence
  │  [QRIS   ]  [ShopeePay]         │  ← QR + secondary wallets
  │  [Virtual Account  ▼]           │  ← Bank dropdown
  │  [Credit / Debit Card ▼]        │  ← Card, secondary
  └──────────────────────────────────┘

Philippines:
  ┌──────────────────────────────────┐
  │  Choose payment method           │
  │                                  │
  │  [GCash  ]  [Maya   ]           │  ← Primary wallets
  │  [Card   ]  [PayMaya]           │
  │  [Over-the-counter ▼]           │  ← OTC options
  └──────────────────────────────────┘

Thailand:
  ┌──────────────────────────────────┐
  │  Choose payment method           │
  │                                  │
  │  [PromptPay QR]  [TrueMoney]    │
  │  [Rabbit LINE Pay]              │
  │  [Card]                         │
  └──────────────────────────────────┘
          │
          ▼
[User selects e-wallet (e.g., GoPay)]
          │
          ▼
[Pre-redirect confirmation screen]
  ├── "You're paying [IDR 150,000] via GoPay"
  ├── Plan name confirmed
  ├── "Tap below to open GoPay and confirm your payment"
  └── CTA: "Open GoPay" [large, full-width button]
          │
          ▼
[App-to-app redirect (deep link)]
  ├── iOS/Android: GoPay app opens directly (deep link: gojek://...)
  ├── Web mobile: redirect to GoPay mobile web
  └── Desktop: QR code displayed for mobile scan
          │
          ▼
[In GoPay app]
  ├── Payment confirmation screen shows:
  │     Merchant name
  │     Amount: IDR 150,000
  │     Description: [Product] Pro Monthly
  ├── User enters GoPay PIN or biometric
  └── Confirms payment
          │
          ▼
[GoPay redirects back to your app / web]
  (via callback URL configured in Xendit / gateway)
          │
          ├── Success callback received:
          │     Subscription activated
          │     Redirect to confirmation screen
          │
          └── No callback / ambiguous state:
                "Verifying your payment…" (30-second poll)
                → If confirmed: success
                → If not confirmed: "We haven't received confirmation yet"
                   [Check status] [Try a different method]
```

### Deep Link vs. Web Redirect

**Deep links (app-to-app)** are the preferred path on mobile — they open the wallet app directly without a browser intermediation. This is faster, more reliable, and feels native.

**Web redirects** are required when:
- The user doesn't have the wallet app installed
- The payment is initiated from a desktop browser
- Deep link fails (app not installed or deep link not handled)

**Fallback hierarchy for GoPay example:**
```
Attempt 1: Deep link (gojek://gopay/pay?...)
  └── If fails (app not installed): 
Attempt 2: GoPay mobile web (pay.gopay.co.id/...)
  └── For desktop:
Attempt 3: QR code display
```

### QR Code Payment Flow (PromptPay, QRIS, VNPay-QR)

QR payments are scan-based — the user opens their bank/wallet app, scans the QR code, and confirms.

```
[User selects PromptPay QR (Thailand) or QRIS (Indonesia)]
          │
          ▼
[QR Code Display Screen]
  ┌──────────────────────────────────────┐
  │                                      │
  │   Scan with any Thai bank app        │
  │   (or QRIS app for Indonesia)        │
  │                                      │
  │   [    █████████████    ]            │
  │   [    █  QR CODE  █    ]            │
  │   [    █████████████    ]            │
  │                                      │
  │   Amount: ฿290.00 / IDR 150,000     │
  │   Expires in: 14:32                 │← Countdown timer
  │                                      │
  │   1. Open your bank app              │
  │   2. Tap "Scan QR"                   │
  │   3. Confirm the payment             │
  │                                      │
  │   [I've paid — check status]        │← Manual confirmation option
  │   [Use a different method]           │
  └──────────────────────────────────────┘
          │
          ▼
[Your page polls for payment confirmation every 3–5 seconds]
  ├── Payment confirmed → success screen
  └── Timer expires → "This QR code has expired"
        [Generate new QR code] [Use a different method]
```

**QR expiry handling:** PromptPay QR codes expire after 15–30 minutes; QRIS codes typically expire within 15 minutes. Your UI must show a countdown and handle expiry gracefully — expired QR = re-generate, not error.

**The "I've paid" button:** A non-trivial percentage of users will complete the payment in their bank app but the callback will be delayed. A "I've paid — check status" button triggers an immediate status lookup and provides faster confirmation for users who know they've completed payment.

---

## Virtual Account Flow (Indonesia)

Virtual Account (VA) payments are common for higher-value transactions in Indonesia. The user receives a unique bank account number, transfers the exact amount, and confirmation is automatic.

```
[User selects Virtual Account + Bank]
  ┌─────────────────────────────────────┐
  │  Select your bank:                  │
  │                                     │
  │  [BCA]   [Mandiri]  [BNI]  [BRI]   │
  │  [Permata] [CIMB]  [Danamon]       │
  └─────────────────────────────────────┘
          │
          ▼
[Virtual Account Details Screen]
  ┌──────────────────────────────────────────┐
  │  Transfer to this account to complete    │
  │  your payment                            │
  │                                          │
  │  Bank:           BCA                     │
  │  Account Number: 70012345678901         │← Tap to copy
  │  Account Name:   [Your Product] / Xendit │
  │  Amount:         IDR 150,000            │← Exact amount (important)
  │                                          │
  │  ⚠️  Transfer the EXACT amount shown     │
  │  ⚠️  This account expires in: 23:45:00  │← Countdown
  │                                          │
  │  How to pay:                             │
  │  1. Open BCA mobile / m-BCA              │
  │  2. Transfer → BCA Virtual Account       │
  │  3. Enter: 70012345678901                │
  │  4. Amount: 150,000                      │
  │  5. Confirm                              │
  │                                          │
  │  [Copy account number]                   │← One-tap copy
  │  [I've made the transfer]                │← Status check trigger
  │  [Use a different method]                │
  └──────────────────────────────────────────┘
          │
          ▼ User completes bank transfer
          │
          ▼ Xendit/gateway receives payment confirmation webhook
          │
          ▼
[Subscription activated — confirmation screen]
  OR
[Email confirmation when user is no longer in-app]
```

**Critical VA UX requirements:**

- **"Tap to copy" account number** — users must transfer the exact number; manual entry errors are a significant failure mode. One-tap copy eliminates transcription errors.

- **Exact amount requirement** — VA payments require the exact amount. Display this prominently. Some products add a small suffix (e.g., IDR 150,001) to make each VA unique and easily identifiable — if you do this, explain it ("Transfer exactly IDR 150,001 — the extra Rp 1 helps us verify your payment").

- **Expiry countdown** — VAs expire (typically 24–72 hours). Show a clear countdown. If the user returns after expiry, auto-generate a new VA.

- **SMS/email delivery of VA details** — send the VA number and amount to the user's email immediately. Many users initiate payment on mobile but complete the bank transfer from their desktop banking portal. The VA details email is the bridge.

- **Payment status polling** — check payment status every 30–60 seconds while the user is on the VA screen. Most confirmations arrive within 5 minutes of transfer. When confirmed, transition the UI automatically.

### VA Notification Email

```
Subject: "Complete your payment — transfer details inside"

Your payment details for [Product] Pro:

Bank:            BCA
Account Number:  70012345678901
Amount:          IDR 150,000 (exact)
Payment deadline: [date + time with timezone]

How to pay via BCA mobile:
1. Open m-BCA
2. m-Transfer → BCA Virtual Account
3. Enter account number: 70012345678901
4. Amount: 150,000
5. Confirm

Having trouble? Contact support: [email / WhatsApp]
```

Including a WhatsApp support link in VA emails for Indonesian users is high-value — WhatsApp is the primary customer support channel in Indonesia and adds trust for first-time buyers.

---

## Mobile Checkout Optimisation for SEA

### Payment Method Grid on Mobile

On mobile, payment methods should display as a scrollable grid or list — not a dropdown. Dropdowns have lower mobile conversion than visible options.

```
Desktop:
[GoPay]  [OVO]  [Dana]  [QRIS]
[Virtual Account ▼]  [Card ▼]

Mobile (portrait):
[   GoPay   ]  [   OVO    ]
[   Dana    ]  [   QRIS   ]
[Virtual Account        >]
[Card                   >]
```

### Thumb-Zone Optimisation

Primary CTAs on mobile checkout should be in the bottom 60% of the screen — the natural thumb zone for single-handed use. Checkout forms on mobile where the "Pay" button is above the fold (requiring scroll to confirm) lose conversion due to users not scrolling.

```
[Screen]
──────────────────
│ Plan summary    │← Read area (not interactive)
│                 │
│ Payment method  │← Selection (mid-screen)
│                 │
│ Billing note    │
│                 │
│ [Pay / Confirm] │← CTA in thumb zone (bottom 40% of screen)
──────────────────
```

### Network Interruption States

Every SEA redirect flow must handle network interruption gracefully. The three states to design for:

```
State 1: Redirect fails to open wallet app
  ├── Show: "Couldn't open [GoPay]. Try again or use a different method."
  ├── Actions: [Open GoPay] retry + [Use different method]
  └── Fallback: open GoPay web instead of app

State 2: User pays in wallet app but redirect back fails
  ├── User lands on "Processing" state (not error)
  ├── Show: "Your payment may still be processing…"
  ├── Poll for confirmation for 2 minutes
  └── If confirmed: success | If not: "Check status" option

State 3: Session timeout (user takes too long)
  ├── Payment session expired (VA or QR expiry)
  ├── Show: "Your payment session has expired"
  ├── Actions: [Start a new payment] [Use a different method]
  └── Pre-fill plan selection from previous session
```

### Loading & Processing States

Payment processing in SEA can take longer than Western markets due to additional redirect steps and variable network conditions.

```
[User taps "Pay" / "Open GoPay" / "Confirm transfer"]
          │
          ▼
Immediate (< 100ms): Button → loading state
  "Connecting to GoPay…"

2–5 seconds: Processing
  "Almost there…"

If taking > 8 seconds: Extended processing message
  "This is taking a bit longer than usual — please don't close the app"

If taking > 30 seconds without response: Timeout state
  "Something may have gone wrong."
  [Check payment status] [Try again] [Use a different method]
```

---

## OTC (Over-The-Counter) Payment Flow

Relevant for Philippines (7-Eleven, Bayad Center) and Indonesia (Alfamart, Indomaret). Cash payments at physical stores.

```
[User selects OTC payment at checkout]
  → Select store chain (7-Eleven / Alfamart / etc.)
          │
          ▼
[Payment Code Displayed]
  ┌──────────────────────────────────────┐
  │  Pay at 7-Eleven                     │
  │                                      │
  │  Payment code:                       │
  │  ┌─────────────────────────────┐    │
  │  │    1234 5678 9012           │    │← Large, clear code
  │  └─────────────────────────────┘    │
  │  [Copy code]                         │
  │                                      │
  │  Amount: PHP 450.00                  │
  │  Pay at any 7-Eleven Philippines     │
  │  Expires: [date and time]            │
  │                                      │
  │  Instructions:                       │
  │  1. Go to any 7-Eleven              │
  │  2. Tell the cashier: "Bills payment"│
  │  3. Show this code or say: [code]    │
  │  4. Pay PHP 450.00 in cash           │
  │  5. Keep your receipt                │
  │                                      │
  │  [Send instructions to my email]    │
  │  [Use a different method]            │
  └──────────────────────────────────────┘
          │
          ▼
[Email with payment code sent immediately]
          │
          ▼
[User goes to store, pays cash]
          │
          ▼
[Xendit / PayMongo receives payment confirmation from store network]
          │
          ▼
[Subscription activated — email sent]
  "Your payment has been received. You now have access to [Product] Pro."
  [Access your account →]
```

**OTC UX considerations:**
- Payment codes must be human-readable (not just barcodes) — the user may need to dictate the code to a cashier
- Send the payment code to email immediately — users often initiate on mobile but pay hours later
- OTC payments can take 1–24 hours to confirm after the user pays — set expectation: "Your access will be activated within 1 hour of payment confirmation"
- Grace period: keep the checkout session open (don't timeout the pending state) — OTC users may return the next day after paying

---

*Last updated: April 2026*
