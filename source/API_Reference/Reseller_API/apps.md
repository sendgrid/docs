---
layout: page
weight: 0
title: Apps
navigation:
   show: true
---

{% anchor h2 %}
List 
{% endanchor %}

List all of the available apps.

Note: The *name* entry is used in all the other API calls to identify a app.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>getavailable</em>' 'Retrieve Available Apps' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>apps</em>' 'Allows you to access apps functionality' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=getavailable&method=apps&user=customer@example.com %}
  {% response json %}
{
  "name": "twitter",
  "title": "Twitter",
  "description": "This plugin allows you to send an email message to twitter",
  "activated": "false"
}
  {% endresponse %}
  {% response xml %}
<filters>
   <filter>
      <name>twitter</name>
      <title>
Twitter

</title>
      <description>This plugin allows you to send an email message to twitter</description>
      <activated>0</activated>
   </filter>
   ...
</filters>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Activate App 
{% endanchor %}


{% parameters activate %}
 {% parameter 'task' 'Yes' 'Must be set to <em>activate</em>' 'Retrieve Available Apps' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>apps</em>' 'Allows you to access apps functionality' %}
{% endparameters %}


{% apiexample activate POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&method=apps&task=activate&user=customer@example.com %}
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
Deactivate App 
{% endanchor %}


{% parameters deactivate %}
 {% parameter 'task' 'Yes' 'Must be set to <em>deactivate</em>' 'Retrieve Available Apps' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>apps</em>' 'Allows you to access apps functionality' %}
{% endparameters %}


{% apiexample deactivate POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&method=apps&task=deactivate&user=customer@example.com %}
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
Customize App 
{% endanchor %}

These API calls require that settings are passed using POST.

{% apiexample customize POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&method=apps&task=setup&user customer@example.com false %}
  {% response json %}
{
  "message": "success",
  "settings": [
    {
      "field_name": "field_value"
    }
  ]
}
  {% endresponse %}
  {% response xml %}
<filter>
   <field_name>field_value</field_name>
   ...
</filter>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Get Current Settings 
{% endanchor %}

{% apiexample settings POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&task=getsettings&user=customer@example.com&method=app false %}
  {% response json %}
{
  "message": "success",
  "settings": [
    {
      "field_name": "field_value"
    }
  ]
}
  {% endresponse %}
  {% response xml %}
<filter>
   <field_name>field_value</field_name>
   ...
</filter>

  {% endresponse %}
{% endapiexample %}
