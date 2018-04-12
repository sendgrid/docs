---
layout: page
weight: 475
title: IP Management
navigation:
   show: true
---

<page-anchor el="h2">
List
</page-anchor>

Obtain a complete list of all IPs on your account and which are free, taken or available.

{% parameters list %}
 {% parameter list Yes 'Must be set to one of:<br /><code>all</code> <code>free</code> <code>taken</code> <code>available</code>' 'Will return the IPs on the account that match the argument' %}
{% endparameters %}

The <code>list</code> argument will restrict the IPs returned:

<ul>
<li><strong>all</strong>: All IP addresses available on account, regardless of whether or not the IP is used by a subuser.</li>
<li><strong>free</strong>: All free IP addresses for the account. IPs that are not in use by any subusers.</li>
<li><strong>taken</strong>: All taken IP addresses for the account. IP addresses that are in use by one or more subusers.</li>
<li><strong>available</strong>: All available IP addresses for the account including all free IP addresses. If a subuser is <em>deactivated</em> and assigned an IP, that IP will show up on this list since that IP address is not actually being used.</li>
</ul>

{% apiexample list POST https://api.sendgrid.com/apiv2/customer.ip api_user=your_sendgrid_username&api_key=your_sendgrid_password&list=all %}
  {% response json %}
[
  {
    "ip": "255.255.255.250"
  },
  {
    "ip": "255.255.255.251"
  },
  {
    "ip": "255.255.255.252"
  }
]
  {% endresponse %}
  {% response xml %}
<ips>
   <ip>255.255.255.250</ip>
   <ip>255.255.255.251</ip>
   <ip>255.255.255.252</ip>
</ips>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Subuser IP List
</page-anchor>

{% parameters list %}
 {% parameter task Yes 'Must be set to <code>list</code>' 'Task to return the IPs in use by the subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser to get the IPs of' %}
{% endparameters %}

{% apiexample list POST https://api.sendgrid.com/apiv2/customer.sendip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=list&user=subuser_username %}
  {% response json %}
{
  "success": "success",
  "outboundcluster": "SendGrid MTA",
  "ips": [
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
}
  {% endresponse %}
  {% response xml %}
<sendips>
   <ocluster>SendGrid MTA</ocluster>
   <ips>
      <ip>255.255.255.250</ip>
      <ip>255.255.255.251</ip>
      <ip>255.255.255.252</ip>
      <ip>255.255.255.253</ip>
      <ip>255.255.255.254</ip>
   </ips>
</sendips>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Subuser IP Assignment
</page-anchor>
You need to assign at least ONE IP to your subuser.


{% parameters append %}
 {% parameter task Yes 'Must be set to <code>append</code>' 'Task to add ip to a subuser' %}
 {% parameter user Yes 'Subuser must be under your account' 'Subuser that is adding IPs' %}
 {% parameter set Yes 'Must be either:<br /><code>none</code> <code>all</code> <code>specify<code>' '<code>none</code>: Remove all ips.<br /><code>all</code>: Apply all possible ips to subuser.<br /><code>specify</code>: Specify the ips to the subser' %}
 {% parameter ip[] No 'Must be a valid set of IPs (use the list call to determine valid IPs)' 'If the <code>set</code> parameter is <code>specify</code>, then you must specify the IPs. Use the ip[] parameter to specify an IP: <code>ip[]=255.255.255.0[]=255.255.255.1</code>' %}
{% endparameters %}

{% apiexample append POST https://api.sendgrid.com/apiv2/customer.sendip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=append&set=specify&user=subuser_username&ip[]=255.255.255.250&ip[]=255.255.255.255 %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
