---
layout: page
title: Template Engine Overview
weight: 100
alias: /API_Reference/Web_API_v3/Template_Engine/index.html
navigation:
  show: true
---

The transactional templates API lets you programmatically [create and manage
templates]({{ root_url }}/API_Reference/Web_API_v3/Template_Engine/templates.html) for your transactional email. You may [version these templates]({{ root_url }}/API_Reference/Web_API_v3/Template_Engine/versions.html), then [send them through the existing SendGrid API]({{ root_url }}/API_Reference/Web_API_v3/Template_Engine/smtpapi.html).

[Templates]({{ root_url }}/API_Reference/Web_API_v3/Template_Engine/templates.html): Templates are re-usable email layouts, that may be created and interacted with through the API. These are intended to be a specific type of message, such as 'Weekly Product Update'.

[Versions]({{ root_url }}/API_Reference/Web_API_v3/Template_Engine/versions.html): Templates may have multiple versions with different content, these may be changed and activated through the API. These allow split testing, multiple languages of the same template, etc.

[Sending Transactional Templates]({{ root_url }}/API_Reference/Web_API_v3/Template_Engine/smtpapi.html): The [SMTP API]({{ root_url }}/API_Reference/SMTP_API/index.html) is used to send templated email through SendGrid. The Web API with the [x-smtpapi parameter]({{ root_url }}/API_Reference/Web_API/mail.html#-send) can also be used.
