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


{% parameters create %}
 {% parameter 'category' 'Yes' 'None' 'The name that will be used for the Category being created.' %}
{% endparameters %}


{% apiexample create POST https://api.sendgrid.com/api/newsletter/category/create api_user=your_sendgrid_username&api_key=your_sendgrid_password&category=CATEGORY %}
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

{% anchor h2 %}
add 
{% endanchor %}

Assign a Category to an existing Marketing Email.


{% parameters add %}
 {% parameter 'category' 'Yes' 'Must be an existing Category.' 'The Category that will be added to the marketing email.' %}
 {% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'The Marketing Email to which the categories will be added.' %}
{% endparameters %}


{% apiexample add POST https://api.sendgrid.com/api/newsletter/category/add api_user=your_sendgrid_username&api_key=your_sendgrid_password&category=CATEGORY&name=NEWSLETTER %}
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

{% anchor h2 %}
remove 
{% endanchor %}

Remove specific categories, or all categories from a Marketing Email.\\


{% parameters remove %}
 {% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'The Marketing Email that will have Category(ies) deleted from it.' %}
 {% parameter 'category' 'No' 'Must be an existing category currently added to the Marketing Email' 'Remove the Category with this name. If the category is not specified. all categories will be deleted from the Marketing Email.' %}
{% endparameters %}


{% apiexample remove POST https://api.sendgrid.com/api/newsletter/category/remove api_user=your_sendgrid_username&api_key=your_sendgrid_password&category=CATEGORY&name=NEWSLETTER %}
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

{% anchor h2 %}
list 
{% endanchor %}

List all categories.


{% parameters list %}
 {% parameter 'category' 'No' 'Must be an existing Category' 'Search to see if a specific Category exists rather than a list of all Categories.' %}
{% endparameters %}


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
