---
seo:
  title: SPF Records Explained
  description: SPF Records Explained
  keywords: permission, spf, white, label, whitelabel, include, spf1, spf2, return, path, ~all, -all, +all, sender, permitted, forgery, spoofing, spoof, fail, failed, validation, validate
title: SPF Records Explained
group: account-management
weight: 0
layout: page
navigation:
  show: true
---

Sender Policy Framework (SPF) is an open standard aimed at preventing sender address forgery. This article describes how SPF is configured for use with SendGrid.

##SPF and sender authentication

If you have an SPF record set for your domain (i.e. yourdomain_.com_) already, you must add a unique alphanumeric string before the _all_ mechanism of this record in order to authenticate mailings through your SendGrid account. If you do not have an existing SPF record for your domain, you must create a TXT record with the value provided to you during the domain authentication creation process. Each SendGrid account gets a unique SPF TXT record to authenticate their outbound mailings. An example of such a record is:

>v=spf1 include:u123456.wl.sendgrid.net -all

In this example we have a unique SPF record for the authorization of outbound mail for a SendGrid account. A "-all" inclusion versus an "~all" inclusion indicates that this SPF record is the only record used to authenticate mail for your domain. Make sure to include any other authorized sender into this SPF record if you need to authenticate mailings from other sources.

Do not create more than one SPF1 record for a given domain. If this is the case, you will want to merge any additional SPF records into one SPF record. You also cannot have [more than 10 DNS lookups]({{root_url}}/ui/account-and-settings/spf-limitations/) in your single SPF record.



##Already have an SPF record for your domain?

No problem. You simply need to add your SendGrid account's unique SPF inclusion into your existing record.

For example, say your existing record looks like this:

>v=spf1 a mx include:\_spf.google.com include:spf.protection.outlook.com -all

You would just need to add the SendGrid lookup at the end of the string, before the \*all mechanism, like so:

>v=spf1 a mx include:\_spf.google.com include:spf.protection.outlook.com include:u826348.wl.sendgrid.net -all



##Don't want to include another hostname lookup?

If you would rather not include SendGrid's SPF hostname lookup in your record, or perhaps you just have [too many already]({{root_url}}/ui/account-and-settings/spf-limitations/), you can also choose to give permission to a **specific IP address** to send mail for your domain. This is accomplished using the ip4 mechanism within your SPF record.

You can choose to specify your [dedicated IP address]({{root_url}}/ui/account-and-settings/dedicated-ip-adresses/) as a lookup, which means that only mail coming from that particular IP address will be considered a permitted sender within SendGrid for that domain. An example of this looks like:

>v=spf1 a mx include:\_spf.google.com include:spf.protection.outlook.com ip4:12.34.56.78 -all

If you wish to add multiple ip4 lookups(if you have an account that sends from multiple dedicated IPs, for example), simply add them into your record separated by spaces. Unlike with include:hostname lookups, a SPF1 record can have any number of ip4 includes.


For more information on official SPF best practices and syntax, check out [www.openspf.org](http://www.openspf.org/) to read the spec for yourself.
