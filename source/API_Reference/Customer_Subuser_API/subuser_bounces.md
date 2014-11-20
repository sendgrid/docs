---
layout: page
weight: 0
title: Subuser Bounces
navigation:
   show: true
---

{% anchor h2 %}
Retrieve Bounces 
{% endanchor %}
Note that you can use *either* the days parameter *or* the start_date and end_date parameter.

{% parameters get %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser we are retrieving bounces from' %}
 {% parameter 'task' 'Yes' 'Must be set to *get*' 'This will allow you to retrieve the bounces for the specified subuser' %}
 {% parameter 'date' 'No' 'Must be set to 1' 'Retrieves the timestamps, it will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/api/user.bounces api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=get&date= %}
  {% response json %}
[
  {
    "email": "email1@domain.com",
    "status": "5.1.1",
    "reason": "host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email1@domain.com",
    "created": "2009-06-01 19:41:39"
  },
  {
    "email": "email2@domain2.com",
    "status": "5.1.1",
    "reason": "host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email2@domain2.com",
    "created": "2009-06-01 19:41:39"
  }
]
  {% endresponse %}
  {% response xml %}
<bounces>
   <bounce>
      <email>email1@domain.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email1@domain.com</reason>
      <created>2009-06-10 12:40:30</created>
   </bounce>
   <bounce>
      <email>email2@domain2.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: email2@domain2.com</reason>
      <created>2009-06-10 12:40:30</created>
   </bounce>
</bounces>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Delete Bounces 
{% endanchor %}
Since SendGrid does not re-deliver to bounced addresses, users can remove bounces from their list at any time if redelivery to a bounced address is desired.

{% parameters delete %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser we are retrieving bounces from' %}
 {% parameter 'task' 'Yes' 'Must be set to *delete*' 'This will allow you to delete the bounces for the specified user' %}
 {% parameter 'email' 'No' 'Bounce email address you want to delete' 'You must specify the bounced email message to remove' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/api/user.bounces api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=delete&email=bounce@example.com %}
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
