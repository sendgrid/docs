---
layout: page
weight: 0
title: Automatic Login
navigation:
   show: true
---

Allow customers to manage their account from your website using an iframe to our site.

{% anchor h2 %}
Initial API Call 
{% endanchor %}

In order to login your customer, you need to contact our web API to retrieve the unique URL to automatically login your customer. Then display the generated URL to automatically login your customer.


{% parameters call %}
 {% parameter 'user' 'Yes' 'Must be set in email format' 'This is the customer you will attempt to automatically login' %}
 {% parameter 'password' 'No' 'Your customer password.' 'Authenticate the customer with this API call.' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>geturl</em>' 'Allows you to access automatic login functionality' %}
{% endparameters %}


{% apiexample call POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&method=geturl&user=customer@example.com %}
  {% response json %}
{
  "params": "al_username=username&al_subuser_name=customer@example.com&al_hash=aa39649af578679d3a90d2cc43245d56"
}
  {% endresponse %}
  {% response xml %}
<params>
   <params>al_username=username=customer@example.com=b478ab36ebc306990dd283b1c341898e</params>
</params>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
iFrame Usage 
{% endanchor %}

Using the parameters returned from the Initial API Call, you can construct the iFrame URL as shown below.

{% codeblock %} <iframe src="https://sendgrid.com/account?al_username=username&amp;al_subuser_name=example@example.com&amp;al_hash=aa39649af578679d3a90d2cc43245d56"></iframe> {% endcodeblock %}

</div>
</div>
