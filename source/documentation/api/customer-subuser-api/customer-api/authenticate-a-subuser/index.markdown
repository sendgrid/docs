---
comments: false
date: 2011-09-09 17:37:45
layout: page
slug: authenticate-a-subuser
title: Authenticate A Subuser
wordpress_id: 2799
---




# Authenticate a subuser on your website before displaying their account information so that you can have users manage their SendGrid account on your website completely.

  




### Parameters









Parameter
Required
Requirements





user


Yes


Subuser that is registered under your account.






password


Yes


Password the subuser submitted.






### XML API Request


`https://sendgrid.com/apiv2/customer.auth.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&password;=theirsubmittedpassword`


#### Return - Success


` 

  success

`


#### Return - Error


` 
  error
   
  ... 
    
    ... 
    error messages 
    ...
     
  ... 
  

`


### JSON API Request


`https://sendgrid.com/apiv2/customer.auth.json?api_user=username&api;_key=secureSecret&user;=example@example.com&password;=theirsubmittedpassword`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`

