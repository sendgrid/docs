---
layout: page
title: Global Suppressions
weight: 70
navigation:
  show: true
---

Global Suppressions are email addresses that will not receive any
emails.

{% anchor h2 %}
POST
{% endanchor %}

Add recipient emails to the global suppression group.

{% parameters post %}
 {% parameter recipient_emails true 'Array of valid email addresses.' 'The emails to add to the suppression group.' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/asm/suppressions/global recipient_emails=["test1@example.com", "test2@example.com"] %}
{% v3response %}
HTTP/1.1 201
{"recipient_emails":["test1@example.com","test2@example.com"]}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
GET
{% endanchor %}

Check if an address is in the global suppressions group.

{% apiv3example get GET https://api.sendgrid.com/v3/asm/suppressions/:email_address %}
{% v3response %}
HTTP/1.1 200
{
  "recipient_email": "test1@example.com"
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
DELETE
{% endanchor %}

Delete a recipient email from the global suppressions group.

{% apiv3example get DELETE https://api.sendgrid.com/v3/asm/groups/:group_name/suppressions/:email_address %}
{% v3response %}
HTTP/1.1 204
{% endv3response %}
{% endapiv3example %}

