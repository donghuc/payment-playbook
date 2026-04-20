# Other Gateways — Adyen, Mollie, GoCardless, Paddle, Braintree

> Part of the Payment Gateways series. See [payment-gateways.md](../payment-gateways.md) for the full index.

---

## Adyen

### What It Is
Adyen is a Dutch payment company offering a unified global payment platform — gateway, acquirer, risk management, and issuing in one. Founded in 2006, Adyen is the payment infrastructure of choice for large-scale consumer businesses: Spotify, Uber, Netflix, Airbnb, eBay, and McDonald's are among its clients.

Where Stripe is built for developer self-serve at any scale, Adyen is built for enterprise-scale payment operations that need maximum global reach, local acquiring relationships, and fine-grained financial control.

### Coverage
Adyen processes payments in 150+ currencies, supports 250+ payment methods globally, and has local acquiring relationships in 40+ markets — meaning transactions are processed locally (lower decline rates, lower interchange fees) rather than routed internationally.

**Key SEA coverage:** Indonesia, Malaysia, Singapore, Thailand, Philippines, Vietnam — with local acquiring in Singapore and Malaysia.
**Key EU coverage:** Full SEPA zone, all major European local methods, local acquiring in most EU countries.

### Pricing — Interchange++
Adyen uses interchange++ pricing, not blended rates. This means:
```
Transaction fee = Interchange (card network fee) + Scheme fee (Visa/MC fee) + Adyen processing margin
```

This is more complex to model than Stripe's flat 2.9% + $0.30, but becomes meaningfully cheaper at high volume ($1M+/month in processing) because you pay the actual interchange cost rather than a blended estimate that includes Stripe's margin.

**Processing margin:** Typically €0.10–0.30 per transaction + 0.3–0.8% (varies by volume and negotiation). For reference: EU debit card interchange is ~0.2%; EU credit card interchange is ~0.3%; US credit card interchange is ~1.8–2.1%. At scale, these differences are significant.

**Minimum volume:** Adyen has minimum monthly fees (~€120/month) and minimum volume expectations for onboarding. Not appropriate for early-stage products without meaningful transaction volume.

### Key Features vs. Stripe
- **Local acquiring:** Lower decline rates in markets where Adyen has local acquiring (transactions appear as local, not international)
- **Unified reporting:** Single data platform across all markets, payment methods, and channels
- **Risk management:** Advanced fraud tooling with more configurable rules than Stripe Radar
- **Issuing:** Adyen can issue payment cards (Adyen Issuing) — relevant for platforms that want to give cards to users or employees
- **Adyen for Platforms:** Similar to Stripe Connect for marketplace payouts

### When to Choose Adyen Over Stripe
- Processing volume above ~$10M/year where interchange++ pricing is cost-advantageous
- You need local acquiring in markets beyond Stripe's acquiring footprint
- You need unified payment data across complex, multi-entity operations
- You have a dedicated payment engineering team that can manage Adyen's more complex integration
- Enterprise risk management requirements beyond Stripe Radar's capabilities

### Limitations
- Integration complexity is significantly higher than Stripe — requires dedicated payment engineering
- Sales-assisted onboarding; no purely self-serve path at most tiers
- Documentation is comprehensive but less approachable than Stripe's
- Not cost-effective below ~$1M/year in processing volume
- Support structure is enterprise-account-managed, not self-serve chat

---

## Mollie

### What It Is
Mollie is a Netherlands-based payment service provider, primarily serving European merchants. Founded in 2004, Mollie has a strong reputation for simple integration, transparent pricing (no monthly fees, pay per transaction), and excellent local European payment method support.

Mollie's strength is Western Europe — particularly Netherlands, Belgium, Germany, France, Spain, UK, and Austria.

### Coverage & Methods
Cards (Visa, Mastercard, Amex), iDEAL, Bancontact, SOFORT/Klarna, Klarna Pay Later, SEPA Direct Debit, Belfius, KBC/CBC, Apple Pay, Google Pay, PayPal, Przelewy24, EPS (Austria), Giropay, Cartes Bancaires (France)

### Pricing (Indicative)
- EU cards: 1.8% + €0.25
- Non-EU cards: 2.8% + €0.25
- iDEAL: €0.29 flat
- SEPA Direct Debit: €0.25 (+ €0.25 failed payment fee)
- Bancontact: 1.8% + €0.25
- No monthly fees — pure pay-per-transaction

### SaaS Billing Features
Mollie offers **Mollie Subscriptions** — a subscription management layer with recurring billing, invoice generation, and customer management. Less feature-rich than Stripe Billing but adequate for straightforward tiered subscription products.

### When to Choose Mollie
- Netherlands or Belgium is your primary European market and you want optimised local support
- You want a European-based processor (for regulatory or data residency preferences)
- Stripe feels over-engineered for your needs and you want simpler local EU coverage
- Mollie's pay-per-transaction pricing (no monthly fees) fits your early-stage economics

