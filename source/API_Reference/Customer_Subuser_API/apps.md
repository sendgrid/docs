---
layout: page
weight: 0
title: Apps
navigation:
   show: true
---

{% info %}
Please see the [Filter Settings]({{root_url}}/API_Reference/Web_API/filter_settings.html) page for a list of the required parameters for each app setting. 
{% endinfo %}

{% anchor h2 %}
List 
{% endanchor %}
List all of the available apps. {% parameters list %} 
  
  {% parameter task Yes 'Must be set to *getavailable*' 'Retrieve available apps.' %}  
  {% parameter user Yes 'Subuser must be registered under your account' 'The subuser who we will update' %}
{% endparameters %}

{% apiexample list POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=getavailable&user=example@example.com %}
  {% response json %}
{
  "name": "twitter",
  "title": "Twitter",
  "description": "This plugin allows you to send an email message to twitter",
  "activated": false
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
</filters>

  {% endresponse %}
Note: The *name* entry is used in all the other API calls to identify an app. {% endapiexample %}

* * * * *

{% anchor h2 %}
Activate App 
{% endanchor %}
{% parameters activate %} 
  
  {% parameter name Yes 'Must be a [supported app](https://sendgrid.com/docs/API_Reference/Web_API/filter_settings.html)' 'The app to activate.' %}  
  {% parameter task Yes 'Must be set to *activate*' 'Activate an app' %}  
  {% parameter user Yes 'Subuser must be registered under your account' 'The subuser who we will update' %}
{% endparameters %}

{% apiexample activate POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&task=activate&user=example@example.com %}
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
  
  {% parameter name Yes 'Must be a [supported app](https://sendgrid.com/docs/API_Reference/Web_API/filter_settings.html)' 'The app to deactivate.' %}  
  {% parameter task Yes 'Must be set to *deactivate*' 'Deactivate an app' %}  
  {% parameter user Yes 'Subuser must be registered under your account' 'The subuser who we will update' %}
{% endparameters %}

{% apiexample deactivate POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&task=deactivate&user=example@example.com %}
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
{% apiexample customize POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc&task=setup&email=email example.com false %}
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
{% parameters settings %} 
  
  {% parameter name Yes 'Must be a [supported app](https://sendgrid.com/docs/API_Reference/Web_API/filter_settings.html)' 'The app for which to retrieve settings.' %}  
  {% parameter task Yes 'Must be set to *getsettings*' 'Retrieve the settings for the app' %}  
  {% parameter user Yes 'Subuser must be registered under your account' 'The subuser who we will update' %}
{% endparameters %}

{% apiexample settings POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc&task=getsettings&user=example@example.com %}
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
<!-- error -->

<result>
   <message>error</message>
   <message>... error messages ...</message>
</result>

  {% endresponse %}
{% endapiexample %}
