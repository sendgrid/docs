---
seo:
  title: Drops
title: Drops
weight: 0
layout: page
navigation:
  show: false
---

In certain cases, SendGrid will “Drop” a message to a specific email address in order to protect your sender reputation. SendGrid keeps Email Lists to track bounces, spam reports, and unsubscribes for each of our users. If a user sends a message to an email address that exists on one of these lists within their account, SendGrid will automatically drop the message (i.e., not send to the address).

<call-out>

SendGrid users can always delete entries from these lists if an email address is erroneously placed on one or more of them. Users can accomplish this by mousing over the entry for an address and clicking the “Delete” button.

</call-out>

## 	Identifying Drops

On the [Global Stats Dashboard]({{root_url}}/user-interface/analytics-and-reporting/global/), the Drops can also be identified as Repeated Bounces, Repeated Spam Reports, Repeated Unsubscribes and Invalid Emails:

You will also find drops in your [Email Activity](https://app.sendgrid.com/email_activity). Clicking on the event, will show more details about it, including the reason for which the email was dropped.

<call-out>

If the email address is on the Unsubscribe list the reason will say "Unsubscribed Address"; if on the Spam report list, it will say "Spam Reporting Address" and if on the Invalid Emails list, it will say "Invalid".

</call-out>

## 	Other reasons for dropped emails:

1. Email triggers SendGrid's spam filters if you have the [Spam Checker filter]({{root_url}}/user-interface/account-and-settings/mail/#spam-checker) enabled. You can identify these drops only through the data received through the [Event Webhook]({{root_url}}/for-developers/tracking-events/event/) or in [Email Activity]({{root_url}}/user-interface/analytics-and-reporting/email-activity-feed/). In both cases, the reason displayed will say "Spam Content".

2. The SMTPAPI header is built incorrectly - this will cause the emails to be dropped with the reason "Invalid SMTPAPI header". For more details about how to build the SMTPAPI header, please view our documentation on [SMTP API]({{root_url}}/for-developers/sending-email/building-an-smtp-email/).

3. Duplicate message - emails are dropped with this reason only when they are sent through the Marketing Email App or through the Marketing API. If a recipient's address is showing on multiple lists and you assign those lists to one campaign, our systems automatically identify that the address is on multiple lists and drops the duplicate messages. This prevents having the same message sent to the same recipient multiple times.

## 	How to remove Drops

If you would like us to attempt to deliver messages to a specific address again, please delete that address from the suppression list. On the suppression list page, you can remove an address from the bounces list. Then you will be able to send future messages without us intervening on your behalf; you're essentially telling us that this address should be fine, but something went wrong and you'd like to try again.

<call-out>

SendGrid cannot re-send messages that have been Dropped or appear on suppression lists, but will attempt future deliveries once the address has been removed from the list and is sent to again.

</call-out>

**Since SendGrid has my back, and my reputation is not affected by these Drops, why should I care about removing them?**

Your lists will be cleaner and even if we do drop the messages intended to addresses that are already on one of the suppression lists, we do accept and process these requests before we drop them. Since this is the case, dropped emails will still count towards your monthly plan email limit.

 ### 	Cleaning your lists

We recommend Using the [Web API]({{root_url}}/api-reference/) to export any of the suppression lists. Once you export that data, you can use it to clean your distribution lists.

