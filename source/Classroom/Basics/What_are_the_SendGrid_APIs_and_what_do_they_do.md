---
seo:
  title: What are the SendGrid APIs and what do they do?
  description: What are the SendGrid APIs and what do they do?
  keywords: event, smtpapi, marketing, webhook, api, Unable to Parse Server Reason, smtp
title: What are the SendGrid APIs and what do they do?
weight: 0
layout: page
zendesk_id: 200181808
navigation:
  show: true
---

The SendGrid APIs allow you to interact with our system in a number of different ways:

&nbsp;

**SMTP API** – The SMTP API is a header you can include in messages sent to SendGrid that allows you to use batched & templated messages that also include increased tracking and analytics information. The feature is also great if you are looking to substitute dynamic content into the messages you are sending. Please visit our [SendGrid SMTP API Documentation](http://sendgrid.com/docs/API_Reference/SMTP_API/index.html) page for more information.

&nbsp;

**Web API** – The Web API allows you to pull information you’d normally get on sendgrid.com without logging into the website. For example you can pull your settings, statistics, and email reports list. The Web API can also be used to send email to SendGrid outside the realm of SMTP. Please visit our [SendGrid Web API Documentation](http://sendgrid.com/docs/API_Reference/Web_API/index.html) page for more information or our [SendGrid Interactive Documentation](http://sendgrid.com/docs/api_workshop.html) for help building Web API calls. Check out our [API Guide](http://go.sendgrid.com/rs/sendgrid/images/SendGrid_API_Guide-101.pdf) for even more info.

&nbsp;

**Event Webhook** – The Event Webhook gives you full sending logs from the moment of implementation and allows you to create reports of activity and statistics far beyond what is provided on sendgrid.com. The Event Webhook requires you to setup a URL where we HTTP POST your account activity as it takes place.&nbsp;Automated systems can also be built to take action when specific events, such as an Open, Click or Unsubscribe, occur. Please visit our [SendGrid Event Webhook&nbsp;Documentation](http://sendgrid.com/docs/API_Reference/Webhooks/event.html) page for more information. We also have a great article about [why setting up the SendGrid Event Webhook for your account is an excellent idea](http://support.sendgrid.com/entries/21233621-why-event-api).

&nbsp;

**Parse Webhook** – The Parse Webhook requires you to redirect the incoming mail for domain or subdomain to our parsing system using MX records. The parsing system breaks your email apart into different pieces and then HTTP POSTs the contents to a provided URL. This does redirect all incoming mail for the domain or subdomain you choose to our parser. Please visit our [SendGrid Parse Webhook Documentation](http://sendgrid.com/docs/API_Reference/Webhooks/parse.html) page for more information.

&nbsp;

**Marketing Email API** &nbsp;– The Marketing Email API allows you to interact with our Marketing Email app without having to log into sendgrid.com. You can upload and manage recipient lists, Marketing Email content, and manage sender identities. Please visit our&nbsp; [SendGrid Marketing Email API Documentation](http://sendgrid.com/docs/API_Reference/Marketing_Emails_API/index.html)&nbsp;page for more information or our&nbsp; [SendGrid Interactive Documentation](http://sendgrid.com/docs/api_workshop.html)&nbsp;for help building&nbsp;Marketing&nbsp;Email API calls.
