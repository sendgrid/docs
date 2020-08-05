---
seo:
  title: SPF Records Explained
  description: SPF Records Explained
  keywords: permission, spf, sender verification, include, spf1, spf2, return, path, ~all, -all, +all, sender, permitted, forgery, spoofing, spoof, fail, failed, validation, validate
title: SPF Records Explained
group: account-management
weight: 0
layout: page
navigation:
  show: true
---

Sender Policy Framework (SPF) is an open standard aimed at preventing sender address forgery. This article describes how SPF is configured for use with SendGrid.

## SPF overview

SPF attempts to prevent email sending abuse by ensuring that the IP address from which a message was sent is authorized to send mail on behalf of the domain in the email’s Envelope From or `return-path`.

<call-out>

For more information about From addresses and email, see our article on [email spoofing]({{root_url}}/glossary/spoofing/).

</call-out>

SPF is implemented by adding a [TXT record](https://en.wikipedia.org/wiki/TXT_record) to a domain’s [DNS]({{root_url}}/glossary/dns/) records. The TXT record specifies which IP addresses are allowed to send email for the domain.

## SPF mail flow

To understand SPF, it may help to understand how email traffic is handled when SPF is added to the process. Imagine an email server receives a message and checks the message's `return-path`. The `return-path` is `sender@example.com`. To perform an SPF check, the following steps take place:

1. The receiving email server retrieves the SPF record from the DNS records for the `example.com` domain.
2. The receiving server then checks the SPF record for all the IP addresses that are approved  to send email on behalf of the domain.
3. If the SPF check passes, the receiving server can be confident the message was sent from an approved sending server and will continue processing the message.
4. If the SPF check fails, the message is likely illegitimate and will be processed using the receiving server’s failure process.

![A diagram of the SPF traffic flow described in the steps above this image]({{root_url}}/img/spf_mail_flow.jpeg "SPF mail flow diagram")

## SPF and sender authentication

### SendGrid's automated security

When you complete Domain Authentication, [automated security]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/#using-automated-security) is enabled by default. Automated security will handle your SPF and [DKIM]({{root_url}}/glossary/dkim) records for you. Twilio SendGrid will provide [CNAME records]({{root_url}}/glossary/cname) that you will add to your DNS records. This allows you to add dedicated IP addresses and make other account updates without having to manage your SPF records manually.

To disable this behavior, uncheck **Use automated security** when completing the domain authentication process. With automated security disabled, Twilo SendGrid will provide you with TXT records like those discussed in this documentation rather than CNAME records.

![Domain Authentication Automated Security]({{root_url}}/img/domain_auth_advanced_settings.png)

### Custom SPF records

If you have an SPF record set for your domain already, you must add a unique alphanumeric string before the `all` mechanism of this record in order to authenticate mailings through your SendGrid account. If you do not have an existing SPF record for your domain, you must create a TXT record with the value provided to you during the [domain authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) process. Each SendGrid account gets a unique SPF TXT record to authenticate their outbound mailings. An example of such a record is:

```text
v=spf1 include:u123456.wl.sendgrid.net -all
```

In this example, we have a unique SPF record for the authorization of outbound mail for a SendGrid account. A `-all` inclusion versus an `~all` inclusion indicates that this SPF record is the only record used to authenticate mail for your domain. Make sure to include any other authorized sender into this SPF record if you need to authenticate mailings from other sources.

Do not create more than one SPF1 record for a given domain. If more than one SPF1 record exists for a domain, you will want to merge any additional SPF records into one SPF record. You also cannot have [more than 10 DNS lookups]({{root_url}}/ui/account-and-settings/spf-limitations/) in your single SPF record.

## Working with an existing SPF record

If you already have an SPF record for your domain, you need to add your SendGrid account's unique SPF inclusion into your existing record.

For example, say your existing record looks like this:

```text
v=spf1 a mx include:\_spf.google.com include:spf.protection.outlook.com -all
```

You would need to add the SendGrid lookup at the end of the string, before the `all` mechanism, like so:

```text
v=spf1 a mx include:\_spf.google.com include:spf.protection.outlook.com include:u826348.wl.sendgrid.net -all
```

## Don't want to include another hostname lookup?

If you would rather not include SendGrid's SPF hostname lookup in your record, or perhaps you have [too many already]({{root_url}}/ui/account-and-settings/spf-limitations/), you can also choose to give permission to a **specific IP address** to send mail for your domain. This is accomplished using the `ip4` mechanism within your SPF record.

You can choose to specify your [dedicated IP address]({{root_url}}/ui/account-and-settings/dedicated-ip-addresses/) as a lookup, which means that only mail coming from that particular IP address will be considered a permitted sender within SendGrid for that domain. An example of this looks like:

```text
v=spf1 a mx include:\_spf.google.com include:spf.protection.outlook.com ip4:12.34.56.78 -all
```

If you wish to add multiple `ip4` lookups (if you have an account that sends from multiple dedicated IPs, for example), add them to your record separated by spaces. Unlike with `include:hostname` lookups, a SPF1 record can have any number of `ip4` includes.

For more information on official SPF best practices and syntax, you can find the SPF specification at [www.openspf.org](http://www.open-spf.org/).

## Additional Resources

* [Sender Identity](/for-developers/sending-email/sender-identity/)
* [Domain Authentication](/ui/account-and-settings/how-to-set-up-domain-authentication/)
* [Single Sender Verification](/ui/sending-email/sender-verification/)
* [DKIM Records Explained]({{root_url}}/ui/account-and-settings/dkim-records/)
* [How to Implement DMARC]({{root_url}}/ui/sending-email/how-to-implement-dmarc/)
