---
layout: page
weight: 0
title: SMTP Ports
seo:
  title: SMTP Ports
  description: "You may connect with SendGrid over a variety of SMTP ports: unencrypted or with TLS on ports 25, 2525, and 587 and via SSL on port 465."
  keywords: smtp port, smtp ports
navigation:
  show: true
---

Many hosting providers and ISPs block port 25 as a default practice. When trying to connect to smtp.sendgrid.net remember that ports 25, 2525, 587, and 465 are all available for use.

You can connect via unencrypted or TLS on ports 25, 2525, and 587. You can connect via SSL on port 465.

Outbound connections for emails sent via SendGrid utilize opportunistic encryption using TLS. When we deliver your message to its recipient we will attempt to negotiate a TLS connection with the recipient’s mail server. If successful, we send using TLS. If not, a plain connection is used.
