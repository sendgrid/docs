---
layout: page
weight: 0
title: Recipient Subscription Preferences
seo:
  title: Recipient Subscription Preferences
  description: When your users unsubscribe they will see a very specific page where they can manage their subscriptions with your emails.
  keywords: unsubscribe page, suppression page, recipient unsubscribe
navigation:
  show: true
---

Emails that are sent with an ASM group specified with will have two links at the bottom of the email: an “Email Preferences” link, and an “Unsubscribe” link.

If you do not specify a unsubscribe group when sending an email, the unsubscribe link will act as a global unsubscribe. This means that the recipient will no longer get any emails at all, including potentially important emails like password resets. To avoid this, create unsubscribe groups.

{% anchor h2 %}
The Unsubscribe Link
{% endanchor %}

When a recipient clicks the Unsubscribe link, they will be asked to confirm their choice and then will be added to the Global Unsubscribe list.

{% anchor h3 %}
Custom Unsubscribe Links
{% endanchor %}

SendGrid also provides [Unsubscribe Groups tags]({{root_url}}/User_Guide/Templates/create_edit.html#-Unsubscribe-Substitution-Tags) that have been pre-defined for you. You can use these tags within the content of your email to place the unsubscribe links wherever you would prefer.

{% anchor h2 %}
The Email Preferences Link
{% endanchor %}

Via the Email Preferences link, recipients will see the Email Preferences page. From here, recipients will be able to see all of your ASM groups and their descriptions. They will then be able to choose whether or not they want to receive those types of emails.
