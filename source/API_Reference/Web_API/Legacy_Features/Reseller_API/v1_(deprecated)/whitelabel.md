---
layout: page
weight: 0
title: Whitelabel
seo:
  robots: NOINDEX, FOLLOW
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

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=whitelabel&task=lis
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
whitelabels><whitelabel><mail_domain>email.sendgrid.com</mail_domain><url_domain>email.sendgrid.com</url_domain></whitelabel><whitelabel><mail_domain>email.example.com</mail_domain><url_domain>email.example.com</url_domain></whitelabel></whitelabels
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=whitelabel&amp;task=lis
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
[{"mail_domain":"email.sendgrid.com","url_domain":"email.sendgrid.com"},{"mail_domain":"email.example.com","url_domain":"email.example.com"}]
{% endcodeblock %}

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

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=whitelabel&task=append&user=eexampexample@example.com&mail_domain=email.sendgrid.com
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

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=whitelabel&task=append&user=eexampexample@example.com&mail_domain=email.sendgrid.com
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
