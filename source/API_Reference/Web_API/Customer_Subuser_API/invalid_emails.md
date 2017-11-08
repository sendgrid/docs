---
layout: page
weight: 250
title: Subuser Invalid Emails
navigation:
   show: true
---

{% anchor h2 %}
Retrieve Invalid Emails 
{% endanchor %}

{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'Task to retrieve the invalid emails for the specified subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'The subuser retrieving invalid emails from' %}
 {% parameter date No '0 or 1' 'Optional argument to retrieve the timestamps, in ISO-8601 format, Pacific Timezone: <code>YYYY-MM-DD HH:MM:SS</code>' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/apiv2/customer.invalidemails api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=get&date=1 %}
  {% response json %}
[
  {
    "email": "example@example.com",
    "reason": "Mail domain mentioned in email address is unknown",
    "created": "2009-06-01 19:41:39"
  },
  {
    "email": "isaac@hotmail",
    "reason": "Bad Syntax",
    "created": "2009-06-01 19:41:39"
  },
  {
    "email": "example@example.com",
    "reason": "Known bad domain",
    "created": "2009-06-01 19:41:39"
  }
]
  {% endresponse %}
  {% response xml %}
<invalidemails>
   <invalidemail>
      <email>example@example.com</email>
      <reason>Mail domain mentioned in email address is unknown</reason>
      <created>2009-06-10 12:40:30</created>
   </invalidemail>
   <invalidemail>
      <email>isaac@hotmail</email>
      <reason>Bad Syntax</reason>
      <created>2009-06-10 12:40:30</created>
   </invalidemail>
   <invalidemail>
      <email>example@example.com</email>
      <reason>Known bad domain</reason>
      <created>2009-06-10 12:40:30</created>
   </invalidemail>
</invalidemails>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Delete Invalid Emails 
{% endanchor %}
SendGrid drops messages to invalid emails, users can remove invalid emails from their list at any time if they believe the address to now be valid.

{% parameters delete %}
 {% parameter task Yes 'Must be set to <code>delete</code>' 'Task to remove the specified email from the invalid email list for the specified subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'The subuser to retrieve invalid emails from' %}
 {% parameter email Yes 'Must be a string' 'You must specify the invalid emails to remove' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/apiv2/customer.invalidemails api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=delete&email=invalidemail@example.com %}
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
