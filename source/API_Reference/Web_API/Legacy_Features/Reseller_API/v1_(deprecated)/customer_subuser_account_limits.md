---
layout: page
weight: 0
title: Customer Subuser Account Limits
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
 This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Web_API/Reseller_API/Reseller_Customer_Subuser_API/customer_subuser_account_limits.html) Reseller Customer Subuser Account Limits page
{% endwarning %}

Throttle your customer subuser when you need them to send only a specific amount of emails at a specified interval.

* * * * *

{% anchor h2 %}
Retrieve
{% endanchor %}

Retrieve account limits for a specific customer subuser. If the API call response is empty that means the customer subuser has the limits removed.

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
            <em>retrieve</em>
         </td>
         <td>Retrieve account limits</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who will have their account limits retrieved</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=retriev
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}  <credits><credit>0</credit><credit_remain>2000</credit_remain><last_reset>2011-02-21</last_reset></credits
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>... error messages ...</error>
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=retriev
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
{"credit":"0","credit_remain":"2000","last_reset":"2011-02-21"}
{% endcodeblock %}
<h3>Response: Error</h3>

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
No Limit
{% endanchor %}

Obtain a complete list of all customer subuser.

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
            <em>none</em>
         </td>
         <td>Remove account limits</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who will have their account limits removed</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=non
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>... error messages ...</error>
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=non
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
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Recurring Reset
{% endanchor %}

A recurring reset will allow you to periodically reset a subusers credits to a number you specify. This can be either daily, weekly or monthly.

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
            <em>recurring</em>
         </td>
         <td>The task required to set the recurring reset</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser you will be applying a recurring reset to</td>
      </tr>
      <tr>
         <td>credits</td>
         <td>Yes</td>
         <td>Must be an integer and greater than 0</td>
         <td>The number of credits the customer subuser will be reset to</td>
      </tr>
      <tr>
         <td>period</td>
         <td>Yes</td>
         <td>Must be either daily, weekly, or monthly</td>
         <td>How often you want SendGrid to reset your customer subusers credits</td>
      </tr>
      <tr>
         <td>startdate</td>
         <td>No</td>
         <td>Date must be in YYYY-mm-dd format</td>
         <td>The date you want to start resetting the customer subusers credits</td>
      </tr>
      <tr>
         <td>enddate</td>
         <td>No</td>
         <td>Date must be in YYYY-mm-dd format</td>
         <td>The date you want to stop resetting the customer subusers credits</td>
      </tr>
      <tr>
         <td>initial_credits</td>
         <td>No</td>
         <td>Must be an integer greater than 0</td>
         <td>The number of credits you initially want the account reset to. If this is not set, the credits will be reset using the credits parameter</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=recurring&credits=200&period=dail
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>... error messages ...</error>
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=recurring&credits=200&period=dail
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
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Total Credits
{% endanchor %}

Set a subusers credits to a specified amount.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <td>Parameter</td>
         <td>Required</td>
         <td>Requirements</td>
         <td>Description</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>total</em>
         </td>
         <td>Set the credits to the specified amount</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who will have their credits updated</td>
      </tr>
      <tr>
         <td>credits</td>
         <td>Yes</td>
         <td>Must be an integer and greater than 0</td>
         <td>The total number of credits the customer subuser will be reset to</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=total&credits=20
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>... error messages ...</error>
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=total&credits=20
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
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Increment Credits
{% endanchor %}

Increment a subusers credits by a specified amount.

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
            <em>increment</em>
         </td>
         <td>Increment the credits by the specified amount</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who will have their credits incremented</td>
      </tr>
      <tr>
         <td>credits</td>
         <td>Yes</td>
         <td>Must be an integer and greater than 0</td>
         <td>The total number of credits the customer subuser will be incremented by</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=increment&credits=20
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>... error messages ...</error>
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=increment&credits=20
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
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Decrement Credits
{% endanchor %}

Decrement a subusers credits by a specified amount.

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
            <em>increment</em>
         </td>
         <td>Decrement the credits by the specified amount</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser who will have their credits decremented</td>
      </tr>
      <tr>
         <td>credits</td>
         <td>Yes</td>
         <td>Must be an integer and greater than 0</td>
         <td>The total number of credits the customer subuser will be decremented by</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=decrement&credits=20
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><message>success</message></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>... error messages ...</error>
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=limit&user=exampleexampexample@example.com&task=decrement&credits=20
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
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}
