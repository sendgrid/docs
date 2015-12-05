---
seo:
  title: Can I use substitution tags in subject lines?
  description: Can I use substitution tags in subject lines?
  keywords: smtpapi, substitutions, deliverability, tags, repacement, subvar, subject, x-smtpapi
title: Can I use substitution tags in subject lines?
weight: 0
layout: page
zendesk_id: 203892858
navigation:
  show: true
---

Yep,&nbsp;you can use substitution tags in subject lines! For more information on the how-to;&nbsp; [read on](https://sendgrid.com/docs/API_Reference/SMTP_API/substitution_tags.html).&nbsp;How you format your substitution tags may depend on the library you use to create your SMTP connection, the language you are writing your code in, or any intermediate mail servers that your servers will send mail through.

In some cases -subVal- may be the best choice while in other %subVal% or #subVal# may make more sense. It is best to avoid characters that have special meaning in html, such as <,>, and &. These might end up encoded and will not be properly substituted.

Also, don't use spaces inside your substitution tags, e.g. %first name%. Consider using underscores(\_) to denote spaces.

**Substitution tags are different than [Marketing Email Tags](https://sendgrid.com/docs/Marketing_Emails/tags.html), and are only used in conjunction with our SMTPAPI.&nbsp;**

