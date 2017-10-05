---
seo:
  title: Reading your invoice
  description: Reading your invoice
  keywords: invoice, bill, receipt, refund, line, item, marketing, campaigns, charge, contacts, usage, overage
title: Reading your invoice
weight: 0
layout: page
zendesk_id: 
navigation:
  show: true
---

Your SendGrid invoice contains a lot of information, which may be difficult to read, particularly if you've made changes to your account during the previous month. Here's information on how to read your invoice:

![]({{root_url}}/images/invoice_legend.png)

{% anchor h2 %}
1. Physical Address
{% endanchor %}

**The physical address of your business.** This address is the same address you entered when you first signed up. If you would like to update the address as it appears on your invoices, click Change Invoice Address on the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you need to change the address on an existing invoice, please send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

 

{% anchor h2 %}
2. Billing Email
{% endanchor %}

**The email address where you receive SendGrid statements.** By default, this is the primary email address on file in your account. You can update it anytime from the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you override the billing email address in this way, the primary email address on file will stop receiving invoices. 

Need to send invoices to multiple addresses? Consider creating a [role address](https://sendgrid.com/docs/Classroom/Deliver/Address_Lists/role_addresses.html) on your side that includes the all of billing stakeholders in your organization, or send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

{% anchor h2 %}
3. Charge Summary
{% endanchor %}

These are the total charges for services used **in the current and previous month**: 

![]({{root_url}}/images/invoice_NL_usage.png)

This describes the plan you subscribe to and the total charge for usage in the previous month. In this case, the user switched from the Essentials plan to the Pro plan in the middle of the previous month, and the charge reflects a credit for the part of the month they weren't on Essentials and a charge for the part of the month where they switched to Pro.

![]({{root_url}}/images/invoice_IP_Address.png)

**IP Address** - These charges indicate that you have additional IP Addresses allocated to your account. There are two lines because one IP Address was added before the IP Addresses price increased, and other was added after.

Additional IPs cost $30.00 per IP/per month for Pro 100k plans and above.

For more information on Sendgrid Plans, visit our [pricing page](https://sendgrid.com/pricing). 

 

![]({{root_url}}/images/invoice_contact_1.png) 

**Contact List Storage** - This item is the charge for the highest number of stored Marketing Campaigns Contacts in the previous month. 

Refer to "Contact List Usage" in the Usage Summary section below for more information on how this charge is calculated. 

{% anchor h2 %}
4. Usage Summary
{% endanchor %}

This is how charges from the Usage Summary section are calculated:

![]({{root_url}}/images/invoice_overage.png)

*This item is a calculation of any email credits used that go over the monthly limit of you package for sending **during the previous month.**

In this example; the Pro 100k allows for 100,00 emails to be sent per month. We see that for the prior month, 120,000 email were sent, for a total of 20,000 emails over the limit. 

The overage charge rate for the Pro 100k plan is $0.00085 per extra email(20,000), which works out to a $17.00 overage charge.
 

![]({{root_url}}/images/invoice_contact_storage.png)

**Contact List Usage** - This item refers to highest number of **stored Marketing Campaigns Contacts in the previous month.** For more detailed breakdown on how Contact Storage billing works in Marketing Campaigns, [click here]({{root_url}}/Classroom/Basics/Billing/how_does_billing_work_for_marketing_campaigns.html).

In this example, the number under the "Used" column refers to the number of "blocks" of 10,000 contacts being stored in the prior month. We see that the highest number of blocks stored in that month was 5, or 50,000 contacts.

The charge for contact storage is **$10.00 PER 10,000 contacts(1 block),** so this example works out to a $0.00 usage charge for contacts stored in the previous month. 

![]({{root_url}}/images/invoice_usage_NL.png)

**Newsletter Usage** - Legacy Newsletter usage is charged at a rate of **$0.25 per 1000 messages sent.** This charge is in addition to the base plan price for emails used, as well as any overages that are accrued. 

In this example, no messages were sent using the Legacy Newsletter, which works out to a $0.00 charge.

{% anchor h2 %}
5. Transaction and Payment Summary
{% endanchor %}

![]({{root_url}}/images/invoice_payment_summary.png)

The Transaction Summary shows the total charges for the month, and the Payment Summary area shows the payment type, and last 4 digits of the card that was charged. For more information about updating your payment method, [click here](https://sendgrid.com/docs/Classroom/Basics/Billing/update_your_credit_card_and_resubmit_payments.html). 

***These line items always reflect the plan you currently have, not necessarily "Pro 100k", which is shown for the purposes of demonstration.** 
