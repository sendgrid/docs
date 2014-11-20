---
layout: page
weight: 0
title: Click Tracking
navigation:
  show: true
---

Enabling the Click Tracking App causes all the links in your emails to be overwritten and pointed to our servers so we can track clicks. If you would like a custom name to appear in the links you can create a CNAME that points to sendgrid.net and fill out the [Whitelabel](https://sendgrid.com/whitelabel/) settings (only available in Silver or higher accounts) in your account with your new name.

![Click Tracking App Image]({{root_url}}/images/click_tracking.png "Click Tracking")

{% anchor h2 %}
Settings 
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Name</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Enable</td>
         <td>Yes</td>
         <td>All the links in your emails will be overwritten and pointed to our servers.</td>
      </tr>
   </tbody>
</table>

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#clicktrack) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Click-Tracking) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
