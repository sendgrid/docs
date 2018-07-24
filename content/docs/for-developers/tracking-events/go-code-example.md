---
layout: page
weight: 10
title: Go
navigation:
  show: true
---

{% anchor h2 %}	Parse Webhook
{% endanchor %}	
<call-out>

We recommend using our official Go SDK, our client library with full documentation, when integrating with <a href="https://github.com/sendgrid/sendgrid-go/tree/master/helpers/inbound">SendGrid's Inbound Parse Webhook</a>.

</call-out>

In this example, we want to parse all emails at *address*@email.sendgrid.biz and post the parsed email to http://sendgrid.biz/upload

Given this scenario, the following are the parameters you would set at the [Parse API settings page]({{site.site_url}}/developer/reply):

```
Hostname: email.sendgrid.biz
```

```
URL: http://sendgrid.biz/upload
```

 To test this scenario, we sent an email to example@example.com and created the following code:

```go

package main

import (
        "fmt"
        "net/http"
        "io/ioutil"
        "log"
        "github.com/sendgrid/sendgrid-go"

)

func Parse (w http.ResponseWriter, req *http.Request) {
        //Get Email Values
        to := req.FormValue("from")
        subject := req.FormValue("subject")
        body:= req.FormValue("text")

        //Get Uploaded File
        file, handler, err := req.FormFile("attachment1")
        if err != nil {
                fmt.Println(err)
        }
        data, err := ioutil.ReadAll(file)
        if err != nil {
                fmt.Println(err)
        }
        err = ioutil.WriteFile(handler.Filename, data, 0777)
        if err != nil {
                fmt.Println(err)
        }
}

func main() {
        http.HandleFunc("/upload", Parse)
        err := http.ListenAndServe(":3000", nil)
        if err != nil {
                log.Fatal("ListenAndServe: ", err)
        }
}

```
