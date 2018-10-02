---
layout: page
weight: 650
title: Subuser Management
navigation:
   show: true
---

These commands allow the creation, management, and deletion of subusers.

{% warning %}
In both creating and searching for a subuser, use the <code>username</code> parameter. In other commands, use the <code>user</code> parameter. When creating a subuser, there is no existing <code>user</code> parameter to reference, and one is being created.
{% endwarning %}

{% info %}
For recommended steps when creating Subusers using the API, check out [this SendGrid Knowledgebase article.]({{site.support_url}}/hc/en-us/articles/201750787)
{% endinfo %}

{% anchor h2 %}
Create a Subuser
{% endanchor %}

{% parameters create %}
 {% parameter username Yes 'No more than 64 characters' 'New subuser username' %}
 {% parameter password Yes 'See [SendGrid password requirements]({{root_url}}{{site.password_requirements}})' 'New subuser password' %}
 {% parameter confirm_password Yes 'Match <code>password</code> argument' 'Confirm new password' %}
 {% parameter email Yes 'Valid email address, no more than 64 characters' 'New subuser email. This is an administrative contact address for SendGrid' %}
 {% parameter first_name Yes 'No more than 50 characters' 'New subuser profile first name' %}
 {% parameter last_name Yes 'No more than 50 characters' 'New subuser profile last name' %}
 {% parameter address Yes 'No more than 100 characters' 'New subuser profile street address' %}
 {% parameter city Yes 'No more than 100 characters' 'New subuser profile city' %}
 {% parameter state Yes 'No more than 100 characters' 'New subuser profile state' %}
 {% parameter zip Yes 'No more than 50 characters' 'New subuser profile postal code' %}
 {% parameter country Yes 'Valid [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code' 'New subuser profile country code' %}
 {% parameter phone Yes 'No more than 50 characters' 'New subuser profile phone number' %}
 {% parameter website Yes 'No more than 255 characters' 'New subuser profile website' %}
 {% parameter company Yes 'No more than 255 characters' 'New subuser profile company name' %}
 {% parameter mail_domain No 'Existing [whitelabel record]({{root_url}}/API_Reference/Web_API/Customer_Subuser_API/whitelabel.html) on the parent user' 'New subuser whitelabel. Be mindful of IP assignment in relation to whitelabel record' %}
{% endparameters %}

