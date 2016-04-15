---
layout: page
weight: 0
title: API Key Permissions
navigation:
  show: true
seo:
  title: API Key Permissions
  description: Some example use cases for API Key permissions.
  keywords: API, API Key, permissions, scopes, security, credentials
---
{% anchor h2 %}
What are API Key permissions?
{% endanchor h2 %}

API Keys are used to authenticate an API call. There are two types of API Keys:

1. General API Keys
2. Billing API Keys

We require that you use a dedicated API Key for billing related API calls that is distinct from keys used for general API calls. This separation prevents a user from gaining too much access to your account and potentially abusing that access.

By assigning specific permissions to an API Key, you can limit exactly which calls an API Key is able to authenticate, very similar to the way in which a computer administrator can assign file "read" or "write" access to certain users.

For example, if you were to create an API Key for authenticating calls that would result in creating, reading, or sending email, you would want to assign the `mail.send` permission to that key to allow it to send email. However, you would not want to assign it the `billing.update` permission, since that would be outside the scope of its intended use.

{% anchor h2 %}
Why are API Key permissions useful?
{% endanchor h2 %}

A good security practice is to assign a user only as much access as is necessary to complete his or her job: this principle can also be applied to API Keys by assigning **permissions** to each key. These permissions give you better security and control over the different areas of your account.

For example, in our mail sending API Key referenced above, we made sure to exclude `billing.update` from the list of permissions. This is to prevent someone with the mail sending key from accessing and change sensitive billing information. This powerful ability to control access to the various areas of your account can be very helpful in preventing and mitigating the consequences of a leaked API Key.

{% anchor h2 %}
How can I use API Key permissions?
{% endanchor h2 %}

{% anchor h3 %}
General API Keys
{% endanchor h3 %}

To create a new General API Key and assign it permissions, first navigate to your Settings and select API Keys. This page displays your current API Keys. To create a new key, click the Create API Key button and select "General API Key".

![]({{root_url}}/images/select_general_api_key.png)

You will then be able to:

1. Give your new key a name for easy identification
2. Select which permissions you would like to be associated with your new key

![]({{root_url}}/images/select_general_api_key_permissions.png)

When assigning permissions to your API Key, you will be given the option to select one of the following levels of access:

* **No Access** prevents the API Key from accessing any endpoint
* **Read Access** allows the API Key to access GET endpoints
* **Full Access** allows the API Key to access GET, PATCH, PUT, DELETE, and POST endpoints

Once an API Key is assigned permissions, it will only be able to authenticate API calls that reside within the scope of those permissions.

{% info %}
You may not assign an API Key greater permissions than you currently have.
{% endinfo %}

{% anchor h3 %}
Billing API Keys
{% endanchor h3 %}

To create a Billing API Key, navigate to your Settings and select API Keys. Click the Create API Key button and select "Billing API Key".

![]({{root_url}}/images/select_billing_api_key.png)

You will then be able to name your key and assign it permissions.

![]({{root_url}}/images/select_billing_api_key_permissions.png)

API Key permissions are not permanent and may be changed any time after the key has been created. Simply click the gear icon next to the API Key you would like to make changes to, and click "Edit Details".

![]({{root_url}}/images/editing_api_keys.png)

Several specific use cases for an API Key and the permissions that you might want to assign to that key, are described below. A complete list of all possible permissions scopes can be found [here]({{root_url}}/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html).

{% anchor h2 %}
Example Permissions for Common API Key Use Cases
{% endanchor h2 %}

{% anchor h3 %}
Billing
{% endanchor h3 %}

An API Key for authenticating billing related API calls should be given the following permissions.

{% codeblock lang:json %}
"scopes": [
  "billing.delete",
  "billing.read",
  "billing.update"
]
{% endcodeblock %}

{% anchor h3 %}
Mail
{% endanchor h3 %}

If you were to create an API Key for authenticating API calls that result in creating, sending, reading, and deleting emails, you would want to assign that key the following permissions.

{% codeblock lang:json %}
"scopes": [
  "mail.batch.create",
  "mail.batch.delete",
  "mail.batch.read",
  "mail.batch.update",
  "mail.send"
]
{% endcodeblock %}

{% anchor h3 %}
Marketing Campaigns
{% endanchor h3 %}

An API Key used only to authenticate API calls that relate specifically to Marketing Campaigns should include the following permissions.

{% codeblock lang:json %}
"scopes": [
  "marketing_campaigns.create",
  "marketing_campaigns.delete",
  "marketing_campaigns.read",
  "marketing_campaigns.update"
]
{% endcodeblock %}

{% anchor h3 %}
Stats
{% endanchor h3 %}

To limit who can access your statistics, create an API Key with the following permissions. Stats do not have "full access" because it would be impossible for you to change your stats via an API call.

{% codeblock lang:json %}
"stats": [
  "stats.read",
  "stats.global.read"
]
{% endcodeblock %}

{% anchor h3 %}
Whitelabel
{% endanchor h3 %}

An API Key for authenticating API calls that can create, change, and remove whitelabel information would require the the following permissions.

{% codeblock lang:json %}
"scopes": [
  "whitelabel.create",
  "whitelabel.delete",
  "whitelabel.read",
  "whitelabel.update"
]
{% endcodeblock %}
