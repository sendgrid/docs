---
seo:
  title: SSL vs. TLS
  description: SSL vs. TLS
  keywords:
title: SSL vs. TLS
group: delivery-optimization
weight: 0
layout: page
navigation:
  show: true
---

TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are protocols that provide data encryption and authentication between applications and servers in scenarios where that data is being sent across an insecure network, such as checking your email. The terms SSL and TLS are often used interchangeably or in conjunction with each other (TLS/SSL), but one is in fact the predecessor of the other — SSL 3.0 served as the basis for TLS 1.0, which as a result, is sometimes referred to as SSL 3.1. With this said though, _is there actually a practical difference between the two?_

It used to be believed that TLS v1.0 was marginally more secure than SSL v3.0, its predecessor. However, SSL v3.0 is getting very old and recent developments, such as the [POODLE](https://en.wikipedia.org/wiki/POODLE) vulnerability, have shown that SSL v3.0 is now completely insecure (especially for web sites using it). Even before the POODLE was set loose, the US Government had already mandated that SSL v3 not be used for sensitive government communications or for HIPAA-compliant communications. If that was not enough… POODLE certainly was. In fact, as a result of POODLE, SSL v3 is being disabled on web sites all over the world and for many other services as well.

SSL v3.0 is effectively “dead” as a useful security protocol. Places that still allow its use for web hosting are placing their “secure web sites” at risk; organizations that allow the use of SSL v3 to persist for other protocols (e.g. IMAP) should take steps to remove that support at the soonest software update maintenance window.

Subsequent versions of TLS — v1.1 and v1.2 — are _significantly more secure_ and fix many vulnerabilities present in SSL v3.0 and TLS v1.0. The newer TLS versions, if properly configured, prevent attacks and provide many stronger ciphers and encryption methods. SendGrid supports TLS v1.1 and higher.



[Read more about configuring ports with SendGrid]({{root_url}}/for-developers/sending-email/getting-started-smtp/)




