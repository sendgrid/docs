---
comments: false
date: 2011-07-19 08:44:22
layout: page
slug: customer-management
title: Customer Management
wordpress_id: 1951
---

These are actions that directly affect your customer. We provide access via XML and JSON.


## Create a Customer




### Parameters









Parameter
Required
Requirements
Description





username


Yes


No more than 64 characters


The customers new username






password


Yes


Must be at least 6 characters


New password of customer






confirm_password


Yes


Must match password parameter, must be at
least 6 characters


Confirm new password






email


Yes


Must be in email format, no more than 64
characters


Email address of new customer






first_name


Yes


No more than 50 characters


First name of new customer






last_name


Yes


No more than 50 characters


Last name of new customer






address


Yes


No more than 100 characters


Address of new customer






city


Yes


No more than 100 characters


City of new customer






state


Yes


No more than 100 characters


State of new customer






zip


Yes


No more than 50 characters


Zip of new customer. This field is not
validated for correct value. It's up to developer to check for valid
zip code.






country


Yes


No more than 100 characters


Country of new customer






phone


Yes


No more than 50 characters


Phone number of new customer






website


Yes


No more than 255 characters


Website of new customer






company


Yes


No more than 255 characters


Company of new customer






package


Yes


No more than 255 characters


Name of the Package to assign to customer






whitelabel


Yes


No more than 255 characters


The domain name for whitelabel






ip_group[]


No


No more than 255 characters for each ip_group
name. It must belong to you.


Name of the IP Group you wish to optionally
add.






ip[]


No


Valid ip address that belongs to you.


If package allows it, you can optionally add
additional IP addresses.






free_user


Maybe


If the new customer is a free customer, you
need to specify this parameter. Either true or false.


Create a free customer






billing_date


No


If the new customer's billing anniversary date
is on a different date from the time you create the customer, you need
to specify this parameter. Must be in YYYY-mm-dd format. This date
must be within one billing cycle from the time you create this
customer. (e.g. if they sign up on 2/28/11, then the latest date you
can use is 3/28/11)


If the new customer's billing anniversary date
is different from today (or when you execute this API call), you can
specify the first billing anniversary date






### XML API Request


`https://sendgrid.com/apiv2/reseller.add.xml?api_user=username&api;_key=secureSecret&username;=newcustomer@example.com&website;=example.com&password;=samplepassword&confirm;_password=samplepassword&first;_name=fname&last;_name=lname&address;=555%20anystreet&city;=any%20city&state;=CA&zip;=91234&email;=newcustomer@example.com&country;=US&phone;=555-555&free;_user=true`


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


`https://sendgrid.com/apiv2/reseller.add.json?api_user=username&api;_key=secureSecret&username;=newcustomer@example.com&website;=example.com&password;=samplepassword&confirm;_password=samplepassword&first;_name=fname&last;_name=lname&address;=555%20anystreet&city;=any%20city&state;=CA&zip;=91234&email;=newcustomer@example.com&country;=US&phone;=555-555`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Delete a Customer


Remove a customer from your account. This is **not** the same as disabling a customer on our system. However, the removed
user will still be stored within the system so that you cannot re-register a new user with this new username.

This is the same thing as closing out a customers account at the end of their billing cycle.


### Parameters









Parameter
Required
Requirements
Parameter





user


Yes


Must be a customer registered under your
account.


The customers username you wish to delete.






### XML API Request


`https://sendgrid.com/apiv2/reseller.delete.xml?api_user=username&api;_key=secureSecret&user;=customer@example.com`


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


`https://sendgrid.com/apiv2/reseller.delete.json?api_user=username&api;_key=secureSecret&user;=customer@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




# Retrieve Customers


Obtain a complete list of all customers.


### Parameters









Parameter
Required
Description





task


Yes


Must be set to **get** in order
to retrieve user information






username


No


Search filter, customer that is registered
under you






email


No


Search filter, email address customer was
registered with






active


No


Search filter, whether or not the customer is
currently active






first_name


No


Search filter, first name of customer






last_name


No


Search filter, last name of customer






address


No


Search filter, address of customer






city


No


Search filter, city of customer






state


No


Search filter, state of customer






country


No


Search filter, country of customer






zip


No


Search filter, zipcode of customer






phone


No


Search filter, phone number of customer






website


No


Search filter, website of customer






company


No


Search filter, company of customer






method


Yes


Must be set to _profile_






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=profile&task;=get`


#### Return


`
    
      
        user1
        example1@example.com
        true
        john
        doe
        555 any street
        any city
        CA
        91234
        US
        555-555-5555
        example.com
      
      
        user2
        example2@example.com
        false
        jane
        doe
        555 any street
        any city
        CA
        91234
        US
        555-555-5555
        example.com
      
    
`


