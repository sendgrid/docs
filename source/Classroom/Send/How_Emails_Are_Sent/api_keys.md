---
layout: page
weight: 0
seo:
  title: API Keys
title: API Keys
navigation:
  show: true
---

{% warning %}
API Keys work for v3 API calls and for sending email. API endpoints prior to v3 do not support API keys at this time.
{% endwarning %}

{% anchor h2%}
What are API Keys?
{% endanchor %}

API Keys allow you to generate an authentication credential that is separate from your username and password. They are independent from one another and are easily disposable. You should create unique API keys for each of your applications or servers so that you can easily revoke them without disrupting other systems if needed.

{% info %}
You can use [API Key Permissions]({{root_url}}/API_Reference/Web_API_v3/API_Keys/api_keys_permissions.html) to define what actions an API Key can be used to authenticate.
{% endinfo %}

{% anchor h2%}
Managing API Keys
{% endanchor %}

You can [manage your API Keys]({{site.app_url}}/settings/api_keys) from the SendGrid UI. Additionally, you can [manage your API keys via the API itself]({{root_url}}/API_Reference/Web_API_v3/API_Keys/index.html).

(% info %) There is a limit of 100 API Keys per account. (% endinfo %)

{% anchor h2%}
Using API Keys
{% endanchor %}

{% anchor h3%}
Via SMTP
{% endanchor %}

For sending via SMTP, provide the string `apikey` as the SMTP username, and use your API Key as the password.

{% anchor h3%}
Via HTTP
{% endanchor %}

For sending via HTTP using the [v2 mail send]({{root_url}}/API_Reference/Web_API/mail.html) or the [v3 mail send ]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) endpoint, add an `Authorization` header to your message. Then provide your API key as a `bearer` token in that header. For example,

{%codeblock%}
Authorization: Bearer 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
{%endcodeblock%}

Sending an email via a curl request to the v3 mail send endpoint using an API Key would look like:

{%codeblock%}
$curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'authorization: Bearer YOUR_API_KEY_GOES_HERE' \
  --data '{"personalizations":[{"to":["recipient@example.com"]}],"from":"sender@example.com","subject":"Hello, World!","content":[{"type":"string","value":"Heya!"}]}'
{%endcodeblock%}

{% anchor h3 %}
Via a SendGrid Open Source Library
{% endanchor %}

If you're using one of our [Open Source Libraries]({{root_url}}/Integrate/libraries.html), see the documentation for that specific library on how to send using an API Key.
