---
layout: page
title: IP Addresses
weight: 100
navigation:
  show: true
---

{% anchor h2 %}
GET
{% endanchor %}
See a list of all IPs and the IPs, including warm up status and pools.

{% apiv3example get GET https://api.sendgrid.com/v3/ips %}
{% v3response %}
HTTP/1.1 200 OK

[
  {
    "ip":"167.89.21.3",
    "pools":["new_test5"],
    "warmup":true,
    "start_date":1409616000
  }
]
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}		
GET		
{% endanchor %}		
See which pools an IP address belongs to.		
		
{% apiv3example get-specific GET https://api.sendgrid.com/v3/ips/0.0.0.0 %}		
  {% v3response %}		
HTTP/1.1 200 OK		
		
{		
  "ip":"167.89.21.3",		
  "pools":["example_pool_1"],		
  "warmup":false		
}		
  {% endv3response %}		
{% endapiv3example %}		
		
{% anchor h2 %}		
POST		
{% endanchor %}		
Add an IP to a pool.		
		
{% info %}		
An IP may belong to multiple pools. It may take 60 seconds for your IP		
address to be added to a pool after your request is made.		
{% endinfo %}		
		
{% parameters post %}		
  {% parameter ip true 'A valid IP address.' 'The IP address to add to the pool.' %}		
{% endparameters %}		
		
{% apiv3example post POST https://api.sendgrid.com/v3/ips/pools/:pool_name/ips ip=0.0.0.0 %}		
  {% v3response %}		
HTTP/1.1 201 OK		
		
{		
    "ip":"0.0.0.0",		
    "pool_name":"example_pool_1"		
}		
  {% endv3response %}		
{% endapiv3example %}		
		
{% anchor h2 %}		
DELETE		
{% endanchor %}		
Remove an IP address from a pool.		
		
{% parameters post %}		
  {% parameter ip true 'A valid IP address.' 'The IP address to remove from the pool.' %}		
{% endparameters %}		
		
{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/pools/:pool_name/ips ip=0.0.0.0 %}		
  {% v3response %}		
HTTP/1.1 204 NO CONTENT (OK)		
  {% endv3response %}		
{% endapiv3example %}
