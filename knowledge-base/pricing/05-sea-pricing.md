# SEA Pricing

> Part of the Pricing Strategy pillar. See [pricing-strategy.md](../pricing-strategy.md) for the index.

---

## Overview

Southeast Asia is not one market. Pricing decisions that work in Singapore are inappropriate for Vietnam; what converts in the Philippines may be irrelevant in Indonesia. The six primary B2C SaaS markets in SEA — Indonesia, Vietnam, Philippines, Thailand, Malaysia, Singapore — have distinct income levels, payment cultures, price sensitivity profiles, and psychological norms around numbers and value signals.

This file covers concrete, market-specific pricing guidance for each of the six SEA markets, including: recommended price ranges for common B2C SaaS tiers, local currency psychology, affordability benchmarks, and how local market dynamics interact with pricing decisions.

All price figures in this document are indicative starting points, not prescriptive recommendations. They should be validated against current PPP data, local competitor pricing, and willingness-to-pay research before implementation.

---

## SEA Pricing Overview Table

| Market | Currency | Indicative B2C SaaS range (monthly, mid-tier) | Key characteristic |
|--------|----------|-----------------------------------------------|-------------------|
| Singapore | SGD | SGD 8–20/month | Near-Western income; price tolerance high |
| Malaysia | MYR | MYR 15–35/month | Upper-middle income; price-quality conscious |
| Thailand | THB | THB 99–249/month | Middle income; round numbers preferred |
| Philippines | PHP | PHP 149–349/month | Price-sensitive; mobile-first dominant |
| Indonesia | IDR | IDR 29,000–79,000/month | Highest price sensitivity; volume market |
| Vietnam | VND | VND 29,000–79,000/month | Fastest-growing, very price-sensitive |

*These ranges are for a typical B2C SaaS mid-tier plan (equivalent to ~$3–10 USD at PPP-adjusted rates). Adjust for your specific product category, feature set, and target user segment.*

---

## Singapore

### Market Context

Singapore is the outlier in SEA: high per-capita income (among the highest in Asia), high digital literacy, high card penetration, and a consumer base comfortable paying Western-comparable prices for software. Singaporean users are often benchmarks and early adopters for SEA rollouts of global products.

**GDP per capita (nominal, 2024):** ~USD 88,000 — comparable to the UK or Australia.

**Key implication:** A global USD pricing strategy is more defensible in Singapore than anywhere else in SEA. Users with SGD incomes at Singapore levels do not require significant PPP adjustment to afford Western SaaS pricing.

### Price Ranges (SGD)

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | SGD 5–10 | SGD 4–8 |
| Pro / Standard (most popular) | SGD 12–20 | SGD 9–16 |
| Premium / Advanced | SGD 25–45 | SGD 20–38 |

**USD equivalent:** At ~1.35 SGD/USD (approximate 2024–2025 rate), these ranges correspond to approximately USD 4–33/month — broadly aligned with global SaaS pricing.

### Price Psychology (SGD)

- SGD pricing commonly uses 9-endings: SGD 9.90, SGD 12.90, SGD 19.90
- Round numbers are also common for premium products: SGD 20, SGD 30, SGD 50
- The SGD 10 psychological threshold is meaningful — products under SGD 10/month are perceived as "affordable apps"; above SGD 10 requires clearer value justification
- Annual billing annual totals: SGD 108, SGD 168, SGD 228, SGD 348 are common round-ish annual price points

### Competitive Landscape

Singapore users frequently compare prices with global products (Notion, Figma, Adobe) which are priced in USD. If your product is priced in SGD at a significant premium to the USD equivalent of comparable tools, Singapore users will notice and push back.

---

## Malaysia

### Market Context

Malaysia has a middle-income urban economy with a tech-savvy consumer class concentrated in Kuala Lumpur, Penang, and Johor Bahru. Card penetration is higher than most of SEA; Touch 'n Go e-wallet and FPX bank transfers are widely used. Malaysia occupies a mid-point in SEA — less price-sensitive than Indonesia/Vietnam/Philippines, but meaningfully below Singapore's purchasing power.

**GDP per capita (nominal, 2024):** ~USD 13,500.

**Payment note:** MYR transactions should ideally be supported natively — card in MYR, Touch 'n Go, or FPX. Forcing USD payments is a friction point for Malaysian users.

### Price Ranges (MYR)

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | MYR 9–15 | MYR 7–12 |
| Pro / Standard (most popular) | MYR 18–35 | MYR 14–28 |
| Premium / Advanced | MYR 40–70 | MYR 32–56 |

