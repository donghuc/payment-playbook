# SEA Payment Gateways — Xendit, 2C2P, Midtrans, PayMongo

> Part of the Payment Gateways series. See [payment-gateways.md](../payment-gateways.md) for the full index.

---

## Overview

SEA gateways are specialised processors built for the fragmented payment landscape of Southeast Asia. Where Stripe offers breadth across global markets, SEA-specialist gateways offer depth — direct integrations with local e-wallets, virtual account banks, QR systems, and OTC channels that Stripe either doesn't support or supports with less coverage.

The practical question for your product is not which SEA gateway is "best" in isolation, but which one fills the gaps left by Stripe in your specific target markets.

---

## Xendit

### What It Is
Xendit is the leading SEA-focused payment gateway, founded in Indonesia in 2015. Designed with a Stripe-inspired API philosophy but purpose-built for Southeast Asian payment methods. Xendit serves Indonesia, Philippines, Malaysia, Thailand, Vietnam, and Singapore.

Xendit was acquired by Grab in 2023 — an important ownership context: GrabPay and Grab's financial ecosystem are closely integrated with Xendit's infrastructure.

### Coverage & Payment Methods

**Indonesia:**
GoPay, OVO, Dana, ShopeePay, LinkAja, QRIS, Virtual Accounts (BCA, Mandiri, BNI, BRI, Permata, BSI, CIMB, Danamon), Alfamart/Indomaret OTC, Visa/Mastercard cards, Kredivo BNPL, Akulaku BNPL

**Philippines:**
GCash, Maya, ShopeePay PH, 7-Eleven/Cliqq OTC, Cebuana, MLhuillier, Visa/Mastercard cards, bank transfers (BDO, BPI, UnionBank, Metrobank)

**Malaysia:**
Touch 'n Go eWallet, Boost, GrabPay MY, FPX (all major Malaysian banks), Visa/Mastercard cards, DuitNow QR

**Thailand:**
PromptPay QR, TrueMoney Wallet, Rabbit LINE Pay, Visa/Mastercard cards

**Vietnam:**
Momo, ZaloPay, ShopeePay VN, ViettelPay, bank transfers (Napas QR), Visa/Mastercard cards

**Singapore:**
GrabPay, PayNow, Visa/Mastercard cards, Apple Pay, Google Pay

### Pricing (Indicative — verify at xendit.co)

| Method | Fee |
|---|---|
| Visa/Mastercard (ID) | 2.9% |
| E-wallets (GoPay, OVO, Dana) | 1.5–2% |
| Virtual Accounts | IDR 4,400–5,500 flat per transaction |
| QR (QRIS) | 0.7% |
| GCash / Maya (PH) | 2.5% |
| OTC (Alfamart, 7-Eleven) | Flat fee per transaction |
| Cards (PH) | 3.5% + PHP 15 |

### SaaS Billing Features
Xendit offers **Recurring Billing** (Invoice + subscription scheduling) and **Payment Links** for invoice-based workflows. However, Xendit's recurring billing is not as mature as Stripe Billing — it handles scheduled invoice generation but is not a full subscription management platform. For complex subscription logic (trials, proration, dunning at scale), Xendit works best as the payment method layer while Stripe or a subscription management tool handles billing logic.

**The hybrid architecture:** Many teams run Stripe Billing for subscription management logic and route specific payment method transactions through Xendit for execution. Stripe handles the subscription state machine; Xendit handles the GoPay / GCash / Virtual Account charge.

### Integration
Xendit's API is REST-based with Stripe-inspired design. Webhooks follow standard patterns. Official SDKs: Node.js, PHP, Python, Go, Java. Good documentation at xendit.co/en/developers.

### Strengths
- Deepest SEA local method coverage of any single gateway
- Virtual account bank coverage in Indonesia is excellent (10+ banks)
- OTC payment coverage (retail outlets) for unbanked user segments
- BNPL integration (Kredivo, Akulaku) for Indonesia
- Grab ownership means GrabPay integration is tight across SEA

