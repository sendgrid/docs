---
layout: page
weight: 0
title: Lists
navigation:
  show: true
---

This endpoint allows you to manage and create Recipient Lists associated with the Marketing Email feature.


{% anchor h2 %}
add 
{% endanchor %}

Create a new Recipient List.

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
         <td>Create a Recipient List with this name.</td>
      </tr>
      <tr>
         <td>name</td>
         <td>No</td>
         <td>None</td>
         <td>Specify the column name for the 'name' associated with email addresses.</td>
      </tr>
      <tr>
         <td>*columnname*</td>
         <td>No</td>
         <td>None</td>
         <td>Specify additional column names. The format needs to be    =columnname[*columnname*] will be the replacement tag.</td>
      </tr>
   </tbody>
</table>


{% apiexample add POST https://api.sendgrid.com/api/newsletter/lists/add list=test789&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
edit 
{% endanchor %}

Rename a Recipient List.

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
         <td>Must be an existing Recipient List.</td>
         <td>This is the name of the Recipient List to be renamed.</td>
      </tr>
      <tr>
         <td>newlist</td>
         <td>Yes</td>
         <td>None</td>
         <td>Specify the new name for the Recipient List.</td>
      </tr>
   </tbody>
</table>


{% apiexample edit POST https://api.sendgrid.com/api/newsletter/lists/edit list=test7890&newlist=test567&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

List all Recipient Lists on your account, or check if a particular List exists.

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
         <td>No</td>
         <td>None</td>
         <td>Check for this particular list. (To list all Recipient Lists on your account exclude this parameter)</td>
      </tr>
   </tbody>
</table>


{% apiexample get POST https://api.sendgrid.com/api/newsletter/lists/get list=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "list": "test"
  }
]
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<lists>
   <list>
      <list>test</list>
   </list>
</lists>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
delete 
{% endanchor %}

Remove a Recipient List from your account.

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
         <td>Must be an existing Recipient List.</td>
         <td>Remove this Recipient List.</td>
      </tr>
   </tbody>
</table>


{% apiexample delete POST https://api.sendgrid.com/api/newsletter/lists/delete list=test5678&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
