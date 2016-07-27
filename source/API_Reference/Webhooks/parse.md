---
layout: page
weight: 0
title: Inbound Parse Webhook
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/95798301" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% info %}
Available to all accounts except [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html).
{% endinfo %}

{% info %}
There are a number of pre-made integrations for the SendGrid Parse Webhook, to make processing events easy, find them in the [Library Index]({{root_url}}/Integrate/libraries.html#-Webhook-Libraries).
{% endinfo %}

SendGrid can parse the attachments and contents of incoming emails. Application examples include receiving uploads and posting blog articles via email.

The Parse API will POST the parsed email to a URL that you specify. If a POST is unsuccessful, SendGrid automatically queues and retries any POSTs that respond with a 4XX or 5XX status. This prevents data loss for customers who have misconfigured their website or POST URL.

{% info %}
If you don't want email messages to be retried in case of an error in delivery, please respond with a 2xx status to the POST request.
{% endinfo %}

In order to avoid returning an error your link is required to return a 2xx HTTP code when the email is received. This lets our system know that your link has received the email response. It is then removed from our send queue. If we do **not** get a valid 2xx HTTP response, our servers will believe they have failed to deliver your message and will continue trying to send it. Messages that cannot be delivered after 3 days will be dropped.

{% anchor h2 %}
Setup
{% endanchor %}

The following steps are required to begin parsing email:

-   Point the MX Record of the Domain/Hostname or Subdomain to **mx.sendgrid.net**
-   Associate the Domain/Hostname and the URL in the [Parse API settings page]({{site.site_url}}/developer/reply). *This can also be done using the [Parse Settings Endpoint]({{root_url}}/API_Reference/Web_API/parse_settings.html).*

The following parameters will be included in the POST to your callback URL.

{% info %}
The request that will be sent to the HTTP endpoint will be encoded as multipart/form-data.
{% endinfo %}

{% info %}
This table only includes a breakdown of terms and is not intended to be a comprehensive list of headers.
{% endinfo %}

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>dkim</th>
         <td>A JSON string containing the verification results of any dkim and domain keys signatures in the message.</td>
      </tr>
      <tr>
         <th>Email</th>
         <td>A JSON string containing the email headers, date, body, and attachments</td>
      </tr>
      <tr>
         <th>To</th>
         <td>Email recipient field as taken from the message headers.</td>
      </tr>
      <tr>
         <th>cc</th>
         <td>Email cc field, as taken from the message headers.</td>
      </tr>
      <tr>
         <th>From</th>
         <td>Email sender, as taken from the message headers.</td>
      </tr>
      <tr>
         <th>Sender IP</th>
         <td>Email sender IP address.</td>
      </tr>
      <tr>
         <th>Spam Report</th>
         <td>Spam Assassin’s spam report.</td>
      </tr>
      <tr>
         <th>Envelope</th>
         <td>A JSON string containing the SMTP envelope. This will have two variables: *to*, which is an single-element array containing the addresses that recieved the email, and *from*, which is the return path for the message.</td>
      </tr>
      <tr>
         <th>Subject</th>
         <td>Email subject.</td>
      </tr>
      <tr>
         <th>Spam_Score</th>
         <td>Spam Assassin’s rating for whether or not this is spam.</td>
      </tr>
      <tr>
         <th>Charsets</th>
         <td>A JSON string containing the character sets of the fields extracted from the message.</td>
      </tr>
      <tr>
         <th>SPF</th>
         <td>The results of the Sender Policy Framework verification of the message sender and receiving IP address.</td>
      </tr>
    </tbody>
</table>

{% info %}
The total message size limit, including the message itself and any number of attachments, is 20MB. Be aware that other mail handlers will have their own limitations, and some ISPs and companies may either dramatically limit the size and/or type of attachments, or even block them altogether.
{% endinfo %}

