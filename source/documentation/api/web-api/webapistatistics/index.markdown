---
comments: false
date: 2011-08-03 14:30:04
layout: page
slug: webapistatistics
title: Statistics
wordpress_id: 2423
---

## Retrieve Statistics




###    
Note that you can use either the days parameter or the start_date and end_date parameter. 
_If provided with no parameters the current day's statistics are returned instead._  





## Parameters









Parameter
Required
Requirements
Description





days


No


Must be an integer greater than 0


Number of days in the past to include statistics (Includes today)






start_date


No


Date must be in YYYY-MM-DD format and be before the end_date parameter


The start date to look up statistics






end_date


No


Date must be in YYYY-MM-DD format and be after the start_date parameter


The end date to look up statistics









## XML




### Command


`https://sendgrid.com/api/stats.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&days;=2`


### Return


`

  
    2009-06-20
    12342
    12
    10223
    9992
    5
    3
    6
    7
  
  
    2009-06-21
    32342
    10
    14323
    10995
    7
    3
    9
    4
  
  
    2009-06-22
    52342
    11
    19223
    12992
    2
    5
    2
    8
  

`


## JSON




### Command


`https://sendgrid.com/api/stats.get.json?api_user=youremail@domain.com&api;_key=secureSecret&days;=2`


### Return


`
[{"date":"2009-06-20","requests":12342,"bounces":12,"clicks":10223,"opens":9992,"spamreports":5,"unique_clicks":3,"unique_opens":6,"blocked":7},{"date":"2009-06-21","requests":32342,"bounces":10,"clicks":14323,"opens":10995,"spamreports":7,"unique_clicks":3,"unique_opens":9,"blocked":4},{"date":"2009-06-22","requests":52342,"bounces":11,"clicks":19223,"opens":12992,"spamreports":2,"unique_clicks":5,"unique_opens":2,"blocked":8}]
`








## Retrieve Aggregates




### Retrieve all-time totals for your subusers




## Parameters









Parameter
Required
Requirements
Description





aggregate


Yes


Must be set to 1


This is used to indicate you are interested in all time totals









## XML




### Command


`https://sendgrid.com/api/stats.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&aggregate;=1`


### Return


`

    12342
    12
    10223
    9992
    5
    5
    2
    8

`


## JSON




### Command


`https://sendgrid.com/api/stats.get.json?api_user=youremail@domain.com&api;_key=secureSecret&aggregate;=1`


### Return


`{"requests":12342,"bounces":12,"clicks":10223,"opens":9992,"spamreports":5,"unique_clicks":5,"unique_opens":2,"blocked":8}`








## Category List




### Retrieve a list of all the categories used in your account.





## XML




### Command


`https://sendgrid.com/api/stats.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&list;=true`


### Return


`

  categoryA
  categoryB
  categoryC

`


## JSON




### Command


`https://sendgrid.com/api/stats.get.json?api_user=youremail@domain.com&api;_key=secureSecret&list;=true`


### Return


`[{"category":"categoryA"},{"category":"categoryB"},{"category":"categoryC"}]`








## Category Statistics




### Retrieve statistics broken down by category. If the category does not exist, there will be an empty result set.




### _Note that you can use either the days parameter or the start_date and end_date parameter._




## Parameters









Parameter
Required
Requirements
Description





category


Yes


Must be an existing category that has statistics.


The category you will specify to retrieve detailed stats






days


No


Must be an integer greater than 0


Number of days in the past to include statistics (Includes today)






start_date


No


Date must be in YYYY-MM-DD format and be before the end_date parameter


The start date to look up statistics






end_date


No


Date must be in YYYY-MM-DD format and be after the start_date parameter


The end date to look up statistics









## XML




### Command


`https://sendgrid.com/api/stats.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&start;_date=2009-06-20&end;_date=2009-06-22&category;=categoryA`


### Command - Using an array of categories


`https://sendgrid.com/api/stats.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&start;_date=2009-06-20&end;_date=2009-06-22&category;[]=categoryA&category;[]=categoryB`


### Return


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


## JSON




### Command


`https://sendgrid.com/api/stats.get.json?api_user=youremail@domain.com&api;_key=secureSecret&start;_date=2009-06-20&end;_date=2009-06-22&category;=categoryA`


### Command - Using an array of categories


`https://sendgrid.com/api/stats.get.json?api_user=youremail@domain.com&api;_key=secureSecret&start;_date=2009-06-20&end;_date=2009-06-22&category;[]=categoryA&category;[]=categoryB`


### Return


`[{"date":"2009-06-20","category":,"categoryA","requests":12342,"bounces":12,"clicks":10223,"opens":9992,"spamreports":5,"unique_clicks":5,"unique_opens":2,"blocked":7},{"date":"2009-06-21",,"category":,"categoryB","requests":32342,"bounces":10,"clicks":14323,"opens":10995,"spamreports":7,"unique_clicks":4,"unique_opens":1,"blocked":6}]`








## All Time Category Totals




### Retrieve statistics broken down by category. If the category does not exist, there will be an empty result set.




### _Note that you can use either the days parameter or the start_date and end_date parameter._




## Parameters









Parameter
Required
Requirements
Description





category


Yes


Must be set to 1


This is used to indicate you are interested in all time totals






category


Yes


Must be an existing category that has statistics.


The category you will specify to retrieve detailed stats






days


No


Must be an integer greater than 0


Number of days in the past to include statistics (Includes today)






start_date


No


Date must be in YYYY-MM-DD format and be before the end_date parameter


The start date to look up statistics









## XML




### Command


`https://sendgrid.com/api/stats.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&category;=categoryA&aggregate;=1`


### Command - Using an array of categories


`https://sendgrid.com/api/stats.get.xml?api_user=youremail@domain.com&api;_key=secureSecret&category;[]=categoryA&category;[]=categoryB&aggregate;=1`


### Return


`

  
    categoryA
    12342
    12
    10223
    9992
    5
    5
    2
    8
  

`


## JSON




### Command


`https://sendgrid.com/api/stats.get.json?api_user=youremail@domain.com&api;_key=secureSecret&category;=categoryA&aggregate;=1`


### Return


`[{"name":"categoryA","requests":12342,"bounces":12,"clicks":10223,"opens":9992,"spamreports":5,"unique_clicks":5,"unique_opens":2,"blocked":8}]`
