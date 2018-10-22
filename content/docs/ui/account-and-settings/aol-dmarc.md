---
seo:
  title: AOL DMARC Changes / "refused due to provided DMARC Policy"
  description: AOL DMARC Changes / "refused due to provided DMARC Policy"
  keywords: AOL, 521, policy, dmarc, spf, dkim, refused, failed
title: AOL DMARC Changes / "refused due to provided DMARC Policy"
weight: 0
group: sender-authentication
layout: page
zendesk_id: 202432108
navigation:
  show: true
---
AOL mail domains have started to embrace  [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/) more explicitly, much like their Email brethren, Yahoo. You may have started seeing bounce messages with the reason of:

**"521 5.2.1 :  (DMARC) This message failed DMARC Evaluation and is being refused due to provided DMARC Policy"  **

This is because AOL will no longer be accepting messages where the From domain is an AOL mail domain, and the message originates from a non-approved AOL mail domain server/service. This is a security measure they have implemented to help reduce potential address spoofing of their mail domains. 

**What this means:**  You can no longer send with the From address being anything from an AOL address when sending to a domain that checks DMARC before accepting mail. 

**What you can do: ** You will need to change the From address to a non-AOL address. We recommend using your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original AOL address that previously was used in the From field. 

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a  [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

For more information, check out [AOL's archived blog post](https://web.archive.org/web/20180428093819/http://postmaster-blog.aol.com/2014/04/22/aol-mail-updates-dmarc-policy-to-reject) and their FAQ page on [DKIM and DMARC](https://postmaster.aol.com/dkim-dmarc). 

