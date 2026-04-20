# Payment Methods by Market — Reference Index

> Context: B2C SaaS/App targeting Southeast Asia, Europe, and Global markets.
> This document is a living index. Each market links to its own deep-dive file.

---

## Critical SaaS Constraint: Recurring Billing Support

The most strategically important axis for a subscription SaaS product is whether a payment method supports **recurring billing** (automatic charges without user action each cycle). The situation is more nuanced than a single yes/no — recurring capability depends on the wallet, the specific gateway integration, and sometimes the merchant's approved status with the wallet operator.

**Capability classification used throughout this document:**

- **Native recurring** — tokenized card-on-file style; merchant-initiated charges without user interaction per cycle. Example: Visa/Mastercard via Stripe.
- **Token-based recurring** — wallet supports recurring via a stored token, but the token is specific to the wallet and requires per-wallet integration (not interchangeable with card tokens). Example: GoPay via Midtrans/Adyen, MoMo via MoMo's own API.
- **User-approved recurring** — each charge requires explicit user authorisation (re-auth, PIN, or app confirmation). Not true recurring in the SaaS sense; closer to "remembered one-time."
- **Not supported** — one-time only.

**Important distinction — wallet ≠ gateway:** A wallet may support recurring natively while a given gateway has not implemented that capability. For example, GCash supports recurring via PayMongo, Xendit, and Ezypay — but Adyen's GCash integration is one-time only as of April 2026. Always validate capability at the wallet × gateway × market intersection, not at the wallet level alone.

| Method Category | Recurring Classification | Notes / Source |
|---|---|---|
| Cards (Visa/Mastercard) | Native recurring | Universal; low penetration in SEA outside SG/MY. [Verified] |
| SEPA Direct Debit (EU) | Native recurring | Gold standard for EU subscriptions. [Verified] |
| iDEAL (NL) | Not supported (standalone) | iDEAL itself is one-time. Standard EU pattern: use iDEAL for first payment + SEPA Direct Debit mandate collection, then SEPA DD for subsequent cycles. [Verified — Mollie/Adyen docs] |
| GoPay (Indonesia) | Token-based recurring | Supported via Midtrans (GoPay Tokenization / Direct Debit) and Adyen (Subscription and CardOnFile contract types). [Verified — Adyen docs] |
| GCash (Philippines) | Token-based recurring — gateway-dependent | Supported via PayMongo, Xendit, and the Ezypay/GCash/Xendit partnership (launched 2024). **NOT supported via Adyen's GCash integration** as of Apr 2026. [Verified — Adyen GCash docs; Ezypay press release] |
| MoMo (Vietnam) | Token-based recurring | Documented Subscription API on the MoMo Developer Portal. Used by Netflix, Spotify, others. Requires MoMo partner onboarding. [Verified — developers.momo.vn] |
| GrabPay (SG/MY/PH) | Not supported via Adyen | Adyen's GrabPay integration is one-time (Recurring = not supported in Adyen feature table). Recurring may be available through direct Grab partnerships but is not a self-serve capability. [Verified — Adyen docs] |
| Touch 'n Go eWallet (MY) | Not supported via Adyen | Adyen's TnG integration is one-time. Curlec–TnG partnership exists for recurring but requires separate integration path. Verify currency of that partnership before relying on it. [Verified — Adyen docs; partnership status = Estimated] |
| NAPAS domestic cards (VN) | Not supported via Adyen | Adyen's NAPAS card documentation explicitly shows Recurring = not supported. Prior claim that NAPAS supports subscription via Adyen was incorrect. [Verified — Adyen NAPAS docs] |
| VNPay-QR (VN) | Not supported | Push-payment QR. One-time by design. [Verified] |
| VNPay Auto-Debit (VN) | User-approved recurring — SaaS use unclear | Auto-debit exists for utilities/bills. General-purpose SaaS recurring via VNPay Auto-Debit is not clearly documented and should be verified per integration before relying on it. [Estimated] |
| E-wallets (SEA) — QR/push flow | Not supported | Push-payment QR flows are inherently one-time. [Verified] |
| Virtual Accounts (SEA) | Not supported | One-time by design. [Verified] |
| QR Payments (QRIS, PromptPay, PayNow QR) | Not supported | One-time by design. [Verified] |
| Bank Transfer (SEA) | Not supported | One-time; manual renewal required. [Verified] |
| PayNow (SG) | Not supported for practical SaaS | GIRO supports recurring bank debits but mandate setup is slow. Card-on-file more practical for monthly recurring. [Verified] |
| PayPal | Native recurring | Supports subscription billing. [Verified] |
| Apple Pay / Google Pay | Native recurring | Via card-on-file. [Verified] |
| App Store / Play Store IAP | Native recurring | Platform handles local SEA payment methods and recurring logic. [Verified] |

