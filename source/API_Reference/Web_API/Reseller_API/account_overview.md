---
layout: page
weight: 0
title: Account Overview
navigation:
   show: true
---

View general account information regarding your customers, including billing cycle, current billing cycle, credit usage, package, overage credits, etc.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>overview</em> .' 'The task that allows us to present the customers information.' %}
 {% parameter 'user' 'Yes' 'Customer that is registered under your account.' 'The customer' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=overview&user=eexampexample@example.com %}
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
