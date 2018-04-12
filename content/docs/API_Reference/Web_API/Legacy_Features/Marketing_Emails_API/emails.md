---
layout: page
weight: 0
title: Emails
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}


This endpoint allows you to manage entries in your Recipient Lists.

<page-anchor el="h2">
add
</page-anchor>

Add one or more emails to a Recipient List.

{% parameters add%}

  {% parameter list Yes 'Must be an existing Recipient List.' 'The list which you are adding email addresses to.' %}
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
     -d 'data={"email":"example@example.com","name":"contactName"}'{% endcodeblock %}

Add an email recipient with multiple data fields:

{% codeblock %}curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json \
     -d 'api_user=your_sendgrid_username' \
     -d 'api_key=your_sendgrid_password' \
     -d 'list=my_list' \
     -d 'data={"email":"example@example.com","name":"Oscar","city":"New York","street":"123 Sesame St"}'{% endcodeblock %}

Add multiple email recipients to a list:

{% codeblock %}curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json \
     -d 'api_user=your_sendgrid_username' \
     -d 'api_key=your_sendgrid_password' \
     -d 'list=my_list' \
     -d 'data[]={"email":"addresseexampexample@example.com","name":"contactName1"}' \
     -d 'data[]={"email":"address2@domain.com","name":"contactName2"}'{% endcodeblock %}

* * * * *

<page-anchor el="h2">
get
</page-anchor>

Get the email addresses and associated fields for a Recipient List.

{% parameters get %}

  {% parameter list Yes 'Must be an existing Recipient List.' 'The list which you are adding email addresses too.' %}
  {% parameter email No 'Must be an email address or list of addresses.' 'Optional email addresses to search for in the Recipient List.' %}
  {% parameter unsubscribed No 'Must be set to 1' 'To retrieve a list of unsubscribed email addresses' %}
  {% parameter limit No 'Max 1000' 'The number of addresses to return' %}
  {% parameter offset No 'Must be an integer' 'The offset of addresses to get results' %}
{% endparameters %}

{% apiexample get GET https://api.sendgrid.com/api/newsletter/lists/email/get list=Test&limit=100&offset=0&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "email": "example@example.com",
    "name": ""
  }
]
  {% endresponse %}
  {% response xml %}
<emails>
   <email>
      <email>example@example.com</email>
      <name> </name>
   </email>
</emails>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
count
</page-anchor>

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

<page-anchor el="h2">
delete
</page-anchor>

Remove one or more emails from a Recipient List.

{% parameters delete %}

  {% parameter list Yes 'Must be an existing Recipient List.' 'The list which you are removing email addresses from.' %}

  {% parameter email[] Yes 'Must be an email or emails in the Recipient List.' 'Specify the email address or email addresses you wish to remove from the specified Recipient List. May list multiple addresses with multiple <code>email[]</code> parameters' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/newsletter/lists/email/delete list=Test&email[]=example@gmail.com&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
