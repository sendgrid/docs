---
seo:
  title: Building an SMTP Email
  description: Learn how to build email content, add recipients and schedule your send.
  keywords: SMTP, send email, integrate, building, filters, scheduling, substitution, suppression groups, unique arguments, recipients
title: Building an SMTP Email
group: smtp
weight: 949
layout: page
navigation:
  show: true
---
Now that you've sent a [sent a test SMTP email with Telnet]({{root_url}}/for-developers/sending-email/getting-started-smtp/), and [integrated with SendGrid]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/), it's time to build content.

## 	Getting started building

SMTP works by passing a JSON string with as many SMTP objects as you want to SendGrid. To do this, add the JSON string to your message under a header named "X-SMTPAPI" like this:

```json
{
  "to": [
    "example@example.com",
    "example@example.com"
  ],
  "sub": {
    "%name%": [
      "Ben",
      "Joe"
    ],
    "%role%": [
      "%sellerSection%",
      "%buyerSection%"
    ]
  },
  "section": {
    "%sellerSection%": "Seller information for: %name%",
    "%buyerSection%": "Buyer information for: %name%"
  },
  "category": [
    "Orders"
  ],
  "unique_args": {
    "orderNumber": "12345",
    "eventID": "6789"
  },
  "filters": {
    "footer": {
      "settings": {
        "enable": 1,
        "text/plain": "Thank you for your business"
      }
    }
  },
  "send_at": 1409348513
}
```

 ### 	Limitations

- There is a hard limit of 10,000 addresses in a multiple recipient e-mail. However, the best practice is to split up large jobs to around 1,000 recipients - this allows better processing load distribution. If you have a large number of additional substitutions or sections in the headers, it is best to split the send into even smaller groups.
- When using the X-SMTPAPI to send to multiple recipients, you cannot use the standard SMTP protocols "TO" field to send to multiple recipients because doing so can generate duplicate messages to the addresses listed in both. For more information, see [RFC 5321](https://tools.ietf.org/html/rfc5321).
- Ensure that the header is limited to a maximum total line length of 1,000 characters. Failure to do this can cause intermediate MTA's to split the header on non-space boundaries- this causes inserted spaces in the final e-mail. If your e-mail is going through another MTA before reaching SendGrid, it is likely to have an even lower setting for maximum header length and may truncate the header.
- When using the API, if our system encounters a parsing error, the message will be bounced to the address specified in the MAIL FROM portion of the SMTP session. The MAIL FROM address is re-written when we send the e-mail out for final delivery, so it is safe to set this to an address that can receive the bounces so that you will be alerted to any errors.
- When sending Unicode characters via the SMTP API, you should escape these characters using the `\u` escape character. When you do this, Unicode characters like ` á` becomes `\u00E1`.

## 	Customizing your send (filters)

You can customize the emails you send via SMTP by using different settings (also referred to as filters). Change these settings in the **X-SMTPAPI header**.

For example, to send a blind carbon copy (BCC) of your email to the address example@example.com, include the following in your X-SMTPAPI header:

```json
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
```

The X-SMTPAPI header is a JSON-encoded associative array consisting of several sections, below are examples of JSON strings using each section. Add this header to any SMTP message sent to SendGrid and the instructions in the header will be interpreted and applied to that message’s transaction. You can enable these sections with the X-SMTPAPI header:

- [Scheduling Your Send](#scheduling-your-send)
- [Substitution Tags](#substitution-tags)
- [Section Tags](#section-tags)
- [Suppression Groups](#suppression-groups)
- [Categories](#categories)
- [Unique Arguments](#unique-arguments)

 ### 	Scheduling Your Send

Schedule your email send time using the `send_at` parameter within your X-SMTPAPI header. Set the value of `send_at` to the [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).

```json
{
  "send_at": 1409348513
}
```

For more information, see our [scheduling parameters documentation]({{root_url}}/for-developers/sending-email/scheduling-parameters/).

 ### 	Substitution Tags

Substitution tags allow you to dynamically insert specific content relevant to each of your recipients, such as their first and last names.

For example, to use a substitution tag to replace the first name of your recipient, insert the tag {{name}} in the HTML of your message:

```html
<html>
  <head></head>
  <body>
    <p>Hello {{name}},<br>
        The body of your email would go here...
    </p>
  </body>
</html>
```

To define the value that will replace the {{name}} tag, define the following in your X-SMTPAPI header:

```json
{
  "to": [
    "john.doeexampexample@example.com",
    "example@example.com"
  ],
  "sub": {
    "{{name}}": [
      "John",
      "Jane"
    ]
  }
}
```

For more information, see our [substitution tags documentation]({{root_url}}/for-developers/sending-email/substitution-tags/).

 ### 	Section Tags

Section tags are similar to substitution tags, but rather than replace tags with content for each recipient; section tags allow you to replace a tag with more generic content— like a salutation.

For more information, see our [section tags documentation]({{root_url}}/for-developers/sending-email/section-tags/).

 ### 	Suppression Groups

You can easily specify an unsubscribe group for an email sent via SMTP by including the `asm_group_id` parameter in your X-SMTPAPI header. Simply set the value of `asm_group_id` to the numerical ID of the group you would like to use.

```json
{
  "asm_group_id": 1
}
```

For more information, see our [suppression groups documentation]({{root_url}}/for-developers/sending-email/suppressions/).

 ### 	Categories

Categories allow you to track your emails according to broad topics that you define, like "Weekly Newsletter" or "Confirmation Email". Simply define the category by using the `category` parameter within your X-SMTPAPI header:

```json
{
  "category": "Example Category"
}
```

For more information, see our [categories documentation]({{root_url}}/for-developers/sending-email/categories/)

<call-out>

Categories should only be used for broad topics. To attach unique identifiers, please use [unique arguments]({{root_url}}/for-developers/sending-email/unique-arguments/).

</call-out>

 ### 	Unique Arguments

Use unique arguments to track your emails based on specific identifiers unique to individual messages. Unique arguments can be retrieved via SendGrid's [Event Webhook]({{root_url}}/for-developers/tracking-events/event.html) or your [email activity page]({{root_url}}/help-support/analytics-and-reporting/email-activity-feed.html).

For more information, see our [unique arguments documentation]({{root_url}}/for-developers/sending-email/unique-arguments/).

## 	Additional Resources


- [How to send email]({{root_url}}/help-support/sending-email/how-to-send-email/)
- [Getting started with the API]({{root_url}}/api-reference/)
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/sending-email/sending-email-smtp/)
- [Integrating with SMTP]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
