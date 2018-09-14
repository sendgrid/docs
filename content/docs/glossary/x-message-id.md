---
seo:
  title: X-Message-Id
  description: The X-Message-Id is a header returned when making a mail send.
  keywords: X-Message-Id, Track
title: X-Message-ID
weight: 0
layout: page
navigation:
  show: false
---

The following image depicts a response after the mail is sent.

![]({{root_url}}/images/example_response.png "Example Response")

The X-Message-Id is a header returned when making a mail send which can be used to track events that the Event Webhook posts.

When using the Event Webhook, it's best practice to store your X-Message-Id. X-Message-Id data helps with deduplications in your webhook data. It can be used to find all corresponding Message-Ids.

SendGrid recommends that users store this data to correlate to their Event Webhook data, and this data is very useful for Support troubleshooting.

Related Articles
- [Message-ID]({{root_url}}/glossary/message-id)
