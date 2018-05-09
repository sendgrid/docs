---
seo:
  title: My emails are displaying as "on behalf of" or "via" in some mail clients
  description: My emails are displaying as "on behalf of" or "via" in some mail clients
  keywords: gmail, from, dkim, on behalf, via, white, label, whitelabel, outlook
title: My emails are displaying as "on behalf of" or "via" in some mail clients
weight: 0
layout: page
zendesk_id: 200181738
navigation:
  show: true
---

A handful of ISPs and mail clients, such as Gmail or Outlook, will display a message with the Sender header set as  **“on behalf of”** or **"via"** and then the address that is in the Sender header, a practice employed as an anti-phishing measure. This is caused by an incongruity between the domain defined within the DKIM signature and the domain in the 'from' address.

![viamessage_001.png](https://sendgrid.zendesk.com/attachments/token/vhcbrycms5ryqog/?name=viamessage_001.png)



By default, SendGrid signs all email with DKIM to improve deliverability with recipient domains. However, when using accounts that do not include sender authentication, this means that the domain in the 'from' field will not have the proper <acronym title="Domain Name System">DNS </acronym>record to authenticate the e-mail. Because of this, SendGrid inserts a Sender header as either sendgrid.me or sendgrid.info, and the e-mail can then be properly authenticated.


You can solve this display issue by matching the domain in your 'from' address to what you have set within your account sender authentication wherever possible. Additionally reverse DNS is available for Pro packages and above.
