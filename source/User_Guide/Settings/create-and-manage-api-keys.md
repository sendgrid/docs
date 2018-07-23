---
seo:
  title: Create and Manage API Keys
  description: Create and Manage API Keys
  keywords: sendgrid API keys, email API Keys, mail API Keys, email credentials, send credentials, authentication
title: API Keys
weight: 0
layout: page
navigation:
  show: true
---

* [What is an API key?](#-What-is-an-API-key)
* [How to create an API key](#-How-to-create-an-API-key)
* [API key permissions](#-API-key-permissions) 
  * [API Keys](#-API-Keys)
  * [Alerts](#-Alerts)
  * [Email Activity](#-Email-Activity)
  * [IP Management](#-IP-Management)
  * [Inbound Parse](#-Inbound-Parse)
  * [Mail Send](#-Mail-Send)
  * [Mail Settings](#-Mail-Settings)
  * [Marketing Campaigns](#-Marketing-Campaigns)
  * [Partners](#-Partners)
  * [Security](#-Security)
  * [Stats](#-Stats)
  * [Subusers](#-Subusers)
  * [Suppressions](#-Supressions)
  * [Template Engine](#-Template-Engine)
  * [Tracking](#-Tracking)
  * [User Account](#-User-Account)
  * [Whitelabel - Sender Authentication](#-Whitelabel--Sender-Authentication)
* [Managing API Keys](#-Managing-API-Keys)
  * [Edit an API key](#-Edit-an-API-key)
  * [Deleting an API Key](#-Inactivate-an-API-key)

{% anchor h2 %}
What is an API key?
{% endanchor %}

API keys are used by your application, mail client, or website to authenticate access to SendGrid services. API Keys allow you to generate an authentication credential that is separate from your username and password. They are independent from one another and are easily disposable. You should create unique API keys for each of your applications or servers so that you can easily revoke them without disrupting other systems if needed.

There are two different types of API keys:

1. **Billing API Keys** are used only to authenticate billing related API calls.
1. **General API Keys** are used to authenticate all other API calls.

SendGrid requires a separate API key for making billing related API calls. This separation adds an extra level of security by giving you more control over who has access to the various areas of your account. Billing permissions are mutually exclusive from all others. An API Key can either have Billing permissions, or any other set of permissions.

For more detailed information about API key permissions, see our [API key permissions](#-API-key-permissions).

When viewing the API keys page, you will see a list of your current API keys along with the following information:

**Name** - The name you defined for your API key.

**API Key ID** - The way you would reference your API key for management through the API.

**Action** - Actions you can perform on your API keys, such as editing or deleting the key.

{% info %} There is a limit of 100 API Keys per account. {% endinfo %}

{% anchor h2 %}
How to create an API key
{% endanchor %}

1. Go to the API Keys page in the SendGrid UI, and click `Create API Key`.
1. Give your API key a name.
1. Select **Full Access**, **Restricted Access**, or **Billing Access**.
1. If you're selecting **Restricted Access**, or **Billing Access**, select the specific permissions to give each category. For more information, see [API key permissions](#-API-key-permissions).
1. Click `Create a Key`.
1. Copy your API Key somewhere safe. For security reasons, do not put it directly in your code, or commit it somewhere like Github.

{% warning %}
You will only be shown your API key one time. Please store it somewhere safe as we will not be able to retrieve or restore it.
{% endwarning %}

{% info %} There is a limit of 100 API Keys per account. {% endinfo %}

{% anchor h2 %}
API key permissions
{% endanchor %}

During the API key creation process, you can select specific permissions, or scopes, that you would like to assign to your new API key. These permissions restrict which areas of your account your API key can access.

{% info %}
Not all API Key permissions can be accessed or edited through the web app. For a detailed list of all API key permissions, see our [API Reference]({{root_url}}/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html).
{% endinfo %}

When assigning permissions to your API key, select one of the following levels of access:

1. **Full Access** gives all of the API methods.
1. **Restricted Access** lets you customize the level of access.
1. **Billing Access** gives you access to the billing endpoints.

{% info %}
You may not give an API key greater permissions than you currently have.
{% endinfo %}

{% anchor h3 %}
API Keys
{% endanchor %}

Allows the API key holder to create and edit existing API keys.

**Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Alerts
{% endanchor %}

Allows the API key holder to manage alerts.

**Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Category Management
{% endanchor %}

Allows the API key holder to create and manage categories.

**Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Email Activity
{% endanchor %}

**Includes:**

* Messages

Allows the API key holder to view, filter, and download email activity statistics. 

{% info %}
This service must be purchased separately. For more information, see the [documentation]({{root_url}}//User_Guide/email_activity_feed.html).
{% endinfo %}

**Permission levels:**

* No Access
* Read Access

{% anchor h3 %}
IP Managment
{% endanchor %}

Allows the API key holder to view, add, or delete whitelisted IP addresses.

**Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Inbound Parse
{% endanchor %}
 
Allows the API key holder to view, create, or delete parse settings.

**Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Mail Send
{% endanchor %}

**Includes:**

* Scheduled Sends

Allows the API Key holder to send and schedule  email using the SendGrid V3 API.
 
 **Permission levels:**

* No Access
* Read Access
* Full Access


{% anchor h3 %}
Mail Settings
{% endanchor %}

**Includes:**

* Address Whitelist
* BCC
* Bounce Purge
* Event Notification
* Footer
* Forward Bounce
* Forward Spam
* Legacy Email Template
* Plain Content
* Spam Checker

Allows the API key holder to view and update all mail settings listed.

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Marketing Campaigns
{% endanchor %}

Allows the API Key holder to view, create, and delete campaigns.

 **Permission levels:**

* No Access
* Full Access

{% anchor h3 %}
Partners
{% endanchor %}

Allows the API key holder to view and edit partner settings.

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Security
{% endanchor %}

[NEEDS DEFINITION]
 
**Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Stats
{% endanchor %}

**Includes:**

* Browser Stats
* Category Stats
* Email Clients and Devices
* Geographical
* Global Stags
* Mailbox Provider Stats
* Parse Webhook
* Stats Overview
* Subuser Stats

Allows the API key holder to view stats according to the filters listed.

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Subusers
{% endanchor %}

Allows the API key holder to view, create, manage, and delete subusers.

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Suppressions
{% endanchor %}

**Includes:**

* Unsubscribe Groups

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Template Engine
{% endanchor %}


 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Tracking
{% endanchor %}

**Includes:**

* Cick Tracking
* Google Analytics
* Open Tracking

Allows the API key holder to view and manage tracking settings.

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
User Account
{% endanchor %}

**Includes:**

* User Account
* Enforced TLS
* Timezone

Allows the API key holder to view and update settings. 

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h3 %}
Whitelabel - Sender Authentication
{% endanchor %}

Allows the API key holder to view, edit, and delete authenticated domains, senders, IPs, and links.

 **Permission levels:**

* No Access
* Read Access
* Full Access

{% anchor h2 %}
Managing API Keys
{% endanchor %}

Once an API key has been created, you can edit the name and permission levels of the API key. 

{% anchor h3 %}
Edit an API Key
{% endanchor %}

Click the action menu in the same row as the key you would like to edit. From here you can edit your key’s name and permission level. 

{% anchor h3 %}
Delete an API Key
{% endanchor %}

{% warning %}
Once you delete a key, it can no longer be used to access SendGrid’s services. Make sure you update the API key in any code 
{% endwarning %}

1. Click the action menu in the same row as the key you want to delete. 
1. Select **Delete**. 
1. Click **Confirm** to permanently delete the API key. Any subsequent API calls using this deleted API key will be rejected by SendGrid.

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [API Key Permissions List]({{root_url}}/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html)
- [Getting Started with the SendGrid API]({{root_url}}/API_Reference/api_getting_started.html)
