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

There are 2 easy ways to schedule your emails; One way is using [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html), and the other is using our [SMTP API](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html) header.

#1. Marketing Campaigns
If you are using Marketing Campaigns, you can schedule a time to send your campaign from the Settings tab by turning Off the option to Send Immediately. Next, verify that you are using the the correct time zone, and then simply choose the date and time that you would like to send your campaign at.

You can also schedule your campaigns with the [Marketing Campaigns API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html#Schedule-a-Campaign-POST). 


#2. SMTP API
You can use the [SMTP API](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html) header to schedule your emails when sending via [SMTP](https://sendgrid.com/docs/Integrate/index.html#-SMTP-Relay) or our [mail.send API endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html). SendGrid will allow you to queue batches of emails targeting individual recipients by using a UNIX time stamp parameter in your SMTP API header.

This parameter allows SendGrid to begin processing your email requests before sending. SendGrid will then queue those messages and release them when the specified time rolls around.

Here's an example of how this timestamp might look in your SMTP API JSON header. 

**{ "send\_at": 1409348513 }**
