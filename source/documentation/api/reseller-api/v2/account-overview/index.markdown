---
comments: false
date: 2011-07-21 10:10:27
layout: page
slug: account-overview
title: Account Overview
wordpress_id: 2039
---

View general account information regarding your customers, including billing cycle, current billing cycle, credit usage, package, overage credits, etc.





### Parameters






	


		Parameter
		Required
		Requirements
		Description
	
	


		
task

		
Yes

		
Must be set to _overview_.

		
The task that allows us to present the
		customers information.

	
	


		
user

		
Yes

		
Customer that is registered under your
		account.

		
The customer

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.account.xml?api_user=username&api;_key=secureSecret&task;=overview&user;=customer@example.com`



#### Return - Success



`
	
		
			100
			50000
			Silver Package
			50000
			100000
			0
			50000
			2010-08-30
			2010-09-29
			2010-09-30
		
	
`



#### Return - Error



`

      error
      
        ...
        ... error messages ...
        ...
      

`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.account.json?api_user=username&api;_key=secureSecret&task;=overview&user;=customer@example.com`



#### Return - Success



`{"reputation":100,"requests":500000,"package":"Silver Package","credits_allowed":50000,"credits_used":100000,"credits_remain":0,"credits_overage":50000,"billing_start_date":"2010-08-30","billing_end_date":"2010-09-29","billing_process_date":"2010-09-30"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`

