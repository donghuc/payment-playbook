# Fact-Check Log

> Running record of verified corrections to the Payment Strategy Knowledge Base.
> Update this document whenever a claim is verified, corrected, or newly added.

---

## How to Use This Log

When a claim in any knowledge base file is verified against primary sources and found to be incorrect or outdated, record the correction here. Include the affected file, the original claim, the corrected claim, the source or rationale, and the date.

---

## Corrections

| File | Claim | Original | Corrected | Source / Notes | Date |
|------|-------|----------|-----------|----------------|------|
| Revenue models | Spotify freemium conversion | ~26–30% | ~40% | 290M premium / ~700M+ MAUs (Q4 2025 earnings) | Apr 2026 |
| Revenue models | Dropbox conversion | ~4% | ~2–2.5% (FY2023) | Dropbox investor reports; S-1 era figure was higher | Apr 2026 |
| Revenue models | Card-capture trial conversion | 40–60% | 25–50% (median 25–35%) | Multiple SaaS benchmarking studies; top performers reach 40–50% | Apr 2026 |
| Revenue models | Reverse trial benchmark | 15–25% | 4–12% typical; 15–25% top performers (Loom, Airtable) | OpenView SaaS benchmarks 2023–2024 | Apr 2026 |
| SEA markets | NAPAS recurring support | ❌ No | ⚠️ NAPAS domestic cards support tokenization + recurring via Adyen | Adyen NAPAS Subscription contract type documentation | Apr 2026 |
| SEA markets | VNPay recurring support | ❌ No | ⚠️ VNPay Payment Gateway Auto-Debit utility supports periodic billing | VNPay developer documentation; distinct from VNPay-QR (one-time) | Apr 2026 |
| SEA markets | MoMo recurring support | Utility bills only | Full recurring API (Thanh Toán Tự Động) available to third-party merchants | MoMo Developer Portal documentation | Apr 2026 |
| SEA markets | GCash recurring support | Utilities/govt billers only | Broadly available for digital subscriptions (Spotify, Netflix, Disney+, Google, Apple confirmed) | PayMongo and Xendit integration documentation | Apr 2026 |
| SEA markets | GoPay recurring support | Select categories only | GoPay Tokenization (Direct Debit) formally documented in Midtrans API; also available via Adyen | Midtrans GoPay Tokenization API docs | Apr 2026 |
| SEA markets | Touch 'n Go recurring | Not broadly available | Live subscription recurring via Curlec partnership (2024); available through 2C2P and Adyen | TnG–Curlec partnership announcement 2024 | Apr 2026 |
| EU markets | SEPA country count | 36 | 41 (as of November 2024) | EPC SEPA Scheme Countries list; Montenegro and Albania added Nov 2024 | Apr 2026 |
| EU markets | UK SEPA status | "Not a SEPA member post-Brexit" | UK is listed in EPC SEPA Scheme Countries; UK IBANs valid for SEPA Direct Debit | EPC official SEPA Scheme Countries list | Apr 2026 |
| EU markets | BLIK user count | ~15 million | 18.9 million active users (Q1 2025) | BLIK published Q1 2025 report | Apr 2026 |
| EU markets | BLIK recurring status | Pilot program, not broadly available | Live production product with three models (A, M, O); available via Przelewy24 and PayU; constraint is partial bank coverage | BLIK developer documentation; Przelewy24 and PayU integration guides | Apr 2026 |
| EU markets | Vipps user count | 4 million (Norway only) | 12M+ across Norway, Denmark, Finland, Sweden after 2022 Vipps–MobilePay merger; Danish migration completed March 2024 | Vipps MobilePay press releases 2023–2024 | Apr 2026 |
| Global | Google Pay country count | 40+ countries | 146 countries (rebranded to Google Wallet, June 2024) | Google Wallet product announcement June 2024 | Apr 2026 |
| Global | Apple Pay / Google Pay conversion uplift | 2–6 percentage points | 5–20%+ improvement; conservative expectation for mobile-heavy B2C SaaS is 5–10% | Stripe published research; multiple industry studies | Apr 2026 |
| Global | PayPal active accounts | ~435 million | 436–439 million (2025 earnings reports) | PayPal Q4 2025 earnings | Apr 2026 |

---

## Round 2 — April 2026 Audit Corrections

