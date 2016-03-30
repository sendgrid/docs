---
seo:
  title: Drop Reason&#58; Unsubscribed Address
  description: Drop Reason&#58; Unsubscribed Address
  keywords: address, drop, unsubscribe, unsub, dropped, reason
title: Drop Reason&#58; Unsubscribed Address
weight: 0
layout: page
zendesk_id: 203790546
navigation:
  show: true
---

![]({{root_url}}/images/Screen_Shot_2015-05-20_at_3.21.57_PM.png)

This is a “Drop” event which occurs when a message to an address has previously Unsubscribed from one of your messages.

You can visit the [Global Unsubscribes](https://app.sendgrid.com/suppressions/global_unsubscribes) under the Suppressions tab, and search the address to find the details of the original attempt, such as the date and full error code. Once an address has been added to this list, we do not attempt to deliver further messages to it, we will instead Drop it to protect your external reputation.

![]({{root_url}}/images/Screen_Shot_2015-05-20_at_3.26.25_PM.png)

If you would like us to attempt to deliver messages to this address again, please delete it from the Unsubscribe list. We cannot redeliver messages that have been Dropped or appear on suppression lists, but we will attempt future messages once the address has been removed from the list.
