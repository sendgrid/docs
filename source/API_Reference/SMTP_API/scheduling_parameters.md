---
layout: page
weight: 0
title: Scheduling Parameters
navigation:
  show: true
---

SendGrid's [SMTP API]({{ root_url }}/API_Reference/SMTP_API/) allows developers to specify custom scheduling parameters. Using the parameters defined below, SendGrid will allow a customer to queue batches of emails targeting individual recipients by using a UNIX time stamp parameter. This parameter allows SendGrid to begin processing a customer’s email requests before sending. SendGrid will then queue those messages and release them when the time stamp is exceeded. This technique allows for a more efficient way to distribute large email requests and can **improve overall mail delivery time** performance.

{% info %}
Once you send SendGrid a request with a scheduling parameter, that email request cannot be cancelled and we currently only accept time stamps no greater than 72 hours in advance.
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
