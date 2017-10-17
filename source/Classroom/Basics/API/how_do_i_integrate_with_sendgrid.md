---
seo:
  title: How do I Integrate with SendGrid?
  description: How do I Integrate with SendGrid?
  keywords: marketing, webhook, newsletter, getting, started, whitelabel, getting_started, email, api, integration, smtp, what, warm
title: How do I Integrate with SendGrid?
weight: 0
layout: page
zendesk_id: 200182018
navigation:
  show: true
---

There are many different ways to use SendGrid’s email services, so it all comes down to what _you_ need. We have numerous examples for how to configure mail clients such as Outlook and Apple Mail to send through our system as well as integration examples for a multitude of [programming languages and libraries](https://sendgrid.com/docs/Integrate/libraries.html) on our  **[SendGrid Integration Page](http://sendgrid.com/docs/Integrate/index.html).**

#**The main ways to integrate with Sendgrid:**

- **[SMTP]({{root_url}}/Classroom/Basics/Email_Infrastructure/what_is_smtp.html)** - Send with a desktop mail client, or existing program/service using [your SMTP credentials]({{root_url}}/Classroom/Basics/Email_Infrastructure/recommended_smtp_settings.html).
- **[Web API](https://sendgrid.com/docs/API_Reference/Web_API/index.html)** - Send from your app using  [your api key]({{root_url}}/Classroom/Basics/API/what_is_my_api_key.html). Check out our [API Guide](http://go.sendgrid.com/rs/sendgrid/images/SendGrid_API_Guide-101.pdf) for more info.
- **[Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)** - Create and send emails using our in-app content designer, also manage and store your lists with the ability to segment based on custom criteria. The features of Marketing Campaigns are also accessible via the [Marketing Campaigns API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html).



##**Things to consider before you start sending:**

- We recommend that all Pro and higher users complete [Whitelabeling]({{root_url}}/Classroom/Deliver/Delivery_Introduction/all_you_need_to_know_about_whitelabeling.html). This process helps your emails look as consistent as possible by masking SendGrid in the sending process. When properly whitelabeled, your emails have the appearance of coming directly from your own domain, which is important for building and maintaining your sending reputation.
- Consider implementing the [Event API](http://sendgrid.com/docs/API_Reference/Webhooks/event.html) to track and log your email data more thoroughly. For more info on the benefits of Event API, check out our [Why Event API]({{root_url}}/Classroom/Basics/API/why_event_api.html) article.
- We _**highly**_ recommend that if you are a Pro or higher customer, you [warm up your IP](https://sendgrid.com/docs/User_Guide/warming_up.html) as part of your getting started checklist. Warming up is one of the best ways to prevent delivery issues down the road by getting receivers used to the type of messages you will be sending.
