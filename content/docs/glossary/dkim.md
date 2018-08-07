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

[DKIM](https://sendgrid.com/blog/what-is-dkim/) stands for DomainKeys Identified Mail which was designed to help ISPs prevent malicious email senders by validating email from specific domains.

Spoofers and phishers can be sending email to unwitting recipients by purporting to be from a trusted brand or sender. By “signing” email with DKIM, legitimate senders can label which domains belong to them, and by doing so, empower ISPs to block email streams that have not been properly authenticated using DKIM.

As one of the most popular email authentication methodologies, it works by using cryptographic technology that adds a digital signature to your message header. This DKIM signature validates and authorizes your domain name in the eyes of the receiver. The DKIM signature is created using a unique string of characters stored as a public key.

When your email is received, the public key is retrieved through the DNS and decrypted by the receiver to allow them to confidently verify the identity of your domain.

While DKIM authentication is an email best practice, it’s important to understand that a DKIM signature is limited in scope. It does not verify content or tell the receiver to treat the message any differently. Its main purpose is to help verify sender identity, which is an important factor (although not the only factor) when it comes to email delivery.

You can authenticate with DKIM yourself or the DKIM signature can be created by your sending MTA, but setting it up can be a complex process. If not done right, ISPs will block your email, particularly because incorrect implementation is a telltale sign of a spammer.

SendGrid automatically enables DKIM for all email to improve your [email deliverability]({{root_url}}/glossary/email-deliverability/), whether you’re on a shared IP or a dedicated one. This is just one more example of how SendGrid helps thousands of customers follow email best practices to ensure maximum delivery for their emails.

## 	Automated Security and Your DKIM Signature

When you set up a [authenticated domain]({{root_url}}/help-support/sending-email/how-to-set-up-domain-authentication/), you will be given the option of using [automated or manual security]({{root_url}}/help-support/sending-email/how-to-set-up-domain-authentication/#using-automated-security). When you select automated security, SendGrid will manage your DKIM and SPF records for you. This means that whenever you make a change to your account that could impact your deliverability, such as adding a new dedicated sending [IP address]({{root_url}}/glossary/ip-address/), SendGrid will automatically update your DNS settings and your DKIM signature.

**SendGrid will always provide you with a custom DKIM signature. However, your custom DKIM signature is only automatically updated if you select automated security when authenticating your domain. If you turn automated security OFF, you will be responsible for updating your DKIM signature whenever you make a change to your sending domain.**



 ### 	Example DKIM Record: Automated Security ON

```

subdomain.yourdomain.com. | CNAME | uXXXXXXX.wlXXX.sendgrid.net
s1._domainkey.yourdomain.com. | CNAME | s1._domainkey.uXXX.wlXXX.sendgrid.net.
s2._domainkey.yourdomain.com. | CNAME | s2._domainkey.uXXX.wlXXX.sendgrid.net.

```

 ### 	Example DKIM Record: Automated Security OFF

```

m1._domainkey.yourdomain.com. | MX | mx.sendgrid.net
s1.domainkey.yourdomain.com. | TXT | k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB
s2.domainkey.yourdomain.com. | TXT | v=spf1 include:sendgrid.net ~all

```