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

Your Twilio SendGrid invoice contains a lot of information which may be difficult to understand. To see your invoice, check your email or visit the Plan & Billing tab on your [Account details](https://app.sendgrid.com/account/billing) page. Here's information on how to read your invoice:

![A screenshot of an example invoice]({{root_url}}/img/invoice-legend.png)

## 1. Physical Address

**The physical address of your business.** This address is the same address you entered when you first signed up. If you would like to update the address as it appears on your invoices, edit your company info on the [Account details](https://app.sendgrid.com/account/billing) page. If you need to change the address on an existing invoice, please send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

## 2. Billing Email

**The email address where you receive Twilio SendGrid statements**. By default, this is the primary email address on file in your account.

Need to send invoices to multiple addresses? Consider creating a role address on your side that includes all of the billing stakeholders in your organization, or send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

## 3. Charge Summary

The Charge Summary section breaks down your invoice total into individual charges. Some charges covered by this invoice are retroactive, meaning you are paying for usage in the previous month, while others are proactive, meaning you are paying for services for the upcoming month. This information is broken down in the **Service Period** column.

### API Plan

![Charge summary section]({{root_url}}/img/invoice-plan.png)

This is the **plan you subscribe to**. In this case, the user is on an API Pro 100K plan and will pay $89.95 to use it for the month of February.

### Marketing Campaigns Plan

![Charge summary section]({{root_url}}/img/invoice-marketing-plan.png)

This is the **Marketing Campaigns plan you subscribe to**. In this case, the user is on a Marketing Campaigns Basic 5K plan, and will pay $15.65 to use it for the month of February.

### IP Address

![Additional IP address section]({{root_url}}/img/invoice-IP-address.png)

This charge indicates that you have an **additional Dedicated IP Address** allocated to your account. If you have more than one IP address the total cost will be listed on this line.

IP addresses cost $30.00/mo each and are available on Pro API and Advanced Marketing Campaigns plans and above.

For more information on Twilio SendGrid Plans, visit our [pricing page](https://sendgrid.com/pricing).

### Contact List Storage

![Contact storage section]({{root_url}}/img/invoice-contact-1.png)

This item is the charge for the highest number of **contacts stored in Marketing Campaigns during the previous month**.

Refer to "Contact List Usage" in the Usage Summary section below for more information on how this charge is calculated.

### Email Activity History

![Email activity section]({{root_url}}/img/invoice-ease.png)

This charge is for access to the **Email Activity Feed API** as well as **30 days worth of Email Activity History** in the app. These 2 features are sold as a package and cannot be added individually.

The price for access to this feature varies per plan. For more information on pricing for Email Activity History, visit our [pricing page](https://sendgrid.com/pricing).

### Tax

![Tax summary section]({{root_url}}/img/invoice-tax.png)

If you are in [a jurisdiction where Twilio SendGrid is required to charge sales tax]({{root_url}}/ui/account-and-settings/taxes-and-tax-exempt/), your **tax charges** will appear here.

## 4. Usage Summary

The Usage Summary section outlines usage-based charges on your account **during the previous month**.

### Plan Overage

![Overage charges section]({{root_url}}/img/invoice-overage.png)

This item is a calculation of **any emails sent beyond the monthly limit** of your package **during the previous month**.

In this example, the Pro 100K plan allows for 100,00 emails to be sent per month. We see that in the previous month, 160,000 emails were sent for a total of 60,000 emails over the limit. The overage rate for the Pro 100K plan is $0.001 per extra email, which works out to a $60.00 overage charge (60,000 x .001 = 60).

### Contact List Usage

![Highest number of stored Marketing Campaigns Contacts in the previous month.]({{root_url}}/img/invoice-contact-storage.png)

This item refers to the highest number of **stored Marketing Campaigns Contacts in the previous month**. For more detailed breakdown on how Contact Storage billing works in Marketing Campaigns, [click here]({{root_url}}/ui/account-and-settings/billing/).

In this example, the number under the "Used" column refers to the number of "blocks" of 10,000 contacts that were stored in the previous month. We see that the highest number of blocks stored in that month was 1, or 10,000 contacts.

The charge for contact storage is **$10.00/mo for every 10,000 contacts (1 block)**, so this example works out to a $10.00 usage charge for contacts stored in the previous month.

## 5. Transaction and Payment Summary

![Transaction and payment summary]({{root_url}}/img/invoice-payment-summary.png)

The Transaction Summary shows the total charges for the month, and the Payment Summary shows the payment type and last 4 digits of the card that was charged. To change your payment method, go to [Account details](https://app.sendgrid.com/account/billing).

**These sections always reflect the plan you currently have, not necessarily "Pro 100K", which is shown for the purposes of demonstration**.

## Additional Resources

- [SendGrid Pricing](https://sendgrid.com/pricing)
- [Billing]({{root_url}}/ui/account-and-settings/billing/)
- [Sales Tax and Tax Exempt Status]({{root_url}}/ui/account-and-settings/taxes-and-tax-exempt/)
