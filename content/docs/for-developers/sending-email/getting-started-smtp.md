---
seo:
  title: How to Send an SMTP Email
  description: Use Telnet to send your first SMTP email. SendGrid’s SMTP API allows developers to specify custom handling instructions for email using an X-SMTPAPI header inserted into the message.
  keywords: telnet, ports, connection, SMTP, send email, getting started
title: How to Send an SMTP Email
group: smtp
weight: 960
layout: page
navigation:
  show: true
---

You can also send email with [the UI]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/) and with [the API]({{root_url}}/api-reference/).

## What is SMTP?

[Simple Mail Transfer Protocol (SMTP)]({{root_url}}/glossary/smtp/) is a quick and easy way to send email from one server to another. SendGrid provides an SMTP service that allows you to deliver your email via our servers instead of your own client or server. This means you can count on SendGrid's delivery at scale for your SMTP needs.

SendGrid’s SMTP API also allows you to specify custom email handling instructions using a JSON encoded list called the [X-SMTPAPI header]({{root_url}}/for-developers/sending-email/building-an-x-smtpapi-header/). The X-SMTPAPI header is parsed by SendGrid to modify your message in the ways you specify.

For a deeper dive into what SMTP is, the benefits of sending an email with SMTP, and how SendGrid can help, see the [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/) on our blog.

## Sending a test SMTP email with Telnet

This page will help you send a first test message using Telnet. Once you complete this process, you will be better prepared to explore and build messages using the [X-SMTPAPI header]({{root_url}}/for-developers/sending-email/building-an-x-smtpapi-header/).

### Prerequisites

Be sure to perform the following prerequisites to complete this tutorial.

