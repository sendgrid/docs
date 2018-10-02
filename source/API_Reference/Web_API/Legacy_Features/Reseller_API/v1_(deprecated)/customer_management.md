---
layout: page
weight: 0
title: Customer Management
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Web_API/Reseller_API/customer_management.html) Reseller Customer Management page.
{% endwarning %}

These are actions that directly affect your customer. We provide access via XML and JSON.

* * * * *

{% anchor h2 %}
Create a Customer
{% endanchor %}

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
         <td>username</td>
         <td>Yes</td>
         <td>No more than 64 characters</td>
         <td>The customers new username</td>
      </tr>
      <tr>
         <td>password</td>
         <td>Yes</td>
         <td>Please see the [SendGrid password requirements]({{root_url}}{{site.password_requirements}})</td>
         <td>New password of customer</td>
      </tr>
      <tr>
         <td>confirm_password</td>
         <td>Yes</td>
         <td>Must match password parameter, must be at least 6 characters</td>
         <td>Confirm new password</td>
      </tr>
      <tr>
         <td>email</td>
         <td>Yes</td>
         <td>Must be in email format, no more than 64 characters</td>
         <td>Email address of new customer</td>
      </tr>
      <tr>
         <td>first_name</td>
         <td>Yes</td>
         <td>No more than 50 characters</td>
         <td>First name of new customer</td>
      </tr>
      <tr>
         <td>last_name</td>
         <td>Yes</td>
         <td>No more than 50 characters</td>
         <td>Last name of new customer</td>
      </tr>
      <tr>
         <td>address</td>
         <td>Yes</td>
         <td>No more than 100 characters</td>
         <td>Address of new customer</td>
      </tr>
      <tr>
         <td>city</td>
         <td>Yes</td>
         <td>No more than 100 characters</td>
         <td>City of new customer</td>
      </tr>
      <tr>
         <td>state</td>
         <td>Yes</td>
         <td>No more than 100 characters</td>
         <td>State of new customer</td>
      </tr>
      <tr>
         <td>zip</td>
         <td>Yes</td>
         <td>No more than 50 characters</td>
         <td>Zip of new customer. This field is not validated for correct value. It's up to developer to check for valid zip code.</td>
      </tr>
      <tr>
         <td>country</td>
         <td>Yes</td>
         <td>No more than 100 characters</td>
         <td>Country of new customer</td>
      </tr>
      <tr>
         <td>phone</td>
         <td>Yes</td>
         <td>No more than 50 characters</td>
         <td>Phone number of new customer</td>
      </tr>
      <tr>
         <td>website</td>
         <td>Yes</td>
         <td>No more than 255 characters</td>
         <td>Website of new customer</td>
      </tr>
      <tr>
         <td>company</td>
         <td>Yes</td>
         <td>No more than 255 characters</td>
         <td>Company of new customer</td>
      </tr>
      <tr>
         <td>package</td>
         <td>Yes</td>
         <td>No more than 255 characters</td>
         <td>Name of the Package to assign to customer</td>
      </tr>
      <tr>
         <td>whitelabel</td>
         <td>Yes</td>
         <td>No more than 255 characters</td>
         <td>The domain name for whitelabel</td>
      </tr>
      <tr>
         <td>ip_group[]</td>
         <td>No</td>
         <td>No more than 255 characters for each ip_group name. It must belong to you.</td>
         <td>Name of the IP Group you wish to optionally add.</td>
      </tr>
      <tr>
         <td>ip[]</td>
         <td>No</td>
         <td>Valid ip address that belongs to you.</td>
         <td>If package allows it, you can optionally add additional IP addresses.</td>
      </tr>
      <tr>
         <td>free_user</td>
         <td>Maybe</td>
         <td>If the new customer is a free customer, you need to specify this parameter. Either true or false.</td>
         <td>Create a free customer</td>
      </tr>
      <tr>
         <td>billing_date</td>
         <td>No</td>
         <td>If the new customer's billing anniversary date is on a different date from the time you create the customer, you need to specify this parameter. Must be in YYYY-mm-dd format. This date must be within one billing cycle from the time you create this customer. (e.g. if they sign up on 2/28/11, then the latest date you can use is 3/28/11)</td>
         <td>If the new customer's billing anniversary date is different from today (or when you execute this API call), you can specify the first billing anniversary date</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.add.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=neweexampexample@example.com&website=example.com&password=samplepassword&confirm_password=samplepassword&first_name=fname&last_name=lname&address=555_anystreet&city=any_city&state=CA&zip=91234&email=neweexampexample@example.com&country=US&phone=555-555&free_user=tru
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.add.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=neweexampexample@example.com&website=example.com&password=samplepassword&confirm_password=samplepassword&first_name=fname&last_name=lname&address=555_anystreet&city=any_city&state=CA&zip=91234&email=neweexampexample@example.com&country=US&phone=555-55
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Delete a Customer
{% endanchor %}

