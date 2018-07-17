---
seo:
  title: Reading your invoice
  description: Reading your invoice
  keywords: invoice, bill, receipt, refund, line, item, marketing, campaigns, charge, contacts, usage, overage
title: Reading your invoice
weight: 0
layout: page
navigation:
  show: true
---

Your SendGrid invoice contains a lot of information, which may be difficult to read, particularly if you've made changes to your account during the previous month. To see your invoice, check your email or visit your [Plan & Billing details](https://app.sendgrid.com/settings/billing) page. Here's information on how to read your invoice:

![A screen shot of an example invoice]({{root_url}}/img/invoice_legend.jpg)

{% anchor h2 %}
1. Physical Address
{% endanchor %}

**The physical address of your business.** This address is the same address you entered when you first signed up. If you would like to update the address as it appears on your invoices, click Change Invoice Address on the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you need to change the address on an existing invoice, please send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

{% anchor h2 %}
2. Billing Email
{% endanchor %}

**The email address where you receive SendGrid statements**. By default, this is the primary email address on file in your account. You can update it anytime from the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you override the billing email address in this way, the primary email address on file will stop receiving invoices.

Need to send invoices to multiple addresses? Consider creating a [role address](https://sendgrid.com/docs/Classroom/Deliver/Address_Lists/role_addresses.html) on your side that includes the all of billing stakeholders in your organization, or send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

{% anchor h2 %}
3. Charge Summary
{% endanchor %}

The Charge Summary section covers all charges on your account **for the previous and upcoming month**.

![Charge summary section]({{root_url}}/img/invoice_plan.jpg)

**Plan** - This describes the plan you subscribe to and what it will cost. In this case, the user is on a Pro 100K plan and will be charged $79.95 to use it for the month of July.

![Additional IP address section]({{root_url}}/img/invoice_IP_Address.jpg)

**IP Address** - These charges indicate that you have additional Dedicated IP Addresses allocated to your account. There are two lines in this example because one IP Address was added before the IP Address price increased, and the other was added after. The user in this example will pay $80.00 total for their IPs for the month of July (1 IP at $20, 2 IPs at $30).

Additional IPs cost $30.00/mo each and are available on Pro 100K plans and above.

For more information on SendGrid Plans, visit our [pricing page](https://sendgrid.com/pricing).

![Contact storage section]({{root_url}}/img/invoice_contact_1.jpg)

**Contact List Storage** - This item is the charge for the highest number of contacts stored in Marketing Campaigns **during the previous month**.

Refer to "Contact List Usage" in the Usage Summary section below for more information on how this charge is calculated.

![Email activity section]({{root_url}}/img/invoice_ease.jpg)

**Email Activity History** - This charge is for access to the Email Activity Feed API as well as 30 days worth of Email Activity History in the app. These two features are sold as a package and cannot be added individually.

![Tax summary section]({{root_url}}/img/invoice_tax.jpg)

**Tax** - If you are in [a jurisdiction that SendGrid is required to charge sales tax]({{root_url}}/User_Guide/Settings/taxes_and_tax_exempt.html), your tax charges will appear here.

{% anchor h2 %}
4. Usage Summary
{% endanchor %}

The Usage Summary section outlines usage-based charges on your account **during the previous month**.

![Overage charges section]({{root_url}}/img/invoice_overage.jpg)

**Plan Overage** - This item is a calculation of any emails sent beyond the monthly limit of you package **during the previous month**.

In this example, the Pro 100K plan allows for 100,00 emails to be sent per month. We see that in the previous month, 120,000 emails were sent for a total of 20,000 emails over the limit. The overage rate for the Pro 100K plan is $0.00085 per extra email, which works out to a $17.00 overage charge (20,000 x .00085 = 17).


![Highest number of stored Marketing Campaigns Contacts in the previous month.]({{root_url}}/img/invoice_contact_storage.jpg)

**Contact List Usage** - This item refers to highest number of **stored Marketing Campaigns Contacts in the previous month**. For more detailed breakdown on how Contact Storage billing works in Marketing Campaigns, [click here]({{root_url}}/Classroom/Basics/Billing/how_does_billing_work_for_marketing_campaigns.html).

In this example, the number under the "Used" column refers to the number of "blocks" of 10,000 contacts that were stored in the previous month. We see that the highest number of blocks stored in that month was 6, or 60,000 contacts.

The charge for contact storage is **$10.00/mo for every 10,000 contacts (1 block)**, so this example works out to a $60.00 usage charge for contacts stored in the previous month.

![Empty Newsletter usage.]({{root_url}}/img/invoice_NL_usage.jpg)

**Newsletter Usage** - This item refers to usage of our [Legacy Newsletter product]({{root_url}}/User_Guide/Legacy_Newsletter/index.html). We no longer offer this product, so most invoices will either not include this line item or will show a balance of $0.00, as in this example.

{% anchor h2 %}
5. Transaction and Payment Summary
{% endanchor %}

![Transaction and payment summary]({{root_url}}/img/invoice_payment_summary.jpg)

The Transaction Summary shows the total charges for the month, and the Payment Summary shows the payment type and last 4 digits of the card that was charged. For more information about updating your payment method, [click here](https://sendgrid.com/docs/Classroom/Basics/Billing/update_your_credit_card_and_resubmit_payments.html).

**These line items always reflect the plan you currently have, not necessarily "Pro 100K", which is shown for the purposes of demonstration**.

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [SendGrid Pricing]({{site.site_url}}/pricing/)
- [Billing]({{root_url}}/User_Guide/Settings/billing.html)
