---
layout: page
weight: 0
title: Sender Address
navigation:
  show: true
---

This endpoint allows you to manage and create Sender Addresses (formerly Identities) associated with the Marketing Email feature.


{% anchor h2 %}
add 
{% endanchor %}

Create a new Address.

<table class="table table-bordered table-striped">
   <tr>
      <th>Parameter</th>
      <th>Required</th>
      <th>Requirements</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>identity</td>
      <td>Yes</td>
      <td>None</td>
      <td>Create an Address named this.</td>
   </tr>
   <tr>
      <td>name</td>
      <td>Yes</td>
      <td>None</td>
      <td>Specify the name to be used for this Address.</td>
   </tr>
   <tr>
      <td>email</td>
      <td>Yes</td>
      <td>Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)</td>
      <td>Specify the email address to be used for this Address.</td>
   </tr>
   <tr>
      <td>replyto</td>
      <td>No</td>
      <td>Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)</td>
      <td>Specify an email address to be used in the Reply-To field. If not defined, will default to the *email* parameter.</td>
   </tr>
   <tr>
      <td>address</td>
      <td>Yes</td>
      <td>None</td>
      <td>Specify the physical address to be used for this Address.</td>
   </tr>
</table>


{% apiexample add POST https://api.sendgrid.com/api/newsletter/identity/add identity=Sender_Address1&name=Grant&email=grant.hull%40sendgrid.com&address=929_Pearl_Stree&city=Boulder&state=Colorado&zip=80302&country=US&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Edit an existing Address.

<table class="table table-bordered table-striped">
   <tr>
      <th>Parameter</th>
      <th>Required</th>
      <th>Requirements</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>identity</td>
      <td>Yes</td>
      <td>Must be an existing Address.</td>
      <td>The Address you wish to edit.</td>
   </tr>
   <tr>
      <td>newidentity</td>
      <td>No</td>
      <td>None</td>
      <td>Specify the new name to be used for this Address.</td>
   </tr>
   <tr>
      <td>name</td>
      <td>No</td>
      <td>None</td>
      <td>Specify the new name to be used for this Address.</td>
   </tr>
   <tr>
      <td>email</td>
      <td>Yes</td>
      <td>Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)</td>
      <td>Specify the email address to be used for this Address.</td>
   </tr>
   <tr>
      <td>replyto</td>
      <td>No</td>
      <td>Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)</td>
      <td>Specify an email address to be used in the Reply-To field. If not defined, will default to the *email* parameter.</td>
   </tr>
   <tr>
      <td>address</td>
      <td>No</td>
      <td>None</td>
      <td>Specify the new physical address to be used for this Address.</td>
   </tr>
</table>


{% apiexample edit POST https://api.sendgrid.com/api/newsletter/identity/edit identity=Sender_Address2&newidentity=Sender_Address3&name=Grant&email=grant.hull%40sendgrid.com&address=929_Pearl_Street&city=Boulder&state=Colorado&zip=80302&country=US&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Retrieve information associated with a particular Address.

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
         <td>Must be an existing Address.</td>
         <td>Retrieve contents of the specified Address.</td>
      </tr>
   </tbody>
</table>



{% apiexample get POST https://api.sendgrid.com/api/newsletter/identity/get identity=Sender_Address&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "city": "Boulder",
  "name": "Name",
  "zip": "80302",
  "replyto": "Email Address",
  "country": "US",
  "state": "CO",
  "address": "929 Pearl Street ste 200 ",
  "email": "example@sendgrid.com",
  "identity": "Sender_Address "
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<identity>
   <city>Boulder</city>
   <name>Example Name</name>
   <zip>80302</zip>
   <replyto>example@sendgrid.com</replyto>
   <country>US</country>
   <state>CO</state>
   <address>
929 Pearl Street ste 200

</address>
   <email>example@sendgrid.com</email>
   <identity>Sender_Address </identity>
</identity>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
list 
{% endanchor %}

List all Addresses on your account, or check if a particular Address exists.

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
         <td>No</td>
         <td>Must be an existing Address.</td>
         <td>Check for this particular Identity. (To list all Addresses on your account exclude this parameter)</td>
      </tr>
   </tbody>
</table>



{% apiexample list POST https://api.sendgrid.com/api/newsletter/identity/list identity=Sender_Address4&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "identity": "Sender_Address4"
  }
]
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
delete 
{% endanchor %}

Remove an Address from your account.

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
         <td>Must be an existing Address.</td>
         <td>Remove the specified Address from your account.</td>
      </tr>
   </tbody>
</table>



{% apiexample delete POST https://api.sendgrid.com/api/newsletter/identity/delete identity=Sender_Address4&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
