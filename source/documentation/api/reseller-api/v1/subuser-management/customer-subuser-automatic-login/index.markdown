---
comments: false
date: 2011-07-27 08:19:30
layout: page
slug: customer-subuser-automatic-login
title: Customer Subuser Automatic Login
wordpress_id: 2351
---

Allow customer subusers to manage their account from your website using an iframe to our site.






## Initial API Call




### Parameters





In order to login your customer subuser, you need to contact our web API to retrieve the unique URL to automatically login your customer subuser. Then display the generated URL to automatically login yourcustomer subuser.






		


			Parameter
			Required
			Requirements
			Description
		
		


			
user

			
Yes

			
Must be set in email format

			
This is the customer subuser you will attempt
			to automatically login

		
		


			
password

			
No

			
Your customer subuser password.

			
Authenticate the customer subuser with this
			API call.

		





### XML API Request



`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=geturl&user;=example@example.com`



#### Return



`
			al_username=username&al;_subuser_name=example@example.com&al;_hash=b478ab36ebc306990dd283b1c341898e
		`



### JSON API Request



`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=geturl&user;=example@example.com`



#### Return



`{"params":"al_username=username&al;_subuser_name=example@example.com&al;_hash=aa39649af578679d3a90d2cc43245d56"}`



## iFrame Usage





Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below.



``

