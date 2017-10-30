---
title: How does billing work for Marketing Campaigns?
weight: 0
layout: page
navigation:
  show: true
seo:
  title: How does billing work for Marketing Campaigns?
  description: How does billing work for Marketing Campaigns?
  keywords: marketing, campaigns, bill, charge, contacts, usage, overage, subuser
---

{% anchor h2 %}
Overview
{% endanchor %}

Each email sent via Marketing Campaigns (UI or API) will count towards your monthly plan volume, just like the messages you already send.

In addition to your monthly plan price, you will receive a separate charge based on the maximum size of your Contacts list, which is calculated based on this simple formula:

**$10.00 per 10,000 stored contacts per month.**

This amount is based on the highest number stored in the preceding month. Think of it as a high-water mark, so even if you reduce your contacts before your next bill rolls around (the 1st of each calendar month), you'll still be charged for whatever upper limit was reached.

For all customers, the first 2,000 contacts are stored for free. Free customers are also welcome to try out Marketing Campaigns, but will be able to upload no more than 2,000 Contacts. 

Example:

If you have a Pro 100,000 plan ($79.95/month) who has uploaded 22,000 contacts to Marketing Campaigns ($20/month), will see a total bill for $99.95/month.

High volume pricing is also available, contact our Sales department at [<sales@sendgrid.com>](mailto:sales@sendgrid.com) for more details.

![]({{root_url}}/images/pricing_grid.png)

{% anchor h2 %}
How will I be billed?
{% endanchor %}

You will see the "Contact List Usage" charge added to your monthly bill reflecting your maximum Contacts list size for the preceding month. Additionally, each email sent via the new features will count as a credit toward your monthly plan volume.

Be sure to visit our [pricing page](https://sendgrid.com/pricing) for more information on how our pricing works.

{% anchor h2 %}
Marketing Campaigns Billing for Subusers
{% endanchor %}

Each subuser may store up to 2,000 contacts for free before they are charged the same rate of $10.00 per 10,000 contacts each month. Any additional charges due for storing contacts on a subuser account will appear in the parent account's monthly invoice.

The emails subusers send through Marketing Campaigns are subtracted from the parent account's monthly email credit allowance.

**Note:** Your parent account will be billed for each unique contact, regardless of how many lists or segments that contact appears on. However, if there are one or more subusers under a parent account, the parent account will be billed for all unique contacts stored on each account, even if the same contact is stored on multiple accounts.

For example, if a SendGrid parent account uploads a contact with the address `johndoeexampexample@example.com` and a single subuser of that parent account also uploads a contact for `johndoeexampexample@example.com`, then the parent account will be billed twice for that contact.
