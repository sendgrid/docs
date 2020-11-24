---
seo:
  title: Building an X-SMTPAPI Header
  description: Learn how to build email content, add recipients and schedule your send.
  keywords: SMTP, send email, integrate, building, filters, scheduling, substitution, suppression groups, unique arguments, recipients, X-SMTPAPI
title: Building an X-SMTPAPI Header
group: smtp
weight: 949
layout: page
navigation:
  show: true
---

Now that you've [sent a test SMTP email with Telnet]({{root_url}}/for-developers/sending-email/getting-started-smtp/), and [integrated with SendGrid]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/), it's time to build content.

## Getting started building

The Twilio SendGrid SMTP service allows you to pass SendGrid a JSON string with as many SMTP objects as you want. This functionality is made possible by including a header named X-SMTPAPI. This page provides instructions for using the X-SMTPAPI to modify and control your mail send.

### Limitations

The X-SMTPAPI is a powerful way to modify your SMTP messages. However, there are several things to keep in mind when using the header.

- Ensure that you are sending just ONE X-SMTPAPI header per SMTP transaction. Failure to do so, may cause unwanted consequences with inconsistent behavior.
- There is a hard limit of 10,000 addresses in a multiple recipient email. However, the best practice is to split large jobs into separate transactions of approximately 1,000 recipients, which allows better processing load distribution. If you have a large number of additional substitutions or sections in the headers, it is best to split the send into even smaller groups.
- When using the X-SMTPAPI header to send to multiple recipients, you cannot use SMTP's standard RCPT TO command to also send to multiple recipients. Doing so can generate duplicate messages to the addresses listed in both the X-SMTPAPI "to" field and the RCPT list. For more information, see [RFC 5321](https://tools.ietf.org/html/rfc5321).
- Ensure that the header is limited to a maximum total line length of 1,000 characters. Failure to do this can cause intermediate Mail Transfer Agents (MTAs) to split the header on non-space boundaries, which causes inserted spaces in the final email. If your email is going through another MTA before reaching SendGrid, it is likely that the other MTA will have an even lower setting for maximum header length and may truncate the header.
- When using the X-SMTPAPI header, if our system encounters a parsing error, the message will be bounced to the address specified in the MAIL FROM portion of the SMTP session. The MAIL FROM address is re-written when we send the email for final delivery, so it is safe to set the MAIL FROM to an address that can receive the bounces and alert you to any errors.
- When sending Unicode characters via the SMTP API, you should escape these characters using the `\u` escape character. For example, the Unicode `á` character will look like this: `\u00E1`.

## Customizing your send (filters)

