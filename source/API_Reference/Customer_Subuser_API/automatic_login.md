---
layout: page
weight: 0
title: Automatic Login
navigation:
   show: true
---
Allow subusers to manage their account from your website using an iframe to our site. 
{% anchor h2 %}
Initial API Call 
{% endanchor %}
In order to login your subuser, you need to contact our web API to retrieve the unique URL to automatically login your subuser. Then display the generated URL to automatically login your subuser.

{% parameters auto %}
 {% parameter 'user' 'Yes' 'Must be set in email format' 'This is the subuser you will attempt to automatically login' %}
 {% parameter 'password' 'No' 'Your subuser password.' 'Authenticate the subuser with this API call.' %}
{% endparameters %}


{% apiexample auto POST https://api.sendgrid.com/apiv2/customer.geturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&user=example@example.com %}
  {% response json %}
{
  "params": "al_username=username&al_subuser_name=example@example.com&al_hash=aa39649af578679d3a90d2cc43245d56"
}
  {% endresponse %}
  {% response xml %}
<params>
   <params>al_username=username=example@example.com=b478ab36ebc306990dd283b1c341898e</params>
</params>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
iFrame Usage 
{% endanchor %}
Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below. {% codeblock %} <iframe src="https://sendgrid.com/account?al_username=username&amp;al_subuser_name=example@example.com&amp;al_hash=aa39649af578679d3a90d2cc43245d56"></iframe> {% endcodeblock %}
