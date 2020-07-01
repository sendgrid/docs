---
seo:
  title: SPF
  description: SPF is an email authentication standard that helps ISPs better identify legitimate email senders.
  keywords: spf, sender policy framework
title: SPF
weight: 0
layout: page
navigation:
  show: false
---

Sender Policy Framework (SPF) is an open standard for authenticating email that was originally developed by AOL. SPF attempts to ensure that the IP address from which a message was sent is approved to send email by a domain’s owner.

Imagine you own the domain `example.com`.You also have an email server that uses the IP address `127.0.0.1`. You may use an SPF record to designate this IP address, `127.0.0.1`, as the only IP allowed to send email using an `example.com` email address. When an email server receives a message from `sender@example.com`, it can check the IP address that delivered the message. If the IP is anything other than `127.0.0.1`, the SPF check will fail, informing the receiving server that the message is from an unauthorized source.

## SPF Records

An SPF record is implemented using a [TXT](https://en.wikipedia.org/wiki/TXT_record) DNS record. The TXT record has several values, the first being `v=spf1`. This first value indicates that the TXT record is a version 1 SPF record.

The remaining mechanisms in an SPF record are "INCLUDE," "A," "MX," "IP4 and IP6," and "REDIRECT." These mechanisms specify either an approved IP address directly or a domain that will resolve to an IP address.

SPF is one of several effective ways to check an email’s legitimacy, and this article provides only a brief overview. For more information about SPF, see [SPF Records Explained]({{root_url}}/ui/account-and-settings/spf-records/).
