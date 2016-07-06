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

<ul>
  <li><a href="#-Read-Only-Access-for-Mail-Send">Mail Send: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Mail-Send">Mail Send: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Alerts">Alerts: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Alerts">Alerts: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Stats">Stats: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Stats">Stats: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Suppressions">Suppressions: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Suppressions">Suppressions: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Whitelabels">Whitelabels: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Whitelables">Whitelabels: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-IP-Management">IP Management: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-IP-Manaagement">IP Management: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Templates">Templates: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Templates">Templates: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Inbound-Parse">Inbound Parse: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Inbound-Parse">Inbound Parse: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Mail-Settings">Mail Settings: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Mail-Settings">Mail Settings: Full Access</a></li>
  <li><a href="#-Read-Only-Access-for-Marketing-Campaigns">Marketing Campaigns: Read Only Access</a></li>
  <li><a href="#-Full-Access-for-Marketing-Campaigns">Marketing Campaigns: Full Access</a></li>
</ul>

{% anchor h3 %}
Read Only Access for Mail Send
{% endanchor %}
{% codeblock %}
"scopes": [
  "mail.batch.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Mail Send
{% endanchor %}
{% codeblock %}
"scopes": [
  "mail.batch.create",
  "mail.batch.delete",
  "mail.batch.read",
  "mail.batch.update",
  "mail.send"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Alerts
{% endanchor %}
{% codeblock %}
"scopes": [
  "alerts.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Alerts
{% endanchor %}
{% codeblock %}
"scopes": [
  "alerts.create",
  "alerts.delete",
  "alerts.read",
  "alerts.update"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Stats
{% endanchor %}
{% codeblock %}
"scopes": [
  "email_activity.read",
  "stats.read",
  "stats.global.read",
  "browsers.stats.read",
  "devices.stats.read",
  "geo.stats.read",
  "mailbox_providers.stats.read"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Suppressions
{% endanchor %}
{% codeblock %}
"scopes": [
  "suppressions.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Suppressions
{% endanchor %}
{% codeblock %}
"scopes": [
  "suppressions.create",
  "suppressions.delete",
  "suppressions.read",
  "suppressions.update"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Whitelabels
{% endanchor %}
{% codeblock %}
"scopes": [
  "whitelabel.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Whitelabels
{% endanchor %}
{% codeblock %}
"scopes": [
  "whitelabel.create",
  "whitelabel.delete",
  "whitelabel.read",
  "whitelabel.update"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for IP Management
{% endanchor %}
{% codeblock %}
"scopes": [
  "ips.assigned.read",
  "ips.read",
  "ips.pools.read",
  "ips.warmup.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for IP Management
{% endanchor %}
{% codeblock %}
"scopes": [
  "ips.assigned.read",
  "ips.read",
  "ips.pools.create",
  "ips.pools.delete",
  "ips.pools.read",
  "ips.pools.update",
  "ips.pools.ips.create",
  "ips.pools.ips.delete",
  "ips.warmup.create",
  "ips.warmup.delete",
  "ips.warmup.read"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Templates
{% endanchor %}
{% codeblock %}
"scopes": [
  "templates.read",
  "templates.versions.activate.read",
  "templates.versions.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Templates
{% endanchor %}
{% codeblock %}
"scopes": [
  "templates.create",
  "templates.delete",
  "templates.read",
  "templates.update",
  "templates.versions.activate.create",
  "templates.versions.activate.delete",
  "templates.versions.activate.read",
  "templates.versions.activate.update",
  "templates.versions.create",
  "templates.versions.delete",
  "templates.versions.read",
  "templates.versions.update"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Inbound Parse
{% endanchor %}
{% codeblock %}
"scopes": [
  "user.webhooks.parse.settings.read",
  "user.webhooks.parse.stats.read"
  ]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Inbound Parse
{% endanchor %}
{% codeblock %}
"scopes": [
  "user.webhooks.parse.settings.create",
  "user.webhooks.parse.settings.delete",
  "user.webhooks.parse.settings.read",
  "user.webhooks.parse.settings.update",
  "user.webhooks.parse.stats.read"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Mail Settings
{% endanchor %}
{% codeblock %}
"scopes": [
  "mail_settings.address_whitelist.read",
  "mail_settings.bcc.read",
  "mail_settings.bounce_purge.read",
  "mail_settings.footer.read",
  "mail_settings.forward_bounce.read",
  "mail_settings.forward_spam.read",
  "mail_settings.plain_content.read",
  "mail_settings.read",
  "mail_settings.spam_check.read",
  "mail_settings.template.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Mail Settings
{% endanchor %}
{% codeblock %}
"scopes": [
  "mail_settings.address_whitelist.read",
  "mail_settings.address_whitelist.update",
  "mail_settings.bcc.read",
  "mail_settings.bcc.update",
  "mail_settings.bounce_purge.read",
  "mail_settings.bounce_purge.update",
  "mail_settings.footer.read",
  "mail_settings.footer.update",
  "mail_settings.forward_bounce.read",
  "mail_settings.forward_bounce.update",
  "mail_settings.forward_spam.read",
  "mail_settings.forward_spam.update",
  "mail_settings.plain_content.read",
  "mail_settings.plain_content.update",
  "mail_settings.read",
  "mail_settings.spam_check.read",
  "mail_settings.spam_check.update",
  "mail_settings.template.read",
  "mail_settings.template.update"
]
{% endcodeblock %}

{% anchor h3 %}
Read Only Access for Marketing Campaigns
{% endanchor %}
{% codeblock %}
"scopes": [
  "marketing_campaigns.read"
]
{% endcodeblock %}

{% anchor h3 %}
Full Access for Marketing Campaigns
{% endanchor %}
{% codeblock %}
"scopes": [
  "marketing_campaigns.create",
  "marketing_campaigns.delete",
  "marketing_campaigns.read",
  "marketing_campaigns.update",
  "partner_settings.new_relic.read"
]
{% endcodeblock %}