### Limitations
- No SEA coverage — EU-focused only
- Subscription billing less feature-rich than Stripe Billing
- Smaller developer ecosystem than Stripe
- Less relevant if Stripe already covers your EU payment method needs adequately

---

## GoCardless

### What It Is
GoCardless is the global leader in bank-to-bank recurring payment collection — Direct Debit specialist. Founded in 2011 in London, GoCardless processes Direct Debit payments in the UK (BACS), EU (SEPA), US (ACH), Australia, New Zealand, and Canada.

GoCardless is not a general-purpose payment gateway — it does one thing exceptionally well: collecting recurring bank payments at lower cost than card-based billing.

In 2022, GoCardless acquired Nordigen, an Open Banking data platform, giving it bank account verification and financial data capabilities alongside payment collection.

### Coverage
- **UK:** BACS Direct Debit
- **EU:** SEPA Direct Debit (all 36 SEPA countries)
- **US:** ACH Debit
- **Australia / New Zealand:** BECS / Direct Debit
- **Canada:** PAD (Pre-Authorised Debit)

### Pricing (Standard plan, as of April 2026 [Verified — gocardless.com/pricing-eu])
- **UK (BACS):** 1% + 20p, capped at £2 domestic (Advanced plan: 1.25% + 20p, cap £2.50)
- **EU (SEPA):** 1% + €0.20, capped at €2 domestic (Advanced plan: 1.25% + €0.20, cap €2.50)
- **US (ACH):** 1% + $0.25, capped at $2.50 domestic
- **International surcharge (cross-border):** +2% on Standard, +2.25% on Advanced
- **Failed payment fee:** typically £0.50 / €0.50 / $0.50 (verify current rate card before quoting)

**Correction note (April 2026):** A previous version of this document cited a €4 cap for EU SEPA. GoCardless's own published Standard plan rate card shows a €2 cap; €4 appears on some third-party summaries but does not match the current GoCardless pricing page. If your strategy relied on the €4 figure, the unit economics are even more favourable than previously modelled.

**Worked comparison vs. Stripe SEPA Direct Debit (€0.80 flat + 0.5% Stripe Billing fee on recurring revenue):**
- €10/month charge: GoCardless 1% + €0.20 = **€0.30**. Stripe €0.80 + €0.05 = **€0.85**. GoCardless wins.
- €100/month charge: GoCardless 1% + €0.20 = **€1.20**. Stripe €0.80 + €0.50 = **€1.30**. GoCardless narrowly wins.
- €500 annual charge: GoCardless capped at **€2.00**. Stripe €0.80 + €2.50 = **€3.30**. GoCardless wins.

GoCardless is generally cheaper once Stripe Billing fees are included, across both low-value monthly and high-value annual charges. If you self-build subscription logic on Stripe Payments (without Stripe Billing), the gap narrows substantially — model the comparison with your actual fee stack, not the headline per-transaction rate. Volume-negotiated rates on either platform can shift the comparison further.

### Why Direct Debit for SaaS
Bank Direct Debit has structural advantages over card billing for subscriptions:
- **Lower failure rate:** Bank accounts don't expire like cards; account closure is less common than card expiry
- **Lower cost:** Direct Debit fees are typically lower than card interchange at scale
- **Higher trust for consumers:** Many European consumers trust Direct Debit more than sharing card details for recurring billing (utilities have trained this behaviour)
- **No fraud disputes on recurring charges:** Unlike card chargebacks, BACS Direct Debit disputes require more active consumer action

### GoCardless + Stripe Integration
GoCardless and Stripe can be run alongside each other:
- Stripe handles card payments, Apple Pay, Google Pay, local one-time methods
- GoCardless handles SEPA Direct Debit / BACS recurring billing

