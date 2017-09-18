---
layout: page
weight: 0
title: Timezones
navigation:
  show: false
seo:
  title: Timezones
  override: true
  description: Local time, based on your current geographic location on the earth. 
---

Timezones can be a tricky thing to wrangle, because depending on where you normally work and what your current local time is, 
you may come across times that don't always jive with what you're expecting.

When you create your SendGrid account, you will set the timezone for your account in your profile. This timezone will be 
used for times displayed in the SendGrid UI and for scheduling Marketing Campaigns.

When you use the API or look at event listings, you may notice something that you receive numbers. These numbers are a [Unix 
Timestamp](http://en.wikipedia.org/wiki/Unix_time), which basically means "the number of seconds since "since 00:00:00 Coordinated Universal 
Time (UTC), Thursday, 1 January 1970".

If for some reason you are running into timezone issues with scheduling Marketing Emails, please remember that you have the option to
specify a timezone when you schedule the email to go out. If you don't specify the timezone, it will default to current Pacific Time 
(UTC-7 or UTC-8, depending on daylight savings time). When viewing the campaigns, you may notice that the times say something like
 "Sent on 8:35 AM UTC -0700". This means that the campaign was sent at 8:35am in the "UTC -0700” timezone (aka MST or PDT) not at 8:35am minus 7 hours.
