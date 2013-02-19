---
layout: page
weight: 0
title: Python
navigation:
  show: true
---

We'll start with a simple example using the built-in Python SMTP libraries to send a message. 
After that example, you can find more complete instructions that use the SendGrid Python library.

{% anchor Using Python's SMTP Library %}

This Python program will build a multi-part MIME email and send it through SendGrid. 
Python has built in libraries to send and receive emails. This example uses:

* [smtplib](http://docs.python.org/library/smtplib.html)
* [email](http://docs.python.org/library/email.html#module-email)

{% codeblock lang:python %}
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
html = """\n
<html>
  <head></head>
  <body>
    Hi!<br>
       How are you?<br>
    
  </body>
</html>
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
{% endcodeblock %}
***

{% anchor Using the SendGrid Python Library %}

This library allows you to quickly and easily send emails through SendGrid using Python.

###License

Licensed under the MIT License.

###Install

Using Github:

{% codeblock %}
git clone git@github.com:sendgrid/sendgrid-python.git
{% endcodeblock %}

Using PyPI:

{% codeblock %}
easy_install sendgrid
{% endcodeblock %}

###SendGrid APIs

SendGrid provides two methods of sending email: the Web API, and SMTP
API. SendGrid recommends using the SMTP API for sending emails, but the
Web API has less communication overhead. Read more about [SMTP vs Web
API]({{ root_url }}/Integrate/index.html).

This library implements a common interface to make it very easy to use either API.

###Mail Pre-Usage

Before we begin using the library, its important to understand a few things about the library architecture:

Sending an email is as simple as :
* Creating a SendGrid Instance
* Creating a SendGrid Mail object, and setting its data
* Sending the mail using either SMTP API or Web API


###Mail Usage

{% codeblock lang:python %}
import sendgrid

# make a secure connection to SendGrid
s = sendgrid.Sendgrid('username', 'password', secure=True)

# make a message object
message = sendgrid.Message("from@mydomain.com", "message subject", "plaintext message body",
    "HTML message body")
# add a recipient
message.add_to("someone@example.com", "John Doe")

# use the Web API to send your message
s.web.send(message)
{% endcodeblock %}

Or change the last line to use the SMTP API instead:

{% codeblock lang:python %}
# use the SMTP API to send your message
s.smtp.send(message)
{% endcodeblock %}

To add a 'name' to the From address, you can pass the first parameter to sendgrid.Message() as a tuple:
{% codeblock lang:python %}
message = sendgrid.Message(("from@mydomain.com","My Domain"), "message subject", "plaintext body",
    "HTML body")
{% endcodeblock %}

To add a Reply-To address, you can call the message.setreplyto() method:
{% codeblock lang:python %}
message = sendgrid.Message(("from@mydomain.com","My Domain"), "message subject", "plaintext body",
    "HTML body")
message.setreplyto("reply@mydomain.com")
{% endcodeblock %}
Note: Reply-To requires v0.1.3 or higher

###Adding Recipients

Using the message.addto() method, you can add recipient email address (optionally with names), but you can also add CC/BCC recipient addresses (without names) using message.add_cc() and message.add_bcc().

Note: Only the SMTP API supports CC at this time, though we have code and hooks in place for the Web API implementation of this library for future use.

Both the Web API and SMTP API support BCC.

The message.add_cc() and message.add_bcc() calls support passing a single address, or a list of addresses, as shown in the examples below.

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "message subject", "plaintext message body",
    "HTML message body")

# add a To: recipient with a name
message.add_to("someone1@example.com", "John Doe")

# add a To: recipient without a name
message.add_to("someone8@example.com")

# add several To: recipients without names
message.add_to(["someone9@example.com", "someone10@example.com"])

# add several To: recipients without names
# note: count of assigned names must match the count of email addresses
message.add_to(["someone11@example.com", "someone12@example.com"], ["John Smith", "Jane Smith"])

# add a single CC: recipient by passing a string, SMTP API only
message.add_cc("someone2@example.com")

# add several CC: recipients by passing a list, SMTP API only
message.add_cc(["someone3@example.com","someone4@example.com"])

# add a single BCC: recipient by passing a string
message.add_bcc("someone5@example.com")

# add several BCC: recipients by passing a list
message.add_bcc(["someone6@example.com","someone7@example.com"])

# send message to To, CC and BCC recipients using SMTP API
s.smtp.send(message)

# send message to To and BCC recipients using Web API (no CC support)
s.web.send(message)
{% endcodeblock %}

Note: Using CC/BCC with SMTP API requires v0.1.3 or higher

###Using Attachments

Attaching files to your message uses the message.add_attachment() method. This method takes two parameters, the intended name of the attachment you want your recipients to see, and the full file system path to the file. Note: File attachments are limited to 7 MB per file, and your total message size must be under 20MB.

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "<b>Html here</b>")
message.add_attachment("output_filename.doc", "/path/to/input_filename.doc")
{% endcodeblock %}

You can chain several file attachments together, provided you follow the restrictions of 7MB per file and a total size of 20MB or less per message.

{% codeblock lang:python %}
message.add_attachment("output_file1.txt", "/path/to/file1.txt").add_attachment("output_file2.txt", "/path/to/file2.txt")
{% endcodeblock %}

A common problem with file attachments is that the second parameter does not exist as a file, in which case the library will attach a 0-byte blank file. Here's a simple check to assist you:

{% codeblock lang:python %}
import sendgrid
import os

s = sendgrid.Sendgrid('username', 'password', secure=True)
message = sendgrid.Message("from@mydomain.com", "message subject", "plaintext message body", "HTML message body")
message.add_to("someone@example.com", "John Doe")
if os.path.isfile("/path/to/file1.txt"):
    message.add_attachment("file.txt", "/path/to/file1.txt")
s.web.send(message)
{% endcodeblock %}

An optional third parameter can be passed to the message.add_attachment() call which lets you specify a Content-ID header for each file. The Content-ID is used to reference attached files (typically images) within the HTML message. For example:

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "message subject",
    "I have attached my picture, I hope you like it",
    "Here is my inline picture<br><img src=\"cid:picture1\"><br>I hope you like it.")
message.add_to("someone@example.com", "John Doe")

message.add_attachment("my_picture.png", "/path/to/my_picture.png", "picture1")
s.web.send(message)
{% endcodeblock %}

###Using Categories

You can mark messages with optional categories to give better
visibility to email statistics (opens, clicks, etc.). You can add up to
10 categories per email message. Read more about [Categories]({{ root_url }}//Delivery_Metrics/categories.html).

To add categories to your message, use the message.add_category() method and pass a list of one or more category names. SendGrid will begin tracking statistics with these category names if the category name is new, or aggregate statistics for existing category names.

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "<b>Html here</b>")
message.add_category(["Category 1", "Category 2"])
{% endcodeblock %}

###Using Unique Arguments

Unique Arguments are used for tracking purposes on the message, and
can be seen in the Email Activity screen on your account dashboard or
through the Event API. Use the message.add_unique_argument() method,
which takes two parameters, a key and a value. To pass multiple
keys/values, use message.set_unique_arguments() (note the plural method
name) and pass a dictionary of key/value pairs. More about [Unique
Arguments]({{ root_url }}/API_Reference/SMTP_API/unique_arguments.html).

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "<b>Html here</b>")
# set 'Customer' to a value of 'Someone'
message.add_unique_argument("Customer", "Someone")
{% endcodeblock %}

Alternately, you can pass a dict parameter and add multiple arguments using message.add_unique_arguments() like this:

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "<b>Html here</b>")
# set multiple unique arguments for a message
message.set_unique_arguments({"customerAccountNumber": "55555", "activationAttempt": "1"})
{% endcodeblock %}

###Using Substitutions

SendGrid also allows you to send multi-recipient messages with unique
information per recipient. This is commonly used for sending unique URLs
or codes to a list of recipients in a single batch. You simply expand
the data you pass to the message.add_to() method like the example below.
Read more about [Substitutions]({{ root_url }}/API_Reference/SMTP_API/substitution_tags.html).

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "Hello %name%, your code is %code%", "<b>Hello %name%, your code is %code%</b>")
message.add_to(
    {
        'example1@example.com': {'%name%': 'Name 1', '%code%': 'Code 1'},
        'example2@example.com': {'%name%': 'Name 2', '%code%': 'Code 2'},
    }
)
{% endcodeblock %}

###Using Sections

Used in conjunction with Substitutions, Sections can be used to
further customize messages for the end users, and acts like a second
tier of substitution data. You can use message.set_section() to add a
single section, or a pluralized message.set_sections() method to add
several sections. More about [Sections]({{ root_url }}/API_Reference/SMTP_API/section_tags.html).

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "Hello %name%, you work at %place%",
    "<b>Hello %name%, you work at %place%</b>")
message.add_to(
    {
        'example1@example.com': {'%name%': 'Name 1', '%place%': '%home%'},
        'example2@example.com': {'%name%': 'Name 2', '%place%': '%office%'},
        'example3@example.com': {'%name%': 'Name 3', '%place%': '%office%'},
    }
).set_sections({"%office%": "an office", "%home%": "your house"})
{% endcodeblock %}

###Using Custom Headers

Custom SMTP headers can be added as necessary using the message.add_header() method.

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "<b>Html here</b>")
message.add_header("X-Mailer", "MyApp")
{% endcodeblock %}

###Using Filter Settings

[Filter Settings]({{ root_url }}/API_Reference/SMTP_API/apps.html) are used to enable and disable apps, and to pass
parameters to those apps.Here's an example of passing content to the 'footer' app:

{% codeblock lang:python %}
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "<b>Html here</b>")
message.add_filter_setting("footer", "text/plain", "Here is a plain text footer")
message.add_filter_setting("footer", "text/html", "<p style='color:red;'>Here is an HTML footer")
{% endcodeblock %}
