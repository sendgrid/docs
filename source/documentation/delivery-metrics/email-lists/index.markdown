---
comments: false
date: 2011-06-14 13:08:59
layout: page
slug: email-lists
title: Email Reports
wordpress_id: 1244
following_users:
- brandon
---

The Email Reports tab of the website allows you to view logs of all your bounced emails, as well as your unsubscribed customers. In addition to viewing these logs on the web, you can save these lists as either .csv or .txt files, or print the list. These logs are divided into the following categories.







Category
Description





Bounces


When your email has not been successfully delivered and the reason reported back to us is that the email was bounced, that email appears on this list.






Blocks


When your IP address has been added to a blacklist, has been blocked by an ISP or messaging organization, the effected email shows up on this list. Typically it is possible to have your IP address removed from a block list, and some lists automatically do this after a period of time.






Spam Reports


If a person whom has received your email has reported that received email as spam, we are notified by the ISP and we place the email that originated the spam report here.






Invalid Emails


If an ISP reports back to us that the email supplied is invalid or we discover with our own algorithm that the email you are sending to is invalid, it will appear on this list.






Unsubscribes


Note that any email on this list will not be delivered to by SendGrid in any future mailings.




With the exception of the Block list, all emails listed on these lists will be dropped from any future attempts for delivery, this is because redelivering emails to these addresses will most likely be unsuccessful, and definitely negatively impact your Sender Reputation.

You can also control the way bounces are dealt with for your account via a settings button available from the [Bounce List page](http://sendgrid.com/bounces).

[![](http://docs.sendgrid.com/wp-content/uploads/2011/06/email_reports.png)](http://docs.sendgrid.com/wp-content/uploads/2011/06/email_reports.png)These settings allow you to purge either hard or soft bounces after a certain number of days. Additionally, you may specify whether or not you would like bounce messages from recipient servers to be forwarded via email, and if so, you may specify an address which these messages to be forwarded to. (As opposed to the from address on the bounced email.)
