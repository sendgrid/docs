---
layout: page
weight: 0
title: Recipients
navigation:
  show: true
---

This module allows you to manage which lists are assigned to marketing email.

{% anchor h2 %}
add 
{% endanchor %}

Assign a List to a Marketing Email.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>list</td>
         <td>Yes</td>
         <td>None</td>
         <td>The name of the list to assign to the marketing email</td>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>None</td>
         <td>The name of the marketing email</td>
      </tr>
   </tbody>
</table>

{% apiexample add POST https://api.sendgrid.com/api/newsletter/recipients/add name=SendGrid%20NL%20Test2&list=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

* * * * *

{% anchor h2 %}
get 
{% endanchor %}

Get all lists assigned to a particular marketing email

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>None</td>
         <td>The name of the marketing email for which to retrieve lists.</td>
      </tr>
   </tbody>
</table>

{% apiexample get POST https://api.sendgrid.com/api/newsletter/recipients/get name=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "list": "Training Contacts"
  }
]
  {% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<lists>
   <list>
      <list>Training Contacts</list>
   </list>
</lists>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
delete 
{% endanchor %}

Remove assigned lists from marketing email

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>Must be an existing marketing email</td>
         <td>To marketing email from which the list will be unassigned.</td>
      </tr>
      <tr>
         <td>list</td>
         <td>Yes</td>
         <td>Must be an existing Recipient List.</td>
         <td>Remove this list from the marketing email</td>
      </tr>
   </tbody>
</table>

{% apiexample delete POST https://api.sendgrid.com/api/newsletter/recipients/delete name=SendGrid%20NL%20Test1&list=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
