---
seo:
  title: Event Webhook
  description: Event Webhooks provides data about the email you send when the user takes an action.
  keywords: event webhook, webhooks
title: Event Webhook
weight: 0
layout: page
navigation:
  show: false
---

A webhook is an HTTP callback that allows a web application to POST a message to a URL when certain events take place. Often called “Reverse APIs,” Webhooks can be used to receive data in real time, pass it on to another application, or process the data faster than traditional APIs.

Some of the traditional APIs that SendGrid provides include:

* [SMTP API]({{root_url}}/for-developers/sending-email/building-an-smtp-email/) – Provides custom handling instructions for email headers within messages.
* [Web API](https://sendgrid.com/docs/Web_API/index.html) – Allows users to retrieve account information like bounces, unsubscribes, or spam reports.
* [Marketing Email API](https://sendgrid.com/email-marketing) – Offers developers the ability to manage the lists, identities, and delivery events for marketing emails.
* [Template Engine API](https://sendgrid.com/transactional-email) – Provides a way for marketers and developers to create, iterate, and deploy transactional email templates.

While webhooks are traditionally more complex to set up, the speed and efficiency of webhooks has increased their popularity in the developer community. There are three main types of webhooks:

* <strong>Push Webhooks</strong> – Enables users to receive data in real time.
* <strong>Pipe Webhook</strong> – Not only enable the users to receive data in real time, but they also allow users to code it and take certain actions based on event triggers.
* <strong>Plugin Webhooks</strong> - Enhance the capabilities of the platforms on both the sending and receiving level, allowing the sharing of data in a two-way relationship.

[SendGrid’s Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/) combines the push, pipe, and plugin capabilities listed above. The Event Webhook notifies a URL via HTTP POST about events that take place with your email in the SendGrid platform. The Event Webhook then captures email-specific data related to unsubscribes, spam reports, bounced emails, and response data, and reports them in the manner in which you specify.

With the Event Webhook, users can create advanced email analytics, customize the delivery of your email analytics to their platform, set up triggered email campaigns synced to third party platforms, and insert dynamic data. In all, there are nine email events that can be captured.

Using the SendGrid Event Webhook allows users to follow the email best practices that will increase their [email deliverability]({{root_url}}//glossary/email-deliverability/). For instance, by immediately responding to bounces, unsubscribes, and spam reports, users can ensure that they’re always sending to a clean list. By using the open and click tracking, they can remove unresponsive users and ensure that they’re always sending to a highly engaged list.

To help users take full advantage of the Event Webhook, SendGrid has also created the EventKit. The SendGrid EventKit allows users to create a user-friendly app where they download a php script and then upload it to their server in order to take advantage of the Event Webhook. You can learn more by visiting the [EventKit blog post](https://sendgrid.com/blog/open-source-eventkit-for-event-webhook/).

In addition to the Event Webhook, SendGrid has also created the Parse Webhook to improve engagement with recipients. The [SendGrid Parse Webhook]({{root_url}}/for-developers/parsing-email/setting-up-the-inbound-parse-webhook/) allows users to parse the contents and attachments of messages. Using Parse Webhook, SendGrid users can post blog articles or receive uploads directly from email replies.

SendGrid provides a full service solution for solving your total [email delivery needs](https://sendgrid.com). We’re the world’s largest email infrastructure as a service provider working hand in hand with developers to ensure that we’re providing tools and services that solve real world problems. The webhook will then POST the parsed portions of the email to a URL specified by the user.
