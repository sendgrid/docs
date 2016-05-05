---
layout: page
seo:
  title: Overview
title: Overview
description: Send Email Using the v3 Mail Send Endpoint
weight: 100
navigation:
  show: true
---

{% warning %}
**This endpoint is currently in beta!**

Since this is not a general release, we do not recommend POSTing production level traffic through this endpoint or integrating your production servers with this endpoint.

*When this endpoint is ready for general release, your code will require an update in order to use the official URI.*

By using this endpoint, you accept that you may encounter bugs and that the endpoint may be taken down for maintenance at any time. We cannot guarantee the continued availability of this beta endpoint. We hope that you like this new endpoint and we appreciate any [feedback](mailto:dx+mail-beta@sendgrid.com) that you can send our way.
{% endwarning %}

This endpoint allows you to send email over SendGrid’s v3 Web API, the most recent version of our API.

If you are looking for documentation about the v2 Mail Send endpoint, please see our [v2 API Reference]({{root_url}}/API_Reference/Web_API/mail.html).

{% info %}
SendGrid provides libraries to help you quickly and easily integrate with the v3 Web API in 7 different languages: [C#](https://github.com/sendgrid/sendgrid-csharp), [Go](https://github.com/sendgrid/sendgrid-go), [Java](https://github.com/sendgrid/sendgrid-java), [NodeJS](https://github.com/sendgrid/sendgrid-nodejs), [PHP](https://github.com/sendgrid/sendgrid-php), [Python](https://github.com/sendgrid/sendgrid-python), and [Ruby](https://github.com/sendgrid/sendgrid-ruby).
{% endinfo %}

{% apiv3example post POST https://api.sendgrid.com/v3/mail/send/beta %}
{% apiv3requestbody %}
{
  "personalizations": [
    {
    "to": [
    {
    "email": "john@example.com"
    }
    ],
    "subject": "Hello, World!"
  }],
  "from": {
    "email": "from_address@example.com"
  },
  "content": [{
    "type": "text",
    "value": "Hello, World!"
  }]
}
{% endapiv3requestbody %}


{% endapiv3example %}

For general information about how to use SendGrid's Web API v3, please visit our [API Overview]({{root_url}}/API_Reference/Web_API_v3/index.html)

You may send mail via the v3 Mail Send endpoint via one of two ways:

* You can make a [cURL request].
* You can make an HTTP Post request through one of our [7 libraries]({{root_url}}/Integrate/libraries.html).

{% anchor h2 %}
Authentication
{% endanchor %}

{% codeblock lang:bash %}
curl =X "POST" "https://api.sendgrid.com/v3/mail/send/beta" -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d "[YOUR DATA HERE]"
{% endcodeblock %}

You must authenticate every API request to send mail by including an `Authorization` header. This header should include the authorization type of `Bearer`, followed by your API Key that has already been assigned the necessary permissions. Click [here](https://sendgrid.com/docs/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/authentication.html) for more information.

{% anchor h2 %}
Limitations
{% endanchor %}

* The total size of your email, including attachments, must be less than 30MB.
* The total number of recipients must be less than 100.
* 3000 requests/sec is the maximum rate at which you may call v3 Mail endpoint.
* The total length of custom arguments must be less than 10000 bytes.

For more specific, parameter level requirements and limitations, see the [Request Body Parameters documentation](#-Request-Body-Parameters).

{% anchor h2 %}
Validation
{% endanchor %}

Whenever you make a request to the v3 Mail Send endpoint, your JSON payload is validated before your email is sent.

If there are any errors, SendGrid will attempt to identify and return as many issues as possible for each request. For more information, please read our [error documentation]({{root_url}}/API_Reference/Web_API_v3/Mail/errors.html).

{% anchor h2 %}
Request Body Parameters
{% endanchor %}

Every request made to /v3/mail/send/beta will require a request body formatted in JSON containing the your email’s content and metadata. This may include information such as the recipient’s email address, the return address, and the subject.
