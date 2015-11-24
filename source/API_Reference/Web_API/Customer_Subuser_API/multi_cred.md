---
layout: page
weight: 400
title: Multi User Credentials
navigation:
   show: true
---

Multi User Credentials allow you to have multiple people who can log into the same subuser account, using a different username
and password. This way, you don't have to worry if someone goes out of town and you can control who has access to the account.

{% anchor h2 %}
Get All Subuser Multiple Credentials
{% endanchor %}

GET a new subuser credential.

{% parameters get %}
 {% parameter task Yes 'Must be set to <code>get</code>' 'Task to get all subuser credentials' %}
 {% parameter user Yes 'The subuser name' 'The subuser whose multi cred users you are looking for' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/apiv2/customer.credential api_user=apikey&api_key=your_sendgrid_password&task=get&user=subuser_name %}
  {% response json %}
[
    {"id":12345,"name":"subuser_cred_1","permissions":{"web":1,"api":0,"mail":1}},
    {"id":67890,"name":"subuser_cred_2","permissions":{"mail":1,"api":1,"web":1}}
]
  {% endresponse %}
  {% response xml %}
    <result>
        <credential>
            <id>12345</id>
            <name>subuser_cred_1</name>
            <permissions>
                <permission>
                    <web>1</web>
                    <api>0</api>
                    <mail>1</mail>
                </permission>
            </permissions>
        </credential>
        <credential>
            <id>67890</id>
            <name>subuser_cred_2</name>
            <permissions>
                <permission>
                    <web>1</web>
                    <api>1</api>
                    <mail>1</mail>
                </permission>
            </permissions>
        </credential>
    </result>

  {% endresponse %}
{% endapiexample %}

* * * * *



{% anchor h2 %}
Add a Subuser Multiple Credential
{% endanchor %}

Create a new subuser credential.

{% parameters add %}
 {% parameter task Yes 'Must be set to <code>add</code>' 'Task to create a subuser credential' %}
 {% parameter user Yes 'The subuser name' 'The subuser whose multi cred users you are looking for' %}
 {% parameter credential_name Yes 'The new user name, unique for your account' 'The subuser whose multi cred users you are looking for' %}
 {% parameter credential_password Yes 'The password for your credential. See the [SendGrid password requirements]({{root_url}}{{site.password_requirements}})' 'The password for your subuser credential' %}
{% endparameters %}

{% apiexample add POST https://api.sendgrid.com/apiv2/customer.credential api_user=apikey&api_key=your_sendgrid_password&task=create&user=subuser_name&credential=new_user_name&credential_password=new_credential_password %}
  {% response json %}
{
    "message" : "success"
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
Edit Subuser Multiple Credential
{% endanchor %}

Edit a subuser credential.

{% parameters edit %}
 {% parameter task Yes 'Must be set to <code>edit</code>' 'Task to edit a subuser credential' %}
 {% parameter user Yes 'The subuser name' 'The subuser whose multi cred users you are looking for' %}
 {% parameter credential_name Yes 'The credential name' 'The current name of the credential' %}
 {% parameter new_credential_password Yes 'The password for your credential. See the [SendGrid password requirements]({{root_url}}{{site.password_requirements}})' 'The password for your subuser credential' %}
{% endparameters %}

{% apiexample edit POST https://api.sendgrid.com/apiv2/customer.credential api_user=apikey&api_key=your_sendgrid_password&task=edit&user=subuser_name&credential_name=credential_name&new_credential_password=credential_password %}
  {% response json %}
{
    "message" : "success"
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
Delete Subuser Multiple Credential
{% endanchor %}

Delete a subuser credential.

{% parameters delete %}
    {% parameter task Yes 'Must be set to <code>delete</code>' 'Task to delete a subuser credential' %}
    {% parameter user Yes 'The subuser name' 'The subuser whose multi cred users you are looking for' %}
    {% parameter credential_name Yes 'The credential name' 'The current name of the credential' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/apiv2/customer.credential api_user=apikey&api_key=your_sendgrid_password&task=delete&user=subuser_name&credential_name=credential_name %}
  {% response json %}
{
    "message" : "success"
}
  {% endresponse %}
  {% response xml %}
   <result>
      <message>success</message>
   </result>
  {% endresponse %}
{% endapiexample %}
