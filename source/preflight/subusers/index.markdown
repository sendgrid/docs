---
comments: false
date: 2011-09-09 17:51:36
layout: page
published: false
slug: subusers
title: Subuser Management
wordpress_id: 2803
---

These are actions that directly affect your subuser. We provide access via XML and JSON.




## Create a Subuser




### Parameters









Parameter
Required
Requirements
Description





username


Yes


No more than 64 characters


The subusers new username






password


Yes


Must be at least 6 characters


New password of subuser






confirm_password


Yes


Must match password parameter, must be at least 6 characters


Confirm new password






email


Yes


Must be in email format, no more than 64 characters


Email address of new subuser






first_name


Yes


No more than 50 characters


First name of new subuser






last_name


Yes


No more than 50 characters


Last name of new subuser






address


Yes


No more than 100 characters


Address of new subuser






city


Yes


No more than 100 characters


City of new subuser






state


Yes


No more than 100 characters


State of new subuser






zip


Yes


No more than 50 characters


Zip of new subuser. This field is not validated for correct value. It's up to developer to check for valid zip code.






country


Yes


No more than 100 characters


Country of new subuser






phone


Yes


No more than 50 characters


Phone number of new subuser






website


Yes


No more than 255 characters


Website of new subuser






company


Yes


No more than 255 characters


Company of new subuser






mail_domain


No


A mail domain must already be setup with SendGrid, please contact [support@sendgrid.com](mailto:support@sendgrid.com) to have one setup


Mail domain of new subuser






### XML API Request


`https://sendgrid.com/api/user.add.xml?api_user=username&api;_key=secureSecret&username;=example@example.com&website;=example.com&password;=samplepassword&confirm;_password=samplepassword&first;_name=fname&last;_name=lname&address;=555%20anystreet&city;=any%20city&state;=CA&zip;=91234&email;=example@example.com&country;=US&phone;=555-555`


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


`https://sendgrid.com/api/user.add.json?api_user=username&api;_key=secureSecret&username;=example@example.com&website;=example.com&password;=samplepassword&confirm;_password=samplepassword&first;_name=fname&last;_name=lname&address;=555%20anystreet&city;=any%20city&state;=CA&zip;=91234&email;=example@example.com&country;=US&phone;=555-555`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`



# Retrieve Subusers


Obtain a complete list of all subusers.


### Parameters









Parameter
Required
Description





task


Yes


Must be set to **get** in order to retrieve user information






username


No


Search filter, subuser that is registered under you






email


No


Search filter, email address subuser was registered with






active


No


Search filter, whether or not the subuser is currently active






first_name


No


Search filter, first name of subuser






last_name


No


Search filter, last name of subuser






address


No


Search filter, address of subuser






city


No


Search filter, city of subuser






state


No


Search filter, state of subuser






country


No


Search filter, country of subuser






zip


No


Search filter, zipcode of subuser






phone


No


Search filter, phone number of subuser






website


No


Search filter, website of subuser






company


No


Search filter, company of subuser






### XML API Request


`https://sendgrid.com/api/user.profile.xml?api_user=username&api;_key=secureSecret&task;=get`


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


`https://sendgrid.com/api/user.profile.json?api_user=username&api;_key=secureSecret&task;=get`


#### Return


`[{"username":"username","email":"example1@example.com","active":"true","first_name":"john","last_name":"doe","address":"555 any street","city":"any city","state":"CA","zip":"91234","country":"US","phone":"555-555-5555","website":"example.com"},{"username":"username","email":"example2@example.com","active":"false","first_name":"jane","last_name":"doe","address":"555 any street","city":"any city","state":"CA","zip":"91234","country":"US","phone":"555-555-5555","website":"example.com"}]`



## Enable a Subuser


