---
seo:
  title: Help, My emails aren't being delivered!
  description: Learn some common issues that lead to non-delivery and some solutions to help get your message in the inbox.
  keywords: not, delivered, deferred, drop, inbox, email, out, report, client, bounce, invalid, deliverability, problem, delivery, 
title: Help, My emails aren't being delivered!
weight: 0
layout: page
navigation:
  show: true
---

If you find that your email recipients are complaining that they are not receiving your emails, here are some common situations that may be used to help you diagnose the problem:

{% anchor h2 %}
You are having trouble sending email to one or more email addresses, or your Requests statistic is much higher than your Delivered
{% endanchor %}

If you repeatedly have difficulty sending email to specific email addresses, it often indicates that the email address in question is on one of your account's Email Lists. Currently SendGrid maintains the following email lists on a per-account basis:

- Global Unsubscribes
- Group Unsubscribes
- Bounces
- Spam Reports
- Blocks
- Invalid Emails

Each of these lists is accessible from the **SUPPRESSIONS**  section in the left-hand navigation bar.

![]({{root_url}}/images/supressions.png)

{% anchor h2 %}
When an email address lands in any of these lists, future emails for this email address are automatically _dropped_ by SendGrid.
{% endanchor %}

This is done to protect your sending reputation as many ISPs frown on repeated bounces, and deliveries to addresses that have unsubscribed or have issued spam reports are certain to cause problems.

If you do find that a valid email has landed in any of these Email Lists, you have the option to remove that email address from the list by hovering over the row you want to delete and choosing the **delete** action on the right hand column of the table. The following image displays the SendGrid unsubscribe list with some demonstration data:

![]({{root_url}}/images/Cursor_and_SendGrid.png)

Please note: Addresses appearing on the Blocks list are NOT dropped, they are just recorded here for reference.
