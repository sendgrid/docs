---
layout: page
title: IP Addresses
weight: 100
navigation:
  show: true
---

<page-anchor el="h2">
POST
</page-anchor>
Add IP Addresses.

{% parameters post %}
  {% parameter count Yes Integer 'The amount of IPs to add to the account.' %}
  {% parameter subuser No String 'Array of usernames to be assigned a send IP.' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/ips %}

{% apiv3requestbody %}
{
  "count": 2,
  "subusers": [
    "subuser1",
    "subuser2"
  ],
  "warmup": true,
  "user_can_send": true
}
{% endapiv3requestbody %}

{% v3response %}
HTTP/1.1 201 OK

{
  "ips": [
    {
      "ip": "1.2.3.4",
      "subusers": [
        "user",
        "subuser1"
      ]
    },
    {
      "ip": "1.2.3.5",
      "subusers": [
        "user",
        "subuser1"
      ]
    }
  ],
  "remaining_ips": 1,
  "warmup": true
}
  {% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>
Get amount of IP Addresses that can still be created during a given period and the price of those IPs.

{% apiv3example get GET https://api.sendgrid.com/v3/ips/remaining %}
{% v3response %}
HTTP/1.1 200 OK

[
  {
  "results": [
    {
      "remaining": 2,
      "period": "month",
      "price_per_ip": 30
    }
  ]

{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>
See a list of all assigned and unassigned IPs. Response includes warm up status, pools, assigned subusers, and whitelabel info.
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

<page-anchor el="h2">
GET
</page-anchor>
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

<page-anchor el="h2">
GET
</page-anchor>
See which pools an IP address belongs to.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/ips/{ip_address}%}
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
