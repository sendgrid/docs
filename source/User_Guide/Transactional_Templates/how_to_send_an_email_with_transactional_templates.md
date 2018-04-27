---
layout: page
weight: 100
title: How to send an email with Dynamic Transactional Templates
navigation:
  show: false
seo:
  title: How to send an email with Dynamic Transactional Templates
  override: true
  description: 
---

- [Before you begin](#-Before-you-begin)
- [Design a dynamic transactional template](#-Design-a-dynamic-template)
- [Send a transactional email](#-Send-a-transactional-email)
 
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
1. Design your template. For more information on designing a Dynamic Transactional Template using the Design Editor or Code Editor, see [Create and edit Dynamic Transactional Templates]({{root_url}}/User_Guide/Transactional_Templates/create_and_edit_dynamic_transactional_templates.html).

Here's a sample template: <a href="/source/assets/sample_dynamic_template.html" target="_blank">Hipster Cat Cafe</a>

{% anchor h2 %}
Send a transactional email
{% endanchor %}

*To send a dynamic transactional email:*

In order to send a dynamic transactional email using cURL, set your call up to look something like this:

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

It is important to note two sections of this call when using dynamic templates.

In order to send dynamic content, you need to specify a collection of key/value pairs in the `dynamic_template_data` object following the pattern `"handlebar_tag":"value to substitute"`. All are assumed to be strings. These handlebar substitutions apply to the text and html content of the body of your email, in addition to the subject and reply-to parameters. The total collective size of your handle bar substitutions may not exceed 10,000 bytes per personalization object.

{% codeblock %}
 }],
    "dynamic_template_data": {
      "guest": "Anthony Wang"
      "partysize": 4,
      "english": true,
      "date": "April 1st, 2018"
    }
  }],
{% endcodeblock %}

In addition to specifying the dynamic template data, you need to specify the template ID. The template ID is 64 characters with one dash (d-uuid). If you forget your template ID and want to access it from the API, use the following curl call to retrieve all of your transactional templates:

{% codeblock %}
curl --request GET \
  --url 'https://api.sendgrid.com/v3/templates?generations\[\]=legacy&generations\[\]=dynamic' \
  --header 'Authorization: Bearer SG.keyhere' \
  --header 'Content-Type: application/json'
{% endcodeblock %}

You can also copy your template ID from the app and paste it into your call. 

![]({{root_url}}/img/dynamic_template_id.png "Dynamic Template ID")

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Transactional Templates Overview](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html)
- [Dynamic Templates API](https://dynamic-templates.api-docs.io/3.0)
- [Transactional Email Unsubscribes]({{root_url}}/User_Guide/Transactional_Email/unsubscribes.html)