**USD equivalent:** At ~4.70 MYR/USD (approximate 2024–2025 rate), the Pro tier range corresponds to approximately USD 3.80–7.50/month — representing meaningful PPP adjustment from global pricing.

### Price Psychology (MYR)

- MYR 9.90 and MYR 19.90 are the most common digital product price points
- MYR 49 and MYR 99 are common for annual billing offers
- Round numbers work: MYR 10, MYR 20, MYR 30 are clean and acceptable
- The MYR 15–20 range is the "sweet spot" for a mid-tier B2C SaaS monthly subscription — below MYR 15 signals basic; above MYR 30 requires stronger justification
- Annual plan psychology: MYR 168/year, MYR 228/year, MYR 348/year are natural annual price points

### Local Competitor Context

Malaysian SaaS and mobile apps often price locally. Subscription apps from Malaysian developers typically range MYR 9.90–19.90/month for individual plans. If competing against local alternatives, pricing must be coherent with this range or clearly communicate superior value.

---

## Thailand

### Market Context

Thailand has a middle-income economy with strong Bangkok-centred urban consumer base. PromptPay (QR-based instant transfer) is dominant for peer-to-peer payments and increasingly for merchant payments. Cards are used by the urban professional class. Line (the messaging app) has a payment product (Line Pay / Rabbit LINE Pay) with meaningful adoption in Thailand.

**GDP per capita (nominal, 2024):** ~USD 7,000.

**Payment note:** PromptPay is one-time by design; recurring billing via PromptPay is not supported. Card or TrueMoney wallet tokenization is the path for recurring subscriptions.

### Price Ranges (THB)

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | THB 59–99 | THB 49–79 |
| Pro / Standard (most popular) | THB 109–249 | THB 89–199 |
| Premium / Advanced | THB 279–499 | THB 229–399 |

**USD equivalent:** At ~35 THB/USD (approximate 2024–2025 rate), the Pro tier corresponds to approximately USD 3.10–7.10/month.

### Price Psychology (THB)

- Round numbers dominate Thai digital pricing: THB 99, THB 149, THB 199, THB 249, THB 299
- THB 9-endings less common than in Western markets — Thai consumers generally respond better to round numbers in digital product pricing
- The THB 99 price point is a psychological "entry threshold" — broadly understood as "affordable app"
- Annual price points: THB 990, THB 1,490, THB 1,990 are natural annual equivalents
- THB 1,000 is a significant psychological boundary for annual billing — below THB 1,000/year feels accessible to a wide consumer segment

### Freemium Consideration

In Thailand, freemium models work well because they build habits before requiring payment commitment. The lower income relative to Singapore means the trial period / freemium tier does additional conversion work — do not over-restrict the free tier if Thailand is a target market.

---

## Philippines

### Market Context

The Philippines has a young, mobile-first, English-proficient consumer base. GCash and Maya (formerly PayMaya) are the dominant e-wallets with very high penetration. Card penetration outside Metro Manila is lower. Remittances from OFWs (Overseas Filipino Workers) drive significant consumer spending capacity in some households.

**GDP per capita (nominal, 2024):** ~USD 3,900.

**Payment note:** GCash recurring (auto-debit) is available via PayMongo and Xendit for digital subscription merchants — this is the primary recurring billing path for mobile-first products in the Philippines where card penetration is lower.

**English:** The Philippines is one of the few SEA markets where English-language pricing pages and product copy do not require localisation — Filipino users are highly comfortable with English, and in fact often trust English-language products more in digital contexts.

### Price Ranges (PHP)

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | PHP 99–149 | PHP 79–119 |
| Pro / Standard (most popular) | PHP 169–349 | PHP 139–279 |
| Premium / Advanced | PHP 399–699 | PHP 319–559 |

**USD equivalent:** At ~57 PHP/USD (approximate 2024–2025 rate), the Pro tier corresponds to approximately USD 2.95–6.10/month.

### Price Psychology (PHP)

- PHP 99 is the universal "starter" price point for Filipino digital subscriptions — deeply established as the entry threshold
- PHP 149 and PHP 199 are the next natural steps
- PHP 299, PHP 349, PHP 399 are common mid-tier price points
- PHP 9-endings are standard: PHP 99, PHP 149, PHP 199, PHP 299, PHP 399
- Annual billing: PHP 999, PHP 1,299, PHP 1,499, PHP 1,999 are natural annual price points
- PHP 1,000 boundary is psychologically significant for annual plans — products below PHP 1,000/year are perceived as "accessible"

