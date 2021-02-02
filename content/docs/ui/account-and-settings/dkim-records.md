---
seo:
  title: DKIM Records Explained
  description: DKIM Records Explained
  keywords: permission, dkim, sender verification, include, return, path, sender, permitted, forgery, spoofing, spoof, fail, failed, validation, validate
title: DKIM Records Explained
group: account-management
weight: 0
layout: page
navigation:
  show: true
---

DomainKeys Identified Mail (DKIM) is an authentication standard used to prevent email spoofing. Specifically, DKIM attempts to prevent the spoofing of a _domain_ that's used to deliver email.

DKIM employs the concept of a domain owner who controls the DNS records for a domain. When sending email with DKIM enabled, the sending server signs the messages with a private key. A domain owner also adds a DKIM record, which is a modified [TXT record](https://en.wikipedia.org/wiki/TXT_record), to the DNS records on sending domain. This TXT record will contain a public key that's used by receiving mail servers to verify a message's signature. The DKIM [public-key cryptography](https://www.twilio.com/blog/what-is-public-key-cryptography) process allows recipients to be confident of a sender's authenticity.

## DKIM mail flow

To understand DKIM, it may be helpful to understand how email is sent when DKIM is added to the process. Imagine an email sent by `sender@example.com`. For DKIM to work properly, the following steps take place:

1. Before sending the message, the sending server signs the email using a private key.
2. When the message is delivered, the receiving server obtains the DKIM record from the DNS records for `example.com`.
3. The receiving server then uses the public key in the DKIM record to verify the message’s signature.
4. If the DKIM check passes, the receiving server can be confident the message was sent by the address in the `return-path` and wasn’t altered in transit.
5. If the DKIM check fails, the message is likely illegitimate and will be processed using the receiving server’s failure process.

![A diagram of the DKIM traffic flow described in the steps above this image]({{root_url}}/img/dkim_mail_flow.jpeg 'DKIM mail flow diagram')

While DKIM authentication is an email best practice, it’s important to understand that a DKIM signature is limited in scope. It does not verify content or tell the receiver to treat the message any differently. Its main purpose is to help verify [Sender Identity]({{root_url}}/for-developers/sending-email/sender-identity/), which is an important factor (although not the only factor) when it comes to email delivery.

You can authenticate with DKIM yourself, or the DKIM signature can be created by your sending message transfer agent ([MTA]({{root_url}}/glossary/mta/)). Setting up DKIM can be a complex process. If not done right, Internet service providers (ISPs) will block your email, particularly because incorrect implementation is a sign of a spammer.

SendGrid automatically enables DKIM for all email to improve your email deliverability, whether you’re on a shared IP or a dedicated one. This is just one more example of how SendGrid helps thousands of customers follow email best practices to ensure maximum delivery for their emails.

## Automated Security and Your DKIM Signature

When you set up an authenticated domain, you will be given the option of using automated or manual security. When you select automated security, SendGrid will manage your DKIM and [SPF]({{root_url}}/ui/account-and-settings/spf-records/) records for you. This means that whenever you make a change to your account that could impact your deliverability, such as adding a new dedicated sending IP address, SendGrid will automatically update your DNS settings and your DKIM signature.

<call-out>

SendGrid will always provide you with a custom DKIM signature. However, your custom DKIM signature is only automatically updated if you select automated security when [authenticating your domain]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). If you turn automated security OFF, you will be responsible for updating your DKIM signature whenever you make a change to your sending domain.

</call-out>

### Example DKIM Record: Automated Security ON

```text
subdomain.yourdomain.com. | CNAME | uXXXXXXX.wlXXX.sendgrid.net
s1._domainkey.yourdomain.com. | CNAME | s1.domainkey.uXXX.wlXXX.sendgrid.net.
s2._domainkey.yourdomain.com. | CNAME | s2.domainkey.uXXX.wlXXX.sendgrid.net.
```

### Example DKIM Record: Automated Security OFF

```text
em1234.yourdomain.com | MX | mx.sendgrid.net
em1234.yourdomain.com | TXT | v=spf1 include:sendgrid.net ~all
m1._yourdomain.com | TXT | k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB
```

<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">

### Do you want expert help to get your email program started on the right foot?

Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.

</call-out-link>

## Additional resources

- [Sender Identity](/for-developers/sending-email/sender-identity/)
- [Domain Authentication](/ui/account-and-settings/how-to-set-up-domain-authentication/)
- [Single Sender Verification](/ui/sending-email/sender-verification/)
- [How to set up link branding]({{root_url}}/ui/account-and-settings/how-to-set-up-link-branding/)
- [How to set up reverse DNS]({{root_url}}/ui/account-and-settings/how-to-set-up-reverse-dns/)
- [Troubleshooting Sender Authentication]({{root_url}}/ui/account-and-settings/troubleshooting-sender-authentication/)
