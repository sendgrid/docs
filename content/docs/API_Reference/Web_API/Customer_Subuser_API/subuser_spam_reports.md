---
layout: page
weight: 200
title: Subuser Spam Reports
navigation:
   show: true
---



<page-anchor el="h2">
Retrieve Spam Reports
</page-anchor>

{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'Task to retrieve spam reports' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve the spam reports of' %}
 {% parameter date No '0 or 1' 'Optional argument to retrieve the timestamps, in ISO-8601 format, Pacific Timezone: <code>YYYY-MM-DD HH:MM:SS</code>' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/api/user.spamreports api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=get&date=1 %}
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
SendGrid suppresses messages to spam-reporting addresses, but entries can be removed from the suppression list at any time if redelivery to a spam-reporting address is desired. Take care that the address should be redelivered to.

{% parameters delete %}
 {% parameter task Yes 'Must be set to <code>delete</code>' 'Task to remove address from spam report suppression list' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to remove spam reporting address from' %}
 {% parameter email Yes 'Address exists on the list' 'Address to remove from the Spam Report suppression list' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/user.spamreports api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=delete&email=spamreport@domain.com %}
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
