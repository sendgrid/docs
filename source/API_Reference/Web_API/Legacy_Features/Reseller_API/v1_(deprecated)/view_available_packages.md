---
layout: page
weight: 0
title: View Available Packages
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

List all packages available to your account.

There are no extra parameters required for this call

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.packages.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
result><packages><package><name>Basic Package</name><price>9.95</price><description>Basic Package description</description><credits>10000</credits><overage>0.001</overage><has_reseller>false</has_reseller><has_ip>false</has_ip><distributor_price>50</distributor_price></package><package><name>Silver Package</name><price>79.95</price><description>Silver Package Description</description><credits>50000</credits><overage>0.001</overage><has_reseller>false</has_reseller><has_ip>false</has_ip><distributor_price>50</distributor_price></package></packages></result>
{% endcodeblock %}
<h3>Response: Error</h3>
{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>error</message>
   <errors>
      <error>... error messages ...</error>
   </errors>
</result>

{% endcodeblock %}

### JSON Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.packages.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password
  {% endrequestdata %}

{% endrequestblock %}

### Response: Success

{% codeblock %}
[{"name":"Basic Package","price":9.95,"description":"Basic Package description","credits":10000,"overage":0.001,"has_reseller":false,"has_ip":false,"distributor_price":50},{"name":"Silver Package","price":79.95,"description":"Silver Package description","credits":50000,"overage":0.001,"has_reseller":false,"has_ip":true}]
{% endcodeblock %}
<h3>Response: Error</h3>

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}
