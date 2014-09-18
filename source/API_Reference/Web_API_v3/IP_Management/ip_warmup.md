---
layout: page
title: IP Warmup
weight: 80
navigation:
  show: true
---

SendGrid can automatically warmup dedicated IP addresses by limiting the amount
of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details.

If you have warm IPs as well as new IPs that need warming, any mail beyond the hourly automatic warmup
limit will overflow to your existing IPs.

If there are no warm IPs, any requests made above the hourly maximum will overflow to our shared IP Warmup clusters for sending. If your sending reputation is below 85, you will not be able to use
this pool.

An IP in warmup will follow SendGrid's warmup policy schedule. 

{% info %}
IP Pools are available if you have dedicated IPs for your account.
To add IPs to your account, please contact support.
{% endinfo %}

{% anchor h2 %}
GET
{% endanchor %}
Get all IPs that are currently warming up.

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

{% anchor h2 %}
GET
{% endanchor %}
Get warmup status for a particular IP.

{% parameters get %}
  {% parameter ip true 'A valid IP address.' 'The IP address for which to retrieve status.' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/ips/warmup/:ip_address %}
  {% v3response %}
HTTP/1.1 200 OK

{
  "ip":"167.89.21.3",
  "start_date":1409616000
}
  {% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
POST
{% endanchor %}
Add an IP to warmup.

{% parameters post %}
  {% parameter ip true 'A valid IP address.' 'The IP address to warmup.' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/ips/warmup ip=000.000.000.000 %}
{% v3response %}
_
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
DELETE
{% endanchor %}
Remove an IP from warmup.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/warmup/000.000.000.000 %}
{% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
{% endv3response %}
{% endapiv3example %} 