Enable a subuser so they may start sending out emails again. This call will not enable website access. To[enable website access](http://sendgrid.com/documentation/display/subuser/manage/method/api/task/Users/version/v2#enableWebsiteSubuser).


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Must be in email format


The subuser you are planning to enabling






### XML API Request


`https://sendgrid.com/api/user.enable.xml?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return - Success


`

  success

`


#### Return - Error


`

  User not found

`


### JSON API Request


`https://sendgrid.com/api/user.enable.json?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`



## Disable a Subuser


This prevents them from sending out emails with SendGrid.


### Parameters









Parameter
Required
Requirements
Description





username


Yes


Must be in email format


The subuser you are planning to disabling






### XML API Request


`https://sendgrid.com/api/user.disable.xml?api_user=username&api;_key=secureSecret&task;=get`


#### Return - Success


`

  success

`


#### Return - Error


`

  User not found

`


### JSON API Request


`https://sendgrid.com/api/user.disable.json?api_user=username&api;_key=secureSecret&task;=get`


#### Return - Success


        `{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`



## Enable Website Access To A Subuser


Allow a subuser to login to the SendGrid.com website. This call will not enable the subuser from sending out emails. To [enable a subuser](http://sendgrid.com/documentation/display/subuser/manage/method/api/task/Users/version/v2#enableSubuser).


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Must be in email format


The subuser you are planning to grant website access






### XML API Request


`https://sendgrid.com/api/user.website_enable.xml?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return - Success


`

  success

`


#### Return - Error


`

  User not found

`


### JSON API Request


`https://sendgrid.com/api/user.website_enable.json?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`



## Disable Website Access To A Subuser


Disallow a subuser to login to the SendGrid.com website. This call will not prevent them from sending out emails. To [disable a subuser](http://sendgrid.com/documentation/display/subuser/manage/method/api/task/Users/version/v2#disableSubuser).


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Must be in email format


The subuser you are planning to disallow website access






### XML API Request


`https://sendgrid.com/api/user.website_disable.xml?api_user=username&api;_key=secureSecret&task;=get`


#### Return - Success


`

  success

`


#### Return - Error


`

  User not found

`


### JSON API Request


`https://sendgrid.com/api/user.website_disable.json?api_user=username&api;_key=secureSecret&task;=get`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"User not found"}`



## Update Subuser Profile


Allows you to update your subusers profile information


### Parameters









Parameter
Required
Description





task


Yes


Must be set to **set** in order to update profile information






user


Yes


Subuser that is registered under you






first_name


No


First name of subuser






last_name


No


Last name of subuser






address


No


Address of subuser






city


No


City of subuser






state


No


State of subuser






country


No


Country of subuser






zip


No


Zipcode of subuser






phone


No


Phone number of subuser






website


No


Website of subuser






company


No


Company of subuser






### XML API Request


`https://sendgrid.com/api/user.profile.xml?api_user=username&api;_key=secureSecret&task;=set&user;=example@example.com&first;_name=newFirstName&last;_name=&newLastName;`


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


`https://sendgrid.com/api/user.profile.json?api_user=username&api;_key=secureSecret&task;=set&user;=example@example.com&first;_name=newFirstName&last;_name=&newLastName;`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`



## Update Subuser Password


Passwords are encrypted by default and therefore cannot be retrieved; however, you can reset a subusers password.


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Subuser must be registered under you


The subuser you are planning to reset the password






password


Yes


Must be at least 6 characters


New password of subuser






confirm_password


Yes


Must match password parameter and be at least 6 characters


Confirm new password






### XML API Request


`https://sendgrid.com/api/user.password.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&password;=newPasword&confirm;_password=newPassword`


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


`https://sendgrid.com/api/user.password.json?api_user=username&api;_key=secureSecret&user;=example@example.com&password;=newPasword&confirm;_password=newPassword`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`



## Update Subuser Username


Note that your subuser account username is used to login to our SMTP server _and_ the website and changes take effect immediately.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to**setUsername**


This will let us know you want to update your subusers username. This is the new username your subuser will be authenticating with our SMTP servers _and_ to access the website. This update takes effect immediately






user


Yes


Subuser must be registered under your account


The user we will be updating their username for






username


Yes


Must be in email format, not more than 100 characters, cannot be already taken and cannot contain SendGrid.com in the domain name


This is the new username we will be authenticating with our SMTP servers _and_ to access our site. This update takes effect immediately






### XML API Request


`https://sendgrid.com/api/user.profile.xml?api_user=username&api;_key=secureSecret&task;=setUsername&user;=example@example.com&username;=newexample@example.com`


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


`https://sendgrid.com/api/user.profile.json?api_user=username&api;_key=secureSecret&task;=setUsername&user;=example@example.com&username;=newexample@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`



## Update Subuser Email Address


This is the contact email we use for your subusers. Changes take place immediately. It is your responsibility to validate the contact email.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to **setEmail**


This will let us know you want to update your subusers email address. This update takes effect immediately






user


Yes


Subuser must be registered under your account


The user we will be updating their username for






email


Yes


Must be in email format, not more than 100 characters


This is the new email address we will use for contacting subuser. This update takes effect immediately






### XML API Request


`https://sendgrid.com/api/user.profile.xml?api_user=username&api;_key=secureSecret&task;=setEmail&user;=example@example.com&email;=newexample@example.com`


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


`https://sendgrid.com/api/user.profile.xml?api_user=username&api;_key=secureSecret&task;=setEmail&user;=example@example.com&email;=newexample@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`
