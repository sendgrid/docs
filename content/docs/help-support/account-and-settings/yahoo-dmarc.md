---
seo:
  title: Yahoo DMARC Changes "Message not accepted for policy reasons"
  description: Yahoo DMARC Changes "Message not accepted for policy reasons"
  keywords: policy, dmarc, spf, dkim, Yahoo, yahoogroups, y7mail, p=, reject, p=reject
title: Yahoo DMARC Changes "Message not accepted for policy reasons"
group: sender-authentication
weight: 0
layout: page
zendesk_id: 201876356
navigation:
  show: true
---

Yahoo mail domains are starting to embrace [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/) more explicitly. You may have seen an increase in bounce messages with the following explanation:

**"554 5.7.9 Message not accepted for policy reasons. See http://postmaster.yahoo.com/errors/postmaster-28.html"  **

This is because Yahoo no longer accepts messages where the From domain is a Yahoo mail domain, and the message originates from a non-approved Yahoo mail domain server/service. This is a security measure they have implemented to help reduce potential address spoofing of their mail domains. 

 

**What this means:** You can no longer send with the From address set as anything from a Yahoo address when sending to a domain that checks DMARC before accepting mail. 

**What you can do:** You will need to change the From address to a non-Yahoo address. We recommend using your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original Yahoo address that previously was used in the From field. 

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a [Block]({{site.app_url}}/suppressions/blocks). You will need to adjust your From address field settings, and then try resending from your side.
**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a [Block](https://app.sendgrid.com/suppressions/blocks). You will need to adjust your From address field settings, and then try resending from your side.

 

For more extended reading, check out this blog post from our friends over at [Word to the Wise.](https://wordtothewise.com/2014/04/brief-dmarc-primer/) As well as our [DMARC Knowledgebase article](https://sendgrid.zendesk.com/hc/en-us/articles/200182958-Everything-about-DMARC-).



_28 March, 2016_

Yahoo has updated their DMARC policy to utilize **p=reject** for the below low-volume Yahoo international domains. Please make any changes you need to handle these domains in the same way you handle yahoo.com. 

As a reminder, this change means that you will _not_ be able to send with a _from address_ of any of the following domains:

y7mail.com
yahoo.at
yahoo.be
yahoo.bg
yahoo.cl
yahoo.co.hu
yahoo.co.id
yahoo.co.il
yahoo.co.kr
yahoo.co.th
yahoo.co.za
yahoo.com.co
yahoo.com.hr
yahoo.com.my
yahoo.com.pe
yahoo.com.ph
yahoo.com.sg
yahoo.com.tr
yahoo.com.tw
yahoo.com.ua
yahoo.com.ve
yahoo.com.vn
yahoo.cz
yahoo.dk
yahoo.ee
yahoo.fi
yahoo.hr
yahoo.hu
yahoo.ie
yahoo.lt
yahoo.lv
yahoo.nl
yahoo.no
yahoo.pl
yahoo.pt
yahoo.rs
yahoo.se
yahoo.si
yahoo.sk
yahoogroups.co.kr
yahoogroups.com.cn
yahoogroups.com.sg
yahoogroups.com.tw
yahoogrupper.dk
yahoogruppi.it
yahooxtra.co.nz
