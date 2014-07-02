---
layout: page
title: Using Template Engine with SMTP API
navigation:
  show: true
---

{% anchor h2 %}
Enabling a Template
{% endanchor %}

To use a Template Engine template when you send, enable the `templates`
filter and set the `template_id` to one of your Template Engine templates.

Example
{% codeblock lang:json %}
{
    "filters": {
        "templates": {
            "settings": {
                "enabled": 1,
                "template_id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f"
            }
        }
    }
}
{% endcodeblock %}

You can use this JSON in the X-SMTPAPI header of an SMTP message, or in
the x-smtpapi parameter of a [mail.send API
call]({{root_url}}/API_Reference/Web_API/mail.html).

{% info %}
Make sure that the version of the template you want to use is set to active
by using the activate endpoint or by activating it in the
UI.
{% endinfo %}

{% anchor h2 %}
Body and Subject Tags
{% endanchor %}

Enabling a Template Engine template means that the `subject` and `body`
content of your message will behave differently. The
`<%body%>` token in your template's content will be replaced with
the value of the body provided in the API call or SMTP message.
Similarly, the `<%subject%>` token in the template's subject content
will be replaced.

{% anchor h2 %}
Substitutions and Sections
{% endanchor %}

You can use SMTP API
[substitution]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html)
and [section]({{root_url}}/API_Reference/SMTP_API/section_tags.html)
tags in your template's subject and body content, and they will be replaced with the values
specified when you send the message.

For example, consider a template with a subject of `Dear -name-, big sale on <%subject%>!` and following text content:

{% codeblock lang:html %}
<%body%>

Hello there -name-!

You can buy it for only -price-! Yay!
{% endcodeblock %}

Now let's specify what to replace the `-name-` and `-price-` tags with,
using the SMTP API header:

{% codeblock lang:json %}
{
  "to": [
    "brandon@sendgrid.com",
    "ben@sendgrid.com"
  ],
  "sub": {
    "-name-": [
      "Brandon",
      "Ben"
    ],
    "-price-": [
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
        "enabled": 1,
        "template_id": "60414495-6787-441b-8b08-3979499bba7a"
      }
    }
  }
}
{% endcodeblock %}

This combination of template and substitutions, when used with a message
that has a subject of `bacon` and a body of `Big news from Good Food
Company!` will produce the following email to Brandon, and a separate
customized email for Ben.

{% codeblock %}
Subject:
Dear Brandon, big sale on bacon!

Body:
Big news from Good Food Company!

Hello there Brandon!

You can buy it for only $4! Yay!
{% endcodeblock %}
