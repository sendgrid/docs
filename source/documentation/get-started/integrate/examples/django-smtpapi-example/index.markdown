---
comments: false
date: 2012-01-27 14:49:12
layout: page
published: false
slug: django-smtpapi-example
title: Django SMTPAPI (Example)
wordpress_id: 3397
following_users:
- support_docs
---

For more information on how to send email you can go [here](http://docs.djangoproject.com/en/dev/topics/email/).

First start by adding the following to **settings.py**
`
EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = 'sendgrid_username'
EMAIL_HOST_PASSWORD = 'sendgrid_password'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
`

Then to send email using SMTPAPI, you can do the following
`
from django.core import mail

connection=mail.get_connection()

connection.open()

email = mail.EmailMessage('Subject here', 'Here is the message.', 'testing@sendgrid.net', ['sendgrid@hotmail.com'], headers={"X-SMTPAPI": "{\"to\": [ \"firstaddress@domain1.com\",\"secondaddress@domain2.com\" ], \"category\": \"DJANGOTEST\"}"}, connection=connection)

email.send()

`
