---
layout: page
weight: 0
title: Java
group: api-v3
navigation:
  show: true
---
<call-out>

We recommend using SendGrid Java, our client library, [available on Github](https://github.com/sendgrid/sendgrid-java), with full documentation.

</call-out>

<call-out>

Do you have an [API Key](https://app.sendgrid.com/settings/api_keys) yet? If not, go get one. You're going to need it to integrate!

</call-out>

## Using SendGrid's Java Library
```java
// using SendGrid's Java Library
// https://github.com/sendgrid/sendgrid-java
import com.sendgrid.*;
import java.io.IOException;

public class Example {
  public static void main(String[] args) throws IOException {
    Email from = new Email("test@example.com");
    String subject = "Sending with SendGrid is Fun";
    Email to = new Email("test@example.com");
    Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
    Mail mail = new Mail(from, subject, to, content);

    SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
    Request request = new Request();
    try {
      request.setMethod(Method.POST);
      request.setEndpoint("mail/send");
      request.setBody(mail.build());
      Response response = sg.api(request);
      System.out.println(response.getStatusCode());
      System.out.println(response.getBody());
      System.out.println(response.getHeaders());
    } catch (IOException ex) {
      throw ex;
    }
  }
}
```