Remove a customer from your account. This is **not** the same as disabling a customer on our system. However, the removed user will still be stored within the system so that you cannot re-register a new user with this new username.

This is the same thing as closing out a customers account at the end of their billing cycle.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Parameter</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Must be a customer registered under your account.</td>
         <td>The customers username you wish to delete.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.delete.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.delete.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

Retrieve Customers

Obtain a complete list of all customers.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <strong>get</strong>
            in order to retrieve user information
         </td>
      </tr>
      <tr>
         <td>username</td>
         <td>No</td>
         <td>Search filter, customer that is registered under you</td>
      </tr>
      <tr>
         <td>email</td>
         <td>No</td>
         <td>Search filter, email address customer was registered with</td>
      </tr>
      <tr>
         <td>active</td>
         <td>No</td>
         <td>Search filter, whether or not the customer is currently active</td>
      </tr>
      <tr>
         <td>first_name</td>
         <td>No</td>
         <td>Search filter, first name of customer</td>
      </tr>
      <tr>
         <td>last_name</td>
         <td>No</td>
         <td>Search filter, last name of customer</td>
      </tr>
      <tr>
         <td>address</td>
         <td>No</td>
         <td>Search filter, address of customer</td>
      </tr>
      <tr>
         <td>city</td>
         <td>No</td>
         <td>Search filter, city of customer</td>
      </tr>
      <tr>
         <td>state</td>
         <td>No</td>
         <td>Search filter, state of customer</td>
      </tr>
      <tr>
         <td>country</td>
         <td>No</td>
         <td>Search filter, country of customer</td>
      </tr>
      <tr>
         <td>zip</td>
         <td>No</td>
         <td>Search filter, zipcode of customer</td>
      </tr>
      <tr>
         <td>phone</td>
         <td>No</td>
         <td>Search filter, phone number of customer</td>
      </tr>
      <tr>
         <td>website</td>
         <td>No</td>
         <td>Search filter, website of customer</td>
      </tr>
      <tr>
         <td>company</td>
         <td>No</td>
         <td>Search filter, company of customer</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>profile</em>
         </td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=ge
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}  <users><user><username>user1</username><email>example1@example.com</email><active>true</active><first_name>john</first_name><last_name>doe</last_name><address>555 any street</address>
      <city>any city</city><state>CA</state><zip>91234</zip><country>US</country><phone>555-555-5555</phone><website>example.com</website></user><user><username>user2</username><email>example2@example.com</email><active>false</active><first_name>jane</first_name><last_name>doe</last_name><address>555 any street</address>
      <city>any city</city><state>CA</state><zip>91234</zip><country>US</country><phone>555-555-5555</phone><website>example.com</website></user></users
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=profile&amp;task=ge
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
{"username":"username","email":"example1@example.com","active":"true","first_name":"john","last_name":"doe","address":"555 any street","city":"any city","state":"CA","zip":"91234","country":"US","phone":"555-555-5555","website":"example.com"},{"username":"username","email":"example2@example.com","active":"false","first_name":"jane","last_name":"doe","address":"555 any street","city":"any city","state":"CA","zip":"91234","country":"US","phone":"555-555-5555","website":"example.com"}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Enable a Customer
{% endanchor %}

Enable a customer so they may start sending out emails again. This call will not enable website access.

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
         <td>user</td>
         <td>Yes</td>
         <td>Must be in email format</td>
         <td>The customer you are planning to enabling</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>enable</em>
         </td>
         <td>The customer you are planning to enabling</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=enable&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>User not found</message>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=enable&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "User not found"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Disable a Customer
{% endanchor %}

This prevents them from sending out emails with SendGrid.

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
         <td>username</td>
         <td>Yes</td>
         <td>Must be in email format</td>
         <td>The customer you are planning to disabling</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>disable</em>
         </td>
         <td>The customer you are planning to disabling</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=disable&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>User not found</message>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=disabl
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "User not found"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Enable Website Access To A Customer
{% endanchor %}

Allow a customer to log in to the SendGrid.com website. This call will not enable the customer from sending out emails.

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
         <td>user</td>
         <td>Yes</td>
         <td>Must be in email format</td>
         <td>The customer you are planning to grant website access</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>website_enable</em>
         </td>
         <td>The customer you are planning to grant website access</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=website_enable&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>User not found</message>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=website_enable&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "User not found"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Disable Website Access To A Customer
{% endanchor %}

