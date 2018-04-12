---
layout: page
weight: 0
title: Customer Spam Reports
navigation:
   show: true
---

<page-anchor el="h2">
Retrieve Spam Reports
</page-anchor>


{% parameters get %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer we are retrieving spam reports from' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>get</em>' 'This will allow you to retrieve the spam reports for the specified user' %}
 {% parameter 'date' 'No' 'Must be set to 1' 'Retrieves the timestamps, it will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>spamreports</em>' 'Allows you to access spam reports functionality' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=spamreports&user=eexampexample@example.com&task=get&date=1 %}
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
<spamreports>
   <spamreport>
      <email>emaieexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </spamreport>
   <spamreport>
      <email>emaileexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </spamreport>
</spamreports>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Delete Spam Reports
</page-anchor>

Since SendGrid does not deliver to spam reported addresses, users can remove spam reports from their list at any time if re-delivery to a spam reported address is desired.


{% parameters delete %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer we are retrieving spam reports from' %}
 {% parameter 'task' 'Yes' 'Must be set to <em>delete</em>' 'This will allow you to delete a spam report for the specified user' %}
 {% parameter 'email' 'Yes' 'Must be a spam reports' 'You must specify the spam reports to remove' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>spamreports</em>' 'Allows you to access spam reports functionality' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=spamreports&user=eexampexample@example.com&task=delete&email=spamreport@domain.com %}
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
