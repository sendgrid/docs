---
seo:
  title: Event Webhook Reference
  description: Full Event Webhook event list and descriptions, event examples, and the objects each event contains.
  keywords: event webhook API reference, reference, events, event webhook
title: Event Webhook Reference
group: reference-troubleshooting
weight: 90
layout: page
navigation:
  show: true
---

## 	Events

Events are generated when email is processed by SendGrid and email service providers. There are 2 types of events - delivery and engagement events. Delivery events indicate the status of email delivery to the recipient. Engagement events indicate how the recipient is interacting with the email.

Here is a flow of email events:

![]({{root_url}}/img/email-event-flow.png "The flow of events and their categories")

Here is an event response that includes an example of each type of event:

```json
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"processed",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"deferred",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "response":"400 try again later",
      "attempt":"5"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"delivered",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "response":"250 OK"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"open",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"click",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"bounce",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "reason":"500 unknown recipient",
      "status":"5.0.0"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"dropped",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "reason":"Bounced Address",
      "status":"5.0.0"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"spamreport",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"unsubscribe",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"group_unsubscribe",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/",
      "asm_group_id":10
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"group_resubscribe",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"000.000.000.000",
      "url":"http://www.sendgrid.com/",
      "asm_group_id":10
   }
]
```

 ### 	Delivery events

Delivery events include processed, dropped, delivered, deferred, and bounce.

<table class="table">
  <colgroup>
    <col class="table-col-100">
    <col class="table-col-200">
    <col>
  </colgroup>
   <tbody>
      <tr>
         <th>Event</th>
         <th>Description</th>
         <th>Example webhook response</th>
      </tr>
      <tr>
         <td><a name="processed"></a>Processed</td>
         <td>Message has been received and is ready to be delivered.</td>
         <td>
```raw
[
  {
      "email":"example@test.com",
      "timestamp":1513299569,
      "pool": {
            "name": "new_MY_test",
            "id": 210
        },
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"processed",
      "category":"cat facts",
      "sg_event_id":"rbtnWrG1DVDGGGFHFyun0A==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.000000000000000000000"
  }
]
```
        </td>
      </tr>
      <tr>
         <td><a name="dropped"></a>Dropped</td>
         <td>You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if Spam Checker app is enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota</td>
         <td>
```raw
[
  {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"dropped",
      "category":"cat facts",
      "sg_event_id":"zmzJhfJgAfUSOW80yEbPyw==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "reason":"Bounced Address",
      "status":"5.0.0"
  }
]
```
        </td>
      </tr>
      <tr>
         <td><a name="delivered"></a>Delivered</td>
         <td>Message has been successfully delivered to the receiving server.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"delivered",
      "category":"cat facts",
      "sg_event_id":"rWVYmVk90MjZJ9iohOBa3w==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "response":"250 OK"
   }
]
```
      </td>
      </tr>
      <tr>
         <td><a name="deferred"></a>Deferred</td>
         <td>Receiving server temporarily rejected the message.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"deferred",
      "category":"cat facts",
      "sg_event_id":"t7LEShmowp86DTdUW8M-GQ==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "response":"400 try again later",
      "attempt":"5"
   }
]
```
    </td>
      </tr>
      <tr>
         <td><a name="bounce"></a>Bounce</td>
         <td>Receiving server could not or would not accept the message. If a recipient has previously unsubscribed from your emails, the message is dropped.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"bounce",
      "category":"cat facts",
      "sg_event_id":"6g4ZI7SA-xmRDv57GoPIPw==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "reason":"500 unknown recipient",
      "status":"5.0.0"
   }
]
```
</td>
      </tr>
   </tbody>
</table>

 ### 	Engagement events

Engagement events include open, click, spam report, unsubscribe, group unsubscribe, and group resubscribe.

<table class="table">
  <colgroup>
  <col class="table-col-100">
  <col class="table-col-200">
  <col>
  </colgroup>
   <tbody>
      <tr>
         <th>Event</th>
         <th>Description</th>
         <th>Example webhook response</th>
      </tr>
      <tr>
         <td><a name="open"></a>Open</td>
         <td>Recipient has opened the HTML message. Open Tracking needs to be enabled for this type of event.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"open",
      "category":"cat facts",
      "sg_event_id":"FOTFFO0ecsBE-zxFXfs6WA==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255"
   }
]
```
</td>
      </tr>
      <tr>
         <td><a name="click"></a>Click</td>
         <td>Recipient clicked on a link within the message. Click Tracking needs to be enabled for this type of event.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"click",
      "category":"cat facts",
      "sg_event_id":"kCAi1KttyQdEKHhdC-nuEA==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/"
   }
]
```
    </td>
      </tr>
      <tr>
         <td><a name="spamreport"></a>Spam Report</td>
         <td>Recipient marked message as spam.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"spamreport",
      "category":"cat facts",
      "sg_event_id":"37nvH5QBz858KGVYCM4uOA==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0"
   }
]
```
    </td>
      </tr>
      <tr>
         <td><a name="unsubscribe"></a>Unsubscribe</td>
         <td>Recipient clicked on the 'Opt Out of All Emails' link (available after clicking the message's subscription management link). Subscription Tracking needs to be enabled for this type of event.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"unsubscribe",
      "category":"cat facts",
      "sg_event_id":"zz_BjPgU_5pS-J8vlfB1sg==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0"
   }
]
```
      </td>
      </tr>
      <tr>
         <td><a name="groupunsubscribe"></a>Group Unsubscribe</td>
         <td>Recipient unsubscribed from a specific group either by clicking the link directly or updating their preferences. Subscription Tracking needs to be enabled for this type of event.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"group_unsubscribe",
      "category":"cat facts",
      "sg_event_id":"ahSCB7xYcXFb-hEaawsPRw==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/",
      "asm_group_id":10
   }
]
```
    </td>
      </tr>
      <tr>
         <td><a name="groupresubscribe"></a>Group Resubscribe</td>
         <td>Recipient resubscribed to a specific group by updating their preferences. Subscription Tracking needs to be enabled for this type of event.</td>
         <td>
