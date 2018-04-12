---
layout: page
weight: 0
title: Customer Unsubscribes
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

<page-anchor el="h2">
Retrieve Unsubscribes
</page-anchor>

Note that you can use *either* the days parameter *or* the start_date and end_date parameter.

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
         <td>Customer must be registered under your account</td>
         <td>The customer we are retrieving unsubscribes from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>get</em>
         </td>
         <td>This will allow you to retrieve the unsubscribes for the specified customer</td>
      </tr>
      <tr>
         <td>date</td>
         <td>No</td>
         <td>Must be set to 1</td>
         <td>Retrieves the timestamps, it will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>unsubscribes</em>
         </td>
         <td>Allows you to access unsubscribe functionality</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=eexampexample@example.com&task=get&date=
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
unsubscribes><unsubscribe><email>emaieexampexample@example.com</email><created>2009-06-10 12:40:30</created></unsubscribe><unsubscribe><email>emaileexampexample@example.com</email><created>2009-06-10 12:40:30</created></unsubscribe></unsubscribes
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=unsubscribes&amp;user=eexampexample@example.com&amp;task=get&amp;date=
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
{"email":"emaieexampexample@example.com","created":"2009-06-01 19:41:39"},{"email":"emaileexampexample@example.com","created":"2009-06-01 19:41:39"}]

{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Delete Unsubscribes
</page-anchor>

Since SendGrid does not deliver to unsubscribe addresses, users can remove unsubscribes from their list at any time if re-delivery to an unsubscribed address is desired.

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
         <td>Customer must be registered under your account</td>
         <td>The customer we are retrieving unsubscribes from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>delete</em>
         </td>
         <td>This will allow you to delete an unsubscribe record for the specified customer</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Must be an unsubscribe record</td>
         <td>You must specify the unsubscribe record to remove</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=eexampexample@example.com&task=delete&email=unsubscribe@sample.com
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=eexampexample@example.com&task=delete&email=unsubscribe@sample.com
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

* * * * *

<page-anchor el="h2">
Add Unsubscribes
</page-anchor>

Add unsubscribe email records to their account if they need to stop sending email messages to a specific recipient.

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
         <td>Customer must be registered under your account</td>
         <td>The customer we are retrieving unsubscribes from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>add</em>
         </td>
         <td>This will allow you to add an unsubscribe record for the specified customer</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Must be an unsubscribe record</td>
         <td>You must specify the unsubscribe record to add</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=eexampexample@example.com&task=add&email=unsubscribe@sample.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock %}
result><message>Email already exists</message></result>
{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=unsubscribes&user=eexampexample@example.com&task=add&email=unsubscribe@sample.com
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
  "message": "Email already exists"
}
{% endcodeblock %}
