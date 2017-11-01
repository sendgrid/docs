---
layout: page
title: IP Addresses
weight: 100
navigation:
  show: true
---

{% anchor h2 %}   
POST    
{% endanchor %}   
Add an IP to a pool.   
    
{% info %}    
An IP may belong to multiple pools. It may take 60 seconds for your IP    
address to be added to a pool after your request is made.  
{% endinfo %}   
    
{% parameters post %}   
  {% parameter ip Yes 'Valid IP address' 'IP address to add to the pool' %}    
{% endparameters %}   
    
{% apiv3example post POST https://api.sendgrid.com/v3/ips/pools/{pool_name}/ips ip=0.0.0.0 %}    
{% v3response %}    
HTTP/1.1 201 OK   
    
{   
"ip": "000.00.00.0",
"pools": [
"test1"
],
"start_date": 1409616000,
"warmup": true
}   
  {% endv3response %}   
{% endapiv3example %} 

* * * * *

{% anchor h2 %}
GET
{% endanchor %}
See a list of all assigned and unassigned IPs. Response includes warm up status,  pools, assigned subusers, and whitelabel info.
The start_date field corresponds to when warmup started for that IP.

{% apiv3example get GET https://api.sendgrid.com/v3/ips %}
{% v3response %}
HTTP/1.1 200 OK

[
  {
    "ip":"000.00.00.0",
    "warmup":true,
    "start_date":1409616000,
    "subusers": ["username1", "username2"],
    "rdns": "01.email.test.com",
    "pools": ["pool1", "pool2"]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}
See only *assigned* IPs.

{% apiv3example get GET https://api.sendgrid.com/v3/ips/assigned %}
{% v3response %}
HTTP/1.1 200 OK

[
  {
    "ip":"167.89.21.3",
    "pools":["new_test5"],
    "warmup":true,
    "start_date":1409616000,
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}		
GET		
{% endanchor %}		
See which pools an IP address belongs to.		
		
{% apiv3example get-specific GET https://api.sendgrid.com/v3/ips/0.0.0.0 %}		
  {% v3response %}		
HTTP/1.1 200 OK	

{
  "ip": "000.00.00.0",
  "subusers": [
    "subuser1",
    "subuser2"
  ],
  "rdns": "o1.em.example.com",
  "pools": ["test1"],
  "warmup": false,
  "start_date": null,
  "whitelabeled": true
}

  {% endv3response %}		
{% endapiv3example %}

* * * * *
		
{% anchor h2 %}		
DELETE		
{% endanchor %}		
Remove an IP address from a pool.		
		
{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/pools/:pool_name/ips/:ip %}		
  {% v3response %}		
HTTP/1.1 204 NO CONTENT (OK)		
  {% endv3response %}		
{% endapiv3example %}
