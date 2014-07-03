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


{% parameters set %}
 {% parameter 'hostname' 'Yes' 'alphanumeric' 'The hostname (domain or subdomain) for which you would like to configure a Parse Webhook callback URL.' %}
 {% parameter 'url' 'Yes' 'alphanumeric' 'The callback URL to which Parse Webhook payloads will be POSTed.' %}
 {% parameter 'spam_check' 'No' '0 or 1' 'If spam check is enabled, messages that look like spam will not be POSTed.' %}
{% endparameters %}


{% apiexample set POST https://api.sendgrid.com/api/parse.set api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com&url=www.mydomain.com/parse.php&spam_check=1 %}
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

* * * * *

{% anchor h2 %}
Delete Entry 
{% endanchor %}

Delete the existing settings for parsing incoming emails.


{% parameters set %}
 {% parameter 'hostname' 'Yes' 'alphanumeric' 'The hostname (domain or subdomain) for which you would like to delete Parse Webhook settings.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/api/parse.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&hostname=www.example.com %}
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
