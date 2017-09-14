---
st:
  published_at: 2016-07-22
  type: Classroom
seo:
  title: Shared IP Throttling
  description: Seeing delays sending emails from a Free or Essentials plan? Learn more here...
  keywords: shared, IP, warm, up, free, warmup, getting, started, throttle, delay, throttling 
title: Shared IP Throttling
weight: 0
layout: page
navigation:
  show: true
---
Seeing deferrals with the following message?
>Email was deferred due to the following reason(s): [IPs were throttled by recipient server]

We’re currently making changes to our shared IP system in order for our customers to have a better delivery experience in the long term. As a result of this, the IP group you’re sending from has a new shared IP address(es).

As these IP groups [warm up](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html), you may see some deferrals if you are a Free or Essentials customer. However don't worry, this warm up period won't last long. Maybe a few days at most, or until major email receivers have enough data to determine the legitimacy of email being sent from these new IPs.

Keep in mind SendGrid will continue to attempt to deliver these throttled emails on your behalf for up to 72 hours (it rarely takes the full 72 hours to deliver an email throttled in this way). 

If you wish to avoid delivery disruptions like this in the future, considering [upgrading your account to a Pro or higher plan](https://app.sendgrid.com/settings/billing), which includes a dedicated IP address as opposed to sending from a shared IP group. Dedicated IP addresses are great because instead of many different users sending from the same IP or group of IPs, you are in complete control of your sending reputation. 
