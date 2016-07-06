---
layout: page
title: IP Warmup
weight: 80
navigation:
  show: true
---

SendGrid can automatically warmup dedicated IP addresses by limiting the amount
of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details.

If you have existing warm IPs as well as new IPs that need warming, any mail beyond the hourly maximum limit will overflow to your existing warm IPs.

If there are no existing warm IPs, any requests made above the hourly maximum limit will overflow to our Shared IP Warmup clusters for sending. If your sending reputation is below 85, you will not be able to use these Shared IP Warmup clusters.

An IP in warmup will always follow SendGrid’s Warmup Schedule. Please consider a measured approach when sending on a new IP to allow for proper IP warmup. You can read more on [the importance of warming up a new IP]({{root_url}}/Classroom/Deliver/warming_up_ips.html) and consider your sending volume for best deliverability.

* * * * *

{% anchor h2 %}
GET
{% endanchor %}

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

{% anchor h2 %}
GET
{% endanchor %}
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

{% anchor h2 %}
POST
{% endanchor %}
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

{% anchor h2 %}
DELETE
{% endanchor %}
Remove an IP from warmup.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/warmup/0.0.0.0 %}
{% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
{% endv3response %}
{% endapiv3example %}