### JSON API Request


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=profile&task;=get`


#### Return


`[{"username":"username","email":"example1@example.com","active":"true","first_name":"john","last_name":"doe","address":"555
any street","city":"any
city","state":"CA","zip":"91234","country":"US","phone":"555-555-5555","website":"example.com"},{"username":"username","email":"example2@example.com","active":"false","first_name":"jane","last_name":"doe","address":"555
any street","city":"any
city","state":"CA","zip":"91234","country":"US","phone":"555-555-5555","website":"example.com"}]`




## Enable a Customer


Enable a customer so they may start sending out emails again. This call will not enable website access. To enable website access.


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Must be in email format


The customer you are planning to enabling






method


Yes


Must be set to _enable_


The customer you are planning to enabling






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=enable&user;=customer@example.com`


#### Return - Success


`
  
    success
  
`


#### Return - Error


`
  
    User not found
  
`


### JSON API Request


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=enable&user;=customer@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`




## Disable a Customer


This prevents them from sending out emails with SendGrid.


### Parameters









Parameter
Required
Requirements
Description





username


Yes


Must be in email format


The customer you are planning to disabling






method


Yes


Must be set to _disable_


The customer you are planning to disabling






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=disable&user;=customer@example.com`


#### Return - Success


`
  
    success
  
`


#### Return - Error


`
  
    User not found
  
`


### JSON API Request


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=disable`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`




## Enable Website Access To A Customer


Allow a customer to login to the SendGrid.com website. This call will not enable the customer from sending out emails. To enable a customer.


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Must be in email format


The customer you are planning to grant website
access






method


Yes


Must be set to _website_enable_


The customer you are planning to grant website
access






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=website_enable&user;=customer@example.com`


#### Return - Success


`
  
    success
  
`


#### Return - Error


`
  
    User not found
  
`


### JSON API Request


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=website_enable&user;=customer@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`




## Disable Website Access To A Customer


Disallow a customer to login to the SendGrid.com website. This call will not prevent them from sending out emails. To disable a customer.


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Must be in email format


The customer you are planning to disallow
website access






method


Yes


Must be set to _website_disable_


The customer you are planning to disallow
website access






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=website_disable&user;=customer@example.com`


#### Return - Success


`
  
    success
  
`


#### Return - Error


`
  
    User not found
  
`


### JSON API Request


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=website_disable`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`




## Update Customer Profile


Allows you to update your customers profile information


### Parameters









Parameter
Required
Description





task


Yes


Must be set to **set** in order
to update profile information






method


Yes


Must be set to _profile_






user


Yes


Customer that is registered under you






first_name


No


First name of customer






last_name


No


Last name of customer






address


No


Address of customer






city


No


City of customer






state


No


State of customer






country


No


Country of customer






zip


No


Zipcode of customer






phone


No


Phone number of customer






website


No


Website of customer






company


No


Company of customer






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=profile&task;=set&user;=customer@example.com&first;_name=newFirstName&last;_name=&newLastName;`


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


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=profile&task;=set&user;=customer@example.com&first;_name=newFirstName&last;_name=&newLastName;`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Update Customer Password


Passwords are encrypted by default and therefore cannot be retrieved; however, you can reset a customers password.


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Customer must be registered under you


The customer you are planning to reset the
password






password


Yes


Must be at least 6 characters


New password of customer






confirm_password


Yes


Must match password parameter and be at least
6 characters


Confirm new password






method


Yes


Must be set to _password_


Allows you to access password functionality






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=password&user;=customer@example.com&password;=newPasword&confirm;_password=newPassword`


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


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=password&user;=customer@example.com&password;=newPasword&confirm;_password=newPassword`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Update Customer Username


Note that your customer account username is used to login to our SMTP server _and_ the website and changes take effect immediately.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to **setUsername**


This will let us know you want to update your
customers username. This is the new username your customer will be
authenticating with our SMTP servers _and_ to access the
website. This update takes effect immediately






user


Yes


Customer must be registered under your account


The user we will be updating their username for






username


Yes


Must be in email format, not more than 100
characters, cannot be already taken and cannot contain SendGrid.com in
the domain name


This is the new username we will be
authenticating with our SMTP servers _and_ to access our site.
This update takes effect immediately






method


Yes


Must be set to _profile_


Allows you to access profile functionality






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=profile&task;=setUsername&user;=customer@example.com&username;=newcustomer@example.com`


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


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=profile&task;=setUsername&user;=customer@example.com&username;=newcustomer@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Update Customer Email Address


This is the contact email we use for your customers. Changes take place immediately. It is your responsibility to validate the contact email.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to **setEmail**


This will let us know you want to update your
customers email address. This update takes effect immediately






user


Yes


Customer must be registered under your account


The user we will be updating their username for






email


Yes


Must be in email format, not more than 100
characters


This is the new email address we will use for
contacting customer. This update takes effect immediately






method


Yes


Must be set to _password_


Allows you to access password functionality






### XML API Request


`https://sendgrid.com/apiv2/reseller.manage.xml?api_user=username&api;_key=secureSecret&method;=profile&task;=setEmail&user;=customer@example.com&email;=newcustomer@example.com`


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


`https://sendgrid.com/apiv2/reseller.manage.json?api_user=username&api;_key=secureSecret&method;=profile&task;=setEmail&user;=customer@example.com&email;=newcustomer@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`
