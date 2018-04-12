---
layout: page
weight: 0
title: Multiple Credentials
navigation:
  show: true
---

{% warning %}
The Reseller API endpoints for creating and managing Multiple User Credentials may still be used. However, with the release of [Teammates]({{root_url}}/User_Guide/Settings/teammates.html), creating a Multiple User Credential through this API will create a teammate with administrator privileges.

While Teammates is backwards compatible with the Multiple User Credentials Reseller API, we do recommend that you use the [Teammates API]({{root_url}}/API_Reference/Web_API_v3/teammates.html) to create and manage teammates.

There will eventually be a deprecation plan for the Multiple Credential Users Reseller API.
{% endwarning %}



<page-anchor el="h2">
Add user credential
</page-anchor>

Notes: This API call allows SendGrid resellers to add a new set of credentials to a specified child account.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>The username must be be between 3 and 64 characters and cannot be completely numeric.</td>
         <td>The child account we are adding a credential to.</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>The task must be set to 'add'.</td>
         <td>The task we are setting so we create a credential.</td>
      </tr>
      <tr>
         <td>credential_name</td>
         <td>Yes</td>
         <td>The credential_name must be be between 3 and 64 characters and cannot be completely numeric.</td>
         <td>The credential we are creating under the child account.</td>
      </tr>
      <tr>
         <td>credential_password</td>
         <td>Yes</td>
         <td>See [SendGrid password requirements]({{root_url}}{{site.password_requirements}})</td>
         <td>The password used to authenticate the newly generated credential.</td>
      </tr>
   </tbody>
</table>

### XML API Request

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.credential.xml?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=reseller_customer&amp;task=add&amp;credential_name=reseller_customer_credential&amp;credential_password=reseller_customer_password
{% endcodeblock %}
<h4>Return - Success</h4>
{% codeblock lang:xml %}
<result>
   <message>success</message>
</result>

{% endcodeblock %}

#### Return - Error

{% codeblock lang:xml %}
<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

<h3>JSON API Request</h3>
{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.credential.json?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=reseller_customer&amp;task=add&amp;credential_name=reseller_customer_credential&amp;credential_password=reseller_customer_password
{% endcodeblock %}

#### Return - Success

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

#### Return - Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Edit user credential
</page-anchor>

Notes: This API call allows SendGrid resellers to edit an already existing credential password. Changing the credential name is not currently allowed.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>The username must be be between 3 and 64 characters and cannot be completely numeric.</td>
         <td>The username that we are checking against existing usernames.</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>The task must be set to 'edit'.</td>
         <td>The task we are setting so we edit a credential password</td>
      </tr>
      <tr>
         <td>credential_name</td>
         <td>Yes</td>
         <td>The credential_name must be be between 3 and 64 characters and cannot be completely numeric.</td>
         <td>The credential we want to modify</td>
      </tr>
      <tr>
         <td>new_credential_password</td>
         <td>Yes</td>
         <td>See [SendGrid password requirements]({{root_url}}{{site.password_requirements}})</td>
         <td>The updated password</td>
      </tr>
   </tbody>
</table>

### XML API Request

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.credential.xml?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=reseller_customer&amp;task=edit&amp;credential_name=reseller_customer_credential&amp;new_credential_password=reseller_customer_password
{% endcodeblock %}
<h4>Return - Success</h4>
{% codeblock lang:xml %}
<result>
   <message>success</message>
</result>

{% endcodeblock %}

#### Return - Error

{% codeblock lang:xml %}
<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON API Request

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.credential.json?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=reseller_customer&amp;task=edit&amp;credential_name=reseller_customer_credential&amp;new_credential_password=reseller_customer_password
{% endcodeblock %}

<h4>Return - Success</h4>

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

#### Return - Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

</h4>

<page-anchor el="h2">
Delete user credential
</page-anchor>

Notes: This API call allows SendGrid resellers to delete an existing credential under a child account.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>user</td>
         <td>Yes</td>
         <td>The username must be be between 3 and 64 characters and cannot be completely numeric.</td>
         <td>The username that we are checking against existing usernames.</td>
      </tr>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>The task must be set to 'delete'.</td>
         <td>The task we are setting so we delete a credential</td>
      </tr>
      <tr>
         <td>credential_name</td>
         <td>Yes</td>
         <td>The credential_name must be be between 3 and 64 characters and cannot be completely numeric.</td>
         <td>The credential we want to remove</td>
      </tr>
   </tbody>
</table>

### XML API Request

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.credential.xml?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=reseller_customer&amp;task=delete&amp;credential_name=reseller_customer_credential
{% endcodeblock %}
<h4>Return - Success</h4>
{% codeblock lang:xml %}
<result>
   <message>success</message>
</result>

{% endcodeblock %}

#### Return - Error

{% codeblock lang:xml %}
<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}

### JSON API Request

{% codeblock %}
https://api.sendgrid.com/apiv2/reseller.credential.json?api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;user=reseller_customer&amp;task=delete&amp;credential_name=reseller_customer_credential
{% endcodeblock %}

<h4>Return - Success</h4>

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

#### Return - Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}
