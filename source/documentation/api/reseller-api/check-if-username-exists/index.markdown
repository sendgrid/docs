---
comments: false
date: 2012-01-30 23:12:49
layout: page
published: false
slug: check-if-username-exists
title: Check if Username Exists
wordpress_id: 2063
---

## Check if Username Exists


Notes: This API call allows SendGrid resellers to check if a given username currently exists, and by extension, if a username is available.



### Parameters









Parameter
Required
Requirements
Description





user


Yes


The username must be be between 3 and 64 characters and cannot be completely numeric.


The username that we are checking against existing usernames.






### XML API Request


`https://sendgrid.com/apiv2/reseller.checkusername.xml?api_user=username&api;_key=secureSecret&user;=username_to_check`


#### Return if user exists


`

  User Exists

`



#### Return is no user exists


`

  No User Exists

`



#### Return if username is not between 3 and 64 characters


`

  error
      
              Username can only be between 3 and 64 characters.
      

`



#### Return if the username is fully numeric


`

  error
      
              Username cannot be only numbers.
      

`



## 




### JSON API Request


`https://sendgrid.com/apiv2/reseller.checkusername.json?api_user=username&api;_key=secureSecret&user;=username_to_check`



#### Return if user exists


`{"message":"User Exists"}`



#### Return if no user exists


`{"message":"No User Exists"}`



#### Return if username is not between 3 and 64 characters


`{"message":"error","errors":["Username can only be between 3 and 64 characters."]}`



#### Return if the username is fully numeric


`{"message":"error","errors":["Username cannot be only numbers."]}`



#### Return if the parameter 'user' is not set


`{"message":"error","errors":["No username supplied"]}`

