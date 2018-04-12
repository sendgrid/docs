---
layout: page
weight: 50
title: Parse Settings
navigation:
   show: true
---

{% info %}
Please refer to the [Parse Documentation]({{root_url}}/API_Reference/Webhooks/parse.html) for documentation on Parse.
{% endinfo %}

<page-anchor el="h2">
Get Current Settings
</page-anchor>


{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'Task to retrieve Parse records' %}
 {% parameter user Yes 'Subuser must be under your account' 'The subuser to retrieve records for' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/apiv2/customer.parse api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=get&user=subuser_username %}
  {% response json %}
{
  "parse": [
    {
      "hostname": "parse.example1.com",
      "url": "www.mydomain.com/parse.php",
      "spam_check": 1
    },
    {
      "hostname": "parse.example2.com",
      "url": "www.mydomain.com/parse.php",
      "spam_check": 0
    }
  ]
}
  {% endresponse %}
  {% response xml %}
<parse>
   <entry>
      <hostname>parse.example1.com</hostname>
      <url>www.mydomain.com/parse.php</url>
      <spam_check>1</spam_check>
   </entry>
   <entry>
      <hostname>parse.example2.com</hostname>
      <url>www.mydomain.com/parse.php</url>
      <spam_check>0</spam_check>
   </entry>
</parse>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Create New Entry
</page-anchor>


{% parameters create %}
 {% parameter task Yes 'Must be set to <code>set</code>' 'Task to set Parse record' %}
 {% parameter user Yes 'Subuser must be  under your account' 'The subuser setup parse on' %}
 {% parameter hostname Yes 'Valid DNS entry' 'Hostname to catch email from. Must have mx record' %}
 {% parameter url Yes 'Valid POST URL' 'The URL to POST the Parse data' %}
{% endparameters %}


{% apiexample create POST https://api.sendgrid.com/apiv2/customer.parse api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&task=set&user=subuser_username %}
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
 {% parameter task Yes 'Must be set to <code>update</code>' 'Task to edit Parse record' %}
 {% parameter user Yes 'Subuser must be under your account' 'The subuser who owns the Parse record to update' %}
 {% parameter hostname Yes 'No more than 255 characters' 'Hostname entry you want to update' %}
 {% parameter url Yes 'Valid POST URL' 'The new URL to POST the Parse data' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/apiv2/customer.parse api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&task=update&user=subuser_username %}
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


{% parameters data %}
 {% parameter task Yes 'Must be set to <code>delete</code>' 'Task to delete Parse record' %}
 {% parameter user Yes 'Subuser must be under your account' 'The subuser who owns the Parse record being removed.' %}
 {% parameter hostname Yes 'Must be an existing hostname on the user' 'The Parse record to remove' %}
{% endparameters %}

{% apiexample data POST https://api.sendgrid.com/apiv2/customer.parse api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&task=delete&user=subuser_username %}
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
