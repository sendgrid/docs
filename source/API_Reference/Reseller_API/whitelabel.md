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
         <td>list</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>list</em>
         </td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>whitelabel</em>
         </td>
      </tr>
   </tbody>
</table>



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
<?xml version="1.0" encoding="ISO-8859-1"?>

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
         <td>list</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>append</em>
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Subuser must be registered under your account</td>
      </tr>
      <tr>
         <td>mail_domain</td>
         <td>Yes</td>
         <td>Whitelabel mail_domain used to append a whitelabel record to a subuser</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>whitelabel</em>
         </td>
      </tr>
   </tbody>
</table>



{% apiexample append POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=whitelabel&task=append&user=customer@example.com&mail_domain=email.sendgrid.com=m %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
