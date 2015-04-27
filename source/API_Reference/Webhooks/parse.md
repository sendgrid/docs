---
layout: page
weight: 0
title: Inbound Parse Webhook
navigation:
  show: true
---

<iframe src="//player.vimeo.com/video/95798301" width="700" height="400" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

{% info %}
Available to Silver and higher packages or to our free demo accounts.
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
-   Associate the Domain/Hostname and the URL in the [Parse API settings page](https://sendgrid.com/developer/reply). *This can also be done using the [Parse Settings Endpoint]({{root_url}}/API_Reference/Web_API/parse_settings.html).*

The following parameters will be included in the POST to your callback URL.

{% info %}
The request that will be sent to the HTTP endpoint will be encoded as multipart/form-data.
{% endinfo %}

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>headers</th>
         <td>The raw headers of the email.</td>
      </tr>
      <tr>
         <th>text</th>
         <td>Text body of email. If not set, email did not have a text body.</td>
      </tr>
      <tr>
         <th>html</th>
         <td>HTML body of email. If not set, email did not have an HTML body.</td>
      </tr>
      <tr>
         <th>from</th>
         <td>Email sender, as taken from the message headers.</td>
      </tr>
      <tr>
         <th>to</th>
         <td>Email recipient field, as taken from the message headers.</td>
      </tr>
      <tr>
         <th>cc</th>
         <td>Email cc field, as taken from the message headers.</td>
      </tr>
      <tr>
         <th>subject</th>
         <td>Email Subject.</td>
      </tr>
      <tr>
         <th>dkim</th>
         <td>A JSON string containing the verification results of any dkim and domain keys signatures in the message.</td>
      </tr>
      <tr>
         <th>SPF</th>
         <td>The results of the Sender Policy Framework verification of the message sender and receiving IP address.</td>
      </tr>
      <tr>
         <th>envelope</th>
         <td>A JSON string containing the SMTP envelope. This will have two variables: *to*, which is a single-element array containing the address that we recieved the email to, and *from*, which is the return path for the message.</td>
      </tr>
      <tr>
         <th>charsets</th>
         <td>A JSON string containing the character sets of the fields extracted from the message.</td>
      </tr>
      <tr>
         <th>spam_score</th>
         <td>Spam Assassin's rating for whether or not this is spam.</td>
      </tr>
      <tr>
         <th>spam_report</th>
         <td>Spam Assassin's spam report.</td>
      </tr>
      <tr>
         <th>attachments</th>
         <td>Number of attachments included in email.</td>
      </tr>
      <tr>
         <th>attachment-info</th>
         <td>A JSON string containing the attachmentX (see below) keys with another JSON string as the value. This string will contain the keys *filename*, which is the name of the file (if it was provided) and *type*, which is the [media type](http://en.wikipedia.org/wiki/Internet_media_type) of the file.</td>
      </tr>
      <tr>
         <th>attachmentX</th>
         <td>These are file upload names, where N is the total number of attachments. For example, if the number of attachments is 0, there will be no attachment files. If the number of attachments is 3, parameters attachment1, attachment2, and attachment3 will have file uploads. Attachments provided with this parameter, are provided in the form of file uploads. TNEF files (winmail.dat) will be extracted and have any attachments posted.</td>
      </tr>
   </tbody>
</table>

{% info %}
The total message size limit, including the message itself and any number of attachments, is 20MB. Be aware that other mail handlers will have their own limitations, and some ISPs and companies may either dramatically limit the size and/or type of attachments, or even block them altogether.
{% endinfo %}

{% anchor h2 %}
Character Sets and Header Decoding
{% endanchor %}

If you will be receiving email which is not in ASCII only format, you will want to read this section.

Messages and their headers can have character set data associated with them. In order to simplify the parsing of messages for the end user, SendGrid will decode the to, from, cc, and subject headers if needed. All headers will be converted to UTF-8 for uniformity, since technically a header can be in many different character sets.

The charsets variable will contain a JSON encoded hash of the header / field name and its respective character set. For instance, it may look like:

{% codeblock lang:ruby %}
[charsets] => {"to":"UTF-8","cc":"UTF-8","subject":"UTF-8","from":"UTF-8","text":"iso-8859-1"}
{% endcodeblock %}

This shows that all headers should be treated as UTF-8, and the text body is latin1.
