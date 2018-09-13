---
layout: page
weight: 0
title: Mail Merge
navigation:
  show: false
seo:
  title: Mail Merge
  override: true
  description: Mail Merge is a process to create customize emails from a generic form or template.
---

Mail Merge is a process to create customized emails, letters, and documents from a generic form or template. The original document contains static text with placeholders for substitutions for elements like names, addresses, emails, or other individualized or unique information. Typically the data used to populate these placeholders is held in a database, spreadsheet, or CSV file. A column in a spreadsheet could contain a list of names that correspond with a list of email addresses. These would then be populated into the template, creating a customized email per email address.

This functionality can be replicated using SendGrid's [SMTPAPI]({{root_url}}/for-developers/sending-email/building-an-smtp-email/), using [Substitution Tags]({{root_url}}/for-developers/sending-email/substitution-tags/) and [Custom Fields]({{root_url}}/ui/managing-contacts/custom-fields/) in [Marketing Campaigns]({{root_url}}/ui/managing-contacts/adding-contacts/) for marketing emails and our [transactional templates application]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/smtpapi.html) for transactional emails.
