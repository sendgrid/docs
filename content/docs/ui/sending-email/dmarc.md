---
seo:
  title: Everything about DMARC
  description: Everything about DMARC
  keywords: security, secure, dmarc, spf, dkim, sender verification, wizard, rua, reject, quarantine
title: Everything about DMARC
group: delivery-optimization
weight: 0
layout: page
navigation:
  show: true
---

This article provides an overview of Domain-based Message Authentication, Reporting and Conformance (DMARC). You will learn how DMARC works and how it applies to your Sender Identity or From address. You should already be familiar with [DNS records]({{root_url}}/glossary/dns/), [IP addresses]({{root_url}}/glossary/ip-address/), and the general [flow of web traffic](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work) to get the most from this article. If you need a refresher on these topics, resources are linked throughout this page.

## What is DMARC?

DMARC is a powerful way to verify the authenticity of an email’s sender and prevent malicious senders from damaging your sender reputation.

To understand DMARC, let's first understand the problem DMARC attempts to solve: email spoofing.

Email spoofing is the practice of sending email with a forged From address. Note that an email actually has two From addresses: the Header From and Envelope From. DMARC is concerned only with the spoofing of the Envelope From (also known as the `return-path`) address. See our [spoofing glossary entry]({{root_url}}/glossary/spoofing/) for more information about spoofing and From addresses.

DMARC relies on two authentication protocols to prevent spoofing: Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM).

## Sender Policy Framework

