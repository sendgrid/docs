---
st:
  published_at: 2016-09-21
  type: Glossary
  
layout: page
weight: 0
title: DMARC
navigation:
  show: false
seo:
  title: DMARC 
  override: true
---

Domain-based Message Authentication Reporting and Conformance (DMARC) is an additional layer of email authentication that builds on the two previous authentication methods [Sender Policy Framework (SPF)]({{root_url}}/Glossary/spf.html) and [DomainKeys Identified Mail (DKIM)]({{root_url}}/Glossary/dkim.html). First and foremost, both SPF and DKIM must be implemented before a DMARC policy can be put into place.

DMARC came about in an effort to standardize what happens to your sent mail in the event of failed authentications. Conceptually, it’s helpful to think of DMARC in the context of "if this then that” reasoning. If SPF and DKIM both fail, then DMARC takes action on its defined policy. Both DKIM and SPF must fail before any action on a DMARC policy is taken. This layer of defense provides consistency and defined results to legitimate senders.

Without DMARC, [ESPs]({{root_url}}/Glossary/email_service_provider.html) decide whether to deliver or block mail based on the authentication results of SPF and DKIM. DMARC allows the legitimate senders to tell ESPs who have implemented DMARC exactly what to do with the unauthenticated mail. This becomes absolutely vital for those senders who are concerned with their domain being spoofed. Check out our article on [implementing DMARC]({{root_url}}/Classroom/Basics/Email_Infrastructure/everything_about_dmarc.html) which goes into the specifics of DMARC policies.

