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
Note that you can use either the <code>days</code> parameter or the <code>start_date</code>|<code>end_date</code> parameter.

{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'This will allow you to retrieve the bounces for the specified subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve bounces of' %}
 {% parameter date No '0 or 1' 'Optional argument to retrieve the timestamps, in ISO-8601 format, Pacific Timezone: <code>YYYY-MM-DD HH:MM:SS</code>' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/api/user.bounces api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=get&date=1 %}
  {% response json %}
[
  {
    "email": "email1@domain.com",
    "status": "5.1.1",
    "reason": "550 5.1.1 unknown or illegal user: email1@domain.com",
    "created": "2014-12-06 08:34:48"
  },
  {
    "email": "email2@domain2.com",
    "status": "5.1.1",
    "reason": "550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at http:\/\/support.google.com\/mail\/bin\/answer.py?answer=6596 qy3si50924603pab.12 - gsmtp ",
    "created": "2014-12-06 08:36:34"
  }
]
  {% endresponse %}
  {% response xml %}
<bounces>
   <bounce>
      <email>email1@domain.com</email>
      <status>5.1.1</status>
      <reason>550 5.1.1 unknown or illegal user: email1@domain.com</reason>
      <created>2014-12-06 08:34:48</created>
   </bounce>
   <bounce>
      <email>email2@domain2.com</email>
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
Since SendGrid suppresses messages to bounced addresses, users can remove bounces from their suppression list at any time if redelivery to a bounced address is desired.

{% parameters delete %}
 {% parameter task Yes 'Must be set to <code>delete</code>' 'This will allow you to delete the bounces for the specified user' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to retrieve bounces of' %}
 {% parameter email Yes 'Address existing on the list' 'Address to remove from the Bounce suppression list' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/user.bounces api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=delete&email=bounce@example.com %}
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
