---
comments: false
date: 2011-06-29 11:00:13
layout: page
slug: webapibounces
title: Web API Bounces
wordpress_id: 1569
---

This module allows you to retrieve and delete entries in the Bounces list.




## get


Retrieve a list of bounces with addresses and response codes, optionally with dates.


### Parameters





	
		


			
				Parameter
			
			
				Required
			
			
				Requirements
			
			
				Description
			
		
		


			

				date
			

			

				No
			

			

				Must be set to 1
			

			

				Retrieve the timestamp of the bounce records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS
			

		
		


			

				days
			

			

				No
			

			

				If specified, must be an integer greater than 0
			

			

				Number of days in the past for which to retrieve bounces (includes today)
			

		
		


			

				start_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.
			

			

				The start of the date range for which to retrieve bounces. 
			

		
		


			

				end_date
			

			

				No
			

			

				Date must be in YYYY-MM-DD format and be later than the start_date parameter.
			

			

				The end of the date range for which to retrieve bounces.
			

		
 


      
limit

      
No

      
some integer

      
Optional field to limit the number of results returned.

     
    


      
offset

      
No

      
some integer

      
optional beginning point in the list to retrieve from.

     
    


      
type

      
No

      
hard or soft

      
choose the type of bounce to search for.

     
    


      
email

      
No

      
email address eg testing@example.com

      
optional email addresses to search for.

     
	



## XML




### Command


`
https://sendgrid.com/api/bounces.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&date;=1
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


Delete an address from the Bounce list.  Please note that if no parameters are specified the ENTIRE list will be deleted.


### Parameters









Parameter
Required
Requirements
Description

    


      
start_date

      
No

      
Date must be in YYYY-mm-dd format and be before the end_date parameter

      
Optional date to start deleting from.

     
      


      
end_date

      
No

      
Date must be in YYYY-mm-dd format and be after the start_date parameter

      
Optional date to end deleting from.

     
    


      
type

      
No

      
hard or soft

      
choose the type of bounce to be removed.

     




email


No


Must be a valid user account email


Email bounce address to remove









## XML




### Command


`
https://sendgrid.com/api/bounces.delete.xml?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
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
https://sendgrid.com/api/bounces.delete.json?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
`


### Return-Sucess


`
{"message":"success"}
`


### Return-Error


`
{"message":"error","errors":[..."error messages"...]}
`

  
  

## Count 


 
  

### Parameters


 
  


    


      
Parameter

      
Required

      
Requirements

      
Description

     
    


      
start_date

      
No

      
Date must be in YYYY-mm-dd format and be before the end_date parameter

      
Optional date to start counting from.

     
      


      
end_date

      
No

      
Date must be in YYYY-mm-dd format and be after the start_date parameter

      
Optional date to end counting from.

     
    


      
type

      
No

      
hard or soft

      
choose the type of bounce to search for.

     
   
 
  

### XML


 
  

#### Command


    `https://sendgrid.com/api/bounces.count.xml?api_user=youremail@domain.com&api;_key=secureSecret` 
 
  

#### Return - Success


 
  `
  4
` 
 
  

#### Return - Error


 
    `
  error: reason
` 
 
 
  

### JSON


 
  

#### Command


 
    `https://sendgrid.com/api/bounces.count.json?api_user=youremail@domain.com&api;_key=secureSecret` 
 
  

#### Return - Success


 
  `{"count":"4"}` 
 
  

#### Return - Error


 
  `{"message":"error","errors":[..."error messages"...]}`
