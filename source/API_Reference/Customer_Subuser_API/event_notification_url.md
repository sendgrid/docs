---
layout: page
weight: 0
title: Event Notification URL
navigation:
   show: true
---

{% anchor h2 %}
Retrieve 
{% endanchor %}

{% parameters retrieve %}
 {% parameter 'task' 'Yes' 'Must be set to *get*' 'This will allow you to retrieve the event notification url for the specified subuser' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The username of the subuser' %}
{% endparameters %}


{% apiexample retrieve POST https://api.sendgrid.com/apiv2/customer.eventposturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=get&user=example@example.com %}
  {% response json %}
{
  "url": "http:\\/\\/www.SubUserPostUrlHere.com"
}
  {% endresponse %}
  {% response xml %}
<url>http://www.SubUserPostUrlHere.com</url>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Update / Set URL 
{% endanchor %}

{% parameters set %}
 {% parameter 'task' 'Yes' 'Must be set to *set*' 'This will allow you to retrieve the event notification url for the specified subuser' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The name of the subuser' %}
 {% parameter 'url' 'Yes' 'The notification URL' 'This is the new event notification URL' %}
{% endparameters %}


{% apiexample set POST https://api.sendgrid.com/apiv2/customer.eventposturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=set&user=example@example.com&url=http://www.SubUserPostUrlHere.co %}
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
Delete 
{% endanchor %}

{% parameters delete %}
 {% parameter 'task' 'Yes' 'Must be set to *delete*' 'This will allow you to delete the event notification url for the specified subuser' %}
 {% parameter 'user' 'Yes' 'Subuser must be registered under your account' 'The name of the subuser' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/customer.eventposturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&user=example@example.co %}
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
