---
layout: page
weight: 0
title: Customer Statistics
navigation:
   show: true
---

<page-anchor el="h2">
Retrieve Customer Statistics
</page-anchor>

Note that you can use *either* the days parameter *or* the `start_date` and `end_date` parameter.


{% parameters get %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer we are retrieving statistics from' %}
 {% parameter 'days' 'No' 'Must be an integer greater than 0' 'Number of days in the past to include statistics (includes today)' %}
 {% parameter 'start_date' 'No' 'Date must be in YYYY-mm-dd format and be before the end_date parameter' 'The start date to look up statistics' %}
 {% parameter 'end_date' 'No' 'Date must be in YYYY-mm-dd format and be after the start_date parameter' 'The end date to look up statistics' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>stats</em>' 'Allows you to access stats functionality' %}
{% endparameters %}


To retrieve statistics for the Marketing Emails application you can use [Category Statistics](#-Category-Statistics) with `category=Newsletter` parameter.

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=stats&user=eexampexample@example.com %}
  {% response json %}
[
  {
    "date": "2009-06-20",
    "requests": 12342,
    "delivered": 0,
    "bounces": 12,
    "repeat_bounces": 0,
    "unsubscribes": 0,
    "repeat_unsubscribes": 0,
    "clicks": 10223,
    "opens": 9992,
    "spamreports": 5,
    "repeat_spamreports": 0,
    "invalid_email": 0,
    "blocks": 0,
    "unique_clicks": 0,
    "unique_opens": 0
  },
  {
    "date": "2009-06-21",
    "requests": 32342,
    "delivered": 0,
    "bounces": 10,
    "repeat_bounces": 0,
    "unsubscribes": 0,
    "repeat_unsubscribes": 0,
    "clicks": 14323,
    "opens": 10995,
    "spamreports": 7,
    "repeat_spamreports": 0,
    "invalid_email": 0,
    "blocks": 0,
    "unique_clicks": 0,
    "unique_opens": 0
  },
  {
    "date": "2009-06-22",
    "requests": 52342,
    "delivered": 0,
    "bounces": 11,
    "repeat_bounces": 0,
    "unsubscribes": 0,
    "repeat_unsubscribes": 0,
    "clicks": 19223,
    "opens": 12992,
    "spamreports": 2,
    "repeat_spamreports": 0,
    "invalid_email": 0,
    "blocks": 0,
    "unique_clicks": 0,
    "unique_opens": 0
  }
]
  {% endresponse %}
  {% response xml %}
<stats>
   <day>
      <date>2009-06-20</date>
      <requests>12342</requests>
      <delivered>9</delivered>
      <bounces>12</bounces>
      <repeat_bounces>0</repeat_bounces>
      <unsubscribes>0</unsubscribes>
      <repeat_unsubscribes>0</repeat_unsubscribes>
      <clicks>10223</clicks>
      <opens>9992</opens>
      <spamreports>5</spamreports>
      <repeat_spamreports>0</repeat_spamreports>
      <invalid_email>0</invalid_email>
      <blocks>0</blocks>
      <unique_clicks>0</unique_clicks>
      <unique_opens>0</unique_opens>
   </day>
   <day>
      <date>2009-06-21</date>
      <requests>32342</requests>
      <delivered>9</delivered>
      <bounces>10</bounces>
      <repeat_bounces>0</repeat_bounces>
      <unsubscribes>0</unsubscribes>
      <repeat_unsubscribes>0</repeat_unsubscribes>
      <clicks>14323</clicks>
      <opens>10995</opens>
      <spamreports>7</spamreports>
      <repeat_spamreports>0</repeat_spamreports>
      <invalid_email>0</invalid_email>
      <blocks>0</blocks>
      <unique_clicks>0</unique_clicks>
      <unique_opens>0</unique_opens>
   </day>
   <day>
      <date>2009-06-22</date>
      <requests>52342</requests>
      <delivered>9</delivered>
      <bounces>11</bounces>
      <repeat_bounces>0</repeat_bounces>
      <unsubscribes>0</unsubscribes>
      <repeat_unsubscribes>0</repeat_unsubscribes>
      <clicks>19223</clicks>
      <opens>12992</opens>
      <spamreports>2</spamreports>
      <repeat_spamreports>0</repeat_spamreports>
      <invalid_email>0</invalid_email>
      <blocks>0</blocks>
      <unique_clicks>0</unique_clicks>
      <unique_opens>0</unique_opens>
   </day>
</stats>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Retrieve Aggregates
</page-anchor>

Retrieve all-time totals for your customer


{% parameters agg %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer we are retrieving statistics from' %}
 {% parameter 'aggregate' 'Yes' 'Must be set to 1' 'This is used to let us know that you are interested in all time totals' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>stats</em>' 'Allows you to access stats functionality' %}
{% endparameters %}


{% apiexample agg POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=stats&user=eexampexample@example.com&aggregate=1 %}
  {% response json %}
{
  "requests": 12342,
  "delivered": 10,
  "bounces": 12,
  "repeat_bounces": 0,
  "unsubscribes": 0,
  "repeat_unsubscribes": 0,
  "clicks": 10223,
  "opens": 9992,
  "spamreports": 5,
  "repeat_spamreports": 0,
  "invalid_email": 1,
  "blocks": 0,
  "unique_clicks": 0,
  "unique_opens": 0
}
  {% endresponse %}
  {% response xml %}
<stats>
   <requests>12342</requests>
   <delivered>10</delivered>
   <bounces>12</bounces>
   <repeat_bounces>0</repeat_bounces>
   <unsubscribes>0</unsubscribes>
   <repeat_unsubscribes>0</repeat_unsubscribes>
   <clicks>10223</clicks>
   <opens>9992</opens>
   <spamreports>5</spamreports>
   <repeat_spamreports>0</repeat_spamreports>
   <invalid_email>0</invalid_email>
   <blocks>0</blocks>
   <unique_clicks>0</unique_clicks>
   <unique_opens>0</unique_opens>
</stats>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Category List
</page-anchor>

Retrieve a list of all the categories used in your customers account.


{% parameters cat %}
 {% parameter 'list' 'Yes' 'The value must be set to <em>true</em>' 'This will allow you to retrieve a list of all categories used in your customers account.' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer we are retrieving category statistics from' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>stats</em>' 'Allows you to access stats functionality' %}
{% endparameters %}


{% apiexample cat POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=stats&user=eexampexample@example.com&list=true %}
  {% response json %}
[
  {
    "category": "categoryA"
  },
  {
    "category": "categoryB"
  },
  {
    "category": "categoryC"
  }
]
  {% endresponse %}
  {% response xml %}
<categories>
   <category>categoryA</category>
   <category>categoryB</category>
   <category>categoryC</category>
</categories>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Category Statistics
</page-anchor>

Retrieve statistics broken down by category. If the category does not exist, there will be an empty result set.

Note that you can use *either* the days parameter *or* the start_date and end_date parameter.


{% parameters catstat %}
 {% parameter 'category' 'Yes' 'Must be an existing category that has statistics. You can pass in an array of categories' 'The category you will specify to retrieve detailed stats' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under you' 'The customer we are retrieving statistics from' %}
 {% parameter 'days' 'No' 'Must be an integer greater than 0' 'Number of days in the past to include statistics (Includes today)' %}
 {% parameter 'start_date' 'No' 'Date must be in YYYY-mm-dd format and be before the end_date parameter' 'The start date to look up statistics' %}
 {% parameter 'end_date' 'No' 'Date must be in YYYY-mm-dd format and be after the start_date parameter' 'The end date to look up statistics' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>stats</em>' 'Allows you to access stats functionality' %}
{% endparameters %}


{% apiexample catstat POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=stats&user=eexampexample@example.com&start_date=2009-06-20&end_date=2009-06-22&category=category %}
  {% response json %}
[
  {
    "category": "CategoryA",
    "delivered": 1,
    "unsubscribes": 0,
    "invalid_email": 0,
    "bounces": 0,
    "repeat_unsubscribes": 0,
    "unique_clicks": 0,
    "blocked": 0,
    "spam_drop": 0,
    "repeat_bounces": 0,
    "repeat_spamreports": 0,
    "date": "2014-09-09",
    "requests": 1,
    "spamreports": 0,
    "clicks": 0,
    "opens": 0,
    "unique_opens": 0
  },
  {
    "category": "CategoryB",
    "delivered": 1,
    "unsubscribes": 0,
    "invalid_email": 0,
    "bounces": 0,
    "repeat_unsubscribes": 0,
    "unique_clicks": 0,
    "blocked": 0,
    "spam_drop": 0,
    "repeat_bounces": 0,
    "repeat_spamreports": 0,
    "date": "2014-09-08",
    "requests": 1,
    "spamreports": 0,
    "clicks": 0,
    "opens": 0,
    "unique_opens": 0
  }
]
  {% endresponse %}
  {% response xml %}
<stats>
   <day>
      <category>CategoryA</category>
      <delivered>1</delivered>
      <unsubscribes>0</unsubscribes>
      <invalid_email>0</invalid_email>
      <bounces>0</bounces>
      <repeat_unsubscribes>0</repeat_unsubscribes>
      <unique_clicks>0</unique_clicks>
      <blocked>0</blocked>
      <spam_drop>0</spam_drop>
      <repeat_bounces>0</repeat_bounces>
      <repeat_spamreports>0</repeat_spamreports>
      <date>2014-09-09</date>
      <requests>1</requests>
      <spamreports>0</spamreports>
      <clicks>0</clicks>
      <opens>0</opens>
      <unique_opens>0</unique_opens>
   </day>
   <day>
      <category>CategoryB</category>
      <delivered>1</delivered>
      <unsubscribes>0</unsubscribes>
      <invalid_email>0</invalid_email>
      <bounces>0</bounces>
      <repeat_unsubscribes>0</repeat_unsubscribes>
      <unique_clicks>0</unique_clicks>
      <blocked>0</blocked>
      <spam_drop>0</spam_drop>
      <repeat_bounces>0</repeat_bounces>
      <repeat_spamreports>0</repeat_spamreports>
      <date>2014-09-08</date>
      <requests>1</requests>
      <spamreports>0</spamreports>
      <clicks>0</clicks>
      <opens>0</opens>
      <unique_opens>0</unique_opens>
   </day>
</stats>

  {% endresponse %}
{% endapiexample %}
