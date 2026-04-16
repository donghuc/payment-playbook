# EU Pricing

> Part of the Pricing Strategy pillar. See [pricing-strategy.md](../pricing-strategy.md) for the index.

---

## Overview

European pricing strategy involves three intersecting concerns: the commercial pricing decisions (what price to charge in each EU market), the legal compliance obligations (VAT-inclusive display, Omnibus Directive, auto-renewal disclosures), and the structural market realities (significant income variation from Western Europe to Eastern Europe, and the UK's post-Brexit status).

This file covers all three: concrete price ranges and psychological norms by major EU market, the VAT and Omnibus compliance requirements that directly affect how prices are displayed and promoted, and the strategic considerations for cross-European pricing coherence.

---

## EU Pricing Overview

### Income Distribution Across Europe

Europe is not a single income market. The per-capita income spread between Western Europe and Eastern Europe is roughly 3–5×, comparable in magnitude to the Singapore-to-Indonesia gap within SEA.

**Approximate GDP per capita (nominal, 2024–2025):**

| Country | GDP per capita (USD) | Relative to EU average |
|---------|---------------------|----------------------|
| Luxembourg | ~$135,000 | ~3× |
| Switzerland | ~$100,000 | ~2.2× (non-EU) |
| Norway | ~$94,000 | ~2× (non-EU) |
| Denmark | ~$68,000 | ~1.5× |
| Germany | ~$55,000 | ~1.2× |
| Netherlands | ~$61,000 | ~1.3× |
| UK | ~$51,000 | ~1.1× (non-EU) |
| France | ~$45,000 | ~1.0× (approximately EU average) |
| Spain | ~$33,000 | ~0.73× |
| Poland | ~$21,000 | ~0.47× |
| Romania | ~$16,000 | ~0.36× |
| Bulgaria | ~$13,000 | ~0.29× |

*These figures are approximate and should be verified against current IMF/World Bank data.*

**Implication:** A single EUR price will be very affordable for German users but relatively expensive for Romanian users. The decision to price uniformly across the EU (simpler) vs. applying intra-EU localisation (more complex, potentially more revenue) is context-dependent.

### Most SaaS Products Use a Single EUR Price

In practice, most B2C SaaS products use a single EUR price for all Eurozone users (and comparable prices in GBP, SEK, PLN, CHF for non-EUR EU/European markets). The rationale:

1. **Legal complexity:** Intra-EU price discrimination between EU consumers is restricted under the EU Geo-blocking Regulation (2018). While PPP-based price differences are not explicitly illegal (the regulation primarily targets unjustified blocking/redirecting), applying different prices to consumers in different EU member states based solely on their nationality creates legal exposure.

2. **Arbitrage at scale:** EU consumers can easily use VPNs or billing addresses in cheaper EU countries. Unlike SEA markets where payment method differences help enforce regional pricing, EU users mostly pay by card — the same card works everywhere.

3. **Operational simplicity:** A single EUR price eliminates per-country pricing infrastructure, localised legal terms, and currency management complexity for intra-EU sales.

**Exception — Poland:** Poland uses PLN (Polish Zloty), not EUR. Given Polish purchasing power (~47% of EU average), many SaaS companies set PLN prices at a meaningful discount to the EUR equivalent. This is common and accepted because PLN is a different currency, not a different EUR price for Polish vs. German users.

---

## Price Ranges by Major EU Market

### Germany (EUR)

Germany is the largest consumer market in the EU. German users are price-quality conscious — they respond to clear value demonstrations and are willing to pay for software they trust, but are suspicious of products that feel cheap or poorly designed. SEPA Direct Debit has very high adoption for recurring billing.

**Price ranges (EUR):**

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | €3–6 | €2.50–5 |
| Pro / Standard (most popular) | €8–15 | €6.50–12 |
| Premium / Advanced | €18–30 | €15–25 |

**Price psychology (EUR):**
- €9.99, €12.99, €14.99, €19.99 are standard B2C SaaS price points
- Round numbers (€10, €15, €20) work equally well for clean-brand products
- Germans historically show higher willingness-to-pay for privacy-focused products and tools with clear data protection positioning (relevant given strong GDPR culture)
- Annual billing is widely adopted in Germany; SEPA Direct Debit for annual billing is standard

### France (EUR)

Similar price ranges to Germany. France has slightly more sensitivity to the "value narrative" — French consumers respond well to products with clear cultural or creative positioning. PayPal adoption is high in France (stronger than in Germany proportionally).

Price ranges and psychology are closely similar to Germany. Use the same EUR price and adapt positioning language.

### Netherlands (EUR)

High income, high digital literacy, high iDEAL adoption (though iDEAL is one-time; SEPA Direct Debit is the recurring path). Dutch consumers are pragmatic and value-oriented — they will use a tool if it genuinely works. Somewhat skeptical of marketing claims.

Price ranges: comparable to Germany. iDEAL for one-time top-ups/annual billing; SEPA for recurring.

### Spain (EUR)

Lower income than Germany/France (~73% of EU average). Some price sensitivity relative to Western European peers. High card penetration and PayPal adoption. Bizum (Spanish bank transfer system, ~20M users) primarily peer-to-peer and not directly relevant for merchant B2C SaaS billing.

**Price ranges (EUR):**

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | €3–5 | €2.50–4 |
| Pro / Standard (most popular) | €7–12 | €6–10 |
| Premium / Advanced | €15–25 | €12–20 |

*If pricing uniformly across EUR markets, calibrate toward the lower end of German ranges to remain accessible to Spanish users.*

### Poland (PLN)

Poland is the largest Central/Eastern European consumer market and has the highest B2C digital adoption in the region. BLIK is dominant (18.9M users, ~50% of all Polish online payments). Card penetration is good but BLIK is increasingly the preferred method.

**Price ranges (PLN):**

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | PLN 10–20 | PLN 8–16 |
| Pro / Standard (most popular) | PLN 25–49 | PLN 20–39 |
| Premium / Advanced | PLN 55–89 | PLN 44–72 |

**USD equivalent (at ~4.0 PLN/USD):** Pro tier ~USD 6.25–12.25/month — lower than Western European equivalents, reflecting Polish purchasing power.

**Price psychology (PLN):**
- PLN 29, PLN 39, PLN 49 are extremely common digital subscription price points in Poland
- PLN 9-endings work well: PLN 29.99 is standard
- PLN 49/month is approximately the B2C ceiling for most app subscriptions — above this requires strong value justification
- Annual plans: PLN 299, PLN 349, PLN 499 are natural annual price points

### United Kingdom (GBP)

The UK is not an EU member (post-Brexit), but is a major European market and a primary B2C SaaS target. Income is comparable to Germany. UK users have very high card penetration, strong Apple Pay and Google Pay usage, and PayPal adoption.

**SEPA note:** The UK participates in SEPA schemes post-Brexit — UK IBANs are valid for SEPA Direct Debit. However, UK users primarily pay by card rather than SEPA Direct Debit (BACS/direct debit exists as a UK-native scheme but is not widely used for consumer SaaS).

**Price ranges (GBP):**

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | £3–6 | £2.50–5 |
| Pro / Standard (most popular) | £7–12 | £6–10 |
| Premium / Advanced | £15–25 | £12–20 |

**Price psychology (GBP):**
- £9.99 is the most common B2C app subscription price in the UK — deeply normalised
- £7.99, £9.99, £12.99, £14.99, £19.99 are standard B2C SaaS price points
- Annual plans: £79.99, £99.99, £119.99, £149.99 are common annual billing price points
- The £10/month threshold is significant — the UK consumer market is comfortable with £10 recurring spend (comparable to a streaming service)

### Nordics (SEK, DKK, NOK)

Nordic consumers are high-income, high-trust, and accustomed to paying for digital services. Swish (Sweden) and Vipps MobilePay (Norway/Denmark/Finland) have very high penetration for mobile payments. Card payments also widely used.

**Approximate Pro tier price ranges:**
- Sweden (SEK): SEK 99–149/month (≈USD 9–14)
- Denmark (DKK): DKK 65–99/month (≈USD 9–14)
- Norway (NOK): NOK 99–149/month (≈USD 9–14)

*Nordic consumers have among the highest willingness-to-pay for consumer software in Europe. Positioning near or at global USD pricing (converted) is generally defensible.*

---

## VAT and Pricing Display Requirements

### VAT-Inclusive Pricing (Mandatory in EU)

**The rule:** Under the EU Consumer Rights Directive (2011/83/EU) and most member state implementation of VAT display laws, prices advertised to consumers must include VAT. This means all prices displayed on your pricing page, in checkout, and in any marketing to EU consumers must include VAT in the displayed amount.

**What this means practically:**
- If your Pro plan is €10 net and the applicable VAT rate is 20% (Germany), you must display €12 — not €10 + VAT
- Showing "€10 + VAT" to a consumer is non-compliant in most EU member states
- The "price + tax" display is acceptable for B2B (companies buying for business purposes), not for B2C

**Implementation approach — Option A (All-inclusive display):**
Display all prices inclusive of the highest applicable EU VAT rate (typically Germany at 19% or highest-VAT country you serve). This overcharges users in low-VAT countries marginally but ensures compliance uniformly.

**Implementation approach — Option B (Geo-based VAT):**
Detect user country, apply the correct VAT rate, display the correct VAT-inclusive price. This is accurate but requires per-country VAT rate table maintenance. EU VAT rates:
- Germany: 19% standard
- France: 20%
- Netherlands: 21%
- Spain: 21%
- UK: 20% (not EU, but same display convention expected)
- Poland: 23%
- Sweden: 25%
- Lowest EU rate: Luxembourg 17%

**VAT receipt requirement:** For B2C sales, a VAT receipt/invoice must be available on request. Stripe Tax, Quaderno, and Avalara handle VAT receipt generation automatically.

### UK VAT

Since Brexit, the UK has its own separate VAT regime (20% standard rate). UK customers must be charged and shown UK VAT, not EU VAT. These are separate registration and remittance obligations. Stripe Tax handles UK VAT separately from EU VAT.

### OSS — One Stop Shop Registration

The EU VAT One Stop Shop (OSS) scheme allows businesses to register for VAT in a single EU member state and file a single quarterly return for VAT across all EU member states. This simplifies EU VAT compliance significantly compared to registering separately in each country.

**Threshold:** The EU-wide threshold for non-EU businesses (selling digital services to EU consumers) is effectively €0 — you must register and collect VAT from the first sale. There is no de minimis exemption for non-EU businesses. EU-based businesses have a €10,000 threshold before OSS registration is required.

**Practical guidance:** Use Stripe Tax (or Quaderno/Avalara) to handle EU VAT calculation and remittance from day one for any EU consumer sales. Do not attempt to manage this manually.

---

## EU Omnibus Directive — Reference Pricing Compliance

### What the Directive Requires

The EU Omnibus Directive (Directive 2019/2161, implemented in EU member states by May 2022) significantly changed the rules around promotional pricing and reference prices.

**Core requirement:** When a trader announces a price reduction (e.g., a sale, a promotional price, a crossed-out "was" price), the prior reference price must be the **lowest price the trader charged in the 30 days immediately before** the promotion.

**What this prohibits:**
- Fabricating a high reference price that was never actually charged ("was €19.99, now €9.99" when the product was never €19.99)
- Cherry-picking a brief moment at a high price to justify a "discount" (the price must have been the lowest price for the full preceding 30 days)
- Showing different reference prices to different users for the same product during the same promotion

**What this permits:**
- Introductory pricing that clearly states the regular post-intro price ("Intro offer: €6.99/month for 3 months, then €12.99/month" — no reference price, just a clear statement)
- Annual vs. monthly plan comparison ("€9.99/month with annual billing — equivalent monthly plan: €14.99/month") — both prices are real, active prices
- Graduated discounts ("10% off for new subscribers")
- Price increases where the old price was the actual price for 30+ days

**Enforcement:** The Omnibus Directive is enforced by national consumer protection authorities. Penalties vary by member state — in Germany, competitor-initiated injunctions under UWG (unfair competition law) are common. In the UK (which implemented equivalent provisions in the Consumer Protection from Unfair Trading Regulations), the CMA enforces similar rules.

**Practical checklist for EU promotions:**
- [ ] Is the reference price the actual lowest price you charged in the past 30 days?
- [ ] Has this reference price been active for the full 30 days before the promotion starts?
- [ ] Is the promotional period clearly defined with an end date?
- [ ] Is the promotional price identical for all EU users (no segmented discounts not disclosed)?

---

## Auto-Renewal and Cancellation Disclosure (EU)

### Pre-Contract Information Requirements

Under the EU Consumer Rights Directive, before a consumer enters a subscription contract, the following must be clearly disclosed:

- The total price of the subscription (including all taxes) or the basis for calculating the price
- The billing frequency (monthly, annually)
- The minimum contract duration, if any
- The conditions for termination / cancellation
- The fact that the subscription will auto-renew, and the conditions under which it does

**Placement:** These disclosures must be made before the consumer completes the purchase, not buried in terms and conditions they are unlikely to read.

**Implementation:** The standard compliant pattern is to include a brief disclosure statement immediately above or adjacent to the purchase CTA button:

> "By clicking [Subscribe], you agree to a recurring [monthly/annual] subscription at €[price]/[period], inclusive of VAT. You can cancel at any time in your account settings. Your subscription will renew automatically until cancelled. [Terms] | [Privacy]"

### Right of Withdrawal (EU)

EU consumers have a 14-day right of withdrawal from distance contracts (Article 9, Consumer Rights Directive). For digital subscriptions:

**Default:** Users can withdraw within 14 days of subscription start, even if they have used the product.

**Waiver (important for SaaS):** The right of withdrawal can be waived if the consumer explicitly acknowledges that they are requesting immediate performance of the contract and understand they lose their right of withdrawal. This waiver should be:
- A separate checkbox (not bundled into T&C acceptance)
- Clearly worded: "I request immediate access to [Product] and acknowledge that by starting my subscription immediately, I waive my 14-day right of withdrawal."
- Not pre-checked — must be an active consumer choice

Without the waiver, you may be obligated to provide a full refund to any EU user who requests withdrawal within 14 days, even after using the product for 13 days.

See `post-payment/03-refund-policy.md` for the full refund policy framework including right of withdrawal mechanics.

---

## Checkout Price Display for EU

### Requirements at the Checkout Step

1. **Show total charge amount** — not just the monthly rate; if billing annually, the €108/year total must be clearly shown (not just "€9/month")
2. **Show VAT breakdown** — show the VAT-exclusive price, the VAT amount, and the total (or at minimum, the VAT-inclusive total with a note that it includes VAT)
3. **Show next charge date** — "Your subscription starts today. Next charge: [date+1 month] for €[amount]"
4. **Cancellation reminder** — brief but visible: "Cancel anytime in your account settings"

### Currency and Price Display

- Always display in EUR for Eurozone users (not USD)
- For UK users: GBP. For Swedish users: SEK (or EUR with note). For Polish users: PLN.
- Never show USD to EU users if local currency display is achievable — this is a conversion friction point and also a UX trust signal

---

## GDPR Pricing Interactions

GDPR is not directly a pricing regulation, but it has an indirect effect on pricing strategy in two ways:

**1. No personal data as currency:** In the EU, it is not legally acceptable to present a "pay with your data" model as the only alternative to a paid subscription without robust consent mechanisms that meet GDPR standards. Freemium models that monetise user data for advertising face significant compliance complexity in the EU (see Meta's €1.2B GDPR fine, 2023; subsequent €uro/month subscription options for Facebook/Instagram EU users).

**2. Data localisation cost:** Some EU B2C products find that EU data localisation requirements (data stored in EU data centres, EU DPA agreements with subprocessors) add operational cost. This is sometimes factored into EU pricing being slightly higher than global pricing to cover compliance overhead.

---

*Last updated: April 2026*
