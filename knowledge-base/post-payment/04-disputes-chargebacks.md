# Dispute & Chargeback Management

> Part of the Post-Payment Strategy series. See [post-payment-strategy.md](../post-payment-strategy.md) for the full index.

---

## Overview

A chargeback (also called a dispute) is a forced reversal of a payment, initiated by the cardholder's bank at the cardholder's request. It is different from a refund: refunds are initiated by you; chargebacks are initiated against you.

Chargebacks are costly in multiple ways:
- **Revenue loss:** The disputed amount is returned to the cardholder, plus a dispute fee ($15–$25 per dispute with most processors)
- **Threshold risk:** Visa and Mastercard monitor dispute rates. If your dispute rate exceeds ~0.9% of transactions (Visa) or 1.5% (Mastercard's Early Warning threshold), you risk fines, increased processing fees, or losing your merchant account
- **Administrative cost:** Responding to disputes takes time, and even winning a dispute doesn't recover the dispute fee

**Industry benchmarks for B2C SaaS:**
- Healthy dispute rate: < 0.5% of transactions
- Warning zone: 0.5–0.9%
- High risk: > 0.9% (Visa Dispute Monitoring Program threshold)

---

## Types of Disputes

Understanding the dispute reason is necessary to respond correctly.

| Reason Code Category | What It Means | Recovery Probability |
|---------------------|---------------|---------------------|
| Fraudulent (unauthorised) | Cardholder claims they didn't make the purchase | Low if genuine fraud; High if "friendly fraud" |
| Not recognised | Cardholder doesn't recognise the charge on their statement | Medium — often resolved with descriptor clarification |
| Subscription cancelled | Cardholder says they cancelled but were still charged | Medium — depends on cancellation records |
| Product not received | Claims they didn't receive what was purchased | Medium — demonstrate delivery via logs |
| Product unacceptable | Claims product didn't work as described | Low unless you can prove it worked |
| Credit not processed | Claims they requested a refund that wasn't processed | High — easy to resolve with refund records |

**Friendly fraud:** A cardholder who made a legitimate purchase files a "fraudulent" or "not recognised" dispute to get the money back without going through your refund process. This is the most common form of chargeback for digital subscription products. It's often not malicious — users may genuinely not recognise the statement descriptor or forget about a subscription they haven't used.

---

## Prevention — The Most Effective Strategy

Preventing disputes is far more valuable than winning them. Most disputes can be prevented at the point of charge.

### 1. Clear Statement Descriptor

The most common "not recognised" dispute cause: the user doesn't recognise the charge name on their bank statement.

```
Bad descriptors:
  "PAYMT*12345ABC"         ← Unreadable
  "CLOUDPAYMENTS INC"      ← Company name, not product name
  "SP*MYBUSINESS"          ← No context

Good descriptors:
  "YOURAPP PRO"            ← Product name, recognisable
  "YOURAPP.COM 9.00"       ← Domain + amount
  "YOURAPP - MONTHLY"      ← Product + billing context
```

**Stripe statement descriptor:** Set at the account level, and can be overridden per charge. Use your product name, not your legal entity name.

```python
stripe.PaymentIntent.create(
    amount=900,
    currency='usd',
    statement_descriptor='YOURAPP PRO',  # Max 22 characters
    statement_descriptor_suffix='MONTHLY'  # Optional suffix
)
```

**Set a support phone number or URL in the descriptor** when possible — Visa and Mastercard allow appending contact info that appears on the statement, giving users a way to call you before disputing.

### 2. Pre-Renewal Reminders

Users who are surprised by a charge are far more likely to dispute than users who received a reminder. Sending renewal reminders 7 days before each charge — especially for annual subscriptions — significantly reduces "I didn't know I was being charged" disputes.

(See dunning/01-dunning.md for the full pre-renewal email sequence.)

### 3. Easy Cancellation

The FTC Click-to-Cancel correlation with chargebacks: products that make cancellation difficult have higher chargeback rates. When users can't cancel easily, they dispute the charge instead. Self-serve cancellation is both a regulatory requirement and a chargeback prevention measure.

### 4. Prompt Refunds

Issue refunds quickly for any request that falls within your policy. A user who gets a refund within 24 hours almost never files a chargeback. A user who waits 2 weeks for a response files a chargeback after 3 days.

If you deny a refund, explain why clearly. Ambiguity ("we'll look into it") followed by silence is the most common path to a dispute.

### 5. Fraud Prevention — Stripe Radar

Stripe Radar uses ML to block fraudulent charges before they happen. Fraudulent charges that aren't blocked become fraudulent chargebacks.

**Key Radar configurations:**
```
Rules to enable:
  Block if CVC check fails
  Block if ZIP code check fails (for markets where ZIP is checked)
  Block if card country doesn't match IP country (with threshold)
  Review charges from countries with high dispute rates

3DS requirements:
  Request 3DS for charges above [threshold] in high-risk markets
  Always request 3DS for charges from users with previous disputes
```

Radar's default rules block the majority of card-testing attacks (automated attempts to test stolen card numbers on small charges).

---

## Responding to Disputes

When a dispute is filed, you typically have 7–21 days to respond (varies by card network and reason code). Stripe's dashboard surfaces disputes with response deadlines.

### Evidence to Collect

For subscription-related disputes, the evidence that wins cases:

```
1. Proof of subscription agreement:
   - Screenshot or log of checkout showing user accepted T&C
   - IP address and timestamp of purchase
   - Email address used at checkout (matches cardholder's email)

2. Proof of service delivery:
   - Login logs showing the user accessed the product
   - Feature usage logs (API calls, sessions, content created)
   - Email delivery logs (receipt received, login confirmations)

3. Cancellation policy disclosure:
   - Screenshot of the checkout page showing cancellation terms
   - Confirmation that a cancellation option is self-serve

4. Communication history:
   - All emails sent to the user (receipts, renewal reminders)
   - Any support tickets from the user (especially if they requested
     cancellation through support and you processed it)

5. For "subscription cancelled" disputes:
   - Show that no cancellation request was received
   - OR show that cancellation was received and processed on [date],
     and the disputed charge was made before that date
```

**The key to winning disputes:** specific, timestamped evidence that the user made the purchase, received the service, and had the opportunity to cancel.

### Stripe Dispute Response

```python
# Respond to a dispute with evidence
stripe.Dispute.modify(
    dispute_id,
    evidence={
        'product_description': 'Monthly Pro subscription to YourApp...',
        'customer_email_address': 'user@example.com',
        'customer_name': 'User Name',
        'customer_purchase_ip': '123.456.78.90',
        'billing_address': '...',
        
        # Uploaded evidence files (upload as files first)
        'receipt': file_id_1,
        'service_documentation': file_id_2,
        'customer_communication': file_id_3,
        
        'refund_policy': 'We offer a 7-day refund policy...',
        'refund_policy_disclosure': 'Refund policy was displayed at checkout',
        'cancellation_policy': 'Users can cancel at any time...',
        'cancellation_policy_disclosure': 'Cancellation policy displayed at checkout',
        
        'uncategorized_text': 'The customer signed up on [date], accessed the product on [dates], and no cancellation request was received prior to the charge on [date].'
    },
    submit=True  # Submit the response
)
```

### Winning vs. Accepting Disputes

Not every dispute is worth fighting. Calculate the cost-benefit:

```
Fight the dispute if:
  - Dispute amount > $30 (likely exceeds response effort cost)
  - You have strong evidence (login records, service delivery proof)
  - The dispute reason is clearly incorrect (user used the product)
  - It's a friendly fraud pattern (repeat disputer, no support contact prior)

Accept the dispute (don't respond) if:
  - Dispute amount < $15–20 (dispute fee + effort exceeds the amount)
  - Evidence is weak (user never logged in, product failed)
  - It's a genuine case of the user not recognising the charge
  - You already issued a refund (resolve by providing refund evidence)
```

**Win rate reality:** For digital subscriptions, dispute win rates typically range from 30–60% depending on evidence quality and dispute reason. "Fraudulent" disputes (actual fraud, not friendly fraud) have near-zero win rates — those charges should ideally have been blocked by Radar at the point of sale.

---

## Chargeback Rate Monitoring

### Visa and Mastercard Dispute Programs

```
Visa Dispute Monitoring Program (VDMP):
  Early Warning:   Dispute rate > 0.65% OR > 75 disputes in a month
  Standard:        Dispute rate > 0.9% AND > 100 disputes in a month
  Excessive:       Dispute rate > 1.8% AND > 1,000 disputes in a month
  
  Consequences: Monthly fines ($50–$25,000), remediation requirements,
  potential termination of Visa processing.

Mastercard Excessive Chargeback Program (ECP):
  Merchant Chargeback Monitoring: Dispute rate > 1.5% AND > 100 chargebacks
  Excessive Chargeback Merchant:  Dispute rate > 2.0% AND > 200 chargebacks
  
  Consequences: Fines ($1,000–$100,000/month), mandatory monitoring,
  potential loss of Mastercard processing.
```

Most B2C SaaS products operating below 5,000 monthly charges will never approach these thresholds if basic prevention measures are in place. The risk becomes material at scale (50,000+ monthly transactions) or if a specific acquisition channel drives low-quality subscribers.

### Monitoring Query

```sql
-- Monthly dispute rate by payment method
SELECT
    DATE_TRUNC('month', created_at) as month,
    payment_method,
    COUNT(*) FILTER (WHERE is_dispute = true) as disputes,
    COUNT(*) as total_charges,
    ROUND(
        100.0 * COUNT(*) FILTER (WHERE is_dispute = true) / COUNT(*),
        2
    ) as dispute_rate_pct
FROM charges
WHERE created_at >= NOW() - INTERVAL '6 months'
GROUP BY 1, 2
ORDER BY 1 DESC, 4 DESC;
```

---

## SEA-Specific Dispute Considerations

E-wallet disputes in SEA work differently from card chargebacks:

**GoPay / GCash / Momo:**
- Disputes are filed through the wallet provider's own support system, not through Visa/Mastercard
- The wallet provider (Gojek/Globe/Momo) mediates the dispute
- Your evidence goes through Xendit / 2C2P to the wallet provider
- Timeframes are longer (7–30 days) and less standardised

**Virtual Account disputes (Indonesia):**
- VA transfers are bank-initiated; disputes go through the bank's own process
- Evidence requirement: confirmation that service was delivered post-transfer
- The bank reconciles the VA payment against their records — your Xendit/Midtrans webhook records serve as your proof

**Practical SEA approach:**
- Maintain detailed logs of all service delivery events (login records, feature activations)
- Keep all Xendit/2C2P transaction IDs and callbacks
- Build relationships with your gateway's merchant support — they are your escalation path for wallet disputes

---

*Last updated: April 2026*
