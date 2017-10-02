---
seo:
  title: Can I download a list of Click, Open, or other email events?
  description: Not directly from the website, but learn more here about logging your email data with our Event Webhook...
  keywords: event, webhook, statistics, click, download, export, pull, down, open, get, post, URL, stats, events, kit, eventkit
title: Can I download a list of Click, Open, or other email events?
weight: 0
layout: page
zendesk_id: 200181488
navigation:
  show: true
---

Currently there is not a way to download a log or a .csv of your Click, Open, or any other email event data directly from the SendGrid UI. We recommend implementing our [Event Notification Webhook](https://app.sendgrid.com/settings/mail_settings) if you find yourself needing to log and access your data more granularly. 

You can also use our [open source EventKit app]({{root_url}}/Utilities/event_kit.html) to set up a basic implementation of our Event Notification Webhook, and will grant you the ability to download a .csv of email data from the EventKit interface for any events that are collected _after the setup is complete_. 

