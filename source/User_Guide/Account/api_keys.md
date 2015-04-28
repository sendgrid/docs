---
layout: page
weight: 0
seo:
  title: API Keys
title: API Keys
navigation:
  show: true
---

{%warning%}
API Keys work for v3 API calls and for sending email. API endpoints prior to v3 do not support API keys at this time.
{%endwarning%}

{% anchor h2%}
What are API Keys?
{%endanchor%}

API Keys allow you to generate an authentication credential that is separate from your username and password. They are independent from one another and are easily disposable. You should create unique API keys for each of your applications or servers so that you can easily revoke them without disrupting other systems if needed.

{%info%}
Permissions that allow you to define what a given API Key is allowed to do are in development and will be available soon.
{%endinfo%}

{% anchor h2%}
Managing API Keys
{%endanchor%}

You can [manage your API Keys](https://sendgrid.com/beta/settings/api_keys) from our beta interface. Additionally, you can [manage your API keys via the API itself]({{root_url}}/API_Reference/Web_API_v3/API_Keys/index.html).

{% anchor h2%}
Using API Keys
{%endanchor%}

{% anchor h3%}
Via SMTP
{%endanchor%}

For sending via SMTP, provide the string `apikey` as the SMTP username, and use your API Key as the password.

{% anchor h3%}
Via HTTP
{%endanchor%}

For sending via HTTP using the [mail.send]({{root_url}}/API_Reference/Web_API/mail.html) endpoint, add an `Authorization` header to your message. Then provide your API key as a `bearer` token in that header. For example,

{%codeblock%}
Authorization: Bearer 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
{%endcodeblock%}

Sending an email via curl using an API Key would look like:

{%codeblock%}
$ curl -X POST https://api.sendgrid.com/api/mail.send.json \
     -d "to=test@sendgrid.com" \
     -d "from=you@youraddress.com" \
     -d "subject=Sending with SendGrid is Fun" \
     -d "html=and easy to do anywhere, even with CURL"
     -H "Authorization: Bearer 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"
{%endcodeblock%}

{% anchor h3 %}
Via a SendGrid Open Source Library
{%endanchor%}

If you're using one of our [Open Source Libraries]({{root_url}}/Integrate/libraries.html), see the documentation for that specific library on how to send using an API Key.
