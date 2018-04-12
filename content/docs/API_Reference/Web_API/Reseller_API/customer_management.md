---
layout: page
weight: 0
title: Customer Management
navigation:
   show: true
---
These are actions that directly affect your customer. We provide access via XML and JSON.
<page-anchor el="h2">
Create a Customer
</page-anchor>

{% parameters create %}
 {% parameter 'username' 'Yes' 'No more than 64 characters' 'The customers new username' %}
 {% parameter 'password' 'Yes' 'See [SendGrid password requirements]({{root_url}}{{site.password_requirements}})' 'New password of customer' %}
 {% parameter 'confirm_password' 'Yes' 'Must match password parameter' 'Confirm new password' %}
 {% parameter 'email' 'Yes' 'Must be in email format, no more than 64 characters' 'Email address of new customer' %}
 {% parameter 'first_name' 'Yes' 'No more than 50 characters' 'First name of new customer' %}
 {% parameter 'last_name' 'Yes' 'No more than 50 characters' 'Last name of new customer' %}
 {% parameter 'address' 'Yes' 'No more than 100 characters' 'Address of new customer' %}
 {% parameter 'city' 'Yes' 'No more than 100 characters' 'City of new customer' %}
 {% parameter 'state' 'Yes' 'No more than 100 characters' 'State of new customer' %}
 {% parameter 'zip' 'Yes' 'No more than 50 characters' 'Zip of new customer. This field is not validated for correct value. It is up to developer to check for valid zip code.' %}
 {% parameter 'country' 'Yes' 'No more than 100 characters' 'Country of new customer' %}
 {% parameter 'phone' 'Yes' 'No more than 50 characters' 'Phone number of new customer' %}
 {% parameter 'website' 'Yes' 'No more than 255 characters' 'Website of new customer' %}
 {% parameter 'company' 'Yes' 'No more than 255 characters' 'Company of new customer' %}
 {% parameter 'package' 'Yes' 'No more than 255 characters' 'Name of the Package to assign to customer. You can view the available package [here]({{root_url}}/API_Reference/Web_API/Reseller_API/view_available_packages.html).' %}
 {% parameter 'whitelabel' 'Yes' 'No more than 255 characters' 'The domain name for whitelabel. The default one is *sendgrid.me*' %}
 {% parameter 'ip_group[]' 'No' 'No more than 255 characters for each ip_group name. It must belong to you.' 'Name of the IP Group you wish to optionally add.' %}
 {% parameter 'ip[]' 'No' 'Valid ip address that belongs to you.' 'If package allows it, you can optionally add additional IP addresses.' %}
 {% parameter 'free_user' 'Maybe' 'If the new customer is a free customer, you need to specify this parameter. Either true or false.' 'Create a free customer' %}
 {% parameter 'billing_date' 'No' 'If the new customer's billing anniversary date is on a different date from the time you create the customer, you need to specify this parameter. Must be in YYYY-mm-dd format. This date must be within one billing cycle from the time you create this customer. (e.g. if they sign up on 2/28/11, then the latest date you can use is 3/28/11)' 'If the new customer's billing anniversary date is different from today (or when you execute this API call), you can specify the first billing anniversary date' %}
{% endparameters %}


