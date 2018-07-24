---
seo:
  title: Throttling
  description: Learn more about deferrals and throttling
  keywords: deferred, deferral, throttling, bounce, block
title: Throttling
weight: 0
layout: page
navigation:
  show: false
---

So, you tried to send a bunch of emails, and when you checked your [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) or your [Email Activity]({{root_url}}/User_Guide/Delivery_Metrics/email_activity.html) page, you see a number of messages are marked as "Deferred" instead of "Delivered". Or maybe you're looking at your [Email Reports]({{root_url}}/User_Guide/Delivery_Metrics/email_reports.html), and noticing a lot of addresses in your [Blocks]({{site.app_url}}/suppressions/blocks), but not many in your Bounces. What? Why aren't your recipients currently in awe at the glory of your amazing message?

SendGrid continues to attempt to send messages for up to 72 hours or until successful delivery. Normally, it takes between a few minutes and a few hours for a deferred messages successful delivery - it depends on the receiving mail server.

Throttling is when a receiving server refuses a message, but with a specific explanation that tells our server that it's only a temporary refusal. The error is usually something like "user is receiving mail at too great a rate right now, please try again later", or "user's mailbox is over quota." These errors are most often 400 errors - indicating a temporary failure. They are not often 500 errors - indicating a permanent failure. 

## 	What causes a deferral?
 	
-   The receiving server doesn't recognize your IP, and may think you're sending spam. This is why [warming up your IP]({{root_url}}/Classroom/Deliver/warming_up_ips.html) is so important. IP Warmup allows recipient mail servers to become familiar with your sending habits, and later anticipate your messages. 

-   The receiving server doesn't have any open ports to receive email.

-   The recipient's mailbox is full.

-   Some recipients have marked your mail as spam, but not enough for the server to block you. Instead, they will refuse to receive more until they can learn more about how their users interact with your messages.

If a message is continuously deferred for 72 hours, it may mean that there is another issue such as the account being inactive, a full mailbox, or some other legitimate problem with the recipient. When we are unable to deliver a message after this time period, we convert these deferrals to "Blocks". Blocks are stored for reference and do not behave like a suppression list when sending to addresses that are on the list.
