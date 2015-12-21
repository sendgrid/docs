---
layout: page
weight: 0
title: IP Warmup
navigation:
  show: false
seo:
  title: Warming up and IP
  override: true
  description: Initially splitting up the email send requests from a new dedicated IP, so it doesn't get blocked.
---

When you place your IP in warmup mode, this means we will split up the requests that you send to us and only send a minimal amount of messages from your dedicated IP. The rest will be sent from a already warmed up IP pool. Each day we will increase the amount that we send directly from your IP. You can see the IP warmup schedule here .

[IP warming]({{root_url}}/Classroom/Deliver/warming_up_ips.html) is a gradual process that happens over time, with the goal of establishing a reputation as a legitimate email sender in the eyes of ISPs (Internet Service Providers). When an ISP observes email suddenly coming from a new or “cold” (ie, recently dormant) IP address, they will take notice of it and immediately begin evaluating the traffic coming from that IP. Since volume is perhaps the most telling factor in the eyes of ISP SPAM filters, it is best to begin sending low to moderate volume (e.g., up to 1 million emails/month), eventually working your way up to larger volumes (e.g., over 1 million emails/month). This gives the receiving email providers a chance to closely observe your sending habits and the way your customers treat the emails they receive from you. Click here to read more about this.

Now you can also warmup your IP using our [IP Warmup API]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup.html).
