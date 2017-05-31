---
seo:
  title: Does Sendgrid offer a sandbox or test environment?
  description: Does Sendgrid offer a sandbox or test environment?
  keywords: box, throughput, development, dev, staging, sand, speed, developers, test, sandbox, environment, trial
title: Does Sendgrid offer a sandbox or test environment?
weight: 0
layout: page
zendesk_id: 203891358
navigation:
  show: true
---

We do not offer a true "sandbox" environment, however we do have a [free trial](https://sendgrid.com/transactional-email/pricing) which allows you to send 100 emails per day, and also gives you access to almost all of the features offered with our higher package levels. The free trial does not include access to a dedicated IP or IP whitelabeling.

We also have a [sink email address]({{root_url}}/Classroom/Troubleshooting/Delivery_Issues/safely_test_your_sending_speed.html) that can help you test message throughput for your integration, as well as a [sandbox_mode setting]({{root_url}}/Classroom/Send/v3_Mail_Send/sandbox_mode.html) for API v3 which prevents emails from being sent to the recipient. 

{% info %}
SendGrid is in the process of introducing a 30 day Free Trial alongside an improved onboarding experience.

Free Trial users will be limited to 100 emails per day until they have verified their account. After account verification, they may send up to a total of 40,000 emails for the remainder of the 30 day period.

The 30 day period begins immediately after account _creation_, **not** account _verification_.

Once the 30 day period has ended, Free Trial users will be limited to sending 100 emails per day at no additional cost.
{% endinfo %}
