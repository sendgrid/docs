---
layout: page
weight: 0
title: Parse Webhook Settings
navigation:
  show: true
---

{% anchor h2 %}
get 
{% endanchor %}

Retrieve settings already configured for parsing incoming email.


{% apiexample get GET https://api.sendgrid.com/api/parse.get api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "parse": [
    {
      "hostname": "www.example.com",
      "url": "www.mydomain.com/parse.php",
      "spam_check": 1
    }
  ]
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<parse>
   <entry>
      <hostname>www.example.com</hostname>
      <url>www.mydomain.com/parse.php</url>
      <spam_check>1</spam_check>
   </entry>
</parse>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
set 
{% endanchor %}

Specify the hostname and url for parsing incoming emails.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>hostname</td>
         <td>Yes</td>
         <td>alphanumeric</td>
         <td>The hostname (domain or subdomain) for which you would like to configure a Parse Webhook callback URL.</td>
      </tr>
      <tr>
         <td>url</td>
         <td>Yes</td>
         <td>alphanumeric</td>
         <td>The callback URL to which Parse Webhook payloads will be POSTed.</td>
      </tr>
      <tr>
         <td>spam_check</td>
         <td>No</td>
         <td>0 or 1</td>
         <td>If spam check is enabled, messages that look like spam will not be POSTed.</td>
      </tr>
   </tbody>
</table>


{% apiexample set POST https://api.sendgrid.com/api/parse.set api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1 %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Delete Entry 
{% endanchor %}

Delete the existing settings for parsing incoming emails.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>hostname</td>
         <td>Yes</td>
         <td>alphanumeric</td>
         <td>The hostname (domain or subdomain) for which you would like to delete Parse Webhook settings.</td>
      </tr>
   </tbody>
</table>


{% apiexample delete POST https://api.sendgrid.com/api/parse.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
