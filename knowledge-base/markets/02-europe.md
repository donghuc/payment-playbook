# Payment Methods — Europe

> Part of the Payment Methods by Market series. See [payment-methods.md](../payment-methods.md) for the full index.

---

## Overview

Europe is predominantly card-based at the surface, but the reality is more nuanced. Several markets have deeply entrenched national payment methods that outperform cards locally. The most strategically important distinction for SaaS is between Western Europe (UK, Germany, France, Netherlands, Belgium, Nordics) and Eastern Europe (Poland, Czech Republic, Romania, etc.) — the method landscape differs significantly.

**The three structural realities for B2C SaaS in Europe:**

1. **SEPA Direct Debit is the gold standard for recurring subscription billing.** It is lower cost than card recurring, available across the full Euro zone, and the preferred recurring method for European consumers who are comfortable with direct debit for utilities and subscriptions.

2. **Regional payment methods are dominant in their home markets.** Offering only cards and PayPal will underperform vs. offering iDEAL in the Netherlands, Bancontact in Belgium, SOFORT in Germany, or BLIK in Poland. Localised method support directly impacts conversion in these markets.

3. **EU and UK consumer protection regulation is real and enforceable.** Auto-renewal disclosure, right of withdrawal (14-day cooling-off period for digital services in most EU countries), and GDPR-compliant payment data handling are compliance requirements, not optional. Non-compliance carries financial penalties and reputational risk.

---

## Universal — Cards (Visa / Mastercard)

**Coverage:** Pan-European. Credit and debit cards are widely held across Western and Central Europe. Card penetration is high in UK, Nordics, Ireland, Netherlands, and growing in Eastern Europe.

**Recurring support:** ✅ Yes. Cards support recurring billing natively via card-on-file (tokenised). Standard SaaS subscription billing model.

**Key nuances:**
- European cards increasingly require **Strong Customer Authentication (SCA)** under PSD2 for card-not-present transactions. Recurring subscriptions set up after an SCA-authenticated initial transaction are exempt from SCA on subsequent charges (merchant-initiated transactions). Initial card setup must go through SCA flow.
- **3D Secure 2 (3DS2)** is the technical standard for SCA compliance. Stripe, Adyen, and major gateways handle this automatically.
- **Debit vs. credit:** UK and Northern Europe have strong debit card culture. Germany and Austria are historically cash and bank-transfer dominant — card penetration is lower than the EU average.

**Gateway support:** Stripe, Adyen, Braintree (PayPal), Mollie, Checkout.com.

**UX flow (SCA-compliant initial setup):**
```
User enters card details at checkout
        ↓
Gateway triggers 3DS2 challenge (if required by issuer)
   → In-app authentication (biometric, OTP) or bank app redirect
   → Frictionless flow for low-risk transactions (no user action required)
        ↓
Card authenticated and tokenised (stored for recurring)
        ↓
Initial charge or free trial initiated
        ↓
Subsequent charges: merchant-initiated, SCA exempt
```

---

## SEPA Direct Debit

**What it is:** Single Euro Payments Area Direct Debit — a bank-to-bank recurring debit system covering 36 European countries. The user authorises a "mandate" (permission to debit their account). The merchant can then initiate recurring charges against that mandate without user action each cycle.

**Coverage:** **41 SEPA countries** (as of November 2024) — 27 EU member states, UK, Switzerland, Norway, Iceland, Liechtenstein, plus 5 EU candidate countries (Albania, Moldova, Montenegro, North Macedonia, Serbia). Montenegro and Albania were added in November 2024.

**UK note:** The UK continues to participate in SEPA schemes post-Brexit. The UK is listed in the European Payments Council's official SEPA Scheme Countries list. UK IBANs are valid for SEPA Direct Debit mandates. The UK is not an EU member, but this does not prevent SEPA participation — these are distinct designations.

**Adoption:** Very high for recurring billing in Germany, France, Netherlands, Belgium, and broader EU. Many European consumers pay utilities, insurance, and subscriptions via direct debit as their default.

**Recurring support:** ✅ Yes — this is the defining characteristic of SEPA Direct Debit. Explicitly designed for recurring billing.

**Cost advantage:** SEPA Direct Debit is significantly cheaper than card recurring for merchants — typically €0.20–0.40 per transaction vs. 1.5–2.5% for card transactions. For a €10/month subscription, this difference is meaningful at scale.

**Mandate setup flow:**
```
User selects SEPA Direct Debit at checkout
        ↓
IBAN entry (user enters their bank account IBAN)
   → IBAN validation (format check)
   → BIC auto-populated from IBAN in most cases
        ↓
Mandate authorisation
   → User presented with mandate text (legally required):
     "I authorise [Company] to send instructions to my bank to debit my account
      in accordance with these instructions. I have the right to a refund within
      8 weeks."
   → User confirms (checkbox + CTA)
        ↓
Mandate created (stored in gateway)
        ↓
First charge initiated (with 2–5 business day settlement delay)
        ↓
Confirmation email with mandate reference (legally required)
        ↓
Subsequent charges: automated, no user action required
```

