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

Your application, mail client, or website can all use API (Application Programming Interface) keys to authenticate access to SendGrid services. They are the preferred alternative to using a username and password because you can revoke an API key at any time without having to change your username and password. We suggest that you use API keys for connecting to all of SendGrid’s services.

## Types of API keys

*There are 3 different types of API keys:*

1. **Full Access** allows the API key to access GET, PATCH, PUT, DELETE and POST endpoints for all parts of your account, excluding billing and Email Address Validation.

1. **Restricted Access** customizes levels of access for all parts of your account, excluding billing and Email Address Validation.

1. **Billing Access** allows the API key to access billing endpoints for the account.

### 	API key permissions

During the API key creation process, you will be given the option of selecting scopes, or specific permissions, that you would like to assign to your new API key. These permissions restrict which areas of your account your API key will be able to access.
When assigning permissions to your API key, you will be given the option to select one of the following levels of access:

* **No Access** prevents the API key from accessing any endpoint within the selected permission.

* **Read Access** allows the API key to access GET endpoints within the selected permission.

* **Full Access** allows the API key to access GET, PATCH, PUT, DELETE, and POST endpoints within the selected permission.

We require that you create a separate API key for making billing-related API calls. This segmentation adds an extra level of security by giving you more control over who has access to the various areas of your account.

## Managing API keys

When viewing the API keys page, you will see a list of your current API keys along with the following information:

**Name** - The name you defined for your API key.

**API Key ID** - The way you would reference your API key for management through the API (e.g. editing or deleting a key).

**Action** - Actions you can perform on your API keys, such as editing or deleting the key.

### 	Creating an API key

1. Navigate to **Settings** on the left navigation bar, and then select **API Keys**. 
1. Click **Create API Key**.
1. Give your API key a name.
1. Select **Full Access**, **Restricted Access**, or **Billing Access**.
1. If you're selecting **Restricted Access**, or **Billing Access**, select the specific permissions to give each category. For more information, see [API key permissions](#api-key-permissions).
1. Click **Create & View**.
1. Copy your API key somewhere safe. For security reasons, do not put it directly in your code, or commit it somewhere public like GitHub.

<call-out type="warning">

You will only be shown your API key one time. Please store it somewhere safe as we will not be able to retrieve or restore it.

</call-out>

<call-out>

There is a limit of 100 API Keys per account.

</call-out>

## 	Editing an API key

Click the action menu in the same row as the key you would like to edit. From here you can delete a key, making it completely inactive, or you can edit your key’s name and permissions.

## 	Deleting an API key

<call-out type="warning">

Once you delete a key, it can no longer be used to access SendGrid’s services.

</call-out>

Click the action menu in the same row as the key you want to delete. Select **Delete**. This will delete the key permanently, making it inactive. SendGrid will reject any subsequent API calls using this deleted API key.

## 	Replacing an old API key with a new one

1. Locate the API key you would like to replace in your list of keys and select the action menu drop down at the right on the same row, then select **Delete API key**.
1. Next, [create an API key](#creating-an-api-key).
1. Replace the old API key with the new one in your code.

<call-out>

You may not give an API key greater permissions than you currently have.

</call-out>

 
##	Testing an API key

You can test your newly created API key using cURL:

```curl
curl -i --request POST \
--url https://api.sendgrid.com/v3/mail/send \
--header 'Authorization: Bearer YOUR_API_KEY_HERE' \
--header 'Content-Type: application/json' \
--data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "sendeexampexample@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Howdy!"}]}'
```

Look for a **202 Accepted** in the HTTP response headers.

<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">

### Do you want expert help to get your email program started on the right foot?

Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.

</call-out-link>
