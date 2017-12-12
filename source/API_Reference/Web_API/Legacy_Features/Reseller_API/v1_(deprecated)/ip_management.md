---
layout: page
weight: 0
title: IP Management
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% anchor h2 %}
All 
{% endanchor %}

View all IPs under your account.

<table class="table table-bordered table-striped">
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

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=al
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}  <ips><ip>255.255.255.0</ip><ip>255.255.254.0</ip><ip>255.255.253.0</ip><ip>255.255.252.0</ip></ips
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=al
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response: Success</h3>
{% codeblock %}
"255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Free 
{% endanchor %}

A listing of all free IPs under your account. A Free IP is any IP that is not in use by a user or is not linked to an IP grouping.

<table class="table table-bordered table-striped">
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

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=fre
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}  <ips><ip>255.255.255.0</ip><ip>255.255.254.0</ip><ip>255.255.253.0</ip><ip>255.255.252.0</ip></ips
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=fre
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response: Success</h3>
{% codeblock %}
"255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Taken 
{% endanchor %}

A listing of all taken IPs under your account. A Taken IP is any IP that is in use by a user or is linked to an IP grouping.

<table class="table table-bordered table-striped">
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

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=take
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}  <ips><ip>255.255.255.0</ip><ip>255.255.254.0</ip><ip>255.255.253.0</ip><ip>255.255.252.0</ip></ips
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=take
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response: Success</h3>
{% codeblock %}
"255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Available 
{% endanchor %}

A listing of all available IPs under your account. An Available IP is any IP that is currently free, or is in use by a user *but* that user is inactive or that is not linked to an IP grouping.

<table class="table table-bordered table-striped">
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

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=availabl
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}  <ips><ip>255.255.255.0</ip><ip>255.255.254.0</ip><ip>255.255.253.0</ip><ip>255.255.252.0</ip></ips
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=availabl
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response: Success</h3>
{% codeblock %}
"255.255.255.0","255.255.254.0","255.255.253.0","255.255.252.0"
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Usage 
{% endanchor %}

The current breakdown of users who are using your IPs.

<table class="table table-bordered table-striped">
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

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=usage&user=example.com
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}  <ips><entry><ip>255.255.253.0</ip><user>example@example.com</user></entry><entry><ip>255.255.254.0</ip><user>example@example.com</user></entry></ips
{% endcodeblock %}
<h3>JSON Call</h3>
      
{% requestblock %}
        
  {% requesturl POST %}https://api.sendgrid.com/api/distributor.ip.json
  {% endrequesturl %}
        
  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;task=usage&amp;user=example.com
  {% endrequestdata %}
      
{% endrequestblock %}

<h3>Response: Success</h3>
{% codeblock %}
{"ip":"255.255.253.0","user":"example@example.com"},{"ip":"255.255.254.0","user":"example@example.com"}
{% endcodeblock %}

### Response: Error

{% codeblock lang:json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}
