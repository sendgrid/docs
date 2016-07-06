---
layout: page
weight: 0
title: Go
navigation:
  show: true
---

{% github sendgrid/sendgrid-go#example golang %}
We recommend using SendGrid Go, our client library, <a href="https://github.com/sendgrid/sendgrid-go">available on Github</a>, with full documentation.
{% endgithub %}

{% anchor h2 %} Using SendGrid's Go Library {% endanchor %}
{% codeblock lang:go %}
// using SendGrid's Go Library
// https://github.com/sendgrid/sendgrid-go
package main

import (
	"github.com/sendgrid/sendgrid-go"
)

func main() {
	sg := sendgrid.NewSendGridClientWithApiKey("SENDGRID_APIKEY")

	message := sendgrid.NewMail()
	message.AddTo("test@sendgrid.com")
	message.SetFrom("you@youremail.com")
	message.SetSubject("Sending with SendGrid is Fun")
	message.SetHTML("and easy to do anywhere, even with Go")

	sg.Send(message)
}
{% endcodeblock %}
