---
comments: false
date: 2011-07-27 07:39:39
layout: page
slug: pending-account-changes
title: Pending Account Changes
wordpress_id: 2317
---

Retrieve pending update information for users that have scheduled upgrades to their account.






## List Pending Changes





Returns all of the users who have pending changes within your account.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _list_.

		
		


			
username

			
No

			
Optional search parameter.

		
		


			
type

			
No

			
Must be either upgrade, downgrade, close.
			Optional search parameter.

		





### XML API Request



`https://sendgrid.com/api/distributor.pending.xml?api_user=username&api;_key=secureSecret&task;=list`



#### Return - Success



`

	
		user4
		Account Upgrade
		Main Reseller - Silver Package
		Main Reseller - Gold Package
		2010-09-30
		
			255.255.255.0
			255.255.254.0
		
		
		
	
	
		user5
		Account Downgrade
		Main Reseller - Gold Package
		Main Reseller - Basic Package
		2010-10-07
		
		
		
			Reseller Group
		
	

`



#### Return - Error



`
	error
	
		...
		... error messages ...
		...
	
`



### JSON API Request



`https://sendgrid.com/api/distributor.pending.json?api_user=username&api;_key=secureSecret&task;=list`



#### Return - Success



`[{"username":"user4","type":"Account Upgrade","current":"Main Reseller - Silver Package","update":"Main Reseller - Gold Package","ip_groups":[],"ips":["255.255.255.0","255.255.254.0"],"date":"2010-09-30"},{"username":"user5","type":"Account Downgrade","current":"Main Reseller - Gold Package","update":"Main Reseller - Basic Package","ip_groups":["Reseller Group"],"ips":[],"date":"2010-10-07"}]`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Delete Pending Changes





Cancel/Revert a pending change.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _delete_.

		
		


			
user

			
Yes

			
Must be an User under your account.

		




### XML API Request



`https://sendgrid.com/api/distributor.pending.xml?api_user=username&api;_key=secureSecret&task;=delete&user;=customer@example.com`



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



`https://sendgrid.com/api/distributor.pending.json?api_user=username&api;_key=secureSecret&task;=delete&user;=customer@example.com`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Immediate Upgrade





Once an upgrade happens, an invoice is generated for that user. If it's a free user to a paid account, the full price for that upgrade will be created. If it's in between billing periods, a prorated discount will be applied to the invoice.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _immediate_upgrade_.

		
		


			
user

			
Yes

			
Must be an User under your account.

		
		


			
package

			
Yes

			
The name of the package you will be upgrading
			the User to.

		
		


			
ip[]

			
Maybe Yes

			
If the package you are upgrading your user
			requires a whitelabel and/or an unique IP, you must assign a free IP
			to this user.

		
		


			
ip_group[]

			
Maybe Yes

			
If the package you are upgrading your user to
			does not require an IP or whitelabel, you must place them in an IP
			group.

		




### XML API Request



`https://sendgrid.com/api/distributor.account.xml?api_user=username&api;_key=secureSecret&task;=immediate_upgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



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



`https://sendgrid.com/api/distributor.account.json?api_user=username&api;_key=secureSecret&task;=immediate_upgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Immediate Downgrade





Once a downgrade happens, an invoice is generated for that user. Free customers are not allowed to downgrade.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _immediate_downgrade_.

		
		


			
user

			
Yes

			
Must be an User under your account.

		
		


			
package

			
Yes

			
The name of the package you will be
			downgrading the User to.

		
		


			
ip[]

			
Optional

			
If the package you are downgrading your user
			requires a whitelabel and/or an unique IP, you may assign a free IP
			to this customer using your assigned IPs in suppliment from SendGrid.

		
		


			
ip_group[]

			
Optional

			
If the package you are downgrading your user
			to does not require an IP or whitelabel, you may place them in an IP
			group.

		





### XML API Request



`https://sendgrid.com/api/distributor.account.xml?api_user=username&api;_key=secureSecret&task;=immediate_downgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



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



`https://sendgrid.com/api/distributor.account.json?api_user=username&api;_key=secureSecret&task;=immediate_downgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Immediate Close





