---
comments: false
date: 2011-03-25 15:44:06
layout: page
slug: django-example-using-smtp
title: Django Example Using SMTP
wordpress_id: 229
following_users:
- support_docs
---

There is [more detailed information regarding the use of Django on the Django project website](https://docs.djangoproject.com/en/dev/topics/email/).

First start by adding the following to **settings.py:**

` EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = 'sendgrid_username'
EMAIL_HOST_PASSWORD = 'sendgrid_password'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
`



Then to send email you can do the following:
`
from django.core.mail import send_mail

send_mail('Subject here', 'Here is the message.', 'from@example.com', ['to@example.com'], fail_silently=False)
`
