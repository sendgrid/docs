---
comments: false
date: 2011-07-27 08:59:20
layout: page
slug: retrieving-end-users-invoices-usage
title: Retrieving End Users Invoices / Usage
wordpress_id: 2384
---

### Parameters






		


			Parameter
			Required
			Description
		
		


			
task

			
Yes

			
Must be set to _usage_.

		
		


			
number

			
Yes

			
Must be the invoice number you received from
			SendGrid.

		




### XML API Request



`https://sendgrid.com/api/distributor.billing.xml?api_user=username&api;_key=secureSecret&number;=2010010001&task;=usage`



#### Return



`
	2010010001
	
		
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
		
		
			201001000200
			1333
			2010-09-05 00:00:00
			Unpaid
			13.95
			0
			Recurring Bill
			0
			2010-08-01
			2010-08-31
			user5@example.com
			Example Package
			0
			13.95
		
	
`



#### Return - Error



		`
	error
	
		...
		... error messages ...
		...
	
`



### JSON API Request




`https://sendgrid.com/api/distributor.billing.json?api_user=username&api;_key=secureSecret&number;=2010010001&task;=usage`



#### Return



`{"number":"2010010001","invoices":
[{"number":"201001000100","credits":"123456","date_invoiced":"2010-09-01
00:00:00","status":"Unpaid","amount":1001,"overage":6.95,"type":"Recurring
Bill","prorated":0,"start_date":"2010-08-01","end_date":"2010-08-31","username":"user4@example.com","package":"Example
Package","additional_charges":0,"final_amount":1007.95},{"number":"201001000200","credits":"1333","date_invoiced":"2010-09-05
00:00:00","status":"Unpaid","amount":13.95,"overage":0,"type":"Recurring
Bill","prorated":0,"start_date":"2010-08-01","end_date":"2010-08-31","username":"user5@example.com","package":"Example
Package","additional_charges":0,"final_amount":13.95}]}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`