### Volume Opportunity

The Philippines has approximately 115 million people (2024), with mobile internet adoption growing rapidly. At PHP 199/month, a 1% conversion of mobile internet users would represent substantial revenue. The volume opportunity partially offsets the lower per-user revenue.

---

## Indonesia

### Market Context

Indonesia is the largest SEA economy by population (~280 million people, 2024) and the largest B2C digital market in SEA by user count. However, it is also the market with the highest price sensitivity for SaaS products. GoPay (Gojek), OVO, Dana, and QRIS (the national QR standard) are the primary digital payment methods. Card penetration is low outside Java.

**GDP per capita (nominal, 2024):** ~USD 4,900 (national average; significantly higher in Jakarta and other urban centres).

**Income distribution note:** Indonesia has extreme income inequality. The urban professional class in Jakarta can afford much higher prices than the national average suggests; rural and lower-income segments cannot afford even low USD-equivalent prices. Price segmentation (or a meaningful free tier) is particularly important in Indonesia.

**Payment note:** GoPay Tokenization via Midtrans and Adyen supports recurring subscriptions. OVO and Dana have limited recurring billing. QRIS is one-time. For recurring B2C subscriptions via web, card or GoPay tokenization are the main options. App Store/Google Play IAP is the path of least resistance for mobile-first products.

### Price Ranges (IDR)

*Note: IDR amounts appear large due to the exchange rate (~16,000 IDR/USD as of 2024–2025). "IDR 50,000" = ~USD 3.10.*

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | IDR 19,000–39,000 | IDR 15,000–29,000 |
| Pro / Standard (most popular) | IDR 39,000–79,000 | IDR 29,000–59,000 |
| Premium / Advanced | IDR 89,000–149,000 | IDR 69,000–119,000 |

**USD equivalent:** The Pro tier corresponds to approximately USD 2.40–4.90/month.

### Price Psychology (IDR)

- Round thousands dominate Indonesian digital pricing: IDR 15,000, IDR 25,000, IDR 35,000, IDR 50,000
- "9-ending" psychology is less applicable in IDR — IDR 49,000 (vs IDR 50,000) does not trigger the same cognitive effect as $9.99 vs. $10.00 in USD, because the omitted amount (IDR 1,000 = ~$0.06) is not a meaningful unit to Indonesian consumers
- IDR 50,000 is approximately equivalent to a fast-food meal in Jakarta — this is the reference frame for "what IDR 50,000 buys." A SaaS product at IDR 50,000/month must clearly justify itself against this reference
- Annual plans: IDR 350,000, IDR 490,000, IDR 590,000, IDR 790,000 are natural annual price points
- IDR 100,000 is a significant psychological boundary — prices above IDR 100,000/month require strong justification in a B2C context

### The Free Tier Importance in Indonesia

Given income distribution and high price sensitivity, the free tier does substantial conversion work in Indonesia. A meaningful free tier (not a crippled demo) that creates genuine habits before asking for payment is more effective in Indonesia than aggressive freemium-to-paid funnel compression.

Many Indonesian digital products (local apps, streaming services) offer IDR 1,000–5,000/month trial prices or special intro offers (IDR 1/month for 3 months) to reduce the barrier to first payment. This is a common conversion tactic — getting the user to make any financial commitment (even trivially small) significantly increases retention over pure free.

---

## Vietnam

### Market Context

