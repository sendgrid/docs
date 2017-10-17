---
layout: page
weight: 0
title: Account Overview
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Web_API/Reseller_API/account_overview.html) Reseller Account Overview page.  
{% endwarning %}

View general account information regarding your customers, including billing cycle, current billing cycle, credit usage, package, overage credits, etc.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>Must be set to *overview*.</td>
         <td>The task that allows us to present the customers information.</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer that is registered under your account.</td>
         <td>The customer</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=overview&user=customer@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <overview>
      <reputation>100</reputation>
      <requests>50000</requests>
      <package>Silver Package</package>
      <credits_allowed>50000</credits_allowed>
      <credits_used>100000</credits_used>
      <credits_remain>0</credits_remain>
      <credits_overage>50000</credits_overage>
      <billing_start_date>2010-08-30</billing_start_date>
      <billing_end_date>2010-09-29</billing_end_date>
      <billing_process_date>2010-09-30</billing_process_date>
   </overview>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>
        ... error messages ...
      </error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.account.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=overview&user=customer@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
"reputation":100,"requests":500000,"package":"Silver
Package","credits_allowed":50000,"credits_used":100000,"credits_remain":0,"credits_overage":50000,"billing_start_date":"2010-08-30","billing_end_date":"2010-09-29","billing_process_date":"2010-09-30"
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
