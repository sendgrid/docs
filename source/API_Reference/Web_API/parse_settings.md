---
layout: page
weight: 0
title: Parse Webhook Settings
navigation:
  show: true
---

With the [Parse Webhook]({{root_url}}/API_Reference/Webhooks/parse.html) you can parse the content and attachments of emails. The Web API endpoints allow you to setup, get, and delete your Parse Webhooks settings.

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
 {% parameter 'spam_check' 'No' '0 or 1' 'If enabled, mmessages will POST, and will have added fields of spam_report and spam_score' %}
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
