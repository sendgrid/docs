---
layout: page
weight: 0
title: v3 API Kotlin Code Example
group: api-v3
navigation:
  show: true
---
<call-out>

We recommend using SendGrid Java, our client library, [available on GitHub](https://github.com/sendgrid/sendgrid-java), with full documentation.

</call-out>

<call-out>

Do you have an [API Key](https://app.sendgrid.com/settings/api_keys) yet? If not, go get one. You're going to need it to integrate!

</call-out>

## Using SendGrid's Java Library
```kotlin
// using SendGrid's Java Library
// https://github.com/sendgrid/sendgrid-java
import com.sendgrid.*;
import java.io.IOException;

class Example {
  private fun sendEmail() {

        val sendgrid = SendGrid("SENDGRID_APIKEY")
        val email = SendGrid.Email()

        email.addTo("test@sendgrid.com")
        email.setFrom("you@youremail.com")
        email.setSubject("Sending with SendGrid is Fun")
        email.setHtml("and easy to do anywhere, even with Kotlin")

        val response = sendgrid.send(email)
  }
}
```
