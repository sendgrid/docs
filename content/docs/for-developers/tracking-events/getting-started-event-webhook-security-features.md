---
layout: page
weight: 0
title: Getting Started with the Event Webhook Security Features
group: getting-started
navigation:
  show: true
seo:
  title: Getting Started with the Event Webhook Security Features
  description: Secure the Event Webhook using the Signed Webhook, OAuth 2.0, or both.
  keywords: Webhook, Signed, Cryptography, OAuth, ECDSA
---

Twilio SendGrid's Event Webhook will notify a URL via HTTP POST with information about events that occur as your mail is processed. This article covers all you need to know to secure the Event Webhook, allowing you to verify that incoming requests originate from Twilio SendGrid.

<call-out>

For more information about working with the Event Webhook and the data it provides, please see [Getting Started with the Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/).

</call-out>

Twilio SendGrid provides two methods for securing the Event Webhook: cryptographic signing and [OAuth 2.0](https://oauth.net/2/). These two security methods are independent of one another and can be used simultaneously.

## The Signed Event Webhook

When using the Signed Event Webhook, Twilio SendGrid will generate a [private and public key pair](https://www.twilio.com/blog/what-is-public-key-cryptography). The private key will be used to generate a signature that is posted to your HTTP webhook in the `"X-Twilio-Email-Event-Webhook-Signature"` header.

You can verify the signature with the public key provided. More information is provided in the [Verification section](#verify-the-signature) of this page.

### Manage the Signed Event Webhook using the app

#### Enable the Signed Event Webhook

To enable the Signed Event Webhook and generate a key pair using the [SendGrid App](https://app.sendgrid.com/):

1. Navigate to [Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) in the sidebar navigation.
2. Under "Event Settings," you should see “Signed Event Webhook Requests.” Click on the edit icon to load a sidebar modal.

![The signed event webhook settings page with the signed security option highlighted]({{root_url}}/images/signed-event-webhook-landing-page.png 'The Event Webhook settings page')

3. In the sidebar modal, click "Generate Verification Key." This will generate a private and public key. The public key will then be displayed to you.

![A sidebar modal with an option to generate a verification key and a status toggle showing if webhook signing is enabled or disabled]({{root_url}}/images/signed-event-webhook-modal.png 'Enable or disable the signed Event Webhook')

4. You can now copy this key and use it for verification.

![A sidebar modal with a verification key displayed for use in your code]({{root_url}}/images/signed-event-webhook-public-key.png 'A public verification key')

5. To confirm that the Signed Event Webhook is enabled, you can navigate back to [Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) to verify that the setting is listed as "Enabled."

#### Disable the Signed Event Webhook using the app

To disable the Signed Event Webhook, which will delete any existing keys:

1. Navigate to [Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) in the sidebar navigation.
2. Under "Event Settings," you should see "Signed Event Webhook Requests." Click the edit icon to load a sidebar modal.
3. When a signature exists, the side modal will show a toggle set to "Enabled" under the "Signed Event Webhook Request Status" label. Click the toggle to disable the feature and delete your existing keys.
4. Another modal will load asking you to confirm your decision. Click "Delete and Disable Signing" to confirm.

![A modal asking you to verify that you wish to delete your key and no longer sign the Event Webhook. You can either click to cancel or click to confirm.]({{root_url}}/images/signed-event-webhook-delete-key.png 'Confirm disabling the signed Event Webhook and deletion of current keys')

### Manage the Signed Event Webhook using the API

Twilio SendGrid provides two Event Webhook API endpoints that allow you to manage signatures. A brief overview of both endpoints is provided below. You can find more at our [Event Webhook API Reference](https://sendgrid.api-docs.io/v3.0/webhooks/retrieve-event-webhook-settings).

#### Enable/Disable the Signed Webhook

To enable or disable the Signed Event Webhook, you can pass a `PATCH` request to `https://api.sendgrid.com/v3/user/webhooks/event/settings/signed`. This endpoint expects a JSON request body with the single required boolean field `enabled`.

```javascript
{
  “enabled”: true
}
```

#### Retrieve the Signed Webhook public key

You can also retrieve your public key by passing a `GET` request to `https://api.sendgrid.com/v3/user/webhooks/event/settings/signed`. This endpoint accepts no query parameters and will return the string field `public_key` containing your current public key.

#### Verify the signature

Twilio SendGrid generates the private and public key pair using the [Elliptic Curve Digital Signature Algorithm (ECDSA)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm).

We recommend using a package or library suitable for your language to verify the signature. Libraries are listed below in [Sample verification libraries](#sample-verification-libraries). The general steps required to verify a signature are outlined below with [Golang](https://golang.org/) code samples.

<call-out type="warning">

When verifying the signature, be aware that we deliver a payload that must be used in its raw bytes form. Transformations from raw bytes to a JSON string may remove characters that were used as part of the generated signature.

</call-out>

1. Get the signature from the `"X-Twilio-Email-Event-Webhook-Signature"` HTTP header.

```go
// Golang Example
s := http.Request.Header.Get("X-Twilio-Email-Event-Webhook-Signature")
```

2. Get the timestamp from the "`"X-Twilio-Email-Event-Webhook-Timestamp"` HTTP header.

```go
// Golang Example
ts := http.Request.Header.Get("X-Twilio-Email-Event-Webhook-Timestamp")
```

3. Base64 decode the signature. Then perform an ASN.1 unmarshal of the decoded signature into a string. This string will be in the form of `{r value},{s value}`.

```go
// Golang Example
signatureBytes, _ := base64.StdEncoding.DecodeString(s)
ecdsaSig := struct {
R *big.Int
S *big.Int
}

asn1.Unmarshal(signatureBytes, &ecdsaSig)
```

4. Generate a sha256 hash of the timestamp + payload (use raw bytes).

```go
// Golang Example
tsBytes := []byte(ts)
payload, _ := ioutil.ReadAll(http.Request.Body)
h := sha256.New()
h.Write(tsBytes)
h.Write(payload)
hashedPayload := h.Sum(nil)
```

5. Verify the signature.

```go
// Golang Example
// uses https://golang.org/pkg/crypto/ecdsa/ to perform the verification
ecdsa.Verify(publicKey, hashedPayload, ecdsaSig.R, ecdsaSig.S)
```

6. Again, the simplest way to verify the signature is to use a package or library that will abstract away this process into a helper method or function.

#### Sample verification libraries

The [Twilio SendGrid API libraries]({{root_url}}/for-developers/sending-email/libraries/) contain helpers to assist you when verifying the ECDSA signature. The links below will take you to the Event Webhook helper in each library.

- [C# Event Webhook Helper](https://github.com/sendgrid/sendgrid-csharp/tree/master/src/SendGrid/Helpers/EventWebhook)
- [Go Event Webhook Helper](https://github.com/sendgrid/sendgrid-go/tree/master/helpers/eventwebhook)
- [Java Event Webhook Helper](https://github.com/sendgrid/sendgrid-java/tree/master/src/main/java/com/sendgrid/helpers/eventwebhook)
- [Node.js Event Webhook Helper](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/eventwebhook)
- [PHP Event Webhook Helper](https://github.com/sendgrid/sendgrid-php/tree/master/lib/eventwebhook)
- [Python Event Webhook Helper](https://github.com/sendgrid/sendgrid-python/tree/master/sendgrid/helpers/eventwebhook)
- [Ruby Event Webhook Helper](https://github.com/sendgrid/sendgrid-ruby/tree/master/lib/sendgrid/helpers/eventwebhook)

## OAuth 2.0

OAuth offers an additional and separate way of providing security controls for the Event Webhook. OAuth is an open authorization protocol used to share resources with applications. Rather than sharing your username and password with an application, granting total access to your account, OAuth enables scoped access to your resources. For more on OAuth and how it works, see the [OAuth community site](https://oauth.net/2/).

The Twilio SendGrid Event Webhook uses the [Client Credentials](https://tools.ietf.org/html/rfc6749#section-1.3.4) OAuth grant type, which is an authorization workflow meant for machine-to-machine communication. This authorization method creates a token that Twilio SendGrid can pass to your app in an Authorization header, allowing you to verify that the request originated from Twilio SendGrid.

### OAuth Client Credentials flow

OAuth can be confusing. To help illuminate the process, we have provided a description of the setup flow here.

1. You, the customer, have an app that provides an HTTP webhook. You want the Twilio SendGrid Event Webhook to make POST requests to this URL. To ensure that the requests you receive are actually from Twilio SendGrid, you implement OAuth.
2. This means you are responsible for generating a Client ID and Client Secret. You must also provide two URLs, the HTTP POST URL for your app and a URL to an authorization server or OAuth service.
3. When you give Twilio SendGrid all of this information, it will pass the Client ID and Client Secret to the Token URL (your authorization server/OAuth service). The authorization server will then use the Client ID and Client Secret to generate an access token. This token is sent back to Twilio SendGrid.
4. The access token is meaningless to Twilio SendGrid. It acts only as a key to pass back to your app at the HTTP POST URL. This will be done in an Authorization header.
5. Because this access token is shared among only your app, the authorization server, and Twilio SendGrid, you can trust requests delivered with the token are from a trusted source.
6. You can verify the access token is legitimate by checking with the authorization server that created it.

![A sequence diagram visualing showing the OAuth2 Client Credentials flow described in the list above.]({{root_url}}/images/oauth2-client-credentials-flow.png 'OAuth2.0 Client Credentials flow')

### Manage OAuth 2.0 using the app

#### Enable OAuth

To enable OAuth using the [SendGrid App](https://app.sendgrid.com/):

1. Navigate to [Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) in the sidebar navigation.

2. Under "Event Settings," you should see "Event Webhook." Click the edit icon to load a sidebar modal.

![The Event Webhook settings page with the Event Webhook setting highlighted]({{root_url}}/images/oauth-landing-page.png 'The Event Webhook Settings Page')

3. In the sidebar modal, you should see an "Authorization Method" drop-down menu. Select "OAuth 2.0" to load the OAuth configuration fields.

![A sidebar modal with all the required fields for enabling OAuth 2.0 for the Event Webhook]({{root_url}}/images/oauth-modal-fields.png 'The OAuth 2.0 configuration fields')

4. Fill the OAuth configuration fields:

   1. **Client ID**: Required to generate an authorization token.
   2. **Client Secret**: Required to generate an authorization token. This secret is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again.
   3. **Token URL**: The URL where Twilio SendGrid should deliver the Client ID and Client Secret in order to create an access token. This URL should route to your own authorization server or an OAuth service such as Auth0 or Okta.

5. With the above steps completed, requests to your HTTP POST URL by Twilio SendGrid will contain the access token in an Authorization header. You can now use this token to verify the requests using your OAuth service or authorization server.

<call-out>

Please note, it is your responsibility to verify the access token used in requests to your HTTP POST URL.

</call-out>

#### Disable OAuth

To disable OAuth using the [SendGrid App](https://app.sendgrid.com/):

1. [Navigate to Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) in the sidebar navigation.
2. Under "Event Settings," you should see "Event Webhook." Click the edit icon to load a sidebar modal.
3. In the sidebar modal, you should see an "Authorization Method" drop-down menu. Select "None" to disable authorization on the Event Webhook.
4. By selecting "None," requests to your HTTP POST URL by Twilio SendGrid will no longer contain an access token.

### Manage OAuth 2.0 using the API

Twilio SendGrid allows you to manage OAuth setup using the API. A brief overview of enabling, disabling, and testing OAuth; and retrieving your OAuth credentials is provided below. You can find more at our [Event Webhook API Reference](https://sendgrid.api-docs.io/v3.0/webhooks/retrieve-event-webhook-settings).

#### Enable/Disable OAuth

To enable or disable OAuth, you can pass a `PATCH` request to `https://api.sendgrid.com/v3/user/webhooks/event/settings`.

This endpoint expects a JSON request body. The three optional string fields used to manage OAuth are `oauth_client_id`, `oauth_client_secret`, and `oauth_token_url`.

1. **Client ID**: Required to generate an authorization token.
2. **Client Secret**: Required to generate an authorization token. This secret is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again.
3. **Token URL**: The URL where Twilio SendGrid should deliver the Client ID and Client Secret in order to create an access token. This URL should route to your own authorization server or an OAuth service such as Auth0 or Okta.

Passing a request with valid values assigned to these fields will enable OAuth. Passing a request with empty values in these fields will disable OAuth.

```javascript
{
  “oauth_client_id”: “yourclientidstringvalue”,
  “oauth_client_secret”: “yourclientsecretstringvalue”,
  “oauth_token_url”: “https://your-authorization-service.com”
}
```

<call-out>

Please note, there are other required fields when making requests to this API endpoint. Please see the [API reference for details](https://sendgrid.api-docs.io/v3.0/webhooks/retrieve-event-webhook-settings).

</call-out>

<call-out type="warning">

Using the v2 Web API's `eventnotify` API call will overwrite any previously configured Event Webhook notification settings, including OAuth 2.0. If your OAuth 2.0 settings are overwitten, please configure them again using either the [Mail Settings](https://app.sendgrid.com/settings/mail_settings) page or the [SendGrid v3 API](https://sendgrid.api-docs.io/v3.0/webhooks/update-event-notification-settings)

</call-out>

#### Testing the Event Webhook

You can test your Webhook by passing a `POST` request to `https://api.sendgrid.com/v3/user/webhooks/event/test`. This request will send a fake event to your HTTP POST URL, which you can use to verify proper functionality. This endpoint expects a JSON request body with a required URL field. To test the OAuth setup, you must include the three optional OAuth fields.

```javascript
{
  “url”: “https://your-http-post-url.com”,
  “oauth_client_id”: “yourclientidstringvalue”,
  “oauth_client_secret”: “yourclientsecretstringvalue”,
  “oauth_token_url”: “https://your-authorization-service.com”
}
```

#### Retrieve your OAuth credentials.

To retrieve your OAuth credentials, pass a `GET` request to `https://api.sendgrid.com/v3/user/webhooks/event/settings`. You do not need to pass any query parameters to this endpoint. Note that only the `oauth_client_id` and `oauth_token_url` will be returned. The `oauth_client_secret` will not be provided for security reasons.

## Helper Libraries

Twilio SendGrid currently supports two helper libraries for working with the Event Webhook’s security features: [Golang](https://github.com/sendgrid/sendgrid-go/tree/master/helpers/eventwebhook) and [Java](https://github.com/sendgrid/sendgrid-java/tree/master/src/main/java/com/sendgrid/helpers). We have also provided a [Java code example on GitHub](https://github.com/sendgrid/sendgrid-java/blob/master/examples/helpers/eventwebhook/Example.java).

## Next steps

Now that you know how to secure the Event Webhook, you can begin using your event data to better understand your email. To finish setting up the Webhook, see [Getting Started with the Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/) or jump right into the [Event Webhook Reference](/for-developers/tracking-events/event/).
