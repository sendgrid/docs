---
layout: page
title: IP Pools
weight: 90
navigation:
  show: true
---

{% anchor h2 %}
Using IP Pools with the SMTP API Header
{% endanchor %}

{% info %}
IP pools can only be used with whitelabeled IP addresses.
{% endinfo %}

IP Pools allow you to group your dedicated SendGrid IP addresses
together. For example, you might have separate pools named
`transactional` and `marketing`. 

Then, when sending marketing emails, you may specify that the `marketing` pool be used, so that your transactional IPs maintain their own reputation.

{% codeblock lang:json %}

{"to": ["destination.com"],"ip_pool": "pool_name"}

{% endcodeblock %}

{% warning %}
If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.
{% endwarning %}

* * * * *

{% anchor h2 %}
POST
{% endanchor %}
Create an IP pool.

{% info %}
There is a limit of 100 IP pools per user.
{% endinfo %}

{% parameters post %}
  {% parameter name Yes 'String. max of 64 characters' 'Name of the new IPpool' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/ips/pools name=marketing%}
{% apiv3requestbody %} {"name":"marketing"} {% endapiv3requestbody %}
{% v3response %}
{"name":"marketing"}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor  %}
Retrieve all IP pools.

{% apiv3example get GET https://api.sendgrid.com/v3/ips/pools %}
{% v3response %}
HTTP/1.1 200
[
  {
    "name": "test1"
  },
  {
    "name": "test2"
  },
  {
    "name": "test3"
  },
  {
    "name": "new_test3"
  }
]

{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}
Retrieve all IPs in a specified pool.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/ips/pools/{pool_name} %}
{% v3response %}
HTTP/1.1 200 OK	

{
  "ips":["167.89.21.3"],
  "pool_name":"new_test5"
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
PUT
{% endanchor %}
Update an IP pool's name.

{% parameters put %}
  {% parameter name Yes 'String. max 64 characters' 'New name of the pool' %}
{% endparameters %}

{% apiv3example put PUT https://api.sendgrid.com/v3/ips/pools/{pool_name} name=new_pool_name %}

{% apiv3requestbody %} {"name":"marketing"} {% endapiv3requestbody %}

{% v3response %}
HTTP/1.1 200 OK	

{
	"name":"new_pool_name"
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
POST
{% endanchor %}
Add an IP Address to a pool.

{% apiv3example post POST https://api.sendgrid.com/v3/ips/pools/{pool_name}/ips %}

{% apiv3requestbody %} {"ip":"0.00.0.0"} {% endapiv3requestbody %}

{% v3response %}
HTTP/1.1 200 OK	

{
  "ip": "0.00.0.0",
  "pools": [
    "marketing"
  ],
  "start_date": null,
  "warmup": false
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
DELETE
{% endanchor %}
Remove an IP Address from a pool.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/pools/{pool_name}/ips/{ip} %}

{% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
DELETE
{% endanchor %}
Delete an IP pool.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/pools/{pool_name} %}

{% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
{% endv3response %}
{% endapiv3example %}

