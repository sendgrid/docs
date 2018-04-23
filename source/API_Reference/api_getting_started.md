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

There are several ways you can get started with the SendGrid API 

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

{% codeblock %}
curl --request POST \
--url https://api.sendgrid.com/v3/mail/send \
--header 'authorization: Bearer <<YOUR_API_KEY>>' \
--header 'content-type: application/json' \
--data '{"personalizations":[{"to":[{"email":"john.doe@example.com","name":"John Doe"}],"subject":"Hello, World!"}],"from":{"email":"sam.smith@example.com","name":"Sam Smith"},"reply_to":{"email":"sam.smith@example.com","name":"Sam Smith"}}'{% endcodeblock %}

1. Copy the curl example above.
2. Paste the curl call into your favorite text editor. 
3. Copy your API key and paste it in the authorization header. 
4. In the data section, specify the "to", "from", and "reply to" names and email addresses and enter a subject.
5. Copy the code and paste it in your terminal. 
6. Hit **Enter**.
7. Check the inbox of the address you specified as the "to" email and see your message!

{% info %}
If you have not yet set up [Sender Authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html) in your account, you may need to check your spam folder for the email you just sent. 
{% endinfo %}

{% anchor h3 %}
API Response messages
{% endanchor %}

All responses are returned in JSON format. We specify this by sending the ``Content-Type`` header. The Web API v3 provides a selection of [response codes](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes),[content-type headers](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#content-type-header), and [pagination](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#pagination) options to help you interpret the responses to your API requests.

{% anchor h2 %}
Next Steps
{% endanchor %}

For more information on SendGrid and where you can go from here, check out these pages:

- [API Reference]({{root_url}}/API_Reference/api_v3.html) - From this reference you can use the "try it out" functionality to test out real code samples. 
- [SendGrid Libraries](https://github.com/sendgrid) - Choose from six different languages to set up your integration. 
- [Sender Authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html) - To improve your deliverability and add your own brand to your emails, set up Sender Authentication and Link Branding. 
- [How to Send Email]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html) - Learn how to create and send Marketing Campaigns from this tutorial. 