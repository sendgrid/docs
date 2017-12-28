---
seo:
  title: Event Webhook Reference
  description: Full Event Webhook event list and descriptions, event examples, and the objects each event contains.
  keywords: event webhook API reference, reference, events, event webhook
title: Event Webhook Reference
weight: 90
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Events
{% endanchor %}

Email events are generated as email is processed by SendGrid and by the email service providers. There are two types of events - delivery events, and engagement events. Delivery events indicate whether an email is successfully delivered to the receipient. Engagement events indicate how the reciepient is interacting with the email. 

Here is a flow of when emails are processed:

![]({{root_url}}/images/event_1.jpg "Event Flow")

This is an example event response that includes all of the SendGrid generated events:

{% codeblock lang:json %}
[  
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"processed",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"delivered",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "response":"250 OK"
   },
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"spamreport",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"unsubscribe",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
{% endcodeblock %}

{% anchor h3 %}
Delivery events
{% endanchor %}


Delivery events include bounce, deferred, delivered, dropped, and processed.

<table class="table">
   <tbody>
      <tr>
         <th>Event</th>
         <th>Description</th>
         <th>Example webhook response</th>
      </tr>
      <tr>
         <td><a name="processed"></a>Processed</td>
         <td>Message has been received and is ready to be delivered.</td>
         <td>{% codeblock lang:json %}
[  
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "pool": {
            "name": "new_MY_test",
            "id": 210
        },
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"processed",
      "category":"cat facts",
      "sg_event_id":"rbtnWrG1DVDGGGFHFyun0A==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="dropped"></a>Dropped</td>
         <td>You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"dropped",
      "category":"cat facts",
      "sg_event_id":"zmzJhfJgAfUSOW80yEbPyw==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "reason":"Bounced Address",
      "status":"5.0.0"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="delivered"></a>Delivered</td>
         <td>Message has been successfully delivered to the receiving server.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"delivered",
      "category":"cat facts",
      "sg_event_id":"rWVYmVk90MjZJ9iohOBa3w==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "response":"250 OK"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="deferred"></a>Deferred</td>
         <td>Recipient's email server temporarily rejected message.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"deferred",
      "category":"cat facts",
      "sg_event_id":"t7LEShmowp86DTdUW8M-GQ==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "response":"400 try again later",
      "attempt":"5"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="bounce"></a>Bounce</td>
         <td>Receiving server could not or would not accept the message. If a reciepient has previously unsubscribed from your emails, your attempt to send to them is bounced.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"bounce",
      "category":"cat facts",
      "sg_event_id":"6g4ZI7SA-xmRDv57GoPIPw==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "reason":"500 unknown recipient",
      "status":"5.0.0"
   }
]
{% endcodeblock %}</td>
      </tr>
   </tbody>
</table>

{% anchor h3 %}
Engagement events
{% endanchor %}

Engagement events include click, open, spam report, unsubscribe, group unsubscribe, and group resubscribe.

<table class="table">
   <tbody>
      <tr>
         <th>Event</th>
         <th>Description</th>
         <th>Example webhook response</th>
      </tr>
      <tr>
         <td><a name="open"></a>Open</td>
         <td>Recipient has opened the HTML message. You need to enable Open Tracking for getting this type of event.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"open",
      "category":"cat facts",
      "sg_event_id":"FOTFFO0ecsBE-zxFXfs6WA==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="click"></a>Click</td>
         <td>Recipient clicked on a link within the message. You need to enable Click Tracking for getting this type of event.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"click",
      "category":"cat facts",
      "sg_event_id":"kCAi1KttyQdEKHhdC-nuEA==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="spamreport"></a>Spam Report</td>
         <td>Recipient marked message as spam.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"spamreport",
      "category":"cat facts",
      "sg_event_id":"37nvH5QBz858KGVYCM4uOA==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="unsubscribe"></a>Unsubscribe</td>
         <td>Recipient clicked on the 'Opt Out of All Emails' link (available after clicking the message's subscription management link). You need to enable Subscription Tracking for getting this type of event.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
      "event":"unsubscribe",
      "category":"cat facts",
      "sg_event_id":"zz_BjPgU_5pS-J8vlfB1sg==",
      "sg_message_id":"14c5d75ce93.dfd.64b469.filter0001.16648.5515E0B88.0"
   }
]
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="groupunsubscribe"></a>Group Unsubscribe</td>
         <td>Recipient unsubscribed from specific group, by either direct link or updating preferences. You need to enable Subscription Tracking for getting this type of event.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
{% endcodeblock %}</td>
      </tr>
      <tr>
         <td><a name="groupresubscribe"></a>Group Resubscribe</td>
         <td>Recipient resubscribes to specific group by updating preferences. You need to enable Subscription Tracking for getting this type of event.</td>
         <td>{% codeblock lang:json %}
