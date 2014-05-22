---
layout: page
weight: 100
title: Template Engine API (Beta)
navigation:
  show: true
---

The Template Engine is the first feature available on SendGrid's new API
architecture. As a result, interacting with the endpoints described here
is different than the other existing APIs, so please read carefully!

{% anchor h2 %}
Authentication
{% endanchor %}

To authenticate, add an <code>Authentication</code> header to your API
request that contains a base64-encoded <code>username:password</code>
string. Read more about [basic access
authentication](http://en.wikipedia.org/wiki/Basic_access_authentication#Client_side).

{% codeblock %}
GET https://api.sendgrid.net/v3/resource HTTP/1.1
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ===
{% endcodeblock %}

{% anchor h2 %}
Host
{% endanchor %}

The host for API requests is
{% codeblock %}
https://api.sendgrid.net/v3/
{% endcodeblock %}

All requests must be made over HTTPS. HTTP is not supported.

{% anchor h2 %}
Requests
{% endanchor %}

{% anchor h3 %}
Authentication Header
{% endanchor %}

You must provide an authentication header as described in
[Authentication](#-Authentication).

{% anchor h3 %}
Accept Header
{% endanchor %}

The API provides JSON responses. This header is not currently required, 
though it may be required in the future. If not set, the API will use
application/json.

{% codeblock lang:http %}
GET https://api.sendgrid.net/v3/endpoint HTTP/1.1
Accept: application/json
{% endcodeblock %}

{% anchor h3 %}
HTTP Verbs
{% endanchor %}

Depending on the resource, we support the following HTTP verbs:

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Verb</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>Retrieve a resource or group of resouces</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Create a new resource</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Update an existing resource</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Delete an existing resource</td>
    </tr>
    <tr>
      <td>OPTIONS</td>
      <td>View allowed verbs against a specific resources</td>
    </tr>
  </tbody>
</table>

{% anchor h3 %}
Rate Limits
{% endanchor %}

All calls within the Web API are allotted a specific number of requests
per refresh period.

Each Web API requests returns the following header information 
regarding rate limits and number of requests left.

<table class="table table-bordered table-striped">
<thead>
<tr ><th>Header</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr><td>X-RateLimit-Remaining</td>
<td>The number of requests available to make to this endpoint</td>
</tr>
<tr><td>X-RateLimit-Limit</td>
<td>Total number of requests you are allowed to make to this endpoint</td>
</tr>
<tr><td>X-RateLimit-Reset</td>
<td>When your credit allowance is to reset. Format is in a unix timestamp.</td>
</tr>
</tbody>
</table>

Depending on the endpoint you are trying to reach, it will have a
specific number of allowed requests per refresh period. Once this
threshold has been reached, we will return a status code 429 response.

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

{% anchor h3 %}
When Limit is Reached
{% endanchor %}

You will no longer be able to make requests against that endpoint for
the duration of that refresh period. All unauthenticated calls are rate
limited at the IP level.

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

{% anchor h3 %}
Pagination
{% endanchor %}

Some GET resources allow for retrieval of information in batches. We
will provide the query args in the resource documentation when available
to consume.

When requesting multiple items, we will default the request limit to 500
items. You can specify a different limit but cannot not exceed the
default limit.

Resources documented will display a bolded list of available paginated
parameters if available.

In this example, we will display an example paginated example. In the
resource documentation, we will only provide the bolded list of
available parameters.

Example
{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource?limit=300&offset=10 HTTP/1.1
{% endcodeblock %}

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>limit</td>
      <td>The number of records to return</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>The number of records to skip</td>
  </tbody>
</table>

{% anchor h3 %}
Search & Parameters
{% endanchor %}

Some resources allow you to search by a specific field. Other resources
require you to append a parameter to the URI.

In this example, we will display a paginated uri example, searching for
resources where the email contains 'foo'.

Example
{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource?email=foo&foo=bar HTTP/1.1
{% endcodeblock %}

{% anchor h3 %}
Request Body
{% endanchor %}

When submitting data to a resource via POST or PUT, you must
submit your information in JSON. Failure to do so will result in a bad
request error.

Example
{% codeblock lang:http %}
POST https://api.sendgrid.com/v3/credentials/ HTTP/1.1
Content-Type: application/json

{ 
  "foo": "bar",
  "hello": "world",
}
{% endcodeblock %}
