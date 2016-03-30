---
seo:
  title: Invalid SMTP API header
  description: Invalid SMTP API header
  keywords: event, smtp api, invalid, header, invalid smtp api header, x-smtpapi
title: Invalid SMTP API header
weight: 0
layout: page
zendesk_id: 204418493
navigation:
  show: true
---

When using the [X-SMTPAPI](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html) header, you may find from time to time that you have an invalid smtpapi header. You may see these errors in your [Email Activity](https://sendgrid.com/docs/Delivery_Metrics/email_activity.html) or [Event Notification](https://sendgrid.com/docs/Apps/event_notification.html) log. When you have these errors it is important to check your email for the details of the invalid smtpapi header.

_Example [Email Activity](https://sendgrid.com/docs/Delivery_Metrics/email_activity.html):_

<center><img class="wysiwyg-text-align-center" src="{{root_url}}/images/email_activity.jpg" alt="" width="799" height="362"></center>

_Example [Event Notification](https://sendgrid.com/docs/Apps/event_notification.html) log using our [EventKit](https://sendgrid.com/docs/VidGrid/Event_Notification/eventkit.html):_

<center><img class="wysiwyg-text-align-center" src="{{root_url}}/images/eventkit_log.jpg" alt="" width="802" height="525"></center>

_Example invalid smtpapi header email:_

> A message was received from this address by our systems that had errors in the smtpapi header, and cannot be processed. The error detected was: Error decoding SMTP API header: , or ] expected while parsing array, at character offset 50 (before ":{"%name%":["Ben","J...") If you require assistance in working with the SMTP API, please contact us at [support@sendgrid.com](mailto:support@sendgrid.com)

In this email you can find all the details you need to begin troubleshooting your invalid smtpapi header. In our example we can see the error happened "at character offset 50 (before ":{"%name%":["Ben","J...")". If we review the X-SMTPAPI header that was sent we should find what caused the issue.

_Example invalid smtpapi header:_

> {"to":["ben@sendgrid.com","joe@sendgrid.com","sub":{"%name%":["Ben","Joe"],"%role%":["%sellerSection%","%buyerSection%"]},"section":{"%sellerSection%":"Seller information for: %name%","%buyerSection%":"Buyer information for: %name%"},"category":["Orders"],"unique\_args":{"orderNumber":"12345","eventID":"6789"}}

Looking at the content of the header before "character offset 50" we can focus our attention and find the issue:

> {"to":["ben@sendgrid.com","joe@sendgrid.com","sub"

Looking at this we can see that the closing of the "to" section did not happen. The "to" section should have been:

> "to":["ben@sendgrid.com","joe@sendgrid.com"]

To either prevent or troubleshoot issues like this you can run your JSON through our [SMTP API Header Validator](https://sendgrid.com/docs/Utilities/smtpapi_validator.html). Additionally, [JSONLint](http://jsonlint.com/) or [JSONLintCompressor](http://jsonlint.com/?reformat=compress) can be used to help as well.

If you still need help, please use the links below.

 
