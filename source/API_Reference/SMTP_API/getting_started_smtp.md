---
seo:
  title: How to Send an SMTP Email
  description: Use Telnet to send your first SMTP email
  keywords: telnet, ports, connection, smtp, send email, getting started
title: How to Send an SMTP Email
weight: 0
layout: page
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/190122014" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

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

1. Start your session by typing in the terminal: `TELNET smtp.sendgrid.net 25`. SendGrid accepts unencrypted and TLS connections on ports **25**, **587**, & **2525**.
1. Once you successfully connect to the SendGrid, login to the server by typing `AUTH LOGIN`.
    The mail server responds with `334 VXNlcm5hbWU6`, a Base64 encoded request for your username.
    {% info %}
    If you receive this error: `"'telnet' is not recognized as an internal or external command, operable program or batch file."` you need to install Telnet on your machine. Telnet comes natively on most operating systems.
    {% endinfo %}
1. Input the API username encoded in Base64. Everyone's username is `apikey`, which is `YXBpa2V5` in Base64.
    The mail server responds with `334 UGFzc3dvcmQ6`. This is Base64 encoded request for your password (your API Key).
1. Enter your Base64 converted API key in the next line as the password.`
    The mail server responds with `235 Authentication successful`. Getting this far indicates that your connection to smtp.sendgrid.net over the chosen port is open and that your API key is valid.
1. Next, add the email that you’re sending from: `mail from:<<SENDER_EMAIL>`.
    The mail server responds with `250 Sender address accepted`.
1. Add the email that you’re sending to: `rcpt to:<<RECIEPIENT_ADDRESS>>`.
    The mail server responds with `250 Recipient address accepted`.
1. On the next line, type `DATA` - this indicates that you’re typing the email content.
1. Optionally, add a mail-to header to add the name and email address of the recipient to the email header: `To: <<NAME>> <<EMAIL>>`.
1. Next, add a from header to add the name and email address of the sender to the email header - if this isn’t included, SendGrid blocks your email because it doesn’t follow RFC 5322 compliance guidelines: `From: NAME <<EMAIL>`.
1. Include a subject line: `Subject: <<EMAIL_SUBJECT>>`
1. Add the content of the message: `<<MESSAGE>>`. For example: `“This is a test for the SMTP relay."`
1. Finally, send the email with a period and then press enter: `.[Enter]`
    The mail server returns `250 Ok: queued as …` - This means the email has been queued to send. This queue moves very quickly, and your.
1. Exit the Telnet connection with: `quit`.