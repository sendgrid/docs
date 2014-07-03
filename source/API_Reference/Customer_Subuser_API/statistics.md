---
layout: page
weight: 0
title: Statistics
navigation:
   show: true
---

Subuser Statistics

{% anchor h2 %}
Retrieve Subuser Statistics 
{% endanchor %}

Note that you can use *either* the days parameter *or* the start_date and end_date parameter.


{% parameters stats %}
 {% parameter 'Parameter' 'Required' 'Requirements' 'Description' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser we are retrieving statistics from' %}
 {% parameter 'days' 'No' 'Must be an integer greater than 0' 'Number of days in the past to include statistics (includes today)' %}
 {% parameter 'start_date' 'No' 'Date must be in YYYY-mm-dd format and be before the end_date parameter' 'The start date to look up statistics' %}
 {% parameter 'end_date' 'No' 'Date must be in YYYY-mm-dd format and be after the start_date parameter' 'The end date to look up statistics' %}
{% endparameters %}


{% apiexample stats POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com %}
  {% response json %}
[
  {
    "date": "2009-06-20",
    "requests": 12342,
    "bounces": 12,
    "clicks": 10223,
    "opens": 9992,
    "spamreports": 5
  },
  {
    "date": "2009-06-21",
    "requests": 32342,
    "bounces": 10,
    "clicks": 14323,
    "opens": 10995,
    "spamreports": 7
  },
  {
    "date": "2009-06-22",
    "requests": 52342,
    "bounces": 11,
    "clicks": 19223,
    "opens": 12992,
    "spamreports": 2
  }
]
  {% endresponse %}
  {% response xml %}
<stats>
   <day>
      <date>2009-06-20</date>
      <requests>12342</requests>
      <bounces>12</bounces>
      <clicks>10223</clicks>
      <opens>9992</opens>
      <spamreports>5</spamreports>
   </day>
   <day>
      <date>2009-06-21</date>
      <requests>32342</requests>
      <bounces>10</bounces>
      <clicks>14323</clicks>
      <opens>10995</opens>
      <spamreports>7</spamreports>
   </day>
   <day>
      <date>2009-06-22</date>
      <requests>52342</requests>
      <bounces>11</bounces>
      <clicks>19223</clicks>
      <opens>12992</opens>
      <spamreports>2</spamreports>
   </day>
</stats>

  {% endresponse %}
{% endapiexample %}

{% anchor h2 %}
Retrieve Aggregates 
{% endanchor %}

Retrieve all-time totals for your subuser


{% parameters agg %}
 {% parameter 'Parameter' 'Required' 'Requirements' 'Description' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser we are retrieving statistics from' %}
 {% parameter 'aggregate' 'Yes' 'Must be set to 1' 'This is used to let us know that you are interested in all time totals' %}
{% endparameters %}


{% apiexample agg POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&aggregate=1 %}
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

{% anchor h2 %}
Category List 
{% endanchor %}

Retrieve a list of all the categories used in your subusers account.


{% parameters cat %}
 {% parameter 'Parameter' 'Required' 'Requirements' 'Description' %}
 {% parameter 'list' 'Yes' 'The value must be set to <em>true</em>' 'This will allow you to retrieve a list of all categories used in your subusers account.' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser we are retrieving category statistics from' %}
{% endparameters %}


{% apiexample cat POST https://api.sendgrid.com/apiv2/customer.stats api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&list=true %}
  {% response json %}
[
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

{% anchor h2 %}
Category Statistics 
{% endanchor %}

Retrieve statistics broken down by category. If the category does not exist, there will be an empty result set. Note that you can use  *either* the days parameter *or* the start_date and end_date parameter.



{% xmljsontabs catstats %}

<div class="tab-content">
<div class="tab-pane" id="catstats-xml">
### Call

{% codeblock %}
https://api.sendgrid.com/apiv2/customer.stats.xml?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=example@example.com&amp;start_date=2009-06-20&amp;end_date=2009-06-22&amp;category=categoryA
{% endcodeblock %}
    <h4>Call - Using an array of categories</h4>
    {% codeblock %}
https://api.sendgrid.com/apiv2/customer.stats.xml?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=example@example.com&amp;start_date=2009-06-20&amp;end_date=2009-06-22&amp;category[]=categoryA&amp;category[]=categoryB
{% endcodeblock %}

### Response

{% codeblock lang:xml %}
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

{% endcodeblock %}

</div>
<div class="tab-pane active" id="catstats-json">
### Call

{% codeblock %}
https://api.sendgrid.com/apiv2/customer.stats.json?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=example@example.com&amp;start_date=2009-06-20&amp;end_date=2009-06-22&amp;category=categoryA
{% endcodeblock %}
    <h4>Call - Using an array of categories</h4>
    {% codeblock %}
https://api.sendgrid.com/apiv2/customer.stats.json?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=example@example.com&amp;start_date=2009-06-20&amp;end_date=2009-06-22&amp;category[]=categoryA&amp;category[]=categoryB
{% endcodeblock %}

### Response

{% codeblock lang:json %}
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
{% endcodeblock %}

</div>
