---
seo:
  title: Does SendGrid support end-to-end TLS?
  description: Does SendGrid support end-to-end TLS?
  keywords: encryption, tls, encrypt, 587, enforce
title: Does SendGrid support end-to-end TLS?
weight: 0
layout: page
zendesk_id: 202523426
navigation:
  show: true
---

By default, our system is designed to opportunistically try outbound TLS v.1.1 when attempting to deliver email. This means that if your recipient's email server accepts an inbound TLS v.1.1 connection, we will deliver the email over a TLS encrypted connection. If the server does not support TLS, we will deliver the message over the default unencrypted connection. 

We also offer the ability to _enforce TLS encryption_ when we attempt to deliver email to your recipients. The [Enforced TLS feature](https://sendgrid.com/docs/API_Reference/Web_API_v3/Settings/enforced_tls.html) specifies whether or not the recipient is required to support TLS v.1.1 or higher or have a valid certificate before we deliver an email to them. 
