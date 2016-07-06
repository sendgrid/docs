---
layout: page
weight: 0
title: Throttling
seo:
  title: Email Throttling
navigation:
  show: false
---

So, you tried to send a bunch of email, and when you checked your [Event webhook]({{root_url}}/API_Reference/Webhooks/event.html) or your [Email Activity]({{root_url}}/User_Guide/Delivery_Metrics/email_activity.html) page, you see a number of messages are marked as "Deferred" instead of "Delivered". Or maybe you're looking at your [Email Reports]({{root_url}}/User_Guide/Delivery_Metrics/email_reports.html), and noticing a lot of addresses in your [Blocks]({{site.app_url}}/suppressions/blocks), but not many in your Hard Bounces. What? Why aren't your recipients currently in awe at the glory of your amazing message?

First of all, rest assured that our system is designed with throttling (also known as "deferral" these terms mean the same thing in the email world, and may be used interchangeably) in mind. We continue to attempt to send messages for up to 72 hours until the message is delivered. Normally, it takes between a few minutes to a few hours until the message is delivered.

But what is throttling? Well, it's when a receiving server refuses a message, but with a specific explanation that tells our server it's only a temporary refusal. They usually say things like "user is receiving mail at too great a rate right now, please try again later", or "user's mailbox is over quota." One important thing to note is that these errors are almost always a **400** class of error.

{% anchor h2 %}
What can cause a deferral?
{% endanchor %}

-   The receiving server doesn't recognize your IP, and is afraid you're sending spam. *This is why [warming up]({{root_url}}/Classroom/Deliver/warming_up_ips.html) is so important, so they know who you are and that they can trust mail from your IPs.*

-   The receiving server doesn't have any open ports to receive email.

-   The recipient's mailbox is full.

-   Some recipients have marked your mail as spam, but not enough for the server to block you. Instead, they will refuse to receive more until they see what the rest of your current recipients do.

What happens if it's continuously deferred for 72 hours? Well, that generally means it's an issue like the account being inactive, having a full mailbox, or some other legitimate problem with the recipient. When we are unable to deliver a message after this time period, we convert these deferrals to "Hard Bounces". When an address is hard bounced either due to this, or because we got a different class of error (such as "this user does not exist"), we add this address to the Block list.

What this means is that even if you send a message through us for that user, we will not even try to deliver to that address, because we know it's no longer good. Continuing to try to send to a known bad address will harm your reputation with the receiver, so we prevent that. However, if you continue to try to send, and we intercept it, your reputation with us goes down, as noted on your [Dashboard]({{site.app_url}}).

{% anchor h2 %}
Recap
{% endanchor %}

Deferrals, aka Throttling, aka Soft Bounces are a normal part of email delivery, one SendGrid knows how to handle. There are a number of mundane reasons that can cause a defer. If a message stays throttled, it will be added to the Block list.
