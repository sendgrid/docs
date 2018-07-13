---
layout: page
weight: 100
title: Integrate with SendGrid
seo:
  description: Learn how to integrate with SendGrid using one of two options, as an SMTP host by SMTP relay or through our semi-RESTful Web API.
navigation:
  show: true
---

{% anchor h2 %}
Send Email From Your Application {% endanchor %}

<p>SendGrid provides two ways to send email: through our <a href="{{root_url}}/API_Reference/SMTP_API/index.html">SMTP relay</a> or 
through our <a href="{{root_url}}/API_Reference/Web_API_v3/index.html">Web API</a>.</p>

{% info %}
<p><strong>SendGrid provides <a href="{{root_url}}/Integrate/libraries.html">client libraries</a> in many languages. This is the preferred way to integrate with SendGrid.</strong></p>

<p>If you choose to use SendGrid without a client library, the Web API is recommended in most cases as it is faster,  provides some benefit with encoding, and tends to be easier to use. SMTP provides many features by default, but is harder to setup.</p>
{% endinfo %}

{% anchor h3 %}
Web API
{% endanchor %}

<p>The <a href="{{root_url}}/API_Reference/Web_API_v3/index.html">Web API</a> has some advantages over SMTP:</p>

<ul>
  <li>If your ISP blocks all outbound mail ports and your 
  only option is HTTP.</li>

  <li>If there is high latency between your site and ours, the Web API
  might be quicker since it does not require as many messages between the client
  and server.</li>

  <li>If you do not control the application environment and cannot install and configure an SMTP library.</li>

  <li>If you build a library to send email, developing 
  against a web API provides quicker development.</li>
</ul>

{% anchor h3 %}
SMTP Relay
{% endanchor %}

<p>If you are integrating SendGrid with an existing application, setting up the application to use our SMTP relay is easiest, as it only requires modifying SMTP configuration.

<ul>
  <li>Change your SMTP username and password to your SendGrid credentials</li>
  <li>Set the server host name to <strong>smtp.sendgrid.net</strong></li> 
  <li>Use ports 25 or 587 for plain/TLS connections and port 465 for SSL
  connections</li>
</ul>

{% info %}
For most users we suggest <strong>port 587</strong> to avoid rate limits set by some 
hosting companies.
{% endinfo %}

{% info %}
With SMTP, 100 messages can be sent with each connection.
{% endinfo %}

<p>SendGrid extends SMTP with the X-SMTPAPI header, giving you more
control over how SendGrid sends your email. See the <a href="{{root_url}}/API_Reference/SMTP_API/index.html">SMTP API</a> documentation for
more information.</p> 

{% info %}
Customers should utilize SMTPAPI if this is an option. As with SMTP, 100 messages can be sent with each connection, but there can be 1000 recipients for each message.
{% endinfo %}

{% warning %}
We strongly discourage users from sending mail directly through a single specific IP address when integrating with SendGrid. Always point your traffic to <strong>smtp.sendgrid.net</strong>.

The IP addresses at smtp.sendgrid.net are changed often and without notice. If you point your traffic to one specific IP, you will experience interruptions in your service when these IPs are changed.
{% endwarning %}

{% anchor h2 %}
Receive Email From Your Application 
{% endanchor %}
<p>Though SendGrid does not store messages or provide mailboxes,
the <a href="{{root_url}}/Classroom/Basics/Inbound_Parse_Webhook/setting_up_the_inbound_parse_webhook.html">Inbound Parse
  Webhook</a> parses the email bodies and attachments from incoming emails
and posts them to a URL that you choose.</p> 

<p>Examples include posting blog articles via email or processing email
replies.</p>

{% anchor h2 %} 
Power Users and High Volume Senders 
{% endanchor %}

<p>A local mail server, such as Postfix, is the most robust way to send
email through SendGrid when configured to queue all email from your application and then 
relay the messages through SendGrid as a smart host. This has the least 
latency from your application's perspective with the added benefit of 
handing your email off to a fault tolerant server. If internet
connectivity between your servers and ours drops, a local mail 
server gracefully handles queuing and resending the email, as opposed
to building that intelligence into your sending application.</p>

<p>Local mail servers also have advantages at high volume as they can use some of the 
more complex parts of the SMTP protocol, such as connection reuse and 
pipelining. With these techniques a mail server sends significantly more
traffic in a given time than if you have individual scripts connecting for each message.</p>
