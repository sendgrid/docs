---
comments: false
date: 2011-05-02 15:54:56
layout: page
slug: lists
title: Lists
wordpress_id: 627
following_users:
- support_docs
---

This module allows you to manage and create Recipient Lists associated with the Newsletter feature.




## add


Create a new Recipient List.


### Parameters









Parameter
Required
Requirements
Description





list


Yes


None


Create a Recipient List with this name.






name


No


None


Specify the column name for the 'name' associated with email addresses.






_columnname_


No


None


Specify additional column names. The format needs to be 
    
    &columnname;=columnname

[_columnname_] will be the replacement tag.







## edit


Rename a Recipient List.


### Parameters









Parameter
Required
Requirements
Description





list


Yes


Must be an existing Recipient List.


This is the name of the Recipient List to be renamed.






newlist


Yes


None


Specify the new name for the Recipient List.







## get


List all Recipient Lists on your account, or check if a particular List exists.


### Parameters









Parameter
Required
Requirements
Description





list


No


None


Check for this particular list. (To list all Recipient Lists on your account exclude this parameter)







## delete


Remove a Recipient List from your account.


### Parameters









Parameter
Required
Requirements
Description





list


Yes


Must be an existing Recipient List.


Remove this Recipient List.




