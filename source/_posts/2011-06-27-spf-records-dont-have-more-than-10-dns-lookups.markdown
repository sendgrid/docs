---
comments: false
date: 2011-06-27 15:44:01
layout: post
slug: spf-records-dont-have-more-than-10-dns-lookups
title: 'SPF Records:  Don''t have more than 10 DNS lookups!'
wordpress_id: 1509
categories:
- Tips &amp; Tricks
tags:
- denial of service
- dns
- spf
- whitelabel
---

The Sender Policy Framework (SPF) specification has a limit of 10 on the number of DNS lookups required to fully resolve an SPF record. This limit is in place to prevent SPF lookups from being a useful avenue for Denial of Service attacks. However, it is possible to quickly exceed this limit through the reckless use of the **include** modifier. 

Section [10.1](http://tools.ietf.org/html/rfc4408#section-10.1) of the SPF RFC, "Processing Limits", specifies the following in regards to DNS lookups:

_SPF implementations MUST limit the number of mechanisms and modifiers that do DNS lookups to at most 10 per SPF check, including any lookups caused by the use of the "include" mechanism or the "redirect" modifier.  If this number is exceeded during a check, a PermError MUST be returned.  The "include", "a", "mx", "ptr", and "exists" mechanisms as well as the "redirect" modifier do count against this limit.  The "all", "ip4", and "ip6" mechanisms do not require DNS lookups and therefore do not count against this limit. The "exp" modifier does not count against this limit because the DNS lookup to fetch the explanation string occurs after the SPF record has been evaluated._

Is your SPF record validating?  You might want to find out here: [SPF Record Testing Tools](http://www.kitterman.com/spf/validate.html).
