---
seo:
  title: SMTP Server
  description: SMTP server (Simple Mail Transfer Protocol) is an applications used to send email and react to response codes from receiving servers.
  keywords: smtp server
title: SMTP Server
weight: 0
layout: page
navigation:
  show: false
---

An SMTP server is used to send email. Though server is in the name, they do not necessarily reside on an entire machine. Rather, an [SMTP server is an application]({{site.blog_url}}/what-is-an-smtp-server/) that runs all the time awaiting new mail to send.

Email is sent using SMTP—Simple Mail Transfer Protocol. At its most basic, an SMTP server must speak this protocol. Modern SMTP servers must also consider methods for authenticating, such as DKIM and SPF. Authenticating email is one of the best ways to signal to receiving servers that the email you are sending is legitimate.

When sending large amounts of email, SMTP servers need to be able to react intelligently to response codes from receiving servers. Some email providers, such as Yahoo! Mail and AOL, will throttle the number of emails they allow through at a time. In that case, the servers return error codes to note temporary unavailability.

Throttling can pose a significant deliverability problem for applications sending [transactional emails](https://sendgrid.com/transactional-email) (emails triggered by a user’s interaction with a web application, such as password changes or purchase receipts). In these instances, a business or app is not relaying the vital information their users expect, because their SMTP servers cannot react to the error response codes. When this happens, email deliverability rates drop, affecting customer satisfaction and retention.

SendGrid wrote its own SMTP servers from scratch to efficiently send billions of emails per month. SendGrid customers all receive email authentication and SendGrid automatically reacts to throttling and other responses from receiving servers. For better deliverability, SendGrid automatically works with every email provider’s feedback loops to identify spam. SendGrid customers also have access to detailed analytics of all email sent through its SMTP servers.
