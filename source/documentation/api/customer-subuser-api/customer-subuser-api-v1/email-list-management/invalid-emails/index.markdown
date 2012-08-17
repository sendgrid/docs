---
comments: false
date: 2011-09-13 10:06:19
layout: page
slug: invalid-emails
title: Invalid Emails
wordpress_id: 2980
---





### Parameters









Parameter
Required
Requirements
Description





user


Yes


Subuser must be registered under your account


The subuser we are retrieving invalid emails from






task


Yes


Must be set to _get_


This will allow you to retrieve the invalid emails for the specified subuser






date


No


Must be set to 1


Retrieves the timestamps, it will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS






### XML




#### Command


`https://sendgrid.com/api/user.invalidemails.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&task;=get&date;=1`


#### Return


`

  
    isaac@hotmail.comm
    Mail domain mentioned in email address is unknown
    2009-06-10 12:40:30
  
  
    isaac@hotmail
    Bad Syntax
    2009-06-10 12:40:30
  
  
    isaac@example.com
    Known bad domain
    2009-06-10 12:40:30
  

`


### JSON




#### Command


`https://sendgrid.com/api/user.invalidemails.json?api_user=username&api;_key=secureSecret&user;=example@example.com&task;=get&date;=1`


#### Return


`[{"email":"isaac@hotmail.comm","reason":"Mail domain mentioned in email address is unknown","created":"2009-06-01 19:41:39"},{"email":"isaac@hotmail","reason":"Bad Syntax","created":"2009-06-01 19:41:39"},{"email":"isaac@example.com","reason":"Known bad domain","created":"2009-06-01 19:41:39"}]`



## Delete Invalid Emails


Since SendGrid does not deliver to invalid emails, users can remove invalid emails from their list at any time if re-delivery to a spam reported address is desired.


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Subuser must be registered under your account


The subuser we are retrieving invalid emails from






task


Yes


Must be set to _delete_


This will allow you to delete a invalid email for the specified subuser






email


No


Must be a invalid email


You must specify the invalid emails to remove






### XML




#### Command


`https://sendgrid.com/api/user.invalidemails.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&task;=delete&email;=invalidemail@example.com`


#### Return - Success


`

  success

`


#### Return - Error


`

  Email does not exist

`


### JSON




#### Command


`https://sendgrid.com/api/user.invalidemails.json?api_user=username&api;_key=secureSecret&user;=example@example.com&task;=delete&email;=invalidemail@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"Email does not exist"}`

