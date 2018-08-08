---
seo:
  title: Substitution Tags
  description: Section tags allow you to substitute in content for individual recipients in an SMTP message.
  keywords: SMTP, send email, Substitution tags
title: Substitution Tags
group: smtp
weight: 10
layout: page
navigation:
  show: true
---

Substitution tags allow you to generate dynamic content for each recipient on your list. When you send to a list of recipients over SMTP API, you can specify substitution tags specific to each recipient. For example, a first name that will then be inserted into an opening greeting like the following, where each recipient sees -firstName- replaced with their first name.

```html
"Dear -firstName-"
```

These tags can also be used in more complex scenarios. For example, you could use a -customerID- to build a custom URL that is specific to that user.


### A customer specific ID can replace -customerID- in the URL within your email
```html
<a href="http://example.com/customerOffer?id=-customerID-">Claim your offer!</a>
```

<call-out>

Substitution tags will work in the Subject line, body of the email and in [Unique Arguments]({{root_url}}/for-developers/sending-email/unique-arguments/).

</call-out>

<call-out>

Substitutions are limited to 10000 bytes per personalization block.

</call-out>


How you format your substitution tags may depend on the library you use to create your SMTP connection, the language you are writing your code in, or any intermediate mail servers that your servers will send mail through. In some cases -subVal- may be the best choice while in other %subVal% or #subVal# may make more sense. It is best to avoid characters that have special meaning in HTML, such as <,>, and &. These might end up encoded and will not be properly substituted.



<call-out type="warning">

Do not use spaces inside your substitution tags, for example: `%first name%`

</call-out>

<call-out type="warning">

Do not nest substitution tags in substitutions as they will fail and your substitution will not take place.

</call-out>

## 	Substitution Tag Example

Email HTML content:
```html
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
       Thank you for your interest in our products. I have set up an appointment to call you at -time- EST to discuss your needs in more detail. If you would like to reschedule this call, please visit the following link: `<a href="http://example.com/reschedule?id=-customerID-">reschedule</a>`

                Regards,

                -salesContact-
                -contactPhoneNumber-<br>
    </p>
  </body>
</html>
```

<p>An accompanying SMTP API JSON header might look something like this:</p>

```json
{
  "to": [
    "example@example.com",
    "example@example.com"
  ],
  "sub": {
    "-name-": [
      "John",
      "Jane"
    ],
    "-customerID-": [
      "1234",
      "5678"
    ],
    "-salesContact-": [
      "Jared",
      "Ben"
    ],
    "-contactPhoneNumber-": [
      "555.555.5555",
      "777.777.7777"
    ],
    "-time-": [
      "3:00pm",
      "5:15pm"
    ]
  }
}
```

The resulting email for John would look like this:

```html
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
       Thank you for your interest in our products. I have set up an appointment to call you at 3:00 pm EST to discuss your needs in more detail. If you would like to reschedule this call, please visit the following link:
      <a href="http://example.com/reschedule?id=1234">reschedule</a>
      Regards,

      Jared
      555.555.5555
  </body>
</html>
```

In contrast, the resulting email for Jane will look like the following, with her specific values replaced in for each tag:

```html
<html>
  <head></head>
  <body>
  <p>Hello Jane,<br>
       Thank you for your interest in our products. I have set up an appointment to call you at 5:15pm EST to discuss your needs in more detail. If you would like to reschedule this call please visit the following link:
   <a href="http://example.com/reschedule?id=5678">reschedule</a>
    Regards,

    Ben
    777.777.7777
  </body>
</html>
```

## 	SendGrid Defined Substitution Tags
 	While the tags above are tags that you define at the time of your send in the SMTPAPI headers, SendGrid also offers [Unsubscribe Groups tags]({{root_url}}/knowledge-center/sending-email/create-and-edit-transactional-templates/) that have been pre-defined for you. You can use these tags within the content of your email, and you do not have to and should not, define them.

## 	Additional Resources

- [Section Tags]({{root_url}}/for-developers/sending-email/section-tags/)
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
- [Integrating with SMTP]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
- [Building an SMTP Email]({{root_url}}/for-developers/sending-email/building-an-smtp-email/)
