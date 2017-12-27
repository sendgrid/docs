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
         <td>Dropped</td>
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
         <td>Delivered</td>
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
         <td>Deferred</td>
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
         <td>Bounce</td>
         <td>Receiving server could not or would not accept message.</td>
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
         <td>Open</td>
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
         <td>Click</td>
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
         <td>Spam Report</td>
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
         <td>Unsubscribe</td>
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
         <td>Group Unsubscribe</td>
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
         <td>Group Resubscribe</td>
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
    <th>Dropped</th>
    <th>Delivered</th>
    <th>Deferred</th>
    <th>Bounce</th>
    <th>Opened</th>
    <th>Clicked</th>
    <th>Spam<br>Report</th>
    <th>Unsubscribe</th>
    <th>Group<br>Unsubscribe</th>
    <th>Group<br>Resubscribe</th>
  </tr>
  <tr>
    <td>email</td>
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
    <td>timestamp</td>
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
    <td>event</td>
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
    <td>smtp-id</td>
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
    <td>useragent</td>
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
    <td>ip</td>
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
    <td>sg_event_id</td>
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
    <td>sg_message_id</td>
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
    <td>type</td>
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
    <td>reason</td>
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
    <td>status</td>
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
    <td>response</td>
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
    <td>tls</td>
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
    <td>url</td>
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
    <td>category</td>
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
    <td>asm_group_id</td>
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
    <td>unique_args</td>
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
    <td>marketing_campaign_id</td>
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
    <td>marketing_campaign_name</td>
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
    <td>attempt</td>
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
    <td>pool</td>
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
SendGrid objects
{% endanchor %}

email
timestamp
event
smtp-id
useragent
ip
sg_event_id
sg_message_id
type
reason
status
response
tls
url
category
asm_group_id
unique_args
marketing_campaign_id
marketing_campaign_name
attempt

{% anchor h3 %}
Custom objects
{% endanchor %}