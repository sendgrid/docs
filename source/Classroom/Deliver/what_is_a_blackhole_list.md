---
seo:
  title: What is a blackhole list?
  description: What is a blackhole list?
  keywords: blacklist, blocklist, delist, block, blocked, IP, BL
title: What is a blackhole list?
weight: 0
layout: page
zendesk_id: 200181968
navigation:
  show: true
---

# Overview

Commonly referred to as “blocklists,” “blacklists,” and a plethora of different acronyms, blackhole lists were conceived with one goal in mind: &nbsp;to stop email spammers and phishers. Regardless of what name is used, blackhole lists are utilized by nearly every email service provider and are something of which all senders should be aware. &nbsp;Being placed on a blackhole list can negatively affect your sending reputation and cause your email to be blocked from your recipients' inboxes, so it's important to be sure that you are only sending messages without questionable content and only to those who have subscribed for your service.&nbsp;

Blackhole lists come in two varieties: &nbsp;external and internal. &nbsp;The external lists, such as [SpamCop](http://www.spamcop.net/) and [Barracuda](http://www.barracudacentral.org/ "Link: http://www.barracudacentral.org/"), are publicly available and allow anyone to visit their site and check on the status of their IP address before making a delisting request. &nbsp;Internal lists, such as [Cloudmark](http://www.cloudmark.com/en/products/cloudmark-security-platform/index "Link: http://www.cloudmark.com/en/products/cloudmark-security-platform/index"), require site membership in order to see if an IP is listed, and delisting requests will not always receive a response. &nbsp;There are also three main types of blackhole lists, which are explained below.&nbsp;

## DNSBL (Domain Name Service Blackhole List) or RBL (Real-time Blackhole List)

A DNSBL is a list of IP addresses published through the Internet Domain Name Service that can be used as a file in DNS server software or as a web-hosted list that can be queried in real-time. The most common use of a DNSBL is to publicly publish a list of all computers or networks involved with spamming. &nbsp;Web mail server software can be setup to reject messages sent from sites and/or addresses on these lists. &nbsp;Examples of DNSBLs include SpamCop and [Spamhaus](http://www.spamhaus.org/).

## URI DNSBL

This type of blackhole list checks on the domain names and IP addresses (the combination of a URL and a URN, also referred to as a [URI](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier), or uniform resource identifier) that are found within the clickable links in a message body. &nbsp;The URI DNSBL was created after it was discovered that messages from non-listed IP addresses could be sent and delivered with spam links in the body containing identifying information for previously blackhole-listed IPs, essentially allowing spammers to continue sending spam within their message bodies before their new sending IP was listed on a standard DNSBL. &nbsp;The URI DNSBL helps to fill the time gap between when a spammer switches to a new sending IP and when that new IP is discovered and listed. &nbsp;Since its inception, the URI DNSBL has been very successful and is now used by most spam filters. Examples include [SURBL](http://www.surbl.org/) and [URIBL](http://www.uribl.com/ "Link: http://www.uribl.com/").

## RHSBL (Right-hand Side Blackhole List)

The RHSBL is a list that’s only concerned with the domain used in the “from” or “reply-to” email address, hence where this type of list gets its name (the domain is to the right-hand side of the @ symbol in an email address). &nbsp;The RHSBL is not often used, as it has become increasingly easy for spammers to forge their “from” addresses or use free webmail domains such as google.com, yahoo.com, and aol.com, which have greatly decreased the effectiveness of these lists.

# How do blacklistings occur?

Blackhole lists decide which IPs to list based on a few factors, with the most common being user complaints and [spam-traps](http://en.wikipedia.org/wiki/Spamtrap "Link: http://en.wikipedia.org/wiki/Spamtrap"). &nbsp;It’s also not uncommon for a server’s IP address to end up on a blackhole list temporarily, especially if it is shared server or if you are sending mail to an old recipient list. &nbsp;Sometimes, if a spam problem is severe enough, an entire range of IP addresses will be blocked in order to stop the flow of illicit mail. &nbsp;This means that all the addresses in a particular range (198.37.148.xxx) across all servers would be blocked, which could also stop legitimate senders from being able to operate as they would normally. &nbsp;Since more than half of all email sent worldwide is spam, you can understand why it is dealt with so seriously.

Unfortunately, not all blackhole lists operate in the same manner. &nbsp;For instance, sites like Spamhaus will generally delist an IP after a reasonable amount of time has passed, provided that the IP has received no more complaints, or if an IP owner makes a delisting request and has the evidence to show that they send legitimate email. &nbsp;However, there are other, smaller blackhole listing websites that don’t ever accept delisting requests, won’t ever delist an IP, or require you to pay a fee for the delisting (which one should never do) and as such these sites are rarely used.

# How do I check if I am on a list?

Below are a couple of sites that anyone can use to check the status of an IP address across a multitude of blacklists:

[http://multirbl.valli.org/](http://multirbl.valli.org/)

[http://www.mxtoolbox.com/blacklists.aspx](http://www.mxtoolbox.com/blacklists.aspx "Link: http://www.mxtoolbox.com/blacklists.aspx")

&nbsp;

_Did you find your IP address or domain on a blacklist? &nbsp;Check out this [follow-up article](http://support.sendgrid.com/hc/en-us/articles/200256676 "Link: http://support.sendgrid.com/hc/en-us/articles/200256676") on what to do if you find yourself listed!_

