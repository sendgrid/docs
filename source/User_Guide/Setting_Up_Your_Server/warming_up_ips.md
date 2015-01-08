---
layout: page
weight: 0
title: Warming Up an IP Address
seo:
  title: Warming Up an IP Address
navigation:
  show: true
---

Whether you are new to the email game or an accomplished vet, you have probably run across the idea of warming up an IP (Internet Protocol) address to improve delivery performance. Since we often find ourselves explaining the ins and outs of the IP warm-up process to current and prospective customers, we figured we would write a post to explain the basics. Below, we ask and answer four basic questions to explore and explain the topic.

{% anchor h2 %}
What does it actually mean to "warm up" an IP address? 
{% endanchor %}

IP warming is a gradual process that happens over time, with the goal of establishing a reputation as a legitimate email sender in the eyes of ISPs (Internet Service Providers). When an ISP observes email suddenly coming from a new or "cold" (ie, recently dormant) IP address, they will take notice of it and immediately begin evaluating the traffic coming from that IP. Since volume is perhaps the most telling factor in the eyes of ISP SPAM filters, it is best to begin sending low to moderate volume (e.g., up to 1 million emails/month), eventually working your way up to larger volumes (e.g., over 1 million emails/month). This gives the receiving email providers a chance to closely observe your sending habits and the way your customers treat the emails they receive from you.

It should be noted that taking this gradual, ramping approach does not guarantee smooth sailing for ever more. It remains important to follow other email [best practices](https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder) – send acceptable content that your users want to get, maintain quality lists and send your email on a consistent basis.

{% anchor h2 %}
Does my IP need to be warmed up? And if so, why? 
{% endanchor %}

If you are sending email from a new or cold" IP address, the various ISPs have no basis from which to assign you a sending reputation. Since this reputation will eventually determine whether or not your emails will get past their SPAM filters, it's obviously pretty darn important. In the case that your are sending a very low volume (e.g., \< 10,000 emails/month) of email, you will likely stay off the ISPs' radars for the most part. However, if you are exceeding this approximate threshold, you should make the warmup process a priority in order to start off on the right foot. We suggest that a warmup period is useful regardless of volume.

Often times, the history of your IP is also an important determinant of an ISPs initial evaluation. Here are a few tools you can use to check the reputation of any IP: Return Path's [SenderScore.org](https://senderscore.org) and Cisco's IronPort [SenderBase.org](http://www.senderbase.org)

{% anchor h2 %}
How does one go about warming up an IP? What does it entail in terms of volume, time frame, etc? 
{% endanchor %}

The first time you send email from a fresh IP, ISP SPAM filters have to make a quick decision. Unfortunately, in this case they don't have enough information to make an educated decision. Therefore, you have to give them something to work with – just not too much and not too quickly!

Below are a few suggested schedules for ramping up your sending:

{% anchor h3 %}
Automated IP Warmup
{% endanchor %}

With our API V3, we have created a way for you to [automate your IP warmup process]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup.html). Please do checkout the manual methods, so that you can understand how IP warmup worked before SendGrid automated the process.

{% anchor h3 %}
For marketing email & marketing campaigns 
{% endanchor %}

**The Conservative Approach** is to estimate your total monthly email volume and divide that number by 30 and then try to spread your sending evenly over the first 30 days, based on that calculation. Example: if you will send 90,000 emails/month, you should start off sending 3,000 per day over the first month.

**The Aggressive Approach** is to divide your volume by 15 rather than 30. Example: say you still need to send the same 90,000 email/month, but you need the emails to reach your recipients in half as long of a time frame, send 6,000 per day for the first 15 days.

{% anchor h3 %}
For transactional email 
{% endanchor %}

**Established businesses** that are already sending a ton of email, and decide to move to an ESP for the first time or switch to a new vendor, should migrate their sending a little bit at a time. One way to do this is to split the traffic and move small portions of it to the new IP over time. Alternatively, companies who are already maintaining multiple mail servers, can move their servers over to the new IP(s) one at a time.

**New businesses** can typically follow the organic growth of their business, because this growth will by its own nature create an ideal ramp. Since transactional email is usually dependent on the number of users, the growth in of the customer base will create a nice, comfortable growth curve in the email volume.

ISPs keep monthly histories of all the email being sent to their systems. Therefore, you can expect to accomplish a sufficient warmup within about 30 days. You should be able to gradually increase your outbound traffic from about 1,000-2,000 emails/day (at the outset) up to 100,000-500,000 emails/day when the process is complete.

{% anchor h2 %}
What does SendGrid do to prepare its IPs for their customers?
{% endanchor %}

We are constantly working on different approaches to allow our customers to begin sending the email volume that their business demands as soon as possible. We take the first step of evaluating the history and cleanliness of the IPs that we put into our inventory – if a block doesn't meet our standards, we send them back. Once we've determined that our IPs have an acceptable pre-existing reputation, we then distribute those with the highest reputations first. This gives those with lesser reputations some time to cool off a bit and get ready for future assignment. We will continue to innovate in this space, because we see it as an important piece of our overall service offering.

You might be thinking, "Why haven't I encountered this whole warmup issue at other ESPs?" The answer is simple: many of them, especially those focused on marketing email tools, do not offer dedicated IP addresses to their customers. Most often, ESPs simply place everyone on a shared cluster by default. While it may be less cost effective and more technically complicated, we think it is important to empower our users by allowing them to earn their own reputation on their own IP. This also protects you from sharing the negative reputation of the other companies on your IP.
