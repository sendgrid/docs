---
comments: false
date: 2011-06-29 11:49:41
layout: page
slug: webapiinvalidemails
title: Invalid Emails
wordpress_id: 1642
---

This module allows you to retrieve and delete entries in the Invalid Emails list.




## get


Retrieve a list of invalid emails with addresses and response codes, optionally with dates.


### Parameters





	
		


			
				Parameter
			
			
				Required
			
			
				Requirements
			
			
				Description
			
		
		


			

				date
			

			

				No
			

			

				Must be set to 1
			

			

				Retrieve the timestamp of the invalid email records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS
			

		
		


			

				days
			

			

				No
			

			

				If specified, must be an integer greater than 0
			

			

				Number of days in the past for which to retrieve invalid emails (includes today)
			

		
		


			

				start_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.
			

			

				The start of the date range for which to retrieve invalid emails. 
			

		
		


			

				end_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be later than the start_date parameter.
			

			

				The end of the date range for which to retrieve invalid emails.
			

		
    


      
limit

      
No

      
some integer

      
Optional field to limit the number of results returned.

     
    


      
offset

      
No

      
some integer

      
Optional beginning point in the list to retrieve from.

     
    


      
email

      
No

      
email address eg testing@example.com

      
Optional email addresses to search for.

     
	




## XML




### Command


`
https://sendgrid.com/api/invalidemails.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&date;=1
`


### Return


`

  
    email1@domain.com
    5.1.1
    host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email1@domain.com
    2009-06-10 12:40:30
  
  
    email2@domain2.com
    5.1.1
    host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email2@domain2.com
    2009-08-01 10:16:30
  
`


### NOTE:


` tags will not populate unless date is set`





## delete


Delete an address from the Invalid Email list.


### Parameters









Parameter
Required
Requirements
Description





email


Yes


Must be a valid user account email


Email Invalid Email address to remove









## XML




### Command


`
https://sendgrid.com/api/invalidemails.delete.xml?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
`



### Return-Sucess



`

success

`



### Return-Error



`

Email does not exist

`


## JSON




### Command


`
https://sendgrid.com/api/invalidemails.delete.jsonapi_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
`


### Return-Sucess


`
{"message":"success"}
`


### Return-Error


`
{"message":"error","errors":[..."error messages"...]}
`
