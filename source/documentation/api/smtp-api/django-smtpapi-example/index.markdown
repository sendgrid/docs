---
comments: false
date: 2012-01-30 23:12:48
layout: page
slug: django-smtpapi-example
title: Django SMTPAPI Example
wordpress_id: 3406
following_users:
- support_docs
---

For more information on how to send email you can go [here](http://docs.djangoproject.com/en/dev/topics/email/).

First start by adding the following to **settings.py**
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

If you wish to use our SmtpApiHeader Python class (referenced [here](http://docs.sendgrid.com/documentation/api/smtp-api/python-example/)), you can do the following with Django

`
import SmtpApiHeader
import json
from django.core.mail import EmailMultiAlternatives

hdr = SmtpApiHeader.SmtpApiHeader()
# The list of addresses this message will be sent to
receiver = ['isaac@example.com', 'tim@example.com', 'jose@example.com']
 
# The names of the recipients
times = ['1pm', '2pm', '3pm']
 
# Another subsitution variable
names = ['Isaac', 'Tim', 'Jose']
 
# Set all of the above variables
hdr.addTo(receiver)
hdr.addSubVal('-time-', times)
hdr.addSubVal('-name-', names)
 
# Specify that this is an initial contact message
hdr.setCategory("initial")
 
# Enable a text footer and set it
hdr.addFilterSetting('footer', 'enable', 1)
hdr.addFilterSetting('footer', "text/plain", "Thank you for your business")
 
# fromEmail is your email
# toEmail is recipient's email address
# For multiple recipient e-mails, the 'toEmail' address is irrelivant
fromEmail =  'testing@sendgrid.net'
toEmail = 'sendgrid@hotmail.com'
 
# Create message container - the correct MIME type is multipart/alternative.
# Using Django's 'EmailMultiAlternatives' class in this case to create and send.
# Create the body of the message (a plain-text and an HTML version).
# text is your plain-text email
# html is your html version of the email
# if the reciever is able to view html emails then only the html
# email will be displayed
subject = 'Contact Response for <-name-> at <-time->'
text_content = 'Hi -name-!\nHow are you?\n'
html = """\

  
  
    

Hi! -name-  

       How are you?  

    


  

"""
msg = EmailMultiAlternatives(subject, text_content, fromEmail, [toEmail], headers={"X-SMTPAPI": hdr.asJSON()})
msg.attach_alternative(html, "text/html")
msg.send()
`

