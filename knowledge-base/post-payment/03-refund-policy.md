# Refund Policy Framework

> Part of the Post-Payment Strategy series. See [post-payment-strategy.md](../post-payment-strategy.md) for the full index.

---

## Overview

Refund policy is both a legal requirement and a strategic tool. Done well, a clear and fair refund policy reduces chargebacks, builds trust with hesitant buyers, and can increase initial conversion. Done poorly, it generates disputes, erodes trust, and creates regulatory exposure.

The key principle: **a refund policy's primary job is to reduce friction, not to protect revenue.** A customer who gets a straightforward refund often resubscribes later. A customer who had to fight for a refund tells others.

---

## Legal Requirements by Market

### EU — Right of Withdrawal (14-Day Cooling-Off Period)

Under the EU Consumer Rights Directive, consumers have a 14-day right of withdrawal from distance contracts (including digital subscriptions), without giving a reason.

**Critical exception:** If the consumer explicitly requests that digital content delivery begins before the 14-day period ends, and acknowledges they lose the withdrawal right upon delivery — the right of withdrawal can be waived.

```
The standard approach for digital subscriptions:
  At checkout, present a waiver checkbox:

  ☑  "I agree that [Product] may begin providing the service
      immediately. I acknowledge that this means I waive my 14-day
      right of withdrawal for immediately-commenced digital services."

If this waiver is NOT obtained at checkout:
  → You must offer a full refund to any EU customer who requests it
    within 14 days of purchase, no questions asked.

If the waiver IS obtained at checkout:
  → Strictly speaking, the right of withdrawal no longer applies.
  → However: refunding any customer who asks within 14 days is
    still best practice — the regulatory risk of refusing is
    higher than the cost of the refund.
```

**Practical guidance:** Obtain the waiver at checkout. Also maintain a good-faith policy of refunding EU customers within 14 days if they ask. The reputational and regulatory risk of refusing a 14-day refund is disproportionate to the revenue protected.

### UK — Similar to EU

The UK Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 are equivalent in effect to the EU CRD post-Brexit. Same 14-day right of withdrawal, same digital content exception if the consumer gives explicit consent and acknowledges waiver at purchase.

### US — FTC and State Law

No federal right of withdrawal equivalent to the EU. However:
- The FTC's Click-to-Cancel rule (2024) requires clear disclosure of subscription terms at point of sign-up
- Several states (California most prominently) have auto-renewal laws (ARL) that require specific disclosure language at checkout and on renewal reminder emails
- Offering refunds voluntarily reduces chargebacks and dispute rates, which Visa/Mastercard monitor

### Australia — Consumer Law

Australian Consumer Law (ACL) gives consumers rights to remedies (refund, repair, or replacement) for services that are not fit for purpose or not as described. This is not a blanket withdrawal right but a quality-of-service guarantee. Clearly state what your product does and ensure it delivers on that description.

### SEA — Generally Less Regulated

Most SEA markets do not have direct equivalents to the EU right of withdrawal for digital services. Indonesia, Philippines, Malaysia, Thailand, and Vietnam have consumer protection frameworks that generally require goods and services to be as described, but specific digital subscription refund mandates are limited. However:
- Following good-faith refund practices reduces chargeback risk
- Local trust is built through transparency about policies

---

## Recommended Refund Policy Structure

### Tier 1 — Proactive Refund Window (No Questions)

Offer a defined proactive refund window as part of your standard policy. This increases conversion (reduces purchase anxiety) and reduces chargebacks (unhappy users get a refund before disputing).

**Recommended:** 7–14 days from initial subscription charge.

```
Policy statement:
  "If you're not satisfied within [X] days of your first subscription
   charge, contact us and we'll issue a full refund — no questions asked."
```

**Why 7–14 days (not longer):**
- Shorter windows than 7 days create friction ("what if I don't realise until day 8?")
- Windows longer than 14 days invite gaming (subscribe, use, refund, repeat)
- 14 days aligns with EU right of withdrawal (simplifies policy for global audiences)

### Tier 2 — Good-Faith Refunds (Case-by-Case)

Outside the proactive window, handle refund requests individually with a presumption toward approval for:
- First-time subscribers who had a poor initial experience
- Technical failures on your side (downtime, feature not working)
- Users who were charged after believing they cancelled
- Accidental purchases (duplicate charge, charge after cancellation confirmation)

**Do not approve refunds for:**
- Users who used the product extensively during the period (>30% of days active)
- Repeat refund requests (same user, third+ time)
- Requests that are clearly gaming the system (subscribe-use-refund pattern)

### Tier 3 — Annual Subscription Prorated Refunds

For annual subscribers who cancel mid-year, your policy options:

**Option A — No prorated refund (access continues to period end):**
```
"Annual subscriptions are non-refundable. If you cancel, your Pro
access continues until your next renewal date. You will not be
charged again after cancellation."
```
Clear and common in the industry. Acceptable in most markets if clearly disclosed at purchase.

**Option B — Prorated refund on request:**
```
"Annual subscribers who cancel within the first [30] days can
request a prorated refund for unused months."
Refund amount = (months remaining / 12) × annual price
```
More user-friendly; legally required in some jurisdictions (check EU/UK for your specific product category).

**Option C — Full refund within 30 days, nothing after:**
```
"Annual subscriptions are fully refundable within 30 days of purchase.
After 30 days, no refund is available — your access continues to
year-end."
```
Clear, generous on the front end, firm after the window.

**Recommendation:** Option C for most B2C SaaS. Option A is legally sufficient but generates more goodwill issues; Option B invites last-month cancellation patterns.

---

## Refund Process

### How to Refund in Stripe

