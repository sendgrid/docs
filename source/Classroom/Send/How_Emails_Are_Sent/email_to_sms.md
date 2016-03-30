---
seo:
  title: Email to SMS
  description: Email to SMS
  keywords: sms, short, service, carrier, media, gateway, 5724, provider, vtext, message, text, txt
title: Email to SMS
weight: 0
layout: page
zendesk_id: 202603863
navigation:
  show: true
---

SendGrid occasionally gets the question "Why isn't my email to sms working?"

The answer is...because the SMTP-to-SMS gateways have narrow bandwidth, due to the need for mobile carriers to predict network traffic, AND as a way to prevent spam to their users. Furthermore, mobile carriers are not incentivized to successfully deliver SMTP-to-SMS messages, since they often provide this as a free service. Senders will see deferrals and blocks if they attempt to send high volumes without reaching a payment agreement with mobile carriers ahead of time. 

If senders need this functionality, a different technology, such as  [Twilio](http://www.twilio.com/sms), would be more appropriate. 

Here’s a relevant comment about SMS from  [RFC 5724](http://www.ietf.org/rfc/rfc5724.txt):  
  SMS messages very often are delivered almost instantaneously (if the  
  receiving SMS client is online), but there is no guarantee for when  
  SMS messages will be delivered.  In particular, SMS messages between  
  different network operators sometimes take a long time to be  
  delivered (hours or even days) or are not delivered at all, so  
  applications SHOULD NOT make any assumptions about the reliability  
  and performance of SMS message transmission.

**Summary:**

Email to SMS will likely work for single messages sent occasionally, but will not work reliably or quickly for high volume critical alerts.

 

