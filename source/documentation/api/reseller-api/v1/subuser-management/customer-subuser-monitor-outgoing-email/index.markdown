---
comments: false
date: 2011-07-27 08:15:48
layout: page
slug: customer-subuser-monitor-outgoing-email
title: Customer Subuser Monitor Outgoing Email
wordpress_id: 2348
---

Receive a sample of an outgoing message by a specific customer subuser.

The first step is to create a Monitor Record. Once the monitor record has been created, a reseller can append a monitor record to a customer subuser. Multiple customer subuser can be appended to a single monitor record.




## Create Monitor Record


Obtain a complete list of all customer subuser.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _create_


Create a monitor record






name


Yes


Name must be unique. Can't be more than 255
characters


The unique name to identify this monitor
record






email


Yes


Must be in email format


The email destination to send the email
sample to






frequency


Yes


Customer subuser must be registered under your
account


The frequency of emails to be sent out






### XML API Request


`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=monitor&task;=create&name;=myMonitor&email;=example@example.com&frequency;=10000`


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


`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=monitor&task;=create&name;=myMonitor&email;=example@example.com&frequency;=10000`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Edit Monitor Record


Make modifications to an existing Monitor record.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _edit_


The task required to edit a monitor






name


Yes


The name of the previous monitor record


The monitor record we are going to edit






new_name


No


New name must be unique and can't be more
than 255 characters


The new monitor record name






new_email


No


Must be in email format


The new email destination to send the email
sample to






new_frequency


No


Must be an integer and greater than 0


The new frequency of emails to be sent out






### XML API Request


`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=monitor&task;=edit&name;=myMonitor&new;_name=updatedMonitor&new;_email=example@example.com&new;_frequency=50`


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


`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=monitor&task;=edit&name;=myMonitor&new;_name=updatedMonitor&new;_email=example@example.com&new;_frequency=50`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Delete Monitor Record


Deleting a monitor record will remove it from SendGrid's system. **Make sure no users are currently using the monitor record when removing, or removal will fail.**


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _delete_


The task required to remove a monitor






name


Yes


Must be a monitor record to remove


The unique name to identify this monitor
record






### XML API Request


`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=monitor&task;=delete&name;=recordToDelete`


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


`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=monitor&task;=delete&name;=recordToDelete`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## List All Monitor Records


List all available monitor records a reseller has.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _list_


The task required to list all monitor records






### XML API Request


`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=monitor&task;=list`


#### Return


`

      
        sampleNameA
        example@example.com
        1000
        
      
      
        sampleNameB
        example@example.com
        10000
        
          user1@example.com
          user2@example.com
        
      

`


### JSON API Request


`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=monitor&task;=list`


#### Return


`[{"name":"sampleNameA","email":"example@example.com","frequency":"1000","users":[]},{"name":"sampleNameB","email":"example@example.com","frequency":"10000","users":["user1@example.com","user2@example.com"]}]`




## Append A Customer Subuser To A Monitor Record


Append a monitor record to a existing record onto a customer subuser.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _append_


The task required to append a monitor record
to a customer subuser






user


Yes


Customer subuser must be registered under your
account


The user we will append a monitor record to






name


No


Must be a valid monitor record


The name of the monitor record we will be
appending






### XML API Request


`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=monitor&task;=append&name;=myMonitor&user;=example@example.com`


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


`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=monitor&task;=append&name;=myMonitor&user;=example@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`




## Detach A Monitor Record From A Customer Subuser


Detach a customer subuser from a monitor record.


### Parameters









Parameter
Required
Requirements
Description





task


Yes


Must be set to _detach_


The task required to detach a monitor record
to a customer subuser






user


Yes


Customer subuser must be registered under your
account


The customer subuser we will detach the
monitor record from






### XML API Request


`https://sendgrid.com/api/distributor.manageSubuser.xml?api_user=username&api;_key=secureSecret&method;=monitor&task;=detach&user;=example@example.com`


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


`https://sendgrid.com/api/distributor.manageSubuser.json?api_user=username&api;_key=secureSecret&method;=monitor&task;=detach&user;=example@example.com`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`
