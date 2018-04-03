---
title: How to send an email with dynamic transactional templates
seo: dynamic templates, getting started, SendGrid, transactional email
  title: How to send an email with transactional templates
weight: 100
layout: page
navigation:
  show: true
---

- [Before you begin](#-Before-you-begin)
- [Design a dynamic transactional template](#-Design-a-dynamic-transactional-template)
- [Send a transactional email using the SendGrid API or SMTP ](#-Send-a-transactional-email-using-the-SendGrid-API-or-SMTP)

{% anchor h2 %}
Before you begin
{% endanchor %}

Before you create and send an email using a dynamic transactional template you need to do the following:

* Create a SendGrid account
* Create an [API Key]({{root_url}}/User_Guide/Settings/api_keys.html)
* Add an unsubscribe group (optional)


{% anchor h2 %}
Design a dynamic template
{% endanchor %}

1. Open the [transactional templates](https://sendgrid.com/dynamic_templates) page and click **Create Template**.
1. Add a unique template name and then click **Save**. 
1. To begin editing your new template, click **Add Version**.
1. Select an [editor]({{root_url}}/User_Guide/Marketing_Campaigns/editor.html) and click **Continue**.



{% anchor h2 %}
Send a transactional email using the SendGrid API or SMTP
{% endanchor %}

{% info %}
The original template you copy won't be modified and remains active in any API or SMTP calls. To use the new template, update the template ID parameter in your code.
{% endinfo %}

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Transactional Templates Overview](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html)
- [Dynamic Templates API](https://dynamic-templates.api-docs.io/3.0)
- [Transactional Email Unsubscribes]({{root_url}}/User_Guide/Transactional_Email/unsubscribes.html)