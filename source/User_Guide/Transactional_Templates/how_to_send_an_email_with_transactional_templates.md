---
title: How to send an email with dynamic transactional templates
seo: dynamic templates, getting started, SendGrid, transactional email
  title: How to send an email with dynamic transactional templates
weight: 100
layout: page
navigation:
  show: false
  description: SendGrid's dynamic transactional templates allow senders to easily send custom content. 
---

- [Before you begin](#-Before-you-begin)
- [Design a dynamic transactional template](#-Design-a-dynamic-transactional-template)
- [Send a transactional email](#-Send-a-transactional-email)
  - [Send email using the SendGrid API](#-Send-email-using-the-SendGrid-API)
  - [Send email using SMTP](#-Send-email-using-SMTP)

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
1. Select an editor and click **Continue**.
1. Design your template. For more information on designing a Dynamic Transactional Template using the Design Editor or Code Editor, see [Create and edit Dynamic Transactional Templates]({{root_url}}/User_Guide/Transactional)Templates/create_and_edit_dynamic_transactional_templates.html).

{% anchor h2 %}
Send a transactional email
{% endanchor %}


{% anchor h3 %}
Send transactional email using the SendGrid API
{% endanchor %}

*To send a dynamic transactional email:*

{% codeblock %}
curl -X "POST" "https://api.sendgrid.com/v3/mail/send" \
     -H 'Authorization: Bearer [YourAPIKeyGoesHere!]' \
     -H 'Content-Type: application/json' \
     -d $'{
  "from": {
    "email": "example@.sendgrid.net"
  },
  "personalizations": [{
    "to": [{
      "email": "example@sendgrid.net"
    }],
    "dynamic_template_data": {
      "guest": "Anthony Wang"
      "partysize": 4,
      "english": true,
      "date": "April 1st, 2018"
    }
  }],
  "template_id": "[template_id]",
}'
{% endcodeblock %}

If you forget your template ID and want to access it from the API, use the following curl call to retrieve all of your transactional templates:

{% codeblock %}
curl --request GET \
  --url 'https://api.sendgrid.com/v3/templates?generations\[\]=legacy&generations\[\]=dynamic' \
  --header 'Authorization: Bearer SG.keyhere' \
  --header 'Content-Type: application/json'
{% endcodeblock %}

Or you can copy your template ID from the app and paste it into your call. 

![]({{root_url}}/img/dynamic_template_id.png "Dynamic Template ID")

{% anchor h3 %}
Send transactional email using SMTP
{% endanchor %}

Coming soon!

{% info %}
The original template you copy won't be modified and remains active in any API or SMTP calls. To use the new template, update the template ID parameter in your code.
{% endinfo %}

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Transactional Templates Overview](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html)
- [Dynamic Templates API](https://dynamic-templates.api-docs.io/3.0)
- [Transactional Email Unsubscribes]({{root_url}}/User_Guide/Transactional_Email/unsubscribes.html)