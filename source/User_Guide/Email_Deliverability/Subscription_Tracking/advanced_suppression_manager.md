---
seo:
  title: Unsubscribe Manager
title: Unsubscribe Manager
weight: 0
layout: page
navigation:
  show: true
---

{% info %}
Advanced Suppression Manager (ASM) is in Beta and is not currently available for use with our [Marketing Email]({{root_url}}/User_Guide/Marketing_Emails/index.html) tool.
{% endinfo %}

{% anchor h2 %}
ASM Defined
{% endanchor %}

When a user unsubscribes from a type of email being sent to them at the sender account level, SendGrid will suppress all attemps at sending this type of email to that user. This means that the contact information
is still in your contact database or you can send this contact's email via the API. Regardless, emails will not be sent to this contact's email.

For example, if you had an outdated email list and sent an email to that list, but a user on that list had previously unsubscribed from that type of email from you, they would not get the email because the email
would never leave SendGrid. It would be suppressed from being sent. A contact's emails will only be suppressed if they unsubscribe from that sender's emails, unsubscribing from one sender's list will have no effect
on unsubscribe lists owned by other senders.

{% anchor h2 %}
Overview
{% endanchor %}

ASM gives you the ability to create
groups that represent types of email that you regularly send to your
recipients, for example _receipts_, _social notifications_, and _account
alerts_. You can then give your recipients more control over the types of
emails they want to receive by letting them opt out of messages from a
certain group. This means getting the right messages to your recipient's inbox, resulting in a stronger relationship with your recipients and a better sending reputation.

{% info %}
All of your groups will be visible on the Email Preferences page, along
with the descriptions.
{% endinfo %}

And of course there's [Unsubscribe Manager API endpoints]({{root_url}}/API_Reference/Web_API_v3/Unsubscribe_Manager/index.html) for managing your groups and unsubscribes.


