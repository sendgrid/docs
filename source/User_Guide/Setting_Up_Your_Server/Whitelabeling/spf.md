---
seo:
  title: Sender Policy Framework
  description: Sender Policy Framework (SPF) is an open standard aimed at preventing sender address forgery
  keywords: sender policy framework, whitelabeling, dkim, domain keys
title: Sender Policy Framework
weight: 0
layout: page
navigation:
  show: true
---

Sender Policy Framework (SPF) is an open standard aimed at preventing sender address forgery.

{% anchor h2 %}
SPF and Whitelabel
{% endanchor %}

As part of the whitelabel process you must create a subdomain (such as email.yourdomain.com) which is used for click and open tracking as well as in the Return-Path email header. SPF uses the domain value in the Return-Path header for the DNS lookup to determine the permitted senders for the domain. 

If you have an SPF record set for your root domain (i.e. yourdomain.com), you must add {% codeblock %}include:sendgrid.net{% endcodeblock %} before the all mechanism of this record. If you do not have an SPF record for your domain you must create a TXT record with the value:

{% codeblock %}
v=spf1 include:sendgrid.net ~all
{% endcodeblock %}

Do not create more than one SPF1 record for a given domain. In this case you will want to merge the additional SPF records into one SPF record.

{% info %}
You cannot have more than 10 DNS lookups in your SPF record.
{% endinfo %}

{% anchor h2 %}
Already have an SPF record for your domain?
{% endanchor %}

No problem. You simply need to add the SendGrid include mechanism lookup into your existing record.

For example, say your record looks like this: 

{% codeblock %}
v=spf1 a mx include:_spf.google.com include:spf.protection.outlook.com ~all
{% endcodeblock %}

You would just need to add our lookup at the end of the string, before the *all mechanism, like so:

{% codeblock %}
v=spf1 a mx include:_spf.google.com include:spf.protection.outlook.com include:sendgrid.net ~all
{% endcodeblock %}


{% anchor h2 %}
Don't want to include another hostname lookup?
{% endanchor %}

If you would rather not include SendGrid's SPF hostname lookup in your record, or perhaps you just have too many already, you can also choose to give permission to a specific IP address to send mail for your domain. This is accomplished using the ip4 mechanism.

If you have a Silver or higher level package, you can choose to specify your dedicated IP address as a lookup, meaning that only mail coming from that particular IP address will be considered a permitted sender within SendGrid for that domain. An example of such an include looks like this:

{% codeblock %}
v=spf1 a mx include:_spf.google.com include:spf.protection.outlook.com ip4:12.34.56.78 ~all
{% endcodeblock %}

If you wish to add multiple ip4 lookups (if you have an account that sends from multiple dedicated IPs, for example), simply add them into your record separated by spaces. Unlike with include:hostname lookups, a SPF1 record can have any number of ip4 includes.

Please note, the validation step in the Whitelabel Wizard will not recognize the ip4 mechanism, it will only accept {% codeblock %}include:sendgrid.net{% endcodeblock %}

For more information on SPF best practices and syntax, check out [www.openspf.org](http://www.openspf.org)

{% anchor h2 %}
Record flattening (experimental!)
{% endanchor %}

The dmarcian SPF Record Flattener, which should be considered experimental, rewrites this record by removing duplicate netblocks, collapsing any overlapping netblocks, and using 0 DNS-querying mechanisms/modifiers. Each SPF record is kept to less than 512 bytes to fit into a single UDP packet (assuming no other TXT records are sharing the DNS label).

{% info %}
NOTE: this approach does not take into account administrative or domain boundaries and is meant to show that "minified" SPF records are possible. The presence of unusual qualifiers, macros, and creative semantics will likely yield less than optimal results.
{% endinfo %}