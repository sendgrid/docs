---
comments: false
date: 2011-06-27 12:04:31
layout: page
slug: python-example
title: Python Example
wordpress_id: 1470
---

## SmtpApiHeader.py



`
#!/usr/bin/python
# Version 1.0
# Last Updated 6/22/2009
import json
import re
import textwrap
 
class SmtpApiHeader:
 
    def __init__(self):
        self.data = {}
 
    def addTo(self, to):
        if not self.data.has_key('to'):
            self.data['to'] = []
        if type(to) is str:
            self.data['to'] += [to]
        else:
            self.data['to'] += to
 
    def addSubVal(self, var, val):
        if not self.data.has_key('sub'):
            self.data['sub'] = {}
        if type(val) is str:
            self.data['sub'][var] = [val]
        else:
            self.data['sub'][var] = val    
 
    def setUniqueArgs(self, val):
        if type(val) is dict:
            self.data['unique_args'] = val
 
    def setCategory(self, cat):
 
        self.data['category'] = cat
 
    def addFilterSetting(self, fltr, setting, val):
        if not self.data.has_key('filters'):
            self.data['filters'] = {}
        if not self.data['filters'].has_key(fltr):
            self.data['filters'][fltr] = {}
        if not self.data['filters'][fltr].has_key('settings'):
                self.data['filters'][fltr]['settings'] = {}
        self.data['filters'][fltr]['settings'][setting] = val
 
    def asJSON(self):
        j = json.dumps(self.data)
        return re.compile('(["\]}])([,:])(["\[{])').sub('\1\2 \3', j)
 
    def as_string(self):
        j = self.asJSON()
        str = 'X-SMTPAPI: %s' % textwrap.fill(j, subsequent_indent = '  ', width = 72)
        return str
`

  

## Example Python Usage



`
#!/usr/bin/python
import SmtpApiHeader
import json
 
hdr = SmtpApiHeader.SmtpApiHeader()
receiver = ['kyle@somewhere.com','bob@someplace.net','someguy@googlemailz.coms']
times = ['1pm', '2pm', '3pm']
names = ['kyle', 'bob', 'someguy']
 
hdr.addTo(receiver)
hdr.addSubVal('-time-', times)
hdr.addSubVal('-name-', names)
hdr.addFilterSetting('subscriptiontrack', 'enable', 1)
hdr.addFilterSetting('twitter', 'enable', 1)
hdr.setUniqueArgs({'test':1, 'foo':2})
a = hdr.asJSON()
a = hdr.as_string()
print a
`

  

## Full Python Email Usage


  This python program will build a multi-part MIME message demonstrating all of the portions of the SMTP API protocol and send it through sendgrid.


  Python already has built in libraries to send and receive emails. This example uses:



  


    
  * [smtplib](http://docs.python.org/library/smtplib.html)

    
  * [email](http://docs.python.org/library/email.html#module-email)

  

`
#!/usr/bin/python
import SmtpApiHeader
import json
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.header import Header
 
hdr = SmtpApiHeader.SmtpApiHeader()
# The list of addresses this message will be sent to
receiver = ['isaac@example', 'tim@example', 'jose@example']
 
# The times they are to be sent
times = ['1pm', '2pm', '3pm']
 
# The proper names to be used
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
fromEmail =  'you@yourdomain.com'
toEmail = 'doesntmatter@nowhere.com'
 
# Create message container - the correct MIME type is multipart/alternative.
msg = MIMEMultipart('alternative')
msg['Subject'] = "Contact Response for  at "
msg['From'] = fromEmail
msg['To'] = toEmail
msg["X-SMTPAPI"] = hdr.asJSON()
 
# Create the body of the message (a plain-text and an HTML version).
# text is your plain-text email
# html is your html version of the email
# if the reciever is able to view html emails then only the html
# email will be displayed
text = "Hi -name-!\nHow are you?\n"
html = """\

  
  
    

Hi! -name-  

       How are you?  

    


  

"""
 
# Record the MIME types of both parts - text/plain and text/html.
part1 = MIMEText(text, 'plain')
part2 = MIMEText(html, 'html')
 
# Attach parts into message container.
msg.attach(part1)
msg.attach(part2)
 
# Login credentials
username = 'yourlogin@sendgrid.net'
password = 'yourpassword'
 
# Open a connection to the SendGrid mail server
s = smtplib.SMTP('smtp.sendgrid.net')
 
# Authenticate
s.login(username, password)
 
# sendmail function takes 3 arguments: sender's address, recipient's address
# and message to send - here it is sent as one string.
s.sendmail(fromEmail, toEmail, msg.as_string())
 
s.quit()
`



## Related Content


  


    
  * [SMTP API](/documentation/api/smtp-api/)

    
  * [Integration: Python Email Example Using SMTP](/documentation/get-started/integrate/examples/python-email-example-using-smtp/)

  
