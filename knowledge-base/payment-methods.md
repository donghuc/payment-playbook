# Payment Methods by Market — Reference Index

> Context: B2C SaaS/App targeting Southeast Asia, Europe, and Global markets.
> This document is a living index. Each market links to its own deep-dive file.

---

## Critical SaaS Constraint: Recurring Billing Support

The most strategically important axis for a subscription SaaS product is whether a payment method supports **recurring billing** (automatic charges without user action each cycle). Most SEA payment methods do NOT support recurring billing natively — this is the dominant infrastructure constraint for SaaS in the region.

| Method Category | Recurring Support | Notes |
|---|---|---|
| Cards (Visa/Mastercard) | ✅ Yes | Universal, but low penetration in SEA |
| SEPA Direct Debit (EU) | ✅ Yes | Gold standard for EU subscriptions |
| E-wallets (SEA) — via tokenization | ⚠️ Conditional | Major wallets (GCash, MoMo, GoPay, TnG) support recurring via account-linking API. Requires gateway integration and (in some cases) merchant pre-approval. QR flows are still one-time. |
| E-wallets (SEA) — QR/push flow | ❌ No | Push-payment QR flows are inherently one-time |
| Virtual Accounts (SEA) | ❌ No | One-time by design |
| QR Payments (QRIS, PromptPay, PayNow QR, VNPay-QR) | ❌ No | One-time by design |
| Bank Transfer (SEA) | ❌ No | One-time; manual renewal required |
| NAPAS domestic cards (VN) | ⚠️ Yes via Adyen | NAPAS cards support tokenization + subscription recurring (Adyen). Not available via all gateways. |
| VNPay Auto-Debit (VN) | ⚠️ Yes via VNPay gateway | VNPay Payment Gateway has a documented auto-debit utility. Distinct from VNPay-QR (one-time). |
| PayNow (SG) | ⚠️ Emerging | GIRO available but cumbersome; card-on-file still more practical |
| iDEAL (NL) | ❌ No (one-time) | Use SEPA Direct Debit for recurring |
| PayPal | ✅ Yes | Supports subscription billing |
| Apple Pay / Google Pay | ✅ Yes | Via card on file |
| App Store / Play Store | ✅ Yes | Handles SEA recurring billing via platform |

**Key implication for SEA SaaS:** The picture is more nuanced than "SEA doesn't support recurring." Major wallets support recurring via tokenization, but each requires a dedicated integration path (not unified like card-on-file). App Store / Google Play IAP remains the most operationally straightforward recurring billing path for mobile-first products in SEA, abstracting all wallet integrations. Web-based SaaS can implement wallet recurring directly but must integrate each method separately via the appropriate gateway.

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

| Gateway | SEA Coverage | EU Coverage | Recurring SEA | Notes |
|---|---|---|---|---|
| Stripe | SG, MY, TH, PH, ID | Full EU | Cards only | Best developer experience; growing SEA local methods |
| Xendit | ID, PH, MY, TH, VN | ❌ | Limited | Best SEA local method coverage |
| 2C2P | TH, SG, MY, VN, ID | Limited | Limited | Strong QR and e-wallet in Thailand |
| Adyen | Full SEA | Full EU | Cards + limited | Enterprise-grade; wider global local method support |
| Midtrans | ID primary | ❌ | Limited | Gojek-owned; deep Indonesia integration |
| PayMongo | PH primary | ❌ | Limited | Philippines specialist |
| Omise | TH, SG, JP | Limited | Cards | Thailand specialist |

---

*Last updated: April 2026*
