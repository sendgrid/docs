---
layout: page
weight: 0
title: Customer Subuser Event Notification URL
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

<page-anchor el="h2">
Retrieve
</page-anchor>

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
         <td>This will allow you to retrieve the event notification url for the specified customer subuser</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The username of the customer subuser</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=get&user=example@example.com&method=eventpostur
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
url>http://www.SubUserPostUrlHere.com</url
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=get&amp;user=example@example.com&amp;method=eventpostur
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
{"url":"http:\/\/www.SubUserPostUrlHere.com"}
{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Update / Set URL
</page-anchor>

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
            <em>set</em>
         </td>
         <td>This will allow you to retrieve the event notification url for the specified customer subuser</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The name of the customer subuser</td>
      </tr>
      <tr>
         <td>url</td>
         <td>Yes</td>
         <td>The notification URL</td>
         <td>This is the new event notification URL</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=set&user=example@example.com&url=http://www.SubUserPostUrlHere.com&method=eventpostur
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=set&amp;user=example@example.com&amp;url=http://www.SubUserPostUrlHere.com&amp;method=eventpostur
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Delete
</page-anchor>

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
         <td>This will allow you to delete the event notification url for the specified customer subuser</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The name of the customer subuser</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&user=example@example.com&method=eventpostur
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=delete&amp;user=example@example.com&amp;method=eventpostur
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}
