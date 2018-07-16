---
layout: page
seo:
  title: Errors
title: Errors
description: Learn about error reporting for the Web API v3
weight: 95
navigation:
  show: true
---
{% anchor h3 %}
Response Codes
{% endanchor %}

{% anchor h3 %}
Failed Requests
{% endanchor %}

The general format guidelines are displayed when the accompanying status
code is returned.

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource HTTP/1.1
{% endcodeblock %}

{% codeblock lang:http %}
HTTP/1.1 400 BAD REQUEST
Content-Type: application/json

{
    "errors": [
      {"field": "identifier1", "message": "error message explained"},
      {"field": "identifier2", "message": "error message explained"},
      {"field": "identifier3", "message": "error message explained"},
    ]
}
{% endcodeblock %}
