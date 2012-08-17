---
comments: false
date: 2012-06-12 16:29:53
layout: page
slug: using-the-multiple-user-credentials-api
title: Multiple User Credentials API
wordpress_id: 4193
---

The permissions for each set of credentials is added using a simple JSON structure. There are three key names, email for access to SMTP, api for programmatic access, and web for administration. The values are either 0 for off or 1 for on. There are some limitations to the access, however.



	
  * Granting access to the APIs but not to sending mail will block the credentials from being able to use APIs to send messages.

	
  * Granting access rights cannot exceed the rights level that is associated with the primary account holder. In other words, a set of credentials cannot do more than the primary account holder.



The following example allows the specified username/password to log into the dashboard, but _not_ send email or have access to any of the APIs:  
  


`{"email": 0, "web": 1, "api": 0}`



> **TIP >> **Values are integers and should only be simple integers and, as such, should not be double quoted.





# Parameters And Values



The following parameters, their potential values, and notes on their use are important to using the examples in our [Multiple User Credentials API reference](http://docs.sendgrid.com/documentation/get-started/configuring-your-account/introduction-to-multiple-user-credentials/using-the-multiple-user-credentials-api/).









Parameter
Value
Notes





api_user


alphanumeric


The primary account holder’s user ID creating the new account






api_key


alphanumeric


The primary account holder’s password






username


alphanumeric


Enter a username for the new account






password


alphanumeric


Enter a password for the new account






email


0/1


0 = off, 1 = on






api


0/1


0 = off, 1 = on






web


0/1


0 = off, 1 = on







> **NOTE >> **The JSON code samples displayed on this page includes extra whitespace to make it more readable.

  




## Adding New Credentials



To add a new set of credentials to your account, the following syntax is required in a JSON string:  
  


`/api/credentials/add.json?username=name&password;=password&permissions;=JSON`

Depending on what you send out, you'll get one of the following return codes:  
  


` {"message": "success"} on success {"error": "error reason"} on failure`

If you use curl, your string may look something like this:  
  


`curl -d "api_user=MASTERACCOUNTUSERNAME&api;_key=MASTERACCOUNTPASSWORD&username;=NEWUSERNAME&password;=NEWPASSWORD&permissions;=%7B%22email%22%3A0,%22web%22%3A1%7D""https://sendgrid.com/api/credentials/add.json"`

Notice in this example that we're passing the master account credentials in the API call as MASTERACCOUNTUSERNAME and MASTERACCOUNTPASSWORD. NEWUSERNAME and NEWPASSWORD are the new credentials you wish to add, and the 'permissions' attribute is an html-encoded representation of the following JSON:  
  


`{"email": 0, "web": 1}`



> **WARNING >> **Excluding a parameter is the same as granting access rights. In other words, if you do not specify email, web or api at all, the new credentials will have access to all three. If you do not want the credentials to have access to email, web, or api, you _must explicitly set those parameter options to zeroes_.





## Editing Existing Credentials



You can edit an account you have already created, like so:  
  


`/api/credentials/edit.json?username=name&password;=password&permissions;=JSON`

In order to locate the account, you must specify the USERNAME parameter. You don't have to specify the PASSWORD parameter unless you are going to change the specified user's password. If you do not specify any additional parameters (i.e., email, web, api), then no permissions will be changed. This behavior allows you to change passwords without having to lookup the current applied permissions.  
  


Depending on what you send out, you'll get one of the following return codes:  
  


` {"message": "success"} on success {"error": "error reason"} on failure`

To use curl to modify the existing account, your string may look like this:  
  


`curl -d "api_user=MASTERACCOUNTUSERNAME&api;_key=MASTERACCOUNTPASSWORD&username;=OLDUSERNAME&password;=NEWPASSWORD&permissions;=%7B%22email%22%3A1,%22web%22%3A0%7D""https://sendgrid.com/api/credentials/add.json"`

Now, in this example that we're passing the master account credentials in the API call as MASTERACCOUNTUSERNAME and MASTERACCOUNTPASSWORD. The OLDUSERNAME value is simply to find the previous credentials, and cannot be changed. NEWPASSWORD is the new password you'd like to set, and the 'permissions' attribute is an html-encoded representation of the following JSON:  
  


`{"email": 1 , "web": 0}`



## Fetching Existing Credentials



On occasion, you may find it beneficial to have a list of credentials and their associated permissions you have in your account displayed so that you might peruse the contents. In order to do so, you would pass the following:  
  


`/api/credentials/get.json?username=name`




	
		


			Parameters
			Notes
		
		


			
username

			
credential username, **optional**

		
	

If a username is supplied, it returns the JSON permissions for that user in a manner something like this:  
  


`{"id": 4, "name": "johnsmith", permissions:{"email": 0, "api": 1}}`

If, on the other hand, no username is supplied, the request returns a JSON list for all credentials for your account, like this:  
  


`[{"id": 4, "name": "johnsmith", permissions:{"email": 0, "api": 1}}, {"id": 15, "name": "joewrigley", permissions:{"web": 1, "api": 0}}]`

If it fails, however, you will see this:  
  


`{"error" : "error reason"}`

Example using CURL:  
  


`curl -d "api_user=MASTERACCOUNTUSERNAME&api;_key=MASTERACCOUNTPASSWORD" "https://sendgrid.com/api/credentials/get.json"`

In this example we're passing the master account credentials in the API call as MASTERACCOUNTUSERNAME and MASTERACCOUNTPASSWORD. Since we are not passing the 'username' parameter, a JSON list of any existing credentials will be returned, similar to the documentation above, like so:  
  


`curl -d "api_user=MASTERACCOUNTUSERNAME&api;_key=MASTERACCOUNTPASSWORD&username;=johnsmith""https://sendgrid.com/api/credentials/get.json"`

Finally, in this example we're passing the master account credentials in the API call as MASTERACCOUNTUSERNAME and MASTERACCOUNTPASSWORD. By including the 'username' parameter, we can retrieve the corresponding JSON permissions.  
  




## Removing Credentials



Finally, someone may be moving up the corporate ladder, and no longer require credentials, at which point you would want to remove their account so as to prevent potential misuse. To do that, you would pass the following:  
  


`/api/credentials/remove.json?username=name`




	
		


			Parameters
			Notes
		
		


			
username

			
Provided for lookup, **required**

		
	


`{"message":"success"} on success {"error":"error reason"} on failure`

Example using CURL:  
  


`curl -d "api_user=MASTERACCOUNTUSERNAME&api;_key=MASTERACCOUNTPASSWORD&username;=johnsmith""https://sendgrid.com/api/credentials/remove.json"`

This example illustrates that we're passing the master account credentials in the API call as MASTERACCOUNTUSERNAME and MASTERACCOUNTPASSWORD. If the lookup for 'johnsmith' succeeds, the credentials **will be removed from the system _immediately_**.



> **NOTE >> **There is no plan at this time to allow for the selection of multiple usernames or the application of a wildcard to remove more than one or all credentials for an account. You should use the 'get' API call to retrieve a list of your credential usernames and iterate that loop to remove each one individually.
