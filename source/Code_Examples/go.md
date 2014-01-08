---
layout: page
weight: 0
title: Go
navigation:
  show: true
---

This library allows you to quickly and easily send emails through SendGrid using Go. For full documentation please refer to the [GitHub Repo](https://github.com/sendgrid/sendgrid-go).



{% codeblock lang:go %}
package main

import (
    "fmt"
    "net/mail"
    "github.com/sendgrid/sendgrid-go"
)

func main() {
    sg := sendgrid.NewSendGridClient("sendgrid_user", "sendgrid_key")
    message := sendgrid.NewMail()
    message.AddTo("yamil@sendgrid.com")
    message.AddToName("Yamil Asusta")
    message.AddSubject("SendGrid Testing")
    message.AddText("WIN")
    message.AddFrom("yamil@sendgrid.com")
    if r := sg.Send(message); r == nil {
        fmt.Println("Email sent!")
    } else {
        fmt.Println(r)
    }
}
{% endcodeblock %}
***

## Installation

```bash
go get github.com/sendgrid/sendgrid-go
```

{% anchor h2 %}
Using the SendGrid Go Library 
{% endanchor %}

### Adding Recipients

{% codeblock lang:go %}
message := sendgrid.NewMail()
message.AddTo("example@sendgrid.com") // Returns error if email string is not valid RFC 5322

// or

address, _ := mail.ParseAddress("Example <example@sendgrid.com>")
message.AddRecipient(address) // Receives a vaild mail.Address
{% endcodeblock %}

### Adding BCC Recipients

Same concept as regular recipient excepts the methods are:

*   AddBCC
*   AddRecipientBCC

### Setting the Subject

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddSubject("New email")
{% endcodeblock %}

### Set Text or HTML

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddText("Body")

//or

message.AddHTML("<html><body>Stuff, you know?</body></html>")
{% endcodeblock %}
### Set From

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddFrom("example@lol.com")
{% endcodeblock %}
### Set File Attachments

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddAttachment("./stuff.txt")
{% endcodeblock %}

## SendGrid  [X-SMTPAPI](http://sendgrid.com/docs/API_Reference/SMTP_API/)

If you wish to use the X-SMTPAPI on your own app, you can use the [SMTPAPI Go library](https://github.com/sendgrid/smtpapi-go).

### [Substitution](http://sendgrid.com/docs/API_Reference/SMTP_API/substitution_tags.html)

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddSubstitution("key", "value")
{% endcodeblock %}

### [Section](http://sendgrid.com/docs/API_Reference/SMTP_API/section_tags.html)

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddSection("section", "value")
{% endcodeblock %}

### [Category](http://sendgrid.com/docs/Delivery_Metrics/categories.html)

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddSubstitution("category")
{% endcodeblock %}

### [Unique Arguments](http://sendgrid.com/docs/API_Reference/SMTP_API/unique_arguments.html)

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddUniqueArg("key", "value")
{% endcodeblock %}

### [Filter](http://sendgrid.com/docs/API_Reference/SMTP_API/apps.html)

{% codeblock lang:go %}
message := sendgrid.NewMail()

message.AddFilter("filter", "setting", "value")

{% endcodeblock %}
