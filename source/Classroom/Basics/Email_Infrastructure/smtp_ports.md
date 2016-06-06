---
layout: page
weight: 0
title: SMTP Ports
seo:
  title: SMTP Ports
  description: If you're having difficulty with SendGrid, you can connect via unencrypted or TLS on ports 25, 2525, and 587. You can connect via SSL on port 465.
navigation:
  show: true
---

{% info %}
If your host will not allow any sort of SMTP connection, please try sending your email through our [v3 Mail API]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) instead of over SMTP.
{% endinfo %}

Many hosting providers and ISPs block port 25 as a default practice. When trying to connect to smtp.sendgrid.net remember that ports 25, 2525, 587, and 465 are all available for use.
You can connect via unencrypted or TLS on ports 25, 2525, and 587. You can also connect via SSL on port 465. Keep in mind that many hosting providers and ISPs block port 25 as a default practice. If this is the case, contact your host/ISP to find out which ports are open for outgoing smtp relay.

{% info %}
We recommend port 587 to avoid any rate limiting that your server host may apply.
{% endinfo %}

Outbound connections for emails sent via SendGrid utilize opportunistic encryption using TLS. When we deliver your message to its recipient we will attempt to negotiate a TLS connection with the recipient’s mail server. If successful, we send using TLS. If not, a plain connection is used.

When sending through SendGrid's SMTP Relay, you can [add custom SMTP headers]({{root_url}}/API_Reference/SMTP_API/index.html) to control how your email is sent and what information is included.

