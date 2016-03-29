---
seo:
  title: Discrepancies between Requests and Deliveries
  description: Discrepancies between Requests and Deliveries
  keywords: different, deferred, deferral, throttled, requests, delayed, delivered
title: Discrepancies between Requests and Deliveries
weight: 0
layout: page
zendesk_id: 200181668
navigation:
  show: true
---

![Requests_vs_Delivered.png](https://sendgrid.zendesk.com/attachments/token/c8ampzr86gbuymt/?name=Requests_vs_Delivered.png)

A low percentage of requests versus delivered emails in your email statistics page (as shown in the image to the right) is typically caused by one of the following deliverability issues:

**Dropped Email**

1. The most common problem is sending to email addresses that have landed in one of your **SendGrid-managed Email List** s [(Reference Item 2 of this post]({{root_url}}/Classroom/Deliver/Undeliverable_Email/help_my_emails_arent_being_delivered.html). The bounce list is most often the culprit and SendGrid automatically **drops**  emails sent to addresses that are on your SendGrid-managed email lists. Check your **repeat bounces** statistic and consider either removing these emails from your email list or the SendGrid bounce table.

 

**![Email_List_Stats.png](https://sendgrid.zendesk.com/attachments/token/itfduzs60sahcyh/?name=Email_List_Stats.png)**

**Deferred or Rate-Limited Email**

1. You have been assigned a new IP address and are sending new email traffic to the ISPs. In this situation ISPs have not had a chance to characterize your sending reputation for your IP and email traffic and will often temporarily defer your delivery. Typically it takes 2-4 weeks for ISPs to properly characterize your traffic, during which time you may experience some deliverability problems. You should consider [warming up](http://blog.sendgrid.com/how-to-warm-up-an-ip/) your new IP address and gradually move your traffic over to the SendGrid Platform.
2. You have changed your sending behavior and are sending a significantly higher volume of email than you have in the past without a [proper warm-up process](http://blog.sendgrid.com/how-to-warm-up-an-ip/). ISPs will routinely defer email that shows abrupt changes in sending patterns.
3. Your are sending a large amount of email in a short period of time. SendGrid is built to scale and meet your email demands. We will take email from you as fast as you can send it to us, and will send it to the ISPs as fast as they'll take it from us. Many ISPs impose IP based rate-limiting on email traffic. Going over this threshold will cause temporary deferrals on your email stream. 
