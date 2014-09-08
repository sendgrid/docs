---
layout: page
title: IP Pools
weight: 90
navigation:
  show: true
---

{% info %}
IP Pools are available if you have dedicated IPs for your account.
To add IPs to your account, please contact support.
{% endinfo %}

{% anchor h2 %}
Using IP Pools with the SMTP API Header
{% endanchor %}

IP Pools allow you to group your dedicated SendGrid IP addresses
together. For example, you might have separate pools named
_transactional_ and _marketing_. 

Then, when sending marketing emails, you may specify that the _marketing_ pool be used, so that your transactional emails maintain their own reputation.

{% codeblock lang:json %}
{
  "ip_pool": [
    "marketing"
  ]
}
{% endcodeblock %}

{% warning %}
If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.
{% endwarning %}

{% anchor h2 %}
GET
{% endanchor GET https://api.sendgrid.com/v3/ips/pools/ %}
List all IP pools.

{% apiv3example get GET https://api.sendgrid.com/v3/ips/pools %}
{% v3response %}
["marketing","transactional"]
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
POST
{% endanchor %}
Create an IP pool.

{% parameters post %}
  {% parameter name 'A string with a max length of 64 characters.' 'The name of the pool.' %}
{% endparameters %}

{% info %}
There is a limit of 10 IP pools per user.
{% endinfo %}

{% anchor h2 %}
GET
{% endanchor %}
List the IPs in a specified pool.

{% apiv3example get GET https://api.sendgrid.com/v3/ips/pools/:pool_name %}
{% v3response %}
_
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
PUT
{% endanchor %}
Update an IP pool's name

{% parameters put %}
  {% parameter name true 'A string with a max length of 64 characters.' 'The new name of the pool.' %}
{% endparameters %}

{% apiv3example put PUT https://api.sendgrid.com/v3/ips/pools/:pool_name name=new_pool_name %}
{% v3response %}
_
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
DELETE
{% endanchor %}
Delete an IP pool.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/ips/pools/:pool_name %}
  {% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
  {% endv3response %}
{% endapiv3example %}

