---
layout: page
weight: 0
title: Scheduling Parameters
navigation:
  show: true
---

SendGrid's [SMTPAPI]({{ root_url }}/API_Reference/SMTP_API/) allows developers to specify custom scheduling parameters. The SendGrid Delayed Sending feature will allow a customer to queue batches of emails targeting individual recipients by using a UNIX time stamp parameter. This parameter allows SendGrid to begin processing a customer’s email requests before sending. SendGrid will then queue those messages release them when the time stamp is exceeded. This technique allows for a more efficient way to distribute large email requests and can **improve overall mail delivery time** performance.

{% info %}
Once you send SendGrid a delayed send request, that email request cannot be cancelled and we currently only accept time stamps no greater than 24 hours in advance.
{% endinfo %}

{% anchor h2 %}
Send All
{% endanchor %}	
	
To delay a send request for a large batch of emails use the `send_all` parameter which will all emails at approximately the same time. `send_all` is a UNIX timestamp encoded as a string.

{% codeblock lang:json %}
{
  "send_all": "1409348513"
}
{% endcodeblock %}

{% anchor h2 %}
Send Each At
{% endanchor %}	
	
To delay a send request for individual recipients use `send_each_at` to send requests to each recipient at the specified time. `send_each_at` is a sequence of UNIX timestamps, separated by commas, encoded as a string. There must be one timestamp per email you wish to send.

{% codeblock lang:json %}
{
	"to": [
	    "<ben@example.com>",
	    "john@example.com",
	    "mike@example.com"
      ],
   "send_each_at": "1409348513,1409348514,1409348515"
}
{% endcodeblock %}