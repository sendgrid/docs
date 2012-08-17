---
comments: false
date: 2011-09-13 12:36:42
layout: page
slug: event-notification-url
title: Event Notification URL
wordpress_id: 3052
---





## Retrieve




### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _get_


This will allow you to retrieve the event notification url for the specified subuser






user


Yes


Subuser must be registered under your account


The username of the subuser






### XML API Request



`https://sendgrid.com/api/user.eventposturl.xml?api_user=username&api;_key=secureSecret&task;=get&user;=example@example.com`


#### Return


`http://www.SubUserPostUrlHere.com`


### JSON API Request



`https://sendgrid.com/api/user.eventposturl.json?api_user=username&api;_key=secureSecret&task;=get&user;=example@example.com`


#### Return


`[{"url":"http:\/\/www.SubUserPostUrlHere.com"}]`



## Update / Set URL




### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _set_


This will allow you to retrieve the event notification url for the specified subuser






user


Yes


Subuser must be registered under your account


The name of the subuser






url


Yes


The notification URL


This is the new event notification URL






### XML API Request



`https://sendgrid.com/api/user.eventposturl.xml?api_user=username&api;_key=secureSecret&task;=set&user;=example@example.com&url;=http://www.SubUserPostUrlHere.com`


#### Return


`

  success

`


### JSON API Request



`https://sendgrid.com/api/user.eventposturl.json?api_user=username&api;_key=secureSecret&task;=set&user;=example@example.com&url;=http://www.SubUserPostUrlHere.com`


#### Return


`{"message":"success"}`



## Delete




### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _delete_


This will allow you to delete the event notification url for the specified subuser






user


Yes


Subuser must be registered under your account


The name of the subuser






### XML API Request



`https://sendgrid.com/api/user.eventposturl.xml?api_user=username&api;_key=secureSecret&task;=delete&user;=example@example.com`


#### Return


`

  success

`


### JSON API Request



`https://sendgrid.com/api/user.eventposturl.json?api_user=username&api;_key=secureSecret&task;=delete&user;=example@example.com`


#### Return


`{"message":"success"}`

