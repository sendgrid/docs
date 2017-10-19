---
seo:
 title: Setting Up The Inbound Parse Webhook
 description: How to set up the Inbound Parse Webhook to process and parse incoming email
 keywords: Inbound Parse, Inbound Parse Webhook, Email Processing
title: Setting Up The Inbound Parse Webhook
weight: 90
layout: page
navigation:
 show: true
---

As you’re probably aware, SendGrid is great at sending your email, but SendGrid can also help you process email using the Inbound Parse Webhook. The Inbound Parse Webhook processes all incoming email for a domain or subdomain, parses the contents and attachments then POSTs multipart/form-data to a URL that you choose. 

{% info %}
XML is only available in v2.
{% endinfo %}

What your application does with this parsed data is up to you. For some ideas of what the Inbound Parse Webhook can do, check out this [blog post](https://sendgrid.com/blog/parse-api-oh-what-you-can-do/).

{% info %}
Check out some pre-made integrations for the SendGrid Parse Webhook in the [Library Index]({{root_url}}/Integrate/libraries.html#-Webhook-Libraries).
{% endinfo %}

{% anchor h2 %}
Setup
{% endanchor %}

To begin processing email using SendGrid's Inbound Parse Webhook, you will have to setup MX Records, choose the hostname (or receiving domain) that will be receiving the emails you want to parse, and define the URL where you want to POST your parsed emails.

{% anchor h3 %}
Setting up an MX Record
{% endanchor %}

  **(1)** Navigate to the MX Records page on your hosting provider’s website. If you’re unsure who your hosting or DNS provider is, please contact your website administrator.

  **(2)** Create a new MX record for the subdomain (e.g. parse.yourdomain.com) you want to process incoming email.

{% info %}
This hostname should be used exclusively to parse your incoming email.
{% endinfo %}

{% warning %}
Do not change the MX record for your domain. If you do, you will no longer receive email.
{% endwarning %}

  **(3)** Assign the MX record a priority of 10, and point it to the address: `mx.sendgrid.net.`

  It should look something like this ![]({{root_url}}/images/Inbound_Parse_01_MX_Record.png)

{% info %}
If there is no field for priority, type 10 before the address. e.g. `10 mx.sendgrid.net.`
{% endinfo %}

{% anchor h3 %}
Pointing to a Hostname and URL
{% endanchor %}

  **(1)** From your SendGrid Dashboard click **Settings**, and then click **Inbound Parse**.

  You are now on the Inbound Parse page.

  **(2)** Click **Add Host & URL**.

  Here you will specify the subdomain and root domain of the receiving domain (or hostname). All emails sent to this receiving domain will be parsed.

  If you use the same subdomain as your Whitelabeled Domain, you must have Automatic Security disabled on the Domain Whitelabel. Otherwise, those messages will bounce due to an infinite CNAME>MX loop.

{% info %}
The URL must be accessible from the public web.
{% endinfo %}

  **(3)** Enter the subdomain (e.g. "parse") and select the whitelabeled root domain for your receiving domain. Enter the public URL where you would like the parsed data to be POSTed.

  ![]({{root}}/images/setting_up_inbound_parse_1.png)

  **(4)** (Optional) Check **Spam Check** if you want Inbound Parse to check incoming email for spam. Checking this box will also include the spam report and spam score in the payload.

  **(5)** (Optional) Check **Send Raw** if you would prefer to receive the full MIME message URL encoded in multipart/form-data.

{% warning %}
If you do not check **Send Raw**, the post will be multipart/form-data with the email content URL encoded, but the attachments will be in multipart/form-data. If your code is only set up to read URL encoding, attachments could be dropped.
{% endwarning %}

  **(6)** Click Save.

You have just finished configuring Inbound Parse!

{% anchor h2 %}
Testing
{% endanchor %}

To test if everything is working, send an email from your email account to anything@parse.yourdomain.com.

{% info %}
The local-part (i.e. anything before @) can be any word or combination because all email for the domain or subdomain will be processed.
{% endinfo %}

You can check the [Activity Feed](https://app.sendgrid.com/email_activity?) from your SendGrid dashboard to see if incoming mail was parsed. For more help, see [Debugging a Webhook]({{root_url}}/API_Reference/Webhooks/debug.html).

{% warning %}
Remember to direct your incoming email to your hostname (e.g. anything@parse.yourdomain.com). If you do not, your incoming email will not be parsed.
{% endwarning %}

{% anchor h2 %}
Default Parameters
{% endanchor %}

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>headers</th>
         <td>The raw headers of the email.</td>
      </tr>
      <tr>
         <th>dkim</th>
         <td>A string containing the verification results of any DKIM and domain keys signatures in the message.</td>
      </tr>
      <tr>
         <th>content-ids</th>
         <td>A string containing the number of attachments. </td>
      </tr>
      <tr>
         <th>to</th>
         <td>Email recipient field, as taken from the message headers.</td>
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
         <th>sender_ip</th>
         <td>A string of the sender’s ip address.</td>
      </tr>
      <tr>
         <th>spam_report</th>
         <td>Spam Assassin’s spam report.</td>
      </tr>
      <tr>
         <th>envelope</th>
         <td>A string containing the SMTP envelope. This will have two variables: <code>to</code>, which is a single-element array containing the address that we received the email to, and <code>from</code>, which is the return path for the message.</td>
      </tr>
      <tr>
         <th>attachments</th>
         <td>Number of attachments included in email.</td>
      </tr>
      <tr>
         <th>subject</th>
         <td>Email Subject.</td>
      </tr>
      <tr>
         <th>spam_score</th>
         <td>Spam Assassin’s rating for whether or not this is spam.<td>
      </tr>
      <tr>
         <th>attachment-info</th>
         <td>A string containing the attachmentX keys with another JSON string as the value. This string will contain the keys <code>filename</code> and <code>name</code>, which is the name of the file (if it was provided) and <code>type</code>, which is the <a href="http://en.wikipedia.org/wiki/Internet_media_type">media type</a> of the file. X is the total number of attachments. For example, if the number of attachments is 0, there will be no attachment files. If the number of attachments is 3, parameters attachment1, attachment2, and attachment3 will have file uploads. </td>
      </tr>
      <tr>
         <th>charsets</th>
         <td>A string containing the character sets of the fields extracted from the message.</td>
      </tr>
      <tr>
         <th>SPF</th>
         <td>The results of the Sender Policy Framework verification of the message sender and receiving IP address.</td>
      </tr>
      </tbody>
</table>

{% anchor h2 %}
Example Default Payload
{% endanchor %}

{% codeblock %}
[Date] array(16) {
  ["headers"]=>
  string(1970) "Received: by mx0047p1mdw1.sendgrid.net with SMTP id 6WCVv7KAWn Wed, 27 Jul 2016 20:53:06 +0000 (UTC)
Received: from mail-io0-f169.google.com (mail-io0-f169.google.com [209.85.223.169]) by mx0047p1mdw1.sendgrid.net (Postfix) with ESMTPS id AA9FFA817F2 for <parse@parse.yourdomain.com>; Wed, 27 Jul 2016 20:53:06 +0000 (UTC)
Received: by mail-io0-f169.google.com with SMTP id b62so81593819iod.3 for <parse@parse.yourdomain.com>; Wed, 27 Jul 2016 13:53:06 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=sendgrid.com; s=ga1; h=mime-version:from:date:message-id:subject:to; bh=DpB1CYYeumytcPF3q0Upvx3Sq/oF4ZblEwnuVzFwqGI=; b=GH5YTxjt6r4HoTa+94w6ZGQszFQSgegF+Jlv69YV76OLycJI4Gxdwfh6Wlqfez5yID 5dsWuqaVJZQyMq/Dy/c2gHSqVo60BKG56YrynYeSrMPy8abE/6/muPilYxDoPoEyIr/c UXH5rhOKjmJ7nICKu1o99Tfl0cXyCskE7ERW0=
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20130820; h=x-gm-message-state:mime-version:from:date:message-id:subject:to; bh=DpB1CYYeumytcPF3q0Upvx3Sq/oF4ZblEwnuVzFwqGI=; b=Sq6LVHbmywBdt3sTBn19U8VOmelfoJltz8IcnvcETZsYwk96RBxN+RKMN5fOZSKw4j 15HrgdIFfyDmp67YK0ygvOITlTvZ6XY5I0PtnvDtAQt79kS3tKjI3QKJoEp/ZjIjSzlL KG7agl6cxFgBbIN0yHWBOvy3O+ZXY8tZdom1yOvULjmjW1U9JkdOs+aJ6zq4qhZX/RM/ tIgLB461eJ5V95iQDDc5Ibj9Cvy4vJfXLQRO0nLVQAT2Yz58tkEO1bDZpWOPAyUNneIL yhIWp+SpbuqhMA68mq0krG1PjmWalUbpVcGJIGuOKB9mQFFo/MqdrUCjvYnyo1jPLPeX psdQ==
X-Gm-Message-State: AEkoousvdxmDoxLlTUYJ1AOmCGJv77xRBBlfKv6YrthH0M2NueMwlOxUD6t8nidE9uonXbdJ/DQy/chmHUnN//a4
X-Received: by 10.107.6.101 with SMTP id 98mr38024553iog.41.1469652785829; Wed, 27 Jul 2016 13:53:05 -0700 (PDT)
MIME-Version: 1.0
Received: by 10.107.48.17 with HTTP; Wed, 27 Jul 2016 13:53:05 -0700 (PDT)
From: Sender Name <example@example.com>
Date: Wed, 27 Jul 2016 14:53:05 -0600
Message-ID: <CAN_P_JMvV7ZpAQhOnDienypLrJmuhN=LQWweu4yScw4jQyXY2w@mail.gmail.com>
Subject: Different File Types
To: parse@parse.yourdomain.com
Content-Type: multipart/mixed; boundary=001a113f8ad03e85160538a4343c
"
  ["dkim"]=>
  string(22) "{@sendgrid.com : pass}"
  ["content-ids"]=>
  string(37) "{"ii_1562e2169c132d83":"attachment1"}"
  ["to"]=>
  string(26) "parse@parse.yourdomain.com"
  ["html"]=>
  string(479) "<div dir="ltr">Here&#39;s an email with multiple attachments<div><br></div><div><img src="cid:ii_1562e2169c132d83" alt="Inline image 1" width="455" height="544"><br clear="all"><div><br></div>-- <br><div class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><img src="https://sendgrid.com/brand/sg-logo-email.png" width="96" height="17"><br><div><br></div></div></div>
</div></div>
"
  ["from"]=>
  string(33) "Sender Name <example@example.com>"
  ["text"]=>
  string(139) "Here's an email with multiple attachments
"
  ["sender_ip"]=>
  string(14) "209.85.223.169"
  ["spam_report"]=>
  string(844) "Spam detection software, running on the system "mx0047p1mdw1.sendgrid.net", has
identified this incoming email as possible spam. The original message
has been attached to this so you can view it (if it isn't spam) or label
similar future email. If you have any questions, see
@@CONTACT_ADDRESS@@ for details.

Content preview:  Here's an email with multiple attachments [image: Inline image
   1] -- [...]

Content analysis details:   (2.6 points, 5.0 required)

 pts rule name              description
---- ---------------------- --------------------------------------------------
 0.8 HTML_IMAGE_RATIO_02    BODY: HTML has a low ratio of text to image area
 0.0 HTML_MESSAGE           BODY: HTML included in message
 1.8 HTML_IMAGE_ONLY_08     BODY: HTML: images with 400-800 bytes of words
 0.0 T_MIME_NO_TEXT         No text body parts

"
  ["envelope"]=>
  string(66) "{"to":["parse@parse.yourdomain.com"],"from":"example@example.com"}"
  ["attachments"]=>
  string(1) "2"
  ["subject"]=>
  string(20) "Different File Types"
  ["spam_score"]=>
  string(5) "2.597"
  ["attachment-info"]=>
  string(287) "{"attachment2":{"filename":"DockMcWordface.docx","name":"DockMcWordface.docx","type":"application/vnd.openxmlformats-officedocument.wordprocessingml.document"},"attachment1":{"filename":"MG_2359.jpg","name":"_MG_2359.jpg","type":"image/jpeg","content-id":"ii_1562e2169c132d83"}}"
  ["charsets"]=>
  string(77) "{"to":"UTF-8","html":"UTF-8","subject":"UTF-8","from":"UTF-8","text":"UTF-8"}"
  ["SPF"]=>
  string(4) "pass"
}


{% endcodeblock %}

{% anchor h2 %}
Raw Parameters
{% endanchor %}

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>dkim</th>
         <td>A string containing the verification results of any DKIM and domain keys signatures in the message.</td>
      </tr>
      <tr>
         <th>Email</th>
         <td>A string containing the email headers, date, body, and attachments</td>
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
         <td>A string containing the SMTP envelope. This will have two variables: <code>to</code>, which is an single-element array containing the addresses that received the email, and <code>from</code>, which is the return path for the message.</td>
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
         <td>A string containing the character sets of the fields extracted from the message.</td>
      </tr>
      <tr>
         <th>SPF</th>
         <td>The results of the Sender Policy Framework verification of the message sender and receiving IP address.</td>
      </tr>
    </tbody>
</table>

{% info %}
The total message size limit, including the message itself and all attachments, is 20MB. Be aware that other mail handlers will have their own limitations, and some ISPs and companies may either dramatically limit the size and/or type of attachments, or even block them altogether.
{% endinfo %}

{% anchor h2 %}
Example Raw Payload
{% endanchor %}

{% codeblock %}
array(11) {
  ["dkim"]=>
  string(22) "{@sendgrid.com : pass}"
  ["email"]=>
  string(8879) "Received: by mx0032p1mdw1.sendgrid.net with SMTP id rOkt2xLLKV Tue, 19 Jul 2016 15:06:29 +0000 (UTC)
Received: from mail-it0-f45.google.com (mail-it0-f45.google.com [209.85.214.45]) by mx0032p1mdw1.sendgrid.net (Postfix) with ESMTPS id 26D6080397 for <parse@parse.yourdomain>; Tue, 19 Jul 2016 15:06:22 +0000 (UTC)
Received: by mail-it0-f45.google.com with SMTP id f6so93587860ith.1 for <parse@parse.yourdomain.com>; Tue, 19 Jul 2016 08:06:22 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=sendgrid.com; s=ga1; h=mime-version:from:date:message-id:subject:to; bh=UYWCIUKTVXyV9U41l+c9+qOlpoeQGcJkKpyOAatNr3Y=; b=c1I/LcqHEJklmAThWr9Z8NKlTPHUlE/8sDSpK382fJtIQcGdUtczG0pijnUHegrFVt FDr4NehtJDD9KFvXLXboLCtObsu5HTN99ckUCCZTibZseA+J8U3jjCqTdj1fmUage5C7 //Iwi0Ndioonzhm18J7KStap66yZ69ED7UxPk=
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20130820; h=x-gm-message-state:mime-version:from:date:message-id:subject:to; bh=UYWCIUKTVXyV9U41l+c9+qOlpoeQGcJkKpyOAatNr3Y=; b=lgmLXnmmpNcQMckjshsZsa2/8OjFZzntWYSG5XZo0fi32KHLuBLSHuNDFXn0V4ICp1 1xuT2fZCyhBSgNBiWNbjqFspdemzrBjaI1Tgm/Zz8Fv6wW2XdjpoANNQzJxfdhnecPd5 HvZ5P8+KTqjr4tAa9RmLthDc3UqhV9NRnCnhbW/AZaVQLB8eoJus92tD1GeXpBQml5XF m6vPUGrWGZWNugINkRKxIpk+2uECglAjNm4NpZIi9j7N94CxA18RC4NJ59WIsSybtIer hbCgT1Q13rvGEzvnp6FfFQVbE3DOibNqd0bh/EvZCagFVbnenNc/Q+qHtU9KqFlisSOp xh0w==
X-Gm-Message-State: ALyK8tINVaZIP8YCgQbpg5ya8EnqQo76uxkXUPpDnM+kAyAQQzehFU10EgyuAe2fAmWf/muBiFDy0JDU74Eclp1/
X-Received: by 10.36.76.16 with SMTP id a16mr4479786itb.77.1468940781988; Tue, 19 Jul 2016 08:06:21 -0700 (PDT)
MIME-Version: 1.0
Received: by 10.107.48.17 with HTTP; Tue, 19 Jul 2016 08:06:21 -0700 (PDT)
From: Sender Name <example@example.com>
Date: Tue, 19 Jul 2016 09:06:21 -0600
Message-ID: <CAN_P_JNa25--hzm5=-ES9cnxgWa+h+E49OOAS7sPpV0gsoXCOw@mail.gmail.com>
Subject: Hello
To: parse@parse.yourdomain.com
Content-Type: multipart/mixed; boundary=001a11447dc881e40f0537fe6d5a

--001a11447dc881e40f0537fe6d5a
Content-Type: multipart/alternative; boundary=001a11447dc881e40b0537fe6d58

--001a11447dc881e40b0537fe6d58
Content-Type: text/plain; charset=UTF-8

This is a test email with 1 attachment.

--001a11447dc881e40b0537fe6d58
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr">This is a test email with 1 attachment.<br clear=3D"all"><=
div><br></div>-- <br><div class=3D"gmail_signature" data-smartmail=3D"gmail=
_signature"><div dir=3D"ltr"><img src=3D"https://sendgrid.com/brand/sg-logo=
-email.png" width=3D"96" height=3D"17"><br><div><br></div></div></div>
</div>

--001a11447dc881e40b0537fe6d58--

--001a11447dc881e40f0537fe6d5a
Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document;
	name="DockMcWordface.docx"
Content-Disposition: attachment; filename="DockMcWordface.docx"
Content-Transfer-Encoding: base64
X-Attachment-Id: f_iqtleujy0

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

--001a11447dc881e40f0537fe6d5a--
"
  ["to"]=>
  string(22) "parse@parse.yourdomain.com"
  ["from"]=>
  string(33) "Sender Name <example@example.com>"
  ["sender_ip"]=>
  string(13) "209.85.214.45"
  ["spam_report"]=>
  string(798) "Spam detection software, running on the system "mx0032p1mdw1.sendgrid.net", has
identified this incoming email as possible spam. The original message
has been attached to this so you can view it (if it isn't spam) or label
similar future email. If you have any questions, see
@@CONTACT_ADDRESS@@ for details.

Content preview:  This is a test email with 1 attachment.
Content analysis details:   (0.4 points, 5.0 required)

 pts rule name              description
---- ---------------------- --------------------------------------------------
 0.0 HTML_MESSAGE           BODY: HTML included in message
 0.3 HTML_IMAGE_ONLY_04     BODY: HTML: images with 0-400 bytes of words
 0.0 T_MIME_NO_TEXT         No text body parts

"
  ["envelope"]=>
  string(73) "{"to":["parse@parse.yourdomain.com"],"from":"example@example.com"}"
  ["subject"]=>
  string(5) "Hello"
  ["spam_score"]=>
  string(5) "0.353"
  ["charsets"]=>
  string(47) "{"to":"UTF-8","subject":"UTF-8","from":"UTF-8"}"
  ["SPF"]=>
  string(4) "pass"
}
{% endcodeblock %}

{% anchor h2 %}
Other Inbound Parse Documentation
{% endanchor %}

  - [Parse API]({{root_url}}/API_Reference/Web_API_v3/Webhooks/parse.html) -
    Manage Inbound Parse Webhook settings using the Parse API (Web API v3).
  - [Parse Settings Subuser]({{root_url}}/API_Reference/Web_API/Customer_Subuser_API/parse_settings.html) -
    Get current Parse settings and create, edit, and delete entries using the Subuser API (Web API v2).
  - [Reseller API Parse Settings]({{root_url}}/API_Reference/Web_API/Reseller_API/parse_settings.html) -
    Get current Parse settings and create, edit, and delete entries using the Reseller API (Web API v2).
  - [Reseller Customer Subuser Parse Settings]({{root_url}}/API_Reference/Web_API/Reseller_API/Reseller_Customer_Subuser_API/customer_subuser_parse_settings.html) -
    Get current Parse settings and create, edit, and delete entries using the Reseller Customer Subuser API (Web API v2).

{% anchor h2 %}
Statistics
{% endanchor %}

SendGrid provides [statistics](https://app.sendgrid.com/statistics/parse_webhook) of how many emails parsed over time. You can specify what is displayed on the graph by adjusting the statistics filters.

For more information, please see [Parse Webhook Stats]({{root_url}}/API_Reference/Web_API_v3/Stats/parse.html).
