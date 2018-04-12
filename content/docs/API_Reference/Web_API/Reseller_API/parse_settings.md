---
layout: page
weight: 0
title: Parse Settings
navigation:
   show: true
---

<page-anchor el="h2">
Get Current Settings
</page-anchor>


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>get</em>' 'Retrieve Parse settings' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>parse</em>' 'Allows you to access parse functionality' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=parse&task=get&method=parse&user=eexampexample@example.com %}
  {% response json %}
{
  "parse": [
    {
      "hostname": "www.example.com",
      "url": "www.mydomain.com/parse.php",
      "spam_check": 1
    }
  ]
}
  {% endresponse %}
  {% response xml %}
<parse>
   <entry>
      <hostname>www.example.com</hostname>
      <url>www.mydomain.com/parse.php</url>
      <spam_check>1</spam_check>
   </entry>
</parse>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Create New Entry
</page-anchor>


{% parameters create %}
 {% parameter 'task' 'Yes' 'Must be set to <em>set</em>' 'Set Parse settings' %}
 {% parameter 'hostname' 'Yes' 'No more than 255 characters' 'Hostname we will use with your email' %}
 {% parameter 'url' 'Yes' 'The parse destination' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>parse</em>' 'Allows you to access parse functionality' %}
{% endparameters %}


{% apiexample create POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&method=parse&task=set&method=parse&user=eexampexample@example.com %}
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
Edit Entry
</page-anchor>


{% parameters edit %}
 {% parameter 'task' 'Yes' 'Must be set to <em>update</em>' 'Set Parse settings' %}
 {% parameter 'hostname' 'Yes' 'No more than 255 characters' 'Hostname entry you want to update' %}
 {% parameter 'url' 'Yes' 'The parse destination' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>parse</em>' 'Allows you to access parse functionality' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&method=parse&task=update&user=eexampexample@example.com %}
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
Delete Entry
</page-anchor>


{% parameters delete %}
 {% parameter 'task' 'Yes' 'Must be set to <em>delete</em>' 'Set Parse settings' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'hostname' 'Yes' 'Must be the hostname you wish to delete.' 'The host name you will remove for your customer' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>parse</em>' 'Allows you to access parse functionality' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&task=delete&method=parse&user=eexampexample@example.com %}
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
