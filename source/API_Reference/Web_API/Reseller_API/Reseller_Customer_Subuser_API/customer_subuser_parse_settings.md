---
layout: page
weight: 0
title: Customer Subuser Parse Settings
navigation:
   show: true
---

{% anchor h2 %}
Get Current Settings 
{% endanchor %}

{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>get</em>' 'Retrieve Parse settings' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who we will update' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=parse&task=get&method=parse&user=exampleexampexample@example.com %}
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

{% anchor h2 %}
Create New Entry 
{% endanchor %}

{% parameters create %}
 {% parameter 'task' 'Yes' 'Must be set to <em>set</em>' 'Set Parse settings' %}
 {% parameter 'hostname' 'Yes' 'No more than 255 characters' 'Hostname we will use with your email' %}
 {% parameter 'url' 'Yes' 'The parse destination' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who we will update' %}
{% endparameters %}


{% apiexample create POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&method=parse&task=set&method=parse&user=exampleexampexample@example.com %}
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
Edit Entry 
{% endanchor %}

{% parameters edit %}
 {% parameter 'task' 'Yes' 'Must be set to <em>update</em>' 'Set Parse settings' %}
 {% parameter 'hostname' 'Yes' 'No more than 255 characters' 'Hostname entry you want to update' %}
 {% parameter 'url' 'Yes' 'The parse destination' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who we will update' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&method=parse&task=update&user=exampleexampexample@example.com %}
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
Delete Entry 
{% endanchor %}

{% parameters delete %}
 {% parameter 'task' 'Yes' 'Must be set to <em>delete</em>' 'Set Parse settings' %}
 {% parameter 'user' 'Yes' 'Customer subuser must be registered under your account' 'The customer subuser who we will update' %}
 {% parameter 'hostname' 'Yes' 'Must be the hostname you wish to delete.' 'The host name you will remove for your customer subuser' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&task=delete&method=parse&user=exampleexampexample@example.com %}
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
