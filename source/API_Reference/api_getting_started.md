---
seo:
  title: Getting Started with the SendGrid API
  description: Sending your first email using the SendGrid REST API.
  keywords: Getting Started, API, v3, REST, SendGrid REST API
title: Getting Started with the SendGrid API
weight: 100
layout: page
navigation:
  show: true
---

* [Prerequisites](#-Prerequisites)
* [How to send an API email](#-How-to-send-an-API-email)
  * [Build your API call](#-Build-your-API-call)
  * [Send-your-email-using-the-API](#-Send-your-email-using-the-API)
  * [API Response messages](#-API-Response-messages)
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

* A Host. The host for Web API v3 requests is always https://sendgrid.com/v3/
* An [Authorization Header](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authentication#authorization-header)
* An [API Key]({{root_url}}/User_Guide/Settings/api_keys.html) within the Authorization Header
* A Request. When submitting data to a resource via POST or PUT, you must submit your payload in JSON.
 
{% anchor h3 %}
Send your email using the API
{% endanchor %}

_To Send an email using the SendGrid API:_

1. Copy the following curl example:

{% codeblock lang:bash %} curl --request POST 
--url https://api.sendgrid.com/v3/mail/send 
--header 'Authorization: Bearer YOUR_API_KEY' 
--header 'Content-Type: application/json' 
--data '{"personalizations": [{"to": [{"email": "example@example.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}' {% endcodeblock %}

2. Paste the curl call into your favorite text editor and enter your API Key.
3. Add a  

copy this curl example into you favorite text editor and replace blah blah and add your API key

note about try it out functionality to explore more. 

1. Navigate to the [SendGrid API Documentation](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send). 
2. Click **Try it out**. 
3. Copy your API key and paste it in the **Your_API_Key** field. 
4. In the **Request Body**, specify the "to", "from", and "reply to" names and email addresses.
5. Scroll down and expand the Code Generation module.
6. Select **cURL**. 
7. Copy the code and paste it in your terminal. 

Your cURL call should look something like this:

{% codeblock lang:bash %} curl --request POST 
--url https://api.sendgrid.com/v3/mail/send 
--header 'Authorization: Bearer YOUR_API_KEY' 
--header 'Content-Type: application/json' 
--data '{"personalizations": [{"to": [{"email": "example@example.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}' {% endcodeblock %}

8. Hit **Enter**.
9. Check the inbox of the address you specified as the "to" email and see your message!

Note: if you haven't set up Sender Authentication (link to docs) or other security measures it might end up in your spam folder.

{% anchor h3 %}
API Response messages
{% endanchor %}

All responses are returned in JSON format. We specify this by sending the ``Content-Type`` header. The Web API v3 provides a selection of [response codes](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes),[content-type headers](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#content-type-header), and [pagination](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#pagination) options to help you interpret the responses to your API requests.

{% anchor h2 %}
Next Steps
{% endanchor %}

API reference
Whitelabel
Templates/MC editors

Remove API getting started stuff in the classroom and merge into this document. 