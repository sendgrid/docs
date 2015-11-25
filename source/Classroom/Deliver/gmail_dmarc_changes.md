---
seo:
  title: Gmail DMARC Changes
  description: Gmail DMARC Changes
  keywords: dmarc, gmail, from, spf, dkim
title: Gmail DMARC Changes
weight: 0
layout: page
zendesk_id: 202449646
navigation:
  show: true
---

Month, Day, 2014

Gmail has recently decided to embrace&nbsp; [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/)&nbsp;more explicitly, much like their email brethren, Yahoo and AOL.&nbsp;You may have started seeing bounce messages with the Reason of:

**<NDR GOES HERE&nbsp;>&nbsp;**

This is because Gmail&nbsp;will no longer be accepting messages where the From domain is a&nbsp;Gmail&nbsp;address&nbsp;and the message originates from a non-approved Gmail&nbsp;mail domain server/service. This is a security measure they have implemented to help reduce potential address spoofing of their mail domain.&nbsp;

&nbsp;

**What this means:** &nbsp;You can no longer send with the From address being anything from a Gmail address when sending to a domain that checks DMARC before accepting mail.&nbsp;

**What you can do:&nbsp;** You will need to change the From address you use in emails to a non-Gmail address. We recommend using one at your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original Gmail&nbsp;address that previously was used in the From field.&nbsp;

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a&nbsp; [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

&nbsp;

For more extended reading, check out <LINK GOES HERE>,&nbsp;as well as our&nbsp; [DMARC Knowledgebase article](https://sendgrid.zendesk.com/hc/en-us/articles/200182958-Everything-about-DMARC-).
