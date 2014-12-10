---
layout: page
title: Enforced TLS
weight: 90
navigation:
  show: true
---

The Enforced TLS settings specify whether or not the recipient is required to 
support TLS or have a valid certificate. See the 
[SMTP Ports User Guide]({{root_url}}/User_Guide/Setting_Up_Your_Server/smtp_ports.html) for more
information on opportunistic TLS.

{% info %}
If either setting is enabled and the recipient does not support TLS or have a 
valid certificate, we drop the message and send a block event with "TLS required 
but not supported" as the description.
{% endinfo %}

{% anchor h2 %}
GET
{% endanchor %}

Get the current Enforced TLS settings.

{% apiv3example get GET https://api.sendgrid.com/v3/user/settings/enforced_tls %}
{% v3response %}
HTTP/1.1 200
{
    "require_tls": true,
    "require_valid_cert": false 
}

{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
PATCH
{% endanchor %}

Change the Enforced TLS settings.

{% parameters patch %}
  {% parameter require_tls No '`true` or `false`' 'Require recipient server to have TLS support' %}
  {% parameter require_valid_cert No '`true` or `false`' 'Require recipient server certificated to be valid' %}
{% endparameters %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/user/settings/enforced_tls require_tls=true %}
{% v3response %}
HTTP/1.1 200
{
  "require_tls": true, 
  "require_valid_cert": false
}
{% endv3response %}
{% endapiv3example %}

