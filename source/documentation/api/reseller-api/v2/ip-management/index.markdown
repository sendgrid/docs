---
comments: false
date: 2011-07-21 08:44:12
layout: page
slug: ip-management
title: IP Management
wordpress_id: 2015
---




## All





View all IPs under your account.





### Parameters






	


		Parameter
		Required
		Requirements
		Description
	
	


		
task

		
Yes

		
Must be set to _all_.

		
Retrieve all IPs available for your account.

	
	


		
ip

		
No

		
Can be a complete or partial IP address.

		
Filter your search results.

	
	


		
system

		
No

		
Must be set to _true_.

		
Include IPs assigned by SendGrid.

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.ip.xml?api_user=username&api;_key=secureSecret&task;=all`



#### Return



`
	
		255.255.255.0
		255.255.254.0
		255.255.253.0
		255.255.252.0
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.ip.json?api_user=username&api;_key=secureSecret&task;=all`



#### Return - Success



`["255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"]`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Free





A listing of all free IPs under your account. A Free IP is any IP that is not in use by a user or is not linked to an IP grouping.





### Parameters






	


		Parameter
		Required
		Requirements
		Parameter
	
	


		
task

		
Yes

		
Must be set to _free_.

		
Retrieve all free IPs for your account.

	
	


		
ip

		
No

		
Can be a complete or partial IP address.

		
Filter your search results.

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.ip.xml?api_user=username&api;_key=secureSecret&task;=free`



#### Return



`
	
		255.255.255.0
		255.255.254.0
		255.255.253.0
		255.255.252.0
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.ip.json?api_user=username&api;_key=secureSecret&task;=free`



#### Return - Success



`["255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"]`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Taken





A listing of all taken IPs under your account. A Taken IP is any IP that is in use by a user or is linked to an IP grouping.





### Parameters






	


		Parameter
		Required
		Requirements
		Parameter
	
	


		
task

		
Yes

		
Must be set to _taken_.

		
Retrieve all taken IPs for your account.

	
	


		
ip

		
No

		
Can be a complete or partial IP address.

		
Filter your search results.

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.ip.xml?api_user=username&api;_key=secureSecret&task;=taken`



#### Return



`
	
		255.255.255.0
		255.255.254.0
		255.255.253.0
		255.255.252.0
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.ip.json?api_user=username&api;_key=secureSecret&task;=taken`



#### Return - Success



`["255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"]`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Available





A listing of all available IPs under your account. An Available IP is any IP that is currently free, or is in use by a user _but_ that user is inactive or that is not linked to an IP grouping.





### Parameters






	


		Parameter
		Required
		Requirements
		Parameter
	
	


		
task

		
Yes

		
Must be set to _available_.

		
Retrieve all available IPs for your account.

	
	


		
ip

		
No

		
Can be a complete or partial IP address.

		
Filter your search results.

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.ip.xml?api_user=username&api;_key=secureSecret&task;=available`



#### Return



`
	
		255.255.255.0
		255.255.254.0
		255.255.253.0
		255.255.252.0
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.ip.json?api_user=username&api;_key=secureSecret&task;=available`



#### Return - Success



`["255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"]`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Usage





The current breakdown of users who are using your IPs.





### Parameters






	


		Parameter
		Required
		Requirements
		Parameter
	
	


		
task

		
Yes

		
Must be set to _usage_.

		
Retrieve all IPs in use broken down by user.

	
	


		
ip

		
No

		
Can be a complete or partial IP address.

		
Filter your search results.

	
	


		
user

		
No

		
Can be a complete or part of a username.

		
Filter your search results.

	
	


		
group

		
No

		
Can be a complete or part of a group name.

		
Filter your search results.

	
	


		
system

		
No

		
Must be set to _true_.

		
Include IPs assigned by SendGrid.

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.ip.xml?api_user=username&api;_key=secureSecret&task;=usage&user;=example.com`



#### Return



`
	
		
			255.255.253.0
			user4@example.com
		
		
			255.255.254.0
			user4@example.com
		
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.ip.json?api_user=username&api;_key=secureSecret&task;=usage&user;=example.com`



#### Return - Success


`[{"ip":"255.255.253.0","user":"user4@example.com"},{"ip":"255.255.254.0","user":"user4@example.com"}]`



#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`

