---
seo:
  title: Deferral
title: Deferral
weight: 0
layout: page
navigation:
  show: false
---

A deferred status can occur when an ISP or mailbox provider is for some reason not ready to accept email from your IP address. Instead of blocking or bouncing the message, the provider will defer or temporarily delay receiving the message and wait for the email to be resent.

There are several reasons a provider will give this feedback. Some common reasons are that the provider does not recognize the IP from which a message originates; or it could just be that their system is operating in such a way that they cannot accept the email at that specific time. If, upon your resending, the provider determines that it is ready to trust you as a sender or their system operations are back to normal, the email will be accepted.

SendGrid will retry delivery of a deferred email on behalf of our customers for 72 hours from the time of the first deferral, after which time the email address will be placed on the Bounce Suppressions list. If you have built your own email solution, you will want to build this intelligence into your code in order to avoid having to retry deliveries manually.
