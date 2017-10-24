---
layout: page
weight: 0
title: Subuser Spam Reports
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
  This feature is deprecated. Please go to the [Version 2]({{root_url}}/API_Reference/Web_API/Customer_Subuser_API/subuser_spam_reports.html) Customer Subuser Spam Reports page 

{% endwarning %}

{% anchor h2 %}
Retrieve Spam Reports
{% endanchor %}

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Subuser must be registered under your account</td>
         <td>The subuser we are retrieving spam reports from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>Must be set to *get*</td>
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

{% xmljsontabs get %}

<div class="tab-content">
<div class="tab-pane" id="get-xml">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.spamreports.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=exampleexampexample@example.com&task=get&date=
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<spamreports>
   <spamreport>
      <email>emaieexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </spamreport>
   <spamreport>
      <email>emaileexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </spamreport>
</spamreports>

{% endcodeblock %}

</div>
<div class="tab-pane active" id="get-json">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.spamreports.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=exampleexampexample@example.com&task=get&date=
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:json %}
[
  {
    "email": "emaieexampexample@example.com",
    "created": "2009-06-01 19:41:39"
  },
  {
    "email": "emaileexampexample@example.com",
    "created": "2009-06-01 19:41:39"
  }
]
{% endcodeblock %}

</div>
</div>

* * * * *

{% anchor h2 %}
Delete Spam Reports
{% endanchor %}
Since SendGrid does not deliver to spam reported addresses, users can remove spam reports from their list at any time if re-delivery to a spam reported address is desired.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Subuser must be registered under your account</td>
         <td>The subuser we are retrieving spam reports from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>Must be set to *delete*</td>
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

{% xmljsontabs delete %}

<div class="tab-content">
<div class="tab-pane" id="delete-xml">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.spamreports.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=exampleexampexample@example.com&task=delete&email=spamreport@domain.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>Email does not exist</message>
</result>

{% endcodeblock %}

</div>
<div class="tab-pane active" id="delete-json">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.spamreports.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=exampleexampexample@example.com&task=delete&email=spamreport@domain.com
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

</div>
</div>
