---
layout: page
weight: 0
title: Template Engine
navigation:
  show: true
---

{% info %}
This App is only available to [Silver accounts and higher](https://sendgrid.com/transactional-email/pricing)
{% endinfo %}

This app is our new [Template Engine]({{root_url}}/API_Reference/Web_API_v3/Template_Engine/index.html), that supports multiple templates, versioning and more. Previously, we had a Template App, now called the [Legacy Template App]({{root_url}}/Apps/email_templates.html). 

This app seperates email templates and design from sending, allowing templates to be worked on through the SendGrid UI and then populated during mail sending.

{% info %}
There is currently a limit of 100 Templates and 100 Versions that may be created per account. _Please reach out to support if you reach into the limit._
{% endinfo %}

This app is differs from our other apps, and may be found in a [different location](https://sendgrid.com/templates).

More documentation may be found with the [Template Engine API Reference]({{root_url}}/API_Reference/Web_API_v3/Template_Engine/index.html).

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
         <td>template_id</td>
         <td>Yes</td>
         <td>The ID of the template to use when sending a message.</td>
      </tr>
   </tbody>
</table>

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#templates) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API_v3/Template_Engine/index.html) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/templates) (on an account wide basis)
