# Price Localisation

> Part of the Pricing Strategy pillar. See [pricing-strategy.md](../pricing-strategy.md) for the index.

---

## Overview

Price localisation is the practice of setting different prices for different markets, rather than a single global price. It is one of the highest-leverage pricing decisions available to a B2C SaaS product targeting markets with substantially different purchasing power.

The core insight is simple: what feels expensive in Indonesia or Vietnam is cheap in Singapore or Germany, and vice versa. A single global price either prices out most of the developing world (if set for Western incomes) or leaves significant revenue unrealised in high-income markets (if set for SEA). Price localisation resolves this tension.

This is distinct from **local currency display** (showing the price in IDR instead of USD without changing the underlying amount), which is a cosmetic change. True price localisation means different purchasing prices in different markets.

---

## The Economic Case for Localisation

### Purchasing Power Parity (PPP)

Purchasing Power Parity is an economic measure that adjusts for the relative cost of goods and services between countries. The IMF publishes annual PPP conversion rates for all countries. The relevant metric for B2C SaaS pricing is the ratio of local purchasing power to the currency exchange rate.

**Illustrative PPP ratios relative to USD (2024–2025 approximations):**

| Country | Approx. PPP ratio vs USD | What this means for pricing |
|---------|------------------------|----------------------------|
| USA | 1.0× | Baseline |
| UK | 0.65–0.70× | Slightly lower purchasing power than USD suggests |
| Germany / France | 0.75× | Similar |
| Singapore | 0.75–0.80× | High income, relatively close to Western |
| Malaysia | 0.35–0.40× | ~40% of US purchasing power |
| Thailand | 0.30–0.35× | ~32% |
| Philippines | 0.25–0.30× | ~28% |
| Indonesia | 0.25–0.30× | ~27% |
| Vietnam | 0.20–0.25× | ~22% |

*Note: These are approximate PPP ratios and should be verified against current IMF data before setting prices. They represent the purchasing power of local currency, not just the exchange rate.*

**What this means in practice:** If a product is priced at $10/month for US users, a PPP-adjusted price for Indonesia would be in the range of $2.50–3.00/month, and for Vietnam $2.00–2.50/month. These are not subsidies or charity — they are economically rational price points that reflect what users in those markets can reasonably afford.

### The Revenue Mathematics

The counterintuitive result of price localisation is often *more total revenue*, not less, because:

1. **Volume expansion:** At Western price points, most SEA users simply don't convert. At PPP-adjusted prices, conversion rates rise significantly. The lower price × higher conversion × large population often exceeds higher price × very low conversion.

2. **Reduced piracy and informal access:** When legitimate pricing is accessible, users have less incentive to use pirated or cracked alternatives. Particularly relevant in markets like Indonesia and Vietnam where software piracy rates are historically high.

3. **Long-term market position:** Users who adopt at local pricing during a product's growth phase become long-term subscribers. Being priced out early means ceding that market to competitors who do localise.

### Netflix Case Study

Netflix pioneered aggressive price localisation in streaming. As of 2024–2025, Netflix's monthly subscription prices vary from approximately:
- US: $15.49–$22.99 (Standard/Premium)
- UK: £4.99–£17.99
- Germany: €4.99–€17.99
- Singapore: SGD 10.98–SGD 19.98 (~USD 8–15)
- Malaysia: MYR 17–MYR 54 (~USD 3.80–12)
- Philippines: PHP 99–PHP 549 (~USD 1.80–10)
- Indonesia: IDR 54,000–IDR 186,000 (~USD 3.40–11.70)
- Vietnam: VND 45,000–VND 260,000 (~USD 1.80–10.40)

The Philippines Mobile-only plan at PHP 99/month (~$1.80 USD) is not positioned as a premium product — it is designed for price-sensitive mobile-first markets where a phone screen is the primary viewing device. This single-market plan type demonstrates how localisation can extend beyond price to product configuration.

### Spotify Case Study

Spotify's 2023 India pricing scandal and subsequent global repricing demonstrated both the benefits and risks of localisation. Spotify raised its India pricing significantly in 2023, triggering user backlash and churn. The event illustrates that once users adopt at local pricing, price increases face resistance even toward still-low-by-global-standards levels. Localised pricing creates expectations and relationships; price increases must be managed carefully.

