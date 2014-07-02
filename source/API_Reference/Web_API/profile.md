---
layout: page
weight: 0
title: Profile
navigation:
  show: true
---

{% anchor h2 %}
get 
{% endanchor %}

{% apiexample get GET https://api.sendgrid.com/api/profile.get api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "username": "sampleuser@example.com",
    "email": "sampleemail@example.com",
    "active": "true",
    "first_name": "john",
    "last_name": "doe",
    "address": "555 any street",
    "city": "any city",
    "state": "CA",
    "zip": "91234",
    "country": "US",
    "phone": "555-555-5555",
    "website": "example.com"
  }
]
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<users>
   <user>
      <username>sampleuser@example.com</username>
      <email>sampleemail@example.com</email>
      <active>true</active>
      <first_name>john</first_name>
      <last_name>doe</last_name>
      <address>
555 any street
</address>
      <city>any city</city>
      <state>CA</state>
      <zip>91234</zip>
      <country>US</country>
      <phone>555-555-5555</phone>
      <website>example.com</website>
   </user>
</users>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
set 
{% endanchor %}
<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>first_name</td>
         <td>No</td>
         <td>Your first name</td>
      </tr>
      <tr>
         <td>last_name</td>
         <td>No</td>
         <td>Your last name</td>
      </tr>
      <tr>
         <td>address</td>
         <td>No</td>
         <td>Company address</td>
      </tr>
      <tr>
         <td>city</td>
         <td>No</td>
         <td>City where your company is located</td>
      </tr>
      <tr>
         <td>state</td>
         <td>No</td>
         <td>State where your company is located</td>
      </tr>
      <tr>
         <td>country</td>
         <td>No</td>
         <td>Country where your company is located</td>
      </tr>
      <tr>
         <td>zip</td>
         <td>No</td>
         <td>Zipcode where your company is located</td>
      </tr>
      <tr>
         <td>phone</td>
         <td>No</td>
         <td>Valid phone number where we can reach you</td>
      </tr>
      <tr>
         <td>website</td>
         <td>No</td>
         <td>Your company's website</td>
      </tr>
   </tbody>
</table>


{% apiexample set POST https://api.sendgrid.com/api/profile.set api_user=your_sendgrid_username&api_key=your_sendgrid_password&first_name=newFirstName&last_name=&newLastName %}
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
setPassword 
{% endanchor %}
<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>password</td>
         <td>Yes</td>
         <td>Must be at least 6 characters</td>
         <td>Your new password</td>
      </tr>
      <tr>
         <td>confirm_password</td>
         <td>Yes</td>
         <td>Must match password parameter and be at least 6 characters long</td>
         <td>Confrim new password</td>
      </tr>
   </tbody>
</table>


{% apiexample reset POST https://api.sendgrid.com/api/password.set api_user=your_sendgrid_username&api_key=your_sendgrid_password&password=newPasword&confirm_password=newPassword %}
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
setUsername 
{% endanchor %}

{% warning %}
Please note, your account username is used to login to our SMTP server and the website. Changes will take effect immediately. 
{% endwarning %}
<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>username</td>
         <td>Yes</td>
         <td>Must not exceed 100 characters. The username cannot be already taken or contain the SendGrid.com domain</td>
         <td>This is the new username we will be authenticating with our SMTP servers and our website. Changes take effect immediately</td>
      </tr>
   </tbody>
</table>


{% apiexample setusername POST https://api.sendgrid.com/api/profile.setUsername api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=yournewusername@domain.com %}
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
setEmail 
{% endanchor %}

{% info %}
Please note, we send out a confirmation email to the new email account in order to be validated. Your email address changes when you click on the confirmation link. 
{% endinfo %}
<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>email</td>
         <td>Yes</td>
         <td>Must be in email format and not more than 100 characters</td>
         <td>This is the new email address we will be contacting you with. Changes take effect immediately</td>
      </tr>
   </tbody>
</table>


{% apiexample setemail POST https://api.sendgrid.com/api/profile.setEmail api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=yournewemail@domain.com %}
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
