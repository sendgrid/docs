---
layout: page
weight: 0
title: Lists
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}


This endpoint allows you to manage and create Recipient Lists associated with the Marketing Email feature.

<page-anchor el="h2">
add
</page-anchor>

Create a new Recipient List.


{% parameters add %}
 {% parameter 'list' 'Yes' 'None' 'Create a Recipient List with this name.' %}
 {% parameter 'name' 'No' 'None' 'Specify the column name for the 'name' associated with email addresses.' %}
{% endparameters %}

{% apiexample add POST https://api.sendgrid.com/api/newsletter/lists/add list=test789&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

{% info %}
Additional columns may be added to a list at any time by specifying new column names when using the <a href="{{root_url}}/API_Reference/Web_API/Legacy_Features/Marketing_Emails_API/emails.html#-add">Email Add Endpoint</a>.
{% endinfo %}

* * * * *

<page-anchor el="h2">
edit
</page-anchor>

Rename a Recipient List.


{% parameters edit %}
 {% parameter 'list' 'Yes' 'Must be an existing Recipient List.' 'This is the name of the Recipient List to be renamed.' %}
 {% parameter 'newlist' 'Yes' 'None' 'Specify the new name for the Recipient List.' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/api/newsletter/lists/edit list=test7890&newlist=test567&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

<page-anchor el="h2">
get
</page-anchor>

List all Recipient Lists on your account, or check if a particular List exists.


{% parameters get %}
 {% parameter 'list' 'No' 'None' 'Check for this particular list. (To list all Recipient Lists on your account exclude this parameter)' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/api/newsletter/lists/get list=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "id": 1,
    "list": "test"
  }
]
  {% endresponse %}
  {% response xml %}
<lists>
   <list>
      <id>1</id>
      <list>test</list>
   </list>
</lists>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
delete
</page-anchor>

Remove a Recipient List from your account.


{% parameters delete %}
 {% parameter 'list' 'Yes' 'Must be an existing Recipient List.' 'Remove this Recipient List.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/api/newsletter/lists/delete list=test5678&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
