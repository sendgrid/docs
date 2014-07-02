---
layout: page
weight: 0
title: Categories
navigation:
  show: true
---

This module allows you to create and manage categories within your Marketing Emails.


{% anchor h2 %}
create 
{% endanchor %}

Create a new Category.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description.</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>category</td>
         <td>Yes</td>
         <td>None</td>
         <td>The name that will be used for the Category being created.</td>
      </tr>
   </tbody>
</table>



{% apiexample create POST https://api.sendgrid.com/api/newsletter/category/create api_user=your_sendgrid_username&api_key=your_sendgrid_password&category=CATEGORY %}
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
add 
{% endanchor %}

Assign a Category to an existing Marketing Email.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>category</td>
         <td>Yes</td>
         <td>Must be an existing Category.</td>
         <td>The Category that will be added to the marketing email.</td>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>Must be an existing Marketing Email</td>
         <td>The Marketing Email to which the categories will be added.</td>
      </tr>
   </tbody>
</table>



{% apiexample add POST https://api.sendgrid.com/api/newsletter/category/add api_user=your_sendgrid_username&api_key=your_sendgrid_password&category=CATEGORY&name=NEWSLETTER %}
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
remove 
{% endanchor %}

Remove specific categories, or all categories from a Marketing Email.\\

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>Must be an existing Marketing Email</td>
         <td>The Marketing Email that will have Category(ies) deleted from it.</td>
      </tr>
      <tr>
         <td>category</td>
         <td>No</td>
         <td>Must be an existing category currently added to the Marketing Email</td>
         <td>Remove the Category with this name. If the category is not specified. all categories will be deleted from the Marketing Email.</td>
      </tr>
   </tbody>
</table>



{% apiexample remove POST https://api.sendgrid.com/api/newsletter/category/remove api_user=your_sendgrid_username&api_key=your_sendgrid_password&category=CATEGORY&name=NEWSLETTER %}
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
list 
{% endanchor %}

List all categories.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>category</td>
         <td>No</td>
         <td>Must be an existing Category</td>
         <td>Search to see if a specific Category exists rather than a list of all Categories.</td>
      </tr>
   </tbody>
</table>



{% apiexample list POST https://api.sendgrid.com/api/newsletter/category/list api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "category": "CATEGORY"
  },
  {
    "category": "CATEGORY2"
  }
]
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<categories>
   <category>
      <category>CATEGORY</category>
   </category>
   <category>
      <category>CATEGORY2</category>
   </category>
</categories>

  {% endresponse %}
{% endapiexample %}
