---
comments: false
date: 2011-10-04 10:01:56
layout: page
published: false
slug: credit-limits
title: Credit Limits
wordpress_id: 3252
---

## View your remaining credits







## Parameters









Parameter
Required
Description





userid


yes


User ID to get credit limits for










## XML




### Command


`https://sendgrid.com//api/credits/getlimit.xml?userid=id&api;_user=youremail@domain.com&api;_key=secureSecret`


### Return


`

  200
  175
  daily
  2011-02-21

`


### Return - Error


`

  
     error 
    ...
  

`





## JSON




### Command


`https://sendgrid.com//api/credits/getlimit.json?userid=id&api;_user=youremail@domain.com&api;_key=secureSecret`





### Return


`
 {
  "success":
   {
      "credits_allowed":"200",
      "credits_remain":"175",
      "period":"daily",
      "last_reset":"2011-02-21"
   }
 }
`


### Return - Error


`
 {"error":error}
`
