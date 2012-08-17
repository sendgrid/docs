---
comments: false
date: 2011-07-27 07:11:55
layout: page
slug: customer-account-limits
title: Customer Account Limits
wordpress_id: 2288
---




Throttle your customer when you need them to send only a specific amount of emails at a specified interval.






## Retrieve





Retrieve account limits for a specific customer. If the API call response is empty that means the customer has the limits removed.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _retrieve_

			
Retrieve account limits

		
		


			
user

			
Yes

			
Customer must be registered under your account

			
The customer who will have their account
			limits retrieved

		




### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=retrieve`



#### Return - Success



`

				0
				2000
				2011-02-21

`



#### Return - Error



`
			error
			
				...
				... error messages ...
				...
			
		`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=retrieve`



#### Return - Success



`[{"credit":"0","credit_remain":"2000","last_reset":"2011-02-21"}]`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## No Limit





Obtain a complete list of all customer.





### Parameters







		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _none_

			
Remove account limits

		
		


			
user

			
Yes

			
Customer must be registered under your account

			
The customer who will have their account
			limits removed

		
		


			
method

			
Yes

			
Must be set to _limit_

			
Allows you to access limit functionality

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=none`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=none`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Recurring Reset





A recurring reset will allow you to periodically reset a subusers credits to a number you specify. This can be either daily, weekly or monthly.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _recurring_

			
The task required to set the recurring reset

		
		


			
user

			
Yes

			
Customer must be registered under your account

			
The customer you will be applying a recurring
			reset to

		
		


			
credits

			
Yes

			
Must be an integer and greater than 0

			
The number of credits the customer will be
			reset to

		
		


			
period

			
Yes

			
Must be either daily, weekly, or monthly

			
How often you want SendGrid to reset your
			customers credits

		
		


			
startdate

			
No

			
Date must be in YYYY-mm-dd format

			
The date you want to start resetting the
			customers credits

		
		


			
enddate

			
No

			
Date must be in YYYY-mm-dd format

			
The date you want to stop resetting the
			customers credits

		
		


			
initial_credits

			
No

			
Must be an integer greater than 0

			
The number of credits you initially want the
			account reset to. If this is not set, the credits will be reset using
			the credits parameter

		
		


			
method

			
Yes

			
Must be set to _limit_

			
Allows you to access account limit
			functionality

		




### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=recurring&credits;=200&period;=daily`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=recurring&credits;=200&period;=daily`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Total Credits





Set a subusers credits to a specified amount.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _total_

			
Set the credits to the specified amount

		
		


			
user

			
Yes

			
Customer must be registered under your account

			
The customer who will have their credits
			updated

		
		


			
credits

			
Yes

			
Must be an integer and greater than 0

			
The total number of credits the customer will
			be reset to

		
		


			
method

			
Yes

			
Must be set to _limit_

			
Allows you to access account limit
			functionality

		




### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=total&credits;=200`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=total&credits;=200`



#### Return - Success


`{"message":"success"}`



#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Increment Credits





Increment a subusers credits by a specified amount.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _increment_

			
Increment the credits by the specified amount

		
		


			
user

			
Yes

			
Customer must be registered under your account

			
The customer who will have their credits
			incremented

		
		


			
credits

			
Yes

			
Must be an integer and greater than 0

			
The total number of credits the customer will
			be incremented by

		
		


			
method

			
Yes

			
Must be set to _limit_

			
Allows you to access account limit
			functionality

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=increment&credits;=200`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=increment&credits;=200`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Decrement Credits





Decrement a subusers credits by a specified amount.





### Parameters






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _increment_

			
Decrement the credits by the specified amount

		
		


			
user

			
Yes

			
Customer must be registered under your account

			
The customer who will have their credits
			decremented

		
		


			
credits

			
Yes

			
Must be an integer and greater than 0

			
The total number of credits the customer will
			be decremented by

		
		


			
method

			
Yes

			
Must be set to _limit_

			
Allows you to access account limit
			functionality

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=decrement&credits;=200`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&method;=limit&user;=customer@example.com&task;=decrement&credits;=200`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`

