---
layout: page
weight: 0
title: Pending Account Changes
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

Retrieve pending update information for users that have scheduled upgrades to their account.

* * * * *

{% anchor h2 %}
List Pending Changes 
{% endanchor %}

Returns all of the users who have pending changes within your account.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>list</em>
            .
         </td>
      </tr>
      <tr>
         <td>username</td>
         <td>No</td>
         <td>Optional search parameter.</td>
      </tr>
      <tr>
         <td>type</td>
         <td>No</td>
         <td>Must be either upgrade, downgrade, close. Optional search parameter.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.pending.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=lis
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><pending><user><username>user4</username><type>Account Upgrade</type><current>Main Reseller - Silver Package</current><update>Main Reseller - Gold Package</update><date>2010-09-30</date><ips><ip>255.255.255.0</ip><ip>255.255.254.0</ip></ips><ip_groups></ip_groups></user><user><username>user5</username><type>Account Downgrade</type><current>Main Reseller - Gold Package</current><update>Main Reseller - Basic Package</update><date>2010-10-07</date><ips></ips><ip_groups><ip_group>Reseller Group</ip_group></ip_groups></user></pending></result>
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.pending.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=lis
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
{"username":"user4","type":"Account Upgrade","current":"Main Reseller - Silver Package","update":"Main Reseller - Gold Package","ip_groups":[],"ips":["255.255.255.0","255.255.254.0"],"date":"2010-09-30"},{"username":"user5","type":"Account Downgrade","current":"Main Reseller - Gold Package","update":"Main Reseller - Basic Package","ip_groups":["Reseller Group"],"ips":[],"date":"2010-10-07"}
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
Delete Pending Changes 
{% endanchor %}

Cancel/Revert a pending change.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>delete</em>
            .
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be an User under your account.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.pending.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&user=customer@example.com
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.pending.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&user=customer@example.com
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
Immediate Upgrade 
{% endanchor %}

Once an upgrade happens, an invoice is generated for that user. If it's a free user to a paid account, the full price for that upgrade will be created. If it's in between billing periods, a prorated discount will be applied to the invoice.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>immediate_upgrade</em>
            .
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be an User under your account.</td>
      </tr>
      <tr>
         <td>package</td>
         <td>Yes</td>
         <td>The name of the package you will be upgrading the User to.</td>
      </tr>
      <tr>
         <td>ip[]</td>
         <td>Maybe Yes</td>
         <td>If the package you are upgrading your user to requires a whitelabel and/or a unique IP, you must assign a free IP to this user.</td>
      </tr>
      <tr>
         <td>ip_group[]</td>
         <td>Maybe Yes</td>
         <td>If the package you are upgrading your user to does not require an IP or whitelabel, you must place them in an IP group.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_upgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_upgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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
Immediate Downgrade 
{% endanchor %}

Once a downgrade happens, an invoice is generated for that user. Free customers are not allowed to downgrade.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>immediate_downgrade</em>
            .
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be an User under your account.</td>
      </tr>
      <tr>
         <td>package</td>
         <td>Yes</td>
         <td>The name of the package you will be downgrading the User to.</td>
      </tr>
      <tr>
         <td>ip[]</td>
         <td>Optional</td>
         <td>If the package you are downgrading your user to requires a whitelabel and/or a unique IP, you may assign a free IP to this customer using your assigned IPs in supplement from SendGrid.</td>
      </tr>
      <tr>
         <td>ip_group[]</td>
         <td>Optional</td>
         <td>If the package you are downgrading your user to does not require an IP or whitelabel, you may place them in an IP group.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_downgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_downgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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
Immediate Close 
{% endanchor %}

Close or revert an account to a free user immediately. An invoice is generated for that user with the new package price (if no overages are incurred, an invoice with zero amount due is generated.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>immediate_close</em>
            .
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be an customer under your account.</td>
      </tr>
      <tr>
         <td>ip_group[]</td>
         <td>No</td>
         <td>Define an ip group you will place the user into once the customers account is closed.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_close&user=customer@example.com&ip_group[]=Reseller Grou
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_close&user=customer@example.com&ip_group[]=Reseller Grou
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
Scheduled Upgrade 
{% endanchor %}

Apply an upgrade at the end of the user's billing cycle. Once an upgrade happens, an invoice is generated for that user with the new package price. Prorated charges do not apply here.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>scheduled_upgrade</em>
            .
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be an User under your account.</td>
      </tr>
      <tr>
         <td>package</td>
         <td>Yes</td>
         <td>The name of the package you will be upgrading the User to.</td>
      </tr>
      <tr>
         <td>ip[]</td>
         <td>Maybe Yes</td>
         <td>If the package you are upgrading your user to requires a whitelabel and/or a unique IP, you must assign a free IP to this user.</td>
      </tr>
      <tr>
         <td>ip_group[]</td>
         <td>Maybe Yes</td>
         <td>If the package you are upgrading your user to does not require an IP or whitelabel, you must place them in an IP group.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_upgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_upgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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
Scheduled Downgrade 
{% endanchor %}

Apply a downgrade at the end of the user's billing cycle. Once a downgrade happens, an invoice is generated for that user with the new package price. Prorated charges do not apply here.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>scheduled_downgrade</em>
            .
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be an User under your account.</td>
      </tr>
      <tr>
         <td>package</td>
         <td>Yes</td>
         <td>The name of the package you will be downgrading the User to.</td>
      </tr>
      <tr>
         <td>ip[]</td>
         <td>Maybe Yes</td>
         <td>If the package you are upgrading your user to requires a whitelabel and/or a unique IP, you must assign a free IP to this user.</td>
      </tr>
      <tr>
         <td>ip_group[]</td>
         <td>Maybe Yes</td>
         <td>If the package you are upgrading your user to does not require an IP or whitelabel, you must place them in an IP group.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_downgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_downgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Grou
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
Scheduled Close 
{% endanchor %}

Close or revert an account to a free user at the end of the user's billing cycle. Once a closure happens, an invoice is generated for that user with the new package price (if no overages are incurred, an invoice with zero amount due is generated.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>scheduled_close</em>
            .
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be an User under your account.</td>
      </tr>
      <tr>
         <td>ip_group[]</td>
         <td>No</td>
         <td>Define an ip group you will place the user into once the customers account is closed.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_close&user=customer@example.com&ip_group[]=Reseller Grou
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_close&user=customer@example.com&ip_group[]=Reseller Grou
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
