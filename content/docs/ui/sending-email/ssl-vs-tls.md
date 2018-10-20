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

TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are protocols that provide data encryption and authentication between applications and servers in scenarios where that data is being sent across an insecure network, such as checking your email. The terms SSL and TLS are often used interchangeably or in conjunction with each other (TLS/SSL), but one is in fact the predecessor of the other — SSL 3.0 served as the basis for TLS 1.0 which, as a result, is sometimes referred to as SSL 3.1. With this said though, _is there actually a practical difference between the 2?_

It used to be believed that TLS v1.0 was marginally more secure than SSL v3.0, its predecessor. However, SSL v3.0 is getting very old and recent developments, such as the [POODLE](https://en.wikipedia.org/wiki/POODLE) vulnerability, have shown that SSL v3.0 is now completely insecure (especially for web sites using it). Even before the POODLE was set loose, the US Government had already mandated that SSL v3 not be used for sensitive government communications or for HIPAA-compliant communications. If that was not enough… POODLE certainly was. In fact, as a result of POODLE, SSL v3 is being disabled on web sites all over the world and for many other services as well.

SSL v3.0 is effectively “dead” as a useful security protocol. Places that still allow its use for web hosting are placing their “secure web sites” at risk; organizations that allow the use of SSL v3 to persist for other protocols (e.g. IMAP) should take steps to remove that support at the soonest software update maintenance window.

Subsequent versions of TLS — v1.1 and v1.2 — are _significantly more secure_ and fix many vulnerabilities present in SSL v3.0 and TLS v1.0. The newer TLS versions, if properly configured, prevent attacks and provide many stronger ciphers and encryption methods. SendGrid supports TLS v1.1 and higher.

**Should You Be Using SSL or TLS?**
Both SSL 2.0 and 3.0 have been deprecated by the IETF (in 2011 and 2015, respectively). Over the years vulnerabilities have been and continue to be discovered in the deprecated SSL protocols (e.g. POODLE, DROWN). Most modern browsers will show a degraded user experience (e.g. line through the padlock or https in the URL bar, security warnings) when they encounter a web server using the old protocols. For these reasons, you should disable SSL 2.0 and 3.0 in your server configuration, leaving only TLS protocols enabled.

**Certificates are not the same as protocols**
Before anyone starts worrying that they need to replace their existing SSL Certificates with TLS Certificates, it’s important to note that certificates are not dependent on protocols. That is, you don’t need to use a TLS Certificate vs. an SSL Certificate. While many vendors tend to use the phrase “SSL/TLS Certificate”, it may be more accurate to call them “Certificates for use with SSL and TLS", since the protocols are determined by your server configuration, not the certificates themselves.

It’s likely you will continue to see certificates referred to as SSL Certificates because at this point that’s the term more people are familiar with, but we’re beginning to see increased usage of the term TLS across the industry. SSL/TLS is a common compromise until more people become familiar with TLS.

**Are SSL and TLS Any Different Cryptographically?**
In truth, the answer to this question is yes, but you can say the same about the historic versions of SSL 2 and 3 or the TLS versions 1 with 1.1, 1.2 or 1.3. SSL and TLS are both about the same protocol but because of the version differences, SSL 2 was not interoperable with version 3, and SSL version 3 not with TLS version 1. You could argue that Transport Layer Security (TLS) was just a new name for SSL v4 - essentially, we are talking about the same protocol.

Each newly released version of the protocol came and will come with its own improvements and/or new/deprecated features. SSL version one was never released, version two did but had some major flaws, SSL version 3 was a rewrite of version two (to fix these flaws) and TLS version 1 an improvement of SSL version 3. Since the release of TLS 1.0 the changes have been less significant, but never less important.

It’s worth noting here that SSL and TLS simply refer to the handshake that takes place between a client and a server. The handshake doesn’t actually do any encryption itself, it just agrees on a shared secret and type of encryption that is going to be used.

[Read more about configuring ports with SendGrid]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
