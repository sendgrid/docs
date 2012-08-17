---
comments: false
date: 2011-05-25 15:04:07
layout: post
slug: discrepancies-between-requests-and-deliveries
title: Discrepancies between Requests and Deliveries
wordpress_id: 874
categories:
- Email Deliverability
tags:
- Delivery
- request
- statistics
- stats
---

![Requests_vs_Delivered.png](/wp-content/uploads/2011/05/Requests_vs_Delivered.png)




A low percentage of requests versus delivered emails in your email statistics page (as shown in the image to the right) is typically caused by one of the following deliverability issues:




## **Dropped Email**



The most common problem is sending to email addres(ses) that have landed in one of your **SendGrid-managed Email List**, you can read more about the Email Lists and how it affects delivery [here](/docs/email-deliverability/help-my-emails-arent-being-delivered/). The bounce list is most often the culprit and SendGrid automatically **drops** emails sent to addresses that are on your SendGrid-managed email lists. Check your **repeat bounces** statistic and consider either removing these emails from your email list or the SendGrid bounce table.




**![](/wp-content/uploads/2011/05/Email_List_Stats.png)**




## Deferred or Rate-Limited Email






  1. You have been assigned a new IP address and are sending new email traffic to the ISPs. In this situation ISPs have not had a chance to characterize your sending reputation for your IP and email traffic and will often temporarily defer your delivery. Typically it takes 2-4 weeks for ISPs to properly characterize your traffic, during which time you may experience some deliverability problems. You should consider [warming up](/documentation/get-started/sending-practices-limitations/warming-up-your-ip-address/) your new IP address and gradually move your traffic over to the SendGrid Platform.



  2. You have changed your sending behavior and are sending a significantly higher volume of email than you have in the past without a [proper warm-up process](/documentation/get-started/sending-practices-limitations/warming-up-your-ip-address/). ISPs will routinely defer email that shows abrupt changes in sending patterns.



  3. Your are sending a large amount of email in a short period of time. SendGrid is built to scale and meet your email demands. We will take email from you as fast as you can send it to us, and will send it to the ISPs as fast as they'll take it from us. Many ISPs impose IP based rate-limiting on email traffic. Going over this threshold will cause temporary deferrals on your email stream.


