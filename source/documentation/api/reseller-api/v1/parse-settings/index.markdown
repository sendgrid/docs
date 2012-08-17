---
comments: false
date: 2011-07-27 07:32:38
layout: page
slug: parse-settings
title: Parse Settings
wordpress_id: 2308
---




## Get Current Settings





		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _get_

			
Retrieve Parse settings

		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The customer who we will update

		
		


			
method

			
Yes

			
Must be set to _parse_

			
Allows you to access parse functionality

		




### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&method;=parse&task;=get&method;=parse&user;=customer@example.com`



#### Return - Success



`

			
				www.example.com
				www.mydomain.com/parse.php
				1
			

`



#### Return - Empty Set



`

`



### JSON API Request



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&task;=get&method;=parse&user;=customer@example.com`



#### Return - Success



`{"parse":[{"hostname":"www.example.com","url":"www.mydomain.com\/parse.php","spam_check":1}]}`



#### Return - Empty Set



`{"parse":[]}`




## Create New Entry





		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _set_

			
Set Parse settings

		
		


			
hostname

			
Yes

			
No more than 255 characters

			
Hostname we will use with your email

		
		


			
url

			
Yes

			

			
The parse destination

		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The customer who we will update

		
		


			
method

			
Yes

			
Must be set to _parse_

			
Allows you to access parse functionality

		



### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&method;=parse&task;=set&method;=parse&user;=customer@example.com`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&method;=parse&task;=set&method;=parse&user;=customer@example.com`



#### Return



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Edit Entry






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _update_

			
Set Parse settings

		
		


			
hostname

			
Yes

			
No more than 255 characters

			
Hostname entry you want to update

		
		


			
url

			
Yes

			

			
The parse destination

		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The customer who we will update

		
		


			
method

			
Yes

			
Must be set to _parse_

			
Allows you to access parse functionality

		





### XML API Request



`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&method;=parse&task;=update&user;=customer@example.com`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&hostname;=www.example.com&url;=www.mydomain.com/parse.php&spam;_check=1&method;=parse&task;=parse&user;=customer@example.com`



#### Return



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Delete Entry






		


			Parameter
			Required
			Requirements
			Description
		
		


			
task

			
Yes

			
Must be set to _delete_

			
Set Parse settings

		
		


			
user

			
Yes

			
Customer must be registered under your
			account

			
The customer who we will update

		
		


			
hostname

			
Yes

			
Must be the hostname you wish to delete.

			
The host name you will remove for your
			customer

		
		


			
method

			
Yes

			
Must be set to _parse_

			
Allows you to access parse functionality

		




### XML API Request




`https://sendgrid.com/api/distributor.manage.xml?api_user=username&api;_key=secureSecret&hostname;=www.example.com&task;=delete&method;=parse&user;=customer@example.com`



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



`https://sendgrid.com/api/distributor.manage.json?api_user=username&api;_key=secureSecret&hostname;=www.example.com&task;=delete&method;=parse&user;=customer@example.com`



#### Return


`{"message":"success"}`



#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`

