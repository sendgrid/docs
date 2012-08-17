---
comments: false
date: 2011-07-21 09:35:27
layout: page
slug: invoice-retrieval
title: Invoice Retrieval
wordpress_id: 2031
---

Retrieve your invoice information.






## Retrieve Invoice Numbers





Return an array of invoice numbers to your account.





### Parameters






	


		Parameter
		Required
		Description
	
	


		
start_date

		
No

		
Must be in YYYY-mm-dd format. This is the
		start date to begin your invoice search from.

	
	


		
end_date

		
No

		
Must be in YYYY-mm-dd format and also include
		a start_date in the API call. This is the end date you wish to end
		your invoice search from.

	
	


		
status

		
No

		
Must be either paid, unpaid, refunded,
		deferred, canceled. This is used to specify what kind of invoice you
		would like returned.

	




### XML API Request



`https://sendgrid.com/api/billing.list.xml?api_user=username&api;_key=secureSecret&status;=paid`



#### Return



`
	
		
			2010010001
		
		
			2010010002
		
	
`



### JSON API Request



`https://sendgrid.com/api/billing.list.json?api_user=username&api;_key=secureSecret&status;=paid`



#### Return



`[{"number":"2010010001"},{"number":"2010010002"}]`




## Retrieve Invoices





Return an array of invoices.





### Parameters






	


		Parameter
		Required
		Description
	
	


		
start_date

		
No

		
Must be in YYYY-mm-dd format. This is the
		start date to begin your invoice search from.

	
	


		
end_date

		
No

		
Must be in YYYY-mm-dd format and also include
		a start_date in the API call. This is the end date you wish to end
		your invoice search from.

	
	


		
status

		
No

		
Must be either paid, unpaid, refunded,
		deferred, canceled. This is used to specify what kind of invoice you
		would like returned.

	




### XML API Request



`https://sendgrid.com/api/billing.get.xml?api_user=username&api;_key=secureSecret&status;=paid`



#### Return



`
	
		
			2010010001
			Basic Package
			10000000
			2010-01-01 00:00:00
			Paid
			100
			0
			10
			Recurring Bill
			0
			2009-12-01
			2009-12-31
			110
		
	
`



### JSON API Request



`https://sendgrid.com/api/billing.get.json?api_user=username&api;_key=secureSecret&status;=paid`



#### Return



`[{"number":"2010010001","package":"Basic Package","credits":10000000,"date_invoiced":"2010-01-01 00:00:00","status":"Paid","amount":100,"additional_charges":0,"overage":10,"type":"Recurring Bill","prorated":0,"start_date":"2009-12-01","end_date":"2009-12-31","final_amount":110}]`