```raw
[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"group_resubscribe",
      "category":"cat facts",
      "sg_event_id":"w_u0vJhLT-OFfprar5N93g==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/",
      "asm_group_id":10
   }
]
```
</td>
      </tr>
   </tbody>
</table>

## 	Event objects

<table class="table auto">
  <tr>
    <th></th>
    <th><a href="#processed">Processed</a></th>
    <th><a href="#dropped">Dropped</a></th>
    <th><a href="#delivered">Delivered</a></th>
    <th><a href="#deferred">Deferred</a></th>
    <th><a href="#bounce">Bounce</a></th>
    <th><a href="#opened">Opened</a></th>
    <th><a href="#clicked">Clicked</a></th>
    <th><a href="#spamreport">Spam Report</a></th>
    <th><a href="#unsubscribe">Unsubscribe</a></th>
    <th><a href="#groupunsubscribe">Group Unsubscribe</a></th>
    <th><a href="#groupresubscribe">Group Resubscribe</a></th>
  </tr>
  <tr>
    <td><a href="#email">email</a></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#timestamp">timestamp</a></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#event">event</a></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#smtpid">smtp-id</a></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#useragent">useragent</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#ip">ip</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#sgeventid">sg_event_id</a></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#sgmessageid">sg_message_id</a></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#reason">reason</a></td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="#status">status</a></td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="#response">response</a></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="#tls">tls</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="#url">url</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#category">category</a></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#asmgroupid">asm_group_id</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td><a href="#uniqueargs">unique_args</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="#marketingcampaignid">marketing_campaign_id</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="#marketingcampaignname">marketing_campaign_name</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="#attempt">attempt</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
    <tr>
    <td><a href="#pool">pool</a></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

 ### 	JSON objects

- <a name="email"></a>`email` - the email address of the recipient
- <a name="timestamp"></a>`timestamp` - the <a href="https://en.wikipedia.org/wiki/Unix_time">UNIX timestamp</a> of when the message was sent
- <a name="event"></a>`event` - the event type. Possible values are processed, dropped, delivered, deferred, bounce, open, click, spam report, unsubscribe, group unsubscribe, and group resubscribe.
- <a name="smtpid"></a>`smtp-id` - a unique ID attached to the message by the originating system.
- <a name="useragent"></a>`useragent` - the user agent responsible for the event. This is usually a web browser. For example, "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36".
- <a name="ip"></a>`IP` - the IP address used to send the email. For `open` and `click` events, it is the IP address of the recipient who engaged with the email.
- <a name="sgeventid"></a>`sg_event_id` - a unique ID to this event that you can use for deduplication purposes. These IDs are 22 characters long.
- <a name="sgmessageid"></a>`sg_message_id` - a unique, internal SendGrid ID for the message. The first half of this is pulled from the `smtp-id`.
- <a name="reason"></a>`reason` - any sort of error response returned by the receiving server that describes the reason this event type was triggered.
- <a name="status"></a>`status` - status code string. Corresponds to HTTP status code - for example, a JSON response of 5.0.0 is the same as a 500 error response.
- <a name="response"></a>`response` - the full text of the HTTP response error returned from the receiving server.
- <a name="tls"></a>`tls` - indicates whether TLS encryption was used in sending this message. For more information about TLS, see the [TLS Glossary page]({{root_url}}/glossary/tls/).
- <a name="url"></a>`url` - the URL where the event originates. For click events, this is the URL clicked on by the recipient.
- <a name="attempt"></a>`attempt` - the number of times SendGrid has attempted to deliver this message.
- <a name="category"></a>`category` - [Categories]({{root_url}}/glossary/categories/) are custom tags that you set for the purpose of organizing your emails. If you send single categories as an array, they will be returned by the webhook as an array. If you send single categories as a string, they will be returned by the webhook as a string.

