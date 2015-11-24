---
seo:
  title: API Key Permissions List
  description: A record of all possible API Key permissions
  keywords: API, API Key, permissions, authentication, scope
title: API Key Permissions List
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Scopes For Each Use Case
{% endanchor h2 %}

There are separate API Keys for general API calls and billing specific calls. Requiring a separate key for billing API calls prevents a user from gaining too much access to your account and potentially abusing that access. A user should only have as much access as needed to complete his or her job: applying scopes, or permissions, to an API Key allows you to achieve this.

You are able to assign an API key these specific permissions during the key creation process, but they can also be changed later. Several specific use cases for an API Key and the permissions that you might want to assign to that key, are described below. A complete list of all possible permissions scopes can be found here.

{% info %}
When you create an API Key, you cannot assign it more permissions than you currently have.
{% endinfo %}

{% anchor h3 %}
Permissions
{% endanchor h3 %}

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

{% anchor h3 %}
Billing
{% endanchor h3 %}

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

Stats do not have "full access" because it would be impossible for you to change your stats via an API call.

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