**Settlement timing:** SEPA Direct Debit has a 2–5 business day settlement window (vs. near-instant for card). This creates a UX consideration: do you grant access immediately on mandate setup, or wait for confirmed settlement? Best practice for SaaS: grant access immediately; reconcile failures via mandate notification. If a charge fails, you receive a chargeback notification and must handle accordingly.

**Key regulation:** Under EU payment regulations, consumers can dispute and reverse a SEPA Direct Debit within 8 weeks (authorised transactions) or 13 months (unauthorised transactions). This chargeback window is longer than cards. For SaaS, this is manageable with clear mandate communication and transparent billing terms.

**Gateway support:** Stripe (full SEPA implementation), Adyen, GoCardless (specialist SEPA/recurring), Mollie.

**B2C SaaS recommendation:** SEPA Direct Debit should be the default recurring billing method for all EU-based subscribers willing to provide their IBAN. Offer it alongside card as an option, not instead of card — some users prefer card for control and chargeback protection.

---

## iDEAL (Netherlands)

**What it is:** The Netherlands' dominant online payment method, operated by Currence. iDEAL redirects users to their Dutch bank's online banking portal to approve a payment. Over 70% of Dutch online purchases use iDEAL.

**Adoption:** Dominant in the Netherlands. Any product targeting Dutch consumers that doesn't offer iDEAL will have meaningfully lower conversion.

**Recurring support:** ❌ iDEAL itself is a one-time push payment. For recurring billing of Dutch users, use **SEPA Direct Debit** — set up via iDEAL mandate verification (the user authenticates their bank account via iDEAL to authorise a SEPA mandate). This combination is the standard approach.

**UX flow (one-time payment):**
```
User selects iDEAL + their bank (Rabobank, ING, ABN AMRO, etc.)
        ↓
Redirect to bank's iDEAL payment screen
        ↓
User authenticates (bank app notification or QR) and approves
        ↓
Redirect back to merchant
        ↓
Real-time confirmation
```

**UX flow (subscription setup via iDEAL + SEPA mandate):**
```
User selects iDEAL to set up recurring billing
        ↓
iDEAL authentication flow (as above)
        ↓
On success: SEPA Direct Debit mandate automatically created
        ↓
Ongoing recurring charges via SEPA Direct Debit
```

**Gateway support:** Stripe (Netherlands), Adyen, Mollie (Netherlands-based, excellent iDEAL support), Buckaroo.

---

## Bancontact (Belgium)

**What it is:** Belgium's national debit payment network. Over 70% of Belgian online transactions use Bancontact. All Belgian bank debit cards are Bancontact-enabled; the Payconiq by Bancontact app is widely installed.

**Adoption:** Dominant in Belgium. Non-negotiable for Belgian consumer products.

**Recurring support:** ⚠️ Bancontact itself is one-time. For recurring billing of Belgian users, use **SEPA Direct Debit** (same approach as Netherlands: authenticate via Bancontact, set up SEPA mandate for recurring).

**Gateway support:** Stripe, Adyen, Mollie, Buckaroo.

---

## SOFORT / Klarna Pay Now (Germany, Austria, Switzerland)

**What it is:** SOFORT (now integrated into Klarna as "Klarna Pay Now" / "Pay by Bank") is a bank redirect payment method allowing online bank transfers from German, Austrian, and Swiss bank accounts. Klarna acquired SOFORT in 2014.

**Adoption:** Widely used in Germany and Austria. The DACH region (Germany, Austria, Switzerland) has historically lower credit card adoption than the EU average — bank transfer-based methods are preferred.

**Recurring support:** ❌ SOFORT/Pay Now is a one-time bank transfer. For recurring billing, use SEPA Direct Debit.

**UX flow:**
```
User selects SOFORT / Klarna Pay Now
        ↓
Redirect to SOFORT interface
   → Select bank
   → Online banking credentials (routed through secure channel)
   → Transaction confirmation code (TAN)
        ↓
Real-time transfer confirmation
        ↓
Redirect to merchant
```

**Note:** SOFORT's credential-entry model has raised security questions among some users and regulators. Klarna's rebranding to "Pay Now" and shift toward Open Banking (PSD2-compliant bank redirect) addresses some of these concerns. Monitor for Klarna's evolving SOFORT/Pay Now implementation.

**Gateway support:** Stripe, Adyen, Klarna (direct).

---

## Klarna (BNPL + Pay Now)

