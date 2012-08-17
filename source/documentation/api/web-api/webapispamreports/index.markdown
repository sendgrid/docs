---
comments: false
date: 2011-06-29 12:23:31
layout: page
slug: webapispamreports
title: Spam Reports
wordpress_id: 1647
---

This module allows you to retrieve and delete entries in the Spam Reports list.




## get


Retrieve a list of spam reports with addresses and response codes, optionally with dates.


### Parameters









Parameter
Required
Requirements
Description





date


No


Must be set to 1


Retrieve the timestamp of the spam report records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS






days


No


If specified, must be an integer greater than 0


Number of days in the past for which to retrieve spam reports (includes today)






start_date


No


Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.


The start of the date range for which to retrieve spam reports.






end_date


No


Date must be in YYYY-MM-DD format and be later than the start_date parameter.


The end of the date range for which to retrieve spam reports.


   


      
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
https://sendgrid.com/api/spamreports.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&date;=1
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


Delete an address from the Spam Reports list.


### Parameters









Parameter
Required
Requirements
Description





email


Yes


Must be a valid user account email


Email spam reports address to remove






## XML




### Command


`
https://sendgrid.com/api/spamreports.delete.xml?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
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
https://sendgrid.com/api/spamreports.delete.json?api_user=youremail@domain.com&api;_key=secureSecret&email;=emailToDelete@domain.com
`


### Return-Sucess


`
{"message":"success"}
`


### Return-Error


`
{"message":"error","errors":[..."error messages"...]}
`