String categories:

```json
[
  {
    "email": "john.doe@sendgrid.com",
    "timestamp": 1337966815,
    "category": "newuser",
    "event": "open"
  },
  {
    "email": "jane.doe@sendgrid.com",
    "timestamp": 1337966815,
    "category": "olduser",
    "event": "open"
  }
]
```

Array:

```json
[
  {
    "email": "john.doe@sendgrid.com",
    "timestamp": 1337966815,
    "category": [
      "newuser",
      "transactional"
    ],
    "event": "open"
  },
  {
    "email": "jane.doe@sendgrid.com",
    "timestamp": 1337966815,
    "category": "olduser",
    "event": "open"
  }
]
```

- <a name="asmgroupid"></a>`asm_group_id` - The ID of the unsubscribe group the recipient's email address is included in. ASM IDs correspond to the ID that is returned when you create an unsubscribe group.
- <a name="uniqueargs"></a>`unique_args` or `custom_args`
## 	Unique Arguments and Custom Arguments

Events generated by SendGrid can include [unique arguments]({{root_url}}/for-developers/sending-email/unique-arguments/) or custom arguments.

<call-out>

Unique arguments and custom arguments essentially have the same function. However, unique arguments are used in the SMTP API or V2 Mail Send, and custom arguments are used in the V3 Mail Send.

</call-out>

 ### 	Unique Arguments

To define and receive unique arguments when sending email with the [SMTP API]({{root_url}}/for-developers/sending-email/building-an-smtp-email/) or the [v2 Mail Send endpoint]({{root_url}}/API_Reference/Web_API/mail.html), use the `unique_args` parameter in the X-SMTPAPI header. For example, if you have an application and want to receive custom parameters such as the `userid` and the email `template`, you would submit them with the X-SMTPAPI header, as described [here]({{root_url}}/for-developers/sending-email/unique-arguments/).

For example, if you include the following unique arguments in your x-smtpapi header for an email sent via the v2 Mail Send endpoint:

```json
{
  "unique_args": {
    "userid": "1123",
    "template": "welcome"
  }
}
```

You will receive the same unique argument included with the data posted to your Event Webhook:

```json
[
  {
    "sg_message_id":"sendgrid_internal_message_id",
    "email": "john.doe@sendgrid.com",
    "timestamp": 1337966815,
    "event": "click",
    "url": "https://sendgrid.com",
    "userid": "1123",
    "template": "welcome"
  }
]
```

<call-out type="warning">

You can create unique arguments with the same words as reserved keys, such as "event" or "email". However, SendGrid will default to the reserved key and NOT your unique argument for events that contain a reserved key as an object. An example of this is below.

</call-out>

 ### 	Reserved Keys in Unique Arguments

```json
//for this example, assume we're sending to john.doe@sendgrid.com
{
  "unique_args": {
    "customerAccountNumber": "55555",
    "activationAttempt": "1",
    "New Argument 1": "New Value 1",
    "email": "jane.doe@sendgrid.com",
    "event": "SendEmail"
  }
}
```

 ### 	The resulting webhook call

```json
[
  {
    "event": "Processed",
    "timestamp":"123456789",
    "customerAccountNumber": "55555",
    "activationAttempt": "1",
    "New Argument 1": "New Value 1",
    "email": "john.doe@sendgrid.com"
  }
]
```

<call-out>

You'll notice that the unique arguments, "event" and "email", were overwritten because they are reserved keys for SendGrid's values.

</call-out>

 ### 	Custom Arguments

Any custom arguments that you include with an email sent through [v3 Mail Send]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) gets added to your Event Webhook response.

