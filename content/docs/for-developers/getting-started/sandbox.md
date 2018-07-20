---
seo:
  title: Does Sendgrid offer a sandbox or test environment?
  description: Learn about options to help test your integrations...
  keywords: sandbox, sand, box, throughput, development, dev, staging, speed, developers, test, sandbox, environment, trial
title: Does Sendgrid offer a sandbox or test environment?
weight: 0
layout: page
zendesk_id: 203891358
navigation:
  show: true
---

SendGrid offers a [free trial](https://sendgrid.com/transactional-email/pricing) which allows you to send 100 emails per day, and also gives you access to almost all of the features offered with our higher package levels. The free trial does not include access to a dedicated IP or IP whitelabeling.

We have a [sink email address]({{root_url}}/Classroom/Troubleshooting/Delivery_Issues/safely_test_your_sending_speed.html) that can help you test message throughput for your SMTP integration.

If you are looking to test your API sending integration, you can enable the sandbox_mode in the [mail_settings parameters of our Mail Send API](https://sendgrid.com/docs/help-support/getting-started/sandbox-mode.html). **Sandbox Mode allows you to validate each included parameter and the structure of your JSON payload - all without sending a message.**

<call-out>

Free Trial users will be limited to 100 emails per day until they have verified their account. After account verification, they may send up to a total of 40,000 emails for the remainder of the 30 day period.

The 30 day period begins immediately after account _creation_, **not** account _verification_. Once the 30 day period has ended, Free Trial users will be limited to sending 100 emails per day at no additional cost.

Messages sent to the sink address count against your monthly email limits.

Mail Send API calls using sandbox_mode *do not* count against your monthly or trial account limits.

</call-out>
