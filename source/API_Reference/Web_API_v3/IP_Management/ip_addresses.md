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
See a list of all IPs and the IPs warm up status.

{% apiv3example get GET https://api.sendgrid.com/v3/ips %}
{% v3response %}
HTTP/1.1 200 OK

[
  {
    "ip":"167.89.21.3",
    "pools":[],
    "warmup":true,
    "start_date":1409616000
  }
]
{% endv3response %}
{% endapiv3example %}


