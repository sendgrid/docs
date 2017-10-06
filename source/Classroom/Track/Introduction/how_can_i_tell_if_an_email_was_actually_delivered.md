---
seo:
  title: How can I tell if an email was actually delivered?
  description: How can I tell if an email was actually delivered?
  keywords: webhook, eventkit, deliverability, delivered
title: How can I tell if an email was actually delivered?
weight: 0
layout: page
zendesk_id: 203928168
navigation:
  show: true
---

There are a couple of ways to tell if an email was actually delivered. You can search in your [Email Activity](https://sendgrid.com/logs/index) which will display delivered mail for the last 7-10 days. If an email is successfully delivered then you will see a delivered event which when expanded will show a reason code of 250 OK. This means the receiving sever has accepted the message. 

Email Activity will also show you bounced, deferred and processed messages (click on search options and make sure these are checked). 

The 2nd option is to setup a [webhook](https://sendgrid.com/docs/API_Reference/Webhooks/event.html) or the [EventKit](https://sendgrid.com/docs/VidGrid/Event_Notification/eventkit.html). A webhook will show the raw event data on a specified URL. The EventKit has a beautiful and user-friendly UI which will also you search and export results. 

![]({{root_url}}/images/Screen_Shot_2015-02-09_at_11.22.47_AM.png)

