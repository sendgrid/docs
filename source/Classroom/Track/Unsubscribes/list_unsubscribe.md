---
st:
  published_at: 2016-12-22
  type: Classroom
seo:
  title: List-Unsubscribe
  description:
  keywords:
title: List-Unsubscribe
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
What is List-Unsubscribe?
{% endanchor %}

[List-Unsubscribe](http://www.list-unsubscribe.com/) is a small piece of text that can be inserted in the header section of your email. The List-Unsubscribe header will insert an "unsubscribe" button, or link, in your email. A recipient can click this link to notify you that they would like to unsubscribe from your emails.

{% codeblock lang:json %}
{
"List-Unsubscribe": "<mailto:unsubscribe@example.com>, <http://www.unsubscribe.example.com/>"
}
{% endcodeblock %}

{% anchor h3 %}
SendGrid's Subscription Tracking
{% endanchor %}

If you enable SendGrid's [subscription tracking](https://app.sendgrid.com/settings/tracking) feature, SendGrid will automatically insert the List-Unsubscribe header in all of your text and HTML emails— placing an unsubscribe link in all of your emails.

Alternatively, you can place the substitution tag _[unsubscribe]_ anywhere in your email to specify the exact location where you want the unsubscribe link to appear. You may customize this tag and with the message inserted during the substitution. For more information, see our [subscription tracking documentation]({{root_url}}/User_Guide/Settings/tracking.html#-Subscription-Tracking).

It is possible to use the List-Unsubscribe header even if you do not want to use subscription tracking. Continue reading below for an explanation of the header, and how to use it when sending email via SendGrid.

{% anchor h2 %}
How does the List-Unsubscribe header work?
{% endanchor %}

The List-Unsubscribe header provides two methods of unsubscribing users: an email unsubscribe, and a web unsubscribe. One, or both, of these methods may be used.

{% anchor h3 %}
Email Unsubscribe: mailto
{% endanchor %}

The mailto portion of the List-Unsubscribe header allows you to specify an email address that will receive the unsubscribe request. In other words, when a recipient clicks the "unsubscribe" link in your email, the recipient's email client will send an email to this address.

**It is your responsibility to receive and process these generated emails.**

{% anchor h3 %}
Web Unsubscribe: http
{% endanchor %}

The http portion of the List-Unsubscribe header allows you to specify a website that the recipient will be taken to when they click the "unsubscribe" link in your email.

It is your responsibility to build a website where your users can submit a request to be removed from your mailing list.

{% warning %}
Failure to honor your recipients' unsubscribe requests may do more than damage your sender reputation. To learn more about deliverability and compliance, click [here]({{root_url}}/Classroom/Deliver/index.html#-Compliance).
{% endwarning %}

{% anchor h2 %}
Which method should I use?
{% endanchor %}

It is recommended that you include both the _mailto_ and the _http_ portion of the List-Unsubscribe header because not every email client supports both methods. To ensure that all of your recipients have the ability to unsubscribe from your emails, thus protecting your reputation as a sender, do not leave either portion out of your header.

Not honoring your recipients' unsubscribe requests could not only harm your sender reputation, but could also violate legislation laid out in [CAN-SPAM]({{root_url}}/Glossary/can_spam.html), [CASL](https://sendgrid.com/blog/canadian-anti-spam-law-need-know/), and other legislation. For more information about deliverability best practices and compliance, please visit our [Deliverability Overview]({{root_url}}/Classroom/Deliver/index.html#-Best-Practices).

{% anchor h2 %}
Examples
{% endanchor %}

{% anchor h3 %}
Using List-Unsubscribe with v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
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
    "List-Unsubscribe": "<mailto:unsubscribe@example.com>,
    <http://www.unsubscribe.example.com>"
  }
}
{% endcodeblock %}

{% anchor h3 %}
Using List-Unsubscribe with v2 Mail Send
{% endanchor %}

{% codeblock %}
api_user=your_sendgrid_username&
api_key=your_sendgrid_password&
to=destination@example.com&
toname=Destination&
subject=Example_Subject&
text=testingtextbody&
from=info@domain.com&
"headers": {"List-Unsubscribe": "<mailto:unsubscribe@example.com>, <http://www.unsubscribe.example.com>"}
{% endcodeblock %}

{% anchor h3 %}
List-Unsubscribe with SMTP
{% endanchor %}

{% codeblock %}
smtp example here...
{% endcodeblock %}
