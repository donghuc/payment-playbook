# One-Time Purchase (Perpetual License)

> Part of the Revenue & Paid Models series. See [revenue-models.md](../revenue-models.md) for the full index.

---

## Mechanic

A one-time purchase — also called a perpetual license in software — means the user pays a single price and owns access to the product or a specific version of it permanently. There is no recurring charge, no subscription renewal, no risk of losing access if a payment fails.

The transaction is final. The user pays once, receives the product, and it remains theirs indefinitely. Future major versions may be priced separately (versioned pricing), but the version purchased continues to work regardless.

```
Discovery  →  Single Purchase  →  Permanent Ownership  →  (Optional: Version Upgrade Purchase)
```

**Variants of the model:**

- **Pure one-time purchase:** Pay once, own forever, all future updates included. Rare and unsustainable for most products — promising unlimited future updates for a fixed past price is financially precarious.
- **Version-based perpetual license:** Pay once per major version. Minor updates (bug fixes, minor features) are free; major version upgrades are a new purchase or discounted upgrade price. The dominant structure for serious one-time purchase products.
- **Lifetime deal (LTD):** A one-time price grants lifetime access to what is otherwise a subscription product. Often used as a launch-phase acquisition tactic or sold through platforms like AppSumo. Structurally different from a true perpetual license — it is a subscription product sold as a one-time transaction.

---

## B2C Reality

### How it fits B2C

One-time purchase occupies a specific and growing position in B2C, driven by a cultural force that is real and measurable: **subscription fatigue**. As consumers accumulate subscriptions — streaming, music, cloud storage, tools, games, news — the cognitive and financial overhead of "yet another monthly charge" creates genuine resistance. A product that can credibly say "pay once, it's yours" offers something meaningfully different from the subscription default.

This is not a fringe preference. Affinity's explicit "no subscription" positioning against Adobe Creative Cloud captured significant market share from professional creatives who were financially and philosophically tired of Adobe's model. The positioning was the product — "own your tools" is a value statement as much as a pricing decision.

In B2C specifically, one-time purchase works best in categories where:

- The product does a defined, stable set of things well — it is a tool, not a platform
- Users have a clear point-in-time need (edit photos, write a document, manage passwords) rather than an ongoing evolving service dependency
- The product can be meaningfully differentiated from subscription alternatives on value or principle
- The target user has experienced subscription disappointment — a lost feature, a sudden price increase, a service shutdown — and is actively seeking ownership as an alternative

The model also has practical advantages in markets like Southeast Asia, where recurring billing infrastructure can be inconsistent (expired cards, wallet balance limitations) and where a single clean transaction has fewer failure points than a monthly recurring charge over two years.

### Economic standpoint

One-time purchase economics are structurally different from subscription and require a different mental model:

```
Revenue = Units Sold × Purchase Price
```

There are no MRR or ARR metrics in the traditional sense. Revenue is a function of sales velocity, not subscriber base size. This creates the central economic challenge: **revenue is acquisition-dependent**. You must continuously bring in new buyers because existing customers are not generating recurring revenue.

**The pricing problem:** In a subscription model, a $10/month product generates $120/year in LTV (ignoring churn). A one-time purchase product must price its single transaction to capture a comparable value — commonly 3–5x the equivalent annual subscription price. A $10/month subscription compares to a $30–50 one-time purchase, sometimes higher for professional tools. Under-pricing a one-time purchase is the most common mistake — the price must reflect the full lifetime value the product delivers, not just the cost of one month.

**Versioned pricing as a recurring revenue approximation:** Products that release meaningful major versions on a 1–3 year cycle create a recurring revenue cadence without a subscription structure. Existing users who upgrade are effectively paying again — but on their own terms, at a moment of demonstrated product improvement, rather than automatically. The upgrade rate (what percentage of existing users buy the new version) is the key metric — well-regarded products with loyal user bases see 40–70% upgrade rates on major releases.

**Cost structure advantages:** One-time purchase products often have lower support cost per user than subscription products because there is no billing relationship to manage — no failed payments, no cancellation flows, no dunning. The post-purchase relationship is simpler.

**The AppSumo / Lifetime Deal economics caveat:** LTDs sold at $49–99 one-time for what should be a $10–20/month subscription are frequently financially destructive for the seller. The typical LTD buyer is a deal-hunter who may never become a profitable customer, and the commitments made at $69 may cost hundreds of dollars per user over years of support and infrastructure. LTDs are a legitimate launch-phase tactic for acquisition and social proof, but should be capped in volume and structured carefully. Many SaaS companies have been severely damaged by over-issuing LTDs.

### How it performs in B2C

One-time purchase performs at its peak when:

