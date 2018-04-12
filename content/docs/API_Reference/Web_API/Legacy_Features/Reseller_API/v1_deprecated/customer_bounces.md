---
layout: page
weight: 0
title: Customer Bounces
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Web_API/Reseller_API/customer_bounces.html) Reseller Customer Bounces page.
{% endwarning %}

<page-anchor el="h2">
Retrieve Bounces
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
         <td>The customer we are retrieving bounces from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>get</em>
         </td>
         <td>This will allow you to retrieve the bounces for the specified customer</td>
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
            <em>bounces</em>
         </td>
         <td>Allows you to access bounces functionality</td>
      </tr>
   </tbody>
</table>

{% xmljsontabs get %}

<div class="tab-content">
<div class="tab-pane" id="get-xml">
### Call

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.manage.xml?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=bounces&amp;user=eexampexample@example.com&amp;task=get&amp;date=
{% endcodeblock %}
<h3>Response</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<bounces>
   <bounce>
      <email>emaieexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaieexampexample@example.com</reason>
      <created>2009-06-10 12:40:30</created>
   </bounce>
   <bounce>
      <email>emaileexampexample@example.com</email>
      <status>5.1.1</status>
      <reason>host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaileexampexample@example.com</reason>
      <created>2009-06-10 12:40:30</created>
   </bounce>
</bounces>

{% endcodeblock %}

</div>
<div class="tab-pane active" id="get-json">
### Call

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.manage.json?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=bounces&amp;user=eexampexample@example.com&amp;task=get&amp;date=
{% endcodeblock %}
<h3>Response</h3>

{% codeblock lang:json %}
[
  {
    "email": "emaieexampexample@example.com",
    "status": "5.1.1",
    "reason": "host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaieexampexample@example.com",
    "created": "2009-06-01 19:41:39"
  },
  {
    "email": "emaileexampexample@example.com",
    "status": "5.1.1",
    "reason": "host [127.0.0.1] said: 550 5.1.1 unknown or illegal user: emaileexampexample@example.com",
    "created": "2009-06-01 19:41:39"
  }
]
{% endcodeblock %}

</div>
</div>

* * * * *

<page-anchor el="h2">
Delete Bounces
</page-anchor>

Since SendGrid does not re-deliver to bounced addresses, users can remove bounces from their list at any time if redelivery to a bounced address is desired.

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
         <td>Subuser must be registered under your account</td>
         <td>The subuser we are retrieving bounces from</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>delete</em>
         </td>
         <td>This will allow you to delete the bounces for the specified user</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Bounce email address you want to delete</td>
         <td>You must specify the bounced email message to remove</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>bounces</em>
         </td>
         <td>Allows you to access bounces functionality</td>
      </tr>
   </tbody>
</table>

{% xmljsontabs delete %}

<div class="tab-content">
<div class="tab-pane" id="delete-xml">
### Call

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.manage.xml?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=bounces&amp;user=eexampexample@example.com&amp;task=delete&amp;email=bounceexampexample@example.com
{% endcodeblock %}
<h3>Response: Success</h3>
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
<div class="tab-pane" id="delete-json">
### Call

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.manage.json?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=bounces&amp;user=eexampexample@example.com&amp;task=delete&amp;email=bounceexampexample@example.com
{% endcodeblock %}
<h3>Response: Success</h3>

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
