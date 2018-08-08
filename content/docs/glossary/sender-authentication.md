---
seo:
  title: Sender authentication
title: Sender authentication
weight: 0
layout: page
navigation:
  show: false
---

In an attempt to clarify complex functionality, SendGrid is upgrading the name of Whitelabel. A whitelabel is now generally called sender authentication. A domain whitelabel is now called domain authentication. A link whitelabel is now called link branding. An IP Whitelabel is now called reverse DNS.

Sender authentication refers to the process of showing email providers that SendGrid has your permission to send emails on your behalf. To set up sender authentication, add DNS records to your hosting service. These DNS records associate your sending domain with SendGrid — when an inbox provider processes your email, they will see your domain instead of sendgrid.net. You can also set up sender authentication for the links in your email as well as dedicated IP addresses associated with your account (available with Pro level or higher accounts).

## 	Additional Resources

- [How to set up link branding]({{root_url}}/user-interface/sending-email/how-to-set-up-link-branding/)
- [How to set up domain authentication]({{root_url}}/user-interface/sending-email/how-to-set-up-domain-authentication/)
- [How to set up reverse DNS]({{root_url}}/user-interface/sending-email/how-to-set-up-reverse-dns/)
