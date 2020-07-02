---
layout: page
weight: 0
title: DMARC
navigation:
  show: false
seo:
  title: DMARC 
  override: true
---

Domain-based Message Authentication, Reporting and Conformance (DMARC) is a standard for determining the authenticity of the person or service sending email on behalf of a domain. DMARC attempts to minimize email [spoofing]({{root_url}}/glossary/spoofing/) by building on top of existing authentication standards.

## Domain-based Message Authentication

DMARC supplements [DomainKeys Identified Mail (DKIM)]({{root_url}}/glossary/dkim/) and [Sender Policy Framework (SPF)]({{root_url}}/glossary/spf/), neither of which provide complete spoofing prevention on their own. DKIM and SPF handle the domain-based message authentication portion of DMARC.

DKIM cryptographically signs messages. SPF defines the IP addresses approved to send email on a domain. For more about DKIM and SPF, see [DKIM Records Explained](/ui/account-and-settings/dkim-records/) and [SPF Records Explained](/ui/account-and-settings/spf-records/).

## Reporting and Conformance

A DMARC record is implemented using a [TXT](https://en.wikipedia.org/wiki/TXT_record) DNS record. The tags in this TXT record tell receiving email servers how to handle email that fails either or both DKIM and SPF checks. The DMARC record also tells receiving servers where to send reports about the failures. The ability to provide receiving email servers with failure handling instructions and the opportunity to receive failure reports is incredibly valuable for domain owners. The information can be used to track down the people and services sending email on behalf of your domain, which is a first step in understanding your [sender reputation]({{root_url}}/glossary/reputation-monitoring/). This feedback loop is unique to the reporting and conformance mechanisms of DMARC.

## DMARC in detail

DMARC is a powerful tool for understanding your sender reputation. For more information about DMARC, see [Everything about DMARC]({{root_url}}/ui/sending-email/dmarc/) where we cover DMARC in detail.
