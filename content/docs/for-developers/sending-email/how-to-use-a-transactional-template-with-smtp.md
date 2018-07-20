---
seo:
  title: How to use a Transactional Template with the SMTP API
  description: Learn how to send a transactional template with the SMTP API.
  keywords: SMTP, send email, integrate, building, filters, scheduling, substitution, suppression groups, unique arguments, recipients, transactional template
title: How to use a Transactional Template with the SMTP API
weight: 949
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Enabling a Template
{% endanchor %}

To use a transactional template when you send, enable the `templates`
filter and set the `template_id` to one of your transactional templates.

Example
```json
{
  "filters": {
    "templates": {
      "settings": {
        "enable": 1,
        "template_id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f"
      }
    }
  }
}
```

You can use this JSON in the `X-SMTPAPI` header of an SMTP message, or in
the `x-smtpapi` parameter of a [Web API v2 mail send]({{root_url}}/API_Reference/Web_API/mail.html#-send) call.

If you are using the [Web API v3 mail send endpoint]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html), you can specify which transactional template you would like to use simply by setting the template ID in the `template_id` parameter of your JSON payload.

<call-out>

Make sure that the version of the template you want to use is set to active
by using the [activate endpoint]({{ root_url }}/API_Reference/Web_API_v3/Transactional_Templates/versions.html#-POST) or by activating it in the
UI.

</call-out>

* * * * *

{% anchor h2 %}
Body and Subject Tags
{% endanchor %}

Enabling a transactional template means that the `subject` and `body`
content of your message will behave differently.

If you want only the message's content to be displayed, populate only the token in the template's field.
If you want only the template's content to be displayed, leave the message field (subject or body) empty, and the template will populate.

{% anchor h3 %}
Text or HTML Templates?
{% endanchor %}

<call-out>

It is best practice to provide content for both the ```html``` and the ```text``` properties in all of your emails.

</call-out>

The ```text``` property is substituted into the `<%body%>` of the text template and ```html``` is substituted into the `<%body%>` of the HTML template. If the ```text``` property is present, but not ```html```, then the resulting email will only contain the text version of the template, not the HTML version. The `<%subject%>` property is used for both Text and HTML templates.

* * * * *

{% anchor h2 %}
Substitutions and Sections
{% endanchor %}

You can use SMTP API
[substitution]({{root_url}}/for-developers/sending-email/substitution-tags.html)
and [section]({{root_url}}/for-developers/sending-email/section-tags.html)
tags in your template's subject and body content, and they will be replaced with the values
specified when you send the message.

For example, consider a template with a subject of `Dear :name, big sale on <%subject%>!` and following text content:

```html
<%body%>

Hello there :name!

You can buy it for only :price! Yay!
```

Now let's specify what to replace the `:name` and `:price` tags with,
using the SMTP API header:

```json
{
  "to": [
    "example@example.com",
    "bob@sendgrid.com"
  ],
  "sub": {
    ":name": [
      "Alice",
      "Bob"
    ],
    ":price": [
      "$4",
      "$4"
    ]
  },
  "category": [
    "Promotions"
  ],
  "filters": {
    "templates": {
      "settings": {
        "enable": 1,
        "template_id": "60414495-6787-441b-8b08-3979499bba7a"
      }
    }
  }
}
```

This combination of template and substitutions, when used with a message
that has a subject of `bacon` and a body of `Big news from Good Food
Company!` will produce the following email to Alice, and a separate
customized email for Bob.

```
Subject: Dear Alice, big sale on bacon!

Big news from Good Food Company!

Hello there Alice!

You can buy it for only $4! Yay!
```
