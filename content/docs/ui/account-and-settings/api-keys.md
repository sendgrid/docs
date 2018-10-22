---
seo:
  title: Manage SendGrid API Keys
  description: Manage your SendGrid API Keys
  keywords: sendgrid API keys, email API Keys, mail API Keys, email credentials, send credentials
title: API Keys
weight: 0
group: account-management
layout: page
navigation:
  show: true
---

API keys are used by your application, mail client, or website to authenticate access to SendGrid services. They are the preferred alternative to using a username and password because you can revoke an API key at any time without having to change your username and password. We suggest that you use API keys for connecting to all of SendGrid’s services.

There are 2 different types of API keys:

1. **Full Access** gives all of the API methods.
1. **Billing Access** gives you access to the billing endpoints.

We require that you create a separate API key for making billing related API calls. This segmentation adds an extra level of security by giving you more control over who has access to the various areas of your account.

For more detailed information about API key permissions, see [API Keys permissions]({{root_url}}/ui/account-and-settings/api-keys/).

When viewing the API keys page, you will see a list of your current API keys along with the following information:

**Name** - The name you defined for your API key.

**API Key ID** - The way you would reference your API key for management through the API (e.g. editing or deleting a key).

**Action** - Actions you can perform on your API keys, such as editing or deleting the key.

<call-out>

There is a limit of 100 API Keys per account.

</call-out>

## 	Creating an API key

1. Go to the API Keys page in the SendGrid UI, and click **Create API Key**.
1. Give your API key a name.
1. Select **Full Access**, **Restricted Access**, or **Billing Access**.
1. If you're selecting **Restricted Access**, or **Billing Access**, select the specific permissions to give each category. For more information, see [API key permissions](#api-key-permissions).
1. Click **Create and View**.
1. Copy your API Key somewhere safe. For security reasons, do not put it directly in your code, or commit it somewhere like GitHub.

<call-out type="warning">

You will only be shown your API key one time. Please store it somewhere safe as we will not be able to retrieve or restore it.

</call-out>

<call-out>

There is a limit of 100 API Keys per account.

</call-out>

 ### 	API key permissions

During the API key creation process, you will be given the option of selecting specific permissions, or scopes, that you would like to assign to your new API key. These permissions restrict which areas of your account your API key will be able to access.

When assigning permissions to your API key, you will be given the option to select one of the following levels of access:

* **No Access** prevents the API key from accessing any endpoint within the selected permission.
* **Read Access** allows the API key to access GET endpoints within the selected permission.
* **Full Access** allows the API key to access GET, PATCH, PUT, DELETE, and POST endpoints within the selected permission.

<call-out>

You may not give an API key greater permissions than you currently have.

</call-out>

## 	Replacing an old API key with a new one

1. Locate the API key you would like to replace in your list of keys and select the action menu drop down at the right on the same row, then select **Delete API Key**.
1. Next, [create an API key](#creating-an-api-key).
1. Replace the old API key with the new one in your code.

## 	Testing an API key

You can easily test your newly created API key using cURL:

```curl
curl -i --request POST \
--url https://api.sendgrid.com/v3/mail/send \
--header 'Authorization: Bearer YOUR_API_KEY_HERE' \
--header 'Content-Type: application/json' \
--data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "sendeexampexample@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Howdy!"}]}'
```

Look for a **202 Accepted** in the HTTP response headers.

## 	Editing an API Key

Click the action menu in the same row as the key you would like to edit. From here you can delete a key, making it completely inactive, or you can edit your key’s name and permissions.

## 	Deleting an API Key

<call-out type="warning">

Once you delete a key, it can no longer be used to access SendGrid’s services.

</call-out>

Click the action menu in the same row as the key you want to delete. Select **Delete**. This will delete the key permanently, making it inactive. Any subsequent API calls using this deleted API key will be rejected by SendGrid.
