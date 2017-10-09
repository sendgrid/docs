---
seo:
  title: ISP-Suggested Max Connection Limit
  description: Deferral event due to reaching a max connection limit.
  keywords: throttled, event, connection, limit, delivered, no, delay, throttle, processed, IPS, available, per-domain, connetion, IPs were throttled by recipient server, IPs reached ISP-suggested hourly limits, IPs reached ISP-suggested max connection limits http://send.gd/1uKnEBh, suggested, hourly, max, limits
title: ISP-Suggested Max Connection Limit
weight: 0
layout: page
navigation:
  show: true
---

In your logs, you may see the following error message accompanying a deferral event:

{% codeblock %}
Email was deferred due to the following reason(s): ["IPs reached ISP-suggested max connection limits: http://send.gd/1uKnEBh"]
{% endcodeblock %}

{% anchor h3 %}
What's that about?
{% endanchor %}

I'm glad you asked. We've recently updated the infrastructure that handles the actual sending of mail off to it's intended recipients, specifically updated in regards to sending rate.

{% anchor h3 %}
What's wrong with my IPs?
{% endanchor %}

Nothing! This is simply due to the fact that most of the time we are sending mail much faster than most ISPs can accept it. Rather than turning the fire hose on full-blast, we create one of these deferral events to control the rate of delivery by ISP to help prevent throttling and spam folder delivery. Sending too much mail too fast is a great way to get on an ISP's naughty list. 

We spend a lot of time tuning the rate of delivery on an ISP by ISP basis, and these deferral events are simply proof that this system is working for you to keep ISPs happy with your throughput, regardless of your sending habits.

{% anchor h3 %}
What do I need to do?
{% endanchor %}

You don't need to take any further action.

We'll continue to attempt delivery of Deferred messages for up to 72 hours, after which time we may [drop the message]({{root_url}}/Classroom/Deliver/Undeliverable_Email/my_emails_are_being_dropped.html) if the ISP still isn't able accept the messages. These deferrals may sometimes result in delays between an email's Processed event and the eventual Delivery event, but again, this is simply us optimizing the rate at which email sends are attempted.
