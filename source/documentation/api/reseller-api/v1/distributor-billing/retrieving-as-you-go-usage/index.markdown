---
comments: false
date: 2011-07-27 08:57:49
layout: page
slug: retrieving-as-you-go-usage
title: Retrieving As You Go Usage
wordpress_id: 2382
---

Retrieve invoices/usages from end users before your scheduled billing date.





### Parameters






		


			Parameter
			Required
			Description
		
		


			
task

			
Yes

			
Must be set to _current_.

		




### XML API Request



`https://sendgrid.com/api/distributor.billing.xml?api_user=username&api;_key=secureSecret&number;=2010010001&task;=current`



#### Return



`
	
		
			201001000100
			123456
			2010-09-01 00:00:00
			Unpaid
			1001
			6.95
			Recurring Bill
			0
			2010-08-01
			2010-08-31
			user4@example.com
			Example Package
			0
			1007.95
		
	
`



### JSON API Request



`https://sendgrid.com/api/distributor.billing.json?api_user=username&api;_key=secureSecret&number;=2010010001&task;=current`



#### Return



`[{"number":"201001000100","credits":"123456","date_invoiced":"2010-09-01
00:00:00","status":"Unpaid","amount":1001,"overage":6.95,"type":"Recurring
Bill","prorated":0,"start_date":"2010-08-01","end_date":"2010-08-31","username":"user4@example.com","package":"Example
Package","additional_charges":0,"final_amount":1007.95}]`

