---
layout: page
weight: 0
title: Account Overview
navigation:
   show: true
---

View general account information regarding your customers, including billing cycle, current billing cycle, credit usage, package, overage credits, etc.

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
            <em>overview</em>
            .
         </td>
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


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=overview&user=customer@example.com %}
  {% response json %}
{
  "reputation": "100",
  "requests": "500000",
  "package": "Silver Package",
  "credits_allowed": "50000",
  "credits_used": "100000",
  "credits_remain": 0,
  "credits_overage": "50000",
  "billing_start_date": "2010-08-30",
  "billing_end_date": "2010-09-29",
  "billing_process_date": "2010-09-30"
}
  {% endresponse %}
  {% response xml %}
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

  {% endresponse %}
{% endapiexample %}
