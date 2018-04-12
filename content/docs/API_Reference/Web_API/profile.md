---
layout: page
weight: 0
title: Profile
navigation:
  show: true
---

Manage your SendGrid [profile](https://sendgrid.com/settings/account) settings using our [Web API]({{root_url}}/API_Reference/Web_API/index.html).

<page-anchor el="h2">
get
</page-anchor>

{% apiexample get GET https://api.sendgrid.com/api/profile.get api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "username": "sampleuseexampexample@example.com",
    "email": "example@example.com",
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
<users>
   <user>
      <username>sampleuseexampexample@example.com</username>
      <email>example@example.com</email>
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

<page-anchor el="h2">
set
</page-anchor>

{% parameters set %}
 {% parameter 'first_name' 'No' 'Your first name' %}
 {% parameter 'last_name' 'No' 'Your last name' %}
 {% parameter 'address' 'No' 'Company address' %}
 {% parameter 'city' 'No' 'City where your company is located' %}
 {% parameter 'state' 'No' 'State where your company is located' %}
 {% parameter 'country' 'No' 'Country where your company is located' %}
 {% parameter 'zip' 'No' 'Zipcode where your company is located' %}
 {% parameter 'phone' 'No' 'Valid phone number where we can reach you' %}
 {% parameter 'website' 'No' 'Company website' %}
{% endparameters %}


{% apiexample set POST https://api.sendgrid.com/api/profile.set api_user=your_sendgrid_username&api_key=your_sendgrid_password&first_name=newFirstName&last_name=&newLastName %}
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
setPassword
</page-anchor>

{% parameters set %}
 {% parameter 'password' 'Yes' 'Please see the [SendGrid password requirements]({{root_url}}{{site.password_requirements}})' 'Your new password' %}
 {% parameter 'confirm_password' 'Yes' 'Must match password parameter' 'Confirm new password' %}
{% endparameters %}


{% apiexample reset POST https://api.sendgrid.com/api/password.set api_user=your_sendgrid_username&api_key=your_sendgrid_password&password=newPassword&confirm_password=newPassword %}
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
setUsername
</page-anchor>

{% warning %}
Please note, your account username is used to login to our SMTP server and the website. Changes will take effect immediately.
{% endwarning %}

{% parameters reset %}
 {% parameter 'username' 'Yes' 'Must not exceed 100 characters. The username cannot be already taken or contain the SendGrid.com domain' 'This is the new username we will be authenticating with our SMTP servers and our website. Changes take effect immediately' %}
{% endparameters %}


{% apiexample setusername POST https://api.sendgrid.com/api/profile.setUsername api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=yournewusername@domain.com %}
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
setEmail
</page-anchor>

{% info %}
Please note, we send out a confirmation email to the new email account in order to be validated. Your email address changes when you click on the confirmation link.
{% endinfo %}

{% parameters setusername %}
 {% parameter 'email' 'Yes' 'Must be in email format and not more than 100 characters' 'This is the new email address we will be contacting you with. Changes take effect immediately' %}
{% endparameters %}


{% apiexample setemail POST https://api.sendgrid.com/api/profile.setEmail api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=yournewemail@domain.com %}
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
