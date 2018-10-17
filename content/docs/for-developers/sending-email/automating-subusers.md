---
seo:
  title: Automate Adding Subusers with the SendGrid API
  description: Use the SendGrid API to add Subusers to your account.
  keywords: Getting Started, API, v3, REST, SendGrid REST API, Subuser
title: Automate Adding Subusers with the SendGrid API
group: api-v3
weight: 100
layout: page
navigation:
  show: true
---

You can utilize the SendGrid API to automate the addition of Subusers to your account. Use the following ```curl``` examples to add a Subuser using the SendGrid V3.0 API.

## 	Prerequisites

Before you can start using the API, you need to do the following:

1. Create a SendGrid [account](https://sendgrid.com/pricing/).
2. Create an [API Key](https://app.sendgrid.com/settings/api_keys).
3. Make sure you have [curl](https://curl.haxx.se/) installed on your machine.

<call-out>

curl comes standard on Mac operating systems.

</call-out>

## 	How to add a Subuser via the SendGrid API and curl

### Creating the Subuser

1. **Create Subuser** - Creating the actual account, the profile, username, password, and the keys you want on the account.

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{
  "username": “examplecurltesting",
  "email": "example@example.com",
  "password": “PASSWORD",
  "ips": [
  "167.89.38.39",
  "198.37.152.144"
  ]
}' 'https://api.sendgrid.com/v3/subusers'
```
The successful Response looks like this:

```bash
=> 2xx
{"username”:”examplecurltesting","user_id":1868534,"email”:”example@example.com","signup_session_token":"","authorization_token":"","credit_allocation":{"type":"unlimited"}}
```

2. **GET Subusers** (optional step to confirm POST):

```bash
curl -X GET -H "Authorization: Basic XXXXXXXXXXXXXX" -H "Content-Type: application/json" 'https://api.sendgrid.com/v3/subusers'
```

Response:

```bash
[{"disabled":false,"email":"example@example.com","id":1762958,"username":"exampletestingv3subuserapi"},{"disabled":false,"email":"example@testsite.com","id":1766771,"username":"examplesubuser-UI"},{"disabled":false,"email":"example@testsite.com","id":1803837,"username":"exampleisasubuser"},{"disabled":false,"email":"example@example.com","id":1868534,"username":"examplecurltesting"}]
```

3. **Create API Keys** (optional, depends on integration style): If the application would rather run on API keys than a password, then follow this step:

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{"name": “API KEY NAME"}' 'https://api.sendgrid.com/v3/api_keys'
```

or, you can create the key for your Subuser:

```bash
curl -X POST -H "Authorization: Bearer PARENT_APIKEY_HERE" 
  -H "On-Behalf-Of: examplecurltesting" \
  -H "Content-Type: application/json" -d '{"name": “API KEY NAME"}' \
  'https://api.sendgrid.com/v3/api_keys'
  ```
  
Successful API key implementation Response:
  
  ```bash
  => 201 created
{"api_key":"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","api_key_id":"rGaWG-xBTHiBuhCLxWZ0Hg","name":"new api key","scope_set_id":"00766089-9730-4f16-8191-b8bedc5f57f5"}
```

Once this has been done, the Subuser has been created. From this point on, we’ll cover implementing Click Tracking, Open Tracking, and the Event Webhook for those Subusers.

### Enable/Edit Applications
As of right now this needs to be done directly through the account in question.

**Click Tracking**

```bash
curl -X PATCH -H "Authorization: Basic XXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{"enabled": true,"enable_text" : true}' 'https://api.sendgrid.com/v3/tracking_settings/click'
```

Response:

```bash
=> 200 OK
{"enable_text":true,"enabled":true}
```

**Open Tracking**

```bash
curl -X PATCH -H "Authorization: Basic XXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{"enabled": true}' 'https://api.sendgrid.com/v3/tracking_settings/open'
```

Response:

```bash
=> 200 ok
{"enabled":true}
```

**Event Webhook**

```bash
curl -X PATCH -H "Authorization: Basic XXXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{"enabled": true,"url":"https://api.keen.io/3.0/projects/526a8a5f05cd660472000012/partners/sendgrid?api_key=081da3fc30ca5b11b1f8b133de7064817b57c86d3261f140dc36243eb6829a100d4c5e38db8dd289194d4e02159bbf7ebad74a1fba1fce7a421a00c7a2f7d0f8ba5ef6ea3cece6345904d79395c35cdeaed221c3a208c897e79dd95da399a1d2d1d3e66768af929aa52d621e5bd296a5","group_resubscribe": true,"delivered": true,"group_unsubscribe": true,"bounce": true,"deferred": true,"unsubscribe": true,"processed": true,"open": true,"click": true,"dropped": true}' 'https://api.sendgrid.com/v3/user/webhooks/event/settings'
```

Response:

```bash
=> 200 ok
{
"bounce": true,
"click": true,
"deferred": true,
"delivered": true,
"dropped": true,
"enabled": true,
"group_resubscribe": true,
"group_unsubscribe": true,
"open": true,
"processed": true,
"spam_report": false,
"unsubscribe": true,
"url": "https://api.keen.io/3.0/projects/526a8a5f05cd660472000012/partners/sendgrid?api_key=081da3fc30ca5b11b1f8b133de7064817b57c86d3261f140dc36243eb6829a100d4c5e38db8dd289194d4e02159bbf7ebad74a1fba1fce7a421a00c7a2f7d0f8ba5ef6ea3cece6345904d79395c35cdeaed221c3a208c897e79dd95da399a1d2d1d3e66768af929aa52d621e5bd296a5"}
```


### Domain Authentication for the Subuser

Now we are going to setup Domain Authentication for the Subusers created above. This process involves creating the parent Domain Authentication and then associating it with your Subusers:


1. **Create Domain Authentication**

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{
  "domain": "example.com",
  "subdomain": "subdomain",
  "ips": [
  "167.89.38.39",
  "198.37.152.144"
  ],
  "default": true,
  "automatic_security": true
  }' 'https://api.sendgrid.com/v3/whitelabel/domains'
```

Response:

```bash
=> 2xx

{"id":50784,"user_id":624781,"subdomain":"subdomain","domain":"example.com","username":"examplecurltesting","ips":["167.89.38.39","198.37.152.144"],"custom_spf":false,"default":true,"legacy":false,"automatic_security":true,"valid":false,
"dns":{"mail_cname":{"valid":false,"type":"cname","host":"subdomain.example.com","data":"u624781.wl.sendgrid.net"},"dkim1":{"valid":false,"type":"cname","host":"s1._domainkey.example.com","data":"s1.domainkey.u624781.wl.sendgrid.net"},"dkim2":{"valid":false,"type":"cname","host":"s2._domainkey.example.com","data":"s2.domainkey.u624781.wl.sendgrid.net"},"spf":{"valid":false,"type":"txt","host":"example.com","data":"v=spf1 include:u624781.wl.sendgrid.net -all"}}}
{
"id": 50784,
"user_id": 624781,
"subdomain": "subdomain",
"domain": "example.com",
"username": "examplecurltesting",
"ips": [
"167.89.38.39",
"198.37.152.144"
],
"custom_spf": false,
"default": true,
"legacy": false,
"automatic_security": true,
"valid": false,
"dns": {
"mail_cname": {
"valid": false,
"type": "cname",
"host": "subdomain.example.com",
"data": "u624781.wl.sendgrid.net"
},
"dkim1": {
"valid": false,
"type": "cname",
"host": "s1._domainkey.example.com",
"data": "s1.domainkey.u624781.wl.sendgrid.net"
},
"dkim2": {
"valid": false,
"type": "cname",
"host": "s2._domainkey.example.com",
"data": "s2.domainkey.u624781.wl.sendgrid.net"
},
"spf": {
"valid": false,
"type": "txt",
"host": "example.com",
"data": "v=spf1 include:u624781.wl.sendgrid.net -all"
}
}
```

You will want to look for the Domain Authentication ID here (in this example, the ID is ```"id": 50784```), as this will be used in the next calls to append this ID to the Subusers. Also, the records needed to validate this Domain Authentication will be passed back in the response.


2. **Create Reverse DNS**

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXXXXX" -H "Content-Type: application/json” -d '{"ip": "167.89.66.50",
  "subdomain": "email",
  "domain": "example.com"}' 'https://api.sendgrid.com/v3/whitelabel/ips'
 ```
  
  Successful Response: 
 ```bash
 => 2xx
  {
  "id": 11887,
  "ip": "167.89.66.50",
  "rdns": "o4.email.example.com",
  "users": [],
  "subdomain": "email",
  "domain": "example.com",
  "a_record": {
  "valid": false,
  "type": "a",
  "host": "o4.email.example.com",
  "data": "167.89.66.50"
  },
  "valid": false,
  "legacy": false
  }
```


3. **Create Link Branding**

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{
  "domain": "example.com",
  "subdomain": "links",
  "default": true
  }' 'https://api.sendgrid.com/v3/whitelabel/links'
```

Response:
```bash
=> 2xx
{
"id": 42371,
"user_id": 624781,
"domain": "example.com",
"subdomain": "links",
"username": "examplecurltesting",
"valid": false,
"default": true,
"legacy": false,
"dns": {
"domain_cname": {
"valid": false,
"type": "cname",
"host": "links.example.com",
"data": "sendgrid.net"
},
"owner_cname": {
"valid": false,
"type": "cname",
"host": "624781.example.com",
"data": "sendgrid.net"
}
}
}
```
After creating DNS records then wait for them to propagate and validate records.


4. **GET all Domain Authentication IDs** - grab the ID to validate and associate to an account.

```bash
curl -X GET -H "Authorization: Basic XXXXXXXXXXXXXXXX" -H "Content-Type: application/json" 'https://api.sendgrid.com/v3/whitelabel/domains'
```

Response:

```bash
= 2xx ok
{
"id": 50784,
"user_id": 624781,
"subdomain": "subdomain",
"domain": "example.com",
"username": "examplecurltesting",
"ips": [
"167.89.38.39",
"198.37.152.144"
],
"custom_spf": false,
"default": true,
"legacy": false,
"automatic_security": true,
"valid": false,
"dns": {
"mail_cname": {
"valid": false,
"type": "cname",
"host": "subdomain.example.com",
"data": "u624781.wl.sendgrid.net"
},
"dkim1": {
"valid": false,
"type": "cname",
"host": "s1._domainkey.example.com",
"data": "s1.domainkey.u624781.wl.sendgrid.net"
},
"dkim2": {
"valid": false,
"type": "cname",
"host": "s2._domainkey.example.com",
"data": "s2.domainkey.u624781.wl.sendgrid.net"
},
"spf": {
"valid": false,
"type": "txt",
"host": "example.com",
"data": "v=spf1 include:u624781.wl.sendgrid.net -all"
}
}
}
```


5. **Validate ID of the Domain Authentication**
Once you have the ID of the Domain Authentication you can Validate it.

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXXXXXX" -H "Content-Type: application/json" 'https://api.sendgrid.com/v3/whitelabel/domains/50784/validate'
````

Response:

```bash
=> 2xx
{ "id”: 50784, "valid": true, "validation_resuts": { "mail_cname": { "valid": false, "reason": "Expected your MX record to be "mx.sendgrid.net" but found "example.com"." },"dkim1": { "valid": true, "reason": null }, "dkim2": { "valid": true, "reason": null }, "spf": { "valid": true, "reason": null } } }
```


6. **Associate with a Subuser**
Once Validated, you can associate to any Subuser accounts.

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXXXXX" -H "Content-Type: application/json" -d '{
"username": "examplecurltesting"
}' 'https://api.sendgrid.com/v3/whitelabel/domains/50784/subuser'
````


7. **Link Branding**
Follow the same process with Link branding:

```bash
-> GET link ID (ex. 42371)
curl -X GET -H "Authorization: Basic XXXXXXXXXXXXXX" -H "Content-Type: application/json" -'https://api.sendgrid.com/v3/whitelabel/links'
```

Response:

```bash
 => 200 ok
[
{
"id": 203,
"user_id": 624781,
"domain": "example.com",
"subdomain": "links",
"username": "examplecurltesting",
"valid": true,
"default": false,
"legacy": false,
"dns": {
"domain_cname": {
"valid": true,
"type": "cname",
"host": "links.example.com",
"data": "sendgrid.net"
},
"owner_cname": {
"valid": true,
"type": "cname",
"host": "624781.example.com",
"data": "sendgrid.net"
}
}
},
{
"id": 202,
"user_id": 624781,
"domain": "example.org",
"subdomain": "links",
"username": "examplecurltesting",
"valid": true,
"default": false,
"legacy": false,
"dns": {
"domain_cname": {
"valid": true,
"type": "cname",
"host": "links.example.org",
"data": "sendgrid.net"
},
"owner_cname": {
"valid": true,
"type": "cname",
"host": "624781.example.org",
"data": "sendgrid.net"
}
}
},
{
"id": 42371,
"user_id": 624781,
"domain": "example.net",
"subdomain": "links",
"username": "examplecurltesting",
"valid": false,
"default": true,
"legacy": false,
"dns": {
"domain_cname": {
"valid": false,
"type": "cname",
"host": "links.example.net",
"data": "sendgrid.net"
},
"owner_cname": {
"valid": false,
"type": "cname",
"host": "624781.example.net",
"data": "sendgrid.net"
}
}
}
]
```

Validate Link Branding:

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXX" -H "Content-Type: application/json" 'https://api.sendgrid.com/v3/whitelabel/links/203/validate'
```

Response:

```bash
=> 200 ok
{
"id": 203,
"valid": true,
"validation_results": {
"domain_cname": {
"valid": true,
"reason": null
},
"owner_cname": {
"valid": true,
"reason": null
}
}
}
```

Associate Link Branding:

```bash
curl -X POST -H "Authorization: Basic XXXXXXXXXXXX" -H "Content-Type: application/json" -d '{"username": "jane@example.com”}' 'https://api.sendgrid.com/v3/whitelabel/links/{link_id}/subuser'
```

Response:

```bash
=> 201 created
{
"id": 200,
"user_id": 623032,
"domain": "example.com",
"subdomain": "links",
"username": "examplecurltesting",
"valid": false,
"default": false,
"legacy": false,
"dns": {
"domain_cname": {
"valid": false,
"type": "cname",
"host": "links.example.com",
"data": "sendgrid.net"
},
"owner_cname": {
"valid": true,
"type": "cname",
"host": "623032.example.com",
"data": "sendgrid.net"}}}
```

## 	Next Steps

For more information on SendGrid and where you can go from here, check out these pages:

- [API Reference]({{root_url}}/api-reference/)
- [How to Create a Subuser with the API]({{root_url}}/for-developers/sending-email/how-to-create-a-subuser-with-the-api/)
- [Sender Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)
- [How to Send Email]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)