{% apiexample create POST https://api.sendgrid.com/apiv2/reseller.add api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=neweexampexample@example.com&website=example.com&password=samplepassword&confirm_password=samplepassword&first_name=fname&last_name=lname&address=555_anystreet&city=any_city&state=CA&zip=91234&email=neweexampexample@example.com&country=US&phone=555-555&free_user=true&company=company&whitelabel=sendgrid.me %}
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
Delete a Customer
</page-anchor>
Remove a customer from your account. This is **not** the same as disabling a customer on our system. This is the same thing as closing out a customers account at the end of their billing cycle.

{% parameters delete %}
 {% parameter 'user' 'Yes' 'Must be a customer registered under your account.' 'The customers username you wish to delete.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=eexampexample@example.com %}
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
Retrieve Customers
</page-anchor>
Obtain a complete list of all customers.

{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to **get** in order to retrieve user information' %}
 {% parameter 'id' 'No' 'Search filter, id customer that is registered under you' %}
 {% parameter 'username' 'No' 'Search filter, customer that is registered under you' %}
 {% parameter 'email' 'No' 'Search filter, email address customer was registered with' %}
 {% parameter 'first_name' 'No' 'Search filter, first name of customer' %}
 {% parameter 'last_name' 'No' 'Search filter, last name of customer' %}
 {% parameter 'address' 'No' 'Search filter, address of customer' %}
 {% parameter 'city' 'No' 'Search filter, city of customer' %}
 {% parameter 'state' 'No' 'Search filter, state of customer' %}
 {% parameter 'country' 'No' 'Search filter, country of customer' %}
 {% parameter 'zip' 'No' 'Search filter, zipcode of customer' %}
 {% parameter 'phone' 'No' 'Search filter, phone number of customer' %}
 {% parameter 'website' 'No' 'Search filter, website of customer' %}
 {% parameter 'method' 'Yes' 'Must be set to *profile*' %}
 {% parameter 'limit' 'No' 'Optional field to limit the number of results returned.' %}
 {% parameter 'offset' 'No' 'Optional beginning point in the list to retrieve from.' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=get %}
  {% response json %}
[
  {
    "id": "123",
    "username": "username",
    "email": "example1@example.com",
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
  },
  {
    "id": "124",
    "username": "username",
    "email": "example2@example.com",
    "active": "false",
    "first_name": "jane",
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
      <id>123</id>
      <username>user1</username>
      <email>example1@example.com</email>
      <active>true</active>
      <first_name>john</first_name>
      <last_name>doe</last_name>
      <address>555 any street</address>
      <city>any city</city>
      <state>CA</state>
      <zip>91234</zip>
      <country>US</country>
      <phone>555-555-5555</phone>
      <website>example.com</website>
   </user>
   <user>
      <id>124</id>
      <username>user2</username>
      <email>example2@example.com</email>
      <active>false</active>
      <first_name>jane</first_name>
      <last_name>doe</last_name>
      <address>555 any street</address>
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
Enable a Customer
</page-anchor>
Enable a customer so they may start sending out emails again. This call will not enable website access.

{% parameters enable %}
 {% parameter 'user' 'Yes' 'Must be a customer registered under your account.' 'The customer you are planning to enabling' %}
 {% parameter 'method' 'Yes' 'Must be set to *enable*' 'The customer you are planning to enabling' %}
{% endparameters %}


{% apiexample enable POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=enable&user=eexampexample@example.com %}
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
Disable a Customer
</page-anchor>
This prevents them from sending out emails with SendGrid.

{% parameters disable %}
 {% parameter 'user' 'Yes' 'Must be a customer registered under your account.' 'The customer you are planning to disabling' %}
 {% parameter 'method' 'Yes' 'Must be set to *disable*' 'The customer you are planning to disabling' %}
{% endparameters %}


{% apiexample disable POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=disable&user=eexampexample@example.com %}
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
Enable Website Access To A Customer
</page-anchor>
Allow a customer to login to the SendGrid.com website. This call will not enable the customer from sending out emails.

{% parameters website %}
 {% parameter 'user' 'Yes' 'Must be a customer registered under your account.' 'The customer you are planning to grant website access' %}
 {% parameter 'method' 'Yes' 'Must be set to *website_enable*' 'The customer you are planning to grant website access' %}
{% endparameters %}


{% apiexample website POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=website_enable&user=eexampexample@example.com %}
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
Disable Website Access To A Customer
</page-anchor>
Disallow a customer to login to the SendGrid.com website. This call will not prevent them from sending out emails.

{% parameters unwebsite %}
 {% parameter 'user' 'Yes' 'Must be a customer registered under your account.' 'The customer you are planning to disallow website access' %}
 {% parameter 'method' 'Yes' 'Must be set to *website_disable*' 'The customer you are planning to disallow website access' %}
{% endparameters %}


{% apiexample unwebsite POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=website_disable&user=eexampexample@example.com %}
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
Update Customer Profile
</page-anchor>
Allows you to update your customers profile information

{% parameters update %}
 {% parameter 'task' 'Yes' 'Must be set to **set** in order to update profile information' %}
 {% parameter 'method' 'Yes' 'Must be set to *profile*' %}
 {% parameter 'user' 'Yes' 'Customer that is registered under you' %}
 {% parameter 'first_name' 'No' 'First name of customer' %}
 {% parameter 'last_name' 'No' 'Last name of customer' %}
 {% parameter 'address' 'No' 'Address of customer' %}
 {% parameter 'city' 'No' 'City of customer' %}
 {% parameter 'state' 'No' 'State of customer' %}
 {% parameter 'country' 'No' 'Country of customer' %}
 {% parameter 'zip' 'No' 'Zipcode of customer' %}
 {% parameter 'phone' 'No' 'Phone number of customer' %}
 {% parameter 'website' 'No' 'Website of customer' %}
{% endparameters %}


{% apiexample update POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=set&user=eexampexample@example.com&first_name=newFirstName&last_name=newLastName %}
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
Update Customer Password
</page-anchor>
Passwords are encrypted by default and therefore cannot be retrieved; however, you can reset a customers password.

{% parameters password %}
 {% parameter 'user' 'Yes' 'Customer must be registered under you' 'The customer you are planning to reset the password' %}
 {% parameter 'password' 'Yes' 'See [SendGrid password requirements]({{root_url}}{{site.password_requirements}})' 'New password of customer' %}
 {% parameter 'confirm_password' 'Yes' 'Must match password parameter' 'Confirm new password' %}
 {% parameter 'method' 'Yes' 'Must be set to *password*' 'Allows you to access password functionality' %}
{% endparameters %}


{% apiexample password POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=password&user=eexampexample@example.com&password=newPasword&confirm_password=newPassword %}
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
Update Customer Username
</page-anchor>
Note that your customer account username is used to login to our SMTP server *and* the website and changes take effect immediately.

{% parameters name %}
 {% parameter 'task' 'Yes' 'Must be set to **setUsername**' 'This will let us know you want to update your customers username. This is the new username your customer will be authenticating with our SMTP servers *and* to access the website. This update takes effect immediately' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The user we will be updating their username for' %}
 {% parameter 'username' 'Yes' 'No more than 64 characters, cannot be already taken and cannot contain SendGrid.com in the domain name' 'This is the new username we will be authenticating with our SMTP servers *and* to access our site. This update takes effect immediately' %}
 {% parameter 'method' 'Yes' 'Must be set to *profile*' 'Allows you to access profile functionality' %}
{% endparameters %}


{% apiexample name POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=setUsername&user=eexampexample@example.com&username=neweexampexample@example.com %}
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
Update Customer Email Address
</page-anchor>
This is the contact email we use for your customers. Changes take place immediately. It is your responsibility to validate the contact email.

{% parameters email %}
 {% parameter 'task' 'Yes' 'Must be set to **setEmail**' 'This will let us know you want to update your customers email address. This update takes effect immediately' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The user we will be updating their username for' %}
 {% parameter 'email' 'Yes' 'Must be in email format, not more than 100 characters' 'This is the new email address we will use for contacting customer. This update takes effect immediately' %}
 {% parameter 'method' 'Yes' 'Must be set to *password*' 'Allows you to access password functionality' %}
{% endparameters %}


{% apiexample email POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=setEmail&user=eexampexample@example.com&email=neweexampexample@example.com %}
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
