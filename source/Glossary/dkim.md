---
seo:
  title: DKIM
  description: DKIM is an email authentication protocol that helps ISPs better identify legitimate email senders.
  keywords: dkim, domainkeys identified mail, dkim signature, enable dkim
title: DKIM
weight: 0
layout: page
navigation:
  show: true
---

[DKIM](https://sendgrid.com/blog/what-is-dkim/) stands for DomainKeys Identified Mail which was designed to help ISPs prevent malicious email senders by validating email from specific domains.

Spoofers and phishers can be sending email to unwitting recipients by purporting to be from a trusted brand or sender. By “signing” email with DKIM, legitimate senders can label which domains belong to them, and by doing so, empower ISPs to block email streams that have not been properly authenticated using DKIM.

As one of the most popular email authentication methodologies, it works by using cryptographic technology that adds a digital signature to your message header. This DKIM signature validates and authorizes your domain name in the eyes of the receiver. The DKIM signature is created using a unique string of characters stored as a public key.

When your email is received, the public key is retrieved through the DNS and decrypted by the receiver to allow them to confidently verify the identity of your domain.

While DKIM authentication is an email best practice, it’s important to understand that a DKIM signature is limited in scope. It does not verify content or tell the receiver to treat the message any differently. Its main purpose is to help verify sender identity, which is an important factor (although not the only factor) when it comes to email delivery.

You can authenticate with DKIM yourself or the DKIM signature can be created by your sending MTA, but setting it up can be a complex process. If not done right, ISPs will block your email, particularly because incorrect implementation is a telltale sign of a spammer.

SendGrid automatically enables DKIM for all email to improve your [email deliverability]({{root_url}}/Glossary/email_deliverability.html), whether you’re on a shared IP or a dedicated one. This is just one more example of how SendGrid helps thousands of customers follow email best practices to ensure maximum delivery for their emails.
