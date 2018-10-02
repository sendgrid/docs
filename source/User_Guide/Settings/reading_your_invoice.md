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

Your SendGrid invoice contains a lot of information which may be difficult to read. To see your invoice, check your email or visit your [Plan & Billing details](https://app.sendgrid.com/settings/billing) page. Here's information on how to read your invoice:

![A screen shot of an example invoice]({{root_url}}/img/invoice_legend.jpg)

{% anchor h2 %}
1. Physical Address
{% endanchor %}

**The physical address of your business.** This address is the same address you entered when you first signed up. If you would like to update the address as it appears on your invoices, click Change Invoice Address on the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page. If you need to change the address on an existing invoice, please send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

{% anchor h2 %}
2. Billing Email
{% endanchor %}

**The email address where you receive SendGrid statements**. By default, this is the primary email address on file in your account.

Need to send invoices to multiple addresses? Consider creating a [role address](https://sendgrid.com/docs/Classroom/Deliver/Address_Lists/role_addresses.html) on your side that includes the all of billing stakeholders in your organization, or send an email to [billing@sendgrid.com](mailto:billing@sendgrid.com).

{% anchor h2 %}
3. Charge Summary
{% endanchor %}

The Charge Summary section breaks down your invoice total into individual charges. Some charges covered by this invoice are retroactive, meaning you are paying for usage in the previous month, while others are proactive, meaning you are paying for services for the upcoming month. This information is broken down in the **Service Period** column.

{% anchor h3 %}
Plan
{% endanchor h3 %}

![Charge summary section]({{root_url}}/img/invoice_plan.jpg)

This is the **plan you subscribe to**. In this case, the user is on a Pro 100K plan and will be charged $79.95 to use it for the month of July.

{% anchor h3 %}
IP Address
{% endanchor h3 %}

![Additional IP address section]({{root_url}}/img/invoice_IP_address.jpg)

These charges indicate that you have **additional Dedicated IP Addresses** allocated to your account. There are 2 lines in this example because one IP Address was added before the IP Address price increased, and the other was added after. The user in this example will pay $80.00 total for their IPs for the month of July (1 IP at $20, 2 IPs at $30).

Additional IPs cost $30.00/mo each and are available on Pro 100K plans and above.

For more information on SendGrid Plans, visit our [pricing page](https://sendgrid.com/pricing).

{% anchor h3 %}
Contact List Storage
{% endanchor h3 %}

![Contact storage section]({{root_url}}/img/invoice_contact_1.jpg)

This item is the charge for the highest number of **contacts stored in Marketing Campaigns during the previous month**.

Refer to "Contact List Usage" in the Usage Summary section below for more information on how this charge is calculated.

{% anchor h3 %}
Email Activity History
{% endanchor h3 %}

![Email activity section]({{root_url}}/img/invoice_ease.jpg)

This charge is for access to the **Email Activity Feed API** as well as **30 days worth of Email Activity History** in the app. These 2 features are sold as a package and cannot be added individually.

The price for access to this feature varies per plan. For more information on pricing for Email Activity History, visit our [pricing page](https://sendgrid.com/pricing).

{% anchor h3 %}
Tax
{% endanchor h3 %}

![Tax summary section]({{root_url}}/img/invoice_tax.jpg)

If you are in [a jurisdiction where SendGrid is required to charge sales tax]({{root_url}}/User_Guide/Settings/taxes_and_tax_exempt.html), your **tax charges** will appear here.

{% anchor h2 %}
4. Usage Summary
{% endanchor %}

The Usage Summary section outlines usage-based charges on your account **during the previous month**.

{% anchor h3 %}
Plan Overage
{% endanchor h3 %}

![Overage charges section]({{root_url}}/img/invoice_overage.jpg)

This item is a calculation of **any emails sent beyond the monthly limit** of your package **during the previous month**.

In this example, the Pro 100K plan allows for 100,00 emails to be sent per month. We see that in the previous month, 120,000 emails were sent for a total of 20,000 emails over the limit. The overage rate for the Pro 100K plan is $0.00085 per extra email, which works out to a $17.00 overage charge (20,000 x .00085 = 17).

{% anchor h3 %}
Contact List Usage
{% endanchor h3 %}

![Highest number of stored Marketing Campaigns Contacts in the previous month.]({{root_url}}/img/invoice_contact_storage.jpg)

This item refers to highest number of **stored Marketing Campaigns Contacts in the previous month**. For more detailed breakdown on how Contact Storage billing works in Marketing Campaigns, [click here]({{root_url}}/Classroom/Basics/Billing/how_does_billing_work_for_marketing_campaigns.html).

In this example, the number under the "Used" column refers to the number of "blocks" of 10,000 contacts that were stored in the previous month. We see that the highest number of blocks stored in that month was 6, or 60,000 contacts.

The charge for contact storage is **$10.00/mo for every 10,000 contacts (1 block)**, so this example works out to a $60.00 usage charge for contacts stored in the previous month.

{% anchor h3 %}
Newsletter Usage
{% endanchor h3 %}

![Empty Newsletter usage.]({{root_url}}/img/invoice_NL_usage.jpg)

This item refers to usage of our **[Legacy Newsletter product]({{root_url}}/User_Guide/Legacy_Newsletter/index.html)**. We no longer offer this product, so most invoices will either not include this line item or will show a balance of $0.00, as in this example.

{% anchor h2 %}
5. Transaction and Payment Summary
{% endanchor %}

![Transaction and payment summary]({{root_url}}/img/invoice_payment_summary.jpg)

The Transaction Summary shows the total charges for the month, and the Payment Summary shows the payment type and last 4 digits of the card that was charged. For more information about updating your payment method, [click here](https://sendgrid.com/docs/Classroom/Basics/Billing/update_your_credit_card_and_resubmit_payments.html).

**These line items always reflect the plan you currently have, not necessarily "Pro 100K", which is shown for the purposes of demonstration**.

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [SendGrid Pricing]({{site.site_url}}/pricing/)
- [Billing]({{root_url}}/User_Guide/Settings/billing.html)
