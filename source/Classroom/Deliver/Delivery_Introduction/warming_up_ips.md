---
st:
  published_at: 2017-04-12
  type: Classroom
seo:
  title: Warming Up an IP Address
  description: Learn about the importance of warming up your IP addresses, and advice on how to do it...
  keywords: warm, up, warmup, auto, automatic, manual api, v3, ip, pool, warmup, pools
title: Warming Up an IP Address
weight: 0
layout: page
navigation:
  show: true
---


Whether you are new to the email game or are an accomplished vet, you have probably run across the idea of warming up an [IP address]({{root_url}}/Glossary/ip_address.html) to improve delivery performance. [Warming up your IP]({{root_url}}/Glossary/ip_warmup.html) allows you to gradually establish a good [sender reputation]({{root_url}}/Classroom/Basics/Misc/your_reputation_what_is_it.html), and is a critical step for new SendGrid users or users who are adding a new dedicated IP address to their account.


<iframe src="https://player.vimeo.com/video/80755248" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


{% anchor h2 %}
What does it mean to "warm up" an IP address?
{% endanchor %}

IP warming is the practice of gradually increasing the volume of mail sent via a dedicated IP address according to a predetermined schedule. This gradual process helps to establish a reputation with ISPs (Internet Service Providers) as a legitimate email sender.

When an ISP observes email suddenly coming from a new or "cold" IP address, they will take notice and immediately begin evaluating the traffic coming from that IP. Since ISPs treat email volume as a key determining factor when detecting spam, it is best to begin sending a low to moderate volume, eventually working your way up to larger volumes. This gives the receiving email providers a chance to closely observe your sending habits and record how your recipients engage with your email.

Please note that a gradual ramping warm up does not always guarantee a perfect sending reputation. It is still important to follow sending [best practices](https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder/). Remember to always:

- Send content that your users want, and have explicitly opted-in to receive
- Practice proper contact list hygiene by removing unengaged users
- Send email at a consistent and appropriate frequency

If you are sending email from a new IP address, ISPs have no means of determining your [sender reputation]({{root_url}}/Classroom/Basics/Misc/your_reputation_what_is_it.html). Since this reputation determines whether or not your emails are delivered to your recipients’ inboxes, it is vital to immediately begin establishing a good reputation.

{% info %}
Remember that it is much easier to establish a positive reputation as a new sender, than it is to repair an existing reputation.
{% endinfo %}

If you are sending a very low volume of email (less than 10,000 emails/month), ISPs will probably not pay much attention to your sending habits. However, if you are sending higher volumes, the IP warmup process plays a much more significant role in establishing your reputation. However, we recommend that all users warm up new IP addresses regardless of the amount of email they send.



{% anchor h2  %}
How do I warm up my IP address?
{% endanchor %}

There are three separate approaches to warming up a new IP address:

{% anchor h3 %}
Manually Warm Up your IP
{% endanchor %}

Gradually send more and more email over your IP address. Please refer to our suggested [IP Warmup Schedule]({{root_url}}/assets/IPWarmupSchedule.pdf) to determine the appropriate rate at which to manually increase the amount of traffic to send through your new IP.

{% warning %}
New users who are establishing a reputation with their default dedicated IP should manually warm up to attain the best possible reputation going forward.
{% endwarning %}

{% anchor h3 %}
Automated IP Warmup
{% endanchor %}

You can place your IP address into [Automated IP Warmup]({{root_url}}/Classroom/Basics/Misc/automated_ip_warmup.html) within the IP Addresses section under Settings, which will automatically throttle traffic sent through your new IP according to our [warm up schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html). This same step can also be performed using the API, or during the process of [purchasing a new dedicated IP address]({{root_url}}/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html).

{% anchor h3 %}
Automated IP Warmup API
{% endanchor %}

Place your IP address into warmup mode via our [Automated Warmup API]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup.html) which will automatically throttle traffic sent through your new IP according to our [warm up schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html). This allows you to add or remove IPs from warmup mode at your discretion.

{% warning %}
When automatically warming up an IP, SendGrid limits the amount of email sent through that IP per hour. Any email requests that exceed this hourly limit will overflow to any other existing warm IPs on your account. If you do not have any other warm IPs, you will be required to follow the [IP Warmup Guide]({{root_url}}/assets/IPWarmupSchedule.pdf)

For this reason, we only recommend that users with preexisting, warm IPs use the automatic warm up feature when adding a new dedicated IP address to their account.
{% endwarning %}


{% anchor h2 %}
Why don't other ESPs require IP warmup?
{% endanchor %}

Many other email service providers, especially those focused on marketing email tools, may not offer dedicated IP addresses to their customers. Many ESPs place all of their customers on shared IP groups by default. When sending on a shared IP group, warming up is not usually required.

While it may be less cost effective and more technically complicated to provide dedicated IPs for our customers, we feel that it is important and empowering for our users to earn their own reputations. This also lets you completely control your own reputation, and prevents your sending from being impacted by the reputations of other SendGrid users.
