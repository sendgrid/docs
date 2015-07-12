---
layout: page
weight: 755
title: API v3 Overview
navigation:
  show: true
---

{% info %}
SendGrid's new API architecture features significant changes in behavior as compared to previous endpoints, so please read carefully!
{% endinfo %}

* * * * *

{% anchor h2 %}
Authentication
{% endanchor %}

To authenticate, add an <code>Authorization</code> header to your API
request that contains a base64-encoded <code>username:password</code>
string. Read more about [basic access
authentication](http://en.wikipedia.org/wiki/Basic_access_authentication#Client_side).

Example header:

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource HTTP/1.1
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ===
{% endcodeblock %}

If you want to use the API via `curl`, it has support for base64-encoded
authentication built-in. For example:

{% codeblock lang:bash %}
curl -H "Content-Type: application/json" -u sendgrid_username -X POST -d '{"name":"example_name"}' https://api.sendgrid.com/v3/templates
{% endcodeblock %}

You then enter your password at the prompt.

V3 API also supports the use of API Keys. API Keys allow you to use another method of authentication seperate from your username and password to your account. Keys add an additional layer of secuirty for your account. API Keys can be generated in your account - visit <a href="https://app.sendgrid.com/settings/api_keys">https://app.sendgrid.com/settings/api_keys</a>. To use keys, you must set a plain text header named "Authorizaton" with the contents of the header being "Bearer XXX" where XXX is your API Secret Key.

Example header:

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource HTTP/1.1
Authorization: Bearer TS.Wy8e9dgMSl2_Zu_TOzO8Qg.lWy8e9dgMSl2_Zu_TOzO8Qg.lWy8e9dgMSl2_Zu_TOzO8Qg
{% endcodeblock %}

{% codeblock lang:bash %}
curl -X "GET" "https://api.sendgrid.com/v3/templates" -H "Authorization: Bearer TS.Wy8e9dgMSl2_Zu_TOzO8Qg.lWy8e9dgMSl2_Zu_TOzO8Qg.lWy8e9dgMSl2_Zu_TOzO8Qg" -H "Content-Type: application/json"
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Host
{% endanchor %}

The host for API requests is `https://api.sendgrid.com/v3/`

{% info %}
All requests must be made over HTTPS. HTTP is **not** supported.
{% endinfo %}

* * * * *

{% anchor h2 %}
Rate Limits
{% endanchor %}

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

{% anchor h3%}
When Limit is Reached
{% endanchor %}

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

* * * * *

{% anchor h2 %}
Requests
{% endanchor %}

{% anchor h3 %}
Authorization Header
{% endanchor %}

You must provide an authorization header as described in
[Authentication](#-Authentication).

{% anchor h3 %}
Accept Header
{% endanchor %}

The API provides JSON responses. The [accept header](http://www.soapui.org/Best-Practices/understanding-rest-headers-and-parameters.html) is not currently
required, though it may be required in the future. If not set, the
API will use `application/json`.

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/endpoint HTTP/1.1
Accept: application/json
{% endcodeblock %}

{% anchor h3 %}
Arrays of Data
{% endanchor %}

When you send an array of data in a `GET` request, you will include the parameter multiple times on the URL. We do not require that you add brackets to the parameter name.

Example Array in a GET request

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/endpoint?parameter=data1&parameter=data2 HTTP/1.1
{% endcodeblock %}

{% anchor h3 %}
HTTP Verbs
{% endanchor %}

Depending on the resource, we support the following HTTP verbs:

<table class="table table-bordered table-striped">
  <tr>
    <th>Verb</th>
    <th>Description</th>
  </tr>
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
</table>

{% anchor h3 %}
Request Body
{% endanchor %}

When submitting data to a resource via `POST` or `PUT`, you must
submit your payload in JSON.

{% codeblock lang:http %}
POST https://api.sendgrid.com/v3/templates/ HTTP/1.1
Content-Type: application/json

{
  "name": "new template name"
}
{% endcodeblock %}

* * * * *

{% anchor h3 %}
Pagination
{% endanchor %}

Some `GET` resources allow for retrieval of information in batches. We
will provide the query args in the resource documentation when available
to consume.

When requesting multiple items, we will default the request limit to 500
items. You can specify a different limit but cannot not exceed the
default limit.

Resources documented will display a bolded list of available paginated
parameters if available.

Below is a basic pagination example. In the resource documentation, we will only provide the bolded list of available parameters.

{% info %}
When information is batched, a <a href="http://tools.ietf.org/html/rfc5988">Link Header</a> will be provided in the response.
{% endinfo %}

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource?limit=300&offset=10 HTTP/1.1
{% endcodeblock %}

<table class="table table-bordered table-striped">
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>limit</td>
    <td>The number of records to return</td>
  </tr>
  <tr>
    <td>offset</td>
    <td>The number of records to skip</td>
  </tr>
</table>

* * * * *

{% anchor h3 %}
Search & Parameters
{% endanchor %}

Some resources allow for you to search by a specific field. Other resources
require you to append a parameter to the URI.

In this example, we will display a paginated uri example, searching for
resources where the email contains `foo`.

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource?email=foo&bar=baz HTTP/1.1
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Responses
{% endanchor %}

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
    <td>429</td><td>Too Many Requests</td>
  </tr>
  <tr>
    <td>500</td><td>Internal server error</td>
  </tr>
</table>

* * * * *

{% anchor h3 %}
Successful Requests
{% endanchor %}

Below is a general overview of what resource objects are returned on
successful Web API requests.

<table class="table table-bordered table-striped">
  <tr>
    <th>Verb</th><th>Resource object returned</th>
  </tr>
  <tr>
    <td>GET</td><td>A single resource object or array of resource objects</td>
  </tr>
  <tr>
    <td>PATCH</td><td>The updated resource object is returned</td>
  </tr>
  <tr>
    <td>DELETE</td><td>No content is returned</td>
  </tr>
  <tr>
    <td>POST</td><td>The newly created resource object is returned</td>
  </tr>
</table>

* * * * *

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
