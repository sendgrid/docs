---
layout: page
weight: 0
title: DMARC
navigation:
  show: true
seo:
  title: DMARC 
  override: true
---
Domain-based Message Authentication Reporting and Conformance (DMARC) is an additional layer of email authentication that builds on the two previous authentication methods Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM). First and foremost both SPF and DKIM must be implemented before a DMARC policy can be put into place.
DMARC came about in an effort to standardize what happens to your sent mail in the event of failed authentications. Conceptually, it’s helpful to think of DMARC in the context of "if this then that” reasoning. If SPF and DKIM both fail then DMARC takes action on it’s defined policy. Both DKIM and SPF must fail before any action on a DMARC policy is taken. This layer of defense provides consistency and defined results to legitimate senders. 
Without DMARC, ESP’s decide whether to deliver or block mail based on the authentication results of SPF and DKIM. DMARC allows the legitimate senders to tell ESP’s, who have implemented DMARC, exactly what to do with the unauthenticated mail.  This becomes absolutely vital for those senders who are concerned with their domain being spoofed. Check out this [article](https://support.sendgrid.com/hc/en-us/articles/200182958) for information on implementing DMARC and the specifics of it’s policies.
