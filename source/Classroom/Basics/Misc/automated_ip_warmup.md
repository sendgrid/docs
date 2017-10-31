---
st:
  published_at: 2017-04-12
  type: Classroom
seo:
  title: Automated IP Warmup Overview
  description: Use the API to create IP pools, assign IP addresses to them, and enable IP warmup pools and IPs.
  keywords: auto, automatic, warm, up, api, v3, ip, pool, warmup, pools
title: Automated IP Warmup Overview
weight: 0
layout: page
navigation:
  show: true
---

SendGrid can automatically warmup dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in automated warmup. See the [automated warmup schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details.

Any mail beyond the hourly maximum limit will overflow to your existing warm IPs. There needs to be at least 1 existing warm IP for Automated Warmup to be enabled. 

An IP in warmup will always follow SendGrid’s Warmup schedule. Please consider a measured approach when sending on a new IP to allow for proper IP warmup. 

You can read more on [the importance of warming up a new IP here]({{root_url}}/Classroom/Deliver/warming_up_ips.html).
