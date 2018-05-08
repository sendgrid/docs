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

Setting up reverse DNS on IP addresses allows mailbox providers to verify the sender when they do a reverse DNS lookup upon receipt of the emails you send. This differs from domain authentication in that, while you should have your IP addresses in your SPF records, setting up reverse DNS on the IP addresses does not require a change to SPF or DKIM records.

{% info %}
In an attempt to clarify complex functionality, SendGrid is upgrading the name of Whitelabel. A whitelabel is now generally called sender authentication. A domain whitelabel is now called domain authentication. A link whitelabel is now called link branding. An IP Whitelabel is now called reverse DNS.
{% endinfo %

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [How to set up reverse DNS]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_reverse_dns.html)
- [How to set up link branding]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_link_branding.html)
- [How to set up domain authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html)