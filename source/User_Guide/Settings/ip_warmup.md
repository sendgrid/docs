---
seo:
  title: Warming Up an IP Address
  description: Learn how to warm up your new dedicated IP address and why it's important.
  keywords: warm, up, warmup, auto, automatic, manual API, v3, ip, pool, warmup, pools
title: Warming Up an IP Address
weight: 0
layout: page
navigation:
  show: true
---
<iframe src="https://player.vimeo.com/video/80755248" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

When you add a new dedicated IP address to your account, you need to warm it up. [Warming up your IP]({{root_url}}/Glossary/ip_warmup.html) allows you to gradually send more emails over your new IP to establish a good [sender reputation]({{root_url}}/Classroom/Basics/Misc/your_reputation_what_is_it.html).

- [What is warming up an IP?]()
- [Warmup types]()
   - [Manually Warm Up your IP]()
   - [Automated IP Warmup]()
   - [Automated IP Warmup API]()
   - [Why don't other ESPs require IP warmup?]()

{% anchor h2 %}
What is warming up an IP?
{% endanchor %}

IP warming is the practice of gradually increasing the volume of mail sent with a dedicated IP address according to a predetermined schedule. This gradual process helps to establish a reputation with ISPs (Internet Service Providers) as a legitimate email sender.

When an ISP observes email suddenly coming from a new or "cold" IP address, they will take notice and immediately begin evaluating the traffic coming from that IP. Since ISPs treat email volume as a key determining factor when detecting spam, it is best to begin sending a low to moderate volume, eventually working your way up to larger volumes. This gives the receiving email providers a chance to closely observe your sending habits and record how your recipients engage with your email.

A gradual warm-up does not always guarantee a perfect sending reputation. It is still important to follow sending [best practices](https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder/).

{% info %}
It is much easier to establish a positive reputation as a new sender, than it is to repair an existing reputation.
{% endinfo %}

{% anchor h2 %}
Warmup types
{% endanchor %}

There are three ways to warm up your IP. If you newly have a dedicated IP and you've never had one before, you need to warm up your IP manually. If you are adding new dedicated IPs to existing warm IPs, you can automatically warm up your IP with the UI or the API.

{% anchor h3 %}
Manually warm up your IP
{% endanchor %}

To manually warm up your IP, you need to gradually send more and more email over your IP address at the rate in our suggested [IP Warmup Schedule]({{root_url}}/assets/IPWarmupSchedule.pdf).

{% anchor h3 %}
Automated IP warmup
{% endanchor %}

*To set up automated IP warmup in the UI:*

1. Go to [Settings > IP Addresses](https://app.sendgrid.com/settings/ip_addresses).
1. Click the action menu for the IP you want to warm up. This brings up the **Edit Your Dedicated IP Address** screen.
1. Select **Use Automated IP warmup**.
1. Save the **Edit Your Dedicated IP Address** screen.

{% anchor h3 %}
Automated IP warmup API
{% endanchor %}

You can also put your IP address into warmup mode with our [Automated Warmup API]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup.html) - this automatically throttles traffic sent through your new IP according to our [warm up schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html).

{% warning %}
When automatically warming up an IP, SendGrid limits the amount of email sent through that IP per hour. Any email requests that exceed this hourly limit will overflow to any other existing warm IPs on your account. If you do not have any other warm IPs, should [warm up your IP manually](#-Manually-warm-up-your-IP).
{% endwarning %}


{% anchor h2 %}
Why don't other ESPs require IP warmup?
{% endanchor %}

Many other email service providers do not offer dedicated IP addresses to their customers - they place all of their customers on shared IP groups by default. Warming up is not required for a shared IP group - SendGrid handles this automatically.

Having a dedicated IP allows you to control your own reputation completely, and prevents your sending from being impacted by the reputations of other SendGrid users.