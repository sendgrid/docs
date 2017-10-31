---
layout: page
weight: 150
title: Subuser Unsubscribes
navigation:
   show: true
---

{% anchor h2 %}
Retrieve Unsubscribes
{% endanchor %}

{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'Task to retrieve unsubscribes for subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve unsubscribes for' %}
 {% parameter date No '0 or 1' 'Optional argument to retrieve the timestamps, in ISO-8601 format, Pacific Timezone: <code>YYYY-MM-DD HH:MM:SS</code>' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/api/user.unsubscribes api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=get&date=1 %}
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
SendGrid suppresses messages to unsubscribed addresses, but entries can be removed from the suppression list at any time if redelivery to an unsubscribed address is desired. Take care that the address should be redelivered to.

{% parameters delete %}
 {% parameter task Yes 'Must be set to <code>delete</code>' 'Task to remove unsubscribed address from subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to remove unsubscribed address from' %}
 {% parameter email Yes 'Address exists on the list' 'Address to remove from the Unsubscribe suppression list' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/user.unsubscribes api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=delete&email=unsubscribe@sample.com %}
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
Manually add address to the Unsubscribe suppression list, to prevent delivery to the address.

{% parameters add %}
 {% parameter task Yes 'Must be set to <code>add</code>' 'Task to add address to subuser Unsubscribe list' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to add Unsubscribed address' %}
 {% parameter email Yes 'Valid email address' 'Address to add to the Unsubscribe suppression list' %}
{% endparameters %}


{% apiexample add POST https://api.sendgrid.com/api/user.unsubscribes api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=add&email=unsubscribe@sample.com %}
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