**What it is:** Klarna is both a payment method and a consumer credit provider. Its two most relevant modes for B2C SaaS:

- **Pay Now:** Instant bank transfer (the SOFORT successor above)
- **Pay Later / Pay in 3:** Buy Now Pay Later — user pays nothing upfront, settles in 30 days or in 3 instalments

**Adoption:** Very high in Nordics (Sweden, Norway, Finland, Denmark), Germany, UK, Netherlands, Austria.

**Recurring support:** ❌ Klarna BNPL products are not recurring billing mechanisms. They are consumer credit products for single transactions.

**B2C SaaS relevance:** Klarna Pay Later is relevant for annual plan purchases — allowing users to defer the full annual payment or split into 3 instalments makes annual billing more accessible, particularly for higher-priced tiers. Not applicable for monthly recurring.

**Gateway support:** Stripe (Klarna integration), Adyen, Klarna direct SDK.

---

## PayPal (Pan-European)

**What it is:** PayPal's digital wallet and payment platform. Widely adopted across Western Europe as a trusted payment method, particularly in UK, Germany, France, Netherlands, and Italy. European consumer trust in PayPal is high — many users prefer it over sharing card details directly with merchants.

**Adoption:** Strong across Western Europe. PayPal has a significant user base in the UK and Germany especially.

**Recurring support:** ✅ Yes. PayPal supports subscription billing via PayPal Billing Agreements. Users authorise recurring charges from their PayPal balance or linked payment methods.

**B2C SaaS note:** Offering PayPal alongside cards and SEPA covers a meaningful segment of European users who prefer wallet-based payment over direct card or bank input. PayPal's buyer protection also reduces consumer hesitation for unfamiliar products.

**Gateway support:** Stripe (PayPal integration), Adyen, Braintree (PayPal-owned), direct PayPal SDK.

---

## BLIK (Poland)

**What it is:** Poland's dominant mobile payment system. BLIK generates a 6-digit code in the user's bank app, valid for 2 minutes. The user enters the code at checkout to authenticate and confirm a payment — no card number, no redirect, no wallet app switch required.

**Adoption:** Extremely high in Poland — ~15 million registered users, used for the majority of online transactions. BLIK's usage has grown to rival or exceed card payments for online purchases in Poland.

**Recurring support:** ⚠️ **BLIK Recurring Payments is a live, fully documented product** — not a pilot. Three models are available (Model A, M, O), differing in how transactions are initiated and authorized and whether amounts/frequency can vary. Available via Przelewy24 and PayU for merchant integration.

The constraint: **not all Polish banks support it yet**. Supporting banks include PKO Bank Polski, Millennium, Santander Bank Polska, ING Bank Śląski, Nest Bank, Alior Bank, and SGB Cooperative Banks. Merchants must inform users of bank availability and handle the case where the user's bank is unsupported (via the `refuseNoPayid` mechanism). Merchants should not treat BLIK Recurring as universally available — check current bank coverage with the acquiring gateway.

**UX flow (one-time):**
```
User selects BLIK at checkout
        ↓
User opens their bank app → BLIK section → 6-digit code generated
        ↓
User enters 6-digit code at checkout (90-second window)
        ↓
Bank app pushes confirmation prompt → user approves
        ↓
Payment confirmed instantly
```

**UX flow (recurring setup):**
```
User selects BLIK Recurring at checkout
        ↓
User's bank eligibility checked (refuseNoPayid)
        ↓
User authorises recurring mandate in bank app (one-time)
        ↓
Subsequent charges: merchant-initiated, no user action
```

**Gateway support:** Stripe (Poland, one-time BLIK), Adyen, Przelewy24 (recommended for BLIK Recurring — deepest support), PayU, Tpay.

**B2C SaaS note:** BLIK is non-negotiable for Polish consumers. For recurring subscriptions, integrate BLIK Recurring via Przelewy24 or PayU — do not rely on Stripe's BLIK integration for recurring billing specifically.

---

## Przelewy24 (Poland)

**What it is:** Poland's dominant payment aggregator, accepting bank transfers from all major Polish banks, BLIK, cards, and other local methods. Acts as a single integration point for all Polish payment methods.

**Adoption:** Very high. Most Polish e-commerce runs through Przelewy24 or its competitors (Tpay, Dotpay).

**Recurring support:** ⚠️ Limited recurring support for cards processed through P24; bank transfers are one-time.

**Gateway support:** Stripe (P24 integration), Adyen.

---

## Swish (Sweden) / MobilePay (Denmark/Finland) / Vipps (Norway)

