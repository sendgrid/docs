---
layout: page
weight: 0
title: Mail Merge
navigation:
  show: true
seo:
  title: Mail Merge
  override: true
  description: Mail Merge is a process to create customize emails from a generic form or template.
---

Mail Merge is a process to create customized emails, letters, and documents from a generic form or template. The original document contains static text with placeholders for substitutions for elements like names, addresses, emails, or other individualized or unique information. Typically the data used to populate these placeholders is held in a database, spreadsheet, or csv file. A column in a spreadsheet could contain a list of names that correspond with a list of email addresses. These would then be populated into the template, creating a customized email per email address. 

This functionality can be replicated using SendGrid's [SMTPAPI](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html), using [Substitution Tags](https://sendgrid.com/docs/API_Reference/SMTP_API/substitution_tags.html) and [Section Tags](https://sendgrid.com/docs/API_Reference/SMTP_API/section_tags.html) in our [Marketing Email App](https://sendgrid.com/docs/Marketing_Emails/recipients.html) for marketing emails and our [Template Engine](https://sendgrid.com/docs/API_Reference/Template_Engine_API/smtpapi.html) for transactional emails.
