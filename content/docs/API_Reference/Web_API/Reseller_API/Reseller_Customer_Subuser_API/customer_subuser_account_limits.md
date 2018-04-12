---
layout: page
weight: 0
title: Customer Subuser Account Limits
navigation:
   show: true
---

Throttle your customer subuser when you need them to send only a specific amount of emails at a specified interval.

<page-anchor el="h2">
Retrieve
</page-anchor>

Retrieve account limits for a specific customer subuser. If the API call response is empty it means that the customer subuser has had the limits removed.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>retrieve</em>' 'Retrieve account limits' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who will have their account limits retrieved' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=example@example.com&task=retrieve %}
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

<page-anchor el="h2">
No Limit
</page-anchor>

Obtain a complete list of all customer subusers.


{% parameters subuser %}
 {% parameter 'task' 'Yes' 'Must be set to <em>none</em>' 'Remove account limits' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who will have their account limits removed' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
{% endparameters %}


{% apiexample subuser POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=example@example.com&task=none %}
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
Set Recurring Limits
</page-anchor>

A recurring reset will allow you to periodically reset a subuser's credits to a number that you specify. This can either be daily, weekly or monthly.


{% parameters reset %}
 {% parameter 'task' 'Yes' 'Must be set to <em>recurring</em>' 'The task required to set the recurring reset' %}
 {% parameter 'user' 'Yes' 'Customer subusers must be registered under your account' 'The customer subuser you will be applying a recurring reset to' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The number of credits the customer subuser will be reset to' %}
 {% parameter 'period' 'Yes' 'Must either be daily, weekly, or monthly' "How often you want SendGrid to reset your customer subuser's credits" %}
 {% parameter 'startdate' 'No' 'Date must be in YYYY-mm-dd format' "The date you want to start resetting the customer subuser's credits" %}
 {% parameter 'enddate' 'No' 'Date must be in YYYY-mm-dd format' "The date you want to stop resetting the customer subuser's credits" %}
 {% parameter 'initial_credits' 'No' 'Must be an integer greater than 0' 'The number of credits you initially want the account reset to. If this is not set, the credits will be reset using the credits parameter' %}
{% endparameters %}


{% apiexample reset POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=example@example.com&task=recurring&credits=200&period=daily %}
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

Set a subuser's credits to a specified amount.


{% parameters total %}
 {% parameter 'task' 'Yes' 'Must be set to <em>total</em>' 'Set the credits to the specified amount' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who will have their credits updated' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the customer subuser will be reset to' %}
{% endparameters %}


{% apiexample total POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=example@example.com&task=total&credits=20 %}
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

Increment a subuser's credits by a specified amount.


{% parameters increment %}
 {% parameter 'task' 'Yes' 'Must be set to <em>increment</em>' 'Increment the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who will have their credits incremented' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the customer subuser will be incremented by' %}
{% endparameters %}


{% apiexample increment POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=example@example.com&task=increment&credits=20 %}
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

Decrement a subuser's credits by a specified amount.


{% parameters decrement %}
 {% parameter 'task' 'Yes' 'Must be set to <em>decrement</em>' 'Decrement the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who will have their credits decremented' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the customer subuser will be decremented by' %}
{% endparameters %}


{% apiexample decrement POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=example@example.com&task=decrement&credits=20 %}
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
