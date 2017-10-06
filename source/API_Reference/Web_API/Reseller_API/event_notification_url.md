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

{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>get</em>' 'This will allow you to retrieve the event notification url for the specified customer' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The username of the customer' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>eventposturl</em>' 'Allows you to access post event url functionality' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=get&user=customer@example.com&method=eventpostur %}
  {% response json %}
{
  "url": "http://www.SubUserPostUrlHere.com"
}
  {% endresponse %}
  {% response xml %}
<url>http://www.SubUserPostUrlHere.com\&gt;</url>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Update / Set URL 
{% endanchor %}

{% parameters set %}
 {% parameter 'task' 'Yes' 'Must be set to <em>set</em>' 'This will allow you to retrieve the event notification url for the specified customer' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The name of the customer' %}
 {% parameter 'url' 'Yes' 'The notification URL' 'This is the new event notification URL' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>eventposturl</em>' 'Allows you to access post event url functionality' %}
{% endparameters %}


{% apiexample set POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=set&user=customer@example.com&url=http://www.SubUserPostUrlHere.com&method=eventposturl %}
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
 {% parameter 'task' 'Yes' 'Must be set to <em>delete</em>' 'This will allow you to delete the event notification url for the specified customer' %}
 {% parameter 'user' 'Yes' 'Customer must be registered under your account' 'The name of the customer' %}
 {% parameter 'method' 'Yes' 'Must be set to <em>eventposturl</em>' 'Allows you to access post event url functionality' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.manage api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&user=customer@example.com&method=eventposturl %}
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
