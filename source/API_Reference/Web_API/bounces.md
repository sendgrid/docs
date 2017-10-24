---
layout: page
weight: 0
title: Bounces
navigation:
  show: true
---

This endpoint allows you to retrieve and delete entries in the Bounces list.

{% anchor h2 %}
get 
{% endanchor %}

Retrieve a list of bounces with addresses and response codes, optionally with dates.

{% parameters get %} 
  
  {% parameter date No 'Must be set to 1.' 'Retrieve the timestamp of the bounce records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS.' %}  
  {% parameter days No 'If specified, must be an integer greater than 0.' 'Number of days in the past for which to retrieve bounces (includes today).' %}  
  {% parameter start_date No 'Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.' 'The start of the date range for which to retrieve bounces.' %}  
  {% parameter end_date No 'Date must be in YYYY-MM-DD format and be later than the start_date parameter.' 'The end of the date range for which to retrieve bounces.' %}  
  {% parameter limit No 'Some integer.' 'Optional field to limit the number of results returned.' %}  
  {% parameter offset No 'Some integer.' 'Optional beginning point in the list to retrieve from.' %}  
  {% parameter type No 'Hard or soft.' 'Choose the type of bounce to search for.' %}  
  {% parameter email No 'Email address eg testing@example.com.' 'Optional email addresses to search for.' %}
{% endparameters %}

{% apiexample get GET https://api.sendgrid.com/api/bounces.get api_user=your_sendgrid_username&api_key=your_sendgrid_password&date=1 %}
  {% response json %}
[
  {
    "status": "4.0.0",
    "created": "2011-09-16 22:02:19",
    "reason": "Unable to resolve MX host sendgrid.ne",
    "email": "example@example.com"
  },
  {
    "status": "4.0.0",
    "created": "2011-09-19 17:47:15",
    "reason": "Connection timed out",
    "email": "example@example.com"
  },
  {
    "status": "5.1.1",
    "created": "2011-10-17 11:07:10",
    "reason": "550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at http://mail.google.com/support/bin/answer.py?answer=6596 z10si838244anz.171 ",
    "email": "example@example.com"
  },
  {
    "status": "5.7.1",
    "created": "2011-10-26 23:06:22",
    "reason": "550 5.7.1 <example@example.com>... Relaying denied. Proper authentication required. ",
    "email": "example@example.com"
  },
  {
    "status": "5.7.1",
    "created": "2011-12-01 01:45:55",
    "reason": "554 5.7.1 <example@example.com>: Relay access denied ",
    "email": "example@example.com"
  },
  {
    "status": "550",
    "created": "2012-06-01 14:10:15",
    "reason": "550 support.sendgrid.net [74.63.202.100] is currently not permitted to relay through this server. Perhaps you have not logged into the pop/imap server in the last 30 minutes or do not have SMTP Authentication turned on in your email client. ",
    "email": "example@example.com"
  }
]
  {% endresponse %}
  {% response xml %}
<bounces>
   <bounce>
      <email>emaieexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaieexampexample@example.com</reason>
      <created>2009-06-10 12:40:30</created>
   </bounce>
   <bounce>
      <email>emaileexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaileexampexample@example.com</reason>
      <created>2009-08-01 10:16:30</created>
   </bounce>
</bounces>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
delete 
{% endanchor %}

Delete an address from the Bounce list.

{% parameters delete %} 
  
  {% parameter start_date No 'Date must be in YYYY-mm-dd format and be before the end_date parameter.' 'Optional date to start deleting from.' %}  
  {% parameter end_date No 'Date must be in YYYY-mm-dd format and be after the start_date parameter.' 'Optional date to end deleting from.' %}  
  {% parameter type No 'Hard or soft.' 'Choose the type of bounce to be removed.' %}  
  {% parameter email No 'Must be a valid user account email.' 'Email bounce address to remove.' %}  
  {% parameter delete_all No 'Must be set to 1.' 'This will delete the bounce list and will not be retrievable.' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/bounces.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=emailToDelete@domain.com %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result> success @nodes </result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Count 
{% endanchor %}
{% parameters count %} 
  
  {% parameter start_date No 'Date must be in YYYY-mm-dd format and be before the end_date parameter.' 'Optional date to start counting from.' %}  
  {% parameter end_date No 'Date must be in YYYY-mm-dd format and be after the start_date parameter.' 'Optional date to end counting from.' %}  
  {% parameter type No 'Hard or soft.' 'Choose the type of bounce to search for.' %}
{% endparameters %}

{% apiexample count GET https://api.sendgrid.com/api/bounces.count api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
