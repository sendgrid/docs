---
seo:
  title: Drop Reason&#58; Bounced Address
  description: Drop Reason&#58; Bounced Address
  keywords: address, reports, drop, email, dropped, bounced, reason, bounced address
title: Drop Reason&#58; Bounced Address
weight: 0
layout: page
zendesk_id: 203790456
navigation:
  show: true
---

![]({{root_url}}/images/bounces.gif)

This is a “Drop” event which occurs when a message to an address has previously Bounced.  

You can visit the [Bounces list](https://app.sendgrid.com/suppressions/bounces) under the Suppressions tab, and search the address to find the details of the original attempt, such as the date and full error reason code. Once an address has been added to this list, we do not attempt to deliver further messages to it, we will instead Drop them to protect your external reputation.

![]({{root_url}}/images/Screen_Shot_2015-05-20_at_2.52.13_PM.png)

 

If you would like us to attempt to deliver messages to this address again, please delete the specific address from the Bounces list. We cannot redeliver messages that have been Dropped or appear on suppression lists, but we will attempt future messages once the address has been removed from the list.
