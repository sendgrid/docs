---
comments: false
date: 2011-09-09 18:01:58
layout: page
slug: parse-settings
title: Parse Settings
wordpress_id: 2801
---




# 




## Get Current Settings









Parameter
Required
Requirements
Description





task


Yes


Must be set to _get_


Retrieve Parse settings






user


Yes


Subuser must be registered under your account


The subuser who we will update






### XML API Request


`https://sendgrid.com/apiv2/customer.parse.xml?api_user=username&api;_key=secureSecret&task;=get&user;=example@example.com`


#### Return - Success


`

  
    www.example.com
    www.mydomain.com/parse.php
    1
  

`


#### Return - Empty Set


` `


### JSON API Request


`https://sendgrid.com/apiv2/customer.parse.json?api_user=username&api;_key=secureSecret&task;=get&user;=example@example.com`


#### Return - Success


`{"parse":[{"hostname":"www.example.com","url":"www.mydomain.com\/parse.php","spam_check":1}]}`


#### Return - Empty Set


`{"parse":[]}`


# 




## Create New Entry









Parameter
Required
Requirements
Description





task


Yes


Must be set to _set_


Set Parse settings






hostname


Yes


No more than 255 characters


Hostname we will use with your email






url


Yes




The parse destination






user


Yes


Subuser must be registered under your account


The subuser who we will update






### XML API Request


`https://sendgrid.com/apiv2/customer.parse.xml?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&task;=set&user;=example@example.com`


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


`https://sendgrid.com/apiv2/customer.parse.json?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&task;=set&user;=example@example.com`


#### Return


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`


# 




## Edit Entry









Parameter
Required
Requirements
Description





task


Yes


Must be set to _update_


Set Parse settings






hostname


Yes


No more than 255 characters


Hostname entry you want to update






url


Yes




The parse destination






user


Yes


Subuser must be registered under your account


The subuser who we will update






### XML API Request


`https://sendgrid.com/apiv2/customer.parse.xml?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&task;=update&user;=example@example.com`


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


`https://sendgrid.com/apiv2/customer.parse.json?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&task;=parse&user;=example@example.com`


#### Return


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`


# 




## Delete Entry









Parameter
Required
Requirements
Description





task


Yes


Must be set to _delete_


Set Parse settings






user


Yes


Subuser must be registered under your account


The subuser who we will update






hostname


Yes


Must be the hostname you wish to delete.


The host name you will remove for your subuser






### XML API Request


`https://sendgrid.com/apiv2/customer.parse.xml?api_user=username&api;_key=secureSecret&hostname;=www.example.com&task;=delete&user;=example@example.com`


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


`https://sendgrid.com/apiv2/customer.parse.json?api_user=username&api;_key=secureSecret&hostname;=www.example.com&task;=delete&user;=example@example.com`


#### Return


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`

