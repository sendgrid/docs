---
layout: page
weight: 0
title: Customer Subuser Apps
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
 This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Web_API/Reseller_API/Reseller_Customer_Subuser_API/customer_subuser_apps.html) Reseller Customer Subuser Apps page
{% endwarning %}

{% anchor h2 %}
List
{% endanchor %}

List all of the available apps.

Note: The *name* entry is used in all the other API calls to identify a app.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>getavailable</em>
         </td>
         <td>Retrieve Available Apps</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who we will update</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=getavailable&method=apps&user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
filters><filter><name>twitter</name><title>Twitter</title>
      <description>This plugin allows you to send an email message to twitter</description><activated>0</activated></filter>
    ...
  </filters
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=getavailable&amp;method=apps&amp;user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response: Success</h3>
{% codeblock %}
{"name":"twitter","title":"Twitter","description":"This plugin allows you to send an email message to twitter","activated":false}, ...
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Activate App
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>activate</em>
         </td>
         <td>Retrieve Available Apps</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who we will update</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&method=apps&task=activate&user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;name=twitter&amp;method=apps&amp;task=activate&amp;user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Deactivate App
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>deactivate</em>
         </td>
         <td>Retrieve Available Apps</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who we will update</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&method=apps&task=deactivate&user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;name=twitter&amp;method=apps&amp;task=deactivate&amp;user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Customize App
{% endanchor %}

These API calls require that settings are passed using POST.

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=twitter&method=apps&task=setup&user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
filter><field_name>field_value</field_name>
    ...
  </filter
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock %}
result><message>error</message><message>... error messages ...</message></result>
{% endcodeblock %}

#### Return - Empty

This is returned if that filter has no settings or is not enabled.

{% codeblock %}
filter></filter
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;name=twitter&amp;method=apps&amp;task=setup&amp;user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response: Success</h3>

{% codeblock lang:json %}
{
  "message": "success",
  "settings": [
    {
      "field_name": "field_value"
    }
  ]
}
{% endcodeblock %}

#### Return - Empty

This is returned if that filter has no settings or is not enabled.

{% codeblock %}
"settings":null}

{% endcodeblock %}
<hr/>

{% anchor h2 %}
Get Current Settings

{% endanchor %}
<h3>XML Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;name=twitter&amp;task=getsettings&amp;user=example@example.com&amp;method=app
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response: Success</h3>
{% codeblock %}
filter><field_name>field_value</field_name>
    ...
  </filter
{% endcodeblock %}

#### Return - Empty

This is returned if that filter has no settings or is not enabled.

{% codeblock %}
result><message>error</message><message>... error messages ...</message></result>
{% endcodeblock %}
<h4>Return - Empty</h4>
<p>This is returned if that filter has no settings or is not
enabled.</p>
{% codeblock %}
filter></filter
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "success",
  "settings": [
    {
      "field_name": "field_value"
    }
  ]
}
{% endcodeblock %}

#### Return - Empty

This is returned if that filter has no settings or is not enabled.

{% codeblock %} "settings":null {% endcodeblock %}
