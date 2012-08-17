---
comments: false
date: 2011-07-27 07:44:27
layout: page
slug: view-available-packages
title: View Available Packages
wordpress_id: 2320
---

List all packages available to your account.





### Parameters





There are no extra parameters required for this call





### XML API Request



`https://sendgrid.com/api/distributor.packages.xml?api_user=username&api;_key=secureSecret`



#### Return - Success



`
	
		
			Basic Package
			9.95
			Basic Package description
			10000
			0.001
			false
			false
			50
		 
		 
			Silver Package
			79.95
			Silver Package Description
			50000
			0.001
			false
			false
			50
		
	
`



#### Return - Error



`
	error
	
		...
		... error messages ...
		...
	
`



### JSON API Request



`https://sendgrid.com/api/distributor.packages.json?api_user=username&api;_key=secureSecret`



#### Return - Success



`[{"name":"Basic Package","price":9.95,"description":"Basic Package description","credits":10000,"overage":0.001,"has_reseller":false,"has_ip":false,"distributor_price":50},{"name":"Silver Package","price":79.95,"description":"Silver Package description","credits":50000,"overage":0.001,"has_reseller":false,"has_ip":true}]`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`

