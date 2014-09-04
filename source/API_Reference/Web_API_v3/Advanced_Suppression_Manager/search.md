---
layout: page
title: Supressions Search
weight: 70
navigation:
  show: true
---

{% anchor h2 %}
POST
{% endanchor %}

{% parameters post %}
  {% parameter recipient_emails true 'Array of valid email addresses.' 'The emails to search for in suppression groups.' %}
  {% parameter description true 'String' 'A description of your suppression group (for your reference)' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/asm/groups/:group_id/suppressions/search recipient_emails=["test1@example.com", "test2@example.com"] %}
{% v3response %}
HTTP/1.1 200
{"recipient_emails":["test2@example.com"]}
{% endv3response %}
{% endapiv3example %}
