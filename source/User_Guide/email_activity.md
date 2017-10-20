---
layout: page
weight: 0
title: Email Activity
seo:
  title: SendGrid Email Activity
  description: Email activity allows you to see and search the email events on your account.
  keywords: email activity, account events, email events
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/130900679" width="500" height="312" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

The Email Activity page allows you to view a snapshot of the email related activity that has been sent on your account. This does not include the information sent on a subuser account. These logs display all of your email events and can be viewed by the most recent activity or searched by email address.

{% info %}
Email activity only shows the most recent 500 events. To access data in real time, we recommend that you consider implementing our Event Webhook.
{% endinfo %}

* [Email-Events](#-Email-Events)
* [Filtering The Activity Feed](#-Filtering-The-Activity-Feed)
* [Searching Within Your Email Activity](#-Searching-Within-Your-Email-Activity)
* [Subuser Email Activity](#-Subuser-Email-Activity)

{% anchor h2 %}
Email Events
{% endanchor h2 %}

You will be able to see data about the following types of email events in the Email Activity Feed:

**[Processed]({{root_url}}/Glossary/request.html)** - Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.

**[Clicks]({{root_url}}/Glossary/clicks.html)** - Whenever a recipient clicks one of the Click Tracked links in your email.

**[Delivered]({{root_url}}/Glossary/deliveries.html)** - An email that was delivered to a recipient.

**[Opens]({{root_url}}/Glossary/opens.html)** - Whenever an email is opened by a recipient.

**Unsubscribes** - Whenever a recipient unsubscribes from your emails.

**Group Unsubscribes** - When a recipient unsubscribes from a suppression group.

**Group Resubscribes** - When a recipient resubscribes themselves to a suppression group.

**Deferred** - The recipient mail server asked SendGrid to stop sending emails so fast.

**[Drops]({{root_url}}/Glossary/drops.html)** - SendGrid will drop an email when the contact on that email is in one of your suppression groups, the recipient
email previously bounced, or that recipient has marked your email as spam. For more information, see [My Emails Are Being Dropped]({{site.support_url}}/hc/en-us/articles/200181728-My-emails-are-being-dropped-).

**[Bounces]({{root_url}}/Glossary/bounces.html)** - When an email is attempted to be delivered, but the recipient mail server rejects it.

**[Blocks]({{root_url}}/Glossary/blocks.html)** - When your IP address has been blacklisted or blocked by an ISP or messaging organization. Blocks are less severe than bounces and do not result in permanent suppressions: subsequent sends to blocked email addresses are not automatically suppressed.

**[Spam Reports]({{root_url}}/Glossary/spam_reports.html)** - Whenever a recipient marks your email as spam and their mail server tells us about it.

**Parse** - Whenever an incoming email is processed through the [Inbound Parse Webhook]({{root_url}}/Classroom/Basics/Inbound_Parse_Webhook/setting_up_the_inbound_parse_webhook.html).

{% anchor h2 %}
Filtering The Activity Feed
{% endanchor h2 %}

**By Event** - If you’re looking into a single type of event, simply click the checkbox next to “All Filters” and then select the individual event types that you are looking for. The activity feed will refresh with only the event types you selected.

{% anchor h2 %}
Searching Within Your Email Activity
{% endanchor h2 %}

If you need to search for a specific recipient, enter the recipient’s entire email address into the search field and press enter.

You can also search by the mailbox name, the part before the @ symbol, or by the domain name, the part after the @ symbol.


{% anchor h2 %}
Subuser Email Activity
{% endanchor h2 %}

To see a subuser’s email activity, you will need to either log in as that subuser or impersonate the subuser account.

When looking at a subuser’s email activity, you will not see the subuser parent’s email activity.
