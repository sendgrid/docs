---
seo:
  title: SPF Records Explained
  description: SPF Records Explained
  keywords: permission, spf, white, label, whitelabel, include, spf1, spf2, return, path, ~all, -all, +all, sender, permitted, forgery, spoofing, spoof, fail, failed, validation, validate
title: SPF Records Explained
weight: 0
layout: page
zendesk_id: 202517236
navigation:
  show: true
---

Sender Policy Framework (SPF) is an open standard aimed at preventing sender address forgery. This article describes how SPF is configured for use with SendGrid.

**SPF and Whitelabel**

As part of the&nbsp;whitelabel process&nbsp;you must create a subdomain (such as&nbsp;_email.yourdomain.com_) which is used for click and open tracking as well as in the Return-Path email header. SPF uses the domain value in the Return-Path header for the DNS lookup to determine the permitted senders for the domain.&nbsp;

If you have an SPF record set for your&nbsp; **root** &nbsp;domain (i.e.&nbsp;yourdomain_.com_), you must add a unique alphanumeric string&nbsp;before the&nbsp;_all_&nbsp;mechanism of this record in order to authenticate mailings through your SendGrid account. If you do not have an SPF record for your domain you must create a TXT record with the value provided to you during the whitelabel creation process. Each SendGrid account gets a unique SPF TXT record to authenticate their outbound mailings. An example of such a record is:

v=spf1 include:u826348.wl.sendgrid.net -all

In this example we have a unique SPF record for the authorization of outbound mail for an account. A "-" inclusion versus a "~" inclusion indicates that this SPF record is the only record used to authenticate mail for your domain. Make sure to include any other authorized sender into this SPF record if you need to authenticate mailings from other sources.

Do not create&nbsp;more than one SPF1 record for a given domain. In this case you will want to merge the additional SPF records into one SPF record.

You also cannot have&nbsp; [more than 10 DNS lookups]({{root_url}}/Classroom/Deliver/Sender_Authentication/spf_dont_exceed_ten_dns_lookups.html)&nbsp;in your SPF record.

&nbsp;

**Already have an SPF record for your domain?&nbsp;**

No problem. You simply need to add your&nbsp;Sendgrid account's&nbsp;unique SPF&nbsp;inclusion&nbsp;into your existing record.&nbsp;

For example, say your record looks like this:&nbsp;

_v=spf1 a mx&nbsp;_ **_i_** _nclude:\_spf.google.com&nbsp;include:spf.protection.outlook.com -all_

You would just&nbsp;need to add our lookup at the end of the string, before the \*all mechanism, like so:

_v=spf1 a mx&nbsp;_ **_i_** _nclude:\_spf.google.com&nbsp;include:spf.protection.outlook.com&nbsp;include:u826348.wl.sendgrid.net -all_

&nbsp;

**Don't want to include&nbsp;another hostname&nbsp;lookup?&nbsp;**

If you would rather not include Sendgrid's SPF hostname lookup in your record, or perhaps you just have&nbsp; [too many already]({{root_url}}/Classroom/Deliver/Sender_Authentication/spf_dont_exceed_ten_dns_lookups.html), you can also choose to give permission to a specific IP address to send mail for your domain. This is accomplished using the ip4 mechanism.

If you have a Pro 100K or higher level package, you can choose to specify your [dedicated IP address]({{root_url}}/Classroom/Basics/Account/what_is_my_sending_originating_ip_address_with_sendgrid.html) as a lookup, meaning that only mail coming from that particular IP address will be considered a permitted sender within Sendgrid for that domain. An example of such an include looks like this:&nbsp;

_v=spf1 a mx i__nclude:\_spf.google.com&nbsp;include:spf.protection.outlook.com ip4:12.34.56.78 -all_

If you wish to add multiple ip4 lookups(if you have an account that sends from multiple dedicated IPs, for example), simply add them into your record separated by spaces. Unlike with include:hostname lookups, a SPF1 record can have any number of ip4 includes.

&nbsp;

For more information on SPF best practices and syntax, check out&nbsp; [www.openspf.org](http://www.openspf.org/)
