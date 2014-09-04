---
layout: page
title: Groups
weight: 90
navigation:
  show: true
---

Groups are individual types of email you would like your users to be able to unsubscribe from, (e.g. Newsletters, Invoices, Password Resets)

{% anchor h2 %}
GET
{% endanchor %}
Retrieve all suppression groups associated with your account. 

{% apiv3example get-specific GET https://api.sendgrid.com/v3/asm/groups %}
{% v3response %}
[
  {"id": 100, "name": "Newsletters", "description": "Our monthly newsletter.", "last_email_sent_at": "2014-09-04 01:34:43", "unsubscribes": 400},
  {"id": 101, "name": "Password Resets", "description 2": "Emails sent when users forget their password.", "last_email_sent_at": "2012-11-06 09:37:33", "unsubscribes": 1}
]
{% endv3response %}
{% endapiv3example %}


{% anchor h2 %}
GET
{% endanchor %}
Get information on a single suppression group.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/asm/groups/:group_id %}
{% v3response %}
{"id": 100, "name": "Newsletters", "description": "Our monthly newsletter.", "last_email_sent_at": "2014-09-04 01:34:43", "unsubscribes": 400}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
POST
{% endanchor %}
Create a new suppression group.

{% parameters post %}
  {% parameter name true 'String, may not share its name with any other suppression group in your account.' 'The name of the new suppression group.' %}
  {% parameter description true 'String' 'A description of your suppression group (for your reference)' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/asm/groups name=Product+Suggestions&description=Suggestions+for+products+our+users+might+like. %}
  {% v3response %}
HTTP/1.1 201 OK

{
  "id":103,
  "name": "Product Suggestions",
  "description": "Suggestions for products our users might like.",
  "last_email_sent_at": "NOT IMPLEMENTED"
}
{% endv3response %}
{% endapiv3example %}


{% anchor h2 %}
PATCH
{% endanchor %}
Update a suppression group.

{% parameters patch %}
  {% parameter name false 'String, may not share its name with any other suppression group in your account.' 'The name of the new suppression group.' %}
  {% parameter description false 'String' 'A description of your suppression group (for your reference)' %}
{% endparameters %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/asm/groups/:group_id name=Item+Suggestions&description=Suggestions+for+items+our+users+might+like. %}
  {% v3response %}
HTTP/1.1 201 OK

{
  "id":103,
  "name": "Item Suggestions",
  "description": "Suggestions for items our users might like.",
  "last_email_sent_at": "2014-09-05 03:14:15"
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
DELETE
{% endanchor %}
Delete a suppression group.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/asm/groups/:group_id %}
  {% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
  {% endv3response %}
{% endapiv3example %}