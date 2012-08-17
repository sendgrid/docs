---
comments: false
date: 2011-04-12 13:13:57
layout: page
slug: web-api
title: Web API
wordpress_id: 443
---

SendGrid offers a Web API that allows customers to retrieve information about their account such as statistics, bounces, spam reports, unsubscribes, and other information. This API is not a RESTful API since in most calls both GET and POST HTTP verbs can be used interchangeably.  




> **WARNING >> **When sending to a large number of recipients using the Web and/or Newsletter API, you must be aware of a hard limit of 1,000 addresses per line.





## URL Format


The following is the format for the API requests:  
  

`
https://sendgrid.com/api/..
`



	
  * **MODULE** - The module to interact with. We support multiple modules such as _bounces_, _profile_, _stats_, and many others.

	
  * **ACTION** - Each module supports multiple actions such as _add_, _get_, and _delete_. See our list of [modules and actions](http://docs.sendgrid.com/documentation/api/web-api/#modulesactions).

	
  * **FORMAT** - This determines the response format. It can be either _json_ for a JSON response or _xml_ for an XML response.






## HTTP Return codes





	
  * **_2XX_** - The API call was successful.

	
  * **_4XX_** - The API call had an error in the parameters. The error will be encoded in the body of the response.

	
  * **_5XX_** - The API call was unsuccessful. You should retry later.





## Responses


The formats supported are XML and JSON. Errors and success responses are described below while calls that provide information have their own return structure.  
  




## Errors





	
  * XML
`

  error
  
    ...
    ... error messages ...
    ...
  

`


	
  * JSON
`
{"message":"error","errors":[..."error messages"...]}
`





## Success





	
  * XML
`

success

`


	
  * JSON
`
{"message":"success"}
`





## Authentication


Each API call requires authentication. You must send the following HTTP parameters on your API calls. Your credentials are the same used for your SMTP authentication and/or website.



	
  * **_api_user_** - This is the same credential used for your SMTP settings, and for logging into the website.

	
  * **_api_key_** - This is the same password to authenticate over SMTP, and for logging into the website.





## Modules




The following is a list of all of our available modules and the available actions for each module.




## Bounces


This module allows you to retrieve and delete email addresses that have bounced from emails that you've delivered.







Action
URL
Description





[get](/documentation/api/web-api/webapibounces/#get)


/api/bounces.get.


Retrieve a list of bounces.






[delete](/documentation/api/web-api/webapibounces/#delete)


/api/bounces.delete.


Remove an email address from your bounce list.






## Blocks


This module allows you to retrieve and delete email addresses that were blocked by their ISP. These emails are not suppressed and are just for information.







Action
URL
Description





[get](/documentation/api/web-api/webapiblocks/#get)


/api/blocks.get.


Retrieve a list of blocked email addresses.






[delete](/documentation/api/web-api/webapiblocks/#delete)


/api/blocks.delete.


Remove an email address from your block list.






## Email Parse


This module allows you to add, edit, or delete your email parse settings.







Action
URL
Description





[get](/documentation/api/web-api/webapiparse/#get)


/api/parse.get.


Retrieve email parse settings.






[set](/documentation/api/web-api/webapiparse/#set)


/api/parse.set.


Set email parse settings.






[edit](/documentation/api/web-api/webapiparse/#edit)


/api/parse.edit.


Edit existing email parse settings.






[delete](/documentation/api/web-api/webapiparse/#delete)


/api/parse.delete.


Delete email parse settings.






## Filters


This module allows you to view your available Apps, edit their settings, as well as enable and disable them. For a list of all the apps and parameters accesible with the Web API you can check the [Filter Settings](/documentation/api/web-api/filtersettings/) page.







Action
URL
Description





[get](/documentation/api/web-api/webapifilters/#getavailable)


/api/filter.getavailable.


Get a list of available Apps.






[activate](/documentation/api/web-api/webapifilters/#activate)


/api/filter.activate.


Activate one or more Apps.






[deactivate](/documentation/api/web-api/webapifilters/#deactivate)


/api/filter.deactivate.


Deactivate one or more Apps.






[setup](/documentation/api/web-api/webapifilters/#setup)


/api/filter.setup.


Change the settings in an App.






[getsettings](/documentation/api/web-api/webapifilters/#getsettings)


/api/filter.getsettings.


View the settings for an App.






## Invalid Emails


This module allows you to retrieve and delete email addresses that you've sent to that are invalid email addresses.







Action
URL
Description





[get](/documentation/api/web-api/webapiinvalidemails/#get)


/api/invalidemails.get.


Retrieve a list of email addresses that are invalid.






[delete](/documentation/api/web-api/webapiinvalidemails/#delete)


/api/invalidemails.delete.


Remove an email address from your invalid list.






## Mail


This module allows you to send email.







Action
URL
Description





[send](/documentation/api/web-api/mail/#send)


/api/mail.send.


Send email.






## Profile


This module allows you to retrieve and update your profile information such as credentials and email address.







Action
URL
Description





[get](/documentation/api/web-api/webapiprofile/#get)


/api/profile.get.


Get profile information.






[set](/documentation/api/web-api/webapiprofile/#set)


/api/profile.set.


Selectively update multiple profile fields.






[setUsername](/documentation/api/web-api/webapiprofile/#setusername)


/api/profile.setUsername.


Update account username.






[setPassword](/documentation/api/web-api/webapiprofile/#setpassword)


/api/profile.setPassword.


Update account password.






[setEmail](/documentation/api/web-api/webapiprofile/#setemail)


/api/profile.setEmail.


Update contact email address.






## Spam Reports


This module allows you to retrieve and delete email addresses that have marked your emails as SPAM.







Action
URL
Description





[get](/documentation/api/web-api/webapispamreports/#get)


/api/spamreports.get.


Retrieve a list of email addresses that are spam reports.






[delete](/documentation/api/web-api/webapispamreports/#delete)


/api/spamreports.delete.


Remove an email address from your spam report list.






## Stats


This module allows you to retrieve statistical data on a range of metrics including requests, bounces, spam reports, categories, and others.







Action
URL
Description





[get](/documentation/api/web-api/webapistatistics/#get)


/api/stats.get.


Retrieves statistics on multiple metrics.






## Unsubscribes


This module allows you to add, retrieve and delete email addresses that were unsubscribed from your emails.







Action
URL
Description





[add](/documentation/api/web-api/webapiunsubscribes/#add)


/api/unsubscribes.add.


Add an email to your unsubscribe list.






[get](/documentation/api/web-api/webapiunsubscribes/#get)


/api/unsubscribes.get.


Retrieve a list of unsubscribed email addresses.






[delete](/documentation/api/web-api/webapiunsubscribes/#delete)


/api/unsubscribes.delete.


Remove an email address from your unsubscribe list.




