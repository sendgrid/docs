---
seo:
  title: Getting Started with the SendGrid API
  description: Sending your first email using the SendGrid REST API.
  keywords: Getting Started, API, v3, REST, SendGrid REST API
title: Getting Started with the SendGrid API
weight: 90
layout: page
navigation:
  show: true
---

* [Prerequisites](#-Prerequisites)
* [How to send an API email](#-How-to-send-an-API-email)
  * [Build your API call](#-Build-your-API-call)
  * [Send-your-email-using-the-API](#-Send-your-email-using-the-API)
  * [API Response message](#-API-Response-message)
* [Next steps](#-Next-steps)

{% anchor h2 %}
Prerequisites
{% endanchor %}

Before you can start using the API, you need to do the following:

1. Create a SendGrid [account](https://sendgrid.com/pricing/). 
1. Create an [API Key]({{root_url}}/User_Guide/Settings/api_keys.html). 
1. Make sure you have [curl](https://curl.haxx.se/) installed on your machine. 

{% info %}
Curl comes standard on Mac operating systems.
{% endinfo %}

{% anchor h2 %}
How to send an API email
{% endanchor %}



{% anchor h3 %}
Build your API call
{% endanchor %}

Your API call must have the following components:

* An [Authorization Header](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authentication#authorization-header)
* An [API Key]({{root_url}}/User_Guide/Settings/api_keys.html) within the Authorization Header

* A Request

``GET https://api.sendgrid.com/v3/resource HTTP/1.1
Authorization: Bearer Your.API.Key-HERE``

{% anchor h3 %}
Send your email using the API
{% endanchor %}

{% anchor h3 %}
API Response message
{% endanchor %}

The Web API v3 provides a selection of response codes, content-type headers, and pagination options to help you interpret the responses to your API requests.
