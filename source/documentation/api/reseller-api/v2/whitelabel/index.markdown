---
comments: false
date: 2011-07-21 08:49:12
layout: page
slug: whitelabel
title: Whitelabel
wordpress_id: 2017
---

With the whitelabel API calls you will be able to retrieve whitelabel settings related to your account.





## List





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
list

			
Yes

			
Must be set to _list_

		
		


			
method

			
Yes

			
Must be set to _whitelabel_

		




### XML API Request



`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=whitelabel&task;=list`



#### Return



`
	
		
			email.sendgrid.com
			email.sendgrid.com
		
		
			email.example.com
			email.example.com
		
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=whitelabel&task;=list`



#### Return



`[{"mail_domain":"email.sendgrid.com","url_domain":"email.sendgrid.com"},{"mail_domain":"email.example.com","url_domain":"email.example.com"}]`




## Append





### Parameters






	


		Parameter
		Required
		Requirements
	
	


		
list

		
Yes

		
Must be set to _append_

	
	


		
user

		
Yes

		
Subuser must be registered under your account

	
	


		
mail_domain

		
Yes

		
Whitelabel mail_domain used to append a
		whitelabel record to a subuser

	
	


		
method

		
Yes

		
Must be set to _whitelabel_

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=whitelabel&task;=append&user;=customer@example.com&mail;_domain=email.sendgrid.com`



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



`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=whitelabel&task;=append&user;=customer@example.com&mail;_domain=email.sendgrid.com`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`

