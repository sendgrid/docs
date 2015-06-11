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


The Email Activity page allows you to view a snapshot of the email related activity that has been sent on your account. This does not include the information sent on a subuser account. These logs display all of your email events and can be viewed by the most recent activity or searched by email address.

{% info %}
Email activity only shows a limited amount of recent data. In order to access data in real time, we recommend that you consider implementing our Event Webhook.
{% endinfo %}

{% anchor h2 %}
Email Events
{% endanchor %}

You will be able to see data about the following types of email events in the Email Activity Feed

**[Processed]({{root_url}}/Glossary/request.html)** - Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.

**[Clicks]({{root_url}}/Glossary/clicks.html)** - Whenever a recipient clicks one of the Click Tracked links in your email.

**[Delivered]({{root_url}}/Glossary/deliveries.html)** - An email that was delivered to a recipient

**[Opens]({{root_url}}/Glossary/opens.html)** - Whenever an email is opened by a recipient

**Unsubscribes** - Whenever a recipient unsubscribes from your emails

**Group Unsubscribes** - When a recipient unsubscribes from a suppression group

**Group Resubscribes** - When a recipient resubscribes themselves to a suppression group

**Deferred** - The recipient mail server asked SendGrid to stop sending emails so fast.

**Drops** - SendGrid will drop an email when the contact on that email is in one of your suppression groups, the recipient 
email previously bounced, or that recipient has marked your email as spam. For more information, see [My Emails Are Being Dropped]({{site.support_url}}/hc/en-us/articles/200181728-My-emails-are-being-dropped-).

**[Bounces]({{root_url}}/Glossary/bounces.html)** - When an email is attempted to be delivered, but the recipient mail server rejects it.

**[Spam Reports]({{root_url}}/Glossary/spam_reports.html)** - Whenever a recipient marks your email as spam and their mail server tells us about it.

**Parse** - Whenever an email comes in through the [Inbound Parse API]({{root_url}}/API_Reference/Webhooks/parse.html).

{% anchor h2 %}
Filtering The Activity Feed
{% endanchor %}

**By Event** - If you are looking into only a single type of event, simply click the checkbox next to “All Filters” and then select the individual event types that you are looking for. The activity feed will refresh with only the events of the types that you selected.

**By Date** - In order to change the date range for your event feed, click the calendar icon at the top right corner of the page. The left calendar is for your start date, the right calendar is for the end date. Your events will be shown including the start and end dates.

{% anchor h2 %}
Searching Within Your Email Activity
{% endanchor %}

If you need to search for a specific recipient, enter the recipients entire email address into the search field and press enter. 

You can also search by the mailbox name, the part before the @ symbol, or by the domain name, the part after the @ symbol.

{% anchor h2 %}
Download Your Activity Feed
{% endanchor %}

If you want to take your feed data with you, click the gear icon at the top of the page and select “Download as CSV”. This 
will provide you with some of your data, but if you are wanting to perform real time analytics on your events, we suggest the 
[Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html).

{% anchor h2 %}
Subuser Email Activity
{% endanchor %}

To see a subuser’s email activity, you will need to either log in as that subuser or impersonate the subuser account. 

When looking at a subuser’s email activity, you will not see the subuser parent’s email activity.
