---
comments: false
date: 2011-09-09 17:34:46
layout: page
slug: automatic-login
title: Automatic Login
wordpress_id: 2793
---

Allow subusers to manage their account from your website using an iframe to our site.




## Initial API Call




### Parameters


In order to login your subuser, you need to contact our web API to retrieve the unique URL to automatically login your subuser. Then display the generated URL to automatically login your subuser.







Parameter
Required
Requirements
Description





user


Yes


Must be set in email format


This is the subuser you will attempt to automatically login






password


No


Your subuser password.


Authenticate the subuser with this API call.






### XML API Request


`https://sendgrid.com/apiv2/customer.geturl.xml?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return


`

  al_username=username&al;_subuser_name=example@example.com&al;_hash=b478ab36ebc306990dd283b1c341898e

`


### JSON API Request


`https://sendgrid.com/apiv2/customer.geturl.json?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return


`{"params":"al_username=username&al;_subuser_name=example@example.com&al;_hash=aa39649af578679d3a90d2cc43245d56"}`



## iFrame Usage


Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below.
`
`
