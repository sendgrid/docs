---
seo:
  title: How to warm up your IP address
  description: How to warm up your IP address
  keywords: up, deliverability, IP, warm_up, throttling, throttle, warming, warm
title: How to warm up your IP address
weight: 0
layout: page
zendesk_id: 204818597
navigation:
  show: true
---

[IP warmup]({{root_url}}/Glossary/ip_warmup.html) is great way to gradually build your IP reputation, and is a critical step for new SendGrid users. Warming up basically means limiting the amount of mail flowing through your dedicated IP in the early stages of use so as to not overwhelm email receivers who might not be used to your sending yet.

A properly warmed up IP can drastically reduce potential deliverability issues going forward. We _highly_ recommend this for new users, or whenever you add a new IP to your account.


There are 3 main ways to do this.

**1.** Contact Support using the options below, and ask to have your IP placed in what we call "Warmup". When we do this we will send a minimal amount of mail through your IP while the rest will go out on a shared IP pool. Warmup is a great method if your email timeframe allows you to warm up slowly.

**2.** Place your IP in Warmup yourself by using the [IP Warmup API](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup.html).

**3.** Start off sending 1000 messages your 1st day and double it every day afterwards.


IP Warming is a gradual process that happens over time, with the goal of establishing a reputation as a legitimate email sender in the eyes of ISPs (Internet Service Providers).

When an ISP observes email suddenly coming from a new or “cold” (ie, recently dormant) IP address, they will take notice of it and immediately begin evaluating the traffic coming from that IP.

Since volume is perhaps the most telling factor in the eyes of ISP SPAM filters, it is best to begin sending low to moderate volume (e.g., up to 1 million emails/month), eventually working your way up to larger volumes (e.g., over 1 million emails/month). This gives the receiving email providers a chance to closely observe your sending habits and the way your customers treat the emails they receive from you.
