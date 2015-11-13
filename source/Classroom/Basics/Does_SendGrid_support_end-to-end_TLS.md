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

Our system is designed to&nbsp;opportunistically try outbound TLS, meaning that if your clients ESP accepts an inbound TLS connection, we will send the email over TLS.

We also offer the ability to [enforce TLS encryption](https://sendgrid.com/docs/API_Reference/Web_API_v3/Settings/enforced_tls.html) when we attempt to deliver email to your recipients.&nbsp;The Enforced TLS feature&nbsp;specifies whether or not the recipient is required to support TLS or have a valid certificate.&nbsp;

