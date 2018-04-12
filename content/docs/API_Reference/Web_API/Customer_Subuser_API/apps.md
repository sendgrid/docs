---
layout: page
weight: 550
title: Apps
navigation:
   show: true
---

{% info %}
Please see the [Filter Settings]({{root_url}}/API_Reference/Web_API/filter_settings.html) page for a list of the required parameters for each app setting.
{% endinfo %}

<page-anchor el="h2">
List
</page-anchor>
List all of the available apps available for the subuser.

{% parameters getAvailable %}
  {% parameter task Yes 'Must be set to <code>getAvailable</code>' 'Task to retrieve available apps for the subuser' %}
  {% parameter user Yes 'Subuser must be under your account' 'The subuser being queried' %}
{% endparameters %}

{% apiexample list POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=getAvailable&user=subuser_username %}
  {% response json %}
[
  {
    "name": "clicktrack",
    "title": "Click Tracking",
    "description": "Overwrites every link to track every click in emails.",
    "activated": true
  },
  {
    "name": "subscriptiontrack",
    "title": "Subscription Tracking",
    "description": "Adds unsubscribe links to the bottom of the text and HTML emails. Future emails won't be delivered to unsubscribed users.",
    "activated": false
  },
  {
    "name": "opentrack",
    "title": "Open Tracking",
    "description": "Appends an invisible image to HTML emails to track emails that have been opened.",
    "activated": true
  }
]
  {% endresponse %}
  {% response xml %}
<apps>
  <app>
    <name>clicktrack</name>
    <title>Click Tracking</title>
    <description>Overwrites every link to track every click in emails.</description>
    <activated>1</activated>
  </app>
  <app>
    <name>subscriptiontrack</name>
    <title>Subscription Tracking</title>
    <description>Adds unsubscribe links to the bottom of the text and HTML emails. Future emails won't be delivered to unsubscribed users.</description>
    <activated>0</activated>
  </app>
  <app>
    <name>opentrack</name>
    <title>Open Tracking</title>
    <description>Appends an invisible image to HTML emails to track emails that have been opened.</description>
    <activated>1</activated>
  </app>
</apps>
  {% endresponse %}
Note: The <code>name</code> entry is used in all the other API calls to identify an app. {% endapiexample %}

* * * * *

<page-anchor el="h2">
Activate App
</page-anchor>
Activate an app on a subuser.

{% parameters activate %}
  {% parameter task Yes 'Must be set to <code>activate<code>' 'Task to activate an app' %}
  {% parameter user Yes 'Subuser must be under your account' 'The subuser to activate the app on' %}
  {% parameter name Yes 'Must be a [supported app]({{root_url}}/API_Reference/Web_API/filter_settings.html)' 'The app to activate' %}
{% endparameters %}

{% apiexample activate POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=clicktrack&task=activate&user=subuser_username %}
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
Deactivate App
</page-anchor>
Deactivate an app on a subuser.

{% parameters deactivate %}
  {% parameter task Yes 'Must be set to <code>deactivate<code>' 'Deactivate an app' %}
  {% parameter user Yes 'Subuser must be under your account' 'The subuser to deactivate the app on' %}
  {% parameter name Yes 'Must be a [supported app]({{root_url}}/API_Reference/Web_API/filter_settings.html)' 'The app to deactivate' %}
{% endparameters %}

{% apiexample deactivate POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=clicktrack&task=deactivate&user=subuser_username %}
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
Setup App
</page-anchor>
These API calls require that settings are passed using POST.

{% info %}
Refer to [Filter Settings]({{root_url}}/API_Reference/Web_API/filter_settings.html) for the required arguments for each app.
{% endinfo %}

{% parameters setup %}
  {% parameter task Yes 'Must be set to <code>setup<code>' 'Task to setup an app' %}
  {% parameter user Yes 'Subuser must be under your account' 'The subuser to setup the app on' %}
  {% parameter name Yes 'Must be a [supported app]({{root_url}}/API_Reference/Web_API/filter_settings.html)' 'The app to setup' %}
{% endparameters %}

{% apiexample setup POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&name=bcc&task=setup&email=test@example.com %}
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
Get Current Settings
</page-anchor>
Get the settings for a subuser's app.

{% parameters getsettings %}
  {% parameter task Yes 'Must be set to <code>getsettings</code>' 'Task to retrieve the settings for the app' %}
  {% parameter user Yes 'Subuser must be under your account' 'The subuser get the app settings for' %}
  {% parameter name Yes 'Must be a [supported app]({{root_url}}/API_Reference/Web_API/filter_settings.html)' 'The app to retrieve settings of' %}
{% endparameters %}

{% apiexample getsettings POST https://api.sendgrid.com/apiv2/customer.apps api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=clicktrack&task=getsettings&user=subuser_username %}
  {% response json %}
{"settings":
  {
    "enable_text":"0"
  }
}
  {% endresponse %}
  {% response xml %}
<app>
  <enable_text>1</enable_text>
</app>

  {% endresponse %}
{% endapiexample %}
