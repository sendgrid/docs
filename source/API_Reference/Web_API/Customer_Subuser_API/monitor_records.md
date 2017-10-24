---
layout: page
weight: 400
title: Monitor Records
navigation:
   show: true
---

Monitor records will send samples from one or more subusers at a frequency you set.

The first step is to create a Monitor Record. Once the monitor record has been created, you can append a subuser to a monitor record. Multiple subusers can be appended to a single monitor record.

{% anchor h2 %}
Create Monitor Record 
{% endanchor %}
Create a new monitor record on the account.

{% parameters create %}
 {% parameter task Yes 'Must be set to <code>create</code>' 'Task to create a monitor record' %}
 {% parameter name Yes 'Must be unique to account. Can not be more than 255 characters' 'Unique name to identify this monitor record' %}
 {% parameter email Yes 'Must be in email format' 'Email destination to send the sample to' %}
 {% parameter frequency Yes 'Unsigned integer' 'Interval of emails between samples' %}
{% endparameters %}

{% apiexample create POST https://api.sendgrid.com/apiv2/customer.monitor api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=create&name=myMonitor&email=exampleexampexample@example.com&frequency=1000 %}
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
Edit Monitor Record 
{% endanchor %}
Edit an existing Monitor record.

{% parameters edit %}
 {% parameter task Yes 'Must be set to <code>edit<code>' 'Task to edit a monitor record' %}
 {% parameter name Yes 'Existing monitor record name' 'The monitor record we are going to edit' %}
 {% parameter new_name No 'Must be unique to account. Can not be more than 255 characters' 'New monitor record name' %}
 {% parameter new_email No 'Must be in email format' 'The new email destination to send the email sample to' %}
 {% parameter new_frequency No 'Unsigned integer' 'The new intervals of emails between samples' %}
{% endparameters %}

{% apiexample edit POST https://api.sendgrid.com/apiv2/customer.monitor api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=edit&name=myMonitor&new_name=updatedMonitor&new_email=exampleexampexample@example.com&new_frequency=100 %}
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
Delete Monitor Record 
{% endanchor %}
Deleting a monitor record will remove it from SendGrid's system. Only monitor records with no subusers attached can be deleted.

{% parameters delete %}
 {% parameter task Yes 'Must be set to <code>delete<code>' 'Task to remove a monitor record' %}
 {% parameter name Yes 'An existing monitor record' 'The unique name to identify this monitor record' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/customer.monitor api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&name=recordToDelete %}
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
List All Monitor Records 
{% endanchor %}
List all available monitor records on your account.


{% parameters list %}
 {% parameter task Yes 'Must be set to <code>list</code>' 'Task to list all monitor records' %}
{% endparameters %}


{% apiexample list POST https://api.sendgrid.com/apiv2/customer.monitor api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=list %}
  {% response json %}
[
  {
    "name": "sampleNameA",
    "email": "exampleexampexample@example.com",
    "frequency": "1000",
    "users": [

    ]
  },
  {
    "name": "sampleNameB",
    "email": "exampleexampexample@example.com",
    "frequency": "10000",
    "users": [
      "user1@example.com",
      "exampexample@example.comom"
    ]
  }
]
  {% endresponse %}
  {% response xml %}
<monitors>
   <monitor>
      <name>sampleNameA</name>
      <email>exampleexampexample@example.com</email>
      <frequency>1000</frequency>
      <users/>
   </monitor>
   <monitor>
      <name>sampleNameB</name>
      <email>exampleexampexample@example.com</email>
      <frequency>10000</frequency>
      <users>
         <user>user1@example.com</user>
         <user>exampexample@example.comom</user>
      </users>
   </monitor>
</monitors>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Append a Subuser to a Monitor Record 
{% endanchor %}
Append a subuser to an existing monitor record.


{% parameters append %}
 {% parameter task Yes 'Must be set to <code>append</code>' 'Task to append a monitor record to a subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser we will append a monitor record to' %}
 {% parameter name Yes 'Must be a valid existing monitor record' 'The name of the monitor record we will be adding the subuser to' %}
{% endparameters %}


{% apiexample append POST https://api.sendgrid.com/apiv2/customer.monitor api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=append&name=myMonitor&user=exampleexampexample@example.com %}
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
Detach A Monitor Record From A Subuser 
{% endanchor %}
Detach a subuser from a monitor record.


{% parameters detach %}
 {% parameter task Yes 'Must be set to <code>detach</code>' 'Task required to detach a monitor record from a subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'The subuser being removed from the monitor record' %}
 {% parameter name No 'Must be a valid existing monitor record' 'The name of the monitor record we will be removing the subuser from. If not provided, subuser will be removed from all monitor records' %}
{% endparameters %}


{% apiexample detach POST https://api.sendgrid.com/apiv2/customer.monitor api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=detach&user=exampleexampexample@example.com %}
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
