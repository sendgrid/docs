---
layout: page
weight: 600
title: Account Limits
navigation:
   show: true
---

<span>Throttle your subuser when you need them to send only a specific amount of emails at a specified interval.</span>

<page-anchor el="h2">
Retrieve
</page-anchor>

Retrieve account limits for a specific subuser. If the API call response is empty that means the subuser has the limits removed.


{% parameters retrieve %}
 {% parameter 'task' 'Yes' 'Must be set to <code>retrieve</code>' 'Task to retrieve account limits' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The subuser who will have their account limits retrieved' %}
{% endparameters %}


{% apiexample retrieve POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=retrieve %}
  {% response json %}
{
  "credit": "200",
  "credit_remain": "200",
  "last_reset": "2014-11-21"
}
  {% endresponse %}
  {% response xml %}
<credits>
   <credit>200</credit>
   <credit_remain>200</credit_remain>
   <last_reset>2014-11-21</last_reset>
</credits>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
No Limit
</page-anchor>

Remove the limit for a subuser.


{% parameters none %}
 {% parameter 'task' 'Yes' 'Must be set to <code>none</code>' 'Task to remove account limits' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The subuser who will have their credit limits removed' %}
{% endparameters %}


{% apiexample none POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=none %}
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

<page-anchor el="h2">
Recurring Reset
</page-anchor>
A recurring reset will allow you to periodically reset a subusers credits to a number you specify. This can be either daily, weekly or monthly.


{% parameters recurring %}
 {% parameter 'task' 'Yes' 'Must be set to <code>recurring<code>' 'Task to setup recurring credits' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The subuser you will be applying a recurring credit limit to' %}
 {% parameter 'credits' 'Yes' 'Unsigned integer' 'The number of credits the subuser will be reset to' %}
 {% parameter 'period' 'Yes' 'Must be either daily, weekly, or monthly' 'How often you want SendGrid to reset the subuser credits' %}
 {% parameter 'startdate' 'No' 'Date must be in <code>YYYY-mm-dd</code> format' 'The date you want to start resetting the subuser credits' %}
 {% parameter 'enddate' 'No' 'Date must be in <code>YYYY-mm-dd</code> format' 'The date you want to stop resetting the subusers credits. After this date, credits will not be added to the account, but can still be consumed' %}
 {% parameter 'initial_credits' 'No' 'Unsigned integer' 'The number of credits you initially want the account reset to. If this is not set, the credits will be reset using the credits parameter. Useful when setting up a subuser with partially-consumed credits' %}
{% endparameters %}


{% apiexample recurring POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=recurring&credits=200&period=daily %}
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

<page-anchor el="h2">
Total Credits
</page-anchor>
Set a subusers credits to a specified amount.


{% parameters total %}
 {% parameter 'task' 'Yes' 'Must be set to <code>total</code>' 'Task to set the credits to the specified amount' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The subuser who will have their credits updated' %}
 {% parameter 'credits' 'Yes' 'Unsigned integer' 'The total number of credits the subuser will be set to' %}
{% endparameters %}


{% apiexample total POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=total&credits=200 %}
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

<page-anchor el="h2">
Increment Credits
</page-anchor>
Increment a subusers credits by a specified amount.


{% parameters increment %}
 {% parameter 'task' 'Yes' 'Must be set to <code>increment</code>' 'Task to increment the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The subuser who will have their credits incremented' %}
 {% parameter 'credits' 'Yes' 'Unsigned integer' 'The total number of credits the subuser will be incremented by' %}
{% endparameters %}


{% apiexample increment POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=increment&credits=20 %}
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

<page-anchor el="h2">
Decrement Credits
</page-anchor>
Decrement a subusers credits by a specified amount.


{% parameters decrement %}
 {% parameter 'task' 'Yes' 'Must be set to <code>decrement</code>' 'Task to decrement the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The subuser who will have their credits decremented' %}
 {% parameter 'credits' 'Yes' 'Unsigned integer' 'The total number of credits the subuser will be decremented by' %}
{% endparameters %}


{% apiexample decrement POST https://api.sendgrid.com/apiv2/customer.limit api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&task=decrement&credits=200 %}
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
