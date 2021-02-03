---
seo:
  title: Spoofing
  description: Spoofing is a technique where forged email addresses are used to trick recipients into opening an email because the source has been hidden
  keywords: spam, phishing, spoofing
title: Spoofing
weight: 0
layout: page
navigation:
  show: false
---

Email spoofing is the practice of sending email with a forged From address, and it's one tactic used to deliver potentially dangerous messages. Because a spoofed email looks to be from a legitimate contact, spoofing is often used in [phishing]({{root_url}}/glossary/phishing/) emails that aim to extract personal data from recipients.

Unfortunately, spoofing a From address is relatively easy because email has no built-in authentication mechanisms. To combat spoofing, several standards have been developed including, [Sender Policy Framework (SPF)]({{root_url}}/glossary/spf/), [DomainKeys Identified Mail (DKIM)]({{root_url}}/glossary/dkim/), and [Domain-based Message Authentication, Reporting and Conformance (DMARC)]({{root_url}}/glossary/dmarc/).

To understand spoofing, you should also know that an email actually has two From addresses. There is the Header From or _friendly_ from address and the Envelope From or `return-path` address.

## Header From

The Header From or friendly From address is the one displayed in the **From** field of your email client. This From address is less important for directing email traffic. Think of the Header From address like the address on the letterhead of paper correspondence—the postal service **does not** use this address to route mail; it’s there as a _friendly_ bit of information for the reader.

Spoofing the Header From address places false information in the **From** field of your email client, and it's called display name abuse. Display name abuse is a user interface change that isn’t handled by common methods of spoofing protection such as SPF, DKIM, and DMARC.

## Envelope From

The Envelope From address informs receiving email servers where to deliver replies and where to send [bounces]({{root_url}}/glossary/bounces). Think of the Envelope From as the return address on a paper letter’s envelope—the postal service **does** use this address to route mail; it’s there to establish the sending source of the letter.

For email, you can find the Envelope From address in your email client by selecting "Show Original," "View Message Source," "Show Headers," or a similar option depending on your email client. The Envelope From is not usually displayed to a message’s recipient by default.

When we discuss spoofing in relation to SPF, DKIM, and DMARC, we are talking about attempts to prevent spoofing the Envelope From or `return-path` address.

Because spoofing this address can route your replies, and any sensitive information they contain, to a bad actor, a lot of effort has gone into the standards listed above to prevent email abuse. For more information about how these standards work, see the articles listed in the [Additional Resources](#additional-resources) section of this page.

## Reporting Email Abuse

SendGrid works hard to keep our email stream clean. Despite our best efforts, spam does occasionally leak through our defenses. If you discover spam that was sent by a SendGrid customer, please report it to our team by sending it to abuse@sendgrid.com or opening a ticket with [SendGrid Support](https://support.sendgrid.com/hc/en-us). No matter who sent the phishing email, you can file a report with the [Federal Trade Commission](http://www.ftc.gov/complaint).

If we find that a SendGrid customer is sending spoofed or phishing emails, we will ban their account immediately

## Additional Resources

- [DKIM Records Explained]({{root_url}}/glossary/dkim/)
- [Everything about DMARC]({{root_url}}/ui/sending-email/dmarc/)
- [SPF Records Explained]({{root_url}}/ui/account-and-settings/spf-records/)
- [Email Infrastucture Guide](https://sendgrid.com/resource/the-email-infrastructure-guide-build-it-or-buy-it/)
