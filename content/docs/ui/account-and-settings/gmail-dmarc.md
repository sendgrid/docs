---
seo:
  title: Gmail DMARC Changes
  description: 550 5.7.1 Unauthenticated email from domain.tld is not accepted due...
  keywords: dmarc, gmail, google, from, spf, dkim
title: Gmail DMARC Changes
weight: 0
group: sender-authentication
layout: page
navigation:
  show: true
---

Gmail has recently decided to embrace  [DMARC](http://sendgrid.com/blog/dmarc-domain-based-message-authentication-reporting-conformance/) more explicitly, much like their email brethren, Yahoo and AOL. You may soon start seeing bounce messages with the Reason of:

**550 5.7.1 Unauthenticated email from domain.tld is not accepted due to domain's DMARC policy. Please contact administrator of domain.tld domain if this was a legitimate mail. Please visit [https://support.google.com/mail/answer/2451690](https://support.google.com/mail/answer/2451690) to learn about DMARC initiative. 62si14044909itw.103 - gsmtp **

This is because Gmail will no longer be accepting messages where the From domain is a Gmail address and the message originates from a non-approved Gmail mail domain server/service. This is a security measure they will be implementing to help reduce potential address spoofing of their mail domains. 

 

**What this means:**  Soon, you will no longer be able send with the From address being anything from a Gmail address when sending to a domain that checks DMARC before accepting mail. 

**What you can do:** You will need to change the From address you use in emails to a non-Gmail address. We recommend using one at your own mail domain, or one you control that is legitimate. You can then set the Reply-To field to be the original Gmail address that previously was used in the From field. 

**What about these messages, are they lost?** : Yes, any send with this bounce message is discarded and tracked as a  [Block](http://sendgrid.com/blocks). You will need to adjust your From address field settings, and then try resending from your side.

 

For more information, check out [this article on the DMARC changes](http://www.mediapost.com/publications/article/277884/dmarc-changes-coming-soon-to-an-inbox-near-you.html?utm_source=newsletter&utm_medium=email&utm_content=headline&utm_campaign=93744).
