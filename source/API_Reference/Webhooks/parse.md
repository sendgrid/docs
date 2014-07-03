---
layout: page
weight: 0
title: Inbound Parse Webhook
navigation:
  show: true
---

{% info %}
Available to Bronze and higher packages or to our free demo accounts. 
{% endinfo %}

{% info %}
There are a number of pre-made integrations for the SendGrid Parse Webhook, to make processing events easy, find them in the [Library Index]({{root_url}}/Integrate/libraries.html#-Webhook-Libraries). 
{% endinfo %}

SendGrid can parse the attachments and contents of incoming emails. Application examples include receiving uploads and posting blog articles via email.

The Parse API will POST the parsed email to a URL that you specify. If a POST is unsuccessful, SendGrid automatically queues and retries any POSTs that respond with a 4XX or 5XX status. This prevents data loss for customers who have misconfigured their website or POST URL.

{% info %}
If you don't want email messages to be retried in case of an error in delivery, please respond with a 200 status to the POST request. 
{% endinfo %}

In order to avoid returning an error your link is required to return a 200 HTTP code when the email is received. This lets our system know that your link has received the email response. It is then removed from our send queue. If we do **not** get a valid 200 HTTP response, our servers will believe they have failed to deliver your message and will continue trying to send it. Messages that cannot be delivered after 3 days will be dropped.

{% anchor h2 %}
Setup 
{% endanchor %}

The following steps are required to begin parsing email:

-   Point the MX Record of the Domain/Hostname or Subdomain to **mx.sendgrid.net**
-   Associate the Domain/Hostname and the URL in the [Parse API settings page](http://sendgrid.com/developer/reply). *This can also be done using the [Parse Settings Endpoint]({{root_url}}/API_Reference/Web_API/parse_settings.html).*

The following parameters will be included in the POST to your callback URL.

{% info %}
The request that will be sent to the HTTP endpoint will be encoded as multipart/form-data. 
{% endinfo %}



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
