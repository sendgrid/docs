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

{% anchor h3 %}
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

