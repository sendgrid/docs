---
seo:
  title: X-Message-ID
  description: The X-Message-ID is a header returned when making a mail send.
  keywords: X-Message-ID, Track
title: X-Message-ID
weight: 0
layout: page
navigation:
  show: false
---

The following image depicts a response after the mail is sent.

![]({{root_url}}/images/example_response.png "Example Response")

The X-Message-ID is a header returned when making a mail send which can be used to track events that the Event Webhook posts.

When using the Event Webhook, it's best practice to store your X-Message-ID. X-Message-ID data helps with deduplications in your webhook data. It can be used to find all corresponding Message-IDs.

SendGrid recommends that users store this data to correlate to their Event Webhook data, and this data is very useful for Support troubleshooting.

Related Articles
- [Message-ID]({{root_url}}/Glossary/message_id.md)
