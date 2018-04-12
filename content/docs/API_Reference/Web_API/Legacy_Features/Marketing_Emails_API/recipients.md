---
layout: page
weight: 0
title: Recipients
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}


This module allows you to manage which lists are assigned to marketing email.

<page-anchor el="h2">
add
</page-anchor>

Assign a List to a Marketing Email.


{% parameters add %}
 {% parameter 'list' 'Yes' 'None' 'The name of the list to assign to the marketing email' %}
 {% parameter 'name' 'Yes' 'None' 'The name of the marketing email' %}
{% endparameters %}


{% apiexample add POST https://api.sendgrid.com/api/newsletter/recipients/add name=SendGrid%20NL%20Test2&list=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Get all lists assigned to a particular marketing email


{% parameters get %}
 {% parameter 'name' 'Yes' 'None' 'The name of the marketing email for which to retrieve lists.' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/api/newsletter/recipients/get name=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "list": "Training Contacts"
  }
]
  {% endresponse %}
  {% response xml %}
<lists>
   <list>
      <list>Training Contacts</list>
   </list>
</lists>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
delete
</page-anchor>

Remove assigned lists from marketing email


{% parameters delete %}
 {% parameter 'name' 'Yes' 'Must be an existing marketing email' 'To marketing email from which the list will be unassigned.' %}
 {% parameter 'list' 'Yes' 'Must be an existing Recipient List.' 'Remove this list from the marketing email' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/api/newsletter/recipients/delete name=SendGrid%20NL%20Test1&list=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
