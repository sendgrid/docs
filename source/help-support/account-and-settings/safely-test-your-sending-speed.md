---
st:
  published_at: 2016-07-20
  type: Classroom
seo:
  title: Safely Test Your Sending Speed
  description: Safely Test Your Sending Speed
  keywords: throughput, through, put, speed, requests, sending
title: Safely Test Your Sending Speed
weight: 0
layout: page
zendesk_id: 201995663
navigation:
  show: true
---

Have you ever wanted to see how quickly you can send multiple messages through SendGrid, but you were concerned about how it would affect your reputation? Worry no more!

We have configured a special domain for any users who are interested in testing out SendGrid's relay speeds at higher volumes without it negatively impacting your reputation. You can send your test messages to any address **@sink.sendgrid.net** while still using our standard integration practices. All messages to this domain are accepted for delivery and then immediately deleted. Sending to this domain will not contribute to the [IP warm up process](http://sendgrid.com/docs/User_Guide/warming_up.html) if you have an account with a dedicated IP address.

{% info %} Please be aware that all of the messages you send to this domain will still consume billable email credits for your account! {% endinfo %}


If you are looking to test your API integration, you can enable the sandbox_mode in the [mail_settings parameters of our Mail Send API](https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/sandbox_mode.html). **This will allow you to validate each parameter you include, and the structure of your JSON payload, all without actually sending a message.**

{% info %}
Please note, `sandbox_mode` is not available for other endpoints, only `mail_send`.
{% endinfo %}

