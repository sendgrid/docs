---
seo:
  title: Create and manage API Keys
  description: Create and manage your SendGrid API Keys
  keywords: sendgrid API keys, email API Keys, mail API Keys, email credentials, send credentials
title: Create and manage API Keys
weight: 0
group: account-management
layout: page
navigation:
  show: true
---

API keys are used by your application, mail client, or website to authenticate access to SendGrid services. API Keys allow you to generate an authentication credential that is separate from your username and password. They are independent from one another and are easily disposable. You should create unique API keys for each of your applications or servers so that you can easily revoke them without disrupting other systems if needed.

There are two different types of API keys:

- **Billing API Keys** - are used only to authenticate billing related API calls.
- **General API Keys** - are used to authenticate all other API calls.

<call-out>

SendGrid requires a separate API key for making billing related API calls. This separation adds an extra level of security by giving you more control over who has access to the various areas of your account. Billing permissions are mutually exclusive from all others. An API Key can either have Billing permissions, or any other set of permissions.

</call-out>

For more detailed information about API key permissions, see our [API key permissions](#API-Key-Permissions.

When viewing the API keys page, you will see a list of your current API keys along with the following information:

- Name - The name you defined for your API key.

- API Key ID - The way you would reference your API key for management through the API.

- Action - Actions you can perform on your API keys, such as editing or deleting the key.

<call-out>

There is a limit of 100 API Keys per account.

</call-out>

## Create an API key

1. Go to the API Keys page in the SendGrid UI, and click **Create API Key**.
1. Give your API key a name.
1. Select **Full Access**, **Restricted Access**, or **Billing Access**.
If you're selecting Restricted Access, or Billing Access, select the specific permissions to give each category. For more information, see API key permissions.
1. Click **Create a Key**.
Copy your API Key somewhere safe. For security reasons, do not put it directly in your code, or commit it somewhere like Github.

<call-out type ="warning">

You will only be shown your API key one time. Please store it somewhere safe as we will not be able to retrieve or restore it. 

</call-out>

<call-out>

There is a limit of 100 API Keys per account.

</call-out>

## API key permissions

During the API key creation process, you can select specific permissions, or scopes, that you would like to assign to your new API key. These permissions restrict which areas of your account your API key can access.

<call-out>

Not all API Key permissions can be accessed or edited through the web app. For a detailed list of all API key permissions, see our API Reference.

<call-out>

When assigning permissions to your API key, select one of the following levels of access:

Full Access gives all of the API methods.
Restricted Access lets you customize the level of access.
Billing Access gives you access to the billing endpoints.

<call-out>

You may not give an API key greater permissions than you currently have.

</call-out> 

### API Keys

Allows the API key holder to create and edit existing API keys.

Permission levels:

- No Access
- Read Access
- Full Access

###Alerts

Allows the API key holder to manage alerts.

Permission levels:

- No Access
- Read Access
- Full Access

### Category Management

Allows the API key holder to create and manage categories.

Permission levels:

- No Access
- Read Access
- Full Access

### Email Activity 

Includes:

Messages
Allows the API key holder to view, filter, and download email activity statistics.

<call-out>

This service must be purchased separately. For more information, see the documentation.
</call-out>

Permission levels:

- No Access
- Read Access

### IP Managment

Allows the API key holder to view, add, or delete whitelisted IP addresses.

Permission levels:

- No Access
- Read Access
- Full Access

### Inbound Parse 

Allows the API key holder to view, create, or delete parse settings.

Permission levels:

- No Access
- Read Access
- Full Access

### Mail Send

Includes:

Scheduled Sends
Allows the API Key holder to send and schedule email using the SendGrid V3 API.

Permission levels:

- No Access
- Read Access
- Full Access

### Mail Settings

Includes:

- Address Whitelist
- BCC
- Bounce Purge
- Event Notification
- Footer
Forward Bounce
Forward Spam
Legacy Email Template
Plain Content
Spam Checker
Allows the API key holder to view and update all mail settings listed.

Permission levels:

- No Access
- Read Access
- Full Access

### Marketing Campaigns

Allows the API Key holder to view, create, and delete campaigns.

Permission levels:

- No Access
- Full Access

### Partners 

Allows the API key holder to view and edit partner settings.

Permission levels:

- No Access
- Read Access
- Full Access

### Security

[NEEDS DEFINITION]

Permission levels:

- No Access
- Read Access
- Full Access

### Stats

Includes:

- Browser Stats
- Category Stats
- Email Clients and Devices
- Geographical
- Global Stags
- Mailbox Provider Stats
- Parse Webhook
- Stats Overview
- Subuser Stats

Allows the API key holder to view stats according to the filters listed.

Permission levels:

- No Access
- Read Access
- Full Access

### Subusers

Allows the API key holder to view, create, manage, and delete subusers.

Permission levels:

- No Access
- Read Access
- Full Access

### Suppressions 

Includes:

Unsubscribe Groups

Permission levels:

- No Access
- Read Access
- Full Access

### Template Engine

Permission levels:

- No Access
- Read Access
- Full Access

### Tracking

Includes:

- Click Tracking
- Google Analytics
- Open Tracking

Allows the API key holder to view and manage tracking settings.

Permission levels:

- No Access
- Read Access
- Full Access

### User Account

Includes:

- User Account
- Enforced TLS
- Timezone

Allows the API key holder to view and update settings.

Permission levels:

- No Access
- Read Access
- Full Access

### Whitelabel - Sender Authentication

Allows the API key holder to view, edit, and delete authenticated domains, senders, IPs, and links.

Permission levels:

- No Access
- Read Access
- Full Access

## Managing API Keys

Once an API key has been created, you can edit the name and permission levels of the API key.

### Edit an API Key 

Click the action menu in the same row as the key you would like to edit. From here you can edit your key’s name and permission level.

### Delete an API Key

<call-out type="warning">

Once you delete a key, it can no longer be used to access SendGrid’s services. Make sure you update the API key in any code.

</call-out>

*To delete an API Key:*

1. Click the action menu in the same row as the key you want to delete.
1. Select **Delete**.
1. Click **Confirm** to permanently delete the API key. Any subsequent API calls using this deleted API key will be rejected by SendGrid.


## Additional Resources

[Getting Started with the SendGrid API]({{root_url}}/for-developers/sending-email/getting-started-api/)
