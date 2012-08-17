---
comments: false
date: 2011-09-13 12:34:49
layout: page
published: false
slug: whitelabel
title: Whitelabel
wordpress_id: 3048
---


With the whitelabel API calls you will be able to retrieve whitelabel settings related to your account.




## List




### Parameters









Parameter
Required
Requirements





list


Yes


Must be set to _list_






### XML API Request



`https://sendgrid.com/api/user.whitelabel.xml?api_user=username&api;_key=secureSecret&task;=list`


#### Return


`

  
    email.sendgrid.com
    email.sendgrid.com
  
  
    email.example.com
    email.example.com
  

`


### JSON API Request



`https://sendgrid.com/api/user.whitelabel.json?api_user=username&api;_key=secureSecret&task;=list`


#### Return


`[{"mail_domain":"email.sendgrid.com","url_domain":"email.sendgrid.com"},{"mail_domain":"email.example.com","url_domain":"email.example.com"}]`



## Append




### Parameters









Parameter
Required
Requirements





list


Yes


Must be set to _append_






user


Yes


Subuser must be registered under your account






mail_domain


Yes


Whitelabel mail_domain used to append a whitelabel record to a subuser






### XML API Request



`https://sendgrid.com/api/user.whitelabel.xml?api_user=username&api;_key=secureSecret&task;=append&user;=example@example.com&mail;_domain=email.sendgrid.com`


#### Return - Success


`

  success

`


#### Return - Error


`
  
    error
      
        ...
        ... error messages ...
        ...
      
  
`


### JSON API Request



`https://sendgrid.com/api/user.whitelabel.json?api_user=username&api;_key=secureSecret&task;=append&user;=example@example.com&mail;_domain=email.sendgrid.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`

