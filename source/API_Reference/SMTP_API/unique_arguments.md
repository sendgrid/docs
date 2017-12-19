---
seo:
  title: Unique Arguments
  description: Add unique arguments to customize your SMTP emails event tracking
  keywords: SMTP, unique arguments, email events, email activity
title: Unique Arguments
weight: 10
layout: page
navigation:
  show: true
---

The SMTP API JSON string allows you to attach an unlimited number of unique arguments to your email **up to 10,000 bytes**. The arguments are used only for tracking. They can be retrieved through the [Event API]({{root_url}}/API_Reference/Webhooks/event.html) or the [Email Activity]({{root_url}}/User_Guide/Delivery_Metrics/email_activity.html) page.

These arguments can be added using a JSON string like this:

{% codeblock lang:json %}
{
  "unique_args": {
    "customerAccountNumber": "55555",
    "activationAttempt": "1",
    "New Argument 1": "New Value 1",
    "New Argument 2": "New Value 2",
    "New Argument 3": "New Value 3",
    "New Argument 4": "New Value 4"
  }
}
{% endcodeblock %}

These arguments can then be seen in posts from the [SendGrid Event Webhook]({{root_url}}/API_Reference/Webhooks/index.html). The contents of one of these POST requests would look something like this:

<h4>Example Webhook Post Data</h4>
{% codeblock lang:json %}
{
  "sg_message_id": "145cea24eb8.1c420.57425.filter-132.3382.5368192A3.0",
  "New Argument 1": "New Value 1",
  "event": "processed",
  "New Argument 4": "New Value 4",
  "email": "useexampexample@example.com",
  "email": "example@example.com",
  "smtp-id": "<145cea24eb8.1c420.57425@localhost.localdomain>",
  "timestamp": 1399331116,
  "New Argument 2": "New Value 2",
  "New Argument 3": "New Value 3",
  "customerAccountNumber": "55555",
  "activationAttempt": "1"
}
{% endcodeblock %}

{% warning %}Bounces returned with the Return-Path cause `unique_rgs not to be attached to an event. This can cause issues when developing unique_args POST handling. {% endwarning %}

Unique Arguments will also be shown in the [Email Activity tab]({{site.app_url}}/email_activity) of your account.

To apply different unique arguments to individual emails, you may use [substitution tags]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html). An example of this would look like:

{% codeblock lang:json %}
{
  "sub": {
    "-account_number-": [
      "314159",
      "271828"
    ]
  },
  "unique_args": {
    "customerAccountNumber": "-account_number-"
  }
}
{% endcodeblock %}

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/API_Reference/SMTP_API/getting_started_smtp.html)
- [Integrating with SMTP]({{root_url}}/API_Reference/SMTP_API/integrating_with_the_smtp_api.html)
- [Building an SMTP Email]({{root_url}}/API_Reference/SMTP_API/building_an_smtp_email.html)