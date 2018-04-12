---
layout: page
weight: 0
title: Filter Commands
navigation:
  show: true
---

{% info %}
  These API requests are Account Wide settings, unlike the SMTP API which will change the status at the individual email message level.
{% endinfo %}

<page-anchor el="h2">
Get Available
</page-anchor>

List all of the available apps.

*Note: The name entry is used in all the other API calls to identify an app.* For a list of all the apps and parameters accessible with the Web API you can check the [Filter Settings]({{root_url}}/API_Reference/Web_API/filter_settings.html) page.

{% apiexample getavailable GET https://api.sendgrid.com/api/filter.getavailable api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "...": "..."
  },
  {
    "name": "bcc",
    "title": "BCC",
    "description": "Automatically BCC an address for every e-mail sent from this account.",
    "activated": false
  },
  {
    "...": "..."
  }
]
  {% endresponse %}
  {% response xml %}
<filters>
   ...
   <filter>
      <name>bcc</name>
      <description>Automatically BCC an address for every e-mail sent.</description>
      <activated>0</activated>
   </filter>
   ...
</filters>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Activate App
</page-anchor>

Activate an app for the entire Account.

{% parameters activate %}

  {% parameter name true '' 'The name of the app to activate.' %}
{% endparameters %}

{% apiexample activate POST https://api.sendgrid.com/api/filter.activate api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc %}
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

Deactivate an app for the entire Account.

{% parameters deactivate %}

  {% parameter name true '' 'The name of the app to deactivate.' %}
{% endparameters %}

{% apiexample deactivate POST https://api.sendgrid.com/api/filter.deactivate api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc %}
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

Change application settings across the entire Account. Applications and their settings can be found in the [Filter Settings documentation]({{root_url}}/API_Reference/Web_API/filter_settings.html).

{% apiexample setup POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc&email=example@example.com false %}
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
Get App Settings
</page-anchor>

Get the Settings Of An App

{% parameters getsettings %}

  {% parameter name true '' 'The name of the app for which to retrieve settings.' %}
{% endparameters %}

{% apiexample getsettings GET https://api.sendgrid.com/api/filter.getsettings api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc %}
  {% response json %}
{
  "settings": [
    {
      "email": "example@example.com"
    }
  ]
}
  {% endresponse %}
  {% response xml %}
<filter>
   <email>nick@sendgrid.com</email>
</filter>

  {% endresponse %}
{% endapiexample %}
