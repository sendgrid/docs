---
layout: page
weight: 0
title: Warming Up an IP Address
seo:
  title: Warming Up an IP Address
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/80755248" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Whether you are new to the email game or are an accomplished vet, you have probably run across the idea of warming up an [IP address]({{root_url}}/Glossary/ip_address.html) to improve delivery performance. [Warming up your IP]({{root_url}}/Glossary/ip_warmup.html) allows you to gradually establish a good [sender reputation]({{root_url}}/Glossary/sender_reputation.html), and is a critical step for new SendGrid users or users who are adding a new dedicated IP address to their account.

{% anchor h2 %}
What does it actually mean to "warm up" an IP address?
{% endanchor %}

IP warming is the practice of gradually increasing the volume of mail sent via a dedicated IP address according to a predetermined schedule. This gradual process helps to establish a reputation with ISPs (Internet Service Providers) as a legitimate email sender.

When an ISP observes email suddenly coming from a new or "cold" (i.e. recently dormant) IP address, they will take notice and immediately begin evaluating the traffic coming from that IP. Since ISPs treat email volume as a key determining factor when detecting spam, it is best to begin sending a low to moderate volume (e.g. up to 1 million emails/month), eventually working your way up to larger volumes (e.g. over 1 million emails/month). This gives the receiving email providers a chance to closely observe your sending habits and the way your recipients treat your email.

It should be noted that taking this gradual, ramping approach does not guarantee a perfect sending reputation. It is still important to follow sending [best practices](https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder/). Remember to always

- Send content that your users wish to receive
- Practice proper contact list hygiene
- Send email at a consistent and appropriate frequency

{% anchor h2%}
Does my IP need to be warmed up? And if so, why?
{% endanchor %}

If you are sending email from a new or “cold" IP address, ISPs have no means of determining your [sender reputation]({{root_url}}/Glossary/sender_reputation.html). Since this reputation determines whether or not your emails are delivered to your recipients’ inboxes, it is vital to immediately begin establishing a good reputation.

{% info %}
Remember that it is much easier to establish a positive reputation as a new sender, than it is to repair an existing reputation.
{% endinfo %}

If you are sending a very low volume of email (less than 10,000 emails/month), ISPs will probably not pay much attention to your sending habits. However, if you are sending higher volumes, the IP warmup process plays a much more significant role in establishing your reputation.

{% info %}
We recommend that all users warm up new IP addresses regardless of the amount of email they send.
{% endinfo %}

Your IP address’s history is another important determinant for ISP spam filters. Here are a few additional tools you can use to monitor the reputation of any IP address:

- Return Path's [SenderScore](https://senderscore.org)
- Cisco's IronPort [SenderBase](http://www.senderbase.org)

{% anchor h2 %}
How do I warm up my new IP address?
{% endanchor %}

There are three approaches to warming up a new IP address:

1. Have Support place your IP address into “warmup mode” which will automatically throttle traffic sent through your new IP according to our [warm up schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html). This requires the least amount of effort form the user, but will take more time before the IP address is completely warm.
2. Manually place your IP address into warmup mode via our [API]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup.html) which will automatically throttle traffic sent through your new IP according to our [warm up schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html). This allows you to add or remove IPs from warm up mode at your discretion.
3. Manually warm up your IP. Please refer to our [IP Warmup Guide]({{root_url}}/assets/IPWarmupSchedule.pdf) to determine the appropriate rate at which to manually increase the amount of traffic to send through your new IP. This option makes you completely responsible for the entire IP warmup process.

{% warning %}
When automatically warming up an IP, SendGrid limits the amount of email sent through that IP per hour. Any email requests that exceed this hourly limit will overflow to any other existing, dedicated, and warm IPs. If you do not have any other warm IPs, all extra traffic will be routed through SendGrid’s Shared IP Warmup clusters. If your sending reputation is below 85, you will be unable to use these clusters, and your reputation will suffer as a result.

For this reason, we only recommend that users with preexisting, warm IPs use the automatic warm up feature when adding a new dedicated IP address to their account.

**New users who are establishing a reputation for the first time, on their first dedicated IP address, should manually limit their sending volume according to our [manual IP Warmup Guide]({{root_url}}/assets/IPWarmupSchedule.pdf) to attain the best possible reputation.**
{% endwarning %}

{% anchor h2 %}
How does SendGrid prepare dedicated IPs before assigning them to users?
{% endanchor %}

We are constantly working on different approaches to help our customers quickly reach the sending rates that their businesses demand. We evaluate the initial history and reputation of all IPs that are added to our inventory and only accept IPs that meet our high standards.

After we've determined that our IPs have an acceptable pre-existing reputation, we distribute IPs with the highest reputation first. This gives IPs with poor reputations more time to "cool off" before they are given to users. We will continue to innovate in this space, as it is an important component of our service.

{% anchor h2 %}
Why haven't I seen other ESPs require an IP warmup process?
{% endanchor %}

Many other email service providers, especially those focused on marketing email tools, do not offer dedicated IP addresses to their customers. Many ESPs place all of their customers on a shared IP cluster by default.

While it may be less cost effective and more technically complicated to provide dedicated IPs for our customers, we feel that it is important and empowering for our users to earn their own reputations. This also protects your sender reputation from being impacted by the reputations of other SendGrid users.
