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

{% info %} There is a limit of 100 API Keys per account. {% endinfo %}

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

{% anchor h3 %}
Adding Additional API Key Permissons Not Listed In the User Interface
{% endanchor h3 %}

As it turns out, the [API Key Permissions List](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) contains more permissions that can be added to your API key than those listed when creating a new API key. Currently, when you create new key in the user interface and give it full access, it excludes additional permissions that can be added via an API call. The best way to see what permissions your API key has is by making [this call](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/api_keys_permissions.html) using the same API key to make the request.

To give your API key these extra permissions you will need to make [this request](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/index.html#Update-the-name-amp-scopes-of-an-API-Key-PUT).

**Important things** to know before making the above API request:

**1.** You will need to authenticate the above request with your parent account's username and password because your API key will not have the required API key permissions. There are two ways to authenticate using your username and password:

* You can add basic authorization to your API call yourself by base64 encoding your username and password like this: `username:password` and adding it to your Authorization header as Basic. We go into a little more detail on this [here](https://sendgrid.com/blog/magic-behind-basic-http-authentication/).
* Or you can use a rest client like [Postman](http://www.getpostman.com/) or [Paw](https://luckymarmot.com/paw), where you can select to Authenticate with basic auth (your SendGrid parent account username and password) then update the request to add your parent account credentials encoded into the headers.

{% warning %}
We only recommend authenticating with your username and password when updating your API Key permissions. All other API calls should be authenticated via your API Key.
{% endwarning %}

**2.** Make sure that when you make the request, you add **all of the scopes** you want the API key to have. For example, if you make the request and just list "categories.read" as the scopes, you will then have a key with only the "categories.read" scope. Make sure to list everything you get from the [get existing key request](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/index.html#Get-an-existing-API-Key-GET) in addition to the new scopes you want to add.

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
  <li><a href="#-Admin-Level-API-Key-Scopes">Admin Level API Key Scopes</a></li>
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

{% anchor h3 %}
Admin Level API Key Scopes
{% endanchor %}

Below is a list of every scope included in an administrator level API Key.

{% codeblock %}
"scopes": [
  "access_settings.activity.read",
  "access_settings.whitelist.create",
  "access_settings.whitelist.delete",
  "access_settings.whitelist.read",
  "access_settings.whitelist.update",
  "alerts.create",
  "alerts.delete",
  "alerts.read",
  "alerts.update",
  "api_keys.create",
  "api_keys.delete",
  "api_keys.read",
  "api_keys.update",
  "asm.groups.create",
  "asm.groups.delete",
  "asm.groups.read",
  "asm.groups.update",
  "billing.create",
  "billing.delete",
  "billing.read",
  "billing.update",
  "browsers.stats.read",
  "categories.create",
  "categories.delete",
  "categories.read",
  "categories.stats.read",
  "categories.stats.sums.read",
  "categories.update",
  "clients.desktop.stats.read",
  "clients.phone.stats.read",
  "clients.stats.read",
  "clients.tablet.stats.read",
  "clients.webmail.stats.read",
  "credentials.create",
  "credentials.delete",
  "credentials.read",
  "credentials.update",
  "devices.stats.read",
  "email_activity.read",
  "geo.stats.read",
  "ips.assigned.read",
  "ips.pools.create",
  "ips.pools.delete",
  "ips.pools.ips.create",
  "ips.pools.ips.delete",
  "ips.pools.ips.read",
  "ips.pools.ips.update",
  "ips.pools.read",
  "ips.pools.update",
  "ips.read",
  "ips.warmup.create",
  "ips.warmup.delete",
  "ips.warmup.read",
  "ips.warmup.update",
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
  "mail_settings.template.update",
  "mail.batch.create",
  "mail.batch.delete",
  "mail.batch.read",
  "mail.batch.update",
  "mail.send",
  "mailbox_providers.stats.read",
  "marketing_campaigns.create",
  "marketing_campaigns.delete",
  "marketing_campaigns.read",
  "marketing_campaigns.update",
  "newsletter.create",
  "newsletter.delete",
  "newsletter.read",
  "newsletter.update",
  "partner_settings.new_relic.read",
  "partner_settings.new_relic.update",
  "partner_settings.read",
  "partner_settings.sendwithus.read",
  "partner_settings.sendwithus.update",
  "stats.global.read",
  "stats.read",
  "subusers.create",
  "subusers.credits.create",
  "subusers.credits.delete",
  "subusers.credits.read",
  "subusers.credits.remaining.create",
  "subusers.credits.remaining.delete",
  "subusers.credits.remaining.read",
  "subusers.credits.remaining.update",
  "subusers.credits.update",
  "subusers.delete",
  "subusers.monitor.create",
  "subusers.monitor.delete",
  "subusers.monitor.read",
  "subusers.monitor.update",
  "subusers.read",
  "subusers.reputations.read",
  "subusers.stats.monthly.read",
  "subusers.stats.read",
  "subusers.stats.sums.read",
  "subusers.summary.read",
  "subusers.update",
  "suppression.blocks.create",
  "suppression.blocks.delete",
  "suppression.blocks.read",
  "suppression.blocks.update",
  "suppression.bounces.create",
  "suppression.bounces.delete",
  "suppression.bounces.read",
  "suppression.bounces.update",
  "suppression.create",
  "suppression.delete",
  "suppression.invalid_emails.create",
  "suppression.invalid_emails.delete",
  "suppression.invalid_emails.read",
  "suppression.invalid_emails.update",
  "suppression.read",
  "suppression.spam_reports.create",
  "suppression.spam_reports.delete",
  "suppression.spam_reports.read",
  "suppression.spam_reports.update",
  "suppression.unsubscribes.create",
  "suppression.unsubscribes.delete",
  "suppression.unsubscribes.read",
  "suppression.unsubscribes.update",
  "suppression.update",
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
  "templates.versions.update",
  "tracking_settings.click.read",
  "tracking_settings.click.update",
  "tracking_settings.google_analytics.read",
  "tracking_settings.google_analytics.update",
  "tracking_settings.open.read",
  "tracking_settings.open.update",
  "tracking_settings.read",
  "tracking_settings.subscription.read",
  "tracking_settings.subscription.update",
  "user.account.read",
  "user.credits.read",
  "user.email.create",
  "user.email.delete",
  "user.email.read",
  "user.email.update",
  "user.multifactor_authentication.create",
  "user.multifactor_authentication.delete",
  "user.multifactor_authentication.read",
  "user.multifactor_authentication.update",
  "user.password.read",
  "user.password.update",
  "user.profile.read",
  "user.profile.update",
  "user.scheduled_sends.create",
  "user.scheduled_sends.delete",
  "user.scheduled_sends.read",
  "user.scheduled_sends.update",
  "user.settings.enforced_tls.read",
  "user.settings.enforced_tls.update",
  "user.timezone.read",
  "user.username.read",
  "user.username.update",
  "user.webhooks.event.settings.read",
  "user.webhooks.event.settings.update",
  "user.webhooks.event.test.create",
  "user.webhooks.event.test.read",
  "user.webhooks.event.test.update",
  "user.webhooks.parse.settings.create",
  "user.webhooks.parse.settings.delete",
  "user.webhooks.parse.settings.read",
  "user.webhooks.parse.settings.update",
  "user.webhooks.parse.stats.read",
  "whitelabel.create",
  "whitelabel.delete",
  "whitelabel.read",
  "whitelabel.update"
]
{% endcodeblock %}
