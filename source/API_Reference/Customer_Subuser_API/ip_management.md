---
layout: page
weight: 0
title: IP Management
navigation:
   show: true
---

List

Obtain a complete list of all IP's and which are free, taken or available.


{% parameters list %}
 {% parameter 'list' 'Yes' 'Must be set to either ( all / free / taken / available )' %}
{% endparameters %}


Here is a brief explanation of each option available for the list parameter:

all
:   All IP addresses available to account, regardless of whether or not the IP is taken by a subuser
free
:   All free IP addresses for the account. If a subuser is using an IP, it will not show up on this list
taken
:   All taken IP addresses for the account. Only IP addresses that taken by subusers will show up on this list
available
:   All available IP addresses for the account including all free IP addresses. If a subuser is deactivated*and* is assigned an IP, that IP will show up on this list since that IP address is not being used by anyone

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

{% anchor h2 %}
Subuser IP Usage 
{% endanchor %}
If your account has more than one IP address, you can manage what IPs your subusers are allowed to send from. If you remove all IPs from a specified user, they will use all IPs from from your list.


{% parameters usage %}
 {% parameter 'task' 'Yes' 'Must be set to *list*' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' %}
{% endparameters %}


{% apiexample usage POST https://api.sendgrid.com/apiv2/customer.sendip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=list&user=example@example.com %}
  {% response json %}
{
  "success": "success",
  "outboundcluster": "o1.sendgrid.net",
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
   <ocluster>o1.sendgrid.net</ocluster>
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

{% anchor h2 %}
Subuser IP Assignment 
{% endanchor %}
You need to assign at least ONE IP to your subuser.


{% parameters subuser %}
 {% parameter 'task' 'Yes' 'Must be set to *append*' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' %}
 {% parameter 'set' 'Yes' 'Must be either: **none**: Remove all ips. **all**: Apply all possible ips to subuser. **specify**: Specify the ips to the subser. Must be a valid set of IPs (use the list call to determine valid IPs)' %}
 {% parameter 'ip[]' 'No' 'If the *set* parameter is set, then you must specify the IPs. Use the ip[] parameter to specify an IP. [ IE - ip[]=255.255.255.0[]=255.255.255.1 ]' %}
{% endparameters %}


{% apiexample subuser POST https://api.sendgrid.com/apiv2/customer.sendip api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=append&set=specify&user=example@example.com&ip[]=255.255.255.250&ip[]=255.255.255.255 %}
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
