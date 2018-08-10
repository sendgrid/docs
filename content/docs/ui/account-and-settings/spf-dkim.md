---
seo:
  title: Internet Standards (SPF and DKIM) and Deliverability
  description: Internet Standards (SPF and DKIM) and Deliverability
  keywords: spf, dkim, white, label, whitelabel, standards, 10, dns
title: Internet Standards (SPF and DKIM) and Deliverability
weight: 0
group: sender-authentication
layout: page
navigation:
  show: true
---

For standards like SPF and DKIM / DomainKeys, whether they improve deliverability or bypass filters is entirely at the discretion of the validating receivers. It is expected that messages from a sender with a good reputation would be subject to less scrutiny by the receiver's filters. [1] In other words, omitting these standards usually doesn't hurt, but providing them can only help deliverability.

Some other things to consider:

- [DKIM](http://tools.ietf.org/html/rfc4871) is an internet standards track standard and deprecates [DomainKeys](http://tools.ietf.org/html/rfc4870)
- If you turn off DomainKeys we'll still sign the email with DKIM which is not affected by the [on behalf of issue]({{root_url}}/ui/sending-email/troubleshooting-sender-authentication/), and is designed for the type of third-party signing we do.
- An SPF record is invalid if it requires [more than 10 DNS lookups]({{root_url}}/ui/account-and-senttings/spf-records/)
- An SPF record is invalid if you have more than one SPF record for a given domain. In this case you will want to merge the additional SPF records into one SPF record.

[1] [DKIM Frequently Asked Questions](http://www.dkim.org/info/dkim-faq.html)
