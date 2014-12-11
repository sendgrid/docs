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

Add recipient addresses to the global suppression group.

{% parameters post %}
 {% parameter recipient_emails Yes 'Array of valid email addresses' 'Addresses to add to the global suppression group' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/asm/suppressions/global recipient_emails=["test1@example.com", "test2@example.com"] %}
{% v3response %}
HTTP/1.1 201
{"recipient_emails":["test1@example.com","test2@example.com"]}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}

Check if a recipient address is in the global suppressions group.

{% apiv3example get GET https://api.sendgrid.com/v3/asm/suppressions/global/:email_address %}
{% v3response %}
HTTP/1.1 200
{
  "recipient_email": "test1@example.com"
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
DELETE
{% endanchor %}

Delete a recipient email from the global suppressions group.

{% apiv3example get DELETE https://api.sendgrid.com/v3/asm/suppressions/global/:email_address %}
{% v3response %}
HTTP/1.1 204
{% endv3response %}
{% endapiv3example %}
