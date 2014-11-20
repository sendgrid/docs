---
layout: page
weight: 0
title: Account Limits
navigation:
   show: true
---

<span>Throttle your subuser when you need them to send only a specific amount of emails at a specified interval.</span>

{% anchor h2 %}
Retrieve 
{% endanchor %}

Retrieve account limits for a specific subuser. If the API call response is empty that means the subuser has the limits removed.


{% parameters limit %}
 {% parameter 'task' 'Yes' 'Must be set to *retrieve*' 'Retrieve account limits' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser who will have their account limits retrieved' %}
{% endparameters %}


{% apiexample limit POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=retrieve %}
  {% response json %}
{
  "credit": "0",
  "credit_remain": "2000",
  "last_reset": "2011-02-21"
}
  {% endresponse %}
  {% response xml %}
<credits>
   <credit>0</credit>
   <credit_remain>2000</credit_remain>
   <last_reset>2011-02-21</last_reset>
</credits>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
No Limit 
{% endanchor %}

Remove the limit for a subuser.


{% parameters list %}
 {% parameter 'task' 'Yes' 'Must be set to *none*' 'Remove account limits' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser who will have their account limits removed' %}
{% endparameters %}


{% apiexample list POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=none %}
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
Recurring Reset 
{% endanchor %}
A recurring reset will allow you to periodically reset a subusers credits to a number you specify. This can be either daily, weekly or monthly.


{% parameters reset %}
 {% parameter 'task' 'Yes' 'Must be set to*recurring*' 'The task required to set the recurring reset' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser you will be applying a recurring reset to' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The number of credits the subuser will be reset to' %}
 {% parameter 'period' 'Yes' 'Must be either daily, weekly, or monthly' 'How often you want SendGrid to reset your subusers credits' %}
 {% parameter 'startdate' 'No' 'Date must be in YYYY-mm-dd format' 'The date you want to start resetting the subusers credits' %}
 {% parameter 'enddate' 'No' 'Date must be in YYYY-mm-dd format' 'The date you want to stop resetting the subusers credits' %}
 {% parameter 'initial_credits' 'No' 'Must be an integer greater than 0' 'The number of credits you initially want the account reset to. If this is not set, the credits will be reset using the credits parameter' %}
{% endparameters %}


{% apiexample reset POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=recurring&credits=200&period=daily %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<message>
   <result>success@nodes</result>
</message>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Total Credits 
{% endanchor %}
Set a subusers credits to a specified amount.


{% parameters total %}
 {% parameter 'task' 'Yes' 'Must be set to *total*' 'Set the credits to the specified amount' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser who will have their credits updated' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the subuser will be reset to' %}
{% endparameters %}


{% apiexample total POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=total&credits=200 %}
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
Increment Credits 
{% endanchor %}
Increment a subusers credits by a specified amount.


{% parameters increment %}
 {% parameter 'task' 'Yes' 'Must be set to *increment*' 'Increment the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser who will have their credits incremented' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the subuser will be incremented by' %}
{% endparameters %}


{% apiexample increment POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=increment&credits=20 %}
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
Decrement Credits 
{% endanchor %}
Decrement a subusers credits by a specified amount.


{% parameters decrement %}
 {% parameter 'task' 'Yes' 'Must be set to *increment*' 'Decrement the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The subuser who will have their credits decremented' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the subuser will be decremented by' %}
{% endparameters %}


{% apiexample decrement POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=decrement&credits=200 %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
   <result>@nodes</result>
</result>

  {% endresponse %}
{% endapiexample %}
