---
comments: false
date: 2011-07-27 07:04:46
layout: page
slug: customer-unsubscribes
title: Customer Unsubscribes
wordpress_id: 2279
---




## Retrieve Unsubscribes





Note that you can use _either_ the days parameter _or_ the start_date and end_date parameter.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The customer we are retrieving unsubscribes
			from

		
		


			
task

			
Yes

			
Must be set to _get_

			
This will allow you to retrieve the
			unsubscribes for the specified customer

		
		


			
date

			
No

			
Must be set to 1

			
Retrieves the timestamps, it will return a
			date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS

		
		


			
method

			
Yes

			
Must be set to _unsubscribes_

			
Allows you to access unsubscribe functionality

		




### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=unsubscribes&user;=customer@example.com&task;=get&date;=1`



#### Return


`
			
				email1@domain.com
				2009-06-10 12:40:30
			
			
				email2@domain2.com
				2009-06-10 12:40:30
			
		`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=unsubscribes&user;=customer@example.com&task;=get&date;=1`




#### Return


`[{"email":"email1@domain.com","created":"2009-06-01 19:41:39"},{"email":"email2@domain2.com","created":"2009-06-01 19:41:39"}]  `




## Delete Unsubscribes





Since SendGrid does not deliver to unsubscribe addresses, users can remove unsubscribes from their list at any time if re-delivery to an unsubscribed address is desired.




### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The customer we are retrieving unsubscribes
			from

		
		


			
task

			
Yes

			
Must be set to _delete_

			
This will allow you to delete an unsubscribe
			record for the specified customer

		
		


			
email

			
No

			
Must be an unsubscribe record

			
You must specify the unsubscribe record to
			remove

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=unsubscribes&user;=customer@example.com&task;=delete&email;=unsubscribe@sample.com`



#### Return - Success



`
			success
		`



#### Return - Error



`
			Email does not exist
		`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=unsubscribes&user;=customer@example.com&task;=delete&email;=unsubscribe@sample.com`



#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"Email does not exist"}`





## Add Unsubscribes





Add unsubscribe email records to their account if they need to stop sending email messages to a specific recipient.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The customer we are retrieving unsubscribes
			from

		
		


			
task

			
Yes

			
Must be set to _add_

			
This will allow you to add an unsubscribe
			record for the specified customer

		
		


			
email

			
No

			
Must be an unsubscribe record

			
You must specify the unsubscribe record to
			add

		





### XML API Request




`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=unsubscribes&user;=customer@example.com&task;=add&email;=unsubscribe@sample.com`



#### Return - Success



`
			success
		`



#### Return - Error



`
			Email already exists
		`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=unsubscribes&user;=customer@example.com&task;=add&email;=unsubscribe@sample.com`



#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"Email already exists"}`

