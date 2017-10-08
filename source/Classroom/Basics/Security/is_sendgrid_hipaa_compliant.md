---
seo:
  title: Is SendGrid HIPAA Compliant?
  description: Sending email with SendGrid is not HIPAA compliant...
  keywords: security, hipaa, encryption, tls, ssl, secure, GLBA, gramm leach, bliley, act, health, law
title: Is Sendgrid HIPAA Compliant?
weight: 0
layout: page
zendesk_id: 200182978
navigation:
  show: true
---

 **No, we are not.**

SendGrid does not natively support HIPAA compliant data transmission. We do not offer any  encryption or security measures surrounding message transmission beyond those included in the SMTP RFC, which was not designed with HIPAA compliancy in mind.

We suggest that you encrypt the message body of your emails on your end if you are concerned about being complaint with HIPAA, or offer a secure download link for secure documents rather than transmitting them directly via email.

From our [Terms of Service](https://sendgrid.com/policies/tos/): 

>SendGrid does not intend uses of the Service to create obligations under The Health Insurance Portability and Accountability Act of 1996 (“HIPAA”), the Gramm-Leach-Bliley Act (“GLBA”) or similar laws and makes no representations that the Service satisfies the requirements of such laws. If You are (or become) a Covered Entity or Business Associate (as defined in HIPAA) or a Financial Institution (as defined in GLBA), You agree not to use the Service for any purpose or in any manner involving Protected Health Information (as defined in HIPAA) or Nonpublic Personal Information (as defined in GLBA).
