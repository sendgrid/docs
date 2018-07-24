---
seo:
  title: Domain authentication
title: Domain authentication
weight: 0
layout: page
navigation:
  show: false
---

Domain authentication shows email providers that SendGrid has your permission to send emails on your behalf. To give SendGrid permission, you point DNS entries from your DNS provider (like GoDaddy, Rackspace, or Cloudflare) to SendGrid. Your recipients will no longer see the “via sendgrid.net” message on your emails.

Even though this is a small change from your recipients' perspective, this change has a huge positive impact on your reputation as a sender and your email deliverability. Email service providers distrust messages that don't have domain authentication set up because they can not be sure that the message comes from you. Explicitly stating that it comes from you increases your reputation with email service providers which makes it much less likely that they will filter your mail and not allow it get to your recipient's inbox, which increases your deliverability. You are also explicitly showing your recipients that this email comes from you, so they are less likely to mark your mail as spam.

<call-out>

In an attempt to clarify complex functionality, SendGrid is upgrading the name of Whitelabel. A whitelabel is now generally called sender authentication. A domain whitelabel is now called domain authentication. A link whitelabel is now called link branding. An IP Whitelabel is now called reverse DNS.

</call-out>

## 	Additional Resources
 	
- [How to set up domain authentication]({{root_url}}/help-support/getting-started//how-to-set-up-domain-authentication.html)
- [How to set up link branding]({{root_url}}/help-support/getting-started/how-to-set-up-link-branding.html)
- [How to set up reverse DNS]({{root_url}}/help-support/getting-started/how-to-set-up-reverse-dns.html)
