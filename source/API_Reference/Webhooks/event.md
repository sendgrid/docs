---
layout: page
weight: 10
title: Event Webhook
navigation:
  show: true
---

{% info %}
Available to all accounts except [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html).
{% endinfo %}

SendGrid's Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email. Common uses of this data are to remove unsubscribes, react to spam reports, [determine unengaged recipients]({{site.blog_url}}/infer-engagement-with-the-event-api/), identify bounced email addresses, or create advanced analytics of your email program. With Unique Arguments and Category parameters, you can insert dynamic data that will help build a sharp, clear image of your mailings.

{% info %}
If you'd like to see how one of our customers uses the Event Webhook, check out [Leveraging SendGrid's Event Webhook]({{site.blog_url}}/leveraging-sendgrids-event-api/).
{% endinfo %}

{% info %}
There are a number of pre-made integrations for the SendGrid Event Webhook that make processing events easy. You can find them in the [Library Index]({{root_url}}/Integrate/libraries.html#-Webhook-Libraries).
{% endinfo %}

{% anchor h2 %}
Setup
{% endanchor %}

To setup the Event Webhook via our web interface, login and go to the [mail settings page]({{site.app_url}}/settings/mail_settings) and click on the Event Notification setting, then click on the "edit" link. Check the boxes next to the type of events that you want posted to your web server, then enter in the URL you have setup to receive POSTs from our servers when an event occurs.

The Event Webhook may also be setup by using our [Filter Settings Endpoint]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Event-Notification).

{% info %}
We support basic HTTP authentication in our Event Webhook. Those who wish to implement can provide credentials in the post event url field on the app settings page. Below is an example of the post url with authentication included.
{% endinfo %}

{% codeblock lang:html %}
http(s)://username:password@domain/foo.php
{% endcodeblock %}


{% warning %}
The Event Webhook will not follow redirects. Please make sure to use the correct URL, or posting will fail.
{% endwarning %}

{% warning %}
If you wish to receive encrypted posts, we require that your callback URL support TLS 1.2.
{% endwarning %}

{% anchor h2 %}
Requests
{% endanchor %}

You will receive an **HTTP POST** containing a JSON array of multiple events in one request after a very short delay. These POSTs will be sent to the URL you have defined in the Event Notification app options.

{% info %}
Events currently post every 30 second or when the batch size reaches 768K (seven hundred sixty-eight kilobytes), whichever occurs first. This is per server, so the webhook URL will normally receive tens, and may receive hundreds, of posts per second.
{% endinfo %}

{% anchor h3 %}
Event POST Example
{% endanchor %}

{% codeblock lang:json %}
[
  {
    "email":"john.doe@sendgrid.com",
    "timestamp": 1337197600,
    "smtp-id":"<4FB4041F.6080505@sendgrid.com>",
    "sg_event_id":"sendgrid_internal_event_id",
    "sg_message_id":"sendgrid_internal_message_id",
    "event": "processed"
  },
  {
    "email":"john.doe@sendgrid.com",
    "timestamp": 1337966815,
    "ip":"X.XX.XXX.XX",
    "sg_event_id":"sendgrid_internal_event_id",
    "url":"https://sendgrid.com",
    "sg_message_id":"sendgrid_internal_message_id",
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
    "event":"click"
  },
  {
    "ip": "X.XX.XXX.XX",
    "sg_user_id": 123,
    "sg_event_id":"sendgrid_internal_event_id",
    "sg_message_id":"sendgrid_internal_message_id",
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
    "event": "group_unsubscribe",
    "email": "john.doe@sendgrid.com",
    "timestamp": 1337969592,
    "asm_group_id": 42
  }
]
{% endcodeblock %}

You can test your endpoint by clicking the "Test Your Integration" button on the setup screen. SendGrid will send a simulated POST of events to your callback url. At this time, our testing tool does not support HTTP basic authentication, so you must disable auth on your app while debugging.

SendGrid expects a 2xx HTTP response to the POST, otherwise the event notification will be retried. If your URL returns a non-2xx HTTP code it will be deferred and retried for 24 hours. The maximum number of deferred POSTs in the retry queue is 100,000. If the queue is full, the oldest request in the queue will be removed to make room for the newest deferred POST. Events that cannot be submitted within the maximum retry period or events removed from the defer queue will be lost.

