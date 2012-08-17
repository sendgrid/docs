---
comments: false
date: 2011-09-12 13:11:29
layout: page
published: false
slug: subuser-management
title: Subuser Statistics
wordpress_id: 2875
---

# 




## Retrieve Subuser Statistics


Note that you can use _either_ the days parameter _or_ the start_date and end_date parameter.


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Subuser must be registered under your account


The subuser we are retrieving statistics from






days


No


Must be an integer greater than 0


Number of days in the past to include statistics (includes today)






start_date


No


Date must be in YYYY-mm-dd format and be before the end_date parameter


The start date to look up statistics






end_date


No


Date must be in YYYY-mm-dd format and be after the start_date parameter


The end date to look up statistics






### XML API Request


`https://sendgrid.com/api/user.stats.xml?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return


`

  
    2009-06-20
    12342
    12
    10223
    9992
    5
  
  
    2009-06-21
    32342
    10
    14323
    10995
    7
  
  
    2009-06-22
    52342
    11
    19223
    12992
    2
  

`


### JSON API Request


`https://sendgrid.com/api/user.stats.json?api_user=username&api;_key=secureSecret&user;=example@example.com`


#### Return


`[{"date":"2009-06-20","requests":12342,"bounces":12,"clicks":10223,"opens":9992,"spamreports":5},{"date":"2009-06-21","requests":32342,"bounces":10,"clicks":14323,"opens":10995,"spamreports":7},{"date":"2009-06-22","requests":52342,"bounces":11,"clicks":19223,"opens":12992,"spamreports":2}]`


# 




## Retrieve Aggregates


Retrieve all-time totals for your subuser


### Parameters









Parameter
Required
Requirements
Description





user


Yes


Subuser must be registered under your account


The subuser we are retrieving statistics from






aggregate


Yes


Must be set to 1


This is used to let us know that you are interested in all time totals






### XML API Request


`https://sendgrid.com/api/user.stats.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&aggregate;=1`


#### Return


`

  12342
  12
  10223
  9992
  5

`


### JSON API Request


`https://sendgrid.com/api/user.stats.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&aggregate;=1`


#### Return


`{"requests":12342,"bounces":12,"clicks":10223,"opens":9992,"spamreports":5}`


# 




## Category List


Retrieve a list of all the categories used in your subusers account.


### Parameters









Parameter
Required
Requirements
Description





list


Yes


The value must be set to_true_


This will allow you to retrieve a list of all categories used in your subusers account.






user


Yes


Subuser must be registered under your account


The subuser we are retrieving category statistics from






### XML API Request


`https://sendgrid.com/api/user.stats.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&list;=true`


#### Return


` categoryA categoryB categoryC `


### JSON API Request


`https://sendgrid.com/api/user.stats.json?api_user=username&api;_key=secureSecret&user;=example@example.com&list;=true`


#### Return


`[{"category":"categoryA","category":"categoryB","category":"categoryC"}]`


# 




## Category Statistics


Retrieve statistics broken down by category. If the category does not exist, there will be an empty result set.

Note that you can use _either_ the days parameter _or_ the start_date and end_date parameter.


### Parameters









Parameter
Required
Requirements
Description





category


Yes


Must be an existing category that has statistics. You can pass in an array of categories


The category you will specify to retrieve detailed stats






user


Yes


Subuser must be registered under you


The subuser we are retrieving statistics from






days


No


Must be an integer greater than 0


Number of days in the past to include statistics (Includes today)






start_date


No


Date must be in YYYY-mm-dd format and be before the end_date parameter


The start date to look up statistics






end_date


No


Date must be in YYYY-mm-dd format and be after the start_date parameter


The end date to look up statistics






### XML API Request


`https://sendgrid.com/api/user.stats.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&start;_date=2009-06-20&end;_date=2009-06-22&category;=categoryA`


#### API Request - Using an array of categories


`https://sendgrid.com/api/user.stats.xml?api_user=username&api;_key=secureSecret&user;=example@example.com&start;_date=2009-06-20&end;_date=2009-06-22&category;[]=categoryA&category;[]=categoryB`


#### Return


`

  
    2009-06-20
    categoryA
    12342
    12
    10223
    9992
    5
  
  
    2009-06-21
    categoryB
    32342
    10
    14323
    10995
    7
  

`


### JSON API Request


`https://sendgrid.com/api/user.stats.json?api_user=username&api;_key=secureSecret&user;=example@example.com&start;_date=2009-06-20&end;_date=2009-06-22&category;=categoryA`


#### API Request - Using an array of categories


`https://sendgrid.com/api/user.stats.json?api_user=username&api;_key=secureSecret&user;=example@example.com&start;_date=2009-06-20&end;_date=2009-06-22&category;[]=categoryA&category;[]=categoryB`


#### Return


`[{"date":"2009-06-20","category":,"categoryA","requests":12342,"bounces":12,"clicks":10223,"opens":9992,"spamreports":5},{"date":"2009-06-21",,"category":,"categoryB","requests":32342,"bounces":10,"clicks":14323,"opens":10995,"spamreports":7}]`
