---
layout: page
weight: 0
title: Customer Account Limits
navigation:
   show: true
---

Throttle your customer when you need them to send only a specific amount of emails at a specified interval.

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

<page-anchor el="h2">
Retrieve
</page-anchor>

Retrieve account limits for a specific customer. If the API call response is empty that means the customer has the limits removed.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>retrieve</em>' 'Retrieve account limits' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who will have their account limits retrieved' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>limit</em>' 'Allows you to access limit functionality' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=eexampexample@example.com&task=retrieve %}
  {% response json %}
{
  "credit": "40000",
  "credit_remain": "2000",
  "last_reset": "2011-02-21"
}
  {% endresponse %}
  {% response xml %}
<credits>
   <credit>40000</credit>
   <credit_remain>2000</credit_remain>
   <last_reset>2011-02-21</last_reset>
</credits>
  {% endresponse %}
{% endapiexample %}
