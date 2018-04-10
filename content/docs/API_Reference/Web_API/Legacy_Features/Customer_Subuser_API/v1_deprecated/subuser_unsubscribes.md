---
layout: page
weight: 0
title: Subuser Unsubscribes
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
This feature is deprecated, please go to the v2 Customer Subuser API <a href="{{root_url}}/API_Reference/Web_API/Customer_Subuser_API/subuser_unsubscribes.html">Subuser Unsubscribes</a> page.
{% endwarning %}

{% anchor h2 %}
Retrieve Unsubscribes
{% endanchor %}
Note that you can use *either* the days parameter *or* the start_date and end_date parameter.

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
         <td>The subuser we are retrieving unsubscribes from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>Must be set to *get*</td>
         <td>This will allow you to retrieve the unsubscribes for the specified subuser</td>
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

  {% requesturl POST %}https://api.sendgrid.com/api/user.unsubscribes.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=get&date=
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<unsubscribes>
   <unsubscribe>
      <email>emaieexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </unsubscribe>
   <unsubscribe>
      <email>emaileexampexample@example.com</email>
      <created>2009-06-10 12:40:30</created>
   </unsubscribe>
</unsubscribes>

{% endcodeblock %}

</div>
<div class="tab-pane active" id="get-json">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.unsubscribes.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=get&date=
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
Delete Unsubscribes
{% endanchor %}
Since SendGrid does not deliver to unsubscribe addresses, users can remove unsubscribes from their list at any time if re-delivery to an unsubscribed address is desired.

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
         <td>The subuser we are retrieving unsubscribes from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>Must be set to *delete*</td>
         <td>This will allow you to delete an unsubscribe record for the specified subuser</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Must be an unsubscribe record</td>
         <td>You must specify the unsubscribe record to remove</td>
      </tr>
   </tbody>
</table>

{% xmljsontabs delete %}

<div class="tab-content">
<div class="tab-pane" id="delete-xml">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.unsubscribes.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=delete&email=unsubscribe@sample.com
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

  {% requesturl POST %}https://api.sendgrid.com/api/user.unsubscribes.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=delete&email=unsubscribe@sample.com
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

* * * * *

{% anchor h2 %}
Add Unsubscribes
{% endanchor %}
Add unsubscribe email records to their account if they need to stop sending email messages to a specific recipient.

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
         <td>The subuser we are retrieving unsubscribes from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>Must be set to *add*</td>
         <td>This will allow you to add an unsubscribe record for the specified subuser</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Must be an unsubscribe record</td>
         <td>You must specify the unsubscribe record to add</td>
      </tr>
   </tbody>
</table>

{% xmljsontabs add %}

<div class="tab-content">
<div class="tab-pane" id="add-xml">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.unsubscribes.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=add&email=unsubscribe@sample.com
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
   <message>Email already exists</message>
</result>

{% endcodeblock %}

</div>
<div class="tab-pane active" id="add-json">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.unsubscribes.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&task=add&email=unsubscribe@sample.com
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

</div>
</div>
