---
seo:
  title: My emails are being dropped.
  description: My emails are being dropped.
  keywords: spam, address, bounces, drop, block, invalid, dropped, repeat, spam report, unsubscribed, bounced, reporting
title: My Emails Are Being Dropped
weight: 0
layout: page
zendesk_id: 200181728
navigation:
  show: true
---

If your emails are being Dropped by our system it means the recipient you’re sending to is on one of the suppression lists within your account and will have this symbol ![]({{root_url}}/images/Screen_Shot_2015-05-20_at_3.06.59_PM.png) next to it in Email Activity.

The suppression lists are the [Bounce](https://app.sendgrid.com/suppressions/bounces), [Invalid Email](https://app.sendgrid.com/suppressions/invalid_emails), [Spam Reports](https://app.sendgrid.com/suppressions/spam_reports), [Group Unsubscribe](https://app.sendgrid.com/suppressions/group_unsubscribes) and [Global Unsubscribe](https://app.sendgrid.com/suppressions/global_unsubscribes) . Every Drop event contains a _reason_ field with information about which list the address is on.

In all cases, simply _deleting_ an address from the respective suppression list will allow that address to be sent to normally in the future. Only when an address is actually present on one of these lists will we drop a message. You should only remove addresses from your suppression lists if the recipient complains about not getting your messages, they accidentally unsubscribed, or any prior receiving deliverability issues have been resolved.

![]({{root_url}}/images/Screen_Shot_2015-05-20_at_3.06.38_PM.png)

Depending on the _reason_ you may want to consider removing the address from your master sending list.

If messages to the recipient **Bounced** with any reason that indicates the account is no longer active or does not exist, you should consider removing the address from your master list. We will continue to Drop future sends to addresses that are on this list, but this still uses email credits.

If the recipient **Unsubscribed** or marked one of your messages as **Spam** , you should remove the address from your master list as the recipient has indicated they do not wish to receive further mailings. We will continue to Drop future sends to addresses that are on these lists, but this still uses email credits.

If the address is **Invalid** you should remove it from your recipient list regardless, as more than likely it is a bogus domain or an inactive mailserver. 

Addresses appearing on the **Blocks** list do _not_ get suppressed like other lists, they are simply logged for posterity when a 400 style retry attempt expires(most often relating to a deferral or throttle event), or a response is received from the recipient mail server indicating a temporary refusal of messages. If you send to an address that appears on this list, we will attempt to deliver to it normally.

 

You may also want to read through our [SendGrid Deliverability 101]({{root_url}}/Classroom/Deliver/Delivery_Introduction/email_deliverability_101.html) documentation for best sending practices and tips.
