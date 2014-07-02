---
layout: page
weight: 0
title: Customer Subuser Timezone
navigation:
   show: true
---

{% anchor h2 %}
List Timezones 
{% endanchor %}

This will return a list of all available timezones.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>timezone</em>
         </td>
         <td>Allows you to access timezone functionality</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>list</em>
         </td>
         <td>This will allow you to retrieve the timezones</td>
      </tr>
   </tbody>
</table>

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
<?xml version="1.0" encoding="ISO-8859-1"?>

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

{% anchor h2 %}
Get Timezone 
{% endanchor %}

This API call will return the timezone currently set for your customer subuser.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser for which we are retrieving timezone</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>timezone</em>
         </td>
         <td>Allows you to access timezone functionality</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>get</em>
         </td>
         <td>This will allow you to retrieve the timezone for your customer subuser</td>
      </tr>
   </tbody>
</table>

{% apiexample get GET https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=timezone&task=get&user=customer_subuser@example.com %}
  {% response json %}
{
  "name": "Central Time, US & Canada",
  "offset": 21600,
  "timezone": "America\\/Chicago",
  "display": "GMT-06:00"
}
  {% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<timezone>
   <name>Central Time, US Canada</name>
   <offset>21600</offset>
   <timezone>America/Chicago</timezone>
   <display>GMT-06:00</display>
</timezone>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Edit Timezone 
{% endanchor %}

This API call will allow you to set timezone for your customer subuser

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser for which we are edit the timezone</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>timezone</em>
         </td>
         <td>Allows you to access timezone functionality</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>set</em>
         </td>
         <td>This will allow you to set the timezone for your customer subuser</td>
      </tr>
      <tr>
         <td>timezone</td>
         <td>Yes</td>
         <td>Must be an timezone. Ex: America/Los_Angeles</td>
         <td>
            This will be the new timezone from
            <a href="#-List-Timezones">List Timezones</a>
         </td>
      </tr>
   </tbody>
</table>

{% apiexample edit POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=timezone&task=set&user=customer_subuser@example.com&timezone=America/Los_Angeles %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
