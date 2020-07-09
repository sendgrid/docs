---
layout: page
title: Sender Identity
group: sending-email
navigation:
  show: false
seo:
  title: Sender Identity
  override: true
  description: Understanding the difference between Domain Authentication and verifying a Single Sender.
---

<call-out>

The information on this page applies to new Free Trial, Essentials 40K, and Essentials 100K customers. If you received account access before April 6, 2020, you can disregard the information below.

</call-out>

To ensure our customers maintain the best possible sender reputations and to uphold legitimate sending behavior, we require customers to verify their Sender Identities. A Sender Identity represents your “From” email address—the address your recipients will see as the sender of your emails.

You can verify one or more Sender Identities using either Domain Authentication or Single Sender Verification. There are advantages to both verification methods, and we provide detailed guides to configure whichever option you choose.

This page offers a high-level overview of Single Sender Verification and Domain Authentication to help you decide which option best fits your needs.

### Single Sender Verification

Single Sender Verification is a fast way to verify your Sender Identity when you don’t have access to the DNS settings for your domain. Though you will want to complete Domain Authentication for your production mail send, Single Sender Verification is a great way to start quickly while building a proof of concept or test.

#### Advantages of Single Sender Verification

- Single Sender Verification is a quick method of verification when starting.
- You can send from a single email address that you confirm ownership of by clicking a verification link in the email’s inbox.

#### Disadvantages of Single Sender Verification

- Single Sender Verification is recommended for testing only.
- You can send only from the address you verify rather than any address on an authenticated domain.

To verify a Single Sender, see our [Single Sender Verification page]({{root_url}}/ui/sending-email/sender-verification).

### Domain Authentication

<call-out>

Please note, you must have the ability to edit the DNS records on the domain you want to authenticate.

</call-out>

Domain Authentication is the preferred method of verification. Though Single Sender Verification provides a quick start, Domain Authentication should be completed before you launch your mail send into production. If access to DNS records is a barrier for you, you can always start with Single Sender Verification and return to Domain Authentication once you obtain DNS access.

#### Advantages of Domain Authentication

- An authenticated domain improves mail deliverability and a sender's reputation.
- Domain Authentication is an industry best practice that's ideal for production sending.
- You can send from any email address on your authenticated domain.

To authenticate your domain, see [How to set up domain authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/).
