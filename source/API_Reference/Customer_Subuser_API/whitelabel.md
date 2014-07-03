---
layout: page
weight: 0
title: Whitelabel
navigation:
   show: true
---
With the whitelabel API calls you will be able to retrieve whitelabel settings related to your account.

* * * * *

{% anchor h2 %}
List 
{% endanchor %}

{% parameters list %}
 {% parameter 'task' 'Yes' 'Must be set to *list*' %}
{% endparameters %}


{% apiexample list POST https://api.sendgrid.com/apiv2/customer.whitelabel api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=list %}
  {% response json %}
[
  {
    "mail_domain": "email.sendgrid.com",
    "url_domain": "email.sendgrid.com"
  },
  {
    "mail_domain": "email.example.com",
    "url_domain": "email.example.com"
  }
]
  {% endresponse %}
  {% response xml %}
<whitelabels>
   <whitelabel>
      <mail_domain>email.sendgrid.com</mail_domain>
      <url_domain>email.sendgrid.com</url_domain>
   </whitelabel>
   <whitelabel>
      <mail_domain>email.example.com</mail_domain>
      <url_domain>email.example.com</url_domain>
   </whitelabel>
</whitelabels>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Append 
{% endanchor %}

{% parameters append %}
 {% parameter 'task' 'Yes' 'Must be set to *append*' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' %}
 {% parameter 'mail_domain' 'Yes' 'Whitelabel mail_domain used to append a whitelabel record to a subuser' %}
{% endparameters %}


{% apiexample append POST https://api.sendgrid.com/apiv2/customer.whitelabel api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=append&user=example@example.com&mail_domain=email.sendgrid.com %}
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
