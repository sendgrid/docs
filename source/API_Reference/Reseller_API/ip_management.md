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

<table id="parameters-get" class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>all</em>
            .
         </td>
         <td>Retrieve all IPs available for your account.</td>
      </tr>
      <tr>
         <td>ip</td>
         <td>No</td>
         <td>Can be a complete or partial IP address.</td>
         <td>Filter your search results.</td>
      </tr>
      <tr>
         <td>system</td>
         <td>No</td>
         <td>
            Must be set to
            <em>true</em>
            .
         </td>
         <td>Include IPs assigned by SendGrid.</td>
      </tr>
   </tbody>
</table>


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

<table id="parameters-free" class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Parameter</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>free</em>
            .
         </td>
         <td>Retrieve all free IPs for your account.</td>
      </tr>
      <tr>
         <td>ip</td>
         <td>No</td>
         <td>Can be a complete or partial IP address.</td>
         <td>Filter your search results.</td>
      </tr>
   </tbody>
</table>


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

<table id="parameters-taken" class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Parameter</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>taken</em>
            .
         </td>
         <td>Retrieve all taken IPs for your account.</td>
      </tr>
      <tr>
         <td>ip</td>
         <td>No</td>
         <td>Can be a complete or partial IP address.</td>
         <td>Filter your search results.</td>
      </tr>
   </tbody>
</table>


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

<table id="parameters-available" class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Parameter</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>available</em>
            .
         </td>
         <td>Retrieve all available IPs for your account.</td>
      </tr>
      <tr>
         <td>ip</td>
         <td>No</td>
         <td>Can be a complete or partial IP address.</td>
         <td>Filter your search results.</td>
      </tr>
   </tbody>
</table>


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

<table id="parameters-usage" class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Parameter</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>task</td>
         <td>Yes</td>
         <td>
            Must be set to
            <em>usage</em>
            .
         </td>
         <td>Retrieve all IPs in use broken down by user.</td>
      </tr>
      <tr>
         <td>ip</td>
         <td>No</td>
         <td>Can be a complete or partial IP address.</td>
         <td>Filter your search results.</td>
      </tr>
      <tr>
         <td>user</td>
         <td>No</td>
         <td>Can be a complete or part of a username.</td>
         <td>Filter your search results.</td>
      </tr>
      <tr>
         <td>group</td>
         <td>No</td>
         <td>Can be a complete or part of a group name.</td>
         <td>Filter your search results.</td>
      </tr>
      <tr>
         <td>system</td>
         <td>No</td>
         <td>
            Must be set to
            <em>true</em>
            .
         </td>
         <td>Include IPs assigned by SendGrid.</td>
      </tr>
   </tbody>
</table>


{% apiexample usage POST https://api.sendgrid.com/apiv2/reseller.ip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=usage&user=example.com %}
  {% response json %}
[
  {
    "ip": "255.255.253.0",
    "user": "user4@example.com"
  },
  {
    "ip": "255.255.254.0",
    "user": "user4@example.com"
  }
]
  {% endresponse %}
  {% response xml %}
<ips>
   <entry>
      <ip>255.255.253.0</ip>
      <user>user4@example.com</user>
   </entry>
   <entry>
      <ip>255.255.254.0</ip>
      <user>user4@example.com</user>
   </entry>
</ips>

  {% endresponse %}
{% endapiexample %}
