---
layout: page
seo:
  title: Requests
title: Requests
description: Learn how to make calls to the Web API v3.
weight: 98
navigation:
  show: true
---

<page-anchor el="h2">
Making a Request
</page-anchor>

<page-anchor el="h3">
Host
</page-anchor>

The host for API requests is `https://api.sendgrid.com/v3/`

{% info %}
All requests must be made over HTTPS. HTTP is **not** supported.
{% endinfo %}

<page-anchor el="h3">
Authorization Header
</page-anchor>

You must provide an authorization header as described in
[Authentication](#-Authentication).

<page-anchor el="h3">
HTTP Verbs
</page-anchor>

Depending on the resource, we support the following HTTP verbs:

<table class="table table-bordered table-striped">
  <tr>
    <th>Verb</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>Retrieve a resource or group of resources</td>
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

<page-anchor el="h3">
Accept Header
</page-anchor>

The API provides JSON responses. The [accept header](http://www.soapui.org/Best-Practices/understanding-rest-headers-and-parameters.html) is currently required for some API calls, and is recommended for all of them. It should be set to `application/json`.

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/endpoint HTTP/1.1
Accept: application/json
{% endcodeblock %}

<page-anchor el="h3">
Arrays of Data
</page-anchor>

When you send an array of data in a `GET` request, you will include the parameter multiple times on the URL. We do not require that you add brackets to the parameter name.

Example Array in a GET request

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/endpoint?parameter=data1&parameter=data2 HTTP/1.1
{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Formatting Your Request
</page-anchor>

<page-anchor el="h3">
Request Body
</page-anchor>

When submitting data to a resource via `POST` or `PUT`, you must
submit your payload in JSON.

{% codeblock lang:http %}
POST https://api.sendgrid.com/v3/templates/ HTTP/1.1
Content-Type: application/json

{
  "name": "new template name"
}
{% endcodeblock %}

<page-anchor el="h3">
Pagination
</page-anchor>

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

<page-anchor el="h3">
Search & Parameters
</page-anchor>

Some resources allow for you to search by a specific field. Other resources
require you to append a parameter to the URI.

In this example, we will display a paginated uri example, searching for
resources where the email contains `foo`.

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource?email=foo&bar=baz HTTP/1.1
{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Successful Requests
</page-anchor>

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
    <td>PUT</td><td>The updated resource object is returned</td>
  </tr>
  <tr>
    <td>DELETE</td><td>No content is returned</td>
  </tr>
  <tr>
    <td>POST</td><td>The newly created resource object is returned</td>
  </tr>
</table>
