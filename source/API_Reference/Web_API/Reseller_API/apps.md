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

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=getavailable&method=apps&user=eexampexample@example.com %}
  {% response json %}
[
    {
        "name": "gravatar",
        "title": "Gravatar",
        "description": "Appends your gravatar to each HTML email.",
        "activated": false
    },
    {
        "name": "clicktrack",
        "title": "Click Tracking",
        "description": "Overwrites every link to track every click in emails.",
        "activated": false
    }
]
  {% endresponse %}
  {% response xml %}
<apps>
    <app>
        <name>gravatar</name>
        <title>Gravatar</title>
        <description>Appends your gravatar to each HTML email.</description>
        <activated>0</activated>
    </app>
    <app>
        <name>clicktrack</name>
        <title>Click Tracking</title>
        <description>Overwrites every link to track every click in emails.</description>
        <activated>0</activated>
    </app>
</apps>
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
 {% parameter 'name' 'Yes' 'Must be set to <em>name of the app</em>' 'Name is returned in the List API call above' %}
{% endparameters %}


{% apiexample activate POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=newrelic&method=apps&task=activate&user=eexampexample@example.com %}
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
{% parameter 'name' 'Yes' 'Must be set to <em>name of the app</em>' 'Name is returned in the List API call above' %}
{% endparameters %}


{% apiexample deactivate POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=newrelic&method=apps&task=deactivate&user=eexampexample@example.com %}
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

{% parameters deactivate %}
 {% parameter 'task' 'Yes' 'Must be set to <em>setup</em>' 'Retrieve Available Apps' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>apps</em>' 'Allows you to access apps functionality' %}
 {% parameter 'name' 'Yes' 'Must be set to <em>name of the app</em>' 'Name is returned in the List API call above' %}
 {% parameter 'field_name' 'Yes' 'Must be set to <em>a setting field name</em>' 'The [fields]({{root_url}}/API_Reference/Web_API/filter_settings.html) required for each app to work properly' %}
{% endparameters %}

{% apiexample customize POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=newrelic&method=apps&task=setup&user=eexampexample@example.com&licence_key=1234567&enable_subusers=true %}
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
Get Current Settings 
{% endanchor %}

{% parameters deactivate %}
 {% parameter 'task' 'Yes' 'Must be set to <em>getsettings</em>' 'Retrieve Available Apps' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The customer who we will update' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>apps</em>' 'Allows you to access apps functionality' %}
 {% parameter 'name' 'Yes' 'Must be set to <em>name of the app</em>' 'Name is returned in the List API call above' %}
{% endparameters %}

{% apiexample settings POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=newrelic&task=getsettings&user=eexampexample@example.com&method=apps %}
  {% response json %}
{
    "settings": {
        "field_name": "field_value"
    }
}
  {% endresponse %}
  {% response xml %}
<app>
   <field_name>field_value</field_name>
</app>
  {% endresponse %}
{% endapiexample %}
