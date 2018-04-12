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

{% info %}
The library does not officially support the V2 API, but you can use V2 with an older version of the library. For more information, see [Continue Using V2 in Go](https://github.com/sendgrid/sendgrid-go/blob/master/TROUBLESHOOTING.md#v2).
{% endinfo %}

<page-anchor el="h2"> Using SendGrid's Go Library </page-anchor>
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
