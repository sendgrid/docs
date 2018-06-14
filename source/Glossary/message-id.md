---
layout: page
weight: 0
title: Message-ID
navigation:
  show: false
seo:
  title: Message-ID
  override: true
  description: Message-ID is a globally unique identifier for email messages. 
---
Message-ID, is a unique identifier assigned to individual email messages by the email server responsible for sending the message. SendGrid will create a Message-ID for each individual message you send through our systems. This Message-ID information can be viewed in certain events in the SendGrid Activity Feed as well as Event Webhook POST data. The Activity Feed references the Message-ID as "msgid" and the Event Webhook references it with "sg_message_id".

Example SendGrid Message-ID: **Message-ID: XBg2anf2TqCy6WXKQFhieQ.filter0905p1mdw1-4434-59E0C6FF-3.0**