{% warning %}
If your email traffic generates a lot of events, the incoming data can easily overload a web server if not configured properly. You can load test your endpoints with [loader.io](http://loader.io) for free.
{% endwarning %}

{% anchor h3 %}
Duplicate Events
{% endanchor %}

**It is possible to see duplicate events in the data posted by the Event Webhook.**

We recommend that you use some form of deduplication when processing or storing your Event Webhook data using the `sg_event_id` as a differentiator, since this ID is unique for every event where `sg_event_id` is present.

{% anchor h2 %}
Event Types
{% endanchor %}

The following lists the events generated by SendGrid:

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Event</th>
         <th>Criteria</th>
      </tr>
      <tr>
         <td>Processed</td>
         <td>Message has been received and is ready to be delivered.</td>
      </tr>
      <tr>
         <td>Dropped</td>
         <td>You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota</td>
      </tr>
      <tr>
         <td>Delivered</td>
         <td>Message has been successfully delivered to the receiving server.</td>
      </tr>
      <tr>
         <td>Deferred</td>
         <td>Recipient's email server temporarily rejected message.</td>
      </tr>
      <tr>
         <td>Bounce</td>
         <td>Receiving server could not or would not accept message.</td>
      </tr>
      <tr>
         <td>Open</td>
         <td>Recipient has opened the HTML message. You need to enable Open Tracking for getting this type of event.</td>
      </tr>
      <tr>
         <td>Click</td>
         <td>Recipient clicked on a link within the message. You need to enable Click Tracking for getting this type of event.</td>
      </tr>
      <tr>
         <td>Spam Report</td>
         <td>Recipient marked message as spam.</td>
      </tr>
      <tr>
         <td>Unsubscribe</td>
         <td>Recipient clicked on the 'Opt Out of All Emails' link (available after clicking the message's subscription management link). You need to enable Subscription Tracking for getting this type of event.</td>
      </tr>
      <tr>
         <td>Group Unsubscribe</td>
         <td>Recipient unsubscribed from specific group, by either direct link or updating preferences. You need to enable Subscription Tracking for getting this type of event.</td>
      </tr>
      <tr>
         <td>Group Resubscribe</td>
         <td>Recipient resubscribes to specific group by updating preferences. You need to enable Subscription Tracking for getting this type of event.</td>
      </tr>
   </tbody>
</table>

The following image shows where events can be generated as email is being processed:

![]({{root_url}}/images/event_1.jpg "Event Flow")

{% anchor h2 %}
Default Parameters for Delivery Events
{% endanchor %}

The following parameters are sent with delivery events: bounce, deferred, delivered, dropped, and processed events. Some events may include additional parameters.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>event</td>
         <td>One of: bounce, deferred, delivered, dropped, processed</td>
      </tr>
      <tr>
         <td>email</td>
         <td>Email address of the intended recipient</td>
      </tr>
      <tr>
         <td>timestamp</td>
         <td><a href="https://en.wikipedia.org/wiki/Unix_time">UNIX timestamp</a></td>
      </tr>
      <tr>
         <td>smtp-id</td>
         <td>An id attached to the message by the originating system</td>
      </tr>
      <tr>
         <td>ip</td>
         <td>Which IP address was used to send the email.</td>
      </tr>
      <tr>
         <td>tls</td>
         <td>Whether or not TLS was used when sending the email.</td>
      </tr>
      <tr>
         <td>cert_err</td>
         <td>Whether there was a certificate error on the receiving side.</td>
      </tr>
   </tbody>
</table>

{% anchor h2 %}
Default Parameters for Engagement Events
{% endanchor %}

The following parameters are sent with engagement events: click, open, spamreport, and unsubscribe events. Some events may include additional parameters.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>event</td>
         <td>One of: click, open, spamreport, unsubscribe</td>
      </tr>
      <tr>
         <td>email</td>
         <td>Email address of the intended recipient</td>
      </tr>
      <tr>
         <td>timestamp</td>
         <td><a href="https://en.wikipedia.org/wiki/Unix_time">UNIX timestamp</a></td>
      </tr>
      <tr>
         <td>useragent</td>
         <td>The user agent responsible for the event, e.g. "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36"</td>
      </tr>
      <tr>
         <td>ip</td>
         <td>Which IP address cased the event.</td>
      </tr>
      <tr>
         <td>tls</td>
         <td>Whether or not TLS was used when sending the email.</td>
      </tr>
      <tr>
         <td>cert_err</td>
         <td>Whether there was a certificate error on the receiving side.</td>
      </tr>
   </tbody>
</table>

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

{% anchor h2 %}
Unsubscribe Groups
{% endanchor %}

If [Unsubscribe Groups]({{root_url}}/User_Guide/Suppressions/advanced_suppression_manager.html) are used over the SMTP API they will be returned by the Event Webhook as such:

{% codeblock lang:json %}
  {
    "status":"5.0.0",
    "sg_event_id":"sendgrid_internal_event_id",
    "sg_message_id":"sendgrid_internal_message_id",
    "event":"bounce",
    "email":"email@example.com",
    "timestamp":1249948800,
    "smtp-id":"<original-smtp-id@domain.com>",
    "unique_arg_key":"unique_arg_value",
    "category":["category1", "category2"],
    "reason":"500 No Such User",
    "type":"bounce",
    "asm_group_id": 1
  }
{% endcodeblock %}

{% anchor h2 %}
Categories
{% endanchor %}

{% info %}
For categories, we return what was sent. If you send single categories as an array, they will be returned by the webhook as an array. If you send single categories as a string, they will be returned by the webhook as a string.
{% endinfo %}

If [categories]({{root_url}}/User_Guide/Statistics/categories.html) are used over the SMTP API they will be returned by the Event Webhook as such:

{% anchor h3 %}
Category as a String
{% endanchor %}

Single categories sent as a string will be returned as a string.

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

{% anchor h3 %}
Categories Array
{% endanchor %}

Categories sent to SendGrid as an array will be returned as an array.

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

{% anchor h2 %}
Example
{% endanchor %}
The following example uses PHP to store webhook requests in `/tmp/log.txt`:

{% codeblock lang:php %}
<?php

$myFile = "tmp/log.txt";
$fh = fopen($myFile, 'a+') or die("can't open file");

if ($fh){
    $headers = apache_request_headers();
    $postdata = file_get_contents("php://input");

    foreach ($headers as $header => $value) {
    fwrite($fh, print_r("$header: $value \n", true));
}

fwrite($fh, print_r("$postdata \n", true));
fclose($fh);
}

echo "ok";
?>
{% endcodeblock %}

{% anchor h2 %}
IP Pools
{% endanchor %}

For emails sent with a specified IP Pool, you can view the IP Pool used in the event post for a processed event.

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

{% anchor h2 %}
Parameter Details
{% endanchor %}

The following shows each type of event that can be posted along with all the possible parameters that go along with the event.

{% info %}
You can use the SMTP API to specify additional custom parameters including categories and unique args. Each unique arg is posted as a separate post parameter, similar to the category listed below, but with a custom name specified by you.
{% endinfo %}

{% info %}
The examples provided below are a JSON array for a particular event. These will always be within an array on the actual POST. The fields are not ordered.
{% endinfo %}

{% anchor h3 %}
Bounce
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>status</th>
         <th>reason</th>
         <th>type</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>bounce</td>
         <td>Message recipient</td>
         <td>Status code string, e.g. 5.5.0</td>
         <td>Bounce reason from MTA</td>
         <td><a href="{{root_url}}/Glossary/bounces.html">Bounce</a></li>/<a href="{{root_url}}/Glossary/blocks.html">Blocked</a>/<a href="{{root_url}}/Glossary/expired.html">Expired</a></td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "status":"5.0.0",
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "event":"bounce",
  "email":"email@example.com",
  "timestamp":1249948800,
  "smtp-id":"<original-smtp-id@domain.com>",
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "newsletter": {
    "newsletter_user_list_id": "10557865",
    "newsletter_id": "1943530",
    "newsletter_send_id": "2308608"
  },
  "asm_group_id": 1,
  "reason":"500 No Such User",
  "type":"bounce",
  "ip" : "127.0.0.1",
  "tls" : "1",
  "cert_err" : "0"
}
{% endcodeblock %}

{% anchor h3 %}
Click
{% endanchor %}

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

{% info %}
`url_offset` gives you more information about the link that was clicked. Links are indexed beginning at 0. `index` indicates which link was clicked based on that index. The type of link can be either text, HTML, or a header. `type` indicates the type of the link that was clicked.
{% endinfo %}

{% codeblock lang:json %}
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
{% endcodeblock %}

{% anchor h3 %}
Deferred
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>response</th>
         <th>attempt</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>deferred</td>
         <td>Message recipient</td>
         <td>Full response from MTA</td>
         <td>Delivery attempt #</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "response":"400 Try again",
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "event":"deferred",
  "email":"email@example.com",
  "timestamp":1249948800,
  "smtp-id":"<original-smtp-id@domain.com>",
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "attempt":"10",
  "newsletter": {
    "newsletter_user_list_id": "10557865",
    "newsletter_id": "1943530",
    "newsletter_send_id": "2308608"
  },
  "asm_group_id": 1,
  "ip" : "127.0.0.1",
  "tls" : "0",
  "cert_err" : "0"
}
{% endcodeblock %}

