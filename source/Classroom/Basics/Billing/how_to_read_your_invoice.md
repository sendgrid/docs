---
seo:
  title: How to read your invoice
  description: How to read your invoice
  keywords: invoice, bill, receipt, refund, line, item, marketing, campaigns, charge, contacts, usage, overage
title: How to read your invoice
weight: 0
layout: page
zendesk_id: 
navigation:
  show: true
---
When you receive your invoice on the 1st of each month, you might have questions. This article aims to clarify what your invoices mean, and to help you learn more about what you are paying for.

![]({{root_url}}/images/invoice_legend.png)

 Please refer to the legend below for more information on each of these items. 

 

# 1. Physical Address

**The physical address of your business.** This address is the same address you entered when you first signed up. If you would like to update the address as it appears on your invoices, you can click on the "Change Invoice Address" button on the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you need to change the address on an existing invoice, please send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

 

# 2. Billing Email

**The email address that your invoices are sent to.** This address defaults as the primary email address on file for your account, but can be updated to a different address from the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you override the billing email address in this way, the primary email address on file will stop receiving invoices. 

Need to send invoices to multiple addresses? Consider creating a [role address](https://sendgrid.com/docs/Classroom/Deliver/Address_Lists/role_addresses.html) on your side that includes the all of billing stakeholders in your organization, or send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

 

# 3. Charge Summary

This section displays the total charges for services used **in the current and/or previous month.** 

![]({{root_url}}/images/invoice_NL_usage.png)

**Newsletter Usage** - This item refers to the total usage charge for sending during the previous month with Legacy Newsletter features via either the API or the UI.

Please refer to "Newsletter Usage" in the Usage Summary section below for more information on how this charge is calculated. 

 
![]({{root_url}}/images/invoice_pro100k_1.png)

*This item refers to any charge for the previous month for the base plan price. Under normal circumstances, this item will always show a charge of $0.00 for this service period.


![]({{root_url}}/images/invoice_IP_Address.png)

**IP Address** - This charge indicates you have an additional IP Address(es) allocated to your account. Specifically, this refers to any IP Address(es) beyond the first, which is always included in the base plan charge.

Additional IPs cost $20.00 per IP/per month for Pro 100k plans and above. This example charge is for a single additional IP address for a single month. 

 
![]({{root_url}}/images/invoice_pro100k_2.png)

*This item refers to any charge for an **overages accrued in the previous month.** 

Please refer to "Pro 100k Overage" in the Usage Summary section below for more information on how this charge is calculated. 


![]({{root_url}}/images/invoice_pro100k_3.png) 

*This item shows the charge for your base plan for **the current month**. In this example, the base price for a Pro 100k plan is $79.95.

For more information on Sendgrid Plans, visit our [pricing page](https://sendgrid.com/pricing). 

 

![]({{root_url}}/images/invoice_contact_1.png) 

**Contact List Storage** - This item is the charge for the highest number of **stored Marketing Campaigns Contacts in the previous month.** 

Please refer to "Contact List Usage" in the Usage Summary section below for more information on how this charge is calculated. 

  

# 4. Usage Summary

This section breaks down how certain charges from the above section are calculated. 

![]({{root_url}}/images/invoice_overage.png)

*This item is a calculation of any email credits used that go over the monthly limit of you package for sending **during the previous month.**

In this example; the Pro 100k allows for 100,00 emails to be sent per month. We see that for the prior month, 120,000 email were sent, for a total of 20,000 emails over the limit. 

The overage charge rate for the Pro 100k plan is $0.00085 per extra email(20,000), which works out to a $17.00 overage charge.
 

![]({{root_url}}/images/invoice_contact_storage.png)

**Contact List Usage** - This item refers to highest number of **stored Marketing Campaigns Contacts in the previous month.** For more detailed breakdown on how Contact Storage billing works in Marketing Campaigns, [click here]({{root_url}}/Classroom/Basics/Billing/how_does_billing_work_for_marketing_campaigns.html).

In this example, the number under the "Used" column refers to the number of "blocks" of 10,000 contacts being stored in the prior month. We see that the highest number of blocks stored in that month was 5, or 50,000 contacts.

The charge for contact storage is **$10.00 PER 10,000 contacts(1 block),** so this example works out to a $50.00 usage charge for contacts stored in the previous month. 


![]({{root_url}}/images/invoice_usage_NL.png)

**Newsletter Usage** - Legacy Newsletter usage is charged at a rate of **$0.25 per 1000 messages sent.** This charge is in addition to the base plan price for emails used, as well as any overages that are accrued.  

In this example, 20,000 messages were sent using the Legacy Newsletter, which works out to a $5.00 charge.

  

# 5. Payment Summary

![]({{root_url}}/images/invoice_payment_summary.png)

This area shows the payment type, and last 4 digits of the card that was charged. For more information about updating your payment method, [click here](https://sendgrid.com/docs/Classroom/Basics/Billing/update_your_credit_card_and_resubmit_payments.html). 


 

***These line items will always reflect the plan you currently have, not necessarily "Pro 100k", which is shown for the purposes of demonstration.** 
