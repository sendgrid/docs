---
seo:
  title: Is Sendgrid HIPAA Compliant?
  description: Is Sendgrid HIPAA Compliant?
  keywords: security, hipaa, encryption, tls, ssl, secure
title: Is Sendgrid HIPAA Compliant?
weight: 0
layout: page
zendesk_id: 200182978
navigation:
  show: true
---

 **No, we are not.**

SendGrid does not natively support HIPAA compliant data transmission. We do not offer any  encryption or security measures beyond those included in the SMTP RFC, which was not designed with HIPAA compliancy in mind.

We suggest that you encrypt the message body of your emails on your end if you are concerned about being complaint with HIPAA, or offer a secure download link for secure documents rather than transmitting them via email.
