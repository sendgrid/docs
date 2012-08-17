---
comments: false
date: 2012-05-08 11:36:09
layout: page
slug: python-examples-using-sendgrid-libraries
title: Python Examples Using SendGrid Libraries
wordpress_id: 3969
---

Python is a hot language and you would like to use it to integrate with SendGrid. Nice move, since we've got a nice set of dev tools for you. Before you get started, you will need to grab our libraries in order for these samples to work. You can [download the SendGrid Python libraries directly from our Github repository](https://github.com/sendgrid/sendgrid-python.git) or clone the files, like so:

`git clone git@github.com:sendgrid/sendgrid-python.git`

If you use PyPI to grab the package and keep them updated automatically. We prefer Pypi, so either [install PyPI now](http://pypi.python.org/pypi) or, if you already have it, do this:

`easy_install sendgrid-python`

Now that the libraries are installed, you can call them from within your environment. The plan is as follows:

    1. Create a SendGrid transport instance
    2. Create a SendGrid Mail object and set its data
    3. Send the message(s) using SMTP or Web transport



## Mail Usage


First, let's look at the most basic code required. This sample is calling the Web transport on the last line. 



`
import sendgrid

s = sendgrid.Sendgrid('username', 'password', secure=True)
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "**Html here**")
message.add_to("someone@example.com", "John Doe")

s.web.send(message)
`





...or that last line can call the SMTP transport:





`
s.smtp.send(message)`



Modify the appropriate parts of the code, and you should be able to send a message. Once you've verified that, you can use a range of different parameters and APIs we have put at your disposal to make your application use SendGrid the way you want.

_**INSIDER TIP: Unique Arguments are a lot more powerful than they might appear. Use them in conjunction with Categories to generate a huge amount of useful data.**_ 



### Using Categories




Categories are used to group email statistics provided by SendGrid. To use a category, simply set the category name:



**_NOTE: there is a maximum of 10 categories per email_**



`
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "**Html here**")
message.add_category(["Category 1", "Category 2"])`





### Using Attachments





**_NOTE: File attachments are limited to 7 MB per file:_**





`
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "**Html here**")
message.add_attachment("file1.doc", "/path/to/file.doc").add_attachment("file2.nfo", "File 2 content")`





### Using Substitutions





Substitutions can be used to customize multi-recipient emails, and tailor them for the user:





`
message = sendgrid.Message("from@mydomain.com", "subject", "Hello %name%, your code is %code%", "**Hello %name%, your code is %code%**")
message.add_to(
    {
        'example1@example.com': {'%name%': 'Name 1', '%code%': 'Code 1'},
        'example2@example.com': {'%name%': 'Name 2', '%code%': 'Code 2'},
    }
)`





### Using Sections





Sections can be used to further customize messages for the end users. A section is only useful in conjunction with a substition value:





`
message = sendgrid.Message("from@mydomain.com", "subject", "Hello %name%, you work at %place%",
    "**Hello %name%, you work at %place%**")
message.add_to(
    {
        'example1@example.com': {'%name%': 'Name 1', '%place%': '%home%'},
        'example2@example.com': {'%name%': 'Name 2', '%place%': '%office%'},
    }
).set_sections({"%office%": "an office", "%home%": "your house"})`





### Using Unique Arguments





Unique Arguments are used for tracking purposes:





`
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "**Html here**")
message.add_unique_argument("Customer", "Someone")`





### Using Filter Settings





Filter Settings are used to enable and disable apps, and to pass parameters to those apps:





`
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "**Html here**")
message.add_filter_setting("footer", "text/plain", "Here is a plain text footer")
message.add_filter_setting("footer", "text/html", "

Here is an HTML footer

")`





### Using Headers





Custom headers can be added as necessary:





`
message = sendgrid.Message("from@mydomain.com", "subject", "plain body", "**Html here**")
message.add_header("X-Mailer", "MyApp")`



