---
comments: false
date: 2011-09-09 18:02:50
layout: page
slug: filter-apps
title: Filter / Apps
wordpress_id: 2807
---





## List


List all of the available apps.

Note: The _name_ entry is used in all the other API calls to identify a app.








Parameter


Required


Requirements


Description






task


Yes


Must be set to _getavailable_


Retrieve Available Apps






user


Yes


Subuser must be registered under your account


The subuser who we will update






### XML API Request


`https://sendgrid.com/apiv2/customer.apps.xml?api_user=username&api;_key=secureSecret&task;=getavailable&user;=example@example.com`


#### Return - Success


`

  
    twitter
    Twitter
    This plugin allows you to send an email message to twitter
    0 
   
  ... 

`


### JSON API Request


`https://sendgrid.com/apiv2/customer.apps.json?api_user=username&api;_key=secureSecret&task;=getavailable&user;=example@example.com`


#### Return - Success


`[{"name":"twitter","title":"Twitter","description":"This plugin allows you to send an email message to twitter","activated":false}, ... ]`



## Activate App










Parameter


Required


Requirements


Description






task


Yes


Must be set to _activate_


Retrieve Available Apps






user


Yes


Subuser must be registered under your account


The subuser who we will update






### XML API Request


`https://sendgrid.com/apiv2/customer.apps.xml?api_user=username&api;_key=secureSecret&name;=twitter&task;=activate&user;=example@example.com`


#### Return - Success


`

  success

`


### JSON API Request


`https://sendgrid.com/apiv2/customer.apps.json?api_user=username&api;_key=secureSecret&name;=twitter&task;=activate&user;=example@example.com`


#### Return


`{"message":"success"}`



## Deactivate App










Parameter


Required


Requirements


Description






task


Yes


Must be set to _deactivate_


Retrieve Available Apps






user


Yes


Subuser must be registered under your account


The subuser who we will update






### XML API Request


`https://sendgrid.com/apiv2/customer.apps.xml?api_user=username&api;_key=secureSecret&name;=twitter&task;=deactivate&user;=example@example.com`


#### Return - Success


`

  success

`


### JSON API Request


`https://sendgrid.com/apiv2/customer.apps.json?api_user=username&api;_key=secureSecret&name;=twitter&task;=deactivate&user;=example@example.com`


#### Return


`{"message":"success"}`



## Customize App


These API calls require that settings are passed using POST.


### XML API Request


`https://sendgrid.com/apiv2/customer.apps.xml?api_user=username&api;_key=secureSecret&name;=twitter&task;=setup&user;=example@example.com`


#### Return - Success


`

  field_value
  ... 

`


#### Return - Error


`

  error
  ... error messages ...

`


#### Return - Empty


This is returned if that filter has no settings or is not enabled.
``


### JSON API Request


`https://sendgrid.com/apiv2/customer.apps.json?api_user=username&api;_key=secureSecret&name;=twitter&task;=setup&user;=example@example.com`


#### Return - Success


`{"message":"success","settings":{"field_name":"field_value”}}`


#### Return - Empty


This is returned if that filter has no settings or is not enabled.
`{"settings":null} `



## Get Current Settings




### XML API Request


`https://sendgrid.com/apiv2/customer.apps.xml?api_user=username&api;_key=secureSecret&name;=twitter&task;=getsettings&user;=example@example.com`


#### Return - Success


`

  field_value
  ... 

`


#### Return - Error


`

  error
  ... error messages ...

`


#### Return - Empty


This is returned if that filter has no settings or is not enabled.
``


### JSON API Request


`https://sendgrid.com/apiv2/customer.apps.json?api_user=username&api;_key=secureSecret&name;=twitter&task;=getsettings&user;=example@example.com`


#### Return - Success


`{"message":"success","settings":{"field_name":"field_value”}}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`


#### Return - Empty


This is returned if that filter has no settings or is not enabled.
`{"settings":null}`

