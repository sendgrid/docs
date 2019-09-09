---
layout: page
weight: 0
title: Using the V2 API
group: api-v2
navigation:
    show: true
---

## URL Format 

<p>The following is the syntax for making Web API requests:</p>

#### Example WEB API URL 
```
https://api.sendgrid.com/api/[module].[action].[format]
```
<ul>
  <li><strong>[module]</strong> - The API endpoint to call, e.g. blocks.</li>
  <li><strong>[action]</strong> - Each module supports multiple actions such as add, get, and delete.</li>
	<li><strong>[format]</strong> - This determines the response format. It can be either json for a JSON response or xml for an XML response.</li>
</ul>

```
https://api.sendgrid.com/api/blocks.get.json
```

### Responses 

### HTTP Return codes 

<ul>
	<li><strong>2XX</strong> - The API call was successful.</li>
	<li><strong>4XX</strong> - The API call had an error in the parameters. The error will be encoded in the body of the response.</li>
	<li><strong>5XX</strong> - The API call was unsuccessful. You should retry later.</li>
</ul>


<p>The formats supported are XML and JSON. Errors and success responses are described below while calls that provide information have their own return structure.</p>

### Errors 

``` xml
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>
```

``` json
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
```
### Success
``` xml
<result>
success
</result>
```
``` json
{
  "message": "success"
}
```
### Authentication 

Each API call requires authentication. You must send the following HTTP parameters on your API calls. Your credentials will be the same as what you used for your SMTP authentication and/or website.

<ul>
	<li><strong>api_user</strong> - This is the same credential used for your SMTP settings, and for logging into the website.</li>
	<li><strong>api_key</strong> - This is the same password to authenticate over SMTP, and for logging into the website.</li>
</ul>

#### Example API URL with user & pass parameters

``` html
https://api.sendgrid.com/api/blocks.get.json?api_user=your_sendgrid_username&api_key=your_sendgrid_password
```
For detailed information on the available Web API methods, select one from the tree on the left.

## Rate Limits

Twilio SendGrid has a default rate limit of 600 requests/minute on some of the V2 API endpoints. If you exceed that rate limit you will receive a 429 error response with a “too many requests” message. 

``` http
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
```

<call-out>

This rate limit does not affect the V2 mail/send endpoint.

</call-out>

## The Data

When you send data a GET request, it usually means that you're sending data in the URL's query string, the part after the '?' in the url, as a key/value pair. The key is defined by the place where you are sending the data and is assumed to be URL-safe, however the data you provide may not be. So, you should urlencode the value (or the data part) of any URL-passed information. 

For example, when you query google.com for "sendgrid.com/docs/" you get the following URL: 

``` language
https://www.google.com/?gws_rd=ssl#q=sendgrid.com%2Fdocs%2F
```

Where "sendgrid.com/docs/" was encoded to "sendgrid.com%2Fdocs%2F" in the URL. 

Most programming languages have support for urlencoding, but should you need a character lookup to reference, please see the [Wikipedia doc about urlencoding](http://en.wikipedia.org/wiki/Percent-encoding).