- **The product is finished, not perpetually evolving.** A stable tool with a well-defined scope can credibly promise long-term value from a one-time price. A product that is constantly changing or expanding its feature set creates pricing pressure — new features feel like they should be "included" but were not priced into the original transaction.
- **The price reflects genuine lifetime value.** An underpriced one-time purchase creates financial stress for the developer and eventually leads to either abandonment, a forced subscription pivot, or poor product quality.
- **Distribution is efficient.** Without a subscriber base that generates monthly revenue, the product needs to maintain strong top-of-funnel acquisition. App Store placement, content marketing, word of mouth, and influencer reach are the primary channels — not paid acquisition at scale, which is hard to sustain on one-time revenue.
- **The user's trust in product longevity is founded.** "Pay once" only works as a value proposition if users believe the product will still exist and function in 3 years. Unknown teams selling one-time purchase tools face a credibility challenge — users may fear abandonment after the sale.

---

## Real World Examples

**Affinity Suite (Serif) — Designer, Photo, Publisher**
The most instructive one-time purchase success story in modern B2C creative software. Affinity launched explicitly as an anti-Adobe-subscription alternative. Designer, Photo, and Publisher are each sold as one-time purchases (approximately $60–70 per app) with version upgrade pricing for major releases. The "no subscription" positioning is front and centre on all marketing. Affinity captured a significant share of the professional creative market — illustrators, designers, photographers — who viewed Adobe's subscription lock-in with hostility. Canva's acquisition of Affinity in 2022 for a reported $380M validated the model's commercial viability at scale.

**Reeder (RSS/Read Later app, iOS/macOS)**
Reeder is a focused, polished RSS reader sold as a one-time purchase on the App Store. Each major version (Reeder 3, Reeder 4, Reeder 5) is a separate purchase. Users who own Reeder 4 are not forced to buy Reeder 5, but many do because the quality improvement is visible. This is versioned perpetual licensing working well in a niche, loyal user community. Reeder's developer has sustained a high-quality product for over a decade on this model — proof that one-time purchase is viable long-term for a focused tool.

**Pockity (budgeting app)**
Pockity positions itself explicitly on the "pay once, yours forever" value. Its pricing page leads with this promise. It targets users who are frustrated with the ongoing subscription charges of competing budgeting apps (YNAB, for example, moved from one-time to subscription and faced significant user backlash). Pockity captured those users by offering the same category of tool with ownership rather than rental.

**Tot (text scratchpad, Iconfactory)**
Tot is a minimal text scratchpad for macOS and iOS, sold as a one-time purchase. Its scope is deliberately narrow — seven dots of text, nothing more. The focused scope is what makes one-time pricing credible: there is no expectation of continuous feature expansion, so the lifetime value is legible at purchase.

**Sketch (historical)**
Sketch launched as a one-time purchase macOS design tool and disrupted Adobe Illustrator and Fireworks at a fraction of the price. It eventually transitioned to a subscription model (with a perpetual license option) as the product's scope expanded to include cloud collaboration and version control. The transition was contentious among its user base — many felt betrayed by the move from perpetual to subscription. Sketch's evolution illustrates both the power of one-time purchase as a disruptive entry posture and its limitations as a product matures into a platform.

**AppSumo Lifetime Deals (ecosystem example)**
AppSumo is a marketplace specialising in software lifetime deals. Products on AppSumo sell LTDs (typically $49–$99 one-time) to AppSumo's deal-hunting user base in exchange for bulk acquisition and social proof. For early-stage products, this can generate revenue and user feedback quickly. The risks: AppSumo's audience has high support expectations, LTD buyers may not represent the product's long-term ideal customer, and over-issuing LTDs at below-sustainable pricing creates long-term liabilities. Used carefully (volume-capped, time-limited), it is a valid launch tactic. Used carelessly, it is a financial trap.

---

## Trade-offs

**Advantages:**
- Strong trust signal — "pay once, own forever" resonates deeply with subscription-fatigued consumers
- No involuntary churn — no failed payments, no billing relationship to manage post-purchase
- Simpler post-purchase infrastructure — no recurring billing, no dunning, no renewal flows
- Lower friction for one-time payment markets — single transaction is cleaner than recurring in low-card-penetration SEA markets
- Appeals to users who have been burned by subscription-to-shutdown scenarios (product abandoned after losing subscribers)
- Higher per-unit revenue than equivalent monthly subscription price
- Fewer regulatory complications — no auto-renewal disclosure requirements

