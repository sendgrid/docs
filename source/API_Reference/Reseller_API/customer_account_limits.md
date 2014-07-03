---
layout: page
weight: 0
title: Customer Account Limits
navigation:
   show: true
---

Throttle your customer when you need them to send only a specific amount of emails at a specified interval.

{% anchor h2 %}
Retrieve 
{% endanchor %}

Retrieve account limits for a specific customer. If the API call response is empty that means the customer has the limits removed.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>retrieve</em>' 'Retrieve account limits' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who will have their account limits retrieved' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=customer@example.com&task=retriev %}
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

Obtain a complete list of all customer.


{% parameters list %}
 {% parameter 'task' 'Yes' 'Must be set to <em>none</em>' 'Remove account limits' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who will have their account limits removed' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
{% endparameters %}


{% apiexample list POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=customer@example.com&task=non %}
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
 {% parameter 'task' 'Yes' 'Must be set to <em>recurring</em>' 'The task required to set the recurring reset' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer you will be applying a recurring reset to' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The number of credits the customer will be reset to' %}
 {% parameter 'period' 'Yes' 'Must be either daily, weekly, or monthly' 'How often you want SendGrid to reset your customers credits' %}
 {% parameter 'startdate' 'No' 'Date must be in YYYY-mm-dd format' 'The date you want to start resetting the customers credits' %}
 {% parameter 'enddate' 'No' 'Date must be in YYYY-mm-dd format' 'The date you want to stop resetting the customers credits' %}
 {% parameter 'initial_credits' 'No' 'Must be an integer greater than 0' 'The number of credits you initially want the account reset to. If this is not set, the credits will be reset using the credits parameter' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access account limit functionality' %}
{% endparameters %}


{% apiexample reset POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=customer@example.com&task=recurring&credits=200&period=daily %}
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
Total Credits 
{% endanchor %}

Set a subusers credits to a specified amount.


{% parameters total %}
 {% parameter 'task' 'Yes' 'Must be set to <em>total</em>' 'Set the credits to the specified amount' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who will have their credits updated' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the customer will be reset to' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access account limit functionality' %}
{% endparameters %}


{% apiexample total POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=customer@example.com&task=total&credits=20 %}
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
 {% parameter 'task' 'Yes' 'Must be set to <em>increment</em>' 'Increment the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who will have their credits incremented' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the customer will be incremented by' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access account limit functionality' %}
{% endparameters %}


{% apiexample increment POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=customer@example.com&task=increment&credits=20 %}
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
 {% parameter 'task' 'Yes' 'Must be set to <em>increment</em>' 'Decrement the credits by the specified amount' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who will have their credits decremented' %}
 {% parameter 'credits' 'Yes' 'Must be an integer and greater than 0' 'The total number of credits the customer will be decremented by' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access account limit functionality' %}
{% endparameters %}


{% apiexample decrement POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=customer@example.com&task=decrement&credits=20 %}
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
