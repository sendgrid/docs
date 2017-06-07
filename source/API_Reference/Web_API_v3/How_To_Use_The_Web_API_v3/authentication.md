---
layout: page
seo:
  title: Authentication
title: Authentication
description: Learn how to authenticate your requests to the Web API V3
keywords: auth, authenticate, api, key, username, password, bearer, on, behalf, subuser
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

{% anchor h3 %}
On-Behalf of Subuser
{% endanchor %}

The on-behalf-of header allows you to make calls for a particular subuser through the parent account; this can be useful for automating bulk updates or administering a subuser without changing authentication in your code. In the header you are passing, you will simply need to add: `On-Behalf-Of: subuser_username`
 +
 +This will generate the api call as if it was the subuser account itself making the call. Just make sure you are using the correct subuser username.
 +
 +When authenticating using the on-behalf-of header, you will need to use the API key or basic auth credentials of the parent account.
 +
 +**Using API Key:**
 +
 +```
 +curl -X GET \
 +  'https://api.sendgrid.com/v3/stats?start_date=2016-01-01&end_date=2017-01-01&aggregated_by=month' \
 +  
 +  -H 'authorization: Bearer API Key' \
 +  
 +  -H 'on-behalf-of: subuser_username' \
 +  ```
 +  
 +{% warning %}  
 +Please note: The on-behalf-of header will not work with the `mail.send` API.
 +{% endwarning %}  
