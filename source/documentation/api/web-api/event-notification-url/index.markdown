---
comments: false
date: 2011-06-29 15:16:51
layout: page
published: false
slug: event-notification-url
title: Event Notification URL
wordpress_id: 1717
---

  




## Get Notification URL


  



## XML




### Command


`https://sendgrid.com/api/eventposturl.get.xml?api_user=youremail@domain.com&api;_key=secureSecret`


### Return


`http://www.YourPostUrlHere.com`


## JSON




### Command


`https://sendgrid.com/api/eventposturl.get.json?api_user=youremail@domain.com&api;_key=secureSecret`


### Return


`[{"url":"http:\/\/www.YourPostUrlHere.com"}]`
  






## Update / Set URL


  



### Parameters









Parameter
Required
Requirements





url


Yes


The URL to receive event notifications





## XML




### Command


`https://sendgrid.com/api/eventposturl.set.xml?api_user=youremail@domain.com&api;_key=secureSecret&url;=http://www.YourPostUrlHere.com`


### Return


`

  success

`


## JSON




### Command


`https://sendgrid.com/api/eventposturl.set.json?api_user=youremail@domain.com&api;_key=secureSecret&url;=http://www.YourPostUrlHere.com`


### Return


`{"message":"success"}`
  






## Delete


  



## XML




### Command


`https://sendgrid.com/api/eventposturl.delete.xml?api_user=youremail@domain.com&api;_key=secureSecret`


### Return - Success


`

  success

`


## JSON




### Command


`https://sendgrid.com/api/eventposturl.delete.json?api_user=youremail@domain.com&api;_key=secureSecret`


## Return - Success


`{"message":"success"}`
