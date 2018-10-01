---
seo:
  title: Expired
  description: Bounced - Expired emails are emails that are unable to be delivered within 72 hours.
  keywords: expired, bounce, undelivered email
title: Expired
weight: 0
layout: page
navigation:
  show: false
---

If an email bounces, we will retry for up to 72 hours. If the email is unable to be delivered within the last 72 hours, it will expire and be marked as Bounced - Expired.

Bounced emails are commonly due to SMTP 4.X.X errors or SMTP 5.X.X errors, which cause an email to be undeliverable:

* An expired, inactive, or disabled recipient address
* The recipient's mailbox has exceeded it's limit
* An incorrect receipient email address
* Domain frequency limited
* Connection frequency limited
* IP frequency limited
* Too many invalid recipients

{% anchor h3 %}
Additional Resources
{% endanchor %}

* [Bounces]({{root_url}}/Glossary/bounces.html)
* [Retrieve and Edit your List of Bounces]({{root_url}}/API_Reference/Web_API/bounces.html)
* [Email Activity & Bounces](https://sendgrid.com/docs/User_Guide/email_activity.html)
