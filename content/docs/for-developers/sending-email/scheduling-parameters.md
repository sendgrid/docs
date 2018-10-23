---
seo:
  title: Scheduling Parameters
  description: Scheduling an email with SMTP
  keywords: SMTP, send email, scheduling
title: Scheduling Parameters
group: x-smtpapi
weight: 10
layout: page
navigation:
  show: true
---

With scheduling, you can send large volumes of email in queued batches or target individual recipients by specifying a custom UNIX timestamp parameter.
Using the parameters defined below, you can queue batches of emails targeting individual recipients.

<call-out>

**Emails can be scheduled up to 72 hours in advance.** However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/).

</call-out>

This parameter allows SendGrid to begin processing a customer’s email requests before sending. SendGrid queues the messages and releases them when the timestamp indicates. This technique allows for a more efficient way to distribute large email requests and can **improve overall mail delivery time** performance. This functionality:

* Improves efficiency of processing and distributing large volumes of email.
* Reduces email pre-processing time.
* Enables you to time email arrival to increase open rates.
* Is available for free to all SendGrid customers.

<call-out>

Cancel Scheduled sends by including a batch ID with your send. For more information, check out [Cancel Scheduled Sends]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html)!

</call-out>

<call-out type="warning">

Using both `send_at` and `send_each_at` is not valid. Setting both causes your request to be dropped.

</call-out>

## 	Send At

To schedule a send request for a large batch of emails, use the `send_at` parameter which will send all emails at approximately the same time. `send_at` is a [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).


### Example of send_at email header
```json
{
  "send_at": 1409348513
}
```

## 	Send Each At

To schedule a send request for individual recipients; use `send_each_at` to send emails to each recipient at the specified time. `send_each_at` is a sequence of UNIX timestamps, provided as an array. There must be one timestamp per email you wish to send.


### Example of send_each_at email header
```
{
  "to": [
    "ben@example.com",
    "john@example.com",
    "mikeexampexample@example.com",
    "example@example.com",
    "example@example.com",
    "example@example.com"
  ],
  "send_each_at": [
    1409348513,
    1409348514,
    1409348515
  ]
}
```

To allow for the cancellation of a scheduled send, you must include a `batch_id` with your send. To generate a valid `batch_id`, use the [batch id generation endpoint]({{root_url}}/API_Reference/Web_API_v3/cancel_scheduled_send.html#Cancel-Scheduled-Sends). A `batch_id` is valid for 10 days (864,000 seconds) after generation.


### Example of including a batch_id
```
{
  "to": [

    "ben@example.com",
    "john@example.com",
    "mikeexampexample@example.com",
    "example@example.com",
    "example@example.com",
    "example@example.com"
  ],
  "send_at": 1409348513,
  "batch_id": "MWQxZmIyODYtNjE1Ni0xMWU1LWI3ZTUtMDgwMDI3OGJkMmY2LWEzMmViMjYxMw"
}
```

## 	Additional Resources

- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
- [Integrating with SMTP]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
- [Building an SMTP Email]({{root_url}}/for-developers/sending-email/building-an-smtp-email/)
