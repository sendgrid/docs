---
layout: page
weight: 0
title: SendGrid Message ID
navigation:
  show: false
seo:
  title: Message ID
  override: true
  description: The SendGrid Message ID is a unique identifier generated and assigned by SendGrid for event identification purposes. 
---
The SendGrid Message ID, is a unique identifier assigned to individual email messages by the email server responsible for sending the message. SendGrid will create a Message ID for each individual message you send through our systems. This Message ID information is searcheable in the SendGrid Activity Feed as well as Event Webhook POST data. The Activity Feed references the Message ID as "Message ID" and the Event Webhook references it with "sg_message_id".

**Please Note**: The SendGrid assigned Message ID is different than an X-Message-ID given in response headers when sending via API. While this ID is contained in the SendGrid assigned Message ID, the X-Message-ID is specific to the API request prior to messages being broken up individually in SendGrid email servers and then assigned the SendGrid Message ID. The SendGrid Message ID accounts not only for the original request but also server data and the specific identification between a unique message and recipient.

Example SendGrid Message ID: **XBg2anf2TqCy6WXKQFhieQ.filter0905p1mdw1-4434-59E0C6FF-3.0**
