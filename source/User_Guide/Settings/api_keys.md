---
seo:
  title: API Keys
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

SendGrid requires a separate API key for making billing related API calls. This separation adds an extra level of security by giving you more control over who has access to the various areas of your account.

For more detailed information about API key permissions, see our [API Keys permissions page]({{root_url}}/Classroom/Basics/API/api_key_permissions.html).

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

<table class="table">
  <tr>
    <th>Scope</th>
    <th>Description</th>
    <th>Permission Levels</th>
  </tr>
  <tr>
    <td>API Keys</td>
    <td>Allows the API key holder to create and edit existing API keys. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Alerts</td>
    <td>Allows the API key holder to manage alerts. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Category Management</td>
    <td>Allows the API key holder to create and manage categories.</td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Email Activity<br>* Messages</td>
    <td>Allows the API key holder to view, filter, and download email activity statistics. <br>**Note** this service must be purchased separately. For more information, see the [documentation]({{root_url}}//User_Guide/email_activity_feed.html).</td>
    <td>No Access, Read Access</td>
  </tr>
  <tr>
    <td>IP Management</td>
    <td>Allows the API key holder to view, add, or delete whitelisted IP addresses.</td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Inbound Parse</td>
    <td>Allows the API key holder to view, create, or delete parse settings.  </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Mail Send<br>* Scheduled Sends</td>
    <td>Allows the API Key holder to send email using the SendGrid V3 API.<br>* Allows the API Key holder to schedule email using the SendGrid V3 API.</td>
    <td>NoAccess, Full Access<br>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Mail Settings<br>* Address Whitelist<br>* BCC<br>* Bounce Purge<br>* Event Notification<br>* Footer<br>* Forward Bounce<br>* Forward Spam<br>* Legacy Email Template<br>* Plain Content<br>* Spam Checker</td>
    <td>Allows the API key holder to view and update all mail settings listed. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Marketing Campaigns</td>
    <td>Allows the API Key holder to view, create, and delete campaigns. </td>
    <td>No Access, Full Access</td>
  </tr>
  <tr>
    <td>Partners</td>
    <td>Allows the API key holder to view and edit partner settings.</td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Security</td>
    <td></td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Stats<br>* Browser Stats<br>* Category Stats<br>* Email Clients and Devices<br>* Geographical<br>* Global Stats<br>* Mailbox Provider Stats<br>* Parse Webhook<br>* Stats Overview<br>* Subuser Stats</td>
    <td>Allows the API key holder to view stats according to the filters listed. </td>
    <td>No Access, Read Access</td>
  </tr>
  <tr>
    <td>Subusers</td>
    <td>Allows the API key holder to view, create, manage, and delete subusers. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Suppressions<br>* Unsubscribe Groups</td>
    <td></td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Template Engine</td>
    <td>Allows the API key holder to create, edit, and delete templates. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Tracking<br>* Click Tracking<br>* Google Analytics <br>* Open Tracking<br>* Subscription Tracking</td>
    <td>Allows the API key holder to view and manage tracking settings. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>User Account<br>* Enforced TLS<br>* Timezone</td>
    <td>* Allows the API key holder to view and update Enforced TLS settings. <br>* Allows the API key holder to view and update the time zone the account is associated with. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
  <tr>
    <td>Whitelabel (Sender Authentication)</td>
    <td>Allows the API key holder to view, edit, and delete authenticated domains, senders, IPs, and links. </td>
    <td>No Access, Read Access, Full Access</td>
  </tr>
</table>

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

