---
seo:
  title: What is my API key?
  description: What is my API key?
  keywords: password, credentials, api, key, api_key, credential
title: What is my API key?
weight: 0
layout: page
zendesk_id: 200181818
navigation:
  show: true
---

SendGrid offers customers the ability to manage the security of their accounts and their sending with [API keys](https://app.sendgrid.com/settings/api_keys).

API Keys allow you to generate an authentication credential that is separate from your username and password. They are independent from one another and are easily disposable. You should create unique API keys for each of your applications or servers so that you can easily revoke them without disrupting other systems if needed.

 

Example:

> Authorization: Bearer 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

\*For sending via SMTP, provide the string `apikey` as the SMTP username, and use your API Key as the password.

 

For more information please feel free to review our [documentation](https://sendgrid.com/docs/Classroom/Send/api_keys.html) page.