**Disadvantages:**
- Revenue is acquisition-dependent — no subscriber base generating monthly baseline revenue
- Cannot sustain ongoing product development at scale without either high volume or high price
- Revenue is lumpy — strong at launch, potentially weak in subsequent months
- Version upgrade pricing requires disciplined release cadence and credible product improvement
- Lifetime deals are financially dangerous if over-issued or under-priced
- Difficult to raise revenue per user over time without a version upgrade or subscription pivot
- Users who buy may expect unlimited future updates — managing this expectation is an ongoing communication challenge
- Harder to build investor-facing ARR/MRR metrics — many investors discount one-time purchase revenue vs. subscription

---

## Best Fits For

- Focused, single-purpose utility tools with stable, well-defined feature sets
- Creative software (design, video, photo, audio) where professional users value ownership
- B2C markets with high subscription fatigue — users who have been burned by subscription models
- Products targeting professional users with higher willingness-to-pay for ownership vs. rental
- SEA markets where recurring billing friction (failed cards, wallet limitations) is a structural challenge for subscription models
- Indie/small-team products where the economics of a subscription infrastructure are disproportionate to the product's scope
- Products explicitly positioning against a dominant subscription competitor — ownership as differentiation

**Not a good fit for:**
- Products with ongoing, cloud-dependent services (real-time sync, AI inference, live data) — the per-use cost makes a flat purchase price economically unsustainable
- Products that are fundamentally platforms with continuous feature evolution — users will expect future features to be "included"
- Products that need recurring revenue to fund ongoing development (most SaaS)
- Products targeting casual, low-intent B2C users — one-time purchase requires sufficient perceived value to justify a higher upfront price

---

## UX Flow

The one-time purchase UX is structurally the simplest of all paid models in terms of the billing relationship — there is no subscription, no renewal, no tier management. The design effort concentrates on the purchase flow, license/access delivery, and version upgrade handling.

---

### Pricing Page

Without tiers or billing cycles, the pricing page must communicate a single value proposition: why this product is worth this price, permanently.

```
Pricing page
        ↓
Value headline
   → Lead with the ownership proposition: "Yours forever. One price."
   → What it does, who it's for, why it's different from subscription alternatives
        ↓
Price display
   → Single price, prominently shown
   → If versioned: "Version X — includes all future X.x updates"
   → If multiple platforms: per-platform pricing or bundle pricing
   → No billing cycle toggle — no monthly vs. annual complexity
        ↓
What's included
   → Feature list (short — 5–8 items)
   → "All future updates for Version X included" — set expectation clearly
   → What is NOT included (next major version upgrade pricing) — honesty prevents future disputes
        ↓
Comparison (optional but powerful)
   → "vs. [Subscription Competitor]" — show 2-year total cost comparison
   → "Own it for $X vs. $Y/year forever" — makes the value case concretely
        ↓
Trust signals
   → Reviews, press mentions, download count
   → "Used by X designers / writers / etc." — social proof
   → Refund policy: "30-day money-back guarantee" — reduces purchase risk
        ↓
CTA
   → "Buy now — $X" (single, clear)
   → Optional: "Try free for 14 days" if a trial exists
```

**The 2-year total cost comparison** is one of the most effective conversion tools for one-time purchase products positioned against subscription competitors. Showing that your $60 one-time price is cheaper than 6 months of a competitor's subscription makes the value proposition visceral and immediate.

---

### Purchase Flow

```
User clicks "Buy now"
        ↓
Platform-dependent path:

App Store / Play Store:
   → Native purchase sheet (price, confirmation)
   → Payment via Apple ID / Google account (stored payment method)
   → Immediate download / unlock
   → No separate account creation required at purchase

Direct (web):
   → Checkout page
      → Price confirmation
      → Payment method (card, PayPal, local methods by geo)
      → Email address (for license delivery)
      → No account creation required at purchase — minimise friction
   → Payment processing
   → Confirmation page
      → "Thank you — your purchase is confirmed"
      → License key or download link (if desktop app)
      → Receipt emailed immediately
        ↓
Product access
   → Immediate: no waiting, no approval
   → App Store: install triggers immediately
   → Desktop direct: download + license key delivered by email
   → Web app: account auto-created from purchase email, logged in automatically
```

**Account creation at purchase:** For web-delivered products, avoid forcing the user to create a password during checkout. Complete the purchase first, then prompt account creation (or auto-create from the purchase email). Every additional form field at checkout reduces conversion. The account setup can happen after the transaction is complete — the user has already paid and will complete onboarding.

**License key delivery:** For desktop apps that use license keys, the key must be delivered immediately by email and accessible from the purchase confirmation page. Delayed license delivery is a support trigger — users who don't receive their key within minutes contact support. Make the key visible on the post-purchase page and send it in the confirmation email.

---

### Trial → Purchase Flow

