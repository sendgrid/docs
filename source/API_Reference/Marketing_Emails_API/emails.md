---
layout: page
weight: 0
title: Emails
navigation:
  show: true
---

This endpoint allows you to manage entries in your Recipient Lists.

{% anchor h2 %}
add 
{% endanchor %}

Add one or more emails to a Recipient List.

{% parameters add%} 
  
  {% parameter list Yes 'Must be an existing Recipient List.' 'The list which you are adding email addresses too.' %}  
  {% parameter data Yes 'Must be a valid JSON string matching the required format. Limited to a 1000 entries maximum.' 'Specify the name, email address, and additional fields to add to the specified Recipient List.' %}
{% endparameters %}

{% apiexample add POST https://api.sendgrid.com/api/newsletter/lists/email/add list=Test&data=%7B%22email%22%3A%22example%40gmail.com%22%2C%22name%22%3A%22example%22%7D&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "inserted": 1
}
  {% endresponse %}
  {% response xml %}
<result>
   <inserted>1</inserted>
</result>

  {% endresponse %}
{% endapiexample %}

{% info %}
<code>email</code> and <code>name</code> are required and <em>must</em> be in the JSON string submitted in the data parameter. Further arbitrary keys may also be specified in the JSON string.
{% endinfo %}

### Examples

Add an email recipient to a list:

{% codeblock %}curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json \
     -d 'api_user=your_sendgrid_username' \
     -d 'api_key=your_sendgrid_password' \
     -d 'list=my_list' \
     -d 'data={"email":"address@domain.com","name":"contactName"}'{% endcodeblock %}

Add an email recipient with multiple data fields:

{% codeblock %}curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json \
     -d 'api_user=your_sendgrid_username' \
     -d 'api_key=your_sendgrid_password' \
     -d 'list=my_list' \
     -d 'data={"email":"grouch@trashcan.com","name":"Oscar","city":"New York","street":"123 Sesame St"}'{% endcodeblock %}

Add multiple email recipients to a list:

{% codeblock %}curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json \
     -d 'api_user=your_sendgrid_username' \
     -d 'api_key=your_sendgrid_password' \
     -d 'list=my_list' \
     -d 'data[]={"email":"address1@domain.com","name":"contactName1"}' \
     -d 'data[]={"email":"address2@domain.com","name":"contactName2"}'{% endcodeblock %}

* * * * *

{% anchor h2 %}
get 
{% endanchor %}

Get the email addresses and associated fields for a Recipient List.

{% parameters get %} 
  
  {% parameter list Yes 'Must be an existing Recipient List.' 'The list which you are adding email addresses too.' %}  
  {% parameter email No 'Must be an email address or list of addresses.' 'Optional email addresses to search for in the Recipient List.' %}
{% endparameters %}

{% apiexample get GET https://api.sendgrid.com/api/newsletter/lists/email/get list=Test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "email": "dominic.may@sendgrid.com",
    "name": ""
  }
]
  {% endresponse %}
  {% response xml %}
<emails>
   <email>
      <email>dominic.may@sendgrid.com</email>
      <name> </name>
   </email>
</emails>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
count 
{% endanchor %}

Retrieve the number of entries on a list.

{% parameters count %} 
  
  {% parameter list Yes 'Must be an existing Recipient List.' 'The list which you are adding email addresses too.' %}
{% endparameters %}

{% apiexample count GET https://api.sendgrid.com/api/newsletter/lists/email/count list=Test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "count": 2
}
  {% endresponse %}
  {% response xml %}
<result>
   <count>2</count>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
delete 
{% endanchor %}

Remove one or more emails from a Recipient List.

{% parameters delete %} 
  
  {% parameter list Yes 'Must be an existing Recipient List.' 'The list which you are adding email addresses too.' %}  
  {% parameter email Yes 'Must be an email or emails in the Recipient List.' 'Specify the email address or email addresses you wish to remove from the specified Recipient List.' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/newsletter/lists/email/delete list=Test&email=example%40gmail.com&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "removed": 1
}
  {% endresponse %}
  {% response xml %}
<result>
   <removed>1</removed>
</result>

  {% endresponse %}
{% endapiexample %}
