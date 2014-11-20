---
layout: page
weight: 0
title: Event Notification
navigation:
  show: true
---

The Event Notification App controls webhook notifications for events, such as bounces, clicks, opens, and more. This App allows these events to be POSTed to a URL of your choosing.

{% info %}
You can read more about the [Event Notification service]({{root_url}}/API_Reference/Webhooks/event.html). 
{% endinfo %}
![Event Notification App Image]({{root_url}}/images/event_notification.png "Event Notification")
{% anchor h2 %}
Settings 
{% endanchor %}

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Name</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>Emails are "x"</td>
         <td>As needed</td>
         <td>Enables the selected notifications.</td>
      </tr>
      <tr>
         <td>Post Event URL</td>
         <td>Yes</td>
         <td>Sets the entered URL as the target of notification posts.</td>
      </tr>
   </tbody>
</table>

Settings may be changed through:

-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Event-Notification) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
