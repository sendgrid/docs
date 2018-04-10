---
layout: page
weight: 300
title: Subuser Bounces
navigation:
   show: true
---

{% anchor h2 %}
Retrieve Bounces
{% endanchor %}

{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'Task to retrieve bounces' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve bounces of' %}
 {% parameter date No '0 or 1' 'Optional argument to retrieve the timestamps, in ISO-8601 format, Pacific Timezone: <code>YYYY-MM-DD HH:MM:SS</code>' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/api/user.bounces api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=get&date=1 %}
  {% response json %}
[
  {
    "email": "emaieexampexample@example.com",
    "status": "5.1.1",
    "reason": "550 5.1.1 unknown or illegal user: emaieexampexample@example.com",
    "created": "2014-12-06 08:34:48"
  },
  {
    "email": "emaileexampexample@example.com",
    "status": "5.1.1",
    "reason": "550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at http:\/\/support.google.com\/mail\/bin\/answer.py?answer=6596 qy3si50924603pab.12 - gsmtp ",
    "created": "2014-12-06 08:36:34"
  }
]
  {% endresponse %}
  {% response xml %}
<bounces>
   <bounce>
      <email>emaieexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>550 5.1.1 unknown or illegal user: emaieexampexample@example.com</reason>
      <created>2014-12-06 08:34:48</created>
   </bounce>
   <bounce>
      <email>emaileexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at http:\/\/support.google.com\/mail\/bin\/answer.py?answer=6596 qy3si50924603pab.12 - gsmtp </reason>
      <created>2014-12-06 08:36:34</created>
   </bounce>
</bounces>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Delete Bounces
{% endanchor %}
SendGrid suppresses messages to bounced addresses, but entries can be removed from the suppression list at any time if redelivery to a bounced address is desired. Take care that the address should be redelivered to.

{% parameters delete %}
 {% parameter task Yes 'Must be set to <code>delete</code>' 'Task to remove address from bounce suppression list' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve bounces of' %}
 {% parameter email Yes 'Address exists on the list' 'Address to remove from the Bounce suppression list' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/user.bounces api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=delete&email=bounceexampexample@example.com %}
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
