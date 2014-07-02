---
layout: page
weight: 0
title: Marketing Emails
navigation:
  show: true
---

This endpoint allows you to add, view, or remove marketing emails.

{% anchor h2 %}
add 
{% endanchor %}

Create a new Marketing Email.

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
         <td>identity</td>
         <td>Yes</td>
         <td>Must be an existing Identity</td>
         <td>The Identity that will be used for the Marketing Email being created.</td>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>None</td>
         <td>The name that will be used for the Marketing Email being created.</td>
      </tr>
      <tr>
         <td>subject</td>
         <td>Yes</td>
         <td>None</td>
         <td>The subject that will be used for the Marketing Email being created.</td>
      </tr>
      <tr>
         <td>text</td>
         <td>Yes</td>
         <td>None</td>
         <td>The text portion of the Marketing Email being created.</td>
      </tr>
      <tr>
         <td>html</td>
         <td>Yes</td>
         <td>None</td>
         <td>The html portion of the Marketing Email being created.</td>
      </tr>
   </tbody>
</table>


{% apiexample create POST https://api.sendgrid.com/api/newsletter/add identity=Sender_Address&name=SendGrid_Test&subject=testsubject&text=testtextbody&html=%3Chtml%3E%3Cp%3Etest_html_body%3C%2Fp%3E%3C%2Fhtml%3E&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Edit an existing Marketing Email.

<table class="table table-bordered table-striped">
   <tr>
      <th>Parameter</th>
      <th>Required</th>
      <th>Requirements</th>
      <th>Description</th>
   </tr>
   <td>name</td>
   <td>Yes</td>
   <td>Must be an existing Identity</td>
   <td>The name of the Marketing Email being updated.</td>
</table>

{% apiexample edit POST https://api.sendgrid.com/api/newsletter/edit identity=Sender_Address&name=SendGrid_Edit_Test&newname=new_name_test&subject=test_subject&text=test_text&html=%3Chtml%3E%3Cp%3ETest_html_text%3C%2Fp%3E%3C%2Fhtml%3E&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Retrieve the contents of an existing Marketing Email.

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
         <td>Retrieve the content of an existing Marketing Email.</td>
      </tr>
   </tbody>
</table>


{% apiexample get POST https://api.sendgrid.com/api/newsletter/get name=SendGrid_Test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "can_edit": true,
  "name": "SendGrid NL Test",
  "text": null,
  "newsletter_id": 38074,
  "total_recipients": 1,
  "html": null,
  "type": "html",
  "date_schedule": null,
  "identity": "d22de3a53fac1abef944c80c19032c2c",
  "subject": null
}
  {% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<newsletter>
   <can_edit>True</can_edit>
   <name>SendGrid NL Test</name>
   <text/>
   <newsletter_id>38074</newsletter_id>
   <total_recipients>1</total_recipients>
   <type>html</type>
   <date_schedule/>
   <identity>d22de3a53fac1abef944c80c19032c2c</identity>
   <subject/>
</newsletter>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
list 
{% endanchor %}

Retrieve a list of all existing Marketing Email.

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
         <td>No</td>
         <td>Must be an existing Marketing Email</td>
         <td>Search to see if a specific Marketing Email exists rather than a list of all Marketing Emails.</td>
      </tr>
   </tbody>
</table>


{% apiexample list POST https://api.sendgrid.com/api/newsletter/list &api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "name": "Just Testing",
    "newsletter_id": 560308
  },
  {
    "name": "LSRC",
    "newsletter_id": 560869
  },
  {
    "name": "LSRC test",
    "newsletter_id": 560908
  },
  {
    "name": "Test",
    "newsletter_id": 38074
  }
]
  {% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<newsletters>
   <newsletter>
      <name>Just Testing</name>
      <newsletter_id>560308</newsletter_id>
   </newsletter>
   <newsletter>
      <name>LSRC</name>
      <newsletter_id>560869</newsletter_id>
   </newsletter>
   <newsletter>
      <name>LSRC test</name>
      <newsletter_id>560908</newsletter_id>
   </newsletter>
   <newsletter>
      <name>Test</name>
      <newsletter_id>38074</newsletter_id>
   </newsletter>
</newsletters>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
delete 
{% endanchor %}

Remove an existing Marketing Email.

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
         <td>Remove the Marketing Email with this name.</td>
      </tr>
   </tbody>
</table>


{% apiexample delete POST https://api.sendgrid.com/api/newsletter/delete name=SendGrid_Test1&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
