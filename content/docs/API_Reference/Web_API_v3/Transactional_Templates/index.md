---
layout: page
title: Transactional Templates Overview
weight: 100
alias: /API_Reference/Web_API_v3/Transactional_Templates/index.html
navigation:
  show: true
---

The transactional templates API lets you programmatically [create and manage
templates]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/templates.html) for email you send via SendGrid's Email API. You may [version these templates]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/versions.html), then send them through SendGrid's [SMTP API]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/smtpapi.html), the [Web API v2]({{root_url}}/API_Reference/Web_API/mail.html), or the [Web API v3]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html).

**[Templates]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/templates.html)**

Templates are re-usable email layouts, that may be created and interacted with through the API. These are intended to be a specific type of message, such as 'Weekly Product Update'.

**[Versions]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/versions.html)**

Templates may have multiple versions with different content, these may be changed and activated through the API. These allow split testing, multiple languages of the same template, etc.

**Sending Transactional Templates**

You can send transactional templates using one of three ways:

* Using the [SMTP Relay]({{root_url}}/Integrate/index.html#-SMTP-Relay)
* Including the template ID in the `templates` parameter of the [Web API v3 Mail Send endpoint]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html)
* Using the x-smtpapi parameter in the Web API v2 Mail Send endpoint
