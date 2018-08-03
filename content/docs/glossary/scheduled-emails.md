---
seo:
  title: Scheduled Emails
  description: Scheduling emails allows the ability to have the email send process to begin at a certain time
  keywords: scheduled emails, sending emails at a specific time
title: Scheduled Emails
weight: 0
layout: page
navigation:
  show: false
---

Scheduling emails allows the ability to have the email send at a certain time.

For example if I am a retailer who has a promotion starting at 10:00am you want the email to land as close to that time as possible. Scheduling can support this.

Whether using [Marketing Campaigns](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html) or [our transactional APIs]({{root_url}}/for-developers/sending-email/scheduling-parameters/) you can define parameters on when to send a single email or batches of emails.

<call-out>

If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid those times (for example, scheduling at 10:53) can result in lower deferral rates because it won't be going through our servers at the same times as everyone else's mail.

</call-out>
