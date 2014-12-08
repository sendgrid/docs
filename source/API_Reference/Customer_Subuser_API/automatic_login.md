---
layout: page
weight: 30
title: Automatic iFrame Login
navigation:
   show: true
---
Allow subusers to manage their account from your website using an iframe to our site. 

{% anchor h2 %}
Initial API Call 
{% endanchor %}
In order to login your subuser, you need to contact our API to retrieve the unique URL to automatically login your subuser. Then display the generated URL to automatically login your subuser.

{% parameters geturl %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'This is the subuser to automatically login' %}
 {% parameter 'password' 'No' 'subuser password' 'Automatically [authenticate]({{root_url}}/API_Reference/Customer_Subuser_API/authenticate_a_subuser.html) the subuser with this API call' %}
{% endparameters %}

{% apiexample geturl POST https://api.sendgrid.com/apiv2/customer.geturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=subuser_username %}
  {% response json %}
{
  "params": "al_username=your_sendgrid_username&al_subuser_name=subuser_username&al_hash=aa39649af578679d3a90d2cc43245d56"
}
  {% endresponse %}
  {% response xml %}
<params>
   <params>al_username=your_sendgrid_username=subuser_username=aa39649af578679d3a90d2cc43245d56</params>
</params>

  {% endresponse %}
{% endapiexample %}

{% info %}
If you submit the password and we cannot authenticate the user, the params are returned with a <code>NULL</code> al_hash.
{% endinfo %}

* * * * *

{% anchor h2 %}
iFrame Usage 
{% endanchor %}
Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below. {% codeblock %} <iframe src="https://sendgrid.com/account?al_username=your_username&amp;al_subuser_name=subuser_username&amp;al_hash=aa39649af578679d3a90d2cc43245d56"></iframe> {% endcodeblock %}