A subsequent audit surfaced inaccuracies in prior corrections (Round 1). These were re-verified against primary sources (Adyen docs, GoCardless pricing page, Stripe global availability) and corrected. The following entries supersede or revise earlier rows above.

| File | Claim | Prior (incorrect) | Corrected | Source / Notes | Date |
|------|-------|-------------------|-----------|----------------|------|
| Gateways — Stripe | Merchant country list | Philippines listed as fully supported | Philippines NOT supported as of April 2026 (plans announced, not launched). VN also not supported. Indonesia in preview/invite-only. | [Verified — stripe.com/global] | Apr 2026 |
| SEA markets | NAPAS recurring via Adyen | "Supported — Subscription contract type" | NOT supported. Adyen NAPAS docs explicitly show Recurring = not supported. Prior correction was wrong. | [Verified — docs.adyen.com/payment-methods/napas-card] | Apr 2026 |
| SEA markets | GCash recurring via Adyen | Implied broad Adyen support | NOT supported via Adyen. Supported via PayMongo, Xendit, and Ezypay partnership. Wallet × gateway distinction matters. | [Verified — docs.adyen.com/payment-methods/gcash] | Apr 2026 |
| SEA markets | GrabPay recurring via Adyen | "Supported via tokenization for approved merchant integrations" | NOT supported via Adyen. Direct Grab partnership required for wallet-level recurring. | [Verified — docs.adyen.com/payment-methods/grabpay] | Apr 2026 |
| SEA markets | Touch 'n Go recurring via Adyen | "Supported via recurring subscription feature (launched via Curlec partnership). Available via 2C2P and Adyen." | NOT supported via Adyen. Curlec partnership exists but is a separate path — verify currency before relying. | [Verified — docs.adyen.com/payment-methods/touchngo] | Apr 2026 |
| SEA markets | VNPay Auto-Debit for SaaS | Presented as broadly usable for SaaS recurring | Auto-debit exists for utilities/bills; general SaaS subscription use is not clearly documented publicly. Treat as unsupported for SaaS unless verified per integration. | [Estimated — no authoritative public documentation for SaaS-ready VNPay Auto-Debit] | Apr 2026 |
| Gateways — GoCardless | EU SEPA fee cap | €4 | €2 (Standard plan) / €2.50 (Advanced plan). €4 figure does not match GoCardless's own published rate card. | [Verified — gocardless.com/pricing-eu] | Apr 2026 |
| Freemium model | Spotify conversion label | "~40% conversion" | Clarified as *premium-to-MAU ratio*, not a per-period conversion rate. ~39–40% at Q3 2025 (281M / 713M). Quarterly free-to-paid conversion is ~5%. | [Verified — Spotify Q3 2025 earnings] | Apr 2026 |
| Freemium model | Benchmark tagging | Numbers presented as facts | All benchmarks now tagged [Verified]/[Estimated]/[Case-study] with denominator stated. | Principle applied per `_principles/payment-reality.md` | Apr 2026 |
| Reverse trial model | Conversion benchmarks (4–6% / 8–12% / 15–30%) | Presented as "general SaaS benchmarks" | Reframed as case-study data — public benchmark datasets for reverse trial are thin. Operator-reported figures only. | [Case-study] | Apr 2026 |
| All files | Capability classification | Binary supports/doesn't-support | Introduced four-level taxonomy: Native / Token-based / User-approved / Not supported. See `_principles/payment-reality.md`. | — | Apr 2026 |

### Key takeaways from Round 2

- The Round 1 corrections on SEA wallet recurring were in several cases *over*-corrected — the pattern "SEA wallets support recurring via Adyen" was too broad. Adyen supports GoPay recurring but not GCash / GrabPay / Touch 'n Go / NAPAS recurring as of April 2026.
- The wallet-vs-gateway distinction is load-bearing. A wallet may support recurring natively while a given gateway has not implemented it. Always validate at the wallet × gateway × market intersection.
- Stripe's Philippines status was misstated in Round 1 (and in this knowledge base). Stripe has not yet launched PH as a merchant country.
- Benchmark numbers should carry tags (`[Verified]` / `[Estimated]` / `[Case-study]`) and denominators. The `_principles/payment-reality.md` file documents the tagging scheme.

---

*Last updated: April 2026*
