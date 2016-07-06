---
layout: page
seo:
  title: Responses
title: Responses
description: Learn about responses to Web API v3 requests.
weight: 97
navigation:
  show: true
---
{% anchor h3 %}
Content-Type Header
{% endanchor %}

All responses are returned in JSON format. We specify this by sending
the `Content-Type` header.

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource HTTP/1.1
{% endcodeblock %}

{% codeblock lang:http %}
HTTP/1.1 200 OK
Content-Type: application/json

{
    "foo": "bar",
}
{% endcodeblock %}

* * * * *

{% anchor h3 %}
Status Codes
{% endanchor %}

Below is a table description of the various status codes we currently
support against resources.

<table class="table table-bordered table-striped">
  <tr>
    <th>Status Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>200</td><td>No error</td>
  </tr>
  <tr>
    <td>201</td><td>Successfully created</td>
  </tr>
  <tr>
    <td>204</td><td>Successfully deleted</td>
  </tr>
  <tr>
    <td>400</td><td>Bad request</td>
  </tr>
  <tr>
    <td>401</td><td>Requires authentication</td>
  </tr>
  <tr>
    <td>406</td><td>Missing Accept header. example: Accept: application/json</td>
  </tr>
  <tr>
    <td>429</td><td>Too Many Requests</td>
  </tr>
  <tr>
    <td>500</td><td>Internal server error</td>
  </tr>
</table>

* * * * *

{% anchor h3 %}
Pagination
{% endanchor %}

When a request is made with a pagination query, the following data is
included in the header to allow for easy traversal of previous, current,
first, and last page of the data set.

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource?limit=5&offset=0 HTTP/1.1
{% endcodeblock %}

{% codeblock lang:http %}
HTTP/1.1 200 OK
Content-Type: application/json

Link: <http://api.sendgrid.com/v3/resource?limit=5&offset=5>; rel="next"; title="2",
      <http://api.sendgrid.com/v3/resource?limit=5&offset=0>; rel="prev"; title="1",
      <http://api.sendgrid.com/v3/resource?limit=5&offset=10>; rel="last"; title="3",
      <http://api.sendgrid.com/v3/resource?limit=5&offset=0>; rel="first"; title="1"
{% endcodeblock %}