GoCardless provides a Stripe App (in Stripe's App Marketplace) for integrated use. This is the recommended architecture when EU subscriber volume justifies the additional integration complexity.

### When to Choose GoCardless
- EU subscriber base is large (5,000+ subscribers) and SEPA Direct Debit cost savings are meaningful
- UK is a primary market and BACS Direct Debit is preferred by your target audience (utilities, professional services)
- You want to offer bank-based recurring billing as an alternative to card for European users
- US ACH billing is required as a lower-cost alternative to card processing

### Limitations
- Not a general-purpose gateway — Direct Debit only
- Must pair with Stripe or another gateway for card and one-time payments
- SEPA Direct Debit mandate setup requires user IBAN input — more friction than card at initial setup
- Settlement is 2–5 business days (same as SEPA Direct Debit anywhere)

---

## Paddle

### What It Is
Paddle is a Merchant of Record (MoR) platform for SaaS companies. Unlike Stripe or Xendit — where you are the merchant and they are your payment processor — Paddle is the legal seller of your product in every market. Paddle handles the entire commercial and compliance layer: tax registration, VAT/GST collection and remittance, invoicing, chargebacks, and fraud.

**The MoR model in practice:**
- Your customer sees "Paddle" (or a white-labelled version) as the seller on their receipt
- Paddle registers for VAT/GST in every jurisdiction that requires it
- Paddle files and remits taxes on your behalf
- Paddle's agreements with payment networks cover you — you don't need your own PCI compliance assessment
- You receive net revenue (after Paddle's fees, taxes, and chargebacks) on Paddle's payout schedule

### Coverage
Global — Paddle accepts payments in 200+ countries and handles local payment methods through partnerships. Coverage includes cards, PayPal, Apple Pay, Google Pay. Local SEA method depth is not as strong as Xendit; EU local method depth not as strong as Stripe or Mollie.

### Pricing
Paddle charges a revenue share rather than a fixed per-transaction rate:
- Typically 5% + $0.50 per transaction (standard tier)
- Custom rates negotiable at volume
- All-inclusive: tax compliance, fraud protection, payment processing, chargebacks included

**Total cost comparison:**
At $10/month subscription, Stripe costs ~$0.60 (2.9% + $0.30) + tax handling overhead. Paddle costs ~$1.00 (5% + $0.50) but includes tax filing value. The Paddle premium pays for compliance outsourcing — whether it's worth it depends on the cost of handling tax compliance independently.

### Tax Compliance Value Proposition
For a product selling to customers in EU (VAT), UK (UK VAT), Australia (GST), Canada, and the US (sales tax in 40+ states), the tax registration, calculation, collection, filing, and remittance burden is significant. Registering for VAT in EU via OSS (One Stop Shop) is manageable. But handling US state-by-state sales tax, Canadian provincial taxes, and Australian GST simultaneously — while building a product — is a genuine operational overhead.

Paddle removes this overhead entirely. The premium over Stripe's processing cost is essentially the cost of tax compliance as a service.

### When to Choose Paddle
- Early-stage team selling globally without dedicated finance/tax resources
- Product is selling to US customers where sales tax nexus across 40+ states is a compliance burden
- You want a "sell globally from day one" posture without building a tax compliance infrastructure
- Chargeback management is a concern and you want Paddle to handle disputes

### When NOT to Choose Paddle
- You have already built tax compliance infrastructure (OSS-registered, Stripe Tax enabled)
- You need deep SEA local method coverage (Paddle's SEA payment method depth is limited)
- You want full control over the payment experience and customer data (MoR model means Paddle owns the billing relationship)
- Cost sensitivity at scale makes 5%+ revenue share prohibitive

### Lemon Squeezy (Alternative MoR)
Lemon Squeezy is a newer MoR platform with a similar positioning to Paddle but targeting indie developers and smaller SaaS products specifically. Pricing: 5% + $0.50 per transaction. Less enterprise-grade than Paddle but simpler self-serve setup. Worth evaluating for solo founders or small teams who want MoR simplicity.

---

## Braintree (PayPal)

### What It Is
Braintree is a payment gateway owned by PayPal. Founded in 2007, acquired by PayPal in 2013. Braintree's key differentiation is the depth of its PayPal and Venmo integration — as a PayPal subsidiary, Braintree has native access to the full PayPal payment ecosystem.

### Coverage & Methods
Cards (Visa, Mastercard, Amex, Discover), PayPal, Venmo (US), Apple Pay, Google Pay, SEPA Direct Debit, Bancontact, iDEAL, SOFORT, local ACH. Global card processing across 130+ currencies.

### Pricing
- Cards: 2.59% + $0.49 (US standard)
- PayPal: 3.49% + $0.49
- Custom pricing available at volume

### SaaS Billing Features
Braintree supports subscription and recurring billing via its Braintree Vault (secure payment method storage) and Plans/Subscriptions API. Less comprehensive than Stripe Billing but functional for standard subscription use cases.

### When to Choose Braintree
- PayPal and Venmo are critical payment methods for your US user base
- You want a single integration that covers PayPal, Venmo, and cards natively without third-party connectors
- You have an existing PayPal business relationship and want consolidated processing

### Limitations
- Less developer-friendly than Stripe (documentation quality gap)
- No SEA local method coverage
- PayPal ownership creates product strategy ambiguity
- Less active feature development than Stripe

---

## Summary Recommendation

For your B2C SaaS targeting SEA + Europe + Global:

**Primary gateway:** Stripe — handles global cards, EU local methods, select SEA methods, subscription billing, tax, fraud.

**SEA local methods:** Xendit — fills Indonesia/Philippines/Vietnam/Malaysia/Thailand local wallet and VA gaps.

**EU recurring billing at scale:** GoCardless (add when EU subscriber base justifies SEPA Direct Debit cost savings over Stripe's SEPA pricing).

**Scale/Enterprise (future):** Adyen — evaluate when processing volume makes interchange++ pricing advantageous, or when local acquiring in additional markets is strategically important.

**Tax compliance outsourcing (if needed):** Paddle or Lemon Squeezy — if tax compliance infrastructure is not yet in place and selling to US/global markets from day one.

---

*Last updated: April 2026*
