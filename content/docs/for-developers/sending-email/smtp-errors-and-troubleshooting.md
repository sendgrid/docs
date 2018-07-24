---
seo:
  title: Errors and Troubleshooting
  description: SMTP Response codes and troubleshooting tips
  keywords: SMTP, send email, integrate, building, filters, scheduling, substitution, suppression groups, unique arguments, recipients
title: Errors and Troubleshooting
weight: 0
layout: page
navigation:
  show: true
---

- [Response codes](#-Response-codes)
- [Turning off click tracking](#-Turning-off-click-tracking)
- [Invalid SMTP API Header](#-Invalid-SMTP-API-Hheader)
- [Certificate verification failed for smtp.sendgrid.net](#-Certificate-verification-failed-for-smtp.sendgrid.net)

{% anchor h3 %}	Response codes
{% endanchor %}	
Each SMTP call you make returns a response. `200` responses are usually success responses, and `400` responses are usually deferrals. SendGrid continues to retry resending `400` messages for up to 72 hours. `500` responses are hard failures that are not retried by our servers. This table has possible response codes with example errors and a general explanation of that sort of response.

<table class="table" style="table-layout:fixed">
  <tr>
    <th>Error</th>
    <th>Message</th>
    <th>Explaination</th>
  </tr>
  <tr>
    <td>250</td>
    <td>`Queued mail for delivery`</td>
    <td>Your mail has been successfully queued! This response indicates that the recipient server has accepted the message.</td>
  </tr>
  <tr>
    <td>421</td>
    <td>`Message from (X.X.X.X) temporarily deferred`</td>
    <td>Messages are temporarily deferred because of recipient server policy - often it's because of too many messages or connections in too short of a timeframe. We continue to retry deferred messages for up to 72 hours. Consider temporarily sending less messages to a domain that is returning this code because this could further delay your messages currently being tried.</td>
  </tr>
  <tr>
    <td>450</td>
    <td>`too frequent connects from 198.37.147.135, please try again later.`</td>
    <td>The message failed because the reciepients mailbox was unavailable, perhaps because it was locked or was not routable at the time. We continue to retry messages for up to 72 hours. Consider temporarily sending less messages to a domain that is returning this code because this could further delay your messages currently being tried.</td>
  </tr>
  <tr>
    <td>451</td>
    <td>`Temporary local problem - please try later`</td>
    <td>The message simply failed, usually due to a far-end server error. We continue to retry messages for up to 72 hours.</td>
  </tr>
  <tr>
    <td>452</td>
    <td>`Too many recipients received this hour (throttled)`</td>
    <td>The message has been deferred due to insufficient system storage. We continue to retry messages for up to 72 hours.</td>
  </tr>
  <tr>
    <td>550</td>
    <td>`Requested action not taken: mailbox unavailable`</td>
    <td>The user’s mailbox was unavailable. Usually because it could not be found, or because of incoming policy reasons. Remove these address from your list - it is likely a fake, or it was mistyped.</td>
  </tr>
  <tr>
    <td>551</td>
    <td>`User does not exist.`</td>
    <td>The intended mailbox does not exist on this recipient server. Remove these addresses from your list.</td>
  </tr>
  <tr>
    <td>552</td>
    <td>`This message is larger than the current system limit or the recipient’s mailbox is full. Create a shorter message body or remove attachments and try sending it again.`</td>
    <td>The recepients mailbox has exceeded its storage limits. We don't resend messages with this error code because this is usually a sign this is an abandoned email.</td>
  </tr>
  <tr>
    <td>553</td>
    <td>`Invalid/inactive user.`</td>
    <td>The message was refused because the mailbox name is either malformed or does not exist. Remove these addresses from your list.</td>
  </tr>
  <tr>
    <td>554</td>
    <td>`ERROR: Mail refused`</td>
    <td>This is a default response that can be caused by a lot of issues. There is often a human readable portion of this error that gives more detailed information, but if not, remove these addresses from your list.</td>
  </tr>
  <tr>
    <td>Other</td>
    <td>`Delayed Bounce - Unable to Parse Server Reason`</td>
    <td>This is what SendGrid displays when the reciepients server returns a blank reason code.</td>
  </tr>
</table>

{% anchor h2 %}	Turning off click tracking
{% endanchor %}	
To turn off click tracking, add this to your X-SMTPAPI header:

```json
{
  "filters": {
    "clicktrack": {
      "settings":
        {
          "enable": 0
        }
    }
  }
}
```

{% anchor h2 %}	Invalid SMTP API header
{% endanchor %}	
When you try to send an invalid X-SMTPAPI header, you will get an email with details about the invalidations. You may also see errors on your Email Activity page or in your Event Webhook data. If this happens, the email should give you the information you need to begin troubleshooting. We also recommend uploading your JSON into a JSON validator, because this is often an invalid JSON issue.

{% anchor h2 %}	Certificate verification failed for smtp.sendgrid.net
{% endanchor %}	
 `"certificate verification failed for [smtp.sendgrid.net](http://smtp.sendgrid.net/)[198.37.144.225]:587: untrusted issuer /C=US/O=The Go Daddy Group, Inc./OU=Go Daddy Class 2 Certification Authority"`

 If you receive this error, the connection is still encrypted; it's just that your server doesn't have the necessary CA (certificate authority) certificates to confirm that our certificate is valid.

 *To update your certificates:*

1. ownload the GoDaddy CA bundle from [https://certs.godaddy.com/anonymous/repository.pki](https://certs.godaddy.com/anonymous/repository.pki) (grab the one called `"gd\_bundle-g2-g1.crt"`).
1. Save that on your server.
1. Tell Postfix where to find it by adding or editing the following line in `/etc/postfix/` [main.cf](http://main.cf/): `"smtp\_tls\_CAfile = /etc/postfix/ssl/gd\_bundle-g2-g1.crt"`
1. Restart Postfix to make the change take effect.

 If the mail server communicates with more than just us, add this certificate to your existing CA bundle (frequently called `ca-bundle.crt`).

{% anchor h2 %}	Additional Resources
{% endanchor h2 %}	
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/getting-started/getting-started-smtp.html)
- [Integrating with SMTP]({{root_url}}/for-developers/getting-started/integrating-with-the-smtp-api.html)
- [Building an SMTP Email]({{root_url}}/for-developers/getting-started/building-an-smtp-email.html)
