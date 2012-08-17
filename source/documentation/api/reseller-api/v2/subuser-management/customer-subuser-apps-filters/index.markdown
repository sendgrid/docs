---
comments: false
date: 2011-07-22 08:43:57
layout: page
slug: customer-subuser-apps-filters
title: Customer Subuser Apps / Filters
wordpress_id: 2101
---




## List





List all of the available apps.





Note: The _name_ entry is used in all the other API calls to identify a app.






	


		Parameter
		Required
		Requirements
		Description
	
	


		
task

		
Yes

		
Must be set to _getavailable_

		
Retrieve Available Apps

	
	


		
user

		
Yes

		
Customer subuser must be registered under
		your account

		
The customer subuser who we will update

	





### XML API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.xml?api_user=username&api;_key=secureSecret&task;=getavailable&method;=apps&user;=example@example.com`



#### Return - Success



`
	
		
			twitter
			Twitter
			This plugin allows you to send an email message to twitter
			0
		
		...
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.json?api_user=username&api;_key=secureSecret&task;=getavailable&method;=apps&user;=example@example.com`



#### Return - Success



`[{"name":"twitter","title":"Twitter","description":"This plugin allows you to send an email message to twitter","activated":false}, ... ]`




## Activate App






	


		Parameter
		Required
		Requirements
		Description
	
	


		
task

		
Yes

		
Must be set to _activate_

		
Retrieve Available Apps

	
	


		
user

		
Yes

		
Customer subuser must be registered under
		your account

		
The customer subuser who we will update

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.xml?api_user=username&api;_key=secureSecret&name;=twitter&method;=apps&task;=activate&user;=example@example.com`



#### Return - Success



`
	
		success
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.json?api_user=username&api;_key=secureSecret&name;=twitter&method;=apps&task;=activate&user;=example@example.com`



#### Return



`{"message":"success"}`




## Deactivate App






	


		Parameter
		Required
		Requirements
		Description
	
	


		
task

		
Yes

		
Must be set to _deactivate_

		
Retrieve Available Apps

	
	


		
user

		
Yes

		
Customer subuser must be registered under
		your account

		
The customer subuser who we will update

	




### XML API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.xml?api_user=username&api;_key=secureSecret&name;=twitter&method;=apps&task;=deactivate&user;=example@example.com`



#### Return - Success



`
	
		success
	
`



### JSON API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.json?api_user=username&api;_key=secureSecret&name;=twitter&method;=apps&task;=deactivate&user;=example@example.com`



#### Return



`{"message":"success"}`




## Customize App





These API calls require that settings are passed using POST.





### XML API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.xml?api_user=username&api;_key=secureSecret&name;=twitter&method;=apps&task;=setup&user;=example@example.com`




#### Return - Success



`

	field_value
	...

`



#### Return - Error



`

      error
      
        ...
        ... error messages ...
        ...
      

`



#### Return - Empty





This is returned if that filter has no settings or is not enabled.



``



### JSON API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.json?api_user=username&api;_key=secureSecret&name;=twitter&method;=apps&task;=setup&user;=example@example.com`




#### Return - Success



`{"message":"success","settings":{"field_name":"field_value”}}`



#### Return - Empty





This is returned if that filter has no settings or is not enabled.



`{"settings":null}  `




## Get Current Settings





### XML API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.xml?api_user=username&api;_key=secureSecret&name;=twitter&task;=getsettings&user;=example@example.com&method;=apps`



#### Return - Success



`

	field_value
	...

`



#### Return - Error



`

      error
      
        ...
        ... error messages ...
        ...
      

`


#### Return - Empty





This is returned if that filter has no settings or is not enabled.



``



### JSON API Request



`https://sendgrid.com/apiv2/reseller.manageSubuser.json?api_user=username&api;_key=secureSecret&name;=twitter&task;=getsettings&user;=example@example.com&method;=apps`



#### Return - Success



`{"message":"success","settings":{"field_name":"field_value”}}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`



#### Return - Empty





This is returned if that filter has no settings or is not enabled.



`{"settings":null}`
