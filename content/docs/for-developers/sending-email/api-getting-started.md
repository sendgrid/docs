---
seo:
  title: Getting Started with the SendGrid API
  description: Sending your first email using the SendGrid REST API.
  keywords: Getting Started, API, v3, REST, SendGrid REST API
title: Getting Started with the SendGrid API
group: api-v3
weight: 100
layout: page
navigation:
  show: true
---

There are several ways you can get started with the SendGrid API

## 	Prerequisites for sending your first API email

These instructions describe how to send your first email using cURL calls. This is one of many ways to send email with the SendGrid API - we also have [PHP](https://github.com/sendgrid/sendgrid-php), [Python](https://github.com/sendgrid/sendgrid-python), [Node.js](https://github.com/sendgrid/sendgrid-nodejs), [Java](https://github.com/sendgrid/sendgrid-java), [C#](https://github.com/sendgrid/sendgrid-csharp), [Go](https://github.com/sendgrid/sendgrid-go), and [Ruby](https://github.com/sendgrid/sendgrid-ruby) libraries.

Before you can start using the API, you need to do the following:

1. Create a SendGrid [account](https://sendgrid.com/pricing/).
2. Create an [API Key](https://app.sendgrid.com/settings/api_keys).
3. Make sure you have [curl](https://curl.haxx.se/) installed on your machine.

<call-out>

Curl comes standard on Mac operating systems.

</call-out>

## 	How to send an API email

 ### 	Build your API call

Your API call must have the following components:

* A Host. The host for Web API v3 requests is always `https://api.sendgrid.com/v3/`
* An [Authorization Header](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authentication#authorization-header)
* An [API Key](https://app.sendgrid.com/settings/api_keys) within the Authorization Header
* A Request. When submitting data to a resource via POST or PUT, you must submit your payload in JSON.

<call-out>

Message size limit:  The total message size should not exceed 20MB. This includes the message itself, headers, and the combined size of any attachments.

</call-out>

 ### 	Send your email using the API

_To Send an email using the SendGrid API:_

```
curl --request POST \
--url https://api.sendgrid.com/v3/mail/send \
--header 'authorization: Bearer <<YOUR_API_KEY>>' \
--header 'content-type: application/json' \
--data '{"personalizations":[{"to":[{"email":"john.doe@example.com","name":"John Doe"}],"subject":"Hello, World!"}],"content": [{"type": "text/plain", "value": "Heya!"}],"from":{"email":"sam.smith@example.com","name":"Sam Smith"},"reply_to":{"email":"sam.smith@example.com","name":"Sam Smith"}}'
```

1. Copy the curl example above.
2. Paste the curl call into your favorite text editor.
3. Copy your API key and paste it in the authorization header.
4. In the data section, specify the "to", "from", and "reply to" names and email addresses and enter a subject.
5. Copy the code and paste it in your terminal.
6. Hit **Enter**.
7. Check the inbox of the address you specified as the "to" email and see your message!

<call-out>

If you have not yet set up [Sender Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) in your account, you may need to check your spam folder for the email you just sent.


</call-out>

<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">


### Do you want expert help to get your email program started on the right foot?


Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.


</call-out-link>


 ### 	API Response messages

All responses are returned in JSON format. We specify this by sending the ``Content-Type`` header. The Web API v3 provides a selection of [response codes](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes), [content-type headers](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#content-type-header), and [pagination](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#pagination) options to help you interpret the responses to your API requests.

<call-out>

Get additional onboarding support. Save time, increase the quality of your sending, and feel confident you are set up for long-term success with [SendGrid Onboarding Services](https://sendgrid.com/marketing/onboarding-services-request/?utm_source=docs).

</call-out>

## 	Next Steps

For more information on SendGrid and where you can go from here, check out these pages:

- [API Reference]({{root_url}}/api-reference/)
- [Sender Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)
- [Automating Subusers]({{root_url}}/for-developers/sending-email/automating-subusers/)
