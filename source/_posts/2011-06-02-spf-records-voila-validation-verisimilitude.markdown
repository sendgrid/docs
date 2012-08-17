---
comments: false
date: 2011-06-02 11:55:36
layout: post
slug: spf-records-voila-validation-verisimilitude
title: SPF Records
wordpress_id: 938
categories:
- Email Deliverability
tags:
- deliverability
- Delivery
- domain
- domain keys
- score
- sender
- sending
---

Sender Policy Framework (SPF) is an open standard aimed at preventing sender address forgery by letting domain owners identify valid outgoing mail servers in a DNS record. SMTP receivers can then verify originating server addresses against the DNS record and determine that messages are authentic before accepting them.

**SPF and Whitelabel**

As part of the [whitelabel process](/docs/email-deliverability/the-whitelabel-process/) you must create a subdomain (such as _email.example.com_) which is used for click and open tracking and is used in the Return-Path email header. SPF uses the value in the Return-Path header for the DNS lookup to determine the permitted senders for the domain.

If you have an SPF record set for your **root** domain (i.e. _example.com_), you must add _include:sendgrid.net_ before the _all_ selector of this record. If you do not have an SPF record for your domain you must create the SPF record with the value:
`v=spf1 a mx include:sendgrid.net ~all`
To add a new SPF record to your domain, you need access to create a TXT record with your DNS provider. Once you are able to create the record, just add the value noted above and you'll be all set!



## **Don't Exceed Ten DNS Lookups!**


Many people (ourselves included at one point) may not realize it, but the Sender Policy Framework (SPF) specification has a limit on the number of DNS lookups (10) required to fully resolve an SPF record. One typically quickly exceeds this limit through the reckless use of the include modifier.

Section 10.1, "Processing Limits" of the [SPF RFC](http://datatracker.ietf.org/doc/rfc4408/) specifies the following in regards to DNS lookups:


> SPF implementations MUST limit the number of mechanisms and modifiers that do DNS lookups to at most 10 per SPF check, including any lookups caused by the use of the "include" mechanism or the "redirect" modifier.  If this number is exceeded during a check, a PermError MUST be returned.  The "include", "a", "mx", "ptr", and "exists" mechanisms as well as the "redirect" modifier do count against this limit.  The "all", "ip4", and "ip6" mechanisms do not require DNS lookups and therefore do not count against this limit. The "exp" modifier does not count against this limit because the DNS lookup to fetch the explanation string occurs after the SPF record has been evaluated.


This limit is in place to prevent SPF lookups from being a useful avenue for Denial of Service attacks.

Is your SPF record validating?  You might want to find out [here.](http://www.kitterman.com/spf/validate.html)
