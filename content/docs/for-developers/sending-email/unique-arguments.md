---
seo:
  title: Unique Arguments
  description: Add unique arguments to customize your SMTP emails event tracking
  keywords: SMTP, unique arguments, email events, email activity
title: Unique Arguments
group: x-smtpapi
weight: 10
layout: page
navigation:
  show: true
---

The SMTP API JSON string allows you to attach an unlimited number of unique arguments to your email **up to 10,000 bytes**. The arguments are used only for tracking. They can be retrieved through the [Event API]({{root_url}}/for-developers/tracking-events/event/) or the [Email Activity]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/) page.

These arguments can be added using a JSON string like this:

```json
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
```

These arguments can then be seen in posts from the [SendGrid Event Webhook]({{root_url}}/for-developers/tracking-events/event/). The contents of one of these POST requests would look something like this:

### Example Webhook Post Data
```json
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
```

<call-out type="warning">

Bounces returned with the Return-Path cause `unique_rgs not to be attached to an event. This can cause issues when developing unique_args POST handling.

</call-out>

To apply different unique arguments to individual emails, you may use [substitution tags]({{root_url}}/for-developers/sending-email/substitution-tags/). An example of this would look like:

```json
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
```

## 	Additional Resources

- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
- [Integrating with SMTP]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
- [Building an SMTP Email]({{root_url}}/for-developers/sending-email/building-an-smtp-email/)