---

## Localisation Approaches

### Approach 1 — Local Currency Display Only

**What it is:** Convert the global USD price to the local currency at current exchange rates. No actual price adjustment — the amount paid is identical in real terms.

**Example:** $10/month → IDR 161,000/month at 16,100 IDR/USD exchange rate. A user in Indonesia pays the same real amount as a US user.

**When to use:** Never as a complete localisation strategy. Local currency display is a UX improvement (it removes currency conversion friction for users) but is not a pricing strategy. It should be considered the baseline requirement — never show USD to a user in a non-USD market if it can be avoided.

**What it doesn't solve:** Does not address affordability. A price that represents 1.5% of median monthly income in the US represents 8–10% in Indonesia at the same exchange-converted price. This ratio determines whether users convert at all.

---

### Approach 2 — Tiered Regional Pricing (Price Bands)

**What it is:** Define 3–5 global price bands (Tier A, B, C, D) and assign countries to bands. Each band has a single price, adjusted for the purchasing power of that economic region.

**Example:**
- Tier A (US, Canada, Australia, NZ, Western Europe): $12/month
- Tier B (Singapore, UAE, Japan, South Korea): $9/month
- Tier C (Malaysia, Thailand, Brazil, Mexico, Eastern Europe): $5/month
- Tier D (Indonesia, Vietnam, Philippines, India, most of LatAm, Africa): $3/month

**Advantages:**
- Manageable to implement (a small lookup table mapping country code to tier)
- Predictable pricing structure for planning
- Easier to communicate ("we offer regional pricing")
- Less exposed to individual currency volatility

**Disadvantages:**
- Approximate — doesn't perfectly match PPP for every country in a band
- Countries on band boundaries feel arbitrary (why is Malaysia Tier C but Singapore Tier B?)
- Requires ongoing maintenance as countries develop

**Implementation:** Detect user geography at checkout (via IP or billing address), assign tier, display appropriate price. Store tier assignment in subscription metadata.

---

### Approach 3 — PPP-Adjusted Country-Level Pricing

**What it is:** Set individual prices for each country based on PPP data. Typically rounded to psychologically convenient local price points.

**Example for a $10/month (US) product:**

| Country | PPP-adjusted USD equivalent | Local price | Local currency |
|---------|--------------------------|-------------|---------------|
| Indonesia | ~$2.80 | IDR 39,000–49,000 | Indonesian Rupiah |
| Vietnam | ~$2.20 | VND 49,000–59,000 | Vietnamese Dong |
| Philippines | ~$2.90 | PHP 149–169 | Philippine Peso |
| Thailand | ~$3.20 | THB 109–119 | Thai Baht |
| Malaysia | ~$4.00 | MYR 17–19 | Malaysian Ringgit |
| Singapore | ~$7.50 | SGD 9.90–12.90 | Singapore Dollar |

*These are illustrative examples. Actual prices should be validated against current PPP data and local competitor pricing.*

**Advantages:**
- Most economically accurate
- Highest conversion potential in each market
- Signals genuine commitment to local markets

**Disadvantages:**
- More complex to implement and maintain
- Requires currency conversion infrastructure in payment gateway
- Price arbitrage risk (users in high-income countries using VPNs to access lower-tier pricing)
- More regulatory surface area as you may trigger local tax registration thresholds earlier

---

### Approach 4 — No Localisation (Single Global USD Price)

**What it is:** One price, in USD, for all markets.

**When this is defensible:**
- Very early stage product where engineering complexity of localisation is not justified
- Product primarily targeting one market (US-focused SaaS with incidental global users)
- B2B SaaS where the buyer is a company with a dollar-denominated budget
- Enterprise pricing (deals are negotiated, not listed)

**The revenue trade-off:** For a B2C product explicitly targeting SEA with a $10/month USD price, the empirical expectation is that the vast majority of SEA users (outside Singapore) will not convert. The addressable market is effectively limited to upper-income urban users in those markets who have international payment methods and US-comparable income. This is a valid choice if the SEA opportunity is secondary; it is a strategic error if SEA is a primary market.

---

## Price Arbitrage Risk

