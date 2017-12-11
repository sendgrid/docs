---
seo:
  title: Integrating with the SMTP API
  description: Set your systems up to use SendGrid SMTP API
  keywords: ports, connection, SMTP, send email, integrate, rate limits, setting up
title: Integrating with the SMTP API
weight: 950
layout: page
navigation:
  show: true
---

- [Integrating with SendGrid](#-Integrating-with-SendGrid])
- [Ports](#-SMTP-Ports)
- [Rate limits](#-Rate-limits)

{% anchor h2 %}
Integrating with Sendgrid
{% endanchor %}

*To integrate with SendGrids SMTP API:*

1. [Create an API Key](https://app.sendgrid.com/settings/api_keys) with at least "Mail" permissions.
2. Set the server host in your email client or application to `smtp.sendgrid.net`.
    * This setting is sometimes referred to as the _external SMTP server_ or the _SMTP relay_.
3. Set your username to `apikey`.
4. Set your password to the API key generated in step 1.
5. Set the port to `587`.

{% anchor h3 %}
SMTP Ports
{% endanchor %}
    - For an unencrypted or a [TLS connections]({{root_url}}/Classroom/Basics/Email_Infrastructure/ssl_vs_tls.html), use port `25`, `2525`, or `587`.
    - For a [SSL connections]({{root_url}}/Classroom/Basics/Email_Infrastructure/ssl_vs_tls.html), use port `465`.

{% anchor h3 %}
Rate limits
{% endanchor %}

* You may send up to **100 messages per SMTP connection**.
* You may open up to **10 concurrent connections from a single server**.
