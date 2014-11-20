---
layout: page
weight: 0
title: Email Activity
navigation:
  show: true
---

The [Email Activity](https://sendgrid.com/logs/index) page allows you to view a recent snapshot of the email that has been sent on your account. These logs display all events (delivered, bounce, open, etc) and can be viewed by the most recent activity, or searched by email address.

{% warning %}
Email activity only shows a limited amount of recent data. In order to access data in real time, we reccomend that you consider implementing our [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html "Event API"). 
{% endwarning %}

{% info %}
Email activity is a read-only feature, and there is not currently a way to export or otherwise download what you see on this page. If you wish to begin storing your email data on your side, you will need to set up our [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html "Event API").
{% endinfo %}

When viewing Email Activity logs you can expand specific events to see more details for that event. Remember you can filter by specific email addresses by using the search field provided.

![]({{root_url}}/images/email_activity_1.png)

You may also filter your search to only populate specific event types such as Requests, Bounces, Deferrals, Drops etc. You can also alter the number of results returned for each result. In order to apply constraints to your search parameters, click on the Search Options link, as shown in the image below.

![]({{root_url}}/images/email_activity_2.png)
