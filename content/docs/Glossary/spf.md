---
seo:
  title: SPF
  description: SPF is an email authentication standard that helps ISPs better identify legitimate email senders.
  keywords: spf, sender policy framework
title: SPF
weight: 0
layout: page
navigation:
  show: false
---
Sender Policy Framework (SPF) is an email authentication standard developed by AOL that compares the email sender’s actual IP address to a list of IP addresses authorized to send mail from that domain. The IP list is published in the domain’s DNS record.

<page-anchor el="h2">
SPF and Whitelabel
</page-anchor>

As part of the [whitelabel]({{root_url}}/User_Guide/Setting_Up_Your_Server/Whitelabeling/index.html) process you must create a subdomain (such as em.example.com) which is used for [click and open tracking]({{root_url}}/User_Guide/Delivery_Metrics/email_activity.html) as well as in the Return-Path email header. SPF uses the domain value in the Return-Path header for the DNS lookup to determine the permitted senders for the domain.

If you have an SPF record set for your root domain (i.e. yourdomain.com), you must add {% codeblock %}include:sendgrid.net{% endcodeblock %} before the all mechanism of this record. If you do not have an SPF record for your domain you must create a TXT record with the value:

{% codeblock %}
v=spf1 include:sendgrid.net ~all
{% endcodeblock %}

Do not create more than one SPF1 record for a given domain. If you need more than one SPF record, you will want to merge the additional SPF records into a single SPF record.

{% info %}
You cannot have more than 10 DNS lookups in your SPF record.
{% endinfo %}

<page-anchor el="h2">
Already have an SPF record for your domain?
</page-anchor>

No problem. You simply need to add the SendGrid include mechanism lookup into your existing record.

For example, if your record looks like this:

{% codeblock %}
v=spf1 a mx include:_spf.google.com include:spf.protection.outlook.com ~all
{% endcodeblock %}

You would just need to add our lookup at the end of the string, before the {% codeblock %}~all{% endcodeblock %} mechanism, like so:

{% codeblock %}
v=spf1 a mx include:_spf.google.com include:spf.protection.outlook.com include:sendgrid.net ~all
{% endcodeblock %}


<page-anchor el="h2">
Don't want to include another hostname lookup?
</page-anchor>

If you would rather not include SendGrid's SPF hostname lookup in your record, or perhaps you just have too many already, you can also choose to give permission to a specific IP address to send mail for your domain. This is accomplished using the ip4 mechanism.

If you have a Silver or higher level package, you can choose to specify your dedicated IP address as a lookup, meaning that only mail coming from that particular IP address will be considered a permitted sender within SendGrid for that domain. An example of such an include looks like this:

{% codeblock %}
v=spf1 a mx include:_spf.google.com include:spf.protection.outlook.com ip4:12.34.56.78 ~all
{% endcodeblock %}

If you wish to add multiple ip4 lookups (if you have an account that sends from multiple dedicated IPs, for example), simply add them into your record separated by spaces. Unlike with include:hostname lookups, a SPF1 record can have any number of ip4 includes.

Please note, the validation step in the [Whitelabel Wizard]({{root_url}}/User_Guide/Setting_Up_Your_Server/Whitelabeling/whitelabel_wizard.html) will not recognize the ip4 mechanism, it will only accept {% codeblock %}include:sendgrid.net{% endcodeblock %}

For more information on SPF best practices and syntax, check out [www.openspf.org](http://www.openspf.org)

<page-anchor el="h2">
3rd Party Tools
</page-anchor>
These are some tools that might be useful to you. We do not own or support these tools, so use them at your own risk. However,
we hope that they are helpful.

<page-anchor el="h3">
Record Flattening
</page-anchor>
There is an experimental tool called the [dmarcian SPF Record Flattener](https://dmarcian.com/spf-survey/bitcointalk.org), which should be considered experimental. From their site: "[this tool] rewrites this record by removing duplicate netblocks, collapsing any overlapping netblocks, and using 0 DNS-querying mechanisms/modifiers."

If you choose to use this functionality, we suggest that you test it extensively to make sure that your customers will receive your emails and their servers can look up your records properly.

<page-anchor el="h3">
SPF Wizard
</page-anchor>
[The SPF Wizard](http://www.spfwizard.net/) is a browser based SPF record generation tool. Fill out the form and the site generates an SPF record for you.


Related Links:

* <a href="{{root_url}}/Classroom/Deliver/Sender_Authentication/spf_records_explained.html">SPF Records Explained</a>
* <a href="{{root_url}}/Classroom/Deliver/Sender_Authentication/spf_dont_exceed_ten_dns_lookups.html">SPF: Don't Exceed Ten DNS Lookups!</a>
* <a href="{{root_url}}/Classroom/Deliver/Sender_Authentication/internet_standards_spf_and_dkim_and_deliverability.html">Internet Standards (SPF and DKIM) and Deliverability</a>
