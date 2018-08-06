---
seo:
  title: Reading your invoice
  description: Reading your invoice
  keywords: invoice, bill, receipt, refund, line, item, marketing, campaigns, charge, contacts, usage, overage
title: Reading your invoice
weight: 0
group: billing
layout: page
navigation:
  show: true
---

Your SendGrid invoice contains a lot of information, which may be difficult to read, particularly if you've made changes to your account during the previous month. To see your invoice, see the [Plan & Billing details](https://app.sendgrid.com/settings/billing) page. Here's information on how to read your invoice:

![A screen shot of an example invoice]({{root_url}}/img/invoice_legend.png)

## 	1. Physical Address

**The physical address of your business.** This address is the same address you entered when you first signed up. If you would like to update the address as it appears on your invoices, click Change Invoice Address on the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you need to change the address on an existing invoice, please send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

## 	2. Billing Email

**The email address where you receive SendGrid statements.** By default, this is the primary email address on file in your account. You can update it anytime from the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you override the billing email address in this way, the primary email address on file will stop receiving invoices.

Need to send invoices to multiple addresses? Consider creating a role address on your side that includes the all of billing stakeholders in your organization, or send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

## 	3. Charge Summary
 	
If you are in [a jurisdiction that SendGrid is required to charge sales tax]({{root_url}}/help-support/account-and-settings/taxes-and-tax-exempt/), here is your tax summary:

![Tax summary section]({{root_url}}/img/invoice_tax.png)

These are the total charges for services used **in the current and previous month**:

![Charge summary section]({{root_url}}/img/invoice_NL_usage.png)

This describes the plan you subscribe to and the total charge for usage in the previous month. In this case, the user switched from the Essentials plan to the Pro plan in the middle of the previous month, and the charge reflects a credit for the part of the month they weren't on Essentials and a charge for the part of the month where they switched to Pro.

![Additional IP address section]({{root_url}}/img/invoice_IP_Address.png)

**IP Address** - These charges indicate that you have additional IP Addresses allocated to your account. There are two lines because one IP Address was added before the IP Addresses price increased, and other was added after.

Additional IPs cost $30.00 per IP/per month for Pro 100k plans and above.

For more information on SendGrid Plans, visit our [pricing page](https://sendgrid.com/pricing).

![Contact storage section]({{root_url}}/img/invoice_contact_1.png)

**Contact List Storage** - This item is the charge for the highest number of stored Marketing Campaigns Contacts in the previous month.

Refer to "Contact List Usage" in the Usage Summary section below for more information on how this charge is calculated.

**Email Activity History** - This charge is for access to the Email Activity Feed API as well as 30 days worth of Email Activity History. These two features are sold as a package and cannot be added individually.

## 	4. Usage Summary

This is how charges from the Usage Summary section are calculated:

![Overage charges section]({{root_url}}/img/invoice_overage.png)

*This item is a calculation of any email credits used that go over the monthly limit of you package for sending **during the previous month.**

In this example; the Pro 100k allows for 100,00 emails to be sent per month. We see that for the prior month, 120,000 email were sent, for a total of 20,000 emails over the limit.

The overage charge rate for the Pro 100k plan is $0.00085 per extra email(20,000), which works out to a $17.00 overage charge.


![Highest number of stored Marketing Campaigns Contacts in the previous month.]({{root_url}}/img/invoice_contact_storage.png)

**Contact List Usage** - This item refers to highest number of **stored Marketing Campaigns Contacts in the previous month.** For more detailed breakdown on how Contact Storage billing works in Marketing Campaigns, [click here](https://sendgrid.com/pricing/).

In this example, the number under the "Used" column refers to the number of "blocks" of 10,000 contacts being stored in the prior month. We see that the highest number of blocks stored in that month was 5, or 50,000 contacts.

The charge for contact storage is **$10.00 PER 10,000 contacts(1 block),** so this example works out to a $0.00 usage charge for contacts stored in the previous month.

## 	5. Transaction and Payment Summary

![Transaction and payment summary]({{root_url}}/img/invoice_payment_summary.png)

The Transaction Summary shows the total charges for the month, and the Payment Summary area shows the payment type, and last 4 digits of the card that was charged. You can update your card information, retry a failed payment, and export past invoices for your business on the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing)

**These line items always reflect the plan you currently have, not necessarily "Pro 100k", which is shown for the purposes of demonstration.**

## 	Additional Resources
 	
- [SendGrid Pricing]({{site.site_url}}/pricing/)
- [SendGrid Pricing](https://sendgrid.com/pricing/)
- [Billing]({{root_url}}/help-support/account-and-settings/billing/)
