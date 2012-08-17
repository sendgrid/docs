---
comments: true
date: 2012-05-21 09:31:57
layout: page
slug: introduction-to-multiple-user-credentials
title: Introduction To Multiple User Credentials
wordpress_id: 3998
---

MultiAuth, or Multiple Authentication, is a feature that allows administrators to create and manage additional user access to SendGrid features and allow the ability to send messages without sharing access to the master account credentials. This functionality is implemented in code, examples of which can be seen below in this document, or by using the web interface, details of which can be found in the [Using the Multiple User Credentials Dashboard](http://docs.sendgrid.com/documentation/account-dashboard/introduction-to-multiple-user-credentials/using-the-multiple-user-credentials-dashboard/) document.



> **WARNING >> **Usernames must be unique. No two accounts, either primary or additional credentials, may have the same username.



As the primary account holder, you can assign one of three rights to each set of credentials. These functions are:





  * **Email** - enabling this right allows the designated credentials to send email through the account

	
  * **API** - enabling access to this function allows the designated credentials to utilize all of SendGrid's APIs, with exception to any API call that sends email

	
  * **Web** - enables access to the web dashboard allows the specified credentials to administer the account using the web-based console.





> **NOTE >> **Future updates to Multiple User Credentials will allow for more granular control over access rights granted to the specified credentials. At this time, granting access to one of the three available features is granting full access to that feature, with the following exceptions:

> 
> 
	
>   * In order to allow credentials to send mail via mean of an API call, you must also allow them Email access
> 
	
>   * Granting credentials access to Email will allow them to use the API calls that send messages
> 
	
>   * Granting access to Web will allow credentials to create newsletters, but they cannot send them unless they are also granted Email rights
> 
	
>   * Only the Master Account can create, modify, or delete Subusers and Credentials
> 




**>> [Start using the Dashboard](http://docs.sendgrid.com/documentation/account-dashboard/introduction-to-multiple-user-credentials/using-the-multiple-user-credentials-dashboard/)  
  

>> [Start using the API](http://docs.sendgrid.com/documentation/api/using-the-multiple-user-credentials-api/)**
