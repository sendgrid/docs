---
comments: false
date: 2011-03-25 15:50:36
layout: page
slug: python-email-example-using-smtp
title: Python Email Example Using SMTP
wordpress_id: 258
---

This Python program will build a multi-part MIME email and send it through SendGrid.

Python already has built in libraries to send and receive emails. This example uses:



	
  * [smtplib](http://docs.python.org/library/smtplib.html)

	
  * [email](http://docs.python.org/library/email.html#module-email)



`
#! /usr/bin/python
 
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
 
# Your From email address
fromEmail = "you@yourdomain.com"
# Recipient
toEmail = "person@youaremailing.com"
 
# Create message container - the correct MIME type is multipart/alternative.
msg = MIMEMultipart('alternative')
msg['Subject'] = "Example Python Email"
msg['From'] = fromEmail
msg['To'] = toEmail
 
# Create the body of the message (a plain-text and an HTML version).
# text is your plain-text email
# html is your html version of the email
# if the reciever is able to view html emails then only the html
# email will be displayed
text = "Hi!\nHow are you?\n"
html = """\

  
  
    

Hi!  

       How are you?  

    


  

"""
 
# Login credentials
username = 'yourlogin'
password = "yourpassword"

# Record the MIME types of both parts - text/plain and text/html.
part1 = MIMEText(text, 'plain')
part2 = MIMEText(html, 'html')
 
# Attach parts into message container.
msg.attach(part1)
msg.attach(part2)
 
# Open a connection to the SendGrid mail server
s = smtplib.SMTP('smtp.sendgrid.net', 587)
 
# Authenticate
s.login(username, password)
 
# sendmail function takes 3 arguments: sender's address, recipient's address
# and message to send - here it is sent as one string.
s.sendmail(fromEmail, toEmail, msg.as_string())
 
s.quit()
`
