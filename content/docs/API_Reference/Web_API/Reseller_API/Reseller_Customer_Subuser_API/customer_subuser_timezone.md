---
layout: page
weight: 0
title: Customer Subuser Timezone
navigation:
   show: true
---

<page-anchor el="h2">
List Timezones
</page-anchor>

This will return a list of all available timezones.


{% parameters list %}
 {% parameter 'method' 'Yes' 'Must be set to <em>timezone</em>' 'Allows you to access timezone functionality' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>list</em>' 'This will allow you to retrieve the timezones' %}
{% endparameters %}


{% apiexample list GET https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=timezone&task=list %}
  {% response json %}
[
  {
    "display": "GMT+02:00",
    "name": "Athens, Bucharest",
    "offset": -7200,
    "timezone": "Europe/Bucharest"
  },
  {
    "display": "GMT-00:00",
    "name": "Dublin, Lisabon, London, Edinburgh",
    "offset": 0,
    "timezone": "Europe/London"
  },
  {
    "display": "GMT-08:00",
    "name": "Pacific Time, US & Canada",
    "offset": 28800,
    "timezone": "America/Los_Angeles"
  }
]
  {% endresponse %}
  {% response xml %}
<timezones>
   <timezone>
      <display>GMT+02:00</display>
      <name>Athens, Bucharest</name>
      <offset>-7200</offset>
      <timezone>Europe/Bucharest</timezone>
   </timezone>
   <timezone>
      <display>GMT-00:00</display>
      <name>Dublin, Lisabon, London, Edinburgh</name>
      <offset>0</offset>
      <timezone>Europe/London</timezone>
   </timezone>
   <timezone>
      <display>GMT-08:00</display>
      <name>Pacific Time, US  Canada</name>
      <offset>28800</offset>
      <timezone>America/Los_Angeles</timezone>
   </timezone>
</timezones>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Get Timezone
</page-anchor>

This API call will return the timezone currently set for your customer subuser.


{% parameters get %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser for which we are retrieving timezone' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>timezone</em>' 'Allows you to access timezone functionality' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>get</em>' 'This will allow you to retrieve the timezone for your customer subuser' %}
{% endparameters %}


{% apiexample get GET https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=timezone&task=get&user=customer_subuseexampexample@example.com %}
  {% response json %}
{
  "name": "Central Time, US & Canada",
  "offset": 21600,
  "timezone": "America\\/Chicago",
  "display": "GMT-06:00"
}
  {% endresponse %}
  {% response xml %}
<timezone>
   <name>Central Time, US Canada</name>
   <offset>21600</offset>
   <timezone>America/Chicago</timezone>
   <display>GMT-06:00</display>
</timezone>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Edit Timezone
</page-anchor>

This API call will allow you to set the timezone for your customer subuser


{% parameters edit %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser for which we are edit the timezone' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>timezone</em>' 'Allows you to access timezone functionality' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>set</em>' 'This will allow you to set the timezone for your customer subuser' %}
 {% parameter 'timezone' 'Yes' 'Must be an timezone. Ex: America/Los_Angeles' 'This will be the new timezone from <a href="#-List-Timezones">List Timezones</a>' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=timezone&task=set&user=customer_subuseexampexample@example.com&timezone=America/Los_Angeles %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