{% anchor h3 %}
Delivered
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>response</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>delivered</td>
         <td>Message recipient</td>
         <td>Full response from MTA</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "response":"250 OK",
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "event":"delivered",
  "email":"email@example.com",
  "timestamp":1249948800,
  "smtp-id":"<original-smtp-id@domain.com>",
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "newsletter": {
    "newsletter_user_list_id": "10557865",
    "newsletter_id": "1943530",
    "newsletter_send_id": "2308608"
  },
  "asm_group_id": 1,
  "ip" : "127.0.0.1",
  "tls" : "1",
  "cert_err" : "1"
}
{% endcodeblock %}

{% anchor h3 %}
Dropped
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>reason</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>dropped</td>
         <td>Message recipient</td>
         <td>Drop reason</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "email":"email@example.com",
  "timestamp":1249948800,
  "smtp-id":"<original-smtp-id@domain.com>",
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "reason":"Bounced Address",
  "event":"dropped"
}
{% endcodeblock %}

{% anchor h3 %}
Open
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>open</td>
         <td>Message recipient</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "email":"email@example.com",
  "timestamp":1249948800,
  "ip":"255.255.255.255",
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "useragent":"Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)",
  "event":"open",
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "newsletter": {
    "newsletter_user_list_id": "10557865",
    "newsletter_id": "1943530",
    "newsletter_send_id": "2308608"
  },
  "asm_group_id": 1
}
{% endcodeblock %}

