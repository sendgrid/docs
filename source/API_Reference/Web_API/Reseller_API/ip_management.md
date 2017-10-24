---
layout: page
weight: 0
title: IP Management
navigation:
   show: true
---

{% anchor h2 %}
All 
{% endanchor %}

View all IPs under your account.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>all</em> .' 'Retrieve all IPs available for your account.' %}
 {% parameter 'ip' 'No' 'Can be a complete or partial IP address.' 'Filter your search results.' %}
 {% parameter 'system' 'No' 'Must be set to <em>true</em> .' 'Include IPs assigned by SendGrid.' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.ip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=all %}
  {% response json %}
[
  {
    "ip": "255.255.255.250"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.252"
  },
  {
    "ip": "255.255.255.253"
  },
  {
    "ip": "255.255.255.254"
  }
]
  {% endresponse %}
  {% response xml %}
<ips>
   <ip>255.255.255.0</ip>
   <ip>255.255.254.0</ip>
   <ip>255.255.253.0</ip>
   <ip>255.255.252.0</ip>
</ips>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Free 
{% endanchor %}

A listing of all free IPs under your account. A Free IP is any IP that is not in use by a user or is not linked to an IP grouping.


{% parameters free %}
 {% parameter 'task' 'Yes' 'Must be set to <em>free</em> .' 'Retrieve all free IPs for your account.' %}
 {% parameter 'ip' 'No' 'Can be a complete or partial IP address.' 'Filter your search results.' %}
{% endparameters %}


{% apiexample free POST https://api.sendgrid.com/apiv2/reseller.ip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=free %}
  {% response json %}
[
  {
    "ip": "255.255.255.250"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.252"
  },
  {
    "ip": "255.255.255.253"
  },
  {
    "ip": "255.255.255.254"
  }
]
  {% endresponse %}
  {% response xml %}
<ips>
   <ip>255.255.255.0</ip>
   <ip>255.255.254.0</ip>
   <ip>255.255.253.0</ip>
   <ip>255.255.252.0</ip>
</ips>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Taken 
{% endanchor %}

A listing of all taken IPs under your account. A Taken IP is any IP that is in use by a user or is linked to an IP grouping.


{% parameters taken %}
 {% parameter 'task' 'Yes' 'Must be set to <em>taken</em> .' 'Retrieve all taken IPs for your account.' %}
 {% parameter 'ip' 'No' 'Can be a complete or partial IP address.' 'Filter your search results.' %}
{% endparameters %}


{% apiexample taken POST https://api.sendgrid.com/apiv2/reseller.ip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=taken %}
  {% response json %}
[
  {
    "ip": "255.255.255.250"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.252"
  },
  {
    "ip": "255.255.255.253"
  },
  {
    "ip": "255.255.255.254"
  }
]
  {% endresponse %}
  {% response xml %}
<ips>
   <ip>255.255.255.0</ip>
   <ip>255.255.254.0</ip>
   <ip>255.255.253.0</ip>
   <ip>255.255.252.0</ip>
</ips>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Available 
{% endanchor %}

A listing of all available IPs under your account. An Available IP is any IP that is currently free, or is in use by a user *but* that user is inactive or that is not linked to an IP grouping.


{% parameters available %}
 {% parameter 'task' 'Yes' 'Must be set to <em>available</em> .' 'Retrieve all available IPs for your account.' %}
 {% parameter 'ip' 'No' 'Can be a complete or partial IP address.' 'Filter your search results.' %}
{% endparameters %}


{% apiexample available POST https://api.sendgrid.com/apiv2/reseller.ip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=available %}
  {% response json %}
[
  {
    "ip": "255.255.255.250"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.252"
  },
  {
    "ip": "255.255.255.253"
  },
  {
    "ip": "255.255.255.254"
  }
]
  {% endresponse %}
  {% response xml %}
<ips>
   <ip>255.255.255.0</ip>
   <ip>255.255.254.0</ip>
   <ip>255.255.253.0</ip>
   <ip>255.255.252.0</ip>
</ips>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Usage 
{% endanchor %}

The current breakdown of users who are using your IPs.


{% parameters usage %}
 {% parameter 'task' 'Yes' 'Must be set to <em>usage</em> .' 'Retrieve all IPs in use broken down by user.' %}
 {% parameter 'ip' 'No' 'Can be a complete or partial IP address.' 'Filter your search results.' %}
 {% parameter 'user' 'No' 'Can be a complete or part of a username.' 'Filter your search results.' %}
 {% parameter 'group' 'No' 'Can be a complete or part of a group name.' 'Filter your search results.' %}
 {% parameter 'system' 'No' 'Must be set to <em>true</em> .' 'Include IPs assigned by SendGrid.' %}
{% endparameters %}


{% apiexample usage POST https://api.sendgrid.com/apiv2/reseller.ip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=usage&user=example.com %}
  {% response json %}
[
  {
    "ip": "255.255.253.0",
    "user": "example@example.com"
  },
  {
    "ip": "255.255.254.0",
    "user": "example@example.com"
  }
]
  {% endresponse %}
  {% response xml %}
<ips>
   <entry>
      <ip>255.255.253.0</ip>
      <user>example@example.com</user>
   </entry>
   <entry>
      <ip>255.255.254.0</ip>
      <user>example@example.com</user>
   </entry>
</ips>

  {% endresponse %}
{% endapiexample %}
