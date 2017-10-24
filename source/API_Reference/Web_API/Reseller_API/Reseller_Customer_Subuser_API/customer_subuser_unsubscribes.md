---
layout: page
weight: 0
title: Customer Subuser Unsubscribes
navigation:
   show: true
---

{% anchor h2 %}
Retrieve Unsubscribes 
{% endanchor %}

Note that you can use *either* the days parameter *or* the start_date and end_date parameter.


{% parameters get %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser we are retrieving unsubscribes from' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>get</em>' 'This will allow you to retrieve the unsubscribes for the specified customer subuser' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>unsubscribes</em>' 'Allows you to access unsubscribe functionality' %}
 {% parameter 'date' 'No' 'Must be set to 1' 'Retrieves the timestamps, it will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=example@example.com&task=get&date=1 %}
  {% response json %}
[
  {
    "email": "emaieexampexample@example.com",
    "created": "2009-06-01 19:41:39"
  },
  {
    "email": "emaileexampexample@example.com",
    "created": "2009-06-01 19:41:39"
  }
]
  {% endresponse %}
  {% response xml %}
<unsubscribes>
   <unsubscribe>
      <email>emaieexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </unsubscribe>
   <unsubscribe>
      <email>emaileexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </unsubscribe>
</unsubscribes>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Delete Unsubscribes 
{% endanchor %}

Since SendGrid does not deliver to unsubscribe addresses, users can remove unsubscribes from their list at any time if re-delivery to an unsubscribed address is desired.


{% parameters delete %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser we are retrieving unsubscribes from' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>delete</em>' 'This will allow you to delete an unsubscribe record for the specified customer subuser' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>unsubscribes</em>' 'Allows you to access unsubscribe functionality' %}
 {% parameter 'email' 'No' 'Must be an unsubscribe record' 'You must specify the unsubscribe record to remove' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=example@example.com&task=delete&email=unsubscribe@sample.com %}
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

* * * * *

{% anchor h2 %}
Add Unsubscribes 
{% endanchor %}

Add unsubscribe email records to their account if they need to stop sending email messages to a specific recipient.


{% parameters add %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser we are retrieving unsubscribes from' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>add</em>' 'This will allow you to add an unsubscribe record for the specified customer subuser' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>unsubscribes</em>' 'Allows you to access unsubscribe functionality' %}
 {% parameter 'email' 'No' 'Must be an unsubscribe record' 'You must specify the unsubscribe record to add' %}
{% endparameters %}


{% apiexample add POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=example@example.com&task=add&email=unsubscribe@sample.com %}
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