```json
{
  "to": ["example@example.com", "example@example.com"],
  "sub": {
    "%name%": ["Ben", "Joe"],
    "%role%": ["%sellerSection%", "%buyerSection%"]
  },
  "category": ["Orders"],
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

You can customize the emails you send via SMTP by using different settings (also referred to as [filters](#smtp-filters)).

The X-SMTPAPI header is a JSON-encoded object (key-value pairs) consisting of several sections. Below are examples of JSON strings using each section.

- [Scheduling Your Send](#scheduling-your-send)
- [BCC Behavior](#bcc-behavior)
- [Substitution Tags](#substitution-tags)
- [Suppression Groups](#suppression-groups)
- [Categories](#categories)
- [Unique Arguments](#unique-arguments)
- [SMTP Filters](#smtp-filters)
- [IP Pools](#ip-pools)

### Scheduling Your Send

Schedule your email send time using the `send_at` parameter within your X-SMTPAPI header. Set the value of `send_at` formatted as a [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time).

```json
{
  "send_at": 1409348513
}
```

For more information, see our [scheduling parameters documentation]({{root_url}}/for-developers/sending-email/scheduling-parameters/).

### BCC behavior

It is possible to simulate blind carbon copy (BCC) behavior using SMTP with or without the X-SMTPAPI header. The concept of BCC exists outside of SMTP as defined by [RFC 5321](https://tools.ietf.org/html/rfc5321).

When sending email with SMTP, all recipients are listed using SMTP's RCPT (recipient) command. In addition to the sender, which is set with SMTP's MAIL command, these RCPT addresses can be thought of as part of the message envelope—they instruct sending email servers where to deliver the message. These addresses are not designated as carbon copy (CC), BCC, or another type of recipient—they are all just recipients.

The SMTP DATA command follows the MAIL and RCPT commands in an SMTP transaction. The DATA command allows you to insert message headers, which can be thought of as portions of the email body or the text inside the _envelope_. The DATA command is what allows you to create BCC behavior using SMTP without the X-SMTPAPI.

#### BCC without the X-SMTPAPI header

The following code shows an example of an SMTP transaction with BCC behavior. How this example achieves BCC behavior is explained following the example.

```shell
235 Authentication successful
MAIL FROM:tiramisu@example.com
250 Sender address accepted
RCPT TO:person1@sendgrid.com
250 Recipient address accepted
RCPT TO:person2@sendgrid.com
250 Recipient address accepted
DATA
354 Continue
From: "Tira Misu" <tiramisu@example.com>
To: <person1@sendgrid.com>
Subject: Test message subject
This is the test message body.
.
250 Ok: queued as Yo60h6C5ScGPeP5fUWU3Kw
```

Notice that there are two recipients designated by RCPT commands, "person1@sendgrid.com" and "person2@sendgrid.com." These addresses are both part of the message envelope.

In the DATA command, there is also a "To" header. This header lists only "person1@sendgrid.com." This is where differentiating between the envelop "To" (RCPT TO) and header "To" becomes important. The header "To" set in the DATA command does not tell the sending email server to deliver the message to any address, only the RCPT or envelop "To" does this. The header "To" instead provides recipients with a friendly display of any addresses included in the "To" header.

To achieve BCC behavior, you can deliver a message to a recipient by adding them in a RCPT but omit their address from the header "To". The message will be delivered to each RCPT address, but only the addresses listed in the header "To" will be visible to other recipients.

In the previous code sample, "person2@sendgrid.com" will be treated like a BCC address because that address is not included in the header "To." The "person1@sendgrid.com" is listed in the header "To" and will therefore be visible to other recipients of the message. This means both recipients receive the message, but recipient2@sendgrid.com is not visible to recipient1@sendgrid.com while recipient1@sendgrid.com is visible to recipient2@sendgrid.com.

By omitting any addresses from the header "To," you will be hiding them from the other recipients and therefore treating them like BCC recipients.

#### BCC with the X-SMTPAPI

The following code shows an example of an SMTP transaction with BCC behavior using the X-SMTPAPI header. How this example achieves BCC behavior is explained following the example.

```shell
235 Authentication successful
MAIL FROM:tiramisu@example.com
250 Sender address accepted
RCPT TO:sender@sendgrid.com
250 Recipient address accepted
DATA
354 Continue
x-smtpapi: {"to":["person1@sendgrid.com","person2@sendgrid.com"]}
From: "Tira Misu" <tiramisu@example.com>
Subject: This is a test
Body of test message.
.
250 Ok: queued as uKIPst3rQtCl_hLVB9RvEw
```

Using the X-SMTPAPI header achieves BCC behavior in a slightly different way than by omitting addresses from a "To" header. The X-SMTPAPI header's "to" field allows you to set multiple recipients in a JSON array.

```json
{
  "to": ["person1@sendgrid.com", "person2@sendgrid.com"]
}
```

When SendGrid receives the message and parses the X-SMTPAPI header, it will treat each recipient address in the X-SMTPAPI "to" field as a separate RCTP TO or _envelope_ address. This means each recipient will receive the same DATA content, but with an added friendly display "to" header set to its own address (Each recipient sees only their own address). Recipients will therefore not be visible to other recipients of the message. A single recipient in the X-SMTPAPI "to" field in the previous code sample will eventually look something like the following example.

```shell
235 Authentication successful
MAIL FROM:test@example.com
250 Sender address accepted
RCPT TO:person1@sendgrid.com
250 Recipient address accepted
```

The addresses in the X-SMTPAPI "to" field are not duplicated in a header "To," for all recipients. Only the individual recipient is included in the header "To" for each messages (Each recipient sees only their own address). The additional recipients will therefore not be visible to each recipient of the message.

### Substitution Tags

Substitution tags allow you to dynamically insert specific content relevant to each of your recipients, such as their first and last names.

For example, to use a substitution tag to replace the first name of your recipient, insert the tag {{name}} in the HTML of your message:

```html
<html>
  <head></head>
  <body>
    <p>
      Hello {{name}},<br />
      The body of your email would go here...
    </p>
  </body>
