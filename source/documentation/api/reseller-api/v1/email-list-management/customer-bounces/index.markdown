---
comments: false
date: 2011-07-27 07:02:07
layout: page
slug: customer-bounces
title: Customer Bounces
wordpress_id: 2276
---




## Retrieve Bounces





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

			
The customer we are retrieving bounces from

		
		


			
task

			
Yes

			
Must be set to _get_

			
This will allow you to retrieve the bounces
			for the specified customer

		
		


			
date

			
No

			
Must be set to 1

			
Retrieves the timestamps, it will return a
			date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS

		
		


			
method

			
Yes

			
Must be set to _bounces_

			
Allows you to access bounces functionality

		




### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=bounces&user;=customer@example.com&task;=get&date;=1`



#### Return


`

			
				email1@domain.com
				5.1.1
				host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email1@domain.com
				2009-06-10 12:40:30
			
			
				email2@domain2.com
				5.1.1
				host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email2@domain2.com
				2009-06-10 12:40:30
			

`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=bounces&user;=customer@example.com&task;=get&date;=1`



#### Return


`[{"email":"email1@domain.com","status":"5.1.1","reason":"host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email1@domain.com","created":"2009-06-01 19:41:39"},{"email":"email2@domain2.com","status":"5.1.1","reason":"host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email2@domain2.com","created":"2009-06-01 19:41:39"}]   `




## Delete Bounces





Since SendGrid does not re-deliver to bounced addresses, users can remove bounces from their list at any time if redelivery to a bounced address is desired.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Subuser must be registered under your account

			
The subuser we are retrieving bounces from

		
		


			
task

			
Yes

			
Must be set to _delete_

			
This will allow you to delete the bounces for
			the specified user

		
		


			
email

			
No

			
Bounce email address you want to delete

			
You must specify the bounced email message to
			remove

		
		


			
method

			
Yes

			
Must be set to _bounces_

			
Allows you to access bounces functionality

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=bounces&user;=customer@example.com&task;=delete&email;=bounce@example.com`



#### Return - Success



`

	success
`



#### Return - Error



`

	Email does not exist
`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=bounces&user;=customer@example.com&task;=delete&email;=bounce@example.com`




#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"Email does not exist"}`

