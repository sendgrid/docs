---
layout: page
weight: 0
title: Sender Address
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}

This endpoint allows you to manage and create Sender Addresses (formerly Identities) associated with the Marketing Email feature.

<page-anchor el="h2">
add
</page-anchor>

Create a new Address.


{% parameters add %}
 {% parameter 'identity' 'Yes' 'None' 'Create an Address named this.' %}
 {% parameter 'name' 'Yes' 'None' 'Specify the name to be used for this Address.' %}
 {% parameter 'email' 'Yes' 'Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)' 'Specify the email address to be used for this Address.' %}
 {% parameter 'replyto' 'No' 'Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)' 'Specify an email address to be used in the Reply-To field. If not defined, will default to the *email* parameter.' %}
 {% parameter 'address' 'Yes' 'None' 'Specify the physical address to be used for this Address.' %}
 {% parameter 'city' 'Yes' 'None' 'Specify the city to be used for this Address.' %}
 {% parameter 'state' 'Yes' 'None' 'Specify the state to be used for this Address.' %}
 {% parameter 'zip' 'Yes' 'None' 'Specify the zipcode/postal code to be used for this Address.' %}
 {% parameter 'country' 'Yes' 'None' 'Specify the country to be used for this Address.' %}
{% endparameters %}


{% apiexample add POST https://api.sendgrid.com/api/newsletter/identity/add identity=Sender_Address1&name=Grant&email=grant.hull%40sendgrid.com&address=929_Pearl_Stree&city=Boulder&state=Colorado&zip=80302&country=US&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Edit an existing Address.


{% parameters edit %}
 {% parameter 'identity' 'Yes' 'Must be an existing Address.' 'The Address you wish to edit.' %}
 {% parameter 'newidentity' 'No' 'None' 'Specify the new name to be used for this Address.' %}
 {% parameter 'name' 'No' 'None' 'Specify the new name to be used for this Address.' %}
 {% parameter 'email' 'Yes' 'Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)' 'Specify the email address to be used for this Address.' %}
 {% parameter 'replyto' 'No' 'Email address format, complying with [RFC 5322](http://tools.ietf.org/html/rfc5322)' 'Specify an email address to be used in the Reply-To field. If not defined, will default to the *email* parameter.' %}
 {% parameter 'address' 'No' 'None' 'Specify the new physical address to be used for this Address.' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/api/newsletter/identity/edit identity=Sender_Address2&newidentity=Sender_Address3&name=Grant&email=grant.hull%40sendgrid.com&address=929_Pearl_Street&city=Boulder&state=Colorado&zip=80302&country=US&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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

Retrieve information associated with a particular Address.


{% parameters get %}
 {% parameter 'identity' 'Yes' 'Must be an existing Address.' 'Retrieve contents of the specified Address.' %}
{% endparameters %}


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

<page-anchor el="h2">
list
</page-anchor>

List all Addresses on your account, or check if a particular Address exists.


{% parameters list %}
 {% parameter 'identity' 'No' 'Must be an existing Address.' 'Check for this particular Identity. (To list all Addresses on your account exclude this parameter)' %}
{% endparameters %}


{% apiexample list POST https://api.sendgrid.com/api/newsletter/identity/list identity=Sender_Address4&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "identity": "Sender_Address4"
  }
]
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
delete
</page-anchor>

Remove an Address from your account.


{% parameters delete %}
 {% parameter 'identity' 'Yes' 'Must be an existing Address.' 'Remove the specified Address from your account.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/api/newsletter/identity/delete identity=Sender_Address4&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
