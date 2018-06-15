---
st:
  published_at: 2016-06-13
  type: Classroom
seo:
  title: Microsoft DMARC Changes
  description: 550 5.7.1 The messages violates the DMARC policy of...
  keywords: dmarc, microsoft, live, outlook, from, spf, dkim, hotmail, msn
title: Microsoft DMARC Changes
weight: 0
layout: page
zendesk_id: 202449646
navigation:
  show: true
---

Miscrosoft has recently decided to embrace  [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/) more explicitly, much like their email brethren, Yahoo, AOL, and Gmail. You may have started seeing bounce messages with the following reasons:

Hotmail / Outlook / MSN / Live: 

**550 5.7.1 The messages violates the DMARC policy of domain.tld (1b6c35a4-2c11-11e6-ab23-549f350a57e2)**

**550 5.2.0 54Qa1t0144ZKE95014QaMR Message rejected due to DMARC. Please see http://postmaster.comcast.net/smtp-error-codes.php#DM000001**

**550 5.2.0 54QF1t03z3oQ44H014QGZ3 Message rejected due to DMARC.**

This is because Microsoft will no longer be accepting messages where the From domain is a Microsoft domain address and the message originates from a non-approved Microsoft mail domain server/service. This is a security measure they have implemented to help reduce potential address spoofing of their mail domains. 

 

**What this means:**  As of June, 2016, you can no longer send with the From address being anything from a Microsoft address when sending to a domain that checks DMARC before accepting mail. 

**What you can do: ** You will need to change the From address you use in emails to a non-Microsoft address. We recommend using one at your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original Microsoft address that previously was used in the From field. 

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a  [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

 

For more extended reading, check out check out [this article on the DMARC changes](http://www.mediapost.com/publications/article/277884/dmarc-changes-coming-soon-to-an-inbox-near-you.html?utm_source=newsletter&utm_medium=email&utm_content=headline&utm_campaign=93744), as well as our [DMARC Classroom article]({{root_url}}/Classroom/Basics/Email_Infrastructure/everything_about_dmarc.html).