**What it is:** Three Nordic mobile payment systems that merged and continue to expand:
- **Swish:** Sweden — **8.5 million users as of early 2025**, ~86% of the Swedish population. Bank app integration. Processed 1.1 billion payments in 2024.
- **MobilePay / Vipps:** Vipps (Norway) and MobilePay (Denmark/Finland) merged in 2022 to form **Vipps MobilePay**. As of 2025, the combined entity has **12+ million users** across Norway, Denmark, Finland, and Sweden. The Danish user base migrated to the unified app/platform in March 2024. The pre-merger figure of "4 million" (Norway-only Vipps) is now significantly outdated.

**Adoption:** Each is the dominant payment method in its home market. Swish dominates Sweden; Vipps MobilePay is near-universal across Norway, Denmark, and Finland.

**Recurring support:** ⚠️ Swish Recurring and Vipps Recurring/Agreements are available for merchants in their respective markets. Availability via third-party gateways varies — Adyen and Nets (Nordics specialist) provide the most reliable integration path. Check current gateway support and bank coverage for the specific target market.

**Gateway support:** Stripe (Swish), Adyen (all three), Nets (Nordics specialist — recommended for comprehensive Nordic recurring support).

**B2C SaaS note:** If the Nordics are a primary segment, these methods are worth integrating — particularly Swish for Sweden and Vipps MobilePay for Norway/Denmark/Finland. Cards + SEPA Direct Debit remain adequate fallbacks if Nordics are a secondary market.

---

## Apple Pay / Google Pay (Pan-European)

**What it is:** Digital wallet payment methods backed by the user's device-stored card credentials. No new payment method — they use existing cards under the hood — but provide a faster, lower-friction checkout experience (biometric authentication, no card number entry).

**Adoption:** Growing rapidly across Europe, particularly on mobile. Apple Pay adoption is strong in UK, Nordics, France, and Germany. Google Pay similarly strong in Android-dominant markets.

**Recurring support:** ✅ Yes — via the card on file in the wallet. Apple Pay and Google Pay can be used to set up recurring card billing (the underlying card is charged recurringly).

**UX benefit:** Wallet-based checkout eliminates the card entry step on mobile — a significant conversion improvement. Users authenticate with Face ID / Touch ID / fingerprint, and the payment completes in seconds. Mobile checkout conversion rates improve measurably with wallet payment support. Studies cite 5–20%+ improvement in mobile checkout conversion when wallet payments are enabled; Stripe's own published research shows meaningful lift across markets.

**Gateway support:** Stripe (native), Adyen, Braintree, virtually all major European gateways.

**B2C SaaS note:** Apple Pay and Google Pay should be enabled by default on all checkout flows. They do not require separate infrastructure — they surface automatically when supported by the gateway and accessed via compatible browser/device.

---

## EU Consumer Protection Regulations — Key Requirements for SaaS

These are compliance requirements, not UX recommendations. Non-compliance carries financial penalties.

### Auto-Renewal Disclosure
EU Consumer Rights Directive and various national implementations require that subscription auto-renewal terms be clearly disclosed before the consumer completes a purchase. The exact charge amount, billing frequency, and cancellation process must be stated prominently — not buried in terms of service.

**Required at checkout:**
- Subscription price and billing frequency
- Auto-renewal statement: "Your subscription will renew automatically on [date] at [price]"
- How to cancel (before the renewal)
- Link to cancellation process

### Right of Withdrawal (14-Day Cooling-Off)
For digital services (including SaaS) purchased online, EU consumers typically have a 14-day right of withdrawal from the purchase date. This right can be waived if the consumer explicitly consents to immediate service delivery and acknowledges that this waives their withdrawal right.

**Standard SaaS implementation:**
At checkout, include: "By clicking Subscribe, I agree that my subscription begins immediately and I acknowledge that I waive my right of withdrawal."

Without this waiver, a consumer can demand a full refund within 14 days of purchase regardless of usage.

### GDPR Payment Data Handling
Payment card data must not be stored on your own servers — always use a PCI-DSS compliant gateway (Stripe, Adyen, etc.) that handles tokenisation. Card data storage by the merchant directly is a GDPR and PCI compliance violation.

### Strong Customer Authentication (SCA) / PSD2
As covered in the cards section above — initial card setup for recurring billing must go through SCA-compliant authentication (3DS2). Gateways handle this automatically, but it must be enabled and tested.

---

## Recommended Gateway Stack for Europe

**Stripe** covers the full European market — SEPA Direct Debit, iDEAL, Bancontact, SOFORT, BLIK, Klarna, Swish, Apple Pay, Google Pay, cards — from a single integration. For most B2C SaaS products, Stripe is sufficient for European coverage.

**Mollie** is worth considering if the Netherlands or Belgium is a primary market — Mollie is Netherlands-based with excellent local relationship and iDEAL/Bancontact optimisation.

**Adyen** is appropriate at enterprise scale or if deeper local method support across multiple European countries is needed beyond Stripe's coverage.

---

*Last updated: April 2026*
