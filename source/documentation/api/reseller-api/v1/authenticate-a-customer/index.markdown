---
comments: false
date: 2011-07-27 07:31:23
layout: page
slug: authenticate-a-customer
title: Authenticate a Customer
wordpress_id: 2305
---

Authenticate a customer on your website before displaying their account information so that you can have users manage their SendGrid account on your website completely.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
user

			
Yes

			
Customer that is registered under your
			account.

		
		


			
password

			
Yes

			
Password the customer submitted.

		
		


			
method

			
Yes

			
Must be set to _auth_. Allows you to
			access authentication functionality

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&user;=customer@example.com&password;=theirsubmittedpassword&method;=auth`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&user;=customer@example.com&password;=theirsubmittedpassword&method;=auth`




#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`

