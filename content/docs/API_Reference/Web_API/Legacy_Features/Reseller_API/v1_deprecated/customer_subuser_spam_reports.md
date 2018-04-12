---
layout: page
weight: 0
title: Customer Subuser Spam Reports
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

<page-anchor el="h2">
Retrieve Spam Reports
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
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser we are retrieving spam reports from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>get</em>
         </td>
         <td>This will allow you to retrieve the spam reports for the specified user</td>
      </tr>
      <tr>
         <td>date</td>
         <td>No</td>
         <td>Must be set to 1</td>
         <td>Retrieves the timestamps, it will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=spamreports&user=example@example.com&task=get&date=
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
spamreports><spamreport><email>emaieexampexample@example.com</email><created>2009-06-10 12:40:30</created></spamreport><spamreport><email>emaileexampexample@example.com</email><created>2009-06-10 12:40:30</created></spamreport></spamreports
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=spamreports&amp;user=example@example.com&amp;task=get&amp;date=
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
{"email":"emaieexampexample@example.com","created":"2009-06-01 19:41:39"},{"email":"emaileexampexample@example.com","created":"2009-06-01 19:41:39"}
{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Delete Spam Reports
</page-anchor>

Since SendGrid does not deliver to spam reported addresses, users can remove spam reports from their list at any time if re-delivery to a spam reported address is desired.

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
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser we are retrieving spam reports from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>delete</em>
         </td>
         <td>This will allow you to delete a spam report for the specified user</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Must be a spam reports</td>
         <td>You must specify the spam reports to remove</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=spamreports&user=example@example.com&task=delete&email=spamreport@domain.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock %}
result><message>Email does not exist</message></result>
{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=spamreports&user=example@example.com&task=delete&email=spamreport@domain.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "Email does not exist"
}
{% endcodeblock %}
