---
layout: page
weight: 0
title: Event Notification URL
navigation:
   show: true
---

{% warning %}
This endpoint has been deprecated, and should not be used. Use the [Event Notification app]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Event-Notification) with the [Subuser App endpoint]({{root_url}}/API_Reference/Web_API/Customer_Subuser_API/apps.html) instead.
{% endwarning %}

<page-anchor el="h2">
Get
</page-anchor>

{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <code>get</code>' 'Task to get the url for the specified user' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'Username of the subuser to get settings for' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/customer.eventposturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=get&user=subuser_username %}
  {% response json %}
{
  "url": "http:\/\/www.SubUserPostUrlHere.com"
}
  {% endresponse %}
  {% response xml %}
<url>http://www.SubUserPostUrlHere.com</url>
  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Update / Set URL
</page-anchor>

{% parameters set %}
 {% parameter 'task' 'Yes' 'Must be set to <code>set</code>' 'Task to set the eventurl for the subuser' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The name of the subuser' %}
 {% parameter 'url' 'Yes' 'The notification URL' 'This is the new event notification URL' %}
{% endparameters %}

{% apiexample set POST https://api.sendgrid.com/apiv2/customer.eventposturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=set&user=subuser_username&url=http://www.SubUserPostUrlHere.com %}
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

<page-anchor el="h2">
Delete
</page-anchor>

{% parameters delete %}
 {% parameter 'task' 'Yes' 'Must be set to <code>delete</code>' 'Task to delete the event notification url for the specified subuser' %}
 {% parameter 'user' 'Yes' 'Subuser must be under your account' 'The name of the subuser' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/apiv2/customer.eventposturl api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&user=subuser_username %}
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
