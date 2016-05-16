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
