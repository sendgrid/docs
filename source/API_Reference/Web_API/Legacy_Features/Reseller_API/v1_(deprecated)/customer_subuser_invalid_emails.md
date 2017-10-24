---
layout: page
weight: 0
title: Customer Subuser Invalid Emails
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% anchor h2 %}
Retrieve Invalid Emails 
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
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser we are retrieving invalid emails from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>get</em>
         </td>
         <td>This will allow you to retrieve the invalid emails for the specified customer subuser</td>
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

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=invalidemails&user=example@example.com&task=get&date=
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
invalidemails><invalidemail><email>isaac@hotmail.comm</email><reason>Mail domain mentioned in email address is unknown</reason><created>2009-06-10 12:40:30</created></invalidemail><invalidemail><email>isaac@hotmail</email><reason>Bad Syntax</reason><created>2009-06-10 12:40:30</created></invalidemail><invalidemail><email>isaac@example.com</email><reason>Known bad domain</reason><created>2009-06-10 12:40:30</created></invalidemail></invalidemails
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=invalidemails&amp;user=example@example.com&amp;task=get&amp;date=
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
{"email":"isaac@hotmail.comm","reason":"Mail domain mentioned in email address is unknown","created":"2009-06-01 19:41:39"},{"email":"isaac@hotmail","reason":"Bad Syntax","created":"2009-06-01 19:41:39"},{"email":"isaac@example.com","reason":"Known bad domain","created":"2009-06-01 19:41:39"}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Delete Invalid Emails 
{% endanchor %}

Since SendGrid does not deliver to invalid emails, users can remove invalid emails from their list at any time if re-delivery to a spam reported address is desired.

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
         <td>The customer subuser we are retrieving invalid emails from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>delete</em>
         </td>
         <td>This will allow you to delete an invalid email for the specified customer subuser</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Must be an invalid email</td>
         <td>You must specify the invalid emails to remove</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=invalidemails&user=example@example.com&task=delete&email=invalidemail@example.com
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

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=invalidemails&user=example@example.com&task=delete&email=invalidemail@example.com
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