Close or revert an account to a free user immediately. An invoice
is generated for that user with the new package price (if no overages
are incurred, a invoice with zero amount due is generated.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _immediate_close_.

		
		


			
user

			
Yes

			
Must be an customer under your account.

		
		


			
ip_group[]

			
No

			
Define an ip group you will place the user
			into once the customers account is closed.

		





### XML API Request



`https://sendgrid.com/api/distributor.account.xml?api_user=username&api;_key=secureSecret&task;=immediate_close&user;=customer@example.com&ip;_group[]=Reseller Group`



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



`https://sendgrid.com/api/distributor.account.json?api_user=username&api;_key=secureSecret&task;=immediate_close&user;=customer@example.com&ip;_group[]=Reseller Group`




#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`





## Scheduled Upgrade





Apply an upgrade at the end of the user's billing cycle. Once an upgrade happens, an invoice is generated for that user with the new package price. Prorated charges do not apply here.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _scheduled_upgrade_.

		
		


			
user

			
Yes

			
Must be an User under your account.

		
		


			
package

			
Yes

			
The name of the package you will be upgrading
			the User to.

		
		


			
ip[]

			
Maybe Yes

			
If the package you are upgrading your user
			requires a whitelabel and/or an unique IP, you must assign a free IP
			to this user.

		
		


			
ip_group[]

			
Maybe Yes

			
If the package you are upgrading your user to
			does not require an IP or whitelabel, you must place them in an IP
			group.

		




### XML API Request



`https://sendgrid.com/api/distributor.account.xml?api_user=username&api;_key=secureSecret&task;=scheduled_upgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



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



`https://sendgrid.com/api/distributor.account.json?api_user=username&api;_key=secureSecret&task;=scheduled_upgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Scheduled Downgrade





Apply a downgrade at the end of the user's billing cycle. Once a downgrade happens, an invoice is generated for that user with the new package price. Prorated charges do not apply here.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _scheduled_downgrade_.

		
		


			
user

			
Yes

			
Must be an User under your account.

		
		


			
package

			
Yes

			
The name of the package you will be
			downgrading the User to.

		
		


			
ip[]

			
Maybe Yes

			
If the package you are upgrading your user
			requires a whitelabel and/or an unique IP, you must assign a free IP
			to this user.

		
		


			
ip_group[]

			
Maybe Yes

			
If the package you are upgrading your user to
			does not require an IP or whitelabel, you must place them in an IP
			group.

		





### XML API Request



`https://sendgrid.com/api/distributor.account.xml?api_user=username&api;_key=secureSecret&task;=scheduled_downgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



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



`https://sendgrid.com/api/distributor.account.json?api_user=username&api;_key=secureSecret&task;=scheduled_downgrade&package;=Basic Package&user;=customer@example.com&ip;_group[]=Reseller Group`



#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`




## Scheduled Close





Close or revert an account to a free user at the end of the
user's billing cycle. Once a closure happens, an invoice is generated
for that user with the new package price (if no overages are incurred, a
invoice with zero amount due is generated.





### Parameters






		


			Parameter
			Required
			Requirements
		
		


			
task

			
Yes

			
Must be set to _scheduled_close_.

		
		


			
user

			
Yes

			
Must be an User under your account.

		
		


			
ip_group[]

			
No

			
Define an ip group you will place the user
			into once the customers account is closed.

		





### XML API Request



`https://sendgrid.com/api/distributor.account.xml?api_user=username&api;_key=secureSecret&task;=scheduled_close&user;=customer@example.com&ip;_group[]=Reseller Group`



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




`https://sendgrid.com/api/distributor.account.json?api_user=username&api;_key=secureSecret&task;=scheduled_close&user;=customer@example.com&ip;_group[]=Reseller Group`




#### Return - Success



`{"message":"success"}`



#### Return - Error



`{"message":"error","errors":[..."error messages"...]}`

