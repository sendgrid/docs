---
layout: page
weight: 0
title: Authenticate a Customer
navigation:
   show: true
---

Authenticate a customer on your website before displaying their account information so that you can have users manage their SendGrid account on your website completely.


{% parameters auth %}
 {% parameter 'user' 'Yes' 'Customer that is registered under your account.' %}
 {% parameter 'password' 'Yes' 'Password the customer submitted.' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>auth</em> . Allows you to access authentication functionality' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample auth POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=eexampexample@example.com&password=theirsubmittedpassword&method=auth %}
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
