---
layout: page
weight: 0
title: IP Warmup
navigation:
  show: false
seo:
  title: IP Warmup
  override: true
  description: Initially splitting up the email send requests from a new dedicated IP, so it doesn't get blocked.
  keywords: IP, warm, up, warmup, ramp, ramping
---

IP warming is the gradual process of establishing a reputation as a legitimate email sender in the eyes of ISPs (Internet Service Providers). When an ISP observes email suddenly coming from a new or “cold” (recently dormant) IP address, they will take notice and immediately begin evaluating the traffic coming from that IP.

[IP warming]({{root_url}}/User_Guide/Settings/ip_warmup.html) is the gradual process of establishing a reputation as a legitimate email sender in the eyes of ISPs (Internet Service Providers). When an ISP observes email suddenly coming from a new or “cold” (recently dormant) IP address, they will take notice and immediately begin evaluating the traffic coming from that IP.

ISP spam filters look at volume as a significant factor when determining whether or not you are sending spam. Because of this, we recommend that you begin sending a low to moderate volume ( up to 1 million emails/month), eventually working your way up to larger volumes (over 1 million emails/month). This gives the receiving email providers a chance to closely observe your sending habits and the way your customers treat the emails they receive from you.

{% info %}
You can now warmup your IP using our [IP Warmup API]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup.html).
{% endinfo %}

When you place your IP in warmup mode, we divide your email requests between the dedicated IP you wish to warm up and any other warm, dedicated IPs currently assigned. Each day we will increase the amount sent directly from your warming dedicated IP. You can see the suggested [IP Warmup Schedule]({{root_url}}/assets/IPWarmupSchedule.pdf).

{% warning %}
We recommend the IP warmup tool only for users that have other warm, dedicated IPs which can accept any overflow email traffic as we gradually increase the volume sent through the warming IP.

If you do not have other dedicated IPs and are building your reputation from scratch, recommend that you follow [this]({{root_url}}/assets/IPWarmupSchedule.pdf) warmup schedule.
{% endwarning %}
