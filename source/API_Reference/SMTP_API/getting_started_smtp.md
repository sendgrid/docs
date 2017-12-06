---
seo:
  title: How to Send an SMTP Email
  description: Use Telnet to send your first SMTP email
  keywords: telnet, ports, connection, smtp, send email, getting started
title: How to Send an SMTP Email
weight: 960
layout: page
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/190122014" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

You can also send email with [the UI]({{root_url}}User_Guide/Marketing_Campaigns/getting_started.html) and with [the API]({{root_url}}/API_Reference/api_v3.html).

- [What is SMTP?](#-What-is-smtp)
- [Sending a test SMTP email with Telnet](#-Sending-a-test-SMTP-email-with-Telnet)
- [Sending an Email with SMTP](#-Sending-an-Email-using-SMTP)
   - [Ports](#-Ports)
   - [Rate Limits](#-Rate-Limits)
- [Customizing Your Send](#-Customizing-Your-Send)
   - [Filters](#-Filters)
   - [Scheduling Your Send](#-Scheduling-Your-Send)
   - [Substitution Tags](#-Substitution-Tags)
   - [Section Tags](#-Section-Tags)
   - [Suppression Groups](#-Suppression-Groups)
   - [Categories](#-Categories)
   - [Unique Arguments](#-Unique-Arguments)

{% anchor h2 %}
What is SMTP?
{% endanchor %}

[SMTP]({{root_url}}/Glossary/smtp.html), or _simple mail transfer protocol_, is a quick and easy way to send email from one server to another. SendGrid provides a 3rd party SMTP service that allows you to deliver your email via our server instead of your own client or server.

For a deeper dive into what SMTP is, the benefits of sending an email with SMTP, and how SendGrid can help, see the [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/) on our blog.

{% anchor h2 %}
Sending a test SMTP email with Telnet
{% endanchor %}

{% anchor h3 %}
Before you begin
{% endanchor %}

- Create a SendGrid API key on the [API Keys page](https://app.sendgrid.com/settings/api_keys).
- Open your command line, bash, shell, or Terminal functionality (depending on what OS you are using). You'll use this window to input the commands to initiate a telnet connection.
- Convert your API key to Base64. It is not secure to put your API key into an external webpage for a conversion, so we recommend using a bash conversion. If you are on Mac or Linux, you can use the pre-installed OpenSSL package. Use this cmd to convert your API key using OpenSSL: `echo '<<YOUR_API_KEY>>' | openssl base64`. Save your converted key for a later step.

{% warning %}
Telnet does not register backspaces correctly - so you have to type your commands correctly (or copy and paste it from here).
{% endwarning %}

*To send SMTP email using Telnet:*

1. Start your session by typing in the terminal: `TELNET smtp.sendgrid.net 25`. SendGrid accepts unencrypted and TLS connections on ports **25**, **467**, **587**, & **2525**. You can also connect via SSL on port **465**. Many hosting providers and ISPs block port 25 as a default practice. If this is the case, contact your host/ISP to find out which ports are open for outgoing SMTP relay. We recommend port 587 to avoid any rate limiting that your server host may apply.
1. Once you successfully connect to the SendGrid, login to the server by typing `AUTH LOGIN`. 
     The mail server responds with `334 VXNlcm5hbWU6`, a Base64 encoded request for your username. If you receive this error: `'telnet' is not recognized as an internal or external command, operable program or batch file`, you need to install Telnet on your machine. Telnet comes natively on most operating systems.
1. Input the API username encoded in Base64. Everyone's username is `apikey`, which is `YXBpa2V5` in Base64. 
     The mail server responds with `334 UGFzc3dvcmQ6`. This response is a Base64 encoded request for your password (your API Key).
1. Enter your Base64 converted API key in the next line as the password.
    The mail server responds with `235 Authentication successful`. Getting this far indicates that your connection to smtp.sendgrid.net over the chosen port is open and that your API key is valid.
1. Next, add the email that you’re sending from: `mail from:<<SENDER_EMAIL>`.
    The mail server responds with `250 Sender address accepted`.
1. Add the email that you’re sending to: `rcpt to:<<RECIEPIENT_ADDRESS>>`.
    The mail server responds with `250 Recipient address accepted`.
1. On the next line, type `DATA` - this indicates that you’re typing the email content.
1. Optionally, add a mail-to header to add the name and email address of the recipient to the email header: `To: <<NAME>> <<EMAIL>>`.
1. Next, add a from header to add the name and email address of the sender to the email header - if not included, SendGrid blocks your email because it doesn’t follow RFC 5322 compliance guidelines: `From: NAME <<EMAIL>`.
1. Include a subject line: `Subject: <<EMAIL_SUBJECT>>`
1. Add the content of the message: `<<MESSAGE>>`. For example: `“This is a test for the SMTP relay."`
1. Finally, send the email with a period and then press enter: `.[Enter]`
    The mail server returns `250 Ok: queued as …` - This means the email has been queued to send. This queue moves very quickly, and your.
1. Exit the Telnet connection with: `quit`.

{% anchor h2 %}
Sending an email using SMTP
{% endanchor %}

*To send an email from your severs using SMTP:*

1. [Create an API Key](https://app.sendgrid.com/settings/api_keys) with at least "Mail" permissions.
2. Set the server host in your email client or application to `smtp.sendgrid.net`.
    * This setting is sometimes referred to as the _external SMTP server_ or the _SMTP relay_.
3. Set your username to `apikey`.
4. Set your password to the API key generated in step 1.
5. Set the port to `587`.

{% anchor h3 %}
Ports
{% endanchor %}
    - For an unencrypted or a [TLS connections]({{root_url}}/Classroom/Basics/Email_Infrastructure/ssl_vs_tls.html), use port `25`, `2525`, or `587`.
    - For a [SSL connections]({{root_url}}/Classroom/Basics/Email_Infrastructure/ssl_vs_tls.html), use port `465`.

{% anchor h3 %}
Rate Limits
{% endanchor %}

* You may send up to **100 messages per SMTP connection**.
* You may open up to **10 concurrent connections from a single server**.

{% anchor h2 %}
Customizing Your Send
{% endanchor %}

{% anchor h3 %}
Filters
{% endanchor %}

You can customize the emails you send via SMTP by using different settings (also referred to as filters). Change these settings in the **X-SMTPAPI header**.

For example, to send a blind carbon copy (BCC) of your email to the address example@example.com, include the following in your X-SMTPAPI header:

{% codeblock lang:json %}
{
  "filters" : {
    "bcc" : {
      "settings" : {
        "enable" : 1,
        "email" : "example@example.com"
      }
    }
  }
}
{% endcodeblock %}

For a complete list of settings that can be enabled via the X-SMTPAPI header, see our [SMTP documentation]({{root_url}}/API_Reference/SMTP_API/apps.html).

{% anchor h3 %}
Scheduling Your Send
{% endanchor %}

Schedule your email send time using the `send_at` parameter within your X-SMTPAPI header. Set the value of `send_at` to the [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) for when your mail should be sent.

{% codeblock lang:json %}
{
  "send_at": 1409348513
}
{% endcodeblock %}

For more information, see our [scheduling parameters documentation]({{root_url}}/API_Reference/SMTP_API/scheduling_parameters.html).

{% anchor h3 %}
Substitution Tags
{% endanchor %}

Substitution tags allow you to dynamically insert specific content relevant to each of your recipients, such as their first and last names.

For example, to use a substitution tag to replace the first name of your recipient, insert the tag {% raw %}{{name}}{% endraw %} in the HTML of your message:

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello {% raw %}{{name}}{% endraw %},<br>
        The body of your email would go here...
    </p>
  </body>
</html>
{% endcodeblock %}

To define the value that will replace the {% raw %}{{name}}{% endraw %} tag, define the following in your X-SMTPAPI header:

{% codeblock lang:json %}
{
  "to": [
    "john.doeexampexample@example.com",
    "example@example.com"
  ],
  "sub": {
    "{% raw %}{{name}}{% endraw %}": [
      "John",
      "Jane"
    ]
  }
}
{% endcodeblock %}

For more information, see our [substitution tags documentation]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html).

{% anchor h3 %}
Section Tags
{% endanchor %}

Section tags are similar to substitution tags, but rather than replace tags with content for each recipient; section tags allow you to replace a tag with more generic content— like a salutation.

For more information, see our [section tags documentation]({{root_url}}/API_Reference/SMTP_API/section_tags.html).

{% anchor h3 %}
Suppression Groups
{% endanchor %}

You can easily specify an unsubscribe group for an email sent via SMTP by including the `asm_group_id` parameter in your X-SMTPAPI header. Simply set the value of `asm_group_id` to the numerical ID of the group you would like to use.

{% codeblock lang:json %}
{
  "asm_group_id": 1
}
{% endcodeblock %}

For more information, see our [suppression groups documentation]({{root_url}}/API_Reference/SMTP_API/suppressions.html).

{% anchor h3 %}
Categories
{% endanchor %}

Categories allow you to track your emails according to broad topics that you define, like "Weekly Newsletter" or "Confirmation Email". Simply define the category by using the `category` parameter within your X-SMTPAPI header:

{% codeblock lang:json %}
{
  "category": "Example Category"
}
{% endcodeblock %}

For more information, see our categories documentation.

{% info %}
Categories should only be used for broad topics. To attach unique identifiers, please use [unique arguments]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html).
{% endinfo %}

{% anchor h3 %}
Unique Arguments
{% endanchor %}

Use unique arguments to track your emails based on specific identifiers unique to individual messages. Unique arguments can be retrieved via SendGrid's [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) or your [email activity page]({{root_url}}/User_Guide/email_activity.html).

For more information, see our [unique arguments documentation]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html).

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Getting Started with the UI]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html)
- [Getting Started with the API]({{root_url}}/API_Reference/api_v3.html)
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Integrating with the SMTP API]({{root_url}}/API_Reference/SMTP_API/using_the_smtp_api.html)
- [Using Substitution Tags]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html#-Using-Custom-HTML)