---
layout: page
weight: 0
title: Blocks
navigation:
  show: true
---

This endpoint allows you to retrieve and delete entries in the Blocks list.

{% anchor h2 %}
get
{% endanchor %}
Retrieve a list of Blocks with addresses and response codes, optionally with dates. {% parameters get %}

  {% parameter date false 'Must be set to 1' 'Retrieve the timestamp of the Block records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS' %}  
  {% parameter days false 'If specified, must be an integer greater than 0' 'Number of days in the past for which to retrieve blocks (includes today)' %}  
  {% parameter start_date false 'Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.' 'The start of the date range for which to retrieve blocks.' %}  
  {% parameter end_date false 'Date must be in YYYY-MM-DD format and be later than the start_date parameter.' 'The end of the date range for which to retrieve blocks.' %}  
  {% parameter limit false 'Must be an integer.' 'Optional field to limit the number of results returned.' %}  
  {% parameter offset false 'Must be an integer.' 'Optional beginning index in the list to retrieve from.' %}
{% endparameters %}

{% apiexample get GET https://api.sendgrid.com/api/blocks.get api_user=your_sendgrid_username&api_key=your_sendgrid_password&date=1 %}
  {% response json %}
[
  {
    "status": "4.0.0",
    "created": "2012-09-02 00:12:12",
    "reason": "550 Access denied...04d52d35b93501d500a9bca895ddad5cddd1a9f8486c89ace8c5e959398198cd49cd58288c9d11313975284d852811... (throttled)",
    "email": "example@example.com"
  },
  {
    "status": "4.0.0",
    "created": "2012-09-02 00:21:29",
    "reason": "Connection timed out",
    "email": "example@example.com"
  },
  {
    "status": "4.0.0",
    "created": "2012-09-02 00:25:33",
    "reason": "Unable to resolve MX record for exampledomain.com: nxdomain",
    "email": "example@example.com"
  }
]
  {% endresponse %}
  {% response xml %}
<blocks>
   <block>
      <email>emaieexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaieexampexample@example.com</reason>
      <created>2009-06-10 12:40:30</created>
   </block>
   <block>
      <email>emaileexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaileexampexample@example.com</reason>
      <email>example@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: example@example.com</reason>
      <created>2009-06-10 12:40:30</created>
   </block>
   <block>
      <email>example@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: example@example.com</reason>
      <created>2009-08-01 10:16:30</created>
   </block>
</blocks>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
delete
{% endanchor %}
Delete an address from the Block list. {% parameters delete %}

  {% parameter email true 'Must be a valid user account email.' 'Blocked email address to remove.' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/blocks.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=emailToDelete@domain.com %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <count>4</count>
   @nodes
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
count
{% endanchor %}
{% parameters count %}

  {% parameter start_date false 'Date must be in YYYY-MM-DD format and be before the end_date parameter.' 'Optional date to start counting from.' %}  
  {% parameter end_date false 'Date must be in YYYY-MM-DD format and be after the start_date parameter.' 'Optional date to start counting from.' %}  
  {% parameter type false 'hard or soft' 'The type of bounce to count.' %}
{% endparameters %}

{% apiexample count GET https://api.sendgrid.com/api/blocks.count api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "count": "4"
}
  {% endresponse %}
  {% response xml %}
<result>
   <count>4</count>
</result>

  {% endresponse %}
{% endapiexample %}
