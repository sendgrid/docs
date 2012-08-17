---
comments: false
date: 2011-07-27 08:10:19
layout: page
slug: customer-subuser-invalid-emails
title: Customer Subuser Invalid Emails
wordpress_id: 2342
---




## Retrieve Invalid Emails





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Customer subuser must be registered under
			your account

			
The customer subuser we are retrieving
			invalid emails from

		
		


			
task

			
Yes

			
Must be set to _get_

			
This will allow you to retrieve the invalid
			emails for the specified customer subuser

		
		


			
date

			
No

			
Must be set to 1

			
Retrieves the timestamps, it will return a
			date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS

		





### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=invalidemails&user;=example@example.com&task;=get&date;=1`



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



### JSON API Request



`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=invalidemails&user;=example@example.com&task;=get&date;=1`



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

			
Customer subuser must be registered under
			your account

			
The customer subuser we are retrieving
			invalid emails from

		
		


			
task

			
Yes

			
Must be set to _delete_

			
This will allow you to delete a invalid email
			for the specified customer subuser

		
		


			
email

			
No

			
Must be a invalid email

			
You must specify the invalid emails to remove

		





### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=invalidemails&user;=example@example.com&task;=delete&email;=invalidemail@example.comm`



#### Return - Success



`
			success
		`



#### Return - Error



`
			Email does not exist
		`



### JSON API Request





`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=invalidemails&user;=example@example.com&task;=delete&email;=invalidemail@example.comm`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"Email does not exist"}`



