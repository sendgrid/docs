---
seo:
 title: Authentication 
 description: Authenticating with the SendGrid API.
 keywords: getting started, Authentication, authorization, API key
title: Authentication
group: sending-email
weight: 0
layout: page
navigation:
 show: true
---

SendGrid supports both API key and basic authentication, depending on the functionality you are using. On top of  API key authentication, SendGrid offers two-factor authentication (2FA) to improve security.

## API key (recommended)

Authenticate to the SendGrid API by creating an API Key in the Settings section of the SendGrid UI.

SendGrid recommends API Keys because they are a secure way to talk to the SendGrid API that is separate from your username and password. If your API key gets compromised in any way, it is easy to delete and create a new one and update your environment variables with the new key. An API key permissions can be set to provide access to different functions of your account, without providing full access to your account as a whole.

To use the API Key, have a header with a key Authorization and a value of `Bearer <Your-API-Key-Here>`, where you replace `<Your-API-Key-Here>` with the API Key that you created in the UI.

<call-out>

SendGrid supports API keys with the SMTP API, the /v3/ API (except the methods to create API keys), and with the `/api/mail.send.json` and `/api/mail.send.xml`.

</call-out>

Example header:

```
GET https://api.sendgrid.com/v3/resource HTTP/1.1
Authorization: Bearer Your.API.Key-HERE
```

``` bash
curl -X "GET" "https://api.sendgrid.com/v3/templates" -H "Authorization: Bearer Your.API.Key-HERE" -H "Content-Type: application/json"
```

## Basic authentication

SendGrid does not recommend using basic authentication. However, if you are using our legacy v2 API, you have to use basic authentication to connect.

Using basic authentication is not as secure as using an API key because it uses your username and password credentials, allowing full access to your account. So, if your credentials get compromised, (like if you accidentally commit them to GitHub), it is more difficult to regain the security of your account. 

<call-out type="warning">

It is not possible to enable Two-factor authentication when using basic authentication, so if you do need to use basic authentication we highly recommend that you set up IP Access Management for improved security.

</call-out>

To use basic authentication, have a header with a key Authorization, and a value of `Basic <encoded-user-name><encoded-password>`, where you replace `<encoded-user-name><encoded-password>` with your URL encoded username and password.
 
<call-out>

You have to use basic authentication if you are using v2 of the API.

</call-out>


## Two-factor authentication

SendGrid recommends enabling two-factor authentication (2FA) for all users. For more information about setting up 2FA, see [Two-factor authentication]({{root_url}}/ui/account-and-settings/two-factor-authentication/).

<call-out type="warning">

It is not possible to use basic authentication for users, subusers, or teammates that enable 2FA.

