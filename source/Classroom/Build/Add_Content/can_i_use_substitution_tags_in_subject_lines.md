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

**Yep, you can use substitution tags in subject lines!** _[Read about how to use them here.](https://sendgrid.com/docs/API_Reference/SMTP_API/substitution_tags.html)._ 

How you format your substitution tags may depend on the library you used to create your SMTP connection, the language you are writing your code in, or any intermediate mail servers that your servers will send mail through.

In some cases -subVal- may be the best choice while in others, %subVal% or #subVal# may make more sense. It is best to avoid characters that have special meaning in html, such as <,>, and &. These might end up encoded and will not be properly substituted.

Furthermore, don't use spaces inside your substitution tags, e.g. %first name%. Consider using underscores(_) to denote spaces.

>**Substitution tags are different from [Marketing Campaigns custom fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html), and are only used in conjunction with our SMTP API when sending over SMTP or Web API. **
