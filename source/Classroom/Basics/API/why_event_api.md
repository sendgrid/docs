---
seo:
  title: Why Event API?
  description: Why Event API?
  keywords: event, webhook, notification, api
title: Why Event API?
weight: 0
layout: page
zendesk_id: 200182028
navigation:
  show: true
---

Wouldn't it be nice if you could get information about every email you've ever sent, every message that's ever been opened, and any link that's ever been clicked? If you ever talk to SendGrid Support agents, we'll almost always recommend implementing our Event API to help you track these sorts of metrics. This article highlights the major benefits of the Event API and why we constantly recommend it!

Due to the sheer volume of email we send (over 1 _billion_ emails a _day_ as of April 2016), we can only store so much information regarding the emails passing through our system. Your [Activity Feed](https://app.sendgrid.com/email_activity?) page holds records up to 500 events, and our internal database records also only go back about 30 days. After that time passes, specific email data is gone(stats are permanent). 


Fortunately, you can receive and store all of this information on your end though by implementing our **[Event API!](https://sendgrid.com/docs/API_Reference/Webhooks/index.html)**. 


The Event API, available with all Essentials and higher accounts, provides HTTP POSTs for any and all requested account activity as it takes place. The Event data for the event types you specify is then posted to a URL of your choosing in real-time! The Event API can tell you who opened what email and clicked which link as far back as the records you've recorded go.  [Events](http://docs.sendgrid.com/documentation/delivery-metrics/) we can POST include Processed, Delivered, Opens, Clicks, Unsubscribes, Spam Reports, Deferred, Bounces, and Drops with all relevant Category and Unique Argument information. This potentially gives you the entire sending activity of your account and is only restricted by your own internal storage limitations. Additionally, as Events are posted real time, you could potentially build automated systems on your end to take action, such as removing an Unsubscribed address from your master mailing list, or firing off a seperate email based on a specific action.


Although it does require a fair amount of setup, the benefits of the Event API are paramount. More information about setup can be found in our [SendGrid Event API Documentation](https://sendgrid.com/docs/API_Reference/Webhooks/index.html). If you have any specific questions about the Event API please do not hesitate to contact our Support team via email, chat, or phone call.

Need additional functionality with your Event API integration? Check out the open-source [Event Kit App](https://github.com/sendgrid/eventkit-rails), also check out our friends over at [Keen.io](https://keen.io/) who provide a place to receive POST data.
