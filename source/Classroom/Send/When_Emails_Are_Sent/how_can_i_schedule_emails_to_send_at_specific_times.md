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

There are 2 easy ways to schedule your emails; One way is using our email marketing app, and the other is using our SMTP API.

**1.** If you are using the newsletter/marketing app you can schedule a time in step 4 of the creation process. Make sure to select the correct time zone, and simple select the time when you would like us to send your email.

You can also schedule your marketing emails with the Marketing&nbsp; [API](https://sendgrid.com/docs/API_Reference/Web_API/Legacy_Features/Marketing_Emails_API/schedule.html).&nbsp;

![]({{root_url}}/images/Screen_Shot_2015-02-20_at_1.35.29_PM.png)

**2.** &nbsp;You can use the [SMTP&nbsp;API](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)&nbsp;to schedule your emails.&nbsp;SendGrid will allow you to queue batches of emails targeting individual recipients by using a UNIX time stamp parameter in your SMTP API header.

This parameter allows SendGrid to begin processing your email requests before sending. SendGrid will then queue those messages and release them when the specified time rolls around.

An example of how this would look in your SMTP API JSON header.&nbsp;

**{ "send\_at": 1409348513 }**