Vietnam is one of the fastest-growing digital economies in SEA. Young population (median age ~30), rapidly growing urban middle class, high smartphone penetration, and growing digital payment adoption. MoMo is the dominant e-wallet; VNPay is widely used for QR payments; ZaloPay (via Zalo, Vietnam's dominant messaging app) is growing.

**GDP per capita (nominal, 2024):** ~USD 4,300 (national average; HCMC and Hanoi are significantly higher).

**Language note:** Unlike the Philippines, Vietnam is primarily Vietnamese-language. Localised product copy matters for conversion in Vietnam. English-only pricing pages are a meaningful friction point for the majority of Vietnamese users.

**Payment note:** MoMo offers a full recurring payment API (Thanh Toán Tự Động) available via MoMo Developer Portal with merchant approval. VNPay Payment Gateway's Auto-Debit utility supports periodic billing (distinct from VNPay-QR which is one-time). NAPAS domestic debit/ATM cards support tokenization and recurring via Adyen. ZaloPay does not broadly support recurring billing as of early 2026.

### Price Ranges (VND)

*Note: VND amounts appear very large (~25,000 VND/USD as of 2024–2025). "VND 50,000" = ~USD 2.00.*

| Tier | Monthly billing | Annual billing (monthly equivalent) |
|------|----------------|-------------------------------------|
| Basic / Starter | VND 19,000–39,000 | VND 15,000–29,000 |
| Pro / Standard (most popular) | VND 49,000–99,000 | VND 39,000–79,000 |
| Premium / Advanced | VND 109,000–199,000 | VND 89,000–159,000 |

**USD equivalent:** The Pro tier corresponds to approximately USD 1.95–3.95/month.

### Price Psychology (VND)

- Round multiples of 10,000 VND are the natural unit: VND 19,000, VND 29,000, VND 39,000, VND 49,000, VND 59,000, VND 79,000, VND 99,000
- VND 9,000 endings (VND 49,000 vs VND 50,000) work slightly better than in IDR because VND 1,000 (~$0.04) has a small but nonzero psychological significance
- VND 99,000 is a strong psychological price point — it signals "under VND 100,000" and is the most commonly used ceiling for Vietnamese app subscriptions
- Annual plans: VND 350,000, VND 490,000, VND 690,000, VND 890,000 are natural annual price points
- VND 100,000 is the B2C ceiling equivalent — above this requires justification; below this is broadly accessible

### Zalo as Distribution

Zalo (the dominant Vietnamese messaging app with ~74 million monthly active users as of 2024) is a critical distribution channel for Vietnamese consumer apps. ZaloPay integration and Zalo Official Account marketing are effectively table stakes for a product targeting mass-market Vietnamese users. While ZaloPay does not support recurring billing, ZaloPay works for one-time purchases (e.g., annual billing via a single transaction).

---

## SEA Cross-Market Pricing Architecture

### Recommended Tier Structure Across SEA

For a product targeting all six SEA markets simultaneously, a three-tier regional architecture works:

**Tier A — Singapore/Malaysia (Near-Western pricing)**
Prices in SGD/MYR at international-comparable levels. Monthly billing and annual billing both offered.

**Tier B — Thailand/Philippines (Mid-market)**
Prices in THB/PHP at 30–40% of USD equivalent. Mobile-first product experience prioritised. App Store/Play Store IAP as primary billing for mobile users.

**Tier C — Indonesia/Vietnam (High-volume, high-sensitivity)**
Prices in IDR/VND at 20–30% of USD equivalent. Free tier or freemium model essential for volume. Annual one-time billing preferable to monthly recurring where recurring billing infrastructure is not yet in place.

### The Freemium Bridge

Given the payment method constraints for recurring billing in Tier C markets (Indonesia, Vietnam), a freemium model with an annual billing option is often more practical than a standard monthly subscription:

```
Free tier (permanent)
      ↓
Annual billing: pay IDR 390,000 or VND 490,000 once per year
(equivalent to IDR 32,500 or VND 40,800 per month)
      ↓
User gets 12 months of Pro access
```

This sidesteps the monthly recurring billing infrastructure requirement, reduces payment processing overhead, and gives the user a "one payment" mental model which reduces ongoing purchase anxiety.

---

## SEA Pricing and Tax Considerations

### Digital Services Tax

Several SEA countries have imposed or are implementing digital services tax obligations on foreign B2C digital product providers:

| Country | Tax | Rate | Threshold |
|---------|-----|------|-----------|
| Indonesia | PPN (VAT) on digital services | 11% | IDR 600M revenue/year or 12,000 customers |
| Thailand | VAT on digital services | 7% | THB 1.8M revenue/year |
| Malaysia | Service Tax on digital services | 8% (as of 2024) | MYR 500,000 revenue/year |
| Philippines | Digital services VAT | 12% | PHP 3M threshold |
| Singapore | GST on digital services | 9% | SGD 100,000 threshold |
| Vietnam | FCT (Foreign Contractor Tax) | 5% VAT + 5% CIT | Any revenue from Vietnamese customers |

**Pricing implications:** Local prices displayed to users should be tax-inclusive once you are registered and collecting tax. "Plus local taxes" UX is generally disfavoured for consumer products in SEA — users expect the displayed price to be what they pay. Include tax in the displayed local price and account for it in your margin calculations.

---

*Last updated: April 2026*
