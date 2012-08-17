---
comments: false
date: 2011-07-27 07:29:33
layout: page
slug: event-notification-url
title: Event Notification URL
wordpress_id: 2302
---




## Retrieve





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _get_

			
This will allow you to retrieve the event
			notification url for the specified customer

		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The username of the customer

		
		


			
method

			
Yes

			
Must be set to _eventposturl_

			
Allows you to access post event url
			functionality

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&task;=get&user;=customer@example.com&method;=eventposturl`



#### Return



`
http://www.SubUserPostUrlHere.com
`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&task;=get&user;=customer@example.com&method;=eventposturl`



#### Return



`[{"url":"http:\/\/www.SubUserPostUrlHere.com"}]`




## Update / Set URL





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _set_

			
This will allow you to retrieve the event
			notification url for the specified customer

		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The name of the customer

		
		


			
url

			
Yes

			
The notification URL

			
This is the new event notification URL

		
		


			
method

			
Yes

			
Must be set to _eventposturl_

			
Allows you to access post event url
			functionality

		




### XML API Request




`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&task;=set&user;=customer@example.com&url;=http://www.SubUserPostUrlHere.com&method;=eventposturl`



#### Return



`

		success

`



### JSON API Request




`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&task;=set&user;=customer@example.com&url;=http://www.SubUserPostUrlHere.com&method;=eventposturl`



#### Return



`{"message":"success"}`




## Delete





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _delete_

			
This will allow you to delete the event
			notification url for the specified customer

		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The name of the customer

		
		


			
method

			
Yes

			
Must be set to _eventposturl_

			
Allows you to access post event url
			functionality

		




### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&task;=delete&user;=customer@example.com&method;=eventposturl`



#### Return



`

		success

`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&task;=delete&user;=customer@example.com&method;=eventposturl`



#### Return


`{"message":"success"}`

