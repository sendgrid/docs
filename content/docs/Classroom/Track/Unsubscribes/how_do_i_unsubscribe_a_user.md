---
seo:
  title: How do I unsubscribe a user?
  description: How do I unsubscribe a user?
  keywords: suppress, unsubscribe, deliverability, unsubscribed
title: How do I unsubscribe a user?
weight: 0
layout: page
zendesk_id: 204629527
navigation:
  show: true
---

You can manually add one of your recipients to your Global Unsubscribes list [here](https://app.sendgrid.com/suppressions/global_unsubscribes).

Simply click the gear icon, select **Manually Add Recipients**, and enter the email address you would like to add. Finally, click **add**. If you would like to add more than one recipient, separate the addresses with commas or a new line.

![]({{root_url}}/images/add_global_unsubscribe_1.png)

{% warning %}
Any email addresses you add to your global unsubscribes list will not receive **any** of your email. Even transactional emails such as password reset emails and account confirmations. All requests to deliver to addresses on the global unsubscribes list will be automatically dropped.
{% endwarning %}
