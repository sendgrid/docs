---
comments: false
date: 2011-06-29 16:31:50
layout: page
slug: webapiunsubscribes
title: Unsubscribes
wordpress_id: 1734
---

This module allows you to retrieve, delete and add entries in the Unsubscribes list.




## get


Retrieve a list of Unsubscribes with addresses and optionally with dates.


### Parameters





	
		


			
				Parameter
			
			
				Required
			
			
				Requirements
			
			
				Description
			
		
		


			

				date
			

			

				No
			

			

				Must be set to 1
			

			

				Retrieve the timestamp of the unsubscribe records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS
			

		
		


			

				days
			

			

				No
			

			

				If specified, must be an integer greater than 0
			

			

				Number of days in the past for which to retrieve unsubscribes (includes today)
			

		
		


			

				start_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.
			

			

				The start of the date range for which to retrieve unsubscribes. 
			

		
		


			

				end_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be later than the start_date parameter.
			

			

				The end of the date range for which to retrieve unsubscribes.
			

		
      


      
limit

      
No

      
some integer

      
Optional field to limit the number of results returned.

     
    


      
offset

      
No

      
some integer

      
optional beginning point in the list to retrieve from.

     
    


      
email

      
No

      
email address eg testing@example.com

      
optional email addresses to search for.

     
	




## XML




### Command


`
https://sendgrid.com/api/unsubscribes.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&date;=1
`


### Return


`


email1@domain.com
2009-06-10 12:40:30


email2@domain2.com
2009-06-10 12:40:30

`


### NOTE:


` tags will not populate unless date is set`



## delete


Delete an address from the Unsubscribe list.  Please note that if no parameters are provided the ENTIRE list will be removed.


### Parameters









Parameter
Required
Requirements
Description

    


      
start_date

      
No

      
Date must be in YYYY-mm-dd format and be before the end_date parameter

      
Optional date to start retrieving for.
  
     
      


      
end_date

      
No

      
Date must be in YYYY-mm-dd format and be after the start_date parameter

      
Optional date to end retrieving for.

     




email


No


Must be a valid user account email


Unsubscribed email address to remove






## XML




### Command


`
https://sendgrid.com/api/unsubscribes.delete.xml?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
`


### Return-Success


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
https://sendgrid.com/api/unsubscribes.delete.json?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
`


### Return-Sucess


`
{"message":"success"}
`


### Return-Error


`
{"message":"error","errors":[..."error messages"...]}
`



## add


Add email addresses to the Unsubscribe list.


### Parameters









Parameter
Required
Requirements
Description





email


Yes


Must be a valid email address


Email address to add to unsubscribe list






## XML




### Command


`https://sendgrid.com/api/unsubscribes.add.xml?api_user=youremail%40domain.com&api;_key=secureSecret&email;=email2@domain.com`


### Return - Success


`

success

`


### Return - Error


`

Email does not exist

`


## JSON




### Command


`https://sendgrid.com/api/unsubscribes.add.json?api_user=youremail%40domain.com&api;_key=secureSecret&email;=email2@domain.com`


### Return - Success


`{"message":"success"}`


### Return - Error


`{"message":"error","errors":[..."error messages"...]}`