Disallow a customer to log in to the SendGrid.com website. This call will not prevent them from sending out emails.

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
         <td>user</td>
         <td>Yes</td>
         <td>Must be in email format</td>
         <td>The customer you are planning to disallow website access</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>website_disable</em>
         </td>
         <td>The customer you are planning to disallow website access</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=website_disable&user=eexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>User not found</message>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=website_disabl
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "User not found"
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Update Customer Profile
{% endanchor %}

Allows you to update your customers profile information

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <strong>set</strong>
            in order to update profile information
         </td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>profile</em>
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer that is registered under you</td>
      </tr>
      <tr>
         <td>first_name</td>
         <td>No</td>
         <td>First name of customer</td>
      </tr>
      <tr>
         <td>last_name</td>
         <td>No</td>
         <td>Last name of customer</td>
      </tr>
      <tr>
         <td>address</td>
         <td>No</td>
         <td>Address of customer</td>
      </tr>
      <tr>
         <td>city</td>
         <td>No</td>
         <td>City of customer</td>
      </tr>
      <tr>
         <td>state</td>
         <td>No</td>
         <td>State of customer</td>
      </tr>
      <tr>
         <td>country</td>
         <td>No</td>
         <td>Country of customer</td>
      </tr>
      <tr>
         <td>zip</td>
         <td>No</td>
         <td>Zipcode of customer</td>
      </tr>
      <tr>
         <td>phone</td>
         <td>No</td>
         <td>Phone number of customer</td>
      </tr>
      <tr>
         <td>website</td>
         <td>No</td>
         <td>Website of customer</td>
      </tr>
      <tr>
         <td>company</td>
         <td>No</td>
         <td>Company of customer</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=set&user=eexampexample@example.com&first_name=newFirstName&last_name=&newLastNam
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=set&user=eexampexample@example.com&first_name=newFirstName&last_name=&newLastNam
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Update Customer Password
{% endanchor %}

Passwords are encrypted by default and therefore cannot be retrieved; however, you can reset a customers password.

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
         <td>user</td>
         <td>Yes</td>
         <td>Customer must be registered under you</td>
         <td>The customer you are planning to reset the password</td>
      </tr>
      <tr>
         <td>password</td>
         <td>Yes</td>
         <td>Please see the [SendGrid password requirements]({{root_url}}{{site.password_requirements}})</td>
         <td>New password of customer</td>
      </tr>
      <tr>
         <td>confirm_password</td>
         <td>Yes</td>
         <td>Must match password parameter and be at least 6 characters</td>
         <td>Confirm new password</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>password</em>
         </td>
         <td>Allows you to access password functionality</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=password&user=eexampexample@example.com&password=newPasword&confirm_password=newPasswor
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=password&user=eexampexample@example.com&password=newPasword&confirm_password=newPasswor
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Update Customer Username
{% endanchor %}

Note that your customer account username is used to log in to our SMTP server *and* the website and changes take effect immediately.

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
            <strong>setUsername</strong>
         </td>
         <td>
            This will let us know you want to update your customers username. This is the new username your customer will be authenticating with our SMTP servers
            <em>and</em>
            to access the website. This update takes effect immediately
         </td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer must be registered under your account</td>
         <td>The user we will be updating their username for</td>
      </tr>
      <tr>
         <td>username</td>
         <td>Yes</td>
         <td>Must be in email format, not more than 100 characters, cannot be already taken and cannot contain SendGrid.com in the domain name</td>
         <td>
            This is the new username we will be authenticating with our SMTP servers
            <em>and</em>
            to access our site. This update takes effect immediately
         </td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>profile</em>
         </td>
         <td>Allows you to access profile functionality</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=setUsername&user=eexampexample@example.com&username=neweexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=setUsername&user=eexampexample@example.com&username=neweexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Update Customer Email Address
{% endanchor %}

This is the contact email we use for your customers. Changes take place immediately. It is your responsibility to validate the contact email.

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
            <strong>setEmail</strong>
         </td>
         <td>This will let us know you want to update your customers email address. This update takes effect immediately</td>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>Customer must be registered under your account</td>
         <td>The user we will be updating their username for</td>
      </tr>
      <tr>
         <td>email</td>
         <td>Yes</td>
         <td>Must be in email format, not more than 100 characters</td>
         <td>This is the new email address we will use for contacting customer. This update takes effect immediately</td>
      </tr>
      <tr>
         <td>method</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>password</em>
         </td>
         <td>Allows you to access password functionality</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=setEmail&user=eexampexample@example.com&email=neweexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

{% endcodeblock %}

### Response: Error

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manage.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=profile&task=setEmail&user=eexampexample@example.com&email=neweexampexample@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}
