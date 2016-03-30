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

Wouldn't it be nice if you could get information about every email you've ever sent, every message that's ever been opened, and any link that's ever been clicked? If you ever talk to SendGrid Support Agents, we'll almost always recommend implementing our Event API if you haven't done so. This article highlights the major benefits of the Event API and why we always recommend it.

 

Due to the sheer volume of email we send (more than 3 _billion_ in March of 2012), we can only store so much information regarding the emails passing through our system. Our Email Activity page holds records for 2 days with a max 500 entries and our internal database records only go back about 30 days. After that, unfortunately, specific email data is gone (stats are permanent). Fortunately, you can receive and store all of this information on your end though by implementing our Event API.

 

The Event API, available with all Essentials level and higher accounts, gives you HTTP POSTs for any and all requested account activity as it takes place to a provided URL. The Event API can tell you who opened what email and clicked which link as far back as the records go.  [Events](http://docs.sendgrid.com/documentation/delivery-metrics/) we can POST include Processed, Delivered, Opens, Clicks, Unsubscribes, Spam Reports, Deferred, Bounces, and Drops with all relevant Category and Unique Argument information. This potentially gives you the entire sending activity of your account and is not restricted by our own internal storage limitations. Additionally, as Events are posted realtime you can have automated systems on your end to take action, such as removing an Unsubscribed address from your master mailing list.

 

You can take things a step further by processing or analyzing the data to present it in intuitive charts and graphs and get much more usable information than we provide on our Statistics page. This also makes it possible to get segmented lists, such as all recipients that Opened last week, that our system does not currently provide.

 

Although it does require a fair amount of setup, the benefits of the Event API are paramount. More information about setup can be found in our [SendGrid Event API Documentation](https://sendgrid.com/docs/API_Reference/Webhooks/index.html). If you have any specific questions about the Event API please do not hesitate to contact our Support team via email, chat, or phone call.

Need additional functionality with your Event API integration? Check out the open-source [Event Kit App](https://github.com/sendgrid/eventkit), as well as out friends over at [Keen.io](https://keen.io/).
