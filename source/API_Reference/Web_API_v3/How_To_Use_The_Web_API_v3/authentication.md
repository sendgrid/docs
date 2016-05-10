---
layout: page
seo:
  title: Authentication
title: Authentication
description: Learn how to authentication your requests to the Web API V3
weight: 99
navigation:
  show: true
---
{% anchor h3 %}
Authorization Header
{% endanchor %}

To authenticate, add an <code>Authorization</code> header to your API
request that contains an [API Key]({{root_url}}/API_Reference/Web_API_v3/API_Keys/index.html).

{% anchor h3 %}
API Keys
{% endanchor %}

SendGrid's Web API v3 supports the use of API Keys. API Keys allow you to use another method of authentication separate from your account username and password. API Keys add an additional layer of security for your account and can be assigned [specific permissions]({{root_url}}/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) to limit which areas of your account they may be used to access. API Keys can be generated in your account - visit <a href="https://app.sendgrid.com/settings/api_keys">https://app.sendgrid.com/settings/api_keys</a>. To use keys, you must set a plain text header named "Authorization" with the contents of the header being "Bearer XXX" where XXX is your API Secret Key.

Example header:

{% codeblock lang:http %}
GET https://api.sendgrid.com/v3/resource HTTP/1.1
Authorization: Bearer Your.API.Key-HERE
{% endcodeblock %}

{% codeblock lang:bash %}
curl -X "GET" "https://api.sendgrid.com/v3/templates" -H "Authorization: Bearer Your.API.Key-HERE" -H "Content-Type: application/json"
{% endcodeblock %}
