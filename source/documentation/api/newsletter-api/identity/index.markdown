---
comments: false
date: 2011-05-02 17:21:05
layout: page
slug: identity
title: Sender Address
wordpress_id: 633
tags:
- address
- api
- identity
- newsletter
- sender
- sender address
---

This module allows you to manage and create Sender Addresses (formerly Identities) associated with the Newsletter feature.



> **WARNING >> **Specific to the current version of the Newsletter API, the API calls that include the term 'identity' will remain unchanged. In this context, identity refers to the sender address.






## add


Create a new Address.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
Identity

      
Yes

      
None

      
Create an Address named this.

    
    


      
name

      
Yes

      
None

      
Specify the name to be used for this Address.

    
    


      
email

      
Yes

      
Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)

      
Specify the email address to be used for this Address.

    
    


      
replyto

      
No

      
Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)

      
Specify an email address to be used in the Reply-To field. If not defined, will default to the _email_ parameter.

    
    


      
address

      
Yes

      
None

      
Specify the physical address to be used for this Address.

    
    
    


      
city

      
Yes

      
None

      
Specify the city to be used for this Address.

    
    
    


      
state

      
Yes

      
None

      
Specify the state code to be used for this Address.

    
    
    


      
zip

      
Yes

      
None

      
Specify the zip code to be used for this Address.

    
    
    


      
country

      
Yes

      
None

      
Specify the country code to be used for this Address.

    
  




## edit


Editing an existing Address.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
Identity

      
Yes

      
Must be an existing Address.

      
The Address you wish to edit.

    
    


      
newidentity

      
No

      
None

      
Specify the new name to be used for this Address.

    
    


      
name

      
No

      
None

      
Specify the new name to be used for this Address.

    
    


      
email

      
Yes

      
Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)

      
Specify the email address to be used for this Address.

    
    


      
replyto

      
No

      
Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)

      
Specify an email address to be used in the Reply-To field. If not defined, will default to the _email_ parameter.

    
    


      
address

      
No

      
None

      
Specify the new physical address to be used for this Address.

    
    
    


      
city

      
No

      
None

      
Specify the new city to be used for this Address.

    
    
    


      
state

      
No

      
None

      
Specify the new state code to be used for this Address.

    
    
    


      
zip

      
No

      
None

      
Specify the new zip code to be used for this Address.

    
    
    


      
country

      
No

      
None

      
Specify the new country code to be used for this Address.

    
  




## get


Retrieve information associated with a particular Address.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
identity

      
Yes

      
Must be an existing Address.

      
Retrieve contents of the specified Address.

    
  




## list


List all Addresses on your account, or check if a particular Address exists.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
identity

      
No

      
Must be an existing Address.

      
Check for this particular Identity. (To list all Addresses on your account exclude this parameter)

    
  




## delete


Remove an Address from your account.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
identity

      
Yes

      
Must be an existing Address.

      
Remove the specified Address from your account.

    
  