</html>
```

To define the value that will replace the {{name}} tag, define the following in your X-SMTPAPI header:

```json
{
  "to": ["john.doe@example.com", "jan.doe@example.com"],
  "sub": {
    "{{name}}": ["John", "Jane"]
  }
}
```

For more information, see our [substitution tags documentation]({{root_url}}/for-developers/sending-email/substitution-tags/).

### Section Tags

<call-out type="warning">

This feature has been deprecated.

</call-out>

Section tags are similar to substitution tags, but rather than replace tags with content for each recipient; section tags allow you to replace a tag with more generic content— like a salutation.

For more information, see our [section tags documentation]({{root_url}}/for-developers/sending-email/section-tags/).

### Suppression Groups

You can easily specify an unsubscribe group for an email sent via SMTP by including the `asm_group_id` parameter in your X-SMTPAPI header. Simply set the value of `asm_group_id` to the numerical ID of the group you would like to use.

```json
{
  "asm_group_id": 1
}
```

For more information, see our [suppression groups documentation]({{root_url}}/for-developers/sending-email/suppressions/).

### Categories

<call-out type="warning">

This information will be stored as a “Not PII” field and may be used for counting or other operations as SendGrid runs its systems. These fields generally cannot be redacted or removed. You should take care not to place PII in this field. SendGrid does not treat this data as PII, and its value may be visible to SendGrid employees, stored long-term, and may continue to be stored after you’ve left SendGrid’s platform.

</call-out>

Categories allow you to track your emails according to broad topics that you define, like "Weekly Newsletter" or "Confirmation Email". Simply define the category by using the `category` parameter within your X-SMTPAPI header:

```json
{
  "category": "Example Category"
}
```

For more information, see our [categories documentation]({{root_url}}/for-developers/sending-email/categories/).

<call-out>

Categories should only be used for broad topics. To attach unique identifiers, please use [unique arguments]({{root_url}}/for-developers/sending-email/unique-arguments/).

</call-out>

### Unique Arguments

<call-out type="warning">

This information will be stored as a “Not PII” field and may be used for counting or other operations as SendGrid runs its systems. These fields generally cannot be redacted or removed. You should take care not to place PII in this field. SendGrid does not treat this data as PII, and its value may be visible to SendGrid employees, stored long-term, and may continue to be stored after you’ve left SendGrid’s platform.

</call-out>

Use unique arguments to track your emails based on specific identifiers unique to individual messages. Unique arguments can be retrieved via SendGrid's [Event Webhook]({{root_url}}/for-developers/tracking-events/event/) or your [email activity page]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/).

For more information, see our [unique arguments documentation]({{root_url}}/for-developers/sending-email/unique-arguments/).

### SMTP Filters

SMTP Filters can be used for turning on or off a number of different features for your sending. For example, you can turn on open or click tracking on a per-send basis.

For more information, see our [SMTP Filters documentation]({{root_url}}/for-developers/sending-email/smtp-filters/).

### IP Pools

IP Pools can be used to send you mail over a specific group of IPs. It is common to create different pools for transactional and marketing email.

For more information, see our [IP Pools documentation]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_pools.html#sidebar).

```json
{
  "ip_pool": "pool_name"
}
```

## Additional Resources

- [How to send email]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)
- [Getting started with the API]({{root_url}}/api-reference/)
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
- [Integrating with SMTP]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
