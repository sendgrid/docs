---
layout: page
weight: 0
title: Subusers
navigation:
   show: true
---

These are actions that directly affect your subuser. We provide access via XML and JSON.

{% warning %}
In both creating and searching for a subuser account, you are using the USERNAME parameter, while in all other cases you are using the USER parameter. When you are creating a subuser, there is no existing USER parameter to reference, so you are creating one. When you are searching for a subuser, you are authenticating to our servers with a valid username. 
{% endwarning %}

{% info %}
For recommended steps when creating Subusers using the API, check out [this Sendgrid Knowledgebase article.](https://support.sendgrid.com/hc/en-us/articles/201750787)
{% endinfo %}


{% anchor h2 %}
Create a Subuser 
{% endanchor %}


{% parameters create %}
 {% parameter 'username' 'Yes' 'No more than 64 characters' 'The subusers new username' %}
 {% parameter 'password' 'Yes' 'Must be at least 6 characters' 'New password of subuser' %}
 {% parameter 'confirm_password' 'Yes' 'Must match password parameter, must be at least 6 characters' 'Confirm new password' %}
 {% parameter 'email' 'Yes' 'Must be in email format, no more than 64 characters' 'Email address of new subuser' %}
 {% parameter 'first_name' 'Yes' 'No more than 50 characters' 'First name of new subuser' %}
 {% parameter 'last_name' 'Yes' 'No more than 50 characters' 'Last name of new subuser' %}
 {% parameter 'address' 'Yes' 'No more than 100 characters' 'Address of new subuser' %}
 {% parameter 'city' 'Yes' 'No more than 100 characters' 'City of new subuser' %}
 {% parameter 'state' 'Yes' 'No more than 100 characters' 'State of new subuser' %}
 {% parameter 'zip' 'Yes' 'No more than 50 characters' 'Zip of new subuser. This field is not validated for correct value. It is up to developer to check for valid zip code.' %}
 {% parameter 'country' 'Yes' 'No more than 100 characters' 'Country of new subuser' %}
 {% parameter 'phone' 'Yes' 'No more than 50 characters' 'Phone number of new subuser' %}
 {% parameter 'website' 'Yes' 'No more than 255 characters' 'Website of new subuser' %}
 {% parameter 'company' 'Yes' 'No more than 255 characters' 'Company of new subuser' %}
 {% parameter 'mail_domain' 'No' 'A mail domain must already be setup with SendGrid, please contact [support@sendgrid.com](mailto:support@sendgrid.com) to have one setup' 'Mail domain of new subuser' %}
{% endparameters %}


{% apiexample create POST https://api.sendgrid.com/apiv2/customer.add api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=example@example.com&website=example.com&password=samplepassword&confirm_password=samplepassword&first_name=fname&last_name=lname&address=555_anystreet&city=any_city&state=CA&zip=91234&email=example@example.com&country=US&phone=555-5555 %}
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
Delete a Subuser 
{% endanchor %}

{% warning %}
This call will delete a subuser and will disable all tracked links on sent messages. Recipients will no longer be able to click existing tracked links and make it to the intended destination. This is irreversible, and should be used with extreme caution.
{% endwarning %}

{% parameters delete %}
 {% parameter 'user' 'Yes' 'Must be a valid subuser name.' 'The subuser to delete.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/customer.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=example@example.com %}
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
Retrieve Subusers 
{% endanchor %}
Obtain a complete list of all subusers.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to **get** in order to retrieve user information' %}
 {% parameter 'username' 'No' 'Search filter, subuser that is registered under you' %}
 {% parameter 'email' 'No' 'Search filter, email address subuser was registered with' %}
 {% parameter 'active' 'No' 'Search filter, whether or not the subuser is currently active' %}
 {% parameter 'first_name' 'No' 'Search filter, first name of subuser' %}
 {% parameter 'last_name' 'No' 'Search filter, last name of subuser' %}
 {% parameter 'address' 'No' 'Search filter, address of subuser' %}
 {% parameter 'city' 'No' 'Search filter, city of subuser' %}
 {% parameter 'state' 'No' 'Search filter, state of subuser' %}
 {% parameter 'country' 'No' 'Search filter, country of subuser' %}
 {% parameter 'zip' 'No' 'Search filter, zipcode of subuser' %}
 {% parameter 'phone' 'No' 'Search filter, phone number of subuser' %}
 {% parameter 'website' 'No' 'Search filter, website of subuser' %}
 {% parameter 'company' 'No' 'Search filter, company of subuser' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/customer.profile api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=get %}
  {% response json %}
[
  {
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
      <username>username</username>
      <email>example1@example.com</email>
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
   <user>
      <username>username</username>
      <email>example2@example.com</email>
      <active>false</active>
      <first_name>jane</first_name>
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
Enable a Subuser 
{% endanchor %}
Enable a subuser so they may start sending out emails again. This call will not enable website access.


{% parameters enable %}
 {% parameter 'user' 'Yes' 'Must be in email format' 'The subuser you are planning to enabling' %}
{% endparameters %}


{% apiexample enable POST https://api.sendgrid.com/apiv2/customer.enable api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com %}
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
Disable a Subuser 
{% endanchor %}
This prevents them from sending out emails with SendGrid.


{% parameters disable %}
 {% parameter 'user' 'Yes' 'Must be in email format' 'The subuser you are planning to disabling' %}
{% endparameters %}


{% apiexample disable POST https://api.sendgrid.com/apiv2/customer.disable api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
Enable Website Access To A Subuser 
{% endanchor %}
Allow a subuser to login to the SendGrid.com website. This call will not enable the subuser to send out emails.


{% parameters enablewebsite %}
 {% parameter 'user' 'Yes' 'Must be in email format' 'The subuser you are planning to grant website access' %}
{% endparameters %}


{% apiexample enablewebsite POST https://api.sendgrid.com/apiv2/customer.website_enable api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com %}
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
Disable Website Access To A Subuser 
{% endanchor %}
Disallow a subuser to login to the SendGrid.com website. This call will not prevent them from sending emails.


{% parameters disablewebsite %}
 {% parameter 'user' 'Yes' 'Must be in email format' 'The subuser you are planning to disallow website access' %}
{% endparameters %}


{% apiexample disablewebsite POST https://api.sendgrid.com/apiv2/customer.website_disable api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
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
Update Subuser Profile 
{% endanchor %}
Allows you to update your subusers profile information


{% parameters updateprofile %}
 {% parameter 'task' 'Yes' 'Must be set to **set** in order to update profile information' %}
 {% parameter 'user' 'Yes' 'Subuser that is registered under you' %}
 {% parameter 'first_name' 'No' 'First name of subuser' %}
 {% parameter 'last_name' 'No' 'Last name of subuser' %}
 {% parameter 'address' 'No' 'Address of subuser' %}
 {% parameter 'city' 'No' 'City of subuser' %}
 {% parameter 'state' 'No' 'State of subuser' %}
 {% parameter 'country' 'No' 'Country of subuser' %}
 {% parameter 'zip' 'No' 'Zipcode of subuser' %}
 {% parameter 'phone' 'No' 'Phone number of subuser' %}
 {% parameter 'website' 'No' 'Website of subuser' %}
 {% parameter 'company' 'No' 'Company of subuser' %}
{% endparameters %}


{% apiexample updateprofile POST https://api.sendgrid.com/apiv2/customer.profile api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=set&user=example@example.com&first_name=newFirstName&last_name=&newLastNam %}
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
Update Subuser Password 
{% endanchor %}
Passwords are encrypted by default and therefore cannot be retrieved; however, you can reset a subusers password.


{% parameters updateSubuserPassword %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under you' 'The subuser you are planning to reset the password' %}
 {% parameter 'password' 'Yes' 'Must be at least 6 characters' 'New password of subuser' %}
 {% parameter 'confirm_password' 'Yes' 'Must match password parameter and be at least 6 characters' 'Confirm new password' %}
{% endparameters %}


{% apiexample updateSubuserPassword POST https://api.sendgrid.com/apiv2/customer.password api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com&password=newPasword&confirm_password=newPasswor %}
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
Update Subuser Username 
{% endanchor %}
Note that your subuser account username is used to login to our SMTP server *and* the website and changes take effect immediately.


{% parameters updateSubuserUsername %}
 {% parameter 'task' 'Yes' 'Must be set to**setUsername**' 'This will let us know you want to update your subusers username. This is the new username your subuser will be authenticating with our SMTP servers *and* to access the website. This update takes effect immediately' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The user we will be updating their username for' %}
 {% parameter 'username' 'Yes' 'Must be in email format, not more than 100 characters, cannot be already taken and cannot contain SendGrid.com in the domain name' 'This is the new username we will be authenticating with our SMTP servers *and* to access our site. This update takes effect immediately' %}
{% endparameters %}


{% apiexample updateSubuserUsername POST https://api.sendgrid.com/apiv2/customer.profile api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=setUsername&user=example@example.com&username=newexample@example.com %}
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
Update Subuser Email Address 
{% endanchor %}
This is the contact email we use for your subusers. Changes take place immediately. It is your responsibility to validate the contact email.


{% parameters updateSubuserEmailAddress %}
 {% parameter 'task' 'Yes' 'Must be set to **setEmail**' 'This will let us know you want to update your subusers email address. This update takes effect immediately' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The user we will be updating their username for' %}
 {% parameter 'email' 'Yes' 'Must be in email format, not more than 100 characters' 'This is the new email address we will use for contacting subuser. This update takes effect immediately' %}
{% endparameters %}


{% apiexample updateSubuserEmailAddress POST https://api.sendgrid.com/apiv2/customer.profile api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=setEmail&user=example@example.com&email=newexample@example.com %}
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
