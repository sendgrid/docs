---
comments: false
date: 2011-06-16 10:54:51
layout: page
slug: newsletter-api
title: Newsletter API
wordpress_id: 1373
---

SendGrid has a Newsletter API that allows users to access data and interact with the Newsletter App portion of the SendGrid product. For more details on the Newsletter App as opposed to the Newsletter API please go [here](/documentation/newsletter-app/).  
  


The Newsletter API provides developers with the ability to manage Newsletters, Lists, Identities, and Schedule delivery events. This can be very useful in allowing development teams to propagate data in and out of the web based Newsletter App that can be easily used by members of the company with little or no programming expertise.  
  


The Newsletter API is very similar to the Web API in that it follows the same convention and format, and utilizes the same technology; http requests. This is done with **http** requests to the SendGrid site with a variety of parameters to organize data. All query responses can be provided in either JSON or XML.  




> **WARNING >> **When sending to a large number of recipients using the Newsletter and/or Web API, you must be aware of a hard limit of 1,000 addresses per line.





## URL Format


The following is the syntax for making Newsletter API requests:  
  


`https://sendgrid.com/api/newsletter/.`




	
  * **<action>** - Each module supports multiple actions such as add, get, and delete. See the list of [newsletter modules and actions](http://docs.sendgrid.com/documentation/api/web-api/#newsletter).

	
  * **<format>** - This determines the response format. It can be either json for a JSON response or xml for an XML response.





## HTTP Return codes





	
  * **2XX** - The API call was successful.

	
  * **4XX** - The API call had an error in the parameters. The error will be encoded in the body of the response.

	
  * **5XX** - The API call was unsuccessful. You should retry later.





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





### Success





	
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



	
  * **api_user** - This is the same credential used for your SMTP settings, and for logging into the website.

	
  * **api_key** - This is the same password to authenticate over SMTP, and for logging into the website.





## Newsletter


This module allows you to manage, create, and send newsletters.







Action
URL
Description





[add](/documentation/api/newsletter-api/newsletter/#add)


/api/newsletter/add.<format>


Create a new Newsletter.






[edit](/documentation/api/newsletter-api/newsletter/#edit)


/api/newsletter/edit.<format>


Edit the name, identity, subject, and/or content of an existing Newsletter.






[get](/documentation/api/newsletter-api/newsletter/#get)


/api/newsletter/get.<format>


Retrieve the contents of an existing Newsletter.






[list](/documentation/api/newsletter-api/newsletter/#list)


/api/newsletter/list.<format>


Retrieve the names of all existing Newsletters, or search for a specific newsletter.






[delete](/documentation/api/newsletter-api/newsletter/#delete)


/api/newsletter/delete.<format>


Remove an existing Newsletter.







## Newsletter - Lists


This module allows you to manage and create Recipient Lists associated with the Newsletter feature.







Action
URL
Description





[add](/documentation/api/newsletter-api/lists/#add)


/api/newsletter/lists/add.<format>


Create a new Recipient List.






[edit](/documentation/api/newsletter-api/lists/#edit)


/api/newsletter/lists/edit.<format>


Rename a Recipient List.






[get](/documentation/api/newsletter-api/lists/#get)


/api/newsletter/lists/get.<format>


List all Recipient Lists on your account, or check if a particular List exists.






[delete](/documentation/api/newsletter-api/lists/#delete)


/api/newsletter/lists/delete.<format>


Remove a Recipient List from your account.







## Newsletter - Lists - Email


This module allows you to manage entries in your Recipient Lists.







Action
URL
Description





[add](/documentation/api/newsletter-api/lists/email/#add)


/api/newsletter/lists/email/add.<format>


Add an email to an existing Recipient List.






[get](/documentation/api/newsletter-api/lists/email/#get)


/api/newsletter/lists/email/get.<format>


List all emails in a Recipient List , or check if a particular email is contained in the list.






[delete](/documentation/api/newsletter-api/lists/email/#delete)


/api/newsletter/lists/email/delete.<format>


Remove an email from a Recipient List.







## Newsletter - Identity


This module allows you to manage and create Identities associated with the Newsletter feature.







Action
URL
Description





[add](/documentation/api/newsletter-api/identity/#add)


/api/newsletter/identity/add.<format>


Create a new Identity.






[edit](/documentation/api/newsletter-api/identity/#edit)


/api/newsletter/identity/edit.<format>


Edit the contact information in an existing Identity.






[get](/documentation/api/newsletter-api/identity/#get)


/api/newsletter/identity/get.<format>


Retrieve contact information associated with a particular Identity.






[list](/documentation/api/newsletter-api/identity/#list)


/api/newsletter/identity/list.<format>


List all Identities on your account, or check if a particular Identity exists.






[delete](/documentation/api/newsletter-api/identity/#delete)


/api/newsletter/identity/delete.<format>


Remove an Identity from your account.







## Newsletter - Recipients


This module allows you to manage entries in your Recipients Lists.







Action
URL
Description





[add](/documentation/api/newsletter-api/recipients/#add)


/api/newsletter/recipients/add.<format>


Add one or more Recipient List to a Newsletter.






[get](/documentation/api/newsletter-api/recipients/#get)


/api/newsletter/recipients/get.<format>


Retrieve an the Recipient Lists associated with a Newsletter.






[delete](/documentation/api/newsletter-api/recipients/#delete)


/api/newsletter/recipients/delete.<format>


Remove a Recipient List from a Newsletter.







## Newsletter - Schedule


This module allows you to add, view, or delete scheduled delivery events for Newsletters.



> **TIP >> **You may notice that you can only schedule newsletters to be sent, but there appears to be no function to just send right when you make the call. The trick is to leave out the **at** and **after** parameters and your newsletter will be processed immediately.










Action
URL
Description





[add](/documentation/api/newsletter-api/schedule/#add)


/api/newsletter/schedule/add.<format>


Create a new schedule event.






[get](/documentation/api/newsletter-api/schedule/#get)


/api/newsletter/schedule/get.<format>


Retrieve the scheduled event associated with a Newsletter.






[delete](/documentation/api/newsletter-api/schedule/#delete)


/api/newsletter/schedule/delete.<format>


Remove a scheduled event from a Newsletter.




