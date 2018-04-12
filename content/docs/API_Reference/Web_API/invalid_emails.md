---
layout: page
weight: 0
title: Invalid Emails
navigation:
  show: true
---

This endpoint allows you to retrieve and delete entries in the Invalid Emails list.

<page-anchor el="h2">
get
</page-anchor>

Retrieve a list of invalid emails with addresses and response codes, optionally with dates.

{% parameters get %}

  {% parameter date No 'Must be set to 1' 'Retrieve the timestamp of the invalid email records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS' %}
  {% parameter days No 'If specified, must be an integer greater than 0' 'Number of days in the past for which to retrieve invalid emails (includes today)' %}
  {% parameter start_date No 'Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.' 'The start of the date range for which to retrieve invalid emails.' %}
  {% parameter end_date No 'Date must be in YYYY-MM-DD format and be later than the start_date parameter.' 'The end of the date range for which to retrieve invalid emails.' %}
  {% parameter limit No 'Some integer' 'Optional field to limit the number of results returned.' %}
  {% parameter offset No 'Some integer' 'Optional beginning point in the list to retrieve from.' %}
  {% parameter email No 'Email address eg testing@example.com' 'Optional email addresses to search for.' %}
{% endparameters %}

{% apiexample get GET https://api.sendgrid.com/api/invalidemails.get api_user=your_sendgrid_username&api_key=your_sendgrid_password&date=1 %}
  {% response json %}
[
  {
    "reason": "Known bad domain",
    "created": "2011-06-06 16:11:57",
    "email": "test@example.com"
  },
  {
    "reason": "Invalid address",
    "created": "2012-08-17 11:04:38",
    "email": "brandon"
  }
]
  {% endresponse %}
  {% response xml %}
<invalidemails>
   <invalidemail>
      <reason>Known bad domain</reason>
      <created>2011-06-06 16:11:57</created>
      <email>test@example.com</email>
   </invalidemail>
   <invalidemail>
      <reason>Invalid address</reason>
      <created>2012-08-17 11:04:38</created>
      <email>brandon</email>
   </invalidemail>
</invalidemails>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
count
</page-anchor>

Retrieve the count of invalid emails.

{% parameters count %}

  {% parameter start_date No 'Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.' 'The start of the date range for which to retrieve invalid emails.' %}
  {% parameter end_date No 'Date must be in YYYY-MM-DD format and be later than the start_date parameter.' 'The end of the date range for which to retrieve invalid emails.' %}
{% endparameters %}

{% apiexample count GET https://api.sendgrid.com/api/invalidemails.count api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "count": 2
}
  {% endresponse %}
  {% response xml %}
<result>
   <count>2</count>
   <result> </result>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
delete
</page-anchor>

Delete an address from the Invalid Email list.

{% parameters delete %}

  {% parameter email Yes 'Must be a valid user account email' 'Email Invalid Email address to remove' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/invalidemails.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=emailToDelete@domain.com %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   success
   <result> </result>
</result>

  {% endresponse %}
{% endapiexample %}
