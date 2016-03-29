---
seo:
  title: Option to "Delete From Bounce List" in Email Activity
  description: Delete From bounce list option in Email Activity
  keywords: drop, list, email, bounce, dropped, activity, deleted, reason, delete from bounce list, bounce list, bounced address
title: Option to "Delete From Bounce List" in Email Activity
weight: 0
layout: page
zendesk_id: 204074633
navigation:
  show: true
---

![]({{root_url}}/images/deletefrombouncelist.png)

 

You may have seen this option floating around in your interactions with [Email Activity](https://sendgrid.com/logs/index), but what does it do? I'm glad you asked. 

This option allows you to easily remove this particular address from the appropriate Email Reports list in your account. Sending to addresses that are already on an Email Reports list can cause [Drop events]({{root_url}}/Classroom/Track/Drops/drop_reason_bounced_address.html) in the future. In the case of our above example, the [Bounces List](https://sendgrid.com/bounces) is the list in question.

![]({{root_url}}/images/emailreports.gif)

Removing an address from the Bounces list will allow you to send future messages without us intervening on your behalf, you're essentially telling us that this address should be fine, but something went wrong and you'd like to try again. 

 

Please note that you will also see this option appear alongside other event types such as Unsubscribe and Spam Report, in these cases this option works in the very same way, but simply removes in from the respective Email Reports list. 
