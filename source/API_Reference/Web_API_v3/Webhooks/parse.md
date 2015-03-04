---
layout: page
title: Parse API
weight: 80
navigation:
  show: false
---

Parse API Settings API manages the [Parse API]({{root_url}}/API_Reference/Webhooks/parse.html) settings.

{% anchor h2 %}
GET
{% endanchor %}

Gets Parse API settings.

{% apiv3example get GET https://api.sendgrid.com/v3/webhooks/parse/settings %}
{% v3response %}
{
  “url”: “http://mydomain.com/parse”
  “hostname”: “mail.mydomain.com”,
  “spam_check_outgoing”: true
}
{% endv3response %}
{% endapiv3example %}