{% anchor h3 %}
Processed
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>processed</td>
         <td>Message recipient</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "email":"email@example.com",
  "timestamp":1249948800,
  "smtp-id":"<original-smtp-id@domain.com>",
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "event":"processed",
  "newsletter": {
    "newsletter_user_list_id": "10557865",
    "newsletter_id": "1943530",
    "newsletter_send_id": "2308608"
  },
  "asm_group_id": 1,
  "send_at":1249949000
}
{% endcodeblock %}

{% anchor h3 %}
Spam Report
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>spamreport</td>
         <td>Message recipient</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "sg_event_id":"sendgrid_internal_event_id",
  "sg_message_id":"sendgrid_internal_message_id",
  "email":"email@example.com",
  "timestamp":1249948800,
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "event":"spamreport",
  "asm_group_id": 1
}
{% endcodeblock %}

{% anchor h3 %}
Unsubscribe
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>unsubscribe</td>
         <td>Message recipient</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "sg_message_id":"sendgrid_internal_message_id",
  "email":"email@example.com",
  "timestamp":1249948800,
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "event":"unsubscribe",
  "asm_group_id": 1
}
{% endcodeblock %}

{% anchor h3 %}
Group Unsubscribe
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>asm_group_id</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>group_unsubscribe</td>
         <td>Message recipient</td>
         <td>The id of the unsubscribed asm group</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "sg_message_id":"sendgrid_internal_message_id",
  "email":"email@example.com",
  "timestamp":1249948800,
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "event":"group_unsubscribe",
  "asm_group_id":1,
  "useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36",
  "ip":"255.255.255.255"
}
{% endcodeblock %}

{% anchor h3 %}
Group Resubscribe
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>event</th>
         <th>email</th>
         <th>asm_group_id</th>
         <th>category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>group_resubscribe</td>
         <td>Message recipient</td>
         <td>The id of the resubscribed asm group</td>
         <td>The category you assigned</td>
      </tr>
   </tbody>
</table>

{% codeblock lang:json %}
{
  "sg_message_id":"sendgrid_internal_message_id",
  "email":"email@example.com",
  "timestamp":1249948800,
  "unique_arg_key":"unique_arg_value",
  "category":["category1", "category2"],
  "event":"group_resubscribe",
  "asm_group_id":1,
  "useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36",
  "ip":"255.255.255.255"
}
{% endcodeblock %}

{% anchor h2 %}
Marketing Campaigns
{% endanchor %}

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

{% anchor h2 %}
Troubleshooting
{% endanchor %}

Ensure that your web server is returning a 2xx response to our servers. Any other response type will result in our server retrying a POST until we receive a 2xx response or the maximum time has expired. All events are retried at increasing intervals for up to 24 hours after the event occurs. Make sure you are not blocking our IPs that are trying to POST to your server. Our IPs change often since we constantly add more machines.

You can use the "Test Your Integration" button on the Event Notifications settings page to send simulated events to your callback URL. You can also send a POST from a shell using cURL. This will give you the full response your server is returning including the HTTP headers.

{% codeblock lang:bash %}
curl -X POST -H "Content-Type: application/json" -d '[{"email":"john.doe@sendgrid.com","timestamp":1337197600,"smtp-id":"<4FB4041F.6080505@sendgrid.com>","event":"processed"},{"email":"john.doe@sendgrid.com","timestamp":1337966815,"category":"newuser","event":"click","url":"https://sendgrid.com"},{"email":"john.doe@sendgrid.com","timestamp":1337969592,"smtp-id":"<20120525181309.C1A9B40405B3@Example-Mac.local>","event":"processed"}]'
{% endcodeblock %}


{% anchor h2 %}
Version Differences
{% endanchor %}
The primary difference between v2 (no longer available) and v3 of the Event Webhook is that Version 3 delivers events as JSON arrays, whereas the previous version delivered batched JSON as JSON documents separated by line breaks. Furthermore, v3 provides more data with certain events. The [previous version of the webhook's documentation]({{root_url}}/API_Reference/Webhooks/event_deprecated.html) is still provided so you can compare them.