1. Sign up for a [SendGrid account](https://signup.sendgrid.com/)
2. Create and store a SendGrid [API key](https://app.sendgrid.com/settings/api_keys) with full access "Mail Send" permissions.
3. Verify your [Sender Identity]({{root_url}}/for-developers/sending-email/sender-identity/)
4. Open your terminal, also commonly referred to as a command prompt, or command line. You'll use the terminal to encode your API key and input the commands that initiate a Telnet connection.

<call-out>

In the following code samples, greater than and less than symbol are wrapped around placeholder values (e.g., `<YOUR_API_KEY>`). You should replace the greater than and less than symbols and the text inside them with an actual value. For example, `echo -n '<YOUR_API_KEY>' | openssl base64` will become `echo -n 'SG.someactualkey' | openssl base64` if your API key is `SG.someactualkey`.

In some cases you will see two sets of greater than and less than symbols wrapping a placeholder. In this case, one set of greater than and less than symbols is required in the actual value and should not be replaced. For example, `From: "Example" <<example@example.com>>` will become `From: "Example" <example@example.com>`.

</call-out>

Once you have your terminal open and have saved your API key, you must Base64 encode the API key. Note that it is not secure to put your API key into an external webpage for a conversion, so we recommend using a conversion in your terminal. If you are on Mac or Linux, you can use the pre-installed OpenSSL package to Base64 encode a string with the following command.

```shell
echo -n '<YOUR_API_KEY>' | openssl base64
```

Save your encoded key for a later. Also, be sure you have not included any newline or whitespace characters by accident. This can happen when copying the encoded key from a shell that line wraps output. SMTP is a line-oriented protocol, and linefeed characters will prevent you from authenticating successfully.

<call-out type="warning">

Telnet does not register backspaces correctly, so you must type your commands correctly or copy and paste them from this page.

</call-out>

### Send an SMTP email using Telnet:

<call-out>

You may need to install Telnet on your machine. Telnet comes natively on some operating systems; However, recent releases of MacOS no longer include Telnet, and Telnet must be enabled manually on Windows 10.

You can install Telnet on MacOS using [Homebrew](https://brew.sh/).

To enable Telnet on Windows 10, navigate to **Windows Features** > **Turn Windows Features on or off** from the Windows **Control Panel**. Check the box next to **Telnet Client**, and select **OK**.

</call-out>

1. Start a Telnet session by typing the following in the terminal:

```shell
TELNET smtp.sendgrid.net 25
```

SendGrid accepts unencrypted and TLS connections on ports **25**, **587**, & **2525**. You can also connect via SSL on port **465**. Many hosting providers and ISPs block port 25 as a default practice. If your Telent session continually times out or will not connect using port 25, it is likely that your ISP or hosting provider is blocking the port. You can contact your host/ISP to find out which ports are open for outgoing SMTP relay. We recommend using port 587 to avoid any rate limiting that your server host may apply.

2. Once you successfully connect to SendGrid, log in to the server by typing the following:

```shell
AUTH LOGIN
```

The mail server will respond with `334 VXNlcm5hbWU6`, which is a Base64 encoded request for your username.

3. Input `YXBpa2V5` and press **Enter** on your keyboard. Twilio SendGrid requires you to authenticate using an API key. When using Basic Authentication and an API key, you must use the string `apikey` in place of your account username. The string `apikey` is `YXBpa2V5` when Base64 encoded, which is why we use it in this step.

The mail server will respond with `334 UGFzc3dvcmQ6`. This response is a Base64 encoded request for your password (your API Key).

4. Enter your Base64 converted API key in the next line as the password and press **Enter**.

The mail server will respond with `235 Authentication successful`. Getting this far indicates that your connection to `smtp.sendgrid.net` over the chosen port is open and that your API key is valid.

5. Next, add the email that you’re sending from using the SMTP MAIL FROM command and press **Enter**.

```shell
MAIL FROM: <SENDER_EMAIL>
```

The mail server will respond with `250 Sender address accepted`.

6. Add the email that you’re sending to using the SMTP RCPT TO command and press **Enter**.

```shell
RCPT TO: <RECIPIENT_ADDRESS>
```

Note that you can add more RCPT TO addresses during this step. Repeat the process by adding another RCPT TO command and pressing **Enter** for each recipient you intend to deliver the message to.

The mail server will respond with `250 Recipient address accepted` after each recipient is added.

7. On the next line, type `DATA` and press **Enter**.

The mail server will respond with `354 Continue`. Unlike the MAIL FROM and RCPT TO commands, which are part of the email envelope, the DATA command is not meant to contain information that routes your email from a sender to a recipient. Instead, DATA allows you to modify the content of your message.

8. Optionally, add a mail-to header to add the name and email address of the recipient to the email header and press **Enter**. Note that the name should be wrapped in quotation marks, and the address should be wrapped in a greater than and less than symbol.

```shell
To: "<RecipientName>" <<RecipientEmailAddress>>
```

9. Next, add a from header to add the name and email address of the sender to the email header and press **Enter**. If a from header is not included, SendGrid will block your email because it doesn’t follow [RFC 5322](https://tools.ietf.org/html/rfc5322) compliance guidelines. Note that the name should be wrapped in quotation marks, and the address should be wrapped in a greater than and less than symbol.

```shell
From: "<SenderName>" <<SenderEmail>>
```

10. Include a subject line and press **Enter**.

```shell
Subject: <EMAIL_SUBJECT>
```

11. Add the body content of the message and press **Enter**.

```shell
"<MESSAGE>"
```

For example:

```
“This is a test for the SMTP relay."
```

12. Finally, send the email by typing a period, `.`, and then pressing **Enter**.

The mail server will return `250 Ok: queued as <examplestring1234>`. This means the email has been queued to send. The queue moves very quickly, and you should see mail delivered to the designated recipients shortly.

13. Exit the Telnet connection by typing `quit` and pressing **Enter**.

The full command should look like the following example.

```shell
235 Authentication successful
MAIL FROM:tiramisu@example.com
250 Sender address accepted
RCPT TO:person1@sendgrid.com
250 Recipient address accepted
DATA
354 Continue
From: "Tira Misu" <tiramisu@example.com>
To: "Person 1" <person1@sendgrid.com>
Subject: Test message subject
"This is the test message body."
.
250 Ok: queued as Yo60h6C5ScGPeP5fUWU3K
```

Now that you've sent a test email, learn to [integrate your servers with our SMTP service]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/).

<call-out>

Message size limit: The total message size should not exceed 20MB. This includes the message itself, headers, and the combined size of any attachments.

</call-out>

<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">

### Do you want expert help to get your email program started on the right foot?

Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.

</call-out-link>

## Additional Resources

- [Getting Started with the UI]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)
- [Getting Started with the API]({{root_url}}/for-developers/sending-email/api-getting-started/)
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Integrating with the SMTP API]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
- [Building an SMTP Email]({{root_url}}/for-developers/sending-email/building-an-x-smtpapi-header/)
