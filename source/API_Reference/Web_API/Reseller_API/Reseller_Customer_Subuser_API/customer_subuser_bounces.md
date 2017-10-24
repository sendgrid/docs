---
layout: page
weight: 0
title: Customer Subuser Bounces
navigation:
   show: true
---

{% anchor h2 %}
Retrieve Bounces 
{% endanchor %}


{% parameters get %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser we are retrieving bounces from' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>get</em>' 'This will allow you to retrieve the bounces for the specified customer subuser' %}
 {% parameter 'date' 'No' 'Must be set to 1' 'Retrieves the timestamps, it will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>bounces</em>' 'Allows you to access bounces functionality' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=bounces&user=exampleexampexample@example.com&task=get&date=1 %}
  {% response json %}
[
  {
    "email": "emaieexampexample@example.com",
    "status": "5.1.1",
    "reason": "host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaieexampexample@example.com",
    "created": "2009-06-01 19:41:39"
  },
  {
    "email": "emaileexampexample@example.com",
    "status": "5.1.1",
    "reason": "host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaileexampexample@example.com",
    "created": "2009-06-01 19:41:39"
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
 {% parameter 'task' 'Yes' 'Must be set to <em>delete</em>' 'This will allow you to delete the bounces for the specified user' %}
 {% parameter 'email' 'No' 'Bounce email address you want to delete' 'You must specify the bounced email message to remove' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>bounces</em>' 'Allows you to access bounces functionality' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=bounces&user=exampleexampexample@example.com&task=delete&email=bounceexampexample@example.com %}
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
