# Payment Reality — Load-Bearing Principles

> A short, opinionated set of principles for working with payment infrastructure claims. Read this before relying on any capability, benchmark, or gateway assertion in the rest of this knowledge base.

---

## Why this file exists

Payment infrastructure documentation — whether internal, vendor-marketing, or third-party "best-of" lists — routinely overstates capability. Claims decay quickly, vendor docs are inconsistent across product surfaces, and third-party summaries often conflate wallets with gateways or merchant countries with payment-method availability.

A 2026 audit of this knowledge base surfaced several load-bearing inaccuracies that had shaped earlier strategic recommendations. The correction pass is documented in `fact-check-log.md`. This file extracts the principles that would have prevented those mistakes.

---

## Principle 1 — Recurring is not universal

"The wallet supports recurring" is not a complete statement. Recurring capability must be described at the level of **wallet × gateway × market × merchant-approval status**, not at the wallet level.

Concrete examples (as of April 2026, [Verified — Adyen docs]):

- GoPay **supports** recurring via Adyen (Subscription / CardOnFile contract types)
- GCash **does NOT** support recurring via Adyen — but **does** via PayMongo, Xendit, and the Ezypay/GCash/Xendit partnership
- GrabPay **does NOT** support recurring via Adyen — direct Grab partnership is required
- Touch 'n Go **does NOT** support recurring via Adyen — the Curlec partnership is a separate path
- NAPAS domestic cards **do NOT** support recurring via Adyen — despite NAPAS's own scheme documentation referencing tokenization primitives

A prior version of this knowledge base claimed all of the above wallets supported recurring "via Adyen." That was incorrect and would have led to broken subscription architecture decisions.

**Rule:** Before committing to a recurring billing architecture on any wallet, verify the specific gateway's feature support table, not the wallet operator's marketing page.

---

## Principle 2 — Gateway ≠ capability

A gateway aggregates payment methods, but the gateway's implementation of each method is independent of what the method's operator offers elsewhere. Four distinct questions, often conflated:

1. **Does the wallet operator support recurring?** (Ask the wallet.)
2. **Does the gateway expose that recurring capability?** (Ask the gateway's docs.)
3. **Is recurring available to my merchant category?** (Some wallets restrict by category — e.g., direct Grab partnership for GrabPay recurring.)
4. **Is it live in my target market?** (Wallets operate differently in each country — GrabPay SG ≠ GrabPay MY ≠ GrabPay PH in terms of feature surface.)

Any "this wallet supports recurring" claim that doesn't answer all four should be treated as unverified.

---

## Principle 3 — Market ≠ country

Southeast Asia is not a market. It is at least six distinct markets with minimal cross-border payment-method interoperability. The same applies to Europe (Eurozone ≠ EU ≠ EEA ≠ "Europe" — the UK, Switzerland, Norway, Sweden all have different payment stacks).

**Rule:** "Works in SEA" is not a useful statement. Specify the country. Then specify the city-tier if payment method adoption varies within a country (e.g., Jakarta vs. rural Indonesia).

---

## Principle 4 — Benchmark ≠ guarantee

A conversion rate benchmark is a pattern observed in other companies' products, not a prediction about yours.

- **Verified benchmarks** (e.g., Spotify's 39–40% premium-to-MAU ratio, sourced from earnings reports) describe a specific company's outcome, not a generalisable target.
- **Estimated benchmarks** (e.g., "B2C SaaS freemium converts at 2–8%") are aggregated industry ranges — useful as a sanity check, not as a plan input.
- **Case-study benchmarks** (e.g., reverse trial conversion at "15–30% for top performers") come from individual operator writeups — directional only; public datasets are thin.

Tagging scheme used throughout this knowledge base:

- `[Verified]` — sourced from primary documentation (vendor docs, earnings reports, official rate cards) as of a stated date
- `[Estimated]` — aggregated or inferred figure from multiple sources; reasonable but not authoritative
- `[Case-study]` — single-company or operator-reported figure; directional only, not a market benchmark

Every capability or benchmark claim in this knowledge base should carry one of these tags plus a "as of [date]" where relevant. Untagged claims should be treated as unverified.

---

## Principle 5 — Pricing decays faster than you expect

Gateway rate cards change quarterly. App store commission structures change with each platform revision (e.g., Google Play's 2022 move to flat 15% for subscriptions, Apple's Small Business Program). A pricing figure without a "as of [date]" stamp is already suspect.

**Rule:** Before citing any gateway fee in a deck, PRD, or model, check the vendor's current published rate card. Do not rely on internal documentation alone if the target audience will make a commercial decision based on the figure.

---

## Principle 6 — Capability classification (use this taxonomy)

For any recurring claim, classify which of the following applies:

1. **Native recurring** — tokenized card-on-file style; merchant-initiated charges without user interaction per cycle. (Visa/Mastercard, SEPA Direct Debit, PayPal, Apple Pay/Google Pay via card-on-file)
2. **Token-based recurring** — wallet supports recurring via a stored token, but the token is specific to the wallet; per-wallet integration required. (GoPay via Midtrans/Adyen, MoMo via MoMo's own API, GCash via PayMongo/Xendit)
3. **User-approved recurring** — each charge requires explicit user authorisation (re-auth, PIN, or app confirmation). Not true recurring; closer to "remembered one-time."
4. **Not supported** — one-time only.

"Supports recurring" without a classification is not a useful statement. Always specify which of the four applies.

---

## Principle 7 — When in doubt, write "verify"

The cost of writing `[Verify per integration — date]` against a capability claim is low. The cost of shipping a subscription architecture based on an incorrect claim is high (migration, customer refunds, lost revenue during the rebuild). Prefer the former.

Capability claims that should always be verified before commercial commitment:
- Recurring support for any non-card payment method
- Gateway merchant-country eligibility for new markets
- Gateway fee tiers below published rate card (volume-negotiated deals)
- Platform commission rates after any platform policy change
- Local regulatory requirements (EU Omnibus, FTC Click-to-Cancel, SCA/PSD2)

---

## How to apply these principles

When writing or editing any document in this knowledge base:

1. Tag every capability or benchmark claim with `[Verified]`, `[Estimated]`, or `[Case-study]`.
2. Include the date the claim was verified, and the source (vendor docs URL or equivalent).
3. Classify recurring claims using the four-level taxonomy.
4. Name the country, not the region. Name the gateway, not the wallet. Name the merchant country, not the customer country.
5. If a claim is load-bearing to a strategic decision, prefer "verify before committing" over "trust the knowledge base."

---

*Last updated: April 2026*
