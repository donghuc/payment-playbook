# Payment Methods — Global Baseline

> Part of the Payment Methods by Market series. See [payment-methods.md](../payment-methods.md) for the full index.

---

## Overview

The global baseline is the universal payment stack that must work everywhere — the methods that, when combined, give meaningful coverage across North America, Australia, Latin America, Middle East, and the international users who don't fall neatly into SEA or European market definitions.

This file also covers cross-cutting considerations: how to build a globally interoperable payment layer, handling Chinese consumers (diaspora and international), cryptocurrency as an emerging channel, and the practical engineering decisions for multi-market payment infrastructure.

---

## Cards — Visa / Mastercard / Amex / Discover

**What it is:** The international card networks are the global baseline for digital payments. Visa and Mastercard together cover virtually every online payment market worldwide. American Express has meaningful adoption in the US, UK, and Australia (premium/business segment). Discover is US-centric.

**Coverage:** Global. Any product accepting cards accepts the vast majority of global payment volume.

**Recurring support:** ✅ Yes. Card networks fully support recurring billing via card-on-file tokenisation.

**Key global nuances:**

- **North America (US, Canada):** Extremely high card penetration. Credit card is the default payment method. Debit card usage is also high. PayPal adoption is strong.
- **Australia / New Zealand:** High card penetration. EFTPOS (Australia) is the local debit network but operates on Visa/Mastercard rails online.
- **Latin America:** Card penetration varies. Brazil has Pix (instant payment system) as a dominant alternative. Mexico uses OXXO (convenience store vouchers) and SPEI (bank transfers). Argentina has Mercado Pago dominance.
- **Middle East:** UAE, Saudi Arabia, and Gulf states have high card penetration among expatriates and urban populations. Local wallets growing (STC Pay in Saudi, Apple Pay widely used in UAE).
- **India:** RuPay (domestic card network) alongside Visa/Mastercard. UPI (Unified Payments Interface) is the dominant digital payment method — ~60–70% of digital transactions. International card penetration is moderate; UPI penetration is very high.

**Gateway support:** Stripe (global, best developer experience), Adyen (enterprise, widest local method support), Braintree (PayPal-owned, strong in US/EU), Checkout.com.

---

## PayPal

**What it is:** PayPal is a digital wallet and payment platform operating globally. Users hold a PayPal balance or link cards and bank accounts. PayPal-to-PayPal transactions are free; merchant payments use PayPal's checkout flow.

**Coverage:** 200+ markets. Very strong in US, UK, Germany, France, Australia, Canada, and most of Western Europe.

**Adoption:** ~**436–439 million active accounts** globally as of 2025 (Q4 2025 figure: 439M). PayPal has high consumer trust as a layer of abstraction over card details — many users prefer paying via PayPal because the merchant never sees their card number.

**Recurring support:** ✅ Yes. PayPal supports subscription billing via Billing Agreements (Reference Transactions). Users authorise a recurring charge from their PayPal balance or linked payment method.

**B2C SaaS note:** PayPal is a meaningful conversion lever for products targeting users who are uncomfortable sharing card details with new SaaS products. It reduces friction for initial trust. PayPal's buyer protection also lowers perceived risk for first-time customers.

**Gateway support:** Stripe (PayPal integration), Adyen, Braintree (PayPal-owned — deepest integration).

---

## Apple Pay

**What it is:** Apple's device-based payment system. Uses the payment card stored in Apple Wallet, authenticated via Face ID or Touch ID. Works on iPhone, iPad, Mac (with Touch ID), and Apple Watch. Apple Pay does not reveal card details to the merchant — a device account number (token) is transmitted instead.

**Coverage:** Available in 70+ countries. Strongest adoption in US, UK, Canada, Australia, Singapore, UAE, Western Europe, and Japan.

**Adoption:** Growing rapidly on mobile. In markets with high iPhone market share (US, UK, Japan, Nordics, Australia), Apple Pay adoption for mobile checkout is significant and growing.

**Recurring support:** ✅ Yes — via the card on file. Apple Pay tokens can be used for recurring billing.

**Conversion impact:** Research consistently shows that enabling Apple Pay improves mobile checkout conversion rate — measured impacts range from **5–20%+ improvement** across studies, with some specific implementations showing higher results. Stripe's published research and multiple industry studies confirm meaningful conversion uplift. The exact figure varies by product category, traffic source, and mobile/desktop split. A conservative expectation for mobile-heavy B2C SaaS is 5–10% conversion improvement; higher-friction pre-wallet checkouts see larger lifts.

**Gateway support:** Stripe (native, trivial to enable), Adyen, Braintree, virtually all major gateways. Enabling Apple Pay via Stripe requires a registered domain and Apple Pay certificate — Stripe handles most of this automatically.

