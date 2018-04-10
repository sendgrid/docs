---
layout: page
weight: 0
title: View Available Packages
navigation:
   show: true
---

List all packages available to your account.

There are no extra parameters required for this call

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.packages api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "name": "Basic Package",
    "price": 9.95,
    "description": "Basic Package description",
    "credits": 10000,
    "overage": 0.001,
    "has_reseller": false,
    "has_ip": false,
    "distributor_price": 50
  },
  {
    "name": "Silver Package",
    "price": 79.95,
    "description": "Silver Package description",
    "credits": 50000,
    "overage": 0.001,
    "has_reseller": false,
    "has_ip": true
  }
]
  {% endresponse %}
  {% response xml %}
<result>
   <packages>
      <package>
         <name>Basic Package</name>
         <price>9.95</price>
         <description>Basic Package description</description>
         <credits>10000</credits>
         <overage>0.001</overage>
         <has_reseller>false</has_reseller>
         <has_ip>false</has_ip>
         <distributor_price>50</distributor_price>
      </package>
      <package>
         <name>Silver Package</name>
         <price>79.95</price>
         <description>Silver Package Description</description>
         <credits>50000</credits>
         <overage>0.001</overage>
         <has_reseller>false</has_reseller>
         <has_ip>false</has_ip>
         <distributor_price>50</distributor_price>
      </package>
   </packages>
</result>

  {% endresponse %}
{% endapiexample %}
