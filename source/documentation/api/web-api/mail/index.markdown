---
comments: false
date: 2011-04-25 13:06:17
layout: page
slug: mail
title: Mail
wordpress_id: 566
---

This module allows you to send email.




## send


Send email.


### Parameters









Parameter
Required
Requirements
Description





to


Yes


Must be a valid email address


This can also be passed in as an array, to send to multiple locations






toname


No


Must be a string. If _to_ parameter is an array, _toname_ must be an array with the exact number of array elements as the _to_ field


Give a name to the recipient






x-smtpapi


No


Must be in valid JSON format


Please review [SMPTAPI](/documentation/api/smtp-api/) to view documentation on what you can do with the JSON headers






subject


Yes


Must be a valid string


The subject of your email






text and/or html


Yes


Must include one or both parameters


The actual content of your email message. It can be sent as either plain text or HTML for the user to display






from


Yes


Must be a valid email address from your domain


This is where the email will appear to originate from for your recipient






bcc


No


Must be a valid email address


This can also be passed in as an array of email addresses for multiple recipients






fromname


No


Must a valid string


This is name appended to the from email field. IE - Your name or company name






replyto


No


Must be a valid email address


Append a reply-to field to your email message






date


No


Must be a valid [RFC 2822 formatted date](http://www.faqs.org/rfcs/rfc2822)


Specify the date header of your email. One example: "Thu, 21 Dec 2000 16:01:07 +0200". PHP developers can use: _date('r');_






files


No


Must be less than 7MB


Files to be attached. The file contents must be part of the multipart HTTP POST.
Ex: files[file1.doc]=<file contents>&files;[file2.pdf]=<file contents>
  
[Example Code](http://docs.sendgrid.com/documentation/get-started/integrate/examples/php-example-using-the-web-api/)








headers


No


Must be in valid JSON format


A collection of key/value pairs in JSON format. Each key represents a header name and the value the header value. Ex: {"X-Accept-Language": "en", "X-Mailer": "MyApp"}






### Response





	
  * [Success](/documentation/api/web-api/#responsessuccess)

	
  * [Error](/documentation/api/web-api/#responseserror)




### Examples





	
  * Send to one email recipient
`
# curl -d 'to=destination@example.com&toname;=Destination&subject;=Example Subject&text;=testingtextbody&from;=info@domain.com&api;_user=sendgridUsername&api;_key=sendgridPassword' https://sendgrid.com/api/mail.send.json
`
`
https://sendgrid.com/api/mail.send.xml?api_user=youremail@domain.com&api;_key=secureSecret&to;=destination@example.com&toname;=Destination&subject;=Example%20Subject&text;=testingtextbody&from;=info@domain.com
`

	
  * Send to multiple email recipients
`
# curl -d 'to[]=destination@example.com&toname;[]=Destination&to;[]=destination2@example.com&toname;[]=Destination2&subject;=Example Subject&text;=testingtextbody&from;=info@domain.com&api;_user=sendgridUsername&api;_key=sendgridPassword' https://sendgrid.com/api/mail.send.json
`
`https://sendgrid.com/api/mail.send.xml?api_user=youremail@domain.com&api;_key=secureSecret&to;[]=destination@example.com&toname;[]=Destination&to;[]=destination2@example.com&toname;[]=Destination2&subject;=Example%20Subject&text;=testingtextbody&from;=info@domain.com`


  * Send a test attachment
`
curl -F to=recipient@domain.com -F toname=test -F subject="Example Subject" -F text="testing text body" --form-string html="**testing html body**" -F from=test@yourdomain.com -F api_user=sendgridUsername -F api_key=sendgridPassword -F files[attachment.gz]=@f.php.gz https://sendgrid.com/api/mail.send.json
`

	
  * [PHP Examples](/documentation/get-started/integrate/examples/php-example-using-the-web-api/)

	



### Raw HTTP Dump


The following is a dump of the HTTP data sent to our server to generate an email via our web API.

`
POST /api/mail.send.json HTTP/1.1`

`Host: sendgrid.com

Accept: */*

Content-Length: 999

Expect: 100-continue

Content-Type: multipart/form-data; boundary=----------------------------400f182a9360

HTTP/1.1 100 Continue

------------------------------400f182a9360

Content-Disposition: form-data; name="api_user"

YOURUSERNAME

------------------------------400f182a9360

Content-Disposition: form-data; name="api_key"

YOURKEY

------------------------------400f182a9360

Content-Disposition: form-data; name="to"

someone@somewhere.com

------------------------------400f182a9360

Content-Disposition: form-data; name="subject"

test of file sends

------------------------------400f182a9360

Content-Disposition: form-data; name="html"

the HTML

------------------------------400f182a9360

Content-Disposition: form-data; name="text"

the plain text

------------------------------400f182a9360

Content-Disposition: form-data; name="from"

example@sendgrid.com

------------------------------400f182a9360

Content-Disposition: form-data; name="files[myfile]"; filename="myfile"

Content-Type: application/octet-stream

file with stuff in it

------------------------------400f182a9360--

HTTP/1.1 200 OK

Server: nginx/0.7.65

Date: Fri, 03 Jun 2011 22:30:58 GMT

Content-Type: application/json

Transfer-Encoding: chunked

Connection: keep-alive

`

`{"message":"success"}
`
