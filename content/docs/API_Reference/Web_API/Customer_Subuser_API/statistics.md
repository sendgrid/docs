---
layout: page
weight: 350
title: Statistics
navigation:
   show: true
---

Subuser Statistics

<page-anchor el="h2">
Retrieve Subuser Statistics
</page-anchor>

Retrieve daily statistics for a subuser.

{% info %}
The <code>days</code> argument and the <code>start_date</code>/<code>end_date</code> arguments are exclusive from each other.
{% endinfo %}

{% parameters stats %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve statistics from' %}
 {% parameter days No 'Unsigned Integer' 'Number of days in the past to include statistics (includes today)' %}
 {% parameter start_date No 'Date must be in <code>YYY-mm-dd</code> format and be before the <code>end_date</code> parameter' 'Beginning of date range' %}
 {% parameter end_date No 'Date must be in <code>YYY-mm-dd</code> format and be after the <code>start_date</code> parameter' 'End of date range' %}
{% endparameters %}

{% apiexample stats POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username %}
  {% response json %}
[
  {
    "date": "2014-11-27",
    "requests": 0,
    "delivered": 0,
    "bounces": 0,
    "repeat_bounces": 0,
    "unsubscribes": 0,
    "repeat_unsubscribes": 0,
    "clicks": 0,
    "opens": 0,
    "spamreports": 0,
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
    <date>2014-11-29</date>
    <requests>0</requests>
    <delivered>0</delivered>
    <bounces>0</bounces>
    <repeat_bounces>0</repeat_bounces>
    <unsubscribes>0</unsubscribes>
    <repeat_unsubscribes>0</repeat_unsubscribes>
    <clicks>0</clicks>
    <opens>0</opens>
    <spamreports>0</spamreports>
    <repeat_spamreports>0</repeat_spamreports>
    <invalid_email>0</invalid_email>
    <blocks>0</blocks>
    <unique_clicks>0</unique_clicks>
    <unique_opens>0</unique_opens>
  </day>
</stats>

  {% endresponse %}
{% endapiexample %}

<page-anchor el="h2">
Retrieve Aggregate Statistics
</page-anchor>

Retrieve lifetime total statistics for a subuser.

{% parameters agg %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve statistics from' %}
 {% parameter aggregate Yes 'Must be set to <code>1</code>' 'argument to provide total statistics instead of daily' %}
{% endparameters %}


{% apiexample agg POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&aggregate=1 %}
  {% response json %}
{
  "requests": "12342",
  "bounces": "12",
  "clicks": "10223",
  "opens": "9992",
  "spamreports": "5"
}
  {% endresponse %}
  {% response xml %}
<stats>
   <requests>12342</requests>
   <bounces>12</bounces>
   <clicks>10223</clicks>
   <opens>9992</opens>
   <spamreports>5</spamreports>
</stats>

  {% endresponse %}
{% endapiexample %}

<page-anchor el="h2">
Category List
</page-anchor>

Retrieve a list of all the categories used by a subuser.

{% parameters cat %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to pull categories from' %}
 {% parameter list Yes 'The value must be set to <code>true</code>' 'Task to retrieve list of categories' %}
{% endparameters %}


{% apiexample cat POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&list=true %}
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

<page-anchor el="h2">
Category Statistics
</page-anchor>

Retrieve statistics broken down by category. If the category does not exist, it will return an empty result set.

{% info %}
The <code>days</code> argument and the <code>start_date</code>/<code>end_date</code> arguments are exclusive from each other.
{% endinfo %}

{% parameters catstats %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve statistics from' %}
 {% parameter category Yes 'Existing category on the account' 'Category to retrieve statistics from' %}
 {% parameter days No 'Unsigned Integer' 'Number of days in the past to include statistics (includes today)' %}
 {% parameter start_date No 'Date must be in <code>YYY-mm-dd</code> format and be before the <code>end_date</code> parameter' 'Beginning of date range' %}
 {% parameter end_date No 'Date must be in <code>YYY-mm-dd</code> format and be after the <code>start_date</code> parameter' 'End of date range' %}
{% endparameters %}

{% apiexample catstats POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&category=categoryA %}
  {% response json %}
[
  {
    "date": "2009-06-20",
    "category": "categoryA",
    "requests": 12342,
    "bounces": 12,
    "clicks": 10223,
    "opens": 9992,
    "spamreports": 5
  }
]
  {% endresponse %}
  {% response xml %}
<stats>
  <day>
    <date>2009-06-20</date>
    <category>categoryA</category>
    <requests>12342</requests>
    <bounces>12</bounces>
    <clicks>10223</clicks>
    <opens>9992</opens>
    <spamreports>5</spamreports>
  </day>
</stats>
  {% endresponse %}
{% endapiexample %}

<page-anchor el="h2">
Multiple Category Statistics
</page-anchor>

When retrieving statistics for more than one category, use an array category argument.

{% apiexample catstats POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&category[]=categoryA&category[]=categoryB %}
  {% response json %}
[
  {
    "date": "2009-06-20",
    "category": "categoryA",
    "requests": 12342,
    "bounces": 12,
    "clicks": 10223,
    "opens": 9992,
    "spamreports": 5
  },
  {
    "date": "2009-06-21",
    "category": "categoryB",
    "requests": 32342,
    "bounces": 10,
    "clicks": 14323,
    "opens": 10995,
    "spamreports": 7
  }
]
  {% endresponse %}
  {% response xml %}
<stats>
  <day>
    <date>2009-06-20</date>
    <category>categoryA</category>
    <requests>12342</requests>
    <bounces>12</bounces>
    <clicks>10223</clicks>
    <opens>9992</opens>
    <spamreports>5</spamreports>
  </day>
  <day>
      <date>2009-06-21</date>
      <category>categoryB</category>
      <requests>32342</requests>
      <bounces>10</bounces>
      <clicks>14323</clicks>
      <opens>10995</opens>
      <spamreports>7</spamreports>
  </day>
</stats>
  {% endresponse %}
{% endapiexample %}