[
   {  
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"\u003c14c5d75ce93.dfd.64b469@ismtpd-555\u003e",
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
{% endcodeblock %}</td>
      </tr>
   </tbody>
</table>

{% anchor h2 %}
Event objects
{% endanchor %}

<table class="table">
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
    <th><a href="#groupresubscribe"Group Resubscribe</a></th>
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
    <td><a href="event">event</a></td>
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
    <td><a href="attempt">attempt</a></td>
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
    <td><a href="pool">pool</a></td>
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

{% anchor h3 %}
JSON objects
{% endanchor %}

- <a name="email"></a>`email` - the email address of the reciepeint
- <a name="timestamp"></a>`timestamp` - the <a href="https://en.wikipedia.org/wiki/Unix_time">UNIX timestamp</a> of when the message was sent
- <a name="event"></a>`event` - The event type. Possible values are bounce, deferred, delivered, dropped, processed, click, open, spamreport, and unsubscribe.
- <a name="smtpid"></a>`smtp-id` - A unique ID attached to the message by the originating system.
- <a name="useragent"></a>`useragent` - The user agent responsible for the event. This is usually a web browser. For example, "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36".
- <a name="ip"></a>`IP` - the IP address used to send the email.
- <a name="sgeventid"></a>`sg_event_id` - An internal SendGrid unique ID for the event type.
- <a name="sgmessageid"></a>`sg_message_id` - An internal SendGrid unique ID for the message type.
- <a name="reason"></a>`reason` - Any sort of error response returned by the server that describes the reason this event type was triggered.
- <a name="status"></a>`status` - Status code string. Corresponds to HTTP status code - for example, a JSON response of 5.0.0 is the same as a 500 error response.
- <a name="response"></a>`response` - The full text of the HTTP response error returned from the server.
- <a name="tls"></a>`tls` - Indicates whether TLS encription was used in sending this message. For more information about TLS, see the [TLS Glossary page]({{root_url}}Glossary/tls.html).
- <a name="url"></a>`url` - The URL where the event originates, unless it's a click event, and this is the URL clicked by the reciepient.
- <a name="attempt"></a>`attempt` - The number of times the server has attempted to deliver this mail.
- <a name="category"></a>`category` - [Categories]({{root_url}}Glossary/categories.html) are custom tags that you set for the purpose of organizing your emails. If you send single categories as an array, they will be returned by the webhook as an array. If you send single categories as a string, they will be returned by the webhook as a string.

String categories:

{% codeblock lang:json %}
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
{% endcodeblock %}

Array:

{% codeblock lang:json %}
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
{% endcodeblock %}

- <a name="asmgroupid"></a>`asm_group_id` - The ID of the unsubscribe group the recipients email is included in. ASM IDs correspond to the ID that is returned when you create an unsubscribe group.
- <a name="uniqueargs"></a>`unique_args` or `custom_args` - 
{% anchor h2 %}
Unique Arguments and Custom Arguments
{% endanchor %}

Events generated by SendGrid may also include any [unique arguments]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html) or custom arguments.

{% info %}
Unique arguments and custom arguments are functionally the same: unique arguments are used when sending email via the SMTP API or v2 Mail Send while custom arguments are used when sending email via v3 Mail Send.
{% endinfo %}

{% anchor h3 %}
Unique Arguments
{% endanchor %}

To define and receive unique arguments when sending email via the [SMTP API]({{root_url}}/API_Reference/SMTP_API/index.html) or the [v2 Mail Send endpoint]({{root_url}}/API_Reference/Web_API/mail.html) simply use the `unique_args` parameter in the X-SMTPAPI header or parameter. For example, if you have an application and want to receive custom parameters such as the `userid` and the email `template`, you would submit them in the X-SMTPAPI header or parameter, as described [here]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html).

For example, if you include the following unique arguments in your x-smtpapi parameter for an email sent via the v2 Mail Send endpoint:

{% codeblock lang:json %}
{
  "unique_args": {
    "userid": "1123",
    "template": "welcome"
  }
}
{% endcodeblock %}

You will receive the same unique argument included with the data returned to the Event Webhook:

{% codeblock lang:json %}
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
{% endcodeblock %}

{% warning %}
You can create unique arguments with the same keys as reserved words, such as "event" or "email". In this case, SendGrid will default to the reserved key and NOT your unique argument. An example of this is below.
{% endwarning %}

{% anchor h4 %}
Reserved Keys in Unique Arguments
{% endanchor %}

{% codeblock lang:json %}
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
{% endcodeblock %}

{% anchor h4 %}
The resulting webhook call
{% endanchor %}

{% codeblock lang:json %}
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
{% endcodeblock %}

*Note: The event and the email are not overwritten, because "event" and "email" are reserved and SendGrid defaults to the reserved key for webhooks.*

{% anchor h3 %}
Custom Arguments
{% endanchor %}

Any custom arguments that you include with an email sent through [v3 Mail Send]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) will also be included in your Event Webhook response.

For example, if you were to include the following custom arguments in a personalization in your payload to the v3 Mail Send endpoint:

{% codeblock lang:json %}
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
{% endcodeblock %}

The following would be included with the data returned to the Event Webhook:

{% codeblock lang:json %}
[
  {
    "userid": "1123"
  }
]
{% endcodeblock %}

- <a name="marketingcampaignid"></a>`marketing_campaign_id`
- <a name="marketingcampaignname"></a>`marketing_campaign_name`

For emails sent through our Marketing Campaigns feature, we will add Marketing Campaigns specific params to the Event Webhook. Both `marketing_campaign_name` and `marketing_campaign_id` will be displayed as unique arguments in the event data.

{% anchor h3 %}
Example event from a standard (non-A/B test) campaign send:
  {% endanchor %}

{% codeblock lang:json %}
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
{% endcodeblock %}

{% anchor h3 %}
Example event from an A/B Test:
{% endanchor %}

 `marketing_campaign_version` will be displayed in the event data for emails sent as part of an A/B Test. The value for `marketing_campaign_version` will be returned as `A`, `B`, `C`, etc.

{% codeblock lang:json %}
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
{% endcodeblock %}

{% anchor h3 %}
Example event from the winning phase of an A/B Test:
{% endanchor %}

{% codeblock lang:json %}
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
{% endcodeblock %}

{% anchor h3 %}
Legacy Marketing Email Unsubscribes
{% endanchor %}

For emails sent through our Legacy Marketing Email tool, unsubscribes will look like the following example:

{% codeblock lang:json %}
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
{% endcodeblock %}

<a name="pool"></a>`pool` - For emails sent with a specified IP Pool, you can view the IP Pool used in the event post for a processed event.

{% codeblock lang:json %}
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
{% endcodeblock %}
