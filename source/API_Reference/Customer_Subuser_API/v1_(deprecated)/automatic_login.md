---
layout: page
weight: 0
title: Automatic Login
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
 This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Customer_Subuser_API/automatic_login.html) Customer Subuser API Automatic Login page 
{% endwarning %}

<div>
Allow subusers to manage their account from your website using an iframe to our site.

{% anchor h2 %}
Initial API Call 
{% endanchor %}
In order to login your subuser, you need to contact our web API to retrieve the unique URL to automatically login your subuser. Then display the generated URL to automatically login your subuser.

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
         <td>Must be set in email format</td>
         <td>This is the subuser you will attempt to automatically login</td>
      </tr>
      <tr>
         <td>password</td>
         <td>No</td>
         <td>Your subuser password.</td>
         <td>Authenticate the subuser with this API call.</td>
      </tr>
   </tbody>
</table>

{% xmljsontabs call %} 
{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.geturl.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<params>
   <params>al_username=username=example@example.com=b478ab36ebc306990dd283b1c341898e</params>
</params>

{% endcodeblock %}

</div>
<div class="tab-pane active" id="call-json">
### Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/user.geturl.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock lang:json %}
{
  "params": "al_username=username&amp;al_subuser_name=example@example.com&amp;al_hash=aa39649af578679d3a90d2cc43245d56"
}
{% endcodeblock %}

</div>
</div>

* * * * *

{% anchor h2 %}
iFrame Usage 
{% endanchor %}
Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below. {% codeblock %} <iframe src="https://sendgrid.com/account?al_username=username&amp;al_subuser_name=example@example.com&amp;al_hash=aa39649af578679d3a90d2cc43245d56"></iframe> {% endcodeblock %}

</div>
