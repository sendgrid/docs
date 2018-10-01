---
layout: page
weight: 0
title: Parse Settings
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% anchor h2 %}
Get Current Settings 
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
            <em>get</em>
         </td>
         <td>Retrieve Parse settings</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer must be registered under your account</td>
         <td>The customer who we will update</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>parse</em>
         </td>
         <td>Allows you to access parse functionality</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=parse&task=get&method=parse&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}  <parse><entry><hostname>www.example.com</hostname><url>www.mydomain.com/parse.php</url><spam_check>1</spam_check></entry></parse
{% endcodeblock %}
<h3>Response: Empty</h3>
{% codeblock %}  <parse></parse
{% endcodeblock %}

### Response: Empty

{% codeblock %}
"parse":[{"hostname":"www.example.com","url":"www.mydomain.com\/parse.php","spam_check":1}]
{% endcodeblock %}
<h3>Response: Empty</h3>
{% codeblock %}
"parse":[]
{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&method=parse&task=set&method=parse&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Edit Entry 
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
            <em>update</em>
         </td>
         <td>Set Parse settings</td>
      </tr>
      <tr>
         <td>hostname</td>
         <td>Yes</td>
         <td>No more than 255 characters</td>
         <td>Hostname entry you want to update</td>
      </tr>
      <tr>
         <td>url</td>
         <td>Yes</td>
         <td/>
         <td>The parse destination</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer must be registered under your account</td>
         <td>The customer who we will update</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>parse</em>
         </td>
         <td>Allows you to access parse functionality</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&method=parse&task=update&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1&method=parse&task=parse&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Delete Entry 
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
            <em>delete</em>
         </td>
         <td>Set Parse settings</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer must be registered under your account</td>
         <td>The customer who we will update</td>
      </tr>
      <tr>
         <td>hostname</td>
         <td>Yes</td>
         <td>Must be the hostname you wish to delete.</td>
         <td>The host name you will remove for your customer</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>parse</em>
         </td>
         <td>Allows you to access parse functionality</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&task=delete&method=parse&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&task=delete&method=parse&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}
