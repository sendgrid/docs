---
layout: page
weight: 0
title: Spam Reports
navigation:
  show: true
---

Retrieve and delete entries in the Spam Reports list.

{% anchor h2 %}
get 
{% endanchor %}
{% parameters get %} 
  
  {% parameter date No 'Must be set to 1' 'Retrieve the timestamp of the spam report records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS' %}  
  {% parameter days No 'If specified, must be an integer greater than 0' 'Number of days in the past for which to retrieve spam reports (includes today)' %}  
  {% parameter start_date No 'Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.' 'The start of the date range for which to retrieve spam reports.' %}  
  {% parameter end_date No 'Date must be in YYYY-MM-DD format and be later than the start_date parameter.' 'The end of the date range for which to retrieve spam reports.' %}  
  {% parameter limit No 'Some integer' 'Optional field to limit the number of results returned.' %}  
  {% parameter offset No 'Some integer' 'Optional beginning point in the list to retrieve from.' %}  
  {% parameter email No 'Email address eg testing@example.com' 'Optional email addresses to search for.' %}
{% endparameters %}

{% apiexample get GET https://api.sendgrid.com/api/spamreports.get api_user=your_sendgrid_username&api_key=your_sendgrid_password&date=1 %}
  {% response json %}
[
  {
    "ip": "174.36.80.219",
    "email": "example@aol.com",
    "created": "2009-12-06 15:45:08"
  },
  {
    "ip": "74.63.202.105",
    "email": "example@example.com",
    "created": "2009-12-08 07:43:01"
  }
]
  {% endresponse %}
  {% response xml %}
<spamreports>
   <spamreport>
      <ip>174.36.80.219</ip>
      <email>example@aol.com</email>
      <created>2009-12-06 15:45:08</created>
   </spamreport>
   <spamreport>
      <ip>74.63.202.105</ip>
      <email>example@example.com</email>
      <created>2009-12-08 07:43:01</created>
   </spamreport>
</spamreports>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
count 
{% endanchor %}

Retrieve the count of Spam Reports.

{% parameters count %} 
  
  {% parameter start_date No 'Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.' 'The start of the date range for which to retrieve spam reports.' %}  
  {% parameter end_date No 'Date must be in YYYY-MM-DD format and be later than the start_date parameter.' 'The end of the date range for which to retrieve spam reports.' %}
{% endparameters %}

{% apiexample count GET https://api.sendgrid.com/api/spamreports.count api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

{% anchor h2 %}
delete 
{% endanchor %}

Delete an address from the Spam Reports list.

{% parameters delete %} 
  
  {% parameter start_date No 'Date must be in YYYY-mm-dd format and be before the end_date parameter.' 'Optional date to start deleting from.' %}  
  {% parameter end_date No 'Date must be in YYYY-mm-dd format and be after the start_date parameter.' 'Optional date to end deleting from.' %}  
  {% parameter email No 'Must be a valid user account email' 'Email spam reports address to remove.' %}  
  {% parameter delete_all No 'value=1' 'This will delete the bounce list and will not be retrievable.' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/spamreports.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=emailToDelete@domain.com %}
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
