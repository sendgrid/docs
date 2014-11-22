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

To pull a list of all your exisiting Categories or to look to see if a specific Category exists use our [General Statistics API](https://sendgrid.com/docs/API_Reference/Web_API/Statistics/index.html#-Category-List).

* * * * *
