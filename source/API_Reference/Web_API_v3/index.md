---
layout: page
weight: 755
title: API v3 Overview
navigation:
  show: true
---

Welcome to SendGrid's Web API v3! This API is RESTful, fully featured, easy to integrate with, and offers support in [7 different languages]({{root_url}}/Integrate/libraries.html).

{% anchor h2 %}
Hello, World!
{% endanchor %}

{% codeblock lang:bash %}
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "your.email@example.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}'
{% endcodeblock %}

{% info %}
SendGrid provides [7 different libraries]({{root_url}}/Integrate/libraries.html) to help you quickly and easily integrate with the Web API v3.

* [C#](https://github.com/sendgrid/sendgrid-csharp)
* [Go](https://github.com/sendgrid/sendgrid-go)
* [Java](https://github.com/sendgrid/sendgrid-java)
* [NodeJS](https://github.com/sendgrid/sendgrid-nodejs)
* [PHP](https://github.com/sendgrid/sendgrid-php)
* [Python](https://github.com/sendgrid/sendgrid-python)
* [Ruby](https://github.com/sendgrid/sendgrid-ruby)

{% endinfo %}

{% anchor h2 %}
Using the Web API v3
{% endanchor %}

###[Authentication]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/authentication.html)

Every API request you make to the Web API v3 must be authenticated by including an Authorization Header with your API Key.

{% codeblock lang:bash %} curl -X "GET" "https://api.sendgrid.com/v3/templates" -H "Authorization: Bearer Your.API.Key-HERE" -H "Content-Type: application/json" {% endcodeblock %}

###[Requests]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/requests.html)

All requests to the Web API v3 must be made via HTTPS. It is a best practice to include the `Content-Type: application/json` header in all of your requests.

The Web API v3 is completely RESTful and accepts GET, POST, PUT, and DELETE requests, depending on the resource.

{% codeblock lang:http %}
POST https://api.sendgrid.com/v3/templates/ HTTP/1.1
Content-Type: application/json

{
  "name": "new template name"
}
{% endcodeblock %}

###[Responses]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/responses.html)

The Web API v3 provides a selection of response codes, content-type headers, and pagination options to help you interpret the responses to your API requests.

**Your Request**
{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource HTTP/1.1
{% endcodeblock %}

**Our Response**
{% codeblock lang:http %}
HTTP/1.1 200 OK
Content-Type: application/json

{
    "foo": "bar",
}
{% endcodeblock %}


###[Rate Limits]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/rate_limits.html)


Depending on the endpoint you are trying to reach, it will have a
specific number of allowed requests per refresh period. Once this
threshold has been reached, we will return a status code `429` response.

###[Errors]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/errors.html)

Sometimes your API call will generate an error. Every response to an API call that generates an error will include an error code, the reason for the error, and an error message to help you debug your request.

For an example of a generic error message, [click here]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/errors.html). For a list of specific errors that may be returned when using the v3 Mail Send endpoint, [click here]({{root_url}}/API_Reference/Web_API_v3/Mail/errors.html).


<table class="table">
  <tr>
    <th>Code</th>
    <th>Reason</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>4xx</td>
    <td>4xx responses indicate an error with your request</td>
    <td>There was a problem with your request.</td>
  </tr>
  <tr>
    <td>400</td>
    <td>BAD REQUEST</td>
    <td></td>
  </tr>
  <tr>
    <td>401</td>
    <td>UNAUTHORIZED</td>
    <td>You do not have authorization to make the request.</td>
  </tr>
  <tr>
    <td>403</td>
    <td>FORBIDDEN</td>
    <td></td>
  </tr>
  <tr>
    <td>404</td>
    <td>NOT FOUND</td>
    <td>The resource you tried to locate could not be found or does not exist.</td>
  </tr>
  <tr>
    <td>405</td>
    <td>METHOD NOT ALLOWED</td>
    <td></td>
  </tr>
  <tr>
    <td>413</td>
    <td>PAYLOAD TOO LARGE</td>
    <td>The JSON payload you have included in your request is too large.</td>
  </tr>
  <tr>
    <td>429</td>
    <td>TOO MANY REQUESTS</td>
    <td>The number of requests you have made exceeds SendGrid’s rate limitations.</td>
  </tr>
  <tr>
    <td>5xx</td>
    <td>5xx responses indicate an error made by SendGrid</td>
    <td>The request you made was valid, but an error occurred when SendGrid attempted to process it.</td>
  </tr>
  <tr>
    <td>500</td>
    <td>SERVER ERROR</td>
    <td>An error occurred on a SendGrid server.</td>
  </tr>
  <tr>
    <td>503</td>
    <td>SERVICE NOT AVAILABLE</td>
    <td>The SendGrid v3 Web API is not available.</td>
  </tr>
</table>
