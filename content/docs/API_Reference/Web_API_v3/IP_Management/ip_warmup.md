---
st:
  published_at: 2017-04-12
  type: API
seo:
  title: Automated IP Warmup
  description: Use the API to create IP pools, assign IP addresses to them, and enable IP warmup pools and IPs.
  keywords: auto, automatic, warm, up, api, v3, ip, pool, warmup, pools
title: Automated IP Warmup
weight: 0
layout: page
navigation:
  show: true
---

SendGrid can automatically warmup dedicated IP addresses by limiting the amount of mail that can be sent through them per hour. This section allows you to use the API to create IP pools, assign IP addresses to them, and enable IP warmup pools and the IPs within pools.

**Learn more about [automated IP warmup here]({{root_url}}/Classroom/Basics/Misc/automated_ip_warmup.html).**


* * * * *

<page-anchor el="h2">
GET
</page-anchor>

Get all IPs that are currently warming up. The value returned for "start_date" represents the date that the IP was entered into warmup, and is always formatted as a Unix timestamp.

{% apiv3example get-all GET https://api.sendgrid.com/v3/ips/warmup %}
  {% v3response %}
HTTP/1.1 200 OK

[
  {
    "ip": "0.0.0.0",
    "start_date": 1409616000
  }
]
  {% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>
Get warmup status for a particular IP.

{% parameters get %}
  {% parameter ip Yes 'Valid IP address' 'IP address for which to retrieve status' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/ips/warmup/:ip_address %}
  {% v3response %}
HTTP/1.1 200 OK

[
  {
    "ip":"0.0.0.0",
    "start_date":1409616000
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
POST
</page-anchor>
Add an IP to warmup.

{% parameters post %}
  {% parameter ip true 'A valid IP address.' 'The IP address to warmup.' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/ips/warmup ip=000.000.000.000 %}
{% v3response %}
HTTP/1.1 201 OK

[
  {
    "ip":"0.0.0.0",
    "start_date":1409616000
  }
]
{% endv3response %}
{% endapiv3example %}

<page-anchor el="h2">
DELETE
</page-anchor>
Remove an IP from warmup.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/warmup/0.0.0.0 %}
{% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
{% endv3response %}
{% endapiv3example %}