Many one-time purchase products offer a free trial before requiring payment. The trial-to-purchase conversion flow is distinct from subscription trial flows because the conversion event is a one-time charge, not a subscription initiation.

```
Trial experience (7–30 days)
        ↓
Trial expiry prompt (in-product, 3 days before)
   → "Your trial ends in 3 days"
   → "Buy [Product] — $X, yours forever"
   → Value reinforcement: what they've done in the trial
        ↓
Trial expiry
   → Feature limitation or full access lockout (product-specific)
   → In-product prompt to purchase (not a wall — a prompt)
        ↓
Purchase flow (as above)
        ↓
Immediate unlock
   → All trial work preserved and accessible
   → No data loss on purchase — critical trust moment
```

**Data preservation at conversion:** If users have created work during the trial (documents, designs, projects), that work must be fully preserved on purchase. Any loss of trial data at the conversion moment is a trust violation that generates refund requests, negative reviews, and support burden.

---

### Version Upgrade Flow

For products using versioned perpetual licensing, the upgrade flow is a re-purchase event — a second sales moment with an existing, satisfied customer.

```
Existing user notification (major version launch)
        ↓
Email announcement
   → "Version X is here — here's what's new"
   → Changelog focused on meaningful improvements (not exhaustive feature list)
   → Upgrade pricing: "Upgrade from Version [N-1]: $X" (discounted vs. full price)
   → Full price for new customers: $Y
   → "Already on the latest version? Nothing to do."
        ↓
In-product prompt (on launch of existing version)
   → Non-blocking notification: "Version X is available"
   → "See what's new" link (changelog)
   → "Upgrade — $X" CTA
   → "Remind me later" dismiss option
        ↓
Upgrade purchase flow
   → License validation (confirm existing license)
   → Upgrade pricing applied automatically
   → Payment flow (same as initial purchase)
   → New license key or automatic account upgrade
   → Immediate access to new version
```

**Upgrade pricing strategy:** Upgrade pricing should be meaningfully discounted vs. the full purchase price — typically 40–60% of full price. It rewards loyalty, reduces the "I already paid for this" friction, and improves upgrade take-rate. Charging existing customers full price for a major version upgrade is technically within your rights but is widely perceived as hostile and generates significant community backlash (see: iOS app developers who moved to new App IDs to avoid upgrade pricing obligations).

**Grandfather existing users where feasible:** If a version upgrade includes features that require ongoing server costs (sync, cloud storage), clearly communicate what existing perpetual license holders get and don't get. Never silently remove features from an existing license. If the economics require limiting what perpetual license holders receive, communicate it transparently and in advance.

---

### Lifetime Deal (LTD) Variant — Specific Considerations

If using AppSumo or similar platforms for a limited LTD campaign:

```
LTD purchase (AppSumo or equivalent platform)
        ↓
Account creation
   → Redeemed via coupon code or direct account activation
   → LTD tier clearly marked in account (so support can identify)
        ↓
LTD scope communicated at purchase:
   → What's included (features, plan tier equivalent)
   → What's NOT included (future tiers beyond LTD scope, if any)
   → Support tier
        ↓
Ongoing LTD user management:
   → Segment LTD users in your database (separate from subscription users)
   → Track LTD user support cost per user — monitor for sustainability
   → Cap total LTD volume before launch (e.g., max 1,000 codes)
   → Set a firm end date for the LTD campaign
```

**LTD scope discipline:** The most common LTD mistake is promising "all future features forever" with no ceiling. Define the LTD scope as equivalent to a specific plan tier at a specific point in time — "equivalent to [Pro] plan as of [launch date]." Future tiers beyond that scope are not included. This is standard practice and, when communicated clearly at purchase, is accepted by LTD buyers without complaint.

---

### Refund Flow

One-time purchase products benefit from a clearly stated, generously implemented refund policy. A 30-day money-back guarantee reduces purchase anxiety (particularly for higher-priced products) and increases conversion more than it increases refund rates.

```
User requests refund (within policy window)
        ↓
Refund request process:
   → Email or in-product form (simple, not obstructive)
   → No reason required within the policy window — frictionless refund
   → Optional: ask for reason (data collection, not a gate)
        ↓
Refund processing:
   → Confirmed within 1 business day
   → Refund to original payment method
   → License key or account deactivated immediately
   → "We're sorry it didn't work out" email — no guilt, no hard sell
        ↓
Post-refund:
   → Single re-engagement email 30 days later (optional, respectful)
   → No aggressive win-back sequence — they made their choice
```

**App Store refund nuance:** On iOS and macOS App Store, refunds are processed by Apple, not the developer. The developer has no control over the refund decision or timeline. This is a structural limitation of App Store distribution — factor it into pricing and support planning.

---

*Last updated: April 2026*
