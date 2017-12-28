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



**SMTP API** – The SMTP API is a header you can include in messages sent to SendGrid that allows you to use batched & templated messages that also include increased tracking and analytics information. The feature is also great if you are looking to substitute dynamic content into the messages you are sending. Please visit our [SendGrid SMTP API Documentation](http://sendgrid.com/docs/API_Reference/SMTP_API/index.html) page for more information.



**Web API v3** – The Web API v3 allows you to pull information you’d normally get on sendgrid.com without logging into the website. For example you can pull your settings, statistics, and email reports list. The Web API v3 can also be used to send email to SendGrid outside the realm of SMTP by using our [v3 mail send endpoint]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html). Please visit our [SendGrid Web API v3 Documentation]({{root_url}}/API_Reference/Web_API_v3/index.html) page for more information or our [SendGrid Interactive Documentation](http://sendgrid.com/docs/api_workshop.html) for help building Web API calls. Check out our [API Guide](http://go.sendgrid.com/rs/sendgrid/images/SendGrid_API_Guide-101.pdf) for even more info.



**Event Webhook** – The [Event API]({{root_url}}/API_Reference/Event_Webhook/event.html) gives you full sending logs from the moment of implementation and allows you to create reports of activity and statistics far beyond what is provided on sendgrid.com. The Event Webhook requires you to setup a URL where we HTTP POST your account activity as it takes place. Automated systems can also be built to take action when specific events, such as an Open, Click or Unsubscribe, occur. For more info on getting started, check out our [Getting Started with the Event Webhook]({{root_url}}/API_Reference/Event_Webhook/getting_started_event_webhook.html) article.



**Parse Webhook** – The Parse Webhook requires you to redirect the incoming mail for domain or subdomain to our parsing system using MX records. The parsing system breaks your email apart into different pieces and then HTTP POSTs the contents to a provided URL. This does redirect all incoming mail for the domain or subdomain you choose to our parser. Please visit our [SendGrid Parse Webhook Documentation](http://sendgrid.com/docs/API_Reference/Webhooks/parse.html) page for more information.



**Marketing Email API**  – The Marketing Email API allows you to interact with our Marketing Email app without having to log into sendgrid.com. You can upload and manage recipient lists, Marketing Email content, and manage sender identities. Please visit our  [SendGrid Marketing Email API Documentation](http://sendgrid.com/docs/API_Reference/Web_API/Legacy_Features/Marketing_Emails_API/index.html) page for more information or our  [SendGrid Interactive Documentation](http://sendgrid.com/docs/api_workshop.html) for help building Marketing Email API calls.
