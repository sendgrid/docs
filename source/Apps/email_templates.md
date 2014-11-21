---
layout: page
weight: 0
title: Legacy Email Templates
navigation:
  show: true
---

{% warning %}
This documentation is for our original Email Templates, today we have a more full featured **[Template Engine]({{root_url}}/API_Reference/Web_API_v3/Template_Engine/index.html)**, which supports multiple templates, versioning and more. [Read More »]({{root_url}}/API_Reference/Web_API_v3/Template_Engine/index.html) 
{% endwarning %}

{% info %} This App is only available to [Silver accounts and higher](https://sendgrid.com/transactional-email/pricing). {% endinfo %}

This app wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.

<s>![Legacy Email Template App Image]({{root_url}}/images/email_templates.png "Legacy Email Template")</s> 
{% anchor h2 %}
Settings 
{% endanchor %}

Use the embedded, full-featured HTML editor to create a template that your emails will be wrapped in. Be sure to include a tag to place the content of your email.

{% warning %}
Everything outside of the HTML template will be discarded. Keep this in mind if you are trying to add CSS or other content not contained in the template. 
{% endwarning %}

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#template) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Email-Templates) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
