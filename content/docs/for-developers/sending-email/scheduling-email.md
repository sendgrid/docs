---
seo:
  title: How can I schedule emails to send at specific times?
  description: How can I schedule emails to send at specific times?
  keywords: drip, newsletter, email, future, automate, automated, delay, schedule, delivery
title: How can I schedule emails to send at specific times?
weight: 0
layout: page
zendesk_id: 204820097
navigation:
  show: true
---

There are 3 easy ways to schedule your emails; use [Marketing Campaigns]({{root_url}}/help-support/getting-started/how-to-send-email.html), use the [SMTP API]({{root_url}}/for-developers/sending-email/scheduling-parameters.html) header, or use the API.

{% info %}
If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid those times (for example, scheduling at 10:53) can result in lower deferral rates because it won't be going through our servers at the same times as everyone else's mail.
{% endinfo %}

#1. Marketing Campaigns
If you are using Marketing Campaigns, you can schedule a time to send your campaign from the Settings tab by turning Off the option to Send Immediately. Next, verify that you are using the the correct time zone, and then simply choose the date and time that you would like to send your campaign at.

You can also schedule your campaigns with the [Marketing Campaigns API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html#Schedule-a-Campaign-POST).

#2. API
You can you can schedule a time to send your email by using the the `send_at` object of the `POST /mail/send` method of the [V3 API](https://sendgrid.com/docs/API_Reference/api_v3.html). For more information about scheduling and stopping scheduled sends with the API, see [Can I Stop a Scheduled Send]({{root_url}}/Classroom/Send/When_Emails_Are_Sent/can_i_stop_a_scheduled_send.html).


#3. SMTP API
You can use the [SMTP API]({{root_url}}/for-developers/sending-email/scheduling-parameters.html) header to schedule your emails when sending via [SMTP](https://sendgrid.com/docs/Integrate/index.html#-SMTP-Relay) or our [mail.send API endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html). SendGrid will allow you to queue batches of emails targeting individual recipients by using a UNIX time stamp parameter in your SMTP API header.

This parameter allows SendGrid to begin processing your email requests before sending. SendGrid will then queue those messages and release them when the specified time rolls around.

Here's an example of how this timestamp might look in your SMTP API JSON header. 

**{ "send\_at": 1409348513 }**

