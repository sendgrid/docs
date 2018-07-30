---
seo:
  title: Section Tags
  description: Section tags allow you to substitute in content in an SMTP message.
  keywords: SMTP, send email, section tags
title: Section Tags
group: smtp
weight: 10
layout: page
navigation:
  show: true
---

Section tags allow you to substitute in content in an SMTP message. Section tags are similar to [substitution tags]({{root_url}}/for-developers/sending-email/substitution-tags.html) but are specific to the message, and not the recipient. You have to have a substitution tag value for **each** recipient, but you can have any number of section tags. Section tags can then contain Substitution tags for the recipient if needed. Section tags have to be contained within a Substitution tag since SendGrid needs to know which data to populate for the recipient.
See the [Section Tag Example Walkthrough](#-Section-Tag-Example-Walkthrough) below.

It's possible & acceptable to use only Substitution tags. However, that method is not [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself), and you may come against [message size limitations]({{root_url}}/help-support/getting-started/how-to-send-email.html).

* * * * *

The format of the SMTP API section tag has the form:
```json
{
  "section": {
    ":sectionName1": "section 1 text",
    ":sectionName2": "section 2 text"
  }
}
```

<call-out>

How you flag your section tags may depend on the library you use to create your SMTP connection, the language you are writing your code in, or any intermediate mail servers that your servers will send mail through. In some cases `-subVal-` may be the best choice while in other cases, `%subVal%`, `#subVal#`, or `:subVal` may make more sense. The flag doesn't matter, as long as it's a unique string.

</call-out>

<call-out type="warning">

Do not use spaces inside your section or substitution tags! For example: `%first name%`. The space breaks the string.

</call-out>

<call-out type="warning">

Do not nest section tags in sections - this causes your section to not be replaced.

</call-out>

* * * * *

## 	Section Tag Walkthrough
 	
Message body sent to SendGrid:

```html
<html>
 <body>
   Hi :salutation,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    :event_details.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
```

The accompanying X-SMTPAPI JSON header would look like:

```json
{
  "to": [
    "example@example.com",
    "bob@bar.com",
    "example@example.com",
    "example@example.com"
  ],
  "sub": {
    ":salutation": [
      ":female",
      ":male",
      ":neutral"
    ],
    ":name": [
      "Alice",
      "Bob",
      "Casey"
    ],
    ":event_details": [
      ":event1",
      ":event2",
      ":event1"
    ],
    ":event_date": [
      "Jan 1",
      "Feb 14",
      "Aug 11"
    ]
  },
  "section": {
    ":male": "Mr. :name",
    ":female": "Ms. :name",
    ":neutral": ":name",
    ":event1": "New User Event on :event_date",
    ":event2": "Veteran User Appreciation on :event_date"
  }
}
```

Alice receives:
```html
<html>
 <body>
   Hi Ms. Alice,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    New User Event on Jan 1.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
```

Bob receives:
```html
<html>
 <body>
   Hi Mr. Bob,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    Veteran User Appreciation on Feb 14.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
```

Casey receives:
```html
<html>
 <body>
   Hi Casey,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    New User Event on Aug 11.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
```

## 	Additional Resources
 	
- [Substitution Tags]({{root_url}}/for-developers/sending-email/substitution-tags.html)
- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/getting-started/getting-started-smtp.html)
- [Integrating with SMTP]({{root_url}}/for-developers/getting-started/integrating-with-the-smtp-api.html)
- [Building an SMTP Email]({{root_url}}/for-developers/getting-started/building-an-smtp-email.html)
