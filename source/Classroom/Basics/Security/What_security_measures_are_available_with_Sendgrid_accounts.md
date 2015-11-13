---
seo:
  title: What security measures are available with Sendgrid accounts?
  description: What security measures are available with Sendgrid accounts?
  keywords: security, encryption, sales, 2fa
title: What security measures are available with Sendgrid accounts?
weight: 0
layout: page
zendesk_id: 204991817
navigation:
  show: true
---

 **Encryption options**

All email sent via SendGrid will utilize opportunistic encryption using [TLS](https://sendgrid.com/docs/Glossary/tls.html). This means that if your recipients’ mail servers are configured to support TLS, it will be impossible for someone along the route to intercept and/or modify your messages. With opportunistic TLS if the recipient mail server does not support the encryption then the message will then be sent without.

You can read more about which mail servers support TLS in [this blog post](https://sendgrid.com/blog/sendgrid-and-the-future-of-email-security/).

Additionally, we offer [Enforced TLS](https://sendgrid.com/docs/API_Reference/Web_API_v3/Settings/enforced_tls.html). Enforced TLS is different from Opportunistic TLS because if the mail server does not support the encryption then instead of switching to standard delivery we drop the message and send a block event with “TLS required but not supported” as the description. Enabling this option ensures that no messages are sent unencrypted. You can turn Enforced TLS on in your [account settings](https://sendgrid.com/docs/API_Reference/Web_API_v3/Settings/enforced_tls.html).

&nbsp;

&nbsp;

**2-Factor Authentication**

As an optional&nbsp;security precaution SendGrid also uses Two Factor Authentication during the login process. It requires not only a password and username but also something that only the user has access to like a physical token, a phone application, or device. You can turn the [Two Factor Authentication](https://sendgrid.com/docs/User_Guide/Account/Account_Settings/two_factor_authentication.html) feature on in your account settings.

