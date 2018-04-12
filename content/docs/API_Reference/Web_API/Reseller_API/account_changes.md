---
layout: page
weight: 0
title: Account Changes
navigation:
   show: true
---

* * * * *

<page-anchor el="h2">
Immediate Upgrade
</page-anchor>

Upgrading a user generates an invoice. If the user is upgrading from a free to a paid account, the invoice is for the full price of the account. If the upgrade happens between billing periods, the user gets a prorated discount.

{% parameters upgrade %}
 {% parameter 'task' 'Yes' 'Must be set to <em>immediate_upgrade</em> .' %}
 {% parameter 'user' 'Yes' 'Must be a User under your account.' 'The customers username.' %}
 {% parameter 'package' 'Yes' 'The name of the package you will be upgrading the User to.' %}
 {% parameter 'ip[]' 'No' 'If the package you are upgrading your user to requires a whitelabel and/or a unique IP, you must assign a free IP to this user.' %}
 {% parameter 'ip_group[]' 'No' 'If the package you are upgrading your user to does not require an IP or whitelabel, you must place them in an IP group.' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample upgrade POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_upgrade&package=Basic Package&user=eexampexample@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Immediate Downgrade
</page-anchor>

Once a downgrade happens, an invoice is generated for that user. Free customers are not allowed to downgrade.


{% parameters downgrade %}
 {% parameter 'task' 'Yes' 'Must be set to <em>immediate_downgrade</em> .' %}
 {% parameter 'user' 'Yes' 'Must be a User under your account.' 'The customers username.' %}
 {% parameter 'package' 'Yes' 'The name of the package you will be downgrading the User to.' %}
 {% parameter 'ip[]' 'No' 'If the package you are downgrading your user to requires a whitelabel and/or a unique IP, you may assign a free IP to this customer using your assigned IPs in supplement from SendGrid.' %}
 {% parameter 'ip_group[]' 'No' 'If the package you are downgrading your user to does not require an IP or whitelabel, you may place them in an IP group.' %}
{% endparameters %}


{% apiexample downgrade POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_downgrade&package=Basic Package&user=eexampexample@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Immediate Close
</page-anchor>

Close or revert an account to a free user immediately. An invoice is generated for that user with the new package price (if no overages are incurred, an invoice with zero amount due is generated.


{% parameters close %}
 {% parameter 'task' 'Yes' 'Must be set to <em>immediate_close</em> .' %}
 {% parameter 'user' 'Yes' 'Must be an customer under your account.' %}
 {% parameter 'ip_group[]' 'No' 'Define an IP Group to place the user into once the customers account is closed.' %}
{% endparameters %}


{% apiexample close POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_close&user=eexampexample@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
