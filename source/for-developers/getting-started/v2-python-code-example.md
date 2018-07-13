---
layout: page
weight: 0
title: Python
navigation:
  show: true
---

{% github sendgrid/sendgrid-python#example Python %}
We recommend using SendGrid Python, our client library, <a href="https://github.com/sendgrid/sendgrid-python">available on Github</a>, with full documentation.
{% endgithub %}

{% info %}
The library does not officially support the V2 API, but you can use V2 with an older version of the library. For more information, see [Continue Using V2 in Python](https://github.com/sendgrid/sendgrid-python/blob/master/TROUBLESHOOTING.md#v2).
{% endinfo %}

{% anchor h2 %} Using SendGrid's Python Library {% endanchor %}
{% codeblock lang:python %}
# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import sendgrid

client = sendgrid.SendGridClient("SENDGRID_APIKEY")
message = sendgrid.Mail()
 
message.add_to("test@sendgrid.com")
message.set_from("you@youremail.com")
message.set_subject("Sending with SendGrid is Fun")
message.set_html("and easy to do anywhere, even with Python")
 
client.send(message)
{% endcodeblock %}
