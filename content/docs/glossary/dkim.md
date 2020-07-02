---
seo:
  title: DKIM
  description: DKIM is an email authentication protocol that helps ISPs better identify legitimate email senders.
  keywords: dkim, domainkeys identified mail, dkim signature, enable dkim
title: DKIM
weight: 0
layout: page
navigation:
  show: false
---

DomainKeys Identified Mail (DKIM) is a validation method designed to help Internet Service Providers detect and prevent malicious email delivery. Because email has no built-in authentication mechanisms, it’s often spoofed in an attempt to extract information from a message’s recipient.

DKIM uses [public-key cryptography](https://www.twilio.com/blog/what-is-public-key-cryptography) to sign [email message headers](/glossary/header/)—optionally, the message body may also be signed. This signature allows receiving email servers to determine whether a message was sent by a domain owner and whether the message was altered in transit.

## How does DKIM Work?

DKIM is implemented using a [TXT](https://en.wikipedia.org/wiki/TXT_record) DNS record. The TXT record provides the public key that receiving mail servers use to verify the authenticity of a message.

One way to understand the DKIM process is to pretend you’re mixing paint. Your private key contains one mixing color like red. Your public key contains another mixing color like blue and the final mixed color, purple.

Let’s say you publish a public key that contains a mixing color, blue, and the final color, purple. Your private key is the color red, but only you know this. When you send a message, it will be signed with the color red.

When an email server receives a message from your domain, it will look up your public key and attempt to solve the puzzle. By combining the public mixing color, blue, with the message signature, red, the receiving server can be confident the message is from you because the result will be purple, the solution published in the public key.

Cryptography uses the same idea of formulas that are easy to calculate in one direction, like mixing paint, but really hard to reverse unless you have one of the inputs. Instead of paint, digital security methods like DKIM use large numbers and [trapdoor](https://en.wikipedia.org/wiki/Trapdoor_function) one-way functions.

![Public Key Cryptography illustration]({{root_url}}/img/public_key_cryptography.png "Public Key Cryptography")

_Alice encrypts a message with her private key, then sends the message to Bob. Bob decrypts the message with Alice's public key. Since the public key can only be used to decrypt messages signed with Alice's private key, we can trust that Alice was the author of the original message_.

## DKIM and SendGrid

SendGrid automatically enables DKIM for all email to improve your email deliverability, whether you’re on a shared IP or a dedicated one. This is just one more example of how SendGrid helps thousands of customers follow email best practices to ensure maximum delivery for their emails. For more information, see [DKIM Records Explained]({{root_url}}/ui/account-and-settings/dkim-records/).