### Limitations
- No EU or global card processing (must pair with Stripe or Adyen for non-SEA)
- Recurring billing is less mature than Stripe Billing for complex SaaS use cases
- Smaller developer ecosystem and community than Stripe
- Customer support quality is less consistent than Stripe (improving)
- Vietnam coverage is functional but less deep than Indonesia/Philippines

---

## 2C2P

### What It Is
2C2P (Two Cents To Pay) is a Singapore-headquartered payment service provider specialising in Southeast Asia. Founded in 2003, 2C2P has deep relationships with banks, telecom operators, and payment networks across the region. It is particularly strong in Thailand and has broad coverage across SEA including Vietnam, Myanmar, and Cambodia — markets where Xendit has limited presence.

2C2P was acquired by SCB (Siam Commercial Bank, Thailand's oldest bank) in 2022 — an important context for its Thailand market depth.

### Coverage & Payment Methods

**Thailand (strongest):**
PromptPay QR, TrueMoney Wallet, Rabbit LINE Pay, KBank QR, SCB QR, True Move H top-up, Visa/Mastercard cards, Bangkok Bank internet banking

**Singapore:**
PayNow, NETS, GrabPay, Visa/Mastercard

**Malaysia:**
FPX, Touch 'n Go, Visa/Mastercard, Maybank2U, CIMB Clicks

**Indonesia:**
Visa/Mastercard, virtual accounts (select banks), Alfamart

**Vietnam:**
VNPay QR, Momo, Napas bank transfers, Visa/Mastercard

**Philippines:**
GCash, PayMaya, bank transfers, Visa/Mastercard

**Expanded SEA:**
Myanmar (Wave Money, CB Pay), Cambodia (Wing, ABA), Laos, Bangladesh — markets where Xendit has no presence

### Pricing
2C2P pricing is primarily negotiated (not publicly listed). Expect custom pricing conversations. Minimum volume expectations are typically higher than Xendit's self-serve tier — 2C2P is better suited for established products with existing transaction volume than for early-stage launches.

### SaaS Billing Features
2C2P offers payment orchestration and recurring payment support for specific methods. Its primary strength is breadth of acceptance rather than subscription billing sophistication. Complex SaaS billing logic should sit in Stripe or a subscription management tool, with 2C2P handling transaction execution for specific local methods.

### Integration
2C2P provides a payment gateway API and a hosted payment page option. The API is less developer-friendly than Stripe or Xendit — integration is more complex and documentation is less comprehensive for self-serve. Typically requires a sales relationship and onboarding process.

### When to Choose 2C2P Over Xendit
- Thailand is your primary SEA market (2C2P's SCB ownership gives it deeper Thai banking integration than Xendit)
- You need coverage in Myanmar, Cambodia, Laos, or Bangladesh
- You are working with a partner or distributor already in the 2C2P ecosystem
- Your transaction volume is large enough to negotiate meaningful pricing

### Limitations
- Less self-serve than Xendit — requires a sales/onboarding process
- API less developer-friendly than Xendit or Stripe
- Higher minimum volume expectations for competitive pricing
- Subscription billing less mature than Stripe

---

## Midtrans (GoTo Financial)

### What It Is
Midtrans is Indonesia's leading payment gateway, owned by GoTo Financial (the financial arm of GoTo Group — Gojek + Tokopedia). Founded in 2012, Midtrans has the deepest domestic Indonesia coverage of any gateway, including the tightest GoPay integration (as both are GoTo group entities).

Midtrans is available internationally but is optimised for Indonesia. Non-Indonesian merchants typically use Xendit for broader SEA coverage and Midtrans only when Indonesia-depth is specifically required.

### Coverage (Indonesia Focus)

**E-wallets:**
GoPay (direct GoTo integration — fastest settlement, tightest integration), OVO, Dana, ShopeePay, LinkAja, Indomaret (via DOKU partnership)

**Bank Transfers / Virtual Accounts:**
BCA (most used), Mandiri, BNI, BRI, Permata, CIMB Niaga, Danamon — all major Indonesian banks

**Cards:**
Visa, Mastercard, JCB — with 3DS support

**QR:**
QRIS (all QRIS-compatible wallets via single QR)

**OTC:**
Alfamart, Indomaret

**BNPL:**
Akulaku (via integration)

### Pricing (Indicative)
- Cards: ~2.9%
- E-wallets: 0.7–2%
- Virtual Accounts: IDR 4,000 flat per successful transaction
- QRIS: 0.7%
- OTC: IDR 5,000 flat

### GoPay Integration Advantage
Because both Midtrans and GoPay are GoTo group entities, the GoPay integration via Midtrans has some operational advantages — settlement timing and dispute resolution tend to be smoother than third-party GoPay integrations via Xendit. If GoPay is your primary Indonesia payment method, this is worth considering.

### Snap — Hosted Payment Page
Midtrans Snap is a hosted payment UI that renders all supported payment methods in a single modal without custom front-end development. Useful for rapid integration but less customisable than building with the Midtrans Core API.

### Limitations
- Indonesia-only depth — other SEA markets are limited
- Not a substitute for Xendit's multi-country SEA coverage
- SaaS subscription billing less mature than Stripe
- International use cases typically require a local Indonesia entity or partnership

### When to Choose Midtrans
- Indonesia is your primary market and you want the deepest possible Indonesia coverage
- GoPay is a critical payment method and you want the tightest native integration
- You have or are building an Indonesia-specific product instance with local entity

---

## PayMongo

### What It Is
PayMongo is a Philippines-focused payment gateway founded in 2019 and backed by Y Combinator. Stripe-inspired API design, built specifically for Filipino businesses and merchants accepting local Philippine payment methods. The simplest self-serve Philippines gateway for international teams.

### Coverage (Philippines)

**E-wallets:**
GCash, PayMaya (Maya), ShopeePay PH, GrabPay PH

**Cards:**
Visa, Mastercard — with 3DS2

**Over-the-Counter:**
7-Eleven (Cliqq), Bayad Center, Cebuana, MLhuillier, Palawan Express

**Bank Transfers:**
BancNet online banking, UnionBank, BPI (select methods)

### Pricing
- Cards: 3.5% + PHP 15
- GCash / Maya: ~2.5% + PHP 10
- OTC: PHP 25 flat per transaction

### Integration
PayMongo's API closely mirrors Stripe's structure — developers familiar with Stripe can integrate PayMongo quickly. Official SDKs: Node.js, PHP, Python, Ruby. Documentation at developers.paymongo.com.

### Limitations
- Philippines-only — no other SEA market coverage
- Subscription billing is basic (payment links + manual scheduling)
- Smaller ecosystem than Xendit for Philippines
- OTC settlement can take 1–3 business days

### When to Choose PayMongo
- Philippines is your primary market and you want the simplest self-serve integration
- You are Philippines-based and prefer a local provider with local support
- You want a backup Philippines processor alongside Xendit

---

## SEA Gateway Comparison

| Feature | Xendit | 2C2P | Midtrans | PayMongo |
|---|---|---|---|---|
| Indonesia depth | ✅ Very strong | ⚠️ Moderate | ✅ Deepest | ❌ |
| Philippines depth | ✅ Strong | ⚠️ Moderate | ❌ | ✅ Strong |
| Thailand depth | ✅ Good | ✅ Strongest | ❌ | ❌ |
| Vietnam depth | ⚠️ Growing | ✅ Good | ❌ | ❌ |
| Malaysia depth | ✅ Strong | ✅ Good | ❌ | ❌ |
| Singapore depth | ✅ Good | ✅ Good | ❌ | ❌ |
| Myanmar/Cambodia | ❌ | ✅ | ❌ | ❌ |
| Subscription billing | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic |
| Developer experience | ✅ Good | ⚠️ Moderate | ⚠️ Moderate | ✅ Good |
| Self-serve onboarding | ✅ Yes | ⚠️ Sales required | ✅ Yes | ✅ Yes |
| Pricing transparency | ✅ Public | ❌ Custom | ✅ Public | ✅ Public |

**Recommended default for SEA expansion:** Xendit + Stripe combination covers the vast majority of your SEA + Global payment needs. Add 2C2P if Thailand is a primary market requiring deeper local banking relationships, or if expansion into Myanmar/Cambodia is planned.

---

*Last updated: April 2026*
