---
comments: false
date: 2011-09-13 12:33:44
layout: page
published: false
slug: ip-management
title: IP Management
wordpress_id: 3046
---





## List


Obtain a complete list of all IP's and which are free, taken or available.


### Parameters









Parameter
Required
Requirements





list


Yes


Must be set to either ( all / free / taken / available )




Here is a brief explanation of each option available for the list parameter:



all
    All IP addresses available to reseller, regardless of whether or not the IP is taken by a subuser
free
    All free IP addresses for the reseller. If a subuser is using an IP, it will not show up on this list
taken
    All taken IP addresses for the reseller. Only IP addresses that taken by subusers will show up on this list
available
    All available IP addresses for the reseller including all free IP addresses. If a subuser is deactivated _and_ is assigned an IP, that IP will show up on this list since that IP address is not being used by anyone



### XML API Request



`https://sendgrid.com/api/user.ip.xml?api_user=username&api;_key=secureSecret&list;=all`


#### Return


`

  255.255.255.250
  255.255.255.251
  255.255.255.252

`


### JSON API Request



`https://sendgrid.com/api/user.ip.xml?api_user=username&api;_key=secureSecret&list;=all`


#### Return


`[{"ip":"255.255.255.250"},{"ip":"255.255.255.251"},{"ip":"255.255.255.252"}]`






## Subuser IP Usage


If your account has more than one IP address, you can manage what IPs your subusers are allowed to send from. If you remove all IPs from a specified user, they will use all IPs from from your list.


### Parameters









Parameter
Required
Requirements





list


Yes


Must be set to _list_






user


Yes


Subuser must be registered under your account






### XML API Request



`https://sendgrid.com/api/user.sendip.xml?api_user=username&api;_key=secureSecret&task;=list&user;=example@example.com`


#### Return - Success


`

  o1.sendgrid.net
  
    255.255.255.250
    255.255.255.251
    255.255.255.252
    255.255.255.253
    255.255.255.254
  

`


#### Return - Error


`

  User does not exist

`


### JSON API Request



`https://sendgrid.com/api/user.sendip.json?api_user=username&api;_key=secureSecret&task;=list&user;=example@example.com`


#### Return - Success


`{"success":"success","outboundcluster":"o1.sendgrid.net","ips":[{"ip":"255.255.255.250"},{"ip":"255.255.255.251"},{"ip":"255.255.255.251"},{"ip":"255.255.255.252"},{"ip":"255.255.255.253"},{"ip":"255.255.255.254"}]}`


#### Return - Error


`{"error":{"code":400,"message":"User does not exist"}}`



## Subuser IP Assignment


You need to assign at least ONE IP to your subuser.


### Parameters









Parameter
Required
Requirements





list


Yes


Must be set to _append_






user


Yes


Subuser must be registered under your account






set


Yes


Must be either:
**none**: Remove all ips.
**all**: Apply all possible ips to subuser.
**specify**: Specify the ips to the subser. Must be a valid set of IPs (use the list call to determine valid IPs)






ip[]


No


If the _set_ parameter is set, then you must specify the IPs. Use the ip[] parameter to specify an IP. [ IE - ip[]=255.255.255.0&ip;[]=255.255.255.1 ]






### XML API Request



`https://sendgrid.com/api/user.sendip.xml?api_user=username&api;_key=secureSecret&task;=append&set;=specify&user;=example@example.com&ip;[]=255.255.255.250&ip;[]=255.255.255.251`


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



`https://sendgrid.com/api/user.sendip.json?api_user=username&api;_key=secureSecret&task;=append&set;=specify&user;=example@example.com&ip;[]=255.255.255.250&ip;[]=255.255.255.251`


#### Return - Success


`{"message":"success"}`


#### Return - Error


`{"message":"error","errors":[..."error messages"...]}`