When you offer significantly different prices in different markets, you create an incentive for high-income users to use VPNs or foreign payment methods to access lower-tier pricing.

**Realistic scale of arbitrage:** Research on geographic price discrimination (including Netflix VPN arbitrage studies) suggests that approximately 5–15% of users in high-income markets may attempt to access cheaper regional pricing via VPN. However, the absolute revenue impact is typically small compared to the revenue gained from genuine low-income market conversion.

**Mitigation strategies:**

*Payment method gating:* Require a local payment method (not just IP detection) to qualify for local pricing. A credit card with a UK billing address cannot access IDR pricing. This is the most reliable gate — it requires both VPN use and a local payment method, which eliminates most opportunistic arbitrage.

*Billing address verification:* Many payment processors pass billing address country. Use this as a secondary signal alongside IP detection.

*Explicit terms:* Make the regional pricing terms explicit — "Available to users in [country] only." This creates a clear policy basis for account termination if arbitrage is detected.

*Grandfathering policy:* If a user legitimately accesses local pricing while travelling or as a student, define a clear policy on what happens when they return to their home country.

**The balance:** Over-engineering arbitrage prevention adds friction to legitimate local users. The goal is deterrence, not a perfect gate. Most users willing to access local pricing are either genuinely local or are price-sensitive enough that they would not pay full price anyway.

---

## Local Currency Display — Implementation

Even if full price localisation is not yet implemented, local currency display is the minimum acceptable standard for a product targeting international markets. Showing a price in USD to a user in Indonesia forces them to do mental arithmetic while deciding whether to buy — each additional cognitive step reduces conversion.

### Geo-detection

Detect the user's country via IP geolocation at page load. Set the display currency accordingly. If IP detection fails (VPN, corporate proxy), default to USD and display a currency selector.

**Recommended display logic:**

```
User country detected (via IP)
      ↓
Is their currency in your supported currency list?
  → Yes: display price in local currency (e.g., IDR 159,000/mo)
  → No:  display in USD (e.g., $9.99/mo)
      ↓
Display small "Billed in USD equivalent" disclaimer if converting
```

### Rounding Conventions

When converting a USD price to local currency, round to psychologically natural local price points — not mathematically precise conversions.

| ❌ Mechanically converted | ✅ Psychologically natural |
|--------------------------|--------------------------|
| IDR 161,432/month | IDR 159,000 or IDR 165,000/month |
| PHP 563.42/month | PHP 549 or PHP 579/month |
| THB 355.32/month | THB 349 or THB 369/month |

The exact local price points to use are covered in `pricing/05-sea-pricing.md`.

### Currency Fluctuation

Local currency display tied to USD exchange rates will show different prices over time as exchange rates move. This creates user confusion if the displayed price changes frequently. Options:

1. **Fix local prices independently of exchange rates** (recommended): Set IDR 159,000 as the price, not "USD 9.99 converted to IDR daily." Update local prices quarterly or when exchange rate movement exceeds 10–15%.

2. **Float with exchange rate:** Simpler to implement but creates price instability. User who paid IDR 155,000 last month may see IDR 168,000 this month. Acceptable for one-time payments; problematic for subscriptions where stable pricing is expected.

---

## Operational Considerations

### Payment Gateway Currency Support

Not all gateways support all currencies. Before committing to a localised pricing strategy, verify that your payment stack can actually charge in the target currencies.

**Stripe currency support:** 135+ currencies. Can charge in local currency and settle to your account in a target settlement currency. Note: some currencies have specific restrictions on card types accepted.

**Xendit:** Supports IDR, PHP, MYR, THB, VND — the primary SEA local currencies. Essential for local currency billing in SEA.

**VAT and tax implications:** Charging in local currency may trigger local tax registration obligations earlier than charging in USD, depending on the jurisdiction. Consult tax compliance guidance for each market before going live with local currency billing.

### Subscription State and Currency

When a user subscribes at a local price in local currency, their subscription state in your system records both the local price and currency. Consider what happens when:
- The user moves to a different country: define a migration policy
- Exchange rates shift significantly: define a repricing policy
- You increase prices: local-currency subscribers may need separate communications

---

*Last updated: April 2026*
