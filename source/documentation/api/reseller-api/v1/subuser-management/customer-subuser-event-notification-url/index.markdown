---
comments: false
date: 2011-07-27 08:20:58
layout: page
slug: customer-subuser-event-notification-url
title: Customer Subuser Event Notification URL
wordpress_id: 2354
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
			notification url for the specified customer subuser

		
		


			
user

			
Yes

			
Customer subuser must be registered under
			your account

			
The username of the customer subuser

		




### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&task;=get&user;=example@example.com&method;=eventposturl`



#### Return



`http://www.SubUserPostUrlHere.com`



### JSON API Request



`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&task;=get&user;=example@example.com&method;=eventposturl`



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
			notification url for the specified customer subuser

		
		


			
user

			
Yes

			
Customer subuser must be registered under
			your account

			
The name of the customer subuser

		
		


			
url

			
Yes

			
The notification URL

			
This is the new event notification URL

		





### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&task;=set&user;=example@example.com&url;=http://www.SubUserPostUrlHere.com&method;=eventposturl`



#### Return



`
			success
		`



### JSON API Request



`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&task;=set&user;=example@example.com&url;=http://www.SubUserPostUrlHere.com&method;=eventposturl`



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
			notification url for the specified customer subuser

		
		


			
user

			
Yes

			
Customer subuser must be registered under
			your account

			
The name of the customer subuser

		





### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&task;=delete&user;=example@example.com&method;=eventposturl`



#### Return



`
			success
		`



### JSON API Request




`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&task;=delete&user;=example@example.com&method;=eventposturl`



#### Return


`{"message":"success"}`

