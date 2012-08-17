---
comments: false
date: 2011-07-21 08:53:48
layout: page
slug: automatic-login
title: Automatic Login
wordpress_id: 2019
---

Allow customers to manage their account from your website using an iframe to our site.






## Initial API Call




### Parameters




In order to login your customer, you need to contact our web API to retrieve the unique URL to automatically login your customer. Then display the generated URL to automatically login your customer.






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Must be set in email format

			
This is the customer you will attempt to
			automatically login

		
		


			
password

			
No

			
Your customer password.

			
Authenticate the customer with this API call.

		
		


			
method

			
Yes

			
Must be set to _geturl_

			
Allows you to access automatic login
			functionality

		
	




### XML API Request



`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=geturl&user;=customer@example.com`



#### Return



`
	
		al_username=username&al;_subuser_name=customer@example.com&al;_hash=b478ab36ebc306990dd283b1c341898e
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=geturl&user;=customer@example.com`



#### Return



`{"params":"al_username=username&al;_subuser_name=customer@example.com&al;_hash=aa39649af578679d3a90d2cc43245d56"}`



## iFrame Usage





Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below.



``