---

## Google Pay

**What it is:** Google's equivalent — device-based payment using cards stored in Google Pay, authenticated via fingerprint or PIN. Works on Android devices and Chrome browser.

**Coverage:** **Google Pay was sunset in June 2024 and replaced by Google Wallet**, which is now available in **146 countries**. The "40+" figure widely cited in older documentation reflects a much earlier stage of the product. The renaming to Google Wallet does not change the payment functionality — it still enables card-on-file checkout via Android and Chrome.

**Adoption:** High on Android devices globally. Google Wallet/Pay has an advantage in Android-dominant markets (SEA, Eastern Europe, Latin America, India) where Apple Pay has no reach.

**Recurring support:** ✅ Yes — via the underlying card.

**Conversion impact:** Similar to Apple Pay — reduces checkout friction on Android, particularly meaningful in high-Android markets. Measured conversion lifts are comparable to Apple Pay in Android-dominant markets.

**Gateway support:** Stripe, Adyen, Braintree, and major gateways. Enabled alongside Apple Pay with minimal additional integration.

---

## WeChat Pay / Alipay — Chinese Market

**What it is:** China's two dominant payment super-apps. WeChat Pay is embedded in WeChat (Tencent), China's dominant messaging platform. Alipay is Ant Group's (Alibaba affiliate) payment platform. Together they handle the vast majority of digital consumer payments in China.

**Global relevance for B2C SaaS:**

1. **Chinese diaspora:** Overseas Chinese communities in Southeast Asia (particularly Singapore, Malaysia, and Indonesia), Europe, North America, and Australia maintain WeChat Pay / Alipay accounts linked to Chinese bank accounts. Accepting these methods opens access to this segment.
2. **Cross-border tourism:** Chinese travellers use WeChat Pay and Alipay internationally. Relevant for physical-world-adjacent B2C products.
3. **Mainland China market:** Direct access to mainland Chinese consumers requires separate merchant account setup, local entity/partnership, and compliance with Chinese data localisation laws. This is a significant undertaking beyond standard payment integration.

**Recurring support:** ⚠️ WeChat Pay and Alipay support recurring billing for specific merchant categories within China. For international merchants, recurring billing integration is limited. One-time payments are the standard international integration path.

**Gateway support:** Stripe (WeChat Pay, Alipay — for international merchant accounts in supported countries), Adyen (both), 2C2P (strong SEA/China connection).

**B2C SaaS note:** For a product targeting SEA Chinese diaspora (particularly Singapore and Malaysia), offering WeChat Pay and Alipay as checkout options is worth evaluating. For Mainland China — a separate market entry strategy is required, not just payment method addition.

---

## Cryptocurrency

**What it is:** Blockchain-based digital currencies — Bitcoin (BTC), Ethereum (ETH), USDT (Tether stablecoin), USDC (USD Coin stablecoin) — accepted as payment via crypto payment processors.

**Relevant processors:** Coinbase Commerce, BitPay, NOWPayments, Stripe (recently reintroduced stablecoin support in some markets).

**Adoption:** Small but growing niche. Crypto payment adoption for SaaS is driven by two specific segments:
1. Users in restricted payment markets (certain countries where card and bank transfer options are limited)
2. Privacy-conscious users who prefer pseudonymous payment
3. Web3-native communities and crypto-adjacent product categories

**Recurring support:** ⚠️ Stablecoin-based subscription billing is emerging but not yet mainstream. BitPay and Coinbase Commerce support recurring invoicing; automatic pull-based recurring charging is not yet standard.

**Volatility consideration:** Accepting volatile crypto (BTC, ETH) for SaaS subscriptions introduces exchange rate risk. Stablecoins (USDT, USDC) eliminate volatility but carry their own regulatory and counterparty considerations.

**B2C SaaS note:** Not a priority for most B2C SaaS products targeting SEA/Europe. Worth evaluating if the product has a crypto-native user base or targets markets with payment infrastructure limitations. If implemented, use a payment processor that immediately converts to fiat to eliminate exchange rate risk.

---

## Building a Globally Interoperable Payment Stack

The practical question is not "which methods exist" but "which combination of gateways and methods provides the right coverage with manageable engineering complexity."

### Recommended Stack for Your Context (SEA + Europe + Global)

**Tier 1 — Core global stack (Stripe)**
Stripe covers: Cards (global), SEPA Direct Debit (EU), iDEAL, Bancontact, SOFORT, Klarna, BLIK, Swish, PayPal, Apple Pay, Google Pay, WeChat Pay, Alipay, and select SEA methods (Singapore, Malaysia, Thailand, Indonesia, Philippines).

