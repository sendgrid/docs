---
seo:
  title: AOL DMARC Changes / "refused due to provided DMARC Policy"
  description: AOL DMARC Changes / "refused due to provided DMARC Policy"
  keywords: AOL, 521, policy, dmarc, spf, dkim
title: AOL DMARC Changes / "refused due to provided DMARC Policy"
weight: 0
layout: page
zendesk_id: 202432108
navigation:
  show: true
---

23 April, 2014

Recently AOL mail domains have started to embrace&nbsp; [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/)&nbsp;more explicitly, much like their Email brethren, Yahoo.&nbsp;You may have started seeing bounce messages with the Reason of:

**"521 5.2.1 : &nbsp;(DMARC) This message failed DMARC Evaluation and is being refused due to provided DMARC Policy" &nbsp;**

This is because AOL will no longer be accepting messages where the From domain is an AOL mail domain, and the message originates from a non-approved AOL mail domain server/service. This is a security measure they have implemented to help reduce potential address spoofing of their mail domains.&nbsp;

&nbsp;

**What this means:** &nbsp;You can no longer send with the From address being anything from an AOL address when sending to a domain that checks DMARC before accepting mail.&nbsp;

**What you can do:&nbsp;** You will need to change the From address to a non-AOL address. We recommend using your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original AOL address that previously was used in the From field.&nbsp;

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a&nbsp; [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

&nbsp;

For more extended reading, check out [AOL's recent blog post](http://postmaster-blog.aol.com/2014/04/22/aol-mail-updates-dmarc-policy-to-reject/),&nbsp;as well as our&nbsp; [DMARC Knowledgebase article](https://sendgrid.zendesk.com/hc/en-us/articles/200182958-Everything-about-DMARC-).

