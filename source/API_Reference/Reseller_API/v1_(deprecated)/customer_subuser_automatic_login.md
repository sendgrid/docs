---
layout: page
weight: 0
title: Customer Subuser Automatic Login
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
 This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Reseller_API/Reseller_Customer_Subuser_API/customer_subuser_automatic_login.html) Reseller Customer Subuser Automatic Login page
{% endwarning %}

Allow customer subusers to manage their account from your website using an iframe to our site.

* * * * *

{% anchor h2 %}
Initial API Call 
{% endanchor %}

In order to login your customer subuser, you need to contact our web API to retrieve the unique URL to automatically login your customer subuser. Then display the generated URL to automatically login yourcustomer subuser.

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
         <td>Must be set in email format</td>
         <td>This is the customer subuser you will attempt to automatically login</td>
      </tr>
      <tr>
         <td>password</td>
         <td>No</td>
         <td>Your customer subuser password.</td>
         <td>Authenticate the customer subuser with this API call.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=geturl&user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
params><params>al_username=username&amp;al_subuser_name=example@example.com&amp;al_hash=b478ab36ebc306990dd283b1c341898e</params></params>
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.manageSubuser.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;method=geturl&amp;user=example@example.com
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
"params":"al_username=username&amp;al_subuser_name=example@example.com&amp;al_hash=aa39649af578679d3a90d2cc43245d56"
{% endcodeblock %}

* * * * *

{% anchor h2 %}
iFrame Usage 
{% endanchor %}

Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below.

{% codeblock %} <iframe src="https://sendgrid.com/account?al_username=username&amp;al_subuser_name=example@example.com&amp;al_hash=aa39649af578679d3a90d2cc43245d56"></iframe> {% endcodeblock %}
