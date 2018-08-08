---
seo:
  title: Reverse DNS
  description: Reverse DNS is a method of resolving an IP address into a domain name.
  keywords: DNS, reverse DNS, domain name service, domain
title: Reverse DNS
weight: 0
layout: page
navigation:
  show: false
---

Setting up reverse DNS on IP addresses allows mailbox providers to verify the sender when they do a reverse DNS lookup upon receipt of the emails you send. When you update your DNS provider with a DNS record provided by SendGrid, and then send mail over your IP, the recipient's email service provider performs a reverse DNS lookup (rDNS) using an A Record (address record). An A Record maps your domain to your IP address. When a mailbox provider looks up your A Record, they see your SendGrid IP address. When they look at your IP address, they see the rDNS that match your A Record. This circular checking proves your SendGrid IP association with your domain and your domain association with your SendGrid IP.

<call-out>

In an attempt to clarify complex functionality, SendGrid is upgrading the name of Whitelabel. A whitelabel is now generally called sender authentication. A domain whitelabel is now called domain authentication. A link whitelabel is now called link branding. An IP Whitelabel is now called reverse DNS.

</call-out>

## 	Additional Resources

- [How to set up link branding]({{root_url}}/ui/sending-email/how-to-set-up-link-branding/)
- [How to set up domain authentication]({{root_url}}/ui/sending-email/how-to-set-up-domain-authentication/)
- [How to set up reverse DNS]({{root_url}}/ui/sending-email/how-to-set-up-reverse-dns/)
