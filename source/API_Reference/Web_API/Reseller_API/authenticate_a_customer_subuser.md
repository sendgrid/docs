---
layout: page
weight: 0
title: Authenticate a Customer Subuser
navigation:
   show: true
---

Authenticate a customer subuser on your website before displaying their account information so that you can have users manage their SendGrid account on your website completely.


{% parameters auth %}
 {% parameter 'user' 'Yes' 'Customer subuser that is registered under your account.' %}
 {% parameter 'password' 'Yes' 'Password the customer subuser submitted.' %}
{% endparameters %}


{% apiexample auth POST https://api.sendgrid.com/apiv2/reseller.subuserManage api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=exampleexampexample@example.com&password=theirsubmittedpassword&method=auth %}
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
