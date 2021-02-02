---
seo:
  title: Integrating with the SMTP API
  description: Set your systems up to use SendGrid's SMTP API
  keywords: ports, connection, SMTP, send email, integrate, rate limits, setting up
title: Integrating with the SMTP API
group: smtp
weight: 950
layout: page
navigation:
  show: true
---

## Integrating with SendGrid

_To integrate with SendGrid's SMTP API:_

1. [Create an API Key](https://app.sendgrid.com/settings/api_keys) with at least "Mail" permissions.
2. Set the server host in your email client or application to `smtp.sendgrid.net`. This setting is sometimes referred to as the _external SMTP server_ or the _SMTP relay_.
3. Set your username to the string `apikey`. This setting is the exact string "apikey" and not the API key itself.
4. Set your password to the API key generated in step one.
5. Set the port to `587` (or as specified below).

<call-out>

When submitting base64 encoded API key values, be sure you have not included any newline or whitespace characters by accident. This can happen when copying the encoded key from an environment that line wraps output. SMTP is a line-oriented protocol, and linefeed characters will prevent you from authenticating successfully.

</call-out>

### SMTP ports

- For an unencrypted or a [TLS connection]({{root_url}}/ui/sending-email/ssl-vs-tls/), use port `25`, `2525`, or `587`.
- For a [SSL connection]({{root_url}}/ui/sending-email/tls/), use port `465`.

<call-out>

If you are unsure which port to use, a TLS connection on port 587 is typically recommended. To better understand the difference between ports 465 and 587, see the Twilio SendGrid blog post, ["What's the Difference Between Ports 465 and 587"](https://sendgrid.com/blog/whats-the-difference-between-ports-465-and-587).

</call-out>

### Build SMTP email

Now that you've integrated, learn to [build SMTP email]({{root_url}}/for-developers/sending-email/building-an-x-smtpapi-header/).

### Rate limits

- You may send up to **5k messages per SMTP connection**.
- You may open up to **10k concurrent connections from a single server**.

## Additional resources

- [Sending email]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)
- [Getting Started with the API]({{root_url}}/api-reference/)
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
- [Building an SMTP Email]({{root_url}}/for-developers/sending-email/building-an-x-smtpapi-header/)
