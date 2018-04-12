---
layout: page
weight: 0
title: Whitelabel
navigation:
   show: true
---

With the whitelabel API calls you will be able to retrieve whitelabel settings related to your account.

* * * * *

<page-anchor el="h2">
List
</page-anchor>


{% parameters get %}
 {% parameter 'list' 'Yes' 'Must be set to <em>list</em>' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>whitelabel</em>' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=whitelabel&task=list %}
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

<page-anchor el="h2">
Append
</page-anchor>


{% parameters append %}
 {% parameter 'list' 'Yes' 'Must be set to <em>append</em>' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' %}
 {% parameter 'mail_domain' 'Yes' 'Whitelabel mail_domain used to append a whitelabel record to a subuser' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>whitelabel</em>' %}
{% endparameters %}


{% apiexample append POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=whitelabel&task=append&user=eexampexample@example.com&mail_domain=email.sendgrid.com=m %}
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
