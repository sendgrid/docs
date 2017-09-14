---
layout: page
weight: 0
title: Scheduling Parameters
navigation:
  show: true
---

With scheduling you can send large volumes of email in queued batches or target individual recipients by specifying a custom UNIX timestamp parameter.
Using the parameters defined below, you can queue batches of emails targeting individual recipients.

{% info %}
**Emails can be scheduled up to 72 hours in advance.** However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/index.html).
{% endinfo%}

This parameter allows SendGrid to begin processing a customer’s email requests before sending. SendGrid will then queue those messages and release
them when the timestamp is exceeded. This technique allows for a more efficient way to distribute large email requests and can **improve overall mail delivery time**
performance.  This functionality:

* Improves efficiency of processing and distributing large volumes of email.
* Reduces email pre-processing time.
* Enables you to time email arrival to increase open rates.
* Is available for free to all SendGrid customers.

{% info %}
Scheduled sends can be cancelled, if you include a batch ID with your send. For more information, check out [Cancel Scheduled Sends]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html)!
{% endinfo %}

{% warning %}
Using both `send_at` and `send_each_at` is not valid and will cause your request to be dropped.
{% endwarning %}

{% anchor h2 %}
Send At
{% endanchor %}

To schedule a send request for a large batch of emails use the `send_at` parameter which will send all emails at approximately the same time. `send_at` is a [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).

<h4>Example of send_at email header</h4>
{% codeblock lang:json %}
{
  "send_at": 1409348513
}
{% endcodeblock %}

{% anchor h2 %}
Send Each At
{% endanchor %}

To schedule a send request for individual recipients; use `send_each_at` to send emails to each recipient at the specified time. `send_each_at` is a sequence of UNIX timestamps, provided as an array. There must be one timestamp per email you wish to send.

<h4>Example of send_each_at email header</h4>
{% codeblock lang:json %}
{
  "to": [
    "<ben@example.com>",
    "john@example.com",
    "mike@example.com"
  ],
  "send_each_at": [
    1409348513,
    1409348514,
    1409348515
  ]
}
{% endcodeblock %}

To allow for the cancellation of a scheduled send, you must include a `batch_id` with your send. The endpoint for cancellation needs a `batch_id` to cancel with. To generate a valid `batch_id`, use the [batch id generation endpoint]({{root_url}}/API_Reference/Web_API_v3/cancel_scheduled_send.html#Cancel-Scheduled-Sends). A `batch_id` is valid for 10 days (864,000 seconds) after generation.

<h4>Example of including a batch_id</h4>
{% codeblock lang:json %}
{
  "to": [
    "<ben@example.com>",
    "john@example.com",
    "mike@example.com"
  ],
  "send_at": 1409348513,
  "batch_id": "MWQxZmIyODYtNjE1Ni0xMWU1LWI3ZTUtMDgwMDI3OGJkMmY2LWEzMmViMjYxMw"
}
{% endcodeblock %}
