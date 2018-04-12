---
layout: page
seo:
  title: Rate Limits
title: Rate Limits
description: Learn about how API calls to the Web API v3 are rate limited.
weight: 96
navigation:
  show: true
---
<page-anchor el="h3">
Rate Limit Response Header
</page-anchor>

All calls within the Web API are allotted a specific number of requests
per refresh period.

Each Web API request returns the following header information
regarding rate limits and number of requests left.

Depending on the endpoint you are trying to reach, it will have a
specific number of allowed requests per refresh period. Once this
threshold has been reached, we will return a status code `429` response.

Example Request
{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource HTTP/1.1
{% endcodeblock %}

Example Response
{% codeblock lang:http %}
HTTP/1.1 200 OK
Content-Type: application/json
X-RateLimit-Limit: 500
X-RateLimit-Remaining: 499
X-RateLimit-Reset: 1392815263

{
  "foo": "bar"
}
{% endcodeblock %}

* * * * *

{% anchor h3%}
When Limit is Reached
</page-anchor>

You will no longer be able to make requests against that endpoint for
the duration of that refresh period.

Example Request
{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource/ HTTP/1.1
{% endcodeblock %}

Example Response
{% codeblock lang:http %}
HTTP/1.1 429 TOO MANY REQUESTS
Content-Type: application/json
X-RateLimit-Limit: 150
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1392815263

{
  "errors": [
    {
      "field": null,
       "message": "too many requests"
    },
  ]
}
{% endcodeblock %}
