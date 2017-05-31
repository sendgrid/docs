---
seo:
  title: Does Sendgrid offer a sandbox or test environment?
  description: Learn about options to help test your integrations...
  keywords: sandbox, sand, box, throughput, development, dev, staging, speed, developers, test, sandbox, environment, trial
title: Does Sendgrid offer a sandbox or test environment?
weight: 0
layout: page
navigation:
  show: true
---

We do not offer a true "sandbox" environment, however we do have a [free trial](https://sendgrid.com/transactional-email/pricing) which allows you to send 100 emails per day, and also gives you access to almost all of the features offered with our higher package levels. The free trial does not include access to a dedicated IP or IP whitelabeling.

If you are looking to test API integration, you can enable the sandbox_mode in the [mail_settings parameters of our Mail Send API](https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/sandbox_mode.html). **This will allow you to validate each parameter you include, and the structure of your JSON payload, all without actually sending a message.**

{% info %}
Mail Send API calls using sandbox_mode *do not* count against your monthly or trail account limits. 
{% endinfo %}

We also have a [sink email address]({{root_url}}/Classroom/Troubleshooting/Delivery_Issues/safely_test_your_sending_speed.html) that can help you test message throughput for your integration.

{% info %}
30 day Free Trial users will be limited to 100 emails per day until they have verified their account. After account verification, they may send up to a total of 40,000 emails for the remainder of the 30 day period.

The 30 day period begins immediately after account _creation_, **not** account _verification_.

Once the 30 day period has ended, Free Trial users will be limited to sending 100 emails per day at no additional cost.
{% endinfo %}
