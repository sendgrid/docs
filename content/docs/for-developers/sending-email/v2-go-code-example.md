---
layout: page
weight: 0
title: Go
group: api-v2
navigation:
  show: true
---
<call-out>

We recommend using SendGrid Go, our client library, <a href="https://github.com/sendgrid/sendgrid-go">available on Github</a>, with full documentation.

</call-out>

<call-out>

The library does not officially support the V2 API, but you can use V2 with an older version of the library. For more information, see [Continue Using V2 in Go](https://github.com/sendgrid/sendgrid-go/blob/master/TROUBLESHOOTING.md#v2).

</call-out>

##  Using SendGrid's Go Library  	```go
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
```
