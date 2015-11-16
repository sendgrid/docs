---
seo:
  title: Yahoo DMARC Changes / "Message not accepted for policy reasons"
  description: Yahoo DMARC Changes / "Message not accepted for policy reasons"
  keywords: policy, dmarc, spf, dkim, Yahoo
title: Yahoo DMARC Changes / "Message not accepted for policy reasons"
weight: 0
layout: page
zendesk_id: 201876356
navigation:
  show: true
---

07 April, 2014

Recently Yahoo mail domains have battened down the hatches, so to speak, and started to embrace [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/) more explicitly.&nbsp;You may have started seeing bounce messages with the Reason of:

**"554 5.7.9 Message not accepted for policy reasons. &nbsp;See http://postmaster.yahoo.com/errors/postmaster-28.html" &nbsp;**

This is because Yahoo will no longer be accepting messages where the From domain is a Yahoo mail domain, and the message originates from a non-approved Yahoo mail domain server/service. This is a security measure they have implemented to help reduce potential address spoofing of their mail domains.&nbsp;

&nbsp;

**What this means:** You can no longer send with the From address being anything from a Yahoo address when sending to a domain that checks DMARC before accepting mail.&nbsp;

**What you can do:** You will need to change the From address to a non-Yahoo address. We recommend using your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original Yahoo address that previously was used in the From field.&nbsp;

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

&nbsp;

For more extended reading, check out this blog post from our friends over at [Word to the Wise.](https://wordtothewise.com/2014/04/brief-dmarc-primer/)&nbsp;As well as our [DMARC Knowledgebase article](https://sendgrid.zendesk.com/hc/en-us/articles/200182958-Everything-about-DMARC-).

