# Payment Methods — Southeast Asia

> Part of the Payment Methods by Market series. See [payment-methods.md](../payment-methods.md) for the full index.

---

## Overview

Southeast Asia is the most fragmented payment landscape in the world. Six major markets — Indonesia, Vietnam, Philippines, Thailand, Malaysia, Singapore — each have their own dominant wallets, national QR standards, and banking infrastructure, with minimal cross-border interoperability. A payment method that works in Thailand will not work in Vietnam. A gateway that covers Indonesia well may have limited reach in the Philippines.

**The three structural realities for B2C SaaS in SEA:**

1. **Card penetration is low outside Singapore and Malaysia.** In Indonesia, Vietnam, and the Philippines, a significant portion of the adult population is unbanked or card-free. Building a SaaS product that requires a credit card for subscription will exclude the majority of potential users in these markets.

2. **Recurring billing in SEA is inconsistent and provider-specific.** The picture is more nuanced than either "SEA supports recurring" or "SEA doesn't support recurring." A subset of wallets support genuine recurring billing — specifically **GoPay (via Midtrans/Adyen), MoMo (via MoMo's own developer API), and GCash (via PayMongo/Xendit/Ezypay partnership)** — but each requires a separate integration path and the wallet × gateway combination matters. Other wallets commonly assumed to support recurring do not: **GrabPay, Touch 'n Go, and NAPAS domestic cards have recurring explicitly marked as unsupported in Adyen's integration documentation as of Apr 2026 [Verified].** The practical implications: (a) recurring capability must be validated at the wallet × gateway intersection, not at the wallet level alone, (b) the gateway you use for cards may not be the gateway that offers a given wallet's recurring capability, and (c) "this wallet supports recurring" usually means "via a specific gateway or the wallet operator's own APIs, with merchant onboarding." QR payments, virtual accounts, and bank transfers remain genuinely one-time only by design.

3. **The App Store and Google Play remain the path of least resistance for mobile.** Apple and Google abstract away the wallet-by-wallet tokenization complexity entirely. For mobile-first products, IAP is still the easiest path to reliable recurring revenue across all SEA markets — at the cost of platform commission (15–30%).

---

## Singapore

### Card Penetration & Banking
Singapore has the highest card penetration in SEA — Visa and Mastercard are widely held. Most adults have internet banking. This makes Singapore the most "Western-compatible" market in SEA for SaaS subscription billing.

### PayNow
**What it is:** Singapore's national real-time fund transfer scheme, operated by the Association of Banks in Singapore. Links to bank accounts via mobile number, NRIC/FIN, or UEN (business identifier). Widely supported by all major Singapore banks (DBS, OCBC, UOB, HSBC, Standard Chartered, Citibank).

**Adoption:** Very high. PayNow is used for peer-to-peer transfers, government disbursements, and increasingly for merchant payments.

**Recurring support:** ⚠️ Limited. PayNow is primarily designed for one-time transfers. GIRO (General Interbank Recurring Order) supports recurring bank debits in Singapore but has a slow setup process (paper or online mandate). For SaaS subscriptions, card-on-file is more practical than GIRO for most use cases. PayNow is best used for one-time or annual billing.

**UX flow:**
```
User selects PayNow at checkout
        ↓
QR code displayed (or PayNow ID / phone number shown)
        ↓
User opens bank app → scan QR or enter PayNow ID
        ↓
Confirms amount in bank app
        ↓
Payment confirmation received by merchant (real-time)
        ↓
Access granted / order confirmed
```
**Gateway support:** Stripe (Singapore), Adyen, 2C2P.
**B2C SaaS note:** Best suited for annual plan payments or one-time credit top-ups. For monthly recurring, use card-on-file.

### GrabPay (Singapore)
**What it is:** Grab's digital wallet, embedded in the Grab superapp (ride-hailing, food delivery, financial services). Widely installed across Singapore's smartphone user base.

**Adoption:** High among Grab users. Less dominant than PayNow for pure payment use cases.

**Recurring support:** ❌ **Not supported via Adyen** (Adyen's GrabPay integration documentation explicitly shows Recurring = not supported, April 2026 [Verified]). GrabPay does have an account-linking / recurring capability at the wallet level in some markets, but it is not exposed through Adyen's standard GrabPay integration and requires a direct Grab merchant partnership to access. For most SaaS merchants, treat GrabPay as a one-time wallet unless a direct Grab partnership is in scope. [Estimated — direct-partnership availability subject to verification]

**B2C SaaS note:** Viable for one-time purchases and top-ups. Do not plan monthly recurring billing on GrabPay without confirming a direct Grab partnership path first.

### NETS
**What it is:** Singapore's local debit payment network, primarily used for point-of-sale transactions. NETS QR exists for online and mobile payments.

**Recurring support:** ❌ No.
**B2C SaaS note:** Low relevance for digital SaaS; primarily physical retail.

---

## Malaysia

### Card Penetration & Banking
Malaysia has relatively high card penetration for SEA. Credit and debit cards (Visa/Mastercard) are widely held, particularly in urban areas. Internet banking adoption is strong.

### Touch 'n Go eWallet (TnG)
**What it is:** Originally a transit card (highways, public transport), Touch 'n Go evolved into one of Malaysia's dominant digital wallets via the TnG eWallet app. Backed by Ant Group (Alipay). Accepts QR payments, online payments, and bill payments.

**Adoption:** Very high — one of Malaysia's most widely used payment apps.

**Recurring support:** ⚠️ Gateway-dependent and not broadly available. **Adyen's Touch 'n Go integration does NOT support recurring** (Recurring explicitly marked unsupported in Adyen feature table, April 2026 [Verified]). A TnG–Curlec partnership enabling subscription/recurring billing has been reported; verify the current status of that partnership and the specific gateway path before relying on it. [Estimated — Curlec partnership status requires verification]

**UX flow:**
```
User selects TnG eWallet at checkout
        ↓
Redirect to TnG app (or in-app deep link)
        ↓
User confirms payment + authorises recurring debit in TnG interface
        ↓
Callback to merchant on success
        ↓
Access granted — subsequent charges auto-deducted
```
**Gateway support:** Stripe (Malaysia), Xendit, 2C2P, iPay88, Adyen.
**B2C SaaS note:** For Malaysian recurring billing, do not assume TnG recurring is available by default. Adyen's integration is one-time. Verify with 2C2P or with Curlec directly if TnG recurring is a required path. For most SaaS merchants, use TnG for one-time/annual payments and rely on card-on-file or App Store IAP for monthly recurring.

### DuitNow
**What it is:** Malaysia's national real-time payment scheme, equivalent to Singapore's PayNow. Bank-to-bank transfers via mobile number or IC number. DuitNow QR is Malaysia's standardised QR payment system, accepted by all major Malaysian banks.

**Adoption:** High and growing. Government-backed, supported by all major banks (Maybank, CIMB, Public Bank, RHB, etc.).

**Recurring support:** ⚠️ DuitNow AutoDebit exists for recurring debits but requires CASA (Current/Savings Account) mandate setup. More complex than card recurring. Primarily used for utility bill autopay, not SaaS.

**B2C SaaS note:** Best for one-time and annual payments. Card-on-file remains the practical path for monthly recurring.

### FPX (Financial Process Exchange)
**What it is:** Malaysia's online banking payment gateway — redirects users to their bank's internet banking portal to complete payment. Used widely for e-commerce in Malaysia.

**Adoption:** High, particularly for higher-value online transactions where users prefer bank-direct over wallet.

**Recurring support:** ❌ No. FPX is a one-time transaction method by design.

**UX flow:**
```
User selects FPX at checkout
        ↓
Bank selection list displayed (Maybank, CIMB, Public Bank, etc.)
        ↓
Redirect to selected bank's internet banking
        ↓
User authenticates and confirms payment
        ↓
Redirect back to merchant on success/failure
```
**Gateway support:** Stripe (Malaysia), iPay88, Billplz, MOLPay.

---

## Indonesia

Indonesia is the largest and most complex SEA market for payments. High smartphone penetration but low credit card penetration (~5% of adults). The e-wallet ecosystem is highly competitive with multiple dominant players. National QR standard (QRIS) has significantly simplified merchant acceptance.

### QRIS (Quick Response Code Indonesian Standard)
**What it is:** Bank Indonesia's national QR code standard, launched in 2019. A single QR code that accepts payment from any QRIS-compatible app — GoPay, OVO, Dana, ShopeePay, bank apps, and all others. Eliminates the need for merchants to display multiple QR codes.

**Adoption:** Very high and growing. Bank Indonesia mandated QRIS compliance for all payment service providers. As of 2023, QRIS transactions have grown significantly year-over-year.

**Recurring support:** ❌ No. QRIS is a one-time scan-and-pay standard.

**B2C SaaS note:** Excellent for one-time payments and annual plan billing on mobile. Not usable for monthly recurring subscriptions.

### GoPay
**What it is:** Gojek's digital wallet — embedded in the GoTo superapp (ride-hailing, food delivery, GoTo Financial). One of Indonesia's largest e-wallets by transaction volume.

**Adoption:** Very high among urban users. Gojek's distribution across ride-hailing and food delivery created massive GoPay adoption.

**Recurring support:** ⚠️ **Supported via GoPay Tokenization.** Midtrans formally documents GoPay Tokenization (Direct Debit) — merchants initiate account linking via API, and subsequent recurring charges are merchant-initiated without user re-authentication. Adyen also supports GoPay subscription contract type. Requires: (1) account linking flow at first payment, (2) merchant integration via Midtrans or Adyen. More complex than card-on-file but not restricted by merchant category.

**Gateway support:** Midtrans (GoTo-owned, recommended path for GoPay recurring), Xendit, Adyen, DOKU.

### OVO
**What it is:** OVO is a digital wallet backed by Grab and Tokopedia. Widely used for Grab services in Indonesia, Tokopedia purchases, and general merchant payments.

**Adoption:** High, particularly in Jakarta and major cities. One of the top 3 Indonesian wallets alongside GoPay and Dana.

**Recurring support:** ⚠️ Limited recurring support via OVO PayLater (credit product) but not standard wallet recurring. One-time transactions are the standard.

**Gateway support:** Xendit, Midtrans, DOKU.

### Dana
**What it is:** Dana is a digital wallet backed by Ant Group (Alipay). Positioned as a general-purpose financial super-app in Indonesia. Strong adoption among younger, urban demographics.

**Adoption:** High and growing. Third-largest Indonesian wallet by user count.

**Recurring support:** ❌ Standard Dana wallet: one-time only.

**Gateway support:** Xendit, DOKU.

### ShopeePay
**What it is:** Shopee's integrated digital wallet, embedded in the Shopee e-commerce app. Widely used for Shopee purchases; also expanding to merchant QR payments via QRIS.

**Adoption:** Very high among Shopee's large Indonesian user base.

**Recurring support:** ⚠️ SPayLater is Shopee's BNPL product; standard ShopeePay is one-time.

### Virtual Accounts (Indonesia)
**What it is:** A virtual bank account number generated for each transaction, linked to a specific amount. The user transfers exactly that amount to the virtual account number via internet banking, mobile banking, ATM, or convenience store. Confirmation is automatic when the exact amount is received.

**Why it matters:** Virtual accounts are one of the most widely used payment methods for higher-value online transactions in Indonesia, particularly among users who are uncomfortable with wallet-based payments or who are making purchases above typical wallet limits.

**Adoption:** Very high for online transactions above ~IDR 100,000 (approx. $6). Supported by all major Indonesian banks (BCA, Mandiri, BNI, BRI, Permata, CIMB Niaga).

**Recurring support:** ❌ No. Each transaction generates a new virtual account number. Not usable for automatic recurring billing.

**UX flow:**
```
User selects Virtual Account + Bank at checkout
   (Bank options: BCA, Mandiri, BNI, BRI, Permata, etc.)
        ↓
Virtual account number generated and displayed
   → Amount to transfer shown
   → Expiry time shown (typically 24–72 hours)
        ↓
User opens their bank's mobile app, internet banking, or ATM
   → Transfers exact amount to virtual account number
        ↓
Payment automatically confirmed on receipt
        ↓
Access granted / order fulfilled
```

**Gateway support:** Xendit (excellent VA coverage), Midtrans, DOKU, Nicepay.
**B2C SaaS note:** Best for annual plans and higher-value one-time purchases. Not viable for monthly recurring. Expiry management (reminding users to complete payment before VA expires) is a key UX consideration.

### Indomaret / Alfamart (Convenience Store Payments)
**What it is:** Cash payments at convenience store chains (Indomaret, Alfamart) using a payment code. User receives a code, goes to a physical store, pays cash, and the payment is confirmed digitally.

**Adoption:** Significant among underbanked populations and in non-urban areas.

**Recurring support:** ❌ No. Cash-based, one-time by definition.

**B2C SaaS note:** Relevant for reaching the broadest Indonesian market but operationally complex. Not practical for monthly subscription. Consider for annual or one-time plans targeting non-urban or lower-income segments.

### BNPL Indonesia — Kredivo, Akulaku
**What it is:** Buy Now Pay Later products allowing users to split purchases across 3–12 monthly instalments. Kredivo and Akulaku are the dominant players. Akulaku also operates as a broader fintech platform.

**Adoption:** Growing significantly, particularly for consumer electronics and higher-value purchases.

**Recurring support:** ❌ Not applicable — BNPL is a credit product, not a recurring billing mechanism.

**B2C SaaS note:** Potentially relevant for annual plan purchases — allowing users to split a $100 annual plan into monthly instalments makes the annual option more accessible for price-sensitive segments. Requires merchant integration with Kredivo/Akulaku.

---

## Vietnam

Vietnam has relatively low card penetration and a government-driven push toward cashless payments. The State Bank of Vietnam has actively promoted QR payments and e-wallets. International card use is growing but mainly concentrated among urban professionals and frequent travellers.

### Momo
**What it is:** Vietnam's largest and most trusted e-wallet (~31 million registered users as of recent reports). Momo operates as a super-wallet covering payments, top-ups, bill payments, insurance, investment, and consumer lending.

**Adoption:** Dominant. Momo is the closest Vietnam has to a "default" digital payment for younger, urban users.

**Recurring support:** ⚠️ **Supported via MoMo tokenization API (Thanh Toán Tự Động).** MoMo has a formally documented recurring payment API for merchants. The user authorises once at account linking, and subsequent charges are auto-debited without re-authentication. MoMo sends payment reminders to users before each deduction cycle. Not limited to utilities — available for digital subscription services via the MoMo Developer Portal. Requires merchant API integration and MoMo partner approval.

**UX flow (initial linking):**
```
User selects MoMo recurring at checkout
        ↓
Redirect to MoMo app
        ↓
User reviews subscription terms + authorises recurring debit (one-time)
        ↓
Account linking token issued to merchant
        ↓
Subsequent charges: merchant-initiated, auto-deducted, user notified
```
**Gateway support:** 2C2P, PayOS, OnePay. Direct MoMo API integration also available for merchants with MoMo partner status.
**B2C SaaS note:** MoMo recurring is viable for Vietnam — more accessible than previously documented. Requires MoMo developer account and partner onboarding, not available via Stripe's Vietnam integration.

### ZaloPay
**What it is:** Zalo's digital wallet, embedded in Vietnam's dominant messaging app (Zalo, ~74 million monthly active users). ZaloPay benefits from Zalo's distribution advantage — it is pre-installed with the app most Vietnamese users already have.

**Adoption:** High and growing. Second-largest Vietnamese wallet. Zalo's messaging integration creates natural payment moments.

**Recurring support:** ⚠️ Limited recurring support. Primarily one-time transactions.

**Gateway support:** VNPAY, PayOS, OnePay, Napas.
**B2C SaaS note:** Strong acquisition channel given Zalo's distribution. Consider ZaloPay-based promotions distributed via Zalo messaging for product launches.

### VNPay
**What it is:** Vietnam's dominant QR payment and bank transfer aggregator. VNPay-QR is the national QR standard, accepted by most Vietnamese banks' mobile apps. VNPay also operates as a payment gateway aggregating bank transfers, wallet payments, and QR.

**Adoption:** Extremely high for QR-based payments. VNPay-QR is scanned from virtually any Vietnamese bank app.

**Recurring support:** ⚠️ **Partial — and SaaS use is not well documented.**
- **VNPay-QR (push QR):** ❌ One-time only by design. The user scans and approves each payment individually. [Verified]
- **VNPay Auto-Debit:** Exists and is deployed for specific use cases (utility bills, insurance, education fees, some telcos). **General-purpose SaaS subscription billing via VNPay Auto-Debit is not clearly documented in public VNPay API sources as of April 2026.** [Estimated — treat as unsupported for SaaS unless verified per integration with VNPay directly.]

For B2C SaaS recurring billing, do not plan around VNPay Auto-Debit without first confirming eligibility with VNPay's merchant onboarding team. The capability exists in the VNPay ecosystem but is not a self-serve SaaS-ready rail in the same way MoMo's Subscription API is.

**Gateway support:** VNPay is itself a gateway. Also integrated in 2C2P, OnePay, PayOS.
**B2C SaaS note:** VNPay-QR is essential for one-time and annual payments. For monthly recurring in Vietnam, MoMo's Subscription API is the more documented and SaaS-viable path — not VNPay Auto-Debit. Do not assume QR capability = recurring capability.

### ViettelPay
**What it is:** Viettel's digital wallet and payment platform. Viettel is Vietnam's largest telecom operator. ViettelPay benefits from Viettel's mobile subscriber base and physical agent network.

**Adoption:** Strong in non-urban areas where Viettel's agent network is the most accessible financial touchpoint.

**Recurring support:** ❌ No.
**B2C SaaS note:** Relevant for reaching Vietnam's broader geographic user base beyond major cities.

### Internet Banking (Napas)
**What it is:** Napas (National Payment Corporation of Vietnam) operates Vietnam's interbank payment infrastructure. Most Vietnamese bank mobile apps support Napas-based transfers and QR payments.

**Adoption:** High, particularly for higher-value transactions.

**Recurring support:** ❌ **Not supported via Adyen — corrected April 2026.** NAPAS operates as both a transfer network and a domestic card network. In both cases, the recurring capability is limited:
- **NAPAS bank transfers / QR:** ❌ One-time push payments. No recurring. [Verified]
- **NAPAS domestic debit/ATM cards:** ❌ **Adyen's NAPAS card integration documentation explicitly shows Recurring = not supported** (feature table, April 2026) [Verified]. Earlier claims in this knowledge base that NAPAS cards support Subscription via Adyen were incorrect. NAPAS's own scheme documentation does reference tokenization primitives, but a production-grade gateway path to SaaS-ready NAPAS recurring does not exist as of April 2026.

**B2C SaaS note:** For Vietnam recurring billing, NAPAS cards are NOT a viable rail via Adyen. The documented, SaaS-viable Vietnam recurring path is **MoMo's Subscription API** (via MoMo direct integration, 2C2P, PayOS, or OnePay). For users without MoMo, fall back to international card-on-file (Visa/Mastercard) or App Store / Google Play IAP.

---

## Philippines

The Philippines has been one of the fastest-growing digital payment markets in SEA, accelerated significantly by the COVID-19 pandemic and BSP (Bangko Sentral ng Pilipinas) policy promoting digital financial inclusion.

### GCash
**What it is:** Globe Telecom's digital wallet — the Philippines' most widely adopted financial app with over 90 million registered users (2023 reports). GCash functions as a bank account substitute for many Filipinos, supporting payments, transfers, savings, loans, and insurance.

**Adoption:** Dominant. GCash is the primary financial tool for a large segment of the Philippine adult population.

**Recurring support:** ⚠️ **Supported — but gateway-dependent.** GCash auto-debit for recurring subscriptions is confirmed working with major digital subscription services — Spotify, Netflix, Disney+, Google Play, Apple subscriptions charge GCash on a recurring basis. For third-party merchants, recurring GCash is available via **PayMongo, Xendit, and the Ezypay–GCash–Xendit partnership** (launched Nov 2024) [Verified]. **Adyen's GCash integration does NOT support recurring** (Adyen feature table, April 2026 [Verified]) — this is the key correction if your gateway plan assumed Adyen for SEA wallet recurring.

The previous characterisation of "select billers (utilities, government) only" is inaccurate. GCash recurring is available for digital subscription merchants. The constraints are integration complexity and specifically which gateway you use — not merchant category restriction.

**UX flow (initial subscription):**
```
User selects GCash at checkout
        ↓
Redirect to GCash app (deep link)
        ↓
User authenticates (MPIN) + authorises recurring debit
        ↓
Account link established
        ↓
Success callback to merchant
        ↓
Access granted — subsequent charges auto-deducted from GCash
```
**Gateway support:** PayMongo (recommended for Philippines SaaS), Xendit, Adyen, Paynamics.
**B2C SaaS note:** GCash recurring is a viable primary recurring billing method for Philippine subscribers. Integrate via PayMongo or Xendit. Ensure your checkout communicates that GCash will be charged automatically each cycle — users must understand this is an ongoing authorisation, not a one-time payment.

### Maya (formerly PayMaya)
**What it is:** Voyager Innovations' digital bank and wallet platform. Maya is GCash's primary competitor — offering digital wallet, Maya Bank (savings account), prepaid card, and payments. Particularly strong in the professional and higher-income segment.

**Adoption:** Second-largest Philippine e-wallet. Growing digital bank adoption (Maya Bank).

**Recurring support:** ⚠️ Limited. Maya supports card-on-file for some merchant recurring setups but general wallet recurring is not standard.

**Gateway support:** PayMongo, Xendit, PayGate.
**B2C SaaS note:** Pair GCash + Maya for broad Philippine coverage.

### OTC Payments (7-Eleven, Bayad Center, MLhuillier, Cebuana)
**What it is:** Over-the-counter cash payments at convenience stores and remittance centres. A significant payment channel for Filipinos who remain unbanked or prefer cash transactions.

**Adoption:** High relevance for users outside major urban centres.

**Recurring support:** ❌ No. Cash-based, one-time.

**B2C SaaS note:** Consider for annual plan one-time payments targeting broader Philippine geographic coverage. Requires payment code generation and expiry management.

### InstaPay / PESONet (BSP Payment Schemes)
**What it is:** BSP's national real-time payment infrastructure. InstaPay enables instant bank-to-bank transfers (up to PHP 50,000 per transaction). PESONet handles batch bank transfers for higher amounts. Accessible via most Philippine bank apps.

**Adoption:** Growing. Government-mandated support across Philippine banks.

**Recurring support:** ❌ No. InstaPay is one-time transfer.

---

## Thailand

Thailand has a sophisticated national payment infrastructure built around PromptPay, one of the most successful real-time payment systems in Asia. QR payments are ubiquitous in urban Thailand.

### PromptPay
**What it is:** Thailand's national real-time payment system, operated by NITMX (National ITMX). Transfers via mobile number, national ID, or company tax ID. PromptPay QR is the national QR standard — generated by any Thai bank app and scanned by any other bank app.

**Adoption:** Extremely high. PromptPay has processed hundreds of billions of THB annually since launch. QR code payments at physical merchants are near-universal in Bangkok and major cities.

**Recurring support:** ❌ PromptPay is a push-payment system (user initiates). No pull/recurring capability.

**UX flow:**
```
User selects PromptPay QR at checkout
        ↓
QR code displayed (amount embedded)
        ↓
User opens any Thai bank app → scan QR
        ↓
Confirm amount and bank account name
        ↓
Instant transfer confirmation
        ↓
Merchant receives real-time notification
        ↓
Access granted
```
**Gateway support:** 2C2P (strongest Thailand coverage), Omise, Stripe (Thailand), Opn Payments.
**B2C SaaS note:** Essential for Thailand. PromptPay QR should be the primary payment method for Thai users. Annual billing via PromptPay one-time payment is the recommended SaaS approach.

### TrueMoney Wallet
**What it is:** True Group's digital wallet, backed by Ant Group (Alipay). Embedded in the True ecosystem (telecom, internet, media). Used for bill payments, top-ups, and general merchant payments.

**Adoption:** High among True subscribers and broader wallet users. TrueMoney is also widely used in Myanmar, Cambodia, and other regional markets.

**Recurring support:** ❌ Standard TrueMoney wallet: one-time.

**Gateway support:** 2C2P, Omise.

### Rabbit LINE Pay
**What it is:** LINE's digital wallet integrated into LINE (Thailand's dominant messaging app, ~50M users). LINE is to Thailand what Zalo is to Vietnam — the dominant messaging platform with an embedded payment layer.

**Adoption:** High among LINE users.

**Recurring support:** ⚠️ Limited recurring support for select partners.

**B2C SaaS note:** LINE's distribution in Thailand (used by ~70% of Thai smartphone users) makes LINE-based promotions and notifications highly effective as a marketing channel, separate from payment utility.

---

## Recurring Billing Strategy for SEA — Summary

Given that most SEA payment methods do not support recurring billing, the practical strategies for SaaS are:

### Strategy 1: App Store / Google Play IAP (Recommended for mobile-first)
Apple and Google handle recurring billing locally — they integrate with GCash, GoPay, OVO, TnG, PromptPay, and local bank apps for initial purchase, and manage recurring charge logic internally. The product receives revenue net of platform commission (15–30%). Most practical path for B2C mobile SaaS in SEA.

```
User subscribes via in-app purchase
        ↓
App Store / Play Store presents local payment methods
        ↓
User selects preferred local method
        ↓
Platform handles recurring charge on each cycle
        ↓
Developer receives revenue via platform payout (net of commission)
```

### Strategy 2: Annual Billing with One-Time Local Payment
Offer an annual plan at a meaningful discount (~25–30%). The entire annual charge is a single one-time transaction — compatible with all SEA payment methods including e-wallets, QR, and virtual accounts. Monthly plan is available for card-holding users.

```
Annual plan: IDR 299,000/year (one-time, via QRIS / GoPay / Virtual Account)
Monthly plan: IDR 35,000/month (card-on-file or App Store only)
```

### Strategy 3: Credit/Token Model
Replace monthly subscription with prepaid credits (as documented in the Usage-Based model). Each top-up is a single transaction. Users choose when to top up. Compatible with all SEA methods. Eliminates the recurring billing infrastructure problem entirely.

### Strategy 4: Card-on-File (Singapore, Malaysia primarily)
For markets with higher card penetration (SG, MY), card-on-file recurring via Stripe is viable and practical. Monthly subscription standard flow works.

---

## Key B2C SaaS Considerations for SEA

**Localise pricing, not just currency.** IDR 150,000/month (~$9.30) is not the same as a $9 plan for an Indonesian user — it must be benchmarked against local purchasing power and competing local products. Research local software pricing expectations before converting your USD price.

**E-wallet balance limits matter.** Most SEA e-wallets have balance limits (e.g., GCash standard: PHP 100,000; unverified accounts: PHP 8,000). A premium annual plan priced above these limits may require the user to have a verified account or split across multiple payment events.

**Network reliability in payment flows.** Mobile internet connections in Indonesia, Vietnam, and Philippines can be inconsistent. Payment flows with multiple redirects (wallet app → merchant → bank app → merchant) must handle network interruptions gracefully. Timeout handling, clear "payment pending" states, and robust webhook reconciliation are not optional.

**Trust in unknown brands.** In SEA, consumers are more cautious about paying unfamiliar SaaS products — particularly on recurring billing. Social proof (reviews, download counts, local testimonials), clear refund policies, and local customer support channels (WhatsApp, Facebook Messenger) meaningfully improve conversion.

**Vernacular language support.** In Vietnam, Indonesia, and Philippines, payment-related copy in the local language (Vietnamese, Bahasa Indonesia, Filipino/Tagalog) reduces abandonment at checkout. At minimum, error messages and billing notifications should be localised.

---

*Last updated: April 2026*