{% apiexample create POST https://api.sendgrid.com/apiv2/customer.add api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=subuser_username&website=domain.com&password=subuser_password&confirm_password=subuser_password&first_name=subuser_first_name&last_name=subuser_last_name&address="123 Sesame Street"&city="New York"&state=NY&zip=10128&email=subuser@domain.com&country=US&phone="(999) 555-5555" %}
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
 {% parameter user Yes 'Must be existing subuser name' 'Subuser to delete' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/customer.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username %}
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
Obtain a list of subusers under your account.

{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'Task to get list of subusers' %}
 {% parameter username No 'Valid username format' 'Optional string to filter results' %}
 {% parameter email No 'Valid email format' 'Optional string to filter results' %}
 {% parameter active No '0 or 1' 'Optional flag to filter results' %}
 {% parameter first_name No 'Valid first_name format' 'Optional string to filter results' %}
 {% parameter last_name No 'Valid last_name format' 'Optional string to filter results' %}
 {% parameter address No 'Valid street address format' 'Optional string to filter results' %}
 {% parameter city No 'Valid city format' 'Optional string to filter results' %}
 {% parameter state No 'Valid state format' 'Optional string to filter results' %}
 {% parameter country No 'Valid country format' 'Optional string to filter results' %}
 {% parameter zip No 'Valid zip format' 'Optional string to filter results' %}
 {% parameter phone No 'Valid phone format' 'Optional string to filter results' %}
 {% parameter website No 'Valid website format' 'Optional string to filter results' %}
 {% parameter company No 'Valid company format' 'Optional string to filter results' %}
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
Update Subuser Username
{% endanchor %}

{% warning %}
Subuser username is used to access website and API. Changes occur immediately.
{% endwarning %}

{% parameters updateSubuserUsername %}
 {% parameter task Yes 'Must be set to <code>setUsername</code>' 'Task to update subuser username' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to update username of' %}
 {% parameter username Yes 'Valid username format' 'New username for subuser' %}
{% endparameters %}

{% apiexample updateSubuserUsername POST https://api.sendgrid.com/apiv2/customer.profile api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=setUsername&user=subuser_username&username=newsubuser_username %}
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
Passwords are stored encrypted, and cannot be retrieved. Forgotten passwords must be updated.

{% parameters updateSubuserPassword %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to update password of' %}
 {% parameter password Yes 'See [SendGrid password requirements]({{root_url}}{{site.password_requirements}})' 'New password for subuser' %}
 {% parameter confirm_password Yes 'Match <code>password</code> argument' 'Confirm new password' %}
{% endparameters %}

{% apiexample updateSubuserPassword POST https://api.sendgrid.com/apiv2/customer.password api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username&password=newPassword&confirm_password=newPassword %}
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
This is the administrative contact address, used by SendGrid to contact the user. Unrelated to sending address information.

{% parameters updateSubuserEmailAddress %}
 {% parameter task Yes 'Must be set to <code>setEmail</code>' 'Task to update subuser email address' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to update email address of' %}
 {% parameter email Yes 'Valid email format' 'New administrative contact address' %}
{% endparameters %}

{% apiexample updateSubuserEmailAddress POST https://api.sendgrid.com/apiv2/customer.profile api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=setEmail&user=subuser_username&email=newsubuser_username %}
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
Update Subuser profile information.

{% parameters updateprofile %}
 {% parameter task Yes 'Must be set to <code>set</code>' 'Task to update subuser profile' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to update profile' %}
 {% parameter first_name No 'Valid first_name format' 'Optional string to filter results' %}
 {% parameter last_name No 'Valid last_name format' 'Optional string to filter results' %}
 {% parameter address No 'Valid street address format' 'Optional string to filter results' %}
 {% parameter city No 'Valid city format' 'Optional string to filter results' %}
 {% parameter state No 'Valid state format' 'Optional string to filter results' %}
 {% parameter country No 'Valid country format' 'Optional string to filter results' %}
 {% parameter zip No 'Valid zip format' 'Optional string to filter results' %}
 {% parameter phone No 'Valid phone format' 'Optional string to filter results' %}
 {% parameter website No 'Valid website format' 'Optional string to filter results' %}
 {% parameter company No 'Valid company format' 'Optional string to filter results' %}
{% endparameters %}

{% apiexample updateprofile POST https://api.sendgrid.com/apiv2/customer.profile api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=set&user=subuser_username&first_name=newFirstName&last_name=&newLastName %}
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
Sets subuser's <code>active</code> flag to <code>0</code>. Prevents subuser from sending email. Does not affect website login permissions.

{% parameters disable %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to disable email permissions' %}
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
Enable a Subuser
{% endanchor %}
Sets subuser's <code>active</code> flag to <code>1</code>. Allows subuser to send email. Does not affect website login permissions. New subusers are set to active by default.

{% parameters enable %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to enable email permissions' %}
{% endparameters %}

{% apiexample enable POST https://api.sendgrid.com/apiv2/customer.enable api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username %}
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
Disallow a subuser to log in to the SendGrid website. Does not affect email sending permissions.

{% parameters disablewebsite %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to disable website access' %}
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
Enable Website Access To A Subuser
{% endanchor %}
Allow a subuser to log in to the SendGrid website. Does not affect email sending permissions. New subusers are enabled by default.

{% parameters enablewebsite %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to enable website access' %}
{% endparameters %}

{% apiexample enablewebsite POST https://api.sendgrid.com/apiv2/customer.website_enable api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username %}
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
