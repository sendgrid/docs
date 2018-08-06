---
layout: page
weight: 0
title: v3 API Python Code Example
group: api-v3
navigation:
  show: true
---

<call-out>

We recommend using SendGrid Python, our client library, [available on Github](https://github.com/sendgrid/sendgrid-python), with full documentation.

</call-out>

<call-out>

Do you have an [API Key](https://app.sendgrid.com/settings/api_keys) yet? If not, go get one. You're going to need it to integrate!

</call-out>

## Using SendGrid's Python Library
```python
# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import sendgrid
import os
from sendgrid.helpers.mail import *

sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
from_email = Email("test@example.com")
to_email = Email("test@example.com")
subject = "Sending with SendGrid is Fun"
content = Content("text/plain", "and easy to do anywhere, even with Python")
mail = Mail(from_email, subject, to_email, content)
response = sg.client.mail.send.post(request_body=mail.get())
print(response.status_code)
print(response.body)
print(response.headers)
```
