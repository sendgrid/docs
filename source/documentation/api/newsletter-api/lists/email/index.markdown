---
comments: false
date: 2011-05-15 18:12:13
layout: page
slug: email
title: Email
wordpress_id: 645
---

This module allows you to manage entries in your Recipient Lists.




## add


Add one or more emails to a Recipient List.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
list

      
Yes

      
Must be an existing Recipient List.

      
The list which you are adding email addresses too.

    
    


      
data

      
Yes

      
Must be a valid JSON string matching the required format.  Limited to a 1000 entries maximum.

      
Specify the name, email address, and additional fields to add to the specified Recipient List.

    
  



### Response



Success: (X records inserted)
`{"inserted": X}`

Failure:







Error
Cause





`{"error": "bad_list does not exist"}`


The list you specified cannot be found.






`{"error": "error in data: missing email field"}`


Your JSON string does not contain an "email" field






`{"error": "error in data: missing name field"}`


Your JSON string does not contain a "name" field






`{"error": "error in data: : is not a valid json string"}`


Your JSON string is not formed correctly







### Examples



Example JSON format:
`{"email":"address@example.com","name":"name","other_field":"value"}`

Add an email recipient to a list:
`
#curl -d 'api_user=username&api;_key=password&list;=my_list&data;={"email":"address@domain.com","name":"contactName"}' https://sendgrid.com/api/newsletter/lists/email/add.json
`

Add an email recipient with multiple data fields:
`#curl -d 'api_user=username&api;_key=password&list;=my_list&data;={"email":"grouch@trashcan.com","name":"Oscar","city":"New York","street":"123 Sesame St"}' https://sendgrid.com/api/newsletter/lists/email/add.json`

Add multiple email recipients to a list:
`
#curl -d 'api_user=username&api;_key=password&list;=my_list&data;[]={"email":"address1@domain.com","name":"contactName1"}&data;[]={"email":"address2@domain.com","name":"contactName2"}' https://sendgrid.com/api/newsletter/lists/email/add.json
`




## get


Get the email addresses and associated fields for a Recipient List.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
list

      
Yes

      
Must be an existing Recipient List.

      
The list you are searching.

    
    


      
email

      
No

      
Must be an email address or list of addresses.

      
Optional email addresses to search for in the Recipient List.

    
  




## delete


Remove one or more emails from a Recipient List.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
list

      
Yes

      
Must be an existing Recipient List.

      
The list which you are removing email addresses from.

    
    


      
email

      
Yes

      
Must be an email or emails in the Recipient List.

      
Specify the email address or email addresses you wish to remove from the specified Recipient List.

    
  
