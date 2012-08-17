---
comments: false
date: 2011-07-22 08:23:33
layout: page
slug: authenticate-a-customer-subuser
title: Authenticate a Customer Subuser
wordpress_id: 2093
---

Authenticate a customer subuser on your website before displaying their account information so that you can have users manage their SendGrid account on your website completely.





### Parameters






	


		Parameter
		Required
		Requirements
	
	


		
user

		
Yes

		
Customer subuser that is registered under
		your account.

	
	


		
password

		
Yes

		
Password the customer subuser submitted.

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&password;=theirsubmittedpassword&method;=auth`



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




`https://sendgrid.com/apiv2/reseller.manageSubuser.json?api_user=username&api;_key=secureSecret&user;=example@example.com&password;=theirsubmittedpassword&method;=auth`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`
