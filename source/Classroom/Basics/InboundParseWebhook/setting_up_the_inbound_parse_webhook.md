---
st:
 published_at: 2016-06-16
 type: [classroom]

seo:
 title: 
 description: Process your incoming mail with SendGrid's inbound parse webhook
 keywords: SendGrid, inbound parse, email processing, webhook
title: Getting Started with SendGrid Inbound Parse Webhook
weight: 90
layout: page
navigation:
 show: true
---

##Introduction
As you’re probably aware, SendGrid is great at sending your email, but SendGrid can also help you process email using the Inbound Parse Webhook. The Inbound Parse Webhook processes headers, attachments, and content then POSTs all payloads for a domain or subdomain to your application as JSON or XML. 

  {% info %}
  XML is only available in v2.
  {% endinfo %}

What your application does with that data is up to you. For some ideas of what you can do with Inbound Parse, click [here] (#).

##Setup
To begin processing email using SendGrid’s Inbound Parse Webhook, setup MX Records and point to a Hostname where you would like to receive email and and a URL where you would like to POST payloads.

###Setting up MX Records
1. Navigate to the MX Records page on your hosting provider’s website. If you’re unsure who your hosting or DNS provider is, please contact your website administrator.
2. Create a new MX record for a hostname (domain or subdomain) so that addresses at this hostname can send and receive email (e.g. parse.yourdomain.com).

      {% info %}
      This hostname should be used exclusively to parse your incoming email.
      {% endinfo %}

3. Assign the MX record a priority of 10, and point it to the address: `mx.sendgrid.net.`

      {% info %}
      If there is no field for priority, type 10 before the address. e.g. `10 mx.sendgrid.net.`
      {% endinfo %}

###Pointing to a Hostname and URL
1. From your SendGrid Dashboard click **Settings**, and then click *Inbound Parse*.
	 You are now on the Inbound Parse page.
2. Click **Add Host & URL**
   SendGrid will prompt you to enter your hostname and a URL in your application where the Parse Webhook payloads will be POSTed.

      {% info %}
      The URL must be accessible from the public web.
      {% endinfo %}

3. Type your hostname (e.g. parse.yourdomain.com) and public application URL.
4. (Optional) Check **Spam Check** if you want Inbound Parse to check incoming email for spam and reject obvious spam.

5. (Optional) Check **Send Raw** if you would prefer to receive the full MIME message.

6. Click **Save**.
   You have just finished configuring Inbound Parse!

##Testing
To test if everything is working, send an email from your email account to *anything*@yourhostname.com.

{% info %}
The local-part (i.e. anything before @) can be any word or combination because all email for this subdomain will be processed.
{% endinfo %}
  
  You can check the [Activity Feed](https://app.sendgrid.com/email_activity?) to see if SendGrid parsed incoming email. For more help, see [Debugging a Webhook](https://sendgrid.com/blog/whats-webhook/).
  
{% warning %}
Remember to direct your incoming email to your hostname! If you do not, your incoming email will not be parsed. 
{% endwarning %}

##Code Examples
- [Parse API]()
- [Parse Settings]()
- [Parse Webhook Settings]()
- [Parse Settings Subuser]()
- [Reseller Customer Subuser API]()

##Statistics
Inbound Parse keeps [statistics]() of how many emails SendGrid parses over time. You can specify what diplays on the graph by adjusting the statistics filters.

[Parse Webhook Stats]()

##Character Sets and Header Decoding

{% warning %}
If you receive email that is in any format other than ASCII, read this section 
{% endwarning %}

Messages and their headers can have character set data associated with them. To simplify parsing messages for the end user, SendGrid will decode the to, from, cc, and subject headers if needed. All headers will be converted to UTF-8 for uniformity since a header can technically be in many different character sets.

The “charsets” variable will contain a JSON-encoded hash of the header / field name and its respective character set. For instance, it may look like:

<code>[charsets] => {"to":"UTF-8","cc":"UTF-8","subject":"UTF-8","from":"UTF-8","text":"iso-8859-1"}</code>

This shows that all headers should be treated as UTF-8, and the text body is latin1. 
