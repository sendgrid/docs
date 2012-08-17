---
comments: false
date: 2011-07-27 08:02:52
layout: page
slug: customer-subuser-spam-reports
title: Customer Subuser Spam Reports
wordpress_id: 2339
---




## Retrieve Spam Reports





### Parameters





		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Customer subuser must be registered under
			your account

			
The customer subuser we are retrieving spam
			reports from

		
		


			
task

			
Yes

			
Must be set to _get_

			
This will allow you to retrieve the spam
			reports for the specified user

		
		


			
date

			
No

			
Must be set to 1

			
Retrieves the timestamps, it will return a
			date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS

		





### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=spamreports&user;=example@example.com&task;=get&date;=1`



#### Return


`
			
				email1@domain.com
				2009-06-10 12:40:30
			
			
				email2@domain2.com
				2009-06-10 12:40:30
			
		`



### JSON API Request




`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=spamreports&user;=example@example.com&task;=get&date;=1`



#### Return


`[{"email":"email1@domain.com","created":"2009-06-01 19:41:39"},{"email":"email2@domain2.com","created":"2009-06-01 19:41:39"}]`




## Delete Spam Reports





Since SendGrid does not deliver to spam reported addresses, users can remove spam reports from their list at any time if re-delivery to a spam reported address is desired.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Customer subuser must be registered under
			your account

			
The customer subuser we are retrieving spam
			reports from

		
		


			
task

			
Yes

			
Must be set to _delete_

			
This will allow you to delete a spam report
			for the specified user

		
		


			
email

			
No

			
Must be a spam reports

			
You must specify the spam reports to remove

		





### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=spamreports&user;=example@example.com&task;=delete&email;=spamreport@domain.com`



#### Return - Success



`
			success
		`



#### Return - Error



`
			Email does not exist
		`



### JSON API Request



`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=spamreports&user;=example@example.com&task;=delete&email;=spamreport@domain.com`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"Email does not exist"}`

