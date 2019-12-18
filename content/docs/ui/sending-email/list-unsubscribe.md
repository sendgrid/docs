---
layout: page
weight: 0
title: List-Unsubscribe
group: tracking
seo:
  title: List-Unsubscribe
  description: Include the List-Unsubscribe header to provide your recipients with an unsbuscribe link next to the From address used to deliver mail.
  keywords: unsubscribe, delivery, reputation, tracking
navigation:
  show: true
---

[List-Unsubscribe](https://sendgrid.com/blog/list-unsubscribe/) is a small piece of text that can be inserted in the header section of your email. The List-Unsubscribe header will insert an “unsubscribe” button, or link, next to the From address at the top of your email. A recipient can click this link to notify you that they would like to unsubscribe from your emails.

```json
{
  "List-Unsubscribe": "<mailto:unsubscribeexampexample@example.com>, <http://www.unsubscribe.example.com/>"
}
```

![List-Unsubscribe Email Example]({{root_url}}/img/list_unsubscribe_1.png "List-Unsubscribe Email Example")

<call-out type="warning">

It is important to note that the list-unsubscribe header is not a complete replacement for the standard unsubscribe functionality that should be included in the body of your email. For more information on adding unsubscribe links to the body of your email, see our [Unsubscribe Groups documentation]({{root_url}}/ui/sending-email/unsubscribe-groups/).

</call-out>

### SendGrid’s Subscription Tracking

If you enable SendGrid’s [subscription tracking](https://app.sendgrid.com/settings/tracking) feature, SendGrid will automatically insert the List-Unsubscribe header in all of your text and HTML emails— placing an unsubscribe link in all of your emails.

Alternatively, you can place the substitution tag [unsubscribe] anywhere in the body of your email to specify the exact location where you want the unsubscribe link to appear. You may customize this tag and the message inserted during the substitution. For more information, see our [subscription tracking documentation](https://sendgrid.com/docs/ui/account-and-settings/tracking/).

It is possible to use the List-Unsubscribe header even if you do not want to use subscription tracking. This is useful for users who want to provide their recipients an easy way to unsubscribe from their emails without relying on SendGrid’s tracking features. Continue reading below for an explanation of the List-Unsubscribe header, and how you can use it when sending email via SendGrid.

## How does the List-Unsubscribe header work?

The List-Unsubscribe header provides two methods of unsubscribing users: an email unsubscribe, and a web unsubscribe. One, or both, of these methods may be used.

### Email Unsubscribe: mailto

The mailto portion of the List-Unsubscribe header allows you to specify an email address that will receive the unsubscribe request. In other words, when a recipient clicks the “unsubscribe” link in your email, the recipient’s mail client will send an email to this address.

**It is your responsibility to receive and process these generated emails**.

### Web Unsubscribe: http

The http portion of the List-Unsubscribe header allows you to specify a URL that will receive a POST whenever someone clicks the unsubscribe link in your email.

<call-out type="warning">

Failure to honor your recipients’ unsubscribe requests may do more than damage your sender reputation. To learn more about deliverability and compliance, see our [2019 Email Deliverability Guide](https://sendgrid.com/blog/sendgrids-2019-email-deliverability-guide/).

</call-out>

## Which method should I use?

You must include at least the **mailto** portion of the List-Unsubscribe header, since some services only support this portion (iOS, for example). However, many inbox providers and mail clients honor both methods. To ensure that the greatest number of your recipients have the ability to unsubscribe from your emails, thus protecting your reputation as a sender, we recommend including both **mailto** and **http**.

Not honoring your recipients’ unsubscribe requests could not only harm your sender reputation, but could also violate legislation laid out in [CAN-SPAM](https://sendgrid.com/docs/glossary/can-spam/), [CASL](https://sendgrid.com/blog/canadian-anti-spam-law-need-know/), and other legislation. For more information about deliverability best practices and compliance, please visit our [Deliverability Overview](https://sendgrid.com/docs/ui/sending-email/deliverability/).

## Examples

### Using List-Unsubscribe with v3 Mail Send

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "example@example.com"
        }
      ],
      "subject": "Your subject line here"
    }
  ],
  "from": {
    "email": "example@example.com"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "Hello, World!"
    }
  ],
  "headers": {
    "List-Unsubscribe": "<mailto:unsubscribeexampexample@example.com>, <http://www.unsubscribe.example.com>"
  }
}
```

### Using List-Unsubscribe with v2 Mail Send

```
api_user=your_sendgrid_username&
api_key=your_sendgrid_password&
to=destination@example.com&
toname=Destination&
subject=Example_Subject&
text=testingtextbody&
from=info@domain.com&
"headers": {"List-Unsubscribe": "<mailto:unsubscribeexampexample@example.com>, <http://www.unsubscribe.example.com>"}
```

### List-Unsubscribe with SMTP

```json
{
  "List-Unsubscribe": "<mailto:unsubscribeexampexample@example.com>, <http://www.unsubscribe.example.com/>"
}
```