**Key implication for SEA SaaS:** Do not treat "SEA supports recurring" or "SEA doesn't support recurring" as useful claims. Every capability must be validated at the wallet × gateway × market × merchant-approval intersection. App Store / Google Play IAP remains the most operationally reliable recurring path for mobile-first products in SEA, abstracting all wallet integrations at the cost of platform commission.

---

## Market Deep-Dives

### 1. [Southeast Asia](./markets/01-southeast-asia.md)
The most fragmented payment landscape globally. Six distinct national ecosystems (Indonesia, Vietnam, Philippines, Thailand, Malaysia, Singapore) with minimal cross-border method interoperability. Dominated by e-wallets, QR payments, and bank transfers. Card penetration is low outside Singapore and Malaysia. Recurring billing for SaaS requires architectural workarounds.

### 2. [Europe](./markets/02-europe.md)
Predominantly card-based with strong regional alternatives. SEPA Direct Debit is the most cost-effective and reliable recurring billing method for EU subscriptions. Key country-specific methods: iDEAL (NL), Bancontact (BE), SOFORT/Klarna (DACH), BLIK (PL), Swish (SE). PayPal has high consumer trust across Western Europe. Strong consumer protection regulations (auto-renewal disclosure, right of withdrawal) apply.

### 3. [Global Baseline](./markets/03-global.md)
The universal payment stack that must work everywhere: Visa/Mastercard, PayPal, Apple Pay, Google Pay. Also covers crypto (small but growing), WeChat Pay/Alipay (Chinese diaspora and mainland), and practical considerations for building a globally interoperable payment layer.

---

## Recurring Billing Strategy by Market

Given the recurring billing constraint in SEA, the recommended architecture by market:

**Singapore & Malaysia**
Cards are viable (higher penetration). Stripe supports recurring card billing directly. Add PayNow / DuitNow for one-time top-ups and annual billing.

**Indonesia, Vietnam, Philippines, Thailand**
- **App Store / Google Play IAP** for mobile: let the platform handle recurring and local payment methods
- **Annual billing + one-time e-wallet/QR** for web: charge annually via a single transaction, avoiding monthly recurring
- **Card-on-file** for the subset of users with international cards
- **Credit/token model** as an alternative to subscription — single top-up transactions sidestep recurring entirely

**Europe**
SEPA Direct Debit via Stripe or Adyen for all EUR-zone recurring subscriptions. Cards for non-SEPA markets (UK, Switzerland, Nordics). PayPal subscriptions as an alternative for users who prefer wallet-based billing.

**Global**
Cards + PayPal as the universal baseline. Apple Pay / Google Pay for mobile checkout conversion improvement. Stripe handles most of this stack natively.

---

## Gateway Coverage Matrix

Merchant-country support (where you can create an account) and payment-method support are distinct. A gateway may accept payments from customers in a country without supporting merchants in that country.

| Gateway | SEA Merchant Countries | EU Coverage | SEA Recurring Capability | Notes |
|---|---|---|---|---|
| Stripe | SG, MY, TH (full); ID (preview/invite) | Full EU | Cards natively; GoPay via Adyen-style tokenization not offered on Stripe; wallet recurring coverage shallower than Xendit | PH not yet a supported merchant country as of Apr 2026 (plans announced, not launched). VN not supported as merchant country. [Verified — stripe.com/global] |
| Xendit | ID, PH, MY, TH, VN | ❌ | Deepest SEA local wallet coverage; recurring available for GoPay, GCash (via Ezypay partnership), others | Strongest SEA specialist |
| 2C2P | TH, SG, MY, VN, ID | Limited | Recurring for select wallets (e.g., TnG via Curlec partnership) | Strong QR and e-wallet in Thailand |
| Adyen | Full SEA (as acquiring/processing) | Full EU | Cards yes; GoPay yes (Subscription/CardOnFile); GCash, GrabPay, TnG, NAPAS — recurring NOT supported by Adyen integration [Verified] | Enterprise-grade; wide global local method support, but per-method recurring varies |
| Midtrans | ID primary | ❌ | GoPay Tokenization (recurring); other Indonesian wallets limited | Gojek-owned; deep Indonesia integration |
| PayMongo | PH primary | ❌ | GCash recurring supported (PayMongo documents recurring payments API) | Philippines specialist |
| Omise / Opn | TH, SG, JP | Limited | Cards primarily | Thailand specialist |

---

*Last updated: April 2026*
