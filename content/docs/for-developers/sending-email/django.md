---
layout: page
weight: 0
group: frameworks
title: Django
seo:
  title: Send SMTP Email with Django
  description: View instructions on how to easily send email with Django using SendGrid, by setting up setting up Django's built in mail library.
navigation:
  show: true
---

There is more detailed information about sending email over SMTP with Django on the [Django project website](https://docs.djangoproject.com/en/dev/topics/email/).

First start by adding the following to **settings.py:** 

``` python
EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = 'sendgrid_username'
EMAIL_HOST_PASSWORD = 'sendgrid_password'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
```
 Then to send email you can do the following: 

``` python
from django.core.mail import send_mail
send_mail('Subject here', 'Here is the message.', 'from@example.com', ['to@example.com'], fail_silently=False)
```


You may also send emails with Django by using the [django-sendgrid-v5](https://github.com/sklarsa/django-sendgrid-v5)
library, which utilizes the [Web API]({{root_url}}/API_Reference/Web_API/index.html) instead of SMTP as the transport mechanism. 
