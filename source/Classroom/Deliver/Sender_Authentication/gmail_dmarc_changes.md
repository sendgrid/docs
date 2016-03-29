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

Gmail has recently decided to embrace  [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/) more explicitly, much like their email brethren, Yahoo and AOL. You may have started seeing bounce messages with the Reason of:

**<NDR GOES HERE > **

This is because Gmail will no longer be accepting messages where the From domain is a Gmail address and the message originates from a non-approved Gmail mail domain server/service. This is a security measure they have implemented to help reduce potential address spoofing of their mail domain. 

 

**What this means:**  You can no longer send with the From address being anything from a Gmail address when sending to a domain that checks DMARC before accepting mail. 

**What you can do: ** You will need to change the From address you use in emails to a non-Gmail address. We recommend using one at your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original Gmail address that previously was used in the From field. 

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a  [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

 

For more extended reading, check out <LINK GOES HERE>, as well as our  [DMARC Knowledgebase article](https://sendgrid.zendesk.com/hc/en-us/articles/200182958-Everything-about-DMARC-).
