---
comments: false
date: 2011-06-29 14:39:04
layout: page
slug: webapiparse
title: Parse
wordpress_id: 1656
---

  




## Get Current Settings


Pull down the settings already configured for parsing incoming email.


## XML




### Command


`https://sendgrid.com/api/parse.get.xml?api_user=youremail@domain.com&api;_key=secureSecret`


### Return - Success


`

  
    www.example.com
    www.mydomain.com/parse.php
    1
  

`


### Return - Empty Set


`  `


## JSON




### Command


`https://sendgrid.com/api/parse.get.json?api_user=youremail@domain.com&api;_key=secureSecret`


### Return - Success


`{"parse":[{"hostname":"www.example.com","url":"www.mydomain.com\/parse.php","spam_check":1}]}`


### Return - Empty Set


`{"parse":[]}`
  






## Set New Entry


Specify the hostname and url for parsing incoming emails.


## XML




### Command


`https://sendgrid.com/api/parse.set.xml?api_user=youremail@domain.com&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php@spam_check=1`



### Return - Success

### 
`

  success

`
  



### Return - Error


`

  error
  
    ...
    ... error messages ...
    ...
  

`


## JSON




### Command


`https://sendgrid.com/api/parse.set.json?api_user=youremail@domain.com&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php@spam_check=1`


### Return - Success 


`{"message":"success"}`


### Return - Error


`{"message":"error","errors":[..."error messages"...]}`
  






## Edit Entry


Edit your existing settings for parsing incoming emails.


## XML




### Command


`https://sendgrid.com/api/parse.set.xml?api_user=youremail@domain.com&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php@spam_check=1`


### Return - Success


`

  success

`


### Return - Error


`

  error
  
    ...
    ... error messages ...
    ...
  

`


## JSON




### Command


`https://sendgrid.com/api/parse.set.json?api_user=youremail@domain.com&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php@spam_check=1`


### Return - Success


`{"message":"success"}`


### Return - Error


`{"message":"error","errors":[..."error messages"...]}`
  






## Delete Entry


Delete the existing settings for parsing incoming emails.


## XML




### Command


`https://sendgrid.com/api/parse.delete.xml?api_user=youremail@domain.com&api;_key=secureSecret&hostname;=www.example.com`


### Return - Success


`

  success

Return - Error

  error
  
    ...
    ... error messages ...
    ...
  

`


## JSON




### Command


`https://sendgrid.com/api/parse.delete.json?api_user=youremail@domain.com&api;_key=secureSecret&hostname;=www.example.com`


### Return - Success


`{"message":"success"}`


### Return - Error


`{"message":"error","errors":[..."error messages"...]}`