```python
# Full refund
refund = stripe.Refund.create(
    charge=charge_id,
    reason='requested_by_customer'  # or 'duplicate' or 'fraudulent'
)

# Partial refund (e.g., prorated)
refund = stripe.Refund.create(
    charge=charge_id,
    amount=4500,  # Amount in cents
    reason='requested_by_customer'
)

# Refund via PaymentIntent (preferred for newer integrations)
refund = stripe.Refund.create(
    payment_intent=payment_intent_id,
    reason='requested_by_customer'
)
```

**Timing:** Stripe refunds typically appear on the user's card within 5–10 business days. Credit cards may take longer due to issuer processing cycles. Debit cards are usually faster.

**Settlement:**  Refunds come from your Stripe balance. If your balance is insufficient, Stripe will draw from your connected bank account.

### How to Refund — SEA Gateways

```
Xendit:
  POST /refunds
  {
    "reference_id": "refund-{uuid}",
    "invoice_id": "{xendit_invoice_id}",
    "amount": 150000,  // IDR
    "reason": "REQUESTED_BY_CUSTOMER"
  }
  
  Note: E-wallet refunds via Xendit go back to the wallet balance,
  not to a bank account. For GoPay/OVO/GCash refunds — user receives
  the amount in their wallet. Processing time: 1–3 business days.

Virtual Account payments:
  VA payments cannot be directly reversed to the VA — the user
  must provide a bank account for the refund transfer.
  Collect bank details via a support flow.
  
  This is an important UX consideration: when issuing a refund for
  a VA payment, you need the user's bank account number. Design your
  support flow to collect this.

OTC (Alfamart/7-Eleven):
  OTC cash payments are refunded via bank transfer.
  Collect bank account details through support.
  Processing time: 3–5 business days.
```

### IAP Refunds (App Store / Google Play)

For subscriptions managed by App Store or Google Play, you **cannot issue refunds directly** — the user must request refunds through Apple or Google.

```
App Store refund path:
  reportaproblem.apple.com
  or Settings → Apple ID → Purchase History → Request Refund

Google Play refund path:
  Google Play support, or
  play.google.com/store/account/subscriptions → Request refund
  
  Note: Google Play allows developers to issue refunds via
  the Play Developer API within a 48-hour window:
  POST /androidpublisher/v3/applications/{packageName}/
       purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke
```

**Your role for IAP refunds:** Direct users clearly to the correct refund path. Attempting to process IAP refunds via your own gateway creates confusion and double-refund risk.

---

## Refund Communication Templates

### Confirmation of Refund Issued

```
Subject: "Refund processed — [Product]"

Hi [Name],

Your refund of [amount] has been processed.

Details:
  Amount:          $[amount]
  Original charge: [date]
  Reason:          [Your request / Refund policy / Technical issue]

Timing: Refunds typically appear within 5–10 business days,
depending on your card issuer.

Your account has been moved to the free plan. All your [data /
projects / content] is preserved.

If you'd like to try [Product] again in the future, you can
resubscribe at any time: [link]

[Your name]
[Product] Support
```

### Refund Request Declined

```
Subject: "Re: Your refund request — [Product]"

Hi [Name],

Thank you for reaching out.

[Reason for decline, stated honestly]:
  "Your subscription was purchased [X days] ago, which is
   outside our [14]-day refund window."
  
  OR:
  
  "Based on our records, the account was actively used during
   the subscription period — [X sessions / features used].
   Our refund policy covers subscriptions where the product
   wasn't able to be used."

Your Pro access continues until [date].

If you'd like to cancel to avoid future charges, you can do so
here: [cancellation link]

If you believe there's an error in our assessment, please reply
to this email with more context and we'll take another look.

[Your name]
[Product] Support
```

**Never use:**
- "Per our Terms of Service, refunds are not available" as the sole explanation
- Condescending or legalistic language
- Responses that make the user feel accused

**Always offer:**
- The cancellation link (even when declining the refund)
- A path to appeal if they have additional context

---

## Refund Rate Monitoring

Track refund rate as a health metric:

```
Refund rate = (refunds issued in period / charges in period) × 100%

Healthy:  < 2% for monthly subscriptions
Warning:  2–5%
Critical: > 5% (Visa/Mastercard may flag your account)

Segment by:
  - Plan type (monthly vs annual)
  - Geography (EU refund rates higher due to right of withdrawal)
  - Acquisition channel (paid social often has higher refund rates)
  - Cohort (refund rates by signup month)
```

High refund rates on a specific acquisition channel signal misleading ad creative or landing page copy. High refund rates in a specific month signal a product quality issue or billing surprise. Tracking cohorts reveals structural issues vs. campaign-specific issues.

---

## Refund Policy Page — Recommended Copy

```
---
Refund Policy

We want you to be confident subscribing to [Product].

7-day satisfaction guarantee
If you subscribe and decide [Product] isn't right for you, contact us
within 7 days of your first charge and we'll issue a full refund.

Annual subscriptions
Annual subscriptions are fully refundable within 30 days of purchase.
After 30 days, your access continues to the end of your annual period
and you will not be charged again.

Renewals
Monthly and annual renewals are generally non-refundable once processed.
If you intended to cancel before your renewal, contact us as soon as
possible and we'll do our best to help.

How to request a refund
Email us at [support email] with your account email address and the
reason for your request. We respond within 1 business day.

EU and UK customers
Customers in the EU and UK have a 14-day right of withdrawal. At checkout,
you acknowledged that the service begins immediately, which constitutes a
waiver of this right under EU consumer law. We still honour refund requests
within 14 days at our discretion.
---
```

Keep the policy page short, written in plain language, and easy to find. A refund policy buried in Terms of Service is not a policy customers can actually use.

---

*Last updated: April 2026*
