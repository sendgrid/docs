---
comments: false
date: 2011-03-25 15:50:54
layout: page
slug: php-email-example-using-smtp
title: PHP Email Example Using SMTP
wordpress_id: 260
---

This library allows you to quickly and easily send emails through SendGrid using PHP.



> **NOTE >> **This library is licensed for use under the terms of the MIT license.




> **NOTE >> **SendGrid requires the use of PHP 5.3 or higher.





## How To Install The Libraries





`git clone git@github.com:sendgrid/sendgrid-php.git`





## SendGrid APIs





SendGrid provides two methods of sending email: the Web API, and SMTP API.  SendGrid recommends using the SMTP API for sending emails. For an explanation of the benefits of each, refer to http://docs.sendgrid.com/documentation/get-started/integrate/examples/smtp-vs-rest/.





This library implements a common interface to make it very easy to use either API.





## Mail Pre-Usage



Before we begin using the library, its important to understand a few things about the library architecture. First, the SendGrid Mail object is the means of setting mail data. In general, data can be set in following three ways for most elements:



	
  * **set** - reset the data, and initialize it to the given element. This will destroy previous data.

	
  * **set (List)** - for array based elements, we provide a way of passing the entire array in at once. This will also destroy previous data.

	
  * **add** - append data to the list of elements.



Sending an email is as simple as:


	
  1. Creating a SendGrid Instance

	
  2. Creating a SendGrid Mail object, and setting its data

	
  3. Sending the mail using either SMTP API or Web API.





## Mail Usage





To begin using this library, you must first include it in your code, like so:





`include 'path/to/sendgrid-php/SendGrid_loader.php';`





Then, initialize the SendGrid object with your SendGrid credentials:





`$sendgrid = new SendGrid('username', 'password');`





Create a new SendGrid Mail object and add your message details, as follows:





`$mail = new SendGrid\Mail();
$mail->addTo('foo@bar.com')->
       setFrom('me@bar.com')->
       setSubject('Subject goes here')->
       setText('Hello World!')->
       setHtml('**Hello World!**');`





Finally, send it using the API of your choice of SMTP like so:





`$sendgrid->smtp->send($mail);`
Or you can send it using the Web API like so:





`$sendgrid->web->send($mail);`





### Using Categories





Categories are used to group email statistics provided by SendGrid. To use a category, simply set the category name.





> **NOTE >> **There is a maximum of 10 categories per email.





`$mail = new SendGrid\Mail();
$mail->addTo('foo@bar.com')->
       ...
       addCategory("Category 1")->
       addCategory("Category 2");`





### Using Attachments





Attachments are currently file based only, with future plans for an in memory implementation as well.





File attachments are limited to 7 MB per file.





`$mail = new SendGrid\Mail();
$mail->addTo('foo@bar.com')->
       ...
       addAttachment("../path/to/file.txt");`





### Using Substitutions





Substitutions can be used to customize multi-recipient emails, and tailor them for the user.





`$mail = new SendGrid\Mail();
$mail->addTo('john@somewhere.com')->
       addTo("harry@somewhere.com")->
       addTo("Bob@somewhere.com")->
       ...
       setHtml("Hey %name%, we've seen that you've been gone for a while")->
       addSubstitution("%name%", array("John", "Harry", "Bob"));`





### Using Sections





Sections can be used to further customize messages for the end users. A section is only useful in conjunction with a substition value.





`$mail = new SendGrid\Mail();
$mail->addTo('john@somewhere.com')->
       addTo("harry@somewhere.com")->
       addTo("Bob@somewhere.com")->
       ...
       setHtml("Hey %name%, you work at %place%")->
       addSubstitution("%name%", array("John", "Harry", "Bob"))->
       addSubstitution("%place%", array("%office%", "%office%", "%home%"))->
       addSection("%office%", "an office")->
       addSection("%home%", "your house");`





### Using Unique Arguments





Unique Arguments can be used for tracking purposes and developing data for unique statistical analysis.





`$mail = new SendGrid\Mail();
$mail->addTo('foo@bar.com')->
       ...
       addUniqueArgument("Customer", "Someone")->
       addUniqueArgument("location", "Somewhere");`





### Using Filter Settings





Filter Settings are used to enable and disable apps, and to pass parameters to those apps.





`$mail = new SendGrid\Mail();
$mail->addTo('foo@bar.com')->
       ...
       addFilterSetting("gravatar", "enable", 1)->
       addFilterSetting("footer", "enable", 1)->
       addFilterSetting("footer", "text/plain", "Here is a plain text footer")->
       addFilterSetting("footer", "text/html", "

Here is an HTML footer

");`





### Using Headers





Headers can be used to add existing sendgrid functionality (such as for categories or filters), or custom headers can be added as necessary.





`$mail = new SendGrid\Mail();
$mail->addTo('foo@bar.com')->
       ...
       addHeader("category", "My New Category");`