The strategy employed by SPF is to add a [TXT record](https://en.wikipedia.org/wiki/TXT_record) to a domain’s [DNS](/glossary/dns/). The TXT record specifies which IP addresses are allowed to send email for the domain.

### SPF mail flow

Imagine an email server receives a message and checks the Envelope From (`return-path`). The return path is `sender@example.com`. To perform an SPF check, the following steps take place.

1. The receiving email server retrieves the SPF record from the DNS records for the `example.com` domain.
2. The receiving server then checks the SPF record for all the IP addresses that are approved to send email on behalf of the domain.
3. If the SPF check passes, the receiving server can be confident the message was sent from an approved sending server and will continue processing the message.
4. If the SPF check fails, the message is likely illegitimate and will be processed using the receiving server’s failure process.

![A diagram of the SPF traffic flow described in the steps above this image]({{root_url}}/img/spf_mail_flow.jpeg "SPF mail flow diagram")

For more on SPF, see [SPF Records Explained](/ui/account-and-settings/spf-records/).

## DomainKeys Identified Mail

DomainKeys Identified Mail (DKIM) uses [public-key cryptography](https://www.twilio.com/blog/what-is-public-key-cryptography) to sign a message. Like SPF, DKIM is implemented with a TXT record. Unlike SPF, the DKIM TXT record provides a public key that receiving mail servers can use to verify the authenticity of a message.

Remember, the problem with spoofing is forgery of the From address. However, by signing the From address, among other headers, and providing a public key to verify the signature, receiving servers can corroborate the authenticity of the sender.

### DKIM mail flow

Let’s again imagine an email sent by `sender@example.com`. For DKIM to work properly, the following steps take place:

1. Before sending the message, the sending server signs the email using a private key.
2. When the message is delivered, the receiving server obtains the DKIM record from the DNS records for `example.com`.
3. The receiving server then uses the public key in the DKIM record to verify the message’s signature.
4. If the DKIM check passes, the receiving server can be confident the message was sent by the address in the `return-path` and wasn’t altered in transit.
5. If the DKIM check fails, the message is likely illegitimate and will be processed using the receiving server’s failure process.

![A diagram of the DKIM traffic flow described in the steps above this image]({{root_url}}/img/dkim_mail_flow.jpeg "DKIM mail flow diagram")

For more information about DKIM, see [DKIM Records Explained](/glossary/dkim/).

## Domain-based Message Authentication, Reporting and Conformance

If SPF and DKIM already help validate an email's sender, what does DMARC add?

### Why we need DMARC

Think of DMARC _not_ as an independent authentication protocol but as a framework for handling SPF and DKIM failures and reporting those failures to domain owners.

* DMARC allows domain owners to specify what should happen if either or both SPF and DKIM checks fail. Neither SPF nor DKIM provide this functionality on their own. This means that without DMARC a sender has no say in whether a failing message is bounced, sent to a spam folder, or handled in some other way.
* A sender receives no feedback about SPF and DKIM failures without DMARC, so senders have little chance to combat or even understand the delivery trends of their domain, often called a "[reputation monitoring](/glossary/reputation-monitoring/)."
* SPF and DKIM are independent of each other, but neither provide thorough spoofing protection on their own.

DMARC addresses these issues by building on top of SPF and DKIM. SPF and DKIM handle the Domain-based Message Authentication part of DMARC.

DMARC adds the Reporting and Conformance piece on its own. Like SPF and DKIM, DMARC is implemented using a TXT DNS record. This record allows receiving email servers to fetch failure processing instructions from domain owners.

### DMARC Records

<call-out>

"If you know how to view DNS records (e.g. using the 'dig' command), you can also check to see if [service providers] publish a DMARC TXT Resource Record. This doesn’t necessarily mean they support DMARC for the email they receive (though it’s a good indication), but it does indicate they use DMARC to protect outbound mail." — [DMARC.org](https://dmarc.org/wiki/FAQ)

</call-out>

#### Example DMARC record

```text
v=DMARC1\;p=none\;rua=mailto:dmarc@sendgrid.com\;ruf=mailto:dmarc@sendgrid.com\;rf=afrf\;pct=100
```

A DMARC record contains several tags separated by semicolons, ;. Two of the tags are required, `v` (version) and `p` (policy).

##### Version tag

The version, `v=DMARC1`, tells receiving servers that the DNS TXT record is a DMARC record.

##### Policy tag

The policy, `p`, can be one of three values, `none`, `quarantine`, or `reject`. DMARC policies are the mechanism domain owners use to specify how a receiving email server should handle SPF and DKIM failures.

1. `p=none`: No action should be taken. Even if a failure occurs, the message should be delivered. Though no action is taken on the message, the failure is included in reports sent to the domain owner.
2. `p=quarantine`: Failures should be quarantined. This usually means the message is sent to the spam folder. Again, the failure will be included in reports to the domain owner.
3. `p=reject`: Failures will be rejected. This usually means that the message will be deleted. The message may also be bounced to the Envelope From address.

##### Report and report-related tags

Where do the failure reports go? The address assigned to  `rua=` tells receiving email servers where to deliver aggregate reports. The address assigned to `ruf=` tells receiving email servers where to send forensic reports.

1. Aggregate reports are sent daily by default and don’t include detailed information about individual failures.
2. Forensic reports send detailed information about individual failures at the time of failure. The email address assigned to `ruf` must also use the domain on which the DMARC record exists.

The request format, `rf=afrf`, tells receiving servers how to format reports for the domain owner. [Authentication Failure Reporting Format](https://tools.ietf.org/html/rfc6591), `afrf`, is the default and is an extension of [Abuse Reporting Format](https://en.wikipedia.org/wiki/Abuse_Reporting_Format).

The `fo` tag tells receiving servers what type of failures to report. There are four possible values for this tag.

1. `fo=0`: Send a report if _both_ SPF and DKIM checks do not pass. This is the default value.
2. `fo=1`: Send a report if _either_ SPF or DKIM checks do not pass.
3. `fo=d`: Send a report only if the DKIM check does not pass.
4. `fo=s`: Send a report only if the SPF check does not pass.

The `ri` tag sets the interval in seconds at which a domain owner wishes to receive aggregate reports. The default is, `86400`—that’s 24 hours in case you don’t have your calculator out.

##### Alignment tags

There are tags for both SPF, `aspf`, and DKIM, `adkim`, alignment. Alignment is a way of qualifying how strictly DKIM and SPF values should be applied to pass a check. The options are either `s` for strict or `r` for relaxed.

* Strict: Only `return-path` domains that match the domain set in the SPF or DKIM record exactly will pass.
* Relaxed: Any `return-path` domain matching the root of the domain set in the SPF or DKIM record will pass. This allows [CNAME](/glossary/cname/) addresses to pass a check.

##### Subdomain tag

If a domain owner needs to specify different policies for subdomains, they can use the `sp` tag. Like the policy tag, `p`, the possible values for the `sp` tag are `none`, `quarantine`, and `reject`. This means you can, for example, apply a reject policy to your root domain and a quarantine policy for all its subdomains.

##### Percent tag

The percent tag, `pct`, specifies the percentage of email to which your DMARC policy will be applied. The possible values are `1` through `100`. For example, if your policy is set to `quarantine`, and your percent is set to `50`, half of all failing mail will be quarantined. This tag value can be adjusted as you learn more about DMARC failures on your domain.

### DMARC mail flow

![A diagram of the DMARC mail flow]({{root_url}}/img/dmarc_mail_flow.jpeg "DMARC mail flow diagram")

## How DMARC Applies to a Sender Identity

When sending email via a service provider such as SendGrid, you will be asked to [authenticate a domain]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) or [verify a Single Sender]({{root_url}}/ui/sending-email/sender-verification/#adding-a-sender). However, what happens if you verify a Sender Identity using a `gmail.com`, `yahoo.com`, `aol.com`, or a similar address? In other words, what happens if your Envelope From address is `sender@gmail.com`?

As you can guess, major mail providers such as Google, Microsoft, and others implement DMARC to protect their customers and prevent abuse. Let's use Yahoo and the email address `sender@yahoo.com`, as an example.

Yahoo has SPF, DKIM, and DMARC policies. Yahoo’s DNS records will approve domains such as yahoo.com and the IP addresses Yahoo controls. SendGrid domains and IP addresses will not be included in Yahoo's approved domains and IP addresses.

When you send a message from `sender@yahoo.com` to `customer@gmail.com` using SendGrid, a Gmail server will receive the message. Gmail will then look up Yahoo’s SPF and DKIM records because `yahoo.com` is the domain in the return-path message header.

The Gmail receiving server will determine that the message was sent using a SendGrid IP address and was not signed by a Yahoo private key. Both SPF and DKIM will fail, causing Gmail to employ the DMARC failure policy specified by Yahoo.

Essentially, Gmail, or any other receiving email server, has no way of knowing whether you are using SendGrid to send email for legitimate purposes or spoofing Yahoo's domain.

This is why SendGrid recommends [authenticating a domain]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) that you _do_ control. The SendGrid domain authentication process provides CNAME records that you place on your own domain to approve SendGrid's IP addresses. SendGrid will automatically manage your SPF and DKIM records, protecting your domain’s reputation.

### Popular email providers that enforce DMARC

Many of the popular email providers implement DMARC, including:

* AOL
* Gmail
* Microsoft (Hotmail, MSN)
* Outlook
* Yahoo

Providers with DMARC policies may reject email with messages like, **"521 5.2.1 : (DMARC) This message failed DMARC Evaluation and is being refused due to provided DMARC Policy"**.

If you see a bounce with one of these failure messages, the message has been discarded and tracked as a [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

## Additional Resources

* [How to Implement DMARC]({{root_url}}/ui/sending-email/how-to-implement-dmarc/)
* [Sender Identity](/for-developers/sending-email/sender-identity/)
* [Domain Authentication](/ui/account-and-settings/how-to-set-up-domain-authentication/)
* [Single Sender Verification](/ui/sending-email/sender-verification/)
* [DMARC.org](https://dmarc.org/)