For example, if you were to include the following custom arguments in a personalization in your payload to the v3 Mail Send endpoint:

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "example@example.com"
        }
      ],
      "subject": "Hello, World!",
      "custom_args": {
        "userid": "1123"
      }
    }
  ],
  "from": {
    "email": "from_address@example.com"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "Hello, World!"
    }
  ]
}
```

The Event Webhook response:

```json
[
  {
    "userid": "1123"
  }
]
```

- <a name="marketingcampaignid"></a>`marketing_campaign_id`
- <a name="marketingcampaignname"></a>`marketing_campaign_name`

For emails sent through our Marketing Campaigns feature, we add Marketing Campaigns specific parameters to the Event Webhook. Both `marketing_campaign_name` and `marketing_campaign_id` are displayed as unique arguments in the event data.

 ### 	Example event from a standard (non-A/B test) campaign send:

```json
  {
    "category": [],
    "email": "email@example.com",
    "event": "processed",
    "marketing_campaign_id": 12345,
    "marketing_campaign_name": "campaign name",
    "post_type": "event",
    "sg_event_id": "sendgrid_internal_event_id",
    "sg_message_id": "sendgrid_internal_message_id",
    "sg_user_id": 12345,
    "smtp-id": "",
    "timestamp": 1442349428
  }
```

 ### 	Example event from an A/B Test:

 `marketing_campaign_version` is displayed in the event data for emails sent as part of an A/B Test. The value for `marketing_campaign_version` are returned as `A`, `B`, `C`, etc.

```json
{
  "category": [],
  "email": "tadpole_0010@stbase-018.sjc1.sendgrid.net",
  "event": "processed",
  "marketing_campaign_id": 23314,
  "marketing_campaign_name": "unique args ab",
  "marketing_campaign_version": "B",
  "marketing_campaign_split_id": 13471,
  "post_type": "event",
  "sg_event_id": "qNOzbkTuTNCdxa1eXEpnXg",
  "sg_message_id": "5lFl7Fr1Rjme_EyzNNB_5A.stfilter-015.5185.55F883172.0",
  "sg_user_id": 939115,
  "smtp-id": "<5lFl7Fr1Rjme_EyzNNB_5A@stismtpd-006.sjc1.sendgrid.net>",
  "timestamp": 1442349848
}
```

 ### 	Example event from the winning phase of an A/B Test:

```json
{
  "category": [],
  "email": "tadpole_0001@stbase-018.sjc1.sendgrid.net",
  "event": "delivered",
  "marketing_campaign_id": 23314,
  "marketing_campaign_name": "unique args ab",
  "post_type": "event",
  "response": "250 Ok ",
  "sg_event_id": "X2M1IUfMRhuAhWM0CbmFqQ",
  "sg_message_id": "fPJrJPIRTxC_obpgfTy74w.stfilter-015.5185.55F883564.0",
  "sg_user_id": 12345,
  "smtp-id": "",
  "timestamp": 1442349911
}
```

 ### 	Legacy Marketing Email Unsubscribes

For emails sent through our Legacy Marketing Email tool, unsubscribes look like the following example:

```json
[
  {
    "email": "nick@sendgrid.com",
    "timestamp": 1380822437,
    "newsletter": {
      "newsletter_user_list_id": "10557865",
      "newsletter_id": "1943530",
      "newsletter_send_id": "2308608"
    },
    "category": [
      "Tests",
      "Newsletter"
    ],
    "event": "unsubscribe"
  }
]
```

<a name="pool"></a>`pool` - For emails sent with a specified IP Pool, you can view the IP Pool in the event data for a processed event.

```json
[
    {
        "email": "john.doe@sendgrid.com",
        "smtp-id": "<14c583da911.2c36.1c804d@ismtpd-073>",
        "timestamp": 1427409578,
        "pool": {
            "name": "new_MY_test",
            "id": 210
        },
        "sg_event_id": "RHFZB1IrTD2Y9Q7bUdZxUw",
        "sg_message_id": "14c583da911.2c36.1c804d.filter-406.22375.55148AA99.0",
        "event": "processed"
    }
]
```

 ### 	Click

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>url</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>click</td>
         <td>Message recipient</td>
         <td>URL Clicked</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

```json
[
    {
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "ip":"255.255.255.255",
  "useragent":"Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
  "event":"click",
  "email":"email@example.com",
  "timestamp":1249948800,
  "url":"http://yourdomain.com/blog/news.html",
  "url_offset": {
    "index": 0,
    "type": "html"
  },
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "newsletter": {
    "newsletter_user_list_id": "10557865",
    "newsletter_id": "1943530",
    "newsletter_send_id": "2308608"
  },
  "asm_group_id": 1
    }
]
```

## 	Additional Resources

- [Getting started with the Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/)
- [Troubleshooting the event webhook]({{root_url}}/for-developers/tracking-events/troubleshooting/)
- [An Event Webhook case study](https://sendgrid.com/blog/leveraging-sendgrids-event-api/)
- [Webhook web libraries]({{root_url}}/for-developers/sending-email/libraries/)
- [Getting started with Keen.io]({{root_url}}/for-developers/tracking-events/analytics-with-keen-io/)
