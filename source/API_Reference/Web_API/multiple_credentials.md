---
layout: page
weight: 0
title: Multiple Credentials
navigation:
  show: true
---

These are the API endpoints to manage the [Multiple Credentials feature]({{root_url}}/User_Guide/Settings/credentials.html).

{% anchor h2 %}
get
{% endanchor %}

Retrieve a list of all credentials, or permissions for a specific credential.


{% parameters get %}
 {% parameter 'username' 'No' 'alphanumeric' 'If a username is supplied, the API returns the JSON permissions for that user' %}
{% endparameters %}


{% apiexample get GET https://api.sendgrid.com/api/credentials/get api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "id": 4,
    "name": "johnsmith",
    "permissions": {
      "email": 0,
      "api": 1
    }
  },
  {
    "id": 15,
    "name": "joewrigley",
    "permissions": {
      "web": 1,
      "api": 0
    }
  }
]
  {% endresponse %}
  {% response xml %}
<credentials>
   <credential>
      <created_at>2013-01-21 16:52:01</created_at>
      <permissions>
         {"web": 1, "api": 0, "email": 0}
         <permissions>
            <id>13243</id>
            <name>John Smith</name>
            <updated_at>2013-01-21 16:52:01</updated_at>
         </permissions>
         <credential>
            <created_at>2013-01-21 16:52:01</created_at>
            <permissions>
               {"web": 1, "api": 1, "email": 0}
               <permissions>
                  <id>13243</id>
                  <name>Joe Wrigley</name>
                  <updated_at>2013-01-21 16:52:01</updated_at>
               </permissions>
            </permissions>
         </credential>
      </permissions>
   </credential>
</credentials>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Add
{% endanchor %}

This API call allows user to add a new set of credentials to their account. Please see the [SendGrid password requirements]({{root_url}}{{site.password_requirements}}) before proceeding.

{% parameters add %}
 {% parameter 'username' 'Yes' 'alphanumeric' 'Enter a username for the new account' %}
 {% parameter 'password' 'Yes' 'alphanumeric' 'Enter a password for the new account' %}
 {% parameter 'permissions' 'No' 'JSON array of bits' 'Credentials are specified using a JSON object. There are three key names: **email** for access to SMTP, **api** for programmatic access, and **web** for administration. The values for each are a bit, 0 for off or 1 for on.The following example allows the specified username/password to log into the dashboard, but *not* send email or have access to any of the APIs:`{"email": 0, "web": 1, "api": 0}`' %}
{% endparameters %}


{% apiexample add POST https://api.sendgrid.com/api/credentials/add api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=name&password=password&permissions={"email": 0, "web": 1, "api": 0} %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <count>4</count>
</result>

  {% endresponse %}
{% endapiexample %}

{% anchor h2 %}
Edit
{% endanchor %}

Please see the [SendGrid password requirements]({{root_url}}{{site.password_requirements}}) before proceeding.

{% parameters edit %}
 {% parameter 'username' 'Yes' 'alphanumeric' 'The existing credentials to edit' %}
 {% parameter 'password' 'No' 'alphanumeric' 'Optionally update the password' %}
 {% parameter 'permissions' 'No' 'JSON array of bits' 'Credentials are specified using a JSON object. There are three key names: **email** for access to SMTP, **api** for programmatic access, and **web** for administration. The values for each are a bit, 0 for off or 1 for on.The following example allows the specified username/password to log into the dashboard, but *not* send email or have access to any of the APIs:`{"email": 0, "web": 1, "api": 0}`If you do not specify any additional parameters (i.e., email, web, api), then no permissions will be changed. This behavior allows you to change passwords without having to lookup the current applied permissions.' %}
{% endparameters %}


{% apiexample edit POST https://api.sendgrid.com/api/credentials/edit api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=name&password=password&permissions={"email":0,"web":1,"api":0} %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <count>4</count>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Delete
{% endanchor %}


{% parameters remove %}
 {% parameter 'username' 'Yes' 'alphanumeric' 'The credential to remove' %}
{% endparameters %}


{% apiexample remove POST https://api.sendgrid.com/api/credentials/remove api_user=your_sendgrid_username&api_key=your_sendgrid_password&username=name %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <count>4</count>
</result>

  {% endresponse %}
{% endapiexample %}
