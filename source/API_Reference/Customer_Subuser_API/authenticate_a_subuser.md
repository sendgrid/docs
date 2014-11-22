---
layout: page
weight: 0
title: Authenticate a Subuser
navigation:
   show: true
---

Authenticate a subuser on your website before displaying their account information so that you can have users manage their SendGrid account on your website.


{% parameters auth %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' %}
 {% parameter 'password' 'Yes' 'Password the subuser is attempting' %}
{% endparameters %}


{% apiexample auth POST https://api.sendgrid.com/apiv2/customer.auth api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&password=subuser_password_attempt %}
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
