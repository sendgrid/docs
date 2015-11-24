---
layout: page
weight: 0
title: API Key Permissions
navigation:
  show: true
seo:
  title: API Key Permissions
  description: Some example use cases for API Key permissions.
  keywords: API, API Key, permissions, scopes, security, credentials
---
{% anchor h2 %}
What are API Key permissions?
{% endanchor h2 %}

API Keys are used to authenticate an API call. By assigning specific permissions to an API Key, you can limit exactly which calls an API Key is able to authenticate, very similar to the way in which a computer administrator can assign file "read" or "write" access to certain users. For example, if you were to create an API Key for authenticating calls that would result in creating, reading, or sending email, you would want to assign the `mail.send` permission to that key to allow it to send email. However, you would not want to assign it the `billing.update` permission, since that would be outside the scope of its permissions.

{% anchor h2 %}
Why are API Key permissions useful?
{% endanchor h2 %}

We require that you use a dedicated API Key for billing related API calls that is separate from the key used for general API calls. This separation prevents a user from gaining too much access to your account and potentially abusing that access. In addition to the required separate billing API Key, we recommend creating a dedicated API Key for several other categories of API calls. A good security practice is to assign a user only as much access as is necessary to complete his or her job: this can be achieved by applying permissions to each API Key.

In our above example, we made sure to exclude `billing.update` from the list of permissions for our mail sending API Key. This is so that someone with the mail sending key would be unable to access and change sensitive billing information.

{% anchor h2 %}
How can I use API Key permissions?
{% endanchor h2 %}

During the API Key creation process you will be able to:

1. Give your new key a name for easy identification
2. Set which permissions are to be associated with your new key

Once an API Key is assigned permissions, it will only be able to authenticate API calls that reside within the scope of those permissions.

API Key permissions are not permanent and may be changed any time after the key has been created.

{% info %}
When you create an API Key, you can not assign it more permissions than you currently have.
{% endinfo %}

Several specific use cases for an API Key and the permissions that you might want to assign to that key, are described below. A complete list of all possible permissions scopes can be found [here]({{root_url}}/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html).

{% anchor h3 %}
Permissions
{% endanchor h3 %}

There are several general categories of permissions that allow you to grant "read" and "write" access to an API endpoint, or to prohibit all access to that endpoint.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Permission</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>No Access</td>
         <td>You cannot access this endpoint.</td>
      </tr>
      <tr>
         <td>Read Access</td>
         <td>You can only access GET endpoints.</td>
      </tr>
      <tr>
         <td>Write Access</td>
         <td>You can only access PATCH, PUT, DELETE, and POST endpoints.</td>
      </tr>
   </tbody>
</table>

{% anchor h2 %}
Example API Keys with Recommended Permissions
{% endanchor h2 %}

{% anchor h3 %}
Billing
{% endanchor h3 %}

An API Key for authenticating billing related API calls should be given the following permissions.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <td>billing.delete</td>
         <td>Perform a cancellation of the account</td>
      </tr>
      <tr>
         <td>billing.read</td>
         <td>Retrieve billing information and invoices</td>
      </tr>
      <tr>
         <td>billing.update</td>
         <td>Modify billing information, including the ability to perform package changes</td>
      </tr>
   </tbody>
</table>

{% anchor h3 %}
Mail
{% endanchor h3 %}

If you were to create an API Key for authenticating API calls that result in creating, sending, reading, and deleting emails, you would want to assign that key the following permissions.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <td>mail.batch.create</td>
         <td>Create batch id for schedule and cancel scheduled sends</td>
      </tr>
      <tr>
         <td>mail.batch.delete</td>
         <td>Delete batch id for schedule and cancel scheduled sends</td>
      </tr>
      <tr>
         <td>mail.batch.read</td>
         <td></td>
      </tr>
      <tr>
         <td>mail.batch.update</td>
         <td></td>
      </tr>
      <tr>
         <td>mail.send</td>
         <td>Send mail</td>
      </tr>
   </tbody>
</table>

{% anchor h3 %}
Marketing Campaigns
{% endanchor h3 %}

An API Key used only to authenticate API calls that relate specifically to Marketing Campaigns should include the following permissions.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <td>marketing_campaigns.create</td>
         <td>Perform POST operations on marketing campaigns</td>
      </tr>
      <tr>
         <td>marketing_campaigns.delete</td>
         <td>perform DELETE operations on marketing campaign APIs</td>
      </tr>
      <tr>
         <td>marketing_campaigns.read</td>
         <td>perform GET operations on marketing campaign APIs</td>
      </tr>
      <tr>
         <td>marketing_campaigns.update</td>
         <td>perform PUT/PATCH operations on marketing campaign APIs</td>
      </tr>
   </tbody>
</table>

{% anchor h3 %}
Stats
{% endanchor h3 %}

To limit who can access your statistics, create an API Key with the following permissions. Stats do not have "full access" because it would be impossible for you to change your stats via an API call.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <td>stats.read</td>
         <td>Retreive stats</td>
      </tr>
      <tr>
         <td>stats.global.read</td>
         <td>Retrieve global stats</td>
      </tr>
   </tbody>
</table>

{% anchor h3 %}
Whitelabel
{% endanchor h3 %}

An API Key for authenticating API calls that can create, change, and remove whitelabel information would require the the following permissions.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <td>whitelabel.create</td>
         <td>Create whitelabels</td>
      </tr>
      <tr>
         <td>whitelabel.delete</td>
         <td>Delete existing whitelabels</td>
      </tr>
      <tr>
         <td>whitelabel.read</td>
         <td>Retrieve whitelabels</td>
      </tr>
      <tr>
         <td>whitelabel.update</td>
         <td>Update existing whitelabels</td>
      </tr>
   </tbody>
</table>
