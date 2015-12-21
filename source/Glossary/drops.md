---
seo:
  title: Drops
title: Drops
weight: 0
layout: page
navigation:
  show: false
---

A drop occurs when our systems identify that a message is sent to an email address that is already listed on one of the suppression lists: Bounces, Unsubscribes, Spam reports and Invalid Emails. If an email is already on one of the lists mentioned above, our systems automatically drop the email in order to protect your Sender Reputation.

{% anchor h2 %}
How to identify Drops
{% endanchor %}

On the [Global Stats Dashboard]({{root_url}}/User_Guide/Statistics/global.html), the Drops can also be identified as Repeated Bounces, Repeated Spam Reports, Repeated Unsubscribes and Invalid Emails:

You will also find drops in your [Email Activity]({{site.app_url}}/email_activity). Clicking on the event, will show more details about it, including the reason for which the email was dropped.

{% info %}
If the email address is on the Unsubscribe list the reason will say "Unsubscribed Address"; if on the Spam report list, it will say "Spam Reporting Address" and if on the Invalid Emails list, it will say "Invalid".*
{% endinfo %}

{% anchor h2 %}
Some other reasons for which SendGrid may drop emails are:
{% endanchor %}

1. Email triggers SendGrid's spam filters. You can identify these drops only through the data received through the [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) or in Email Activity. In both cases, the reason displayed will say "Spam Content".

2. The SMTPAPI header is built incorrectly - this will cause the emails to be dropped with the reason "Invalid SMTPAPI header". For more details about how to build the SMTPAPI header, please view our documentation on [SMTP API]({{root_url}}/API_Reference/SMTP_API/index.html).

3. Duplicate message - emails are dropped with this reason only when they are sent through the Marketing Email App or through the Marketing API. If a recipient's address is showing on multiple lists and you assign those lists to one campaign, our systems automatically identify that the address is on multiple lists and drops the duplicate messages. This prevents having the same message sent to the same recipient multiple times.

{% anchor h2 %}
How to remove Drops
{% endanchor %}

If you would like us to attempt to deliver messages to a specific address again, please delete that address from the suppression list. You can visit your suppression lists and removing an address from the bounces list. Then you will be able to send future messages without us intervening on your behalf; you're essentially telling us that this address should be fine, but something went wrong and you'd like to try again.

{% info %}
NOTE: We cannot re-deliver messages that have been Dropped or appear on suppression lists, but we will attempt future messages once the address has been removed from the list.
{% endinfo %}

*Since SendGrid’s got my back and my reputation is not affected by these Drops, why should I care about removing them?*

Your lists will be cleaner and even if we do drop the messages intended to addresses that are already on one of the suppression lists, we do accept and process these requests before we drop them. Since this is the case, you are still charged for these emails.

{% anchor h3 %}
Clean your lists
{% endanchor %}

You can easily clean your lists from all the bad email addresses in 2 simple ways:

1. Using our tool called [List Assist]({{root_url}}/Utilities/list_assist.html). It is super easy to use and removes the unwanted email addresses in just a few seconds. Here is a short [video tutorial]({{root_url}}/VidGrid/Tools/listassist.html) on how to use the tool.
2. Using the [Web API]({{root_url}}/API_Reference/Web_API/index.html) to export any of the suppression lists. Once you export that data, you can use it to clean your distribution lists.
