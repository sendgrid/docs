---
layout: page
weight: 0
title: Java
group: api-v2
navigation:
  show: true
---
<call-out>

We recommend using SendGrid Java, our client library, <a href="https://github.com/sendgrid/sendgrid-java">available on Github</a>, with full documentation.

</call-out>

<call-out>

The library does not officially support the V2 API, but you can use V2 with an older version of the library. For more information, see [Continue Using V2 in Java](https://github.com/sendgrid/sendgrid-java/blob/master/TROUBLESHOOTING.md#v2).

</call-out>

##  Using SendGrid's Java Library
```java
// using SendGrid's Java Library
// https://github.com/sendgrid/sendgrid-java
import com.sendgrid.*;

public class SendGridExample {
  public static void main(String[] args) {
    SendGrid sendgrid = new SendGrid("SENDGRID_APIKEY");

    SendGrid.Email email = new SendGrid.Email();

    email.addTo("test@sendgrid.com");
    email.setFrom("you@youremail.com");
    email.setSubject("Sending with SendGrid is Fun");
    email.setHtml("and easy to do anywhere, even with Java");

    SendGrid.Response response = sendgrid.send(email);
  }
}
```
