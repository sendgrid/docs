---
layout: page
weight: 0
title: Marketing Emails
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}


This endpoint allows you to add, view, or remove marketing emails.

<page-anchor el="h2">
add
</page-anchor>

Create a new Marketing Email.


{% parameters create %}
 {% parameter 'identity' 'Yes' 'Must be an existing Identity' 'The Identity (Sender Address) that will be used for the Marketing Email being created.' %}
 {% parameter 'name' 'Yes' 'None' 'The name that will be used for the Marketing Email being created.' %}
 {% parameter 'subject' 'Yes' 'None' 'The subject that will be used for the Marketing Email being created.' %}
 {% parameter 'text' 'Yes' 'None' 'The text portion of the Marketing Email being created.' %}
 {% parameter 'html' 'Yes' 'None' 'The html portion of the Marketing Email being created.' %}
{% endparameters %}


{% apiexample create POST https://api.sendgrid.com/api/newsletter/add identity=Sender_Address&name=SendGrid_Test&subject=testsubject&text=testtextbody&html=%3Chtml%3E%3Cp%3Etest_html_body%3C%2Fp%3E%3C%2Fhtml%3E&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
edit
</page-anchor>

Edit an existing Marketing Email.


{% parameters edit %}
 {% parameter 'identity' 'Yes' 'Must be an existing Identity' 'The Identity (Sender Address) that will be used for the Marketing Email being created.' %}
 {% parameter 'name' 'Yes' 'None' 'The name that will be used for the Marketing Email.' %}
 {% parameter 'newname' 'No' 'None' 'The new name that will be used for the Marketing Email.' %}
 {% parameter 'subject' 'Yes' 'None' 'The subject that will be used for the Marketing Email.' %}
 {% parameter 'text' 'Yes' 'None' 'The text portion of the Marketing Email.' %}
 {% parameter 'html' 'Yes' 'None' 'The html portion of the Marketing Email.' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/api/newsletter/edit identity=Sender_Address&name=SendGrid_Edit_Test&newname=new_name_test&subject=test_subject&text=test_text&html=%3Chtml%3E%3Cp%3ETest_html_text%3C%2Fp%3E%3C%2Fhtml%3E&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Retrieve the contents of an existing Marketing Email.


{% parameters get %}
 {% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'Retrieve the content of an existing Marketing Email.' %}
{% endparameters %}


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

<page-anchor el="h2">
list
</page-anchor>

Retrieve a list of all existing Marketing Email.


{% parameters list %}
 {% parameter 'name' 'No' 'Must be an existing Marketing Email' 'Search to see if a specific Marketing Email exists rather than a list of all Marketing Emails.' %}
{% endparameters %}


{% apiexample list POST https://api.sendgrid.com/api/newsletter/list name=SendGrid_Test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

<page-anchor el="h2">
delete
</page-anchor>

Remove an existing Marketing Email.


{% parameters delete %}
 {% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'Remove the Marketing Email with this name.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/api/newsletter/delete name=SendGrid_Test1&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
