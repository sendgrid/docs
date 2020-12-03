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

SendGrid supports API keys delivered via Bearer token or Basic authentication, depending on the SendGrid functionality you are using. In addition to Bearer API key authentication, SendGrid recommends two-factor authentication (2FA) to improve security.

## API key

Authenticate to the SendGrid API by creating an API Key in the [Settings section of the SendGrid UI](https://app.sendgrid.com/settings/api_keys).

SendGrid requires using API keys because they are a secure way to talk to the SendGrid API that is separate from your username and password. If your API key gets compromised, it's easy to delete and create a new API key and update your environment variables with the new key. API key permissions can be set to provide access to different functions of your account, without providing access to your account as a whole.

To use an API key, pass an Authorization header with a value of `Bearer <Your-API-Key-Here>`, where you replace `<Your-API-Key-Here>` with the API Key that you created in the UI.

Example header:

```
GET https://api.sendgrid.com/v3/resource HTTP/1.1
Authorization: Bearer <Your-API-Key-Here>
```

```bash
curl -X "GET" "https://api.sendgrid.com/v3/templates" -H "Authorization: Bearer <Your-API-Key-Here>" -H "Content-Type: application/json"
```

## Basic authentication

SendGrid supports Basic Authentication using an API key as your password value for some services. When using Basic Authentication, your username will always be "apikey," and your password will be your API key.

<call-out type="warning">

To ensure the security of your account, Twilio SendGrid has ended support for basic authentication with username and password as of Q4 2020.

</call-out>

<call-out>

Our legacy v2 API supports Basic authentication only. When using the v2 Mail Send API, you must use an API key as the _password_ value when authenticating via Basic authentication, which is recommended.

</call-out>

### Security with Basic authentication

Using basic authentication with your account password is not as secure as using an API key. If your credentials are compromised—for example, if you accidentally commit them to version control—it is more difficult to regain the security of your account when those credentials are your username and password rather than an API key. For this reason, Twilio SendGrid no longer supports authentication via username and password.

<call-out type="warning">

If you are currently using Basic authentication, we recommend upgrading your authentication method to Bearer using [API Keys]({{root_url}}/ui/account-and-settings/api-keys/) and then enabling Two-Factor Authentication for improved security. For more information, see [Upgrading your authentication method to API Keys]({{root_url}}/for-developers/sending-email/upgrade-your-authentication-method-to-api-keys/).

</call-out>

## Two-factor authentication

Enabling two-factor authentication (2FA) will allow Twilio SendGrid to deliver confirmation codes via SMS to your mobile phone. You will not be able to log in when cellular service is not available. SMS 2FA is powered by [Authy](https://authy.com/). Selecting this option does not require an Authy account, but if you have one, you will be able to use either the [Authy App](https://www.authy.com/app/mobile/) or SMS messages.

SendGrid recommends enabling two-factor authentication (2FA) for all users. For more information about setting up 2FA, see [Two-factor authentication]({{root_url}}/ui/account-and-settings/two-factor-authentication/).

<call-out>

To ensure the security of your account, Twilio SendGrid requires customers to enable [Two-factor authentication]({{root_url}}/ui/account-and-settings/two-factor-authentication/).

</call-out>

<call-out type="warning">

It is not possible to use basic authentication for users, subusers, or teammates that enable 2FA.

</call-out>
