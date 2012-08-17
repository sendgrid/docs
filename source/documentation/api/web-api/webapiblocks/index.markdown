---
comments: false
date: 2011-06-29 11:31:51
layout: page
slug: webapiblocks
title: Blocks
wordpress_id: 1628
---

This module allows you to retrieve and delete entries in the Blocks list.




## get


Retrieve a list of Blocks with addresses and response codes, optionally with dates.


### Parameters





	
		


			
				Parameter
			
			
				Required
			
			
				Requirements
			
			
				Description
			
		
		


			

				date
			

			

				No
			

			

				Must be set to 1
			

			

				Retrieve the timestamp of the Block records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS
			

		
		


			

				days
			

			

				No
			

			

				If specified, must be an integer greater than 0
			

			

				Number of days in the past for which to retrieve blocks (includes today)
			

		
		


			

				start_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.
			

			

				The start of the date range for which to retrieve blocks. 
			

		
		


			

				end_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be later than the start_date parameter.
			

			

				The end of the date range for which to retrieve blocks.
			

		
	



## XML




### Command


`
https://sendgrid.com/api/blocks.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&date;=1
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


Delete an address from the Block list.


### Parameters









Parameter
Required
Requirements
Description





email


Yes


Must be a valid user account email


Email block address to remove









## XML




### Command


`
https://sendgrid.com/api/blocks.delete.xml?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
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
https://sendgrid.com/api/blocks.delete.json?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
`


### Return-Sucess


`
{"message":"success"}
`


### Return-Error


`
{"message":"error","errors":[..."error messages"...]}
`
