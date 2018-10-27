---
layout: page
weight: 0
title: Inbound Email Parse Webhook
group: inbound-parse
navigation:
  show: true
---

SendGrid can parse the attachments and contents of incoming emails. Application examples include receiving uploads and posting blog articles via email.

The Parse API will POST the parsed email to a URL that you specify. If a POST is unsuccessful, SendGrid automatically queues and retries any POSTs that respond with a 4XX or 5XX status. This prevents data loss for customers who have misconfigured their website or POST URL.

<call-out>

Respond with a 2xx status to the POST request to stop the email from retrying.

</call-out>

To avoid returning an error your link must return a 2xx HTTP code when the email is received. This response lets our system know that your link has received the email. It is then removed from our send queue. If we do **not** get a valid 2xx HTTP response, our servers will believe they have failed to deliver your message and will continue trying to send it. Messages that cannot be delivered after 3 days will be dropped.

## 	Setup

The following steps are required to begin parsing email:

-   Point the MX Record of a Domain/Hostname or Subdomain to **mx.sendgrid.net**
-   Associate the Domain/Hostname and the URL in the [Parse API settings page](https://sendgrid.com/developer/reply/).

<call-out type="warning">

The Inbound Parse Webhook will not follow redirects. Please make sure to use the correct URL, or posting will fail.

</call-out>

You must ensure that the subdomain-domain combination for your receiving domain is unique.

<call-out type="warning">

Only authenticated domains may be used when configuring Inbound Parse!

</call-out>

See [Setting Up The Inbound Parse Webhook]({{root_url}}/for-developers/parsing-email/setting-up-the-inbound-parse-webhook/) for step-by-step instructions.

<call-out>

The total message size limit, including the message itself and any number of attachments, is 20MB. Be aware that other mail handlers will have their own limitations, and some ISPs and companies may either dramatically limit the size and/or type of attachments, or even block them altogether.

</call-out>

## 	Character Sets and Header Decoding

If you receive an email which is not in ASCII only format, you will want to read this section.

Messages and their headers can have character set data associated with them. In order to simplify the parsing of messages for the end user, SendGrid will decode the to, from, cc, and subject headers if needed. All headers will be converted to UTF-8 for uniformity since technically a header can be in many different character sets.

The charsets variable will contain a JSON encoded hash of the header/field name and its respective character set. For instance, it may look like:

```ruby
[charsets] => {"to":"UTF-8","cc":"UTF-8","subject":"UTF-8","from":"UTF-8","text":"iso-8859-1"}
```

This shows that all headers should be treated as UTF-8, and the text body is latin1.
