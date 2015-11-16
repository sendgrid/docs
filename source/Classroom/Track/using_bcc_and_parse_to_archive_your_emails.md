---
seo:
  title: Using BCC and Parse to archive your emails. 
  description: Using BCC and Parse to archive your emails. 
  keywords: parse, bcc, save, archive
title: Using BCC and Parse to archive your emails. 
weight: 0
layout: page
zendesk_id: 205428327
navigation:
  show: true
---

You can use the BCC (SMTPAPI or WebAPI) functionality to copy an email to SendGrid's Inbound Parse. Then, you can grab the content, headers, etc and save to your database.

Just a heads up, this will use one credit for the send and one credit for the BCC.  
http://stackoverflow.com/questions/29639059/sendgrid-get-email-contents-c-sharp/29652746#29652746

