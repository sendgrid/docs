---
layout: page
weight: 0
title: Customer Subuser Monitor Outgoing Email
navigation:
   show: true
---

Receive a sample of an outgoing message by a specific customer subuser.

The first step is to create a Monitor Record. Once the monitor record has been created, a reseller can append a monitor record to a customer subuser. Multiple customer subuser can be appended to a single monitor record.

{% anchor h2 %}
Create Monitor Record 
{% endanchor %}

Obtain a complete list of all customer subuser.

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
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>create</em>
         </td>
         <td>Create a monitor record</td>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>Name must be unique. Can't be more than 255 characters</td>
         <td>The unique name to identify this monitor record</td>
      </tr>
      <tr>
         <td>email</td>
         <td>Yes</td>
         <td>Must be in email format</td>
         <td>The email destination to send the email sample to</td>
      </tr>
      <tr>
         <td>frequency</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The frequency of emails to be sent out</td>
      </tr>
   </tbody>
</table>

{% apiexample create POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=monitor&task=create&name=myMonitor&email=example@example.com&frequency=1000 %}
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
Edit Monitor Record 
{% endanchor %}

Make modifications to an existing Monitor record.

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
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>edit</em>
         </td>
         <td>The task required to edit a monitor</td>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>The name of the previous monitor record</td>
         <td>The monitor record we are going to edit</td>
      </tr>
      <tr>
         <td>new_name</td>
         <td>No</td>
         <td>New name must be unique and can't be more than 255 characters</td>
         <td>The new monitor record name</td>
      </tr>
      <tr>
         <td>new_email</td>
         <td>No</td>
         <td>Must be in email format</td>
         <td>The new email destination to send the email sample to</td>
      </tr>
      <tr>
         <td>new_frequency</td>
         <td>No</td>
         <td>Must be an integer and greater than 0</td>
         <td>The new frequency of emails to be sent out</td>
      </tr>
   </tbody>
</table>

{% apiexample edit POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=monitor&task=edit&name=myMonitor&new_name=updatedMonitor&new_email=example@example.com&new_frequency=5 %}
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
Delete Monitor Record 
{% endanchor %}

Deleting a monitor record will remove it from SendGrid's system. **Make sure no users are currently using the monitor record when removing, or removal will fail.**

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
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>delete</em>
         </td>
         <td>The task required to remove a monitor</td>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>Must be a monitor record to remove</td>
         <td>The unique name to identify this monitor record</td>
      </tr>
   </tbody>
</table>

{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=monitor&task=delete&name=recordToDelet %}
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
List All Monitor Records 
{% endanchor %}

List all available monitor records a reseller has.

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
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>list</em>
         </td>
         <td>The task required to list all monitor records</td>
      </tr>
   </tbody>
</table>

{% apiexample list POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=monitor&task=list %}
  {% response json %}
[
  {
    "name": "sampleNameA",
    "email": "example@example.com",
    "frequency": "1000",
    "users": [

    ]
  },
  {
    "name": "sampleNameB",
    "email": "example@example.com",
    "frequency": "10000",
    "users": [
      "user1@example.com",
      "user2@example.com"
    ]
  }
]
  {% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<monitors>
   <monitor>
      <name>sampleNameA</name>
      <email>example@example.com</email>
      <frequency>1000</frequency>
      <users/>
   </monitor>
   <monitor>
      <name>sampleNameB</name>
      <email>example@example.com</email>
      <frequency>10000</frequency>
      <users>
         <user>user1@example.com</user>
         <user>user2@example.com</user>
      </users>
   </monitor>
</monitors>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Append A Customer Subuser To A Monitor Record 
{% endanchor %}

Append a monitor record to a existing record onto a customer subuser.

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
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>append</em>
         </td>
         <td>The task required to append a monitor record to a customer subuser</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The user we will append a monitor record to</td>
      </tr>
      <tr>
         <td>name</td>
         <td>No</td>
         <td>Must be a valid monitor record</td>
         <td>The name of the monitor record we will be appending</td>
      </tr>
   </tbody>
</table>

{% apiexample append POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=monitor&task=append&name=myMonitor&user=example@example.com %}
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
Detach A Monitor Record From A Customer Subuser 
{% endanchor %}

Detach a customer subuser from a monitor record.

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
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>detach</em>
         </td>
         <td>The task required to detach a monitor record to a customer subuser</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer subuser must be registered under your account</td>
         <td>The customer subuser we will detach the monitor record from</td>
      </tr>
   </tbody>
</table>

{% apiexample detach POST https://api.sendgrid.com/apiv2/reseller.manageSubuser api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=monitor&task=detach&user=example@example.com %}
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
