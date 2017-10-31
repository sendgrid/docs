---
st:
  published_at: 2016-05-17
  type: Classroom
seo:
  title: Why did my message show as Delivered first and then as Bounced?
  description: Learn what to do when an email address shows events for both Delivered and Bounced...
  keywords: delay, delivery, deliver, delivered, after, then, bounce, bounces, bounced
title: Why did my message show as Delivered first and then as Bounced?
weight: 0
layout: page
navigation:
  show: true
---

When looking at your [Activity Feed](https://app.sendgrid.com/email_activity?) or in your own [Event data]({{root_url}}/API_Reference/Webhooks/event.html), you may see a very rare occurrence known as a delayed bounce. A delayed bounce occurs when a message is accepted by a recipient server(Delivered) and then is promptly declined(Bounced). SendGrid ultimately treats these messages as a bounce, and any future sends to this address will be dropped. 

If you wish to continue sending to the address that was affected, you will want to remove them from your bounce suppression list by navigating to [Suppressions > Bounces](https://app.sendgrid.com/suppressions/bounces?) and removing the email from the list or removing via API. You can also remove bounces from this list using the API. If you would like more information as why the email bounced, it is best to contact the mail administrator directly for the intended recipient's mail domain, usually example@example.com.
