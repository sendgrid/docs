---
layout: page
title: Using Template Engine with SMTP API
navigation:
  show: true
---

To use a Template Engine template when you send, enable the `template`
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

Enabling a Template Engine template means that the `subject` and `body`
content of your message will behave differently. The
`<%body%>` token in your template's content will be replaced with
the value of the body provided in the API call or SMTP message.
Similarly, the `<%subject%>` token in the template's subject content
will be replaced.
