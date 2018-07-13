---
seo:
  title: SPF&#58; Don't Exceed Ten DNS Lookups!
  description: SPF&#58; Don't Exceed Ten DNS Lookups
  keywords:
title: SPF&#58; Don't Exceed Ten DNS Lookups!
weight: 0
layout: page
zendesk_id: 200185168
navigation:
  show: true
---

Many people may not realize it, but the Sender Policy Framework (SPF) specification has a limit on the number of DNS lookups (10) required to fully resolve an SPF record. One typically quickly exceeds this limit through the reckless use of the include modifier.

Section 10.1, "Processing Limits" of the [SPF RFC](http://datatracker.ietf.org/doc/rfc4408/?include_text=1) specifies the following in regards to DNS lookups:

> SPF implementations MUST limit the number of mechanisms and modifiers that do DNS lookups to at most 10 per SPF check, including any lookups caused by the use of the "include" mechanism or the "redirect" modifier. If this number is exceeded during a check, a PermError MUST be returned. The "include", "a", "mx", "ptr", and "exists" mechanisms as well as the "redirect" modifier do count against this limit. The "all", "ip4", and "ip6" mechanisms do not require DNS lookups and therefore do not count against this limit. The "exp" modifier does not count against this limit because the DNS lookup to fetch the explanation string occurs after the SPF record has been evaluated.

This limit is in place to prevent SPF lookups from being a useful avenue for Denial of Service attacks.

Is your SPF record validating? You can find out [here](http://www.kitterman.com/spf/validate.html).