For most B2C SaaS products at early-to-mid stage, Stripe alone provides 80%+ of payment coverage across your target markets with a single integration. Start here.

**Tier 2 — SEA local method coverage (Xendit)**
Xendit covers: Indonesia (GoPay, OVO, Dana, Virtual Accounts, QRIS, retail outlets), Philippines (GCash, Maya, OTC), Malaysia (TnG, FPX), Vietnam (Momo, ZaloPay, VNPay), Thailand (PromptPay, TrueMoney).

Add Xendit when SEA local method conversion becomes a measurable priority — typically when user research shows that a meaningful segment of SEA users is abandoning at the payment method step.

**Tier 3 — App Store / Google Play IAP**
For mobile-first products, App Store and Google Play IAP should be enabled from day one. The platform handles SEA local method integration, recurring billing, currency conversion, and tax compliance. Commission (15–30%) is the cost of that convenience.

### Routing Logic

When running multiple gateways, implement routing logic to direct transactions to the appropriate gateway based on:
- Payment method type (SEPA → Stripe, GoPay → Xendit)
- User geography (detected at checkout)
- Fallback gateway if primary fails

```
Payment method selected by user
        ↓
Routing logic
   → Is it a SEA local method (e-wallet, VA, QR)?
      → Route to Xendit
   → Is it a European local method (SEPA, iDEAL, BLIK)?
      → Route to Stripe
   → Is it a card, PayPal, Apple Pay, Google Pay?
      → Route to Stripe (primary), Adyen (fallback)
        ↓
Gateway processes payment
        ↓
Webhook callback to your backend
        ↓
Access granted / subscription activated
```

### Currency Handling

Display price in the user's local currency. Allow payment in local currency where the gateway supports it. Don't force USD on non-US users — it creates friction and distrust.

```
Geo-detected user location
        ↓
Display pricing in:
   VN → VND | ID → IDR | TH → THB | MY → MYR
   PH → PHP | SG → SGD | EU → EUR | UK → GBP
   Default → USD
        ↓
Payment processed in local currency (where gateway supports it)
        ↓
Merchant receives settlement in configured payout currency
```

### Tax Handling

Different markets have different digital services tax obligations:
- **EU:** VAT on digital services (OSS — One Stop Shop registration for EU-wide compliance)
- **UK:** UK VAT on digital services (separate from EU post-Brexit)
- **Australia:** GST on digital services
- **Indonesia:** PPN (VAT) on digital services for foreign providers
- **Vietnam:** FCT (Foreign Contractor Tax) may apply

**Practical approach:** Use Stripe Tax (automated tax calculation and collection) or a dedicated tax compliance tool (Quaderno, Avalara, TaxJar) rather than managing tax rules manually per country. This is particularly important once revenue in any market triggers registration thresholds.

---

## Webhook Architecture — Critical for Multi-Gateway

Webhooks are the mechanism by which payment gateways notify your backend of payment events (success, failure, dispute, refund). In a multi-gateway environment, robust webhook handling is critical.

```
Core webhook events to handle:

payment.succeeded     → Grant access / activate subscription
payment.failed        → Trigger dunning / notification flow
subscription.renewed  → Log renewal / send receipt
subscription.cancelled → Schedule access end
charge.disputed       → Flag for review / pause account
refund.created        → Revoke access if applicable
```

**Key principle:** Never rely on redirect-based payment confirmation alone. The user's browser may close before the redirect completes — a webhook is the authoritative signal that a payment succeeded. Always reconcile subscription status against gateway webhooks, not just checkout session redirects.

---

## Dunning — Failed Payment Recovery

Applicable to all recurring billing markets. Dunning is the process of recovering failed subscription charges.

**Common failure reasons:**
- Expired card (card expiry is the most common involuntary churn cause)
- Insufficient funds
- Card blocked (fraud prevention)
- Bank declined (3DS challenge not completed)
- E-wallet balance insufficient (SEA)

**Standard dunning sequence:**
```
Day 0: Charge fails
   → Immediate email: "We couldn't process your payment"
   → In-product banner on next login
   → Direct link to update payment method

Day 3: Retry #1
   → Automated retry
   → If fails: follow-up email reminder

Day 7: Retry #2
   → Automated retry
   → If fails: "Your access will be suspended on [date]" warning

Day 14: Final retry
   → If fails: Subscription suspended (not deleted)
   → Access to data preserved; features locked
   → "Reactivate" path clearly accessible

Day 30: Final offboarding email
   → Data retention notice
   → Reactivation CTA
```

Stripe's built-in Smart Retries uses ML to optimise retry timing. Chargebee, RevenueCat, and Paddle offer more sophisticated dunning workflow tooling if needed.

---

*Last updated: April 2026*
