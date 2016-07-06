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

Whether using [Marketing Campaigns]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html) or [our transactional APIs]({{root_url}}/API_Reference/SMTP_API/scheduling_parameters.html) you can define parameters on when to send a single email or batches of emails.

{% info %}
There is no constraint on how early you can schedule campaigns sent via [Marketing Campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/index.html). However, all other email sent via SendGrid can only be scheduled up to 72 hours in advance.
{% endinfo %}
