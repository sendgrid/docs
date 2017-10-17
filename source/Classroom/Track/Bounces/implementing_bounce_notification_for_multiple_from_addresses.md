---
seo:
  title: Implementing Bounce Notification For Multiple From Addresses
  description: Implementing Bounce Notification For Multiple From Addresses
  keywords: 
title: Implementing Bounce Notification For Multiple From Addresses
weight: 0
layout: page
zendesk_id: 200185178
navigation:
  show: true
---

Hi all,

We send emails from multiple FROM addresses, and it is important that email bounces get sent back to the person sending the message. After a bit of digging around in the SendGrid SMTP API & Event Notification API we managed to implement a solution. Here's how:

1. When sending your emails, you need to add an X-SMTPAPI header to each message which includes the **_from_** address of the sender. I also recommend including the subject as this is useful for when you send the bounce response back to the sender. 
  
The format of the X-SMTPAPI header is important. The value of the header must be in JSON format & look like this: { "unique\_args" : { "from" : "from\_email\_address", "subject" : "subject\_line" }}. The "from" & "subject" parameters can be different, that's just what we did - but the important bit is the _unique\_args_ wrapper. 
  
There is documentation & sample code on how to add the header here: [http://sendgrid.com/docs/API\_Reference/SMTP\_API/index.html](http://wiki.sendgrid.com/doku.php?id=smtp_api)
2. You need to create a publicly accessible page on your site that accepts a HTTP POST from the SendGrid Event Notification API (http://sendgrid.com/docs/API\_Reference/Webhooks/event.html). There is sample code on the wiki. The important thing to note here is that SendGrid will also POST the custom header values you specified in the X-SMTPAPI header above ("from" & "subject" in our case). These are the key to sending your bounce response. 
  
Within your custom page, you can read the form values for **email** (the failed address), **from** (your custom header with the sender address), **reason** (the reason for the failure), and if you've added it, **subject**. With all this you can build an email message and send it back to the sender. You may also want to check the **event** form value to only process events of type **_bounce_**.
3. The final step is to hook up your notification POST page to the SendGrid API, just log into your account and go to **Developers** > **Event Notification**.

Cheers,  
Anthony.

