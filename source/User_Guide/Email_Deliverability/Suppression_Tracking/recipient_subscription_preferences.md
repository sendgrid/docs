---
seo:
  title: Recipient Subscription Preferences
title: Recipient Subscription Preferences
weight: 0
layout: page
navigation:
  show: true
---

Emails that are sent with an ASM group specified with will have two links at
the bottom of the email: an "Email Preferences" link, and an "Unsubscribe" link.

If you do not specify a suppression group when sending an email, the unsubscribe link will act as a global suppression. This
means that the recipient will no longer get any emails at all, including potentially important emails like password resets. To
avoid this, [create suppression groups]({{root_url}}/User_Guide/Email_Deliverability/Subscription_Tracking/defining_asm_groups.html).

{% anchor h2 %}
The Unsubscribe Link
{% endanchor %}
When a recipient clicks the Unsubscribe link, they will be asked to confirm their choice and then will be added to the Global Suppression list.

{% anchor h2 %}
The Email Preferences Link
{% endanchor %}

Via the Email Preferences link, recipients will see the Email Preferences page. From here, recipients will be able to see all of your
ASM groups and their descriptions. They will then be able to choose whether or not they want to receive those types of emails.

The Email Preferences page looks like this:

![Email Preferences]({{root_url}}/images/asm_user_guide1.png)

