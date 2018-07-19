---
layout: page
title: Unsubscribe Groups
weight: 90
navigation:
  show: true
  title: Unsubscribe Groups
---

Groups are specific types of email you would like your recipients to be able to unsubscribe from or subscribe to. For example: Daily Newsletters, Invoices, System Alerts.

{% info %}
The `name` and `description` of the Group will be visible by recipients when they are managing their subscriptions.
{% endinfo %}

{% anchor h2 %}
POST
{% endanchor %}
Create a new suppression group.

{% info %}
There is a limit of 25 groups per user.
{% endinfo %}

{% parameters post %}
  {% parameter name Yes 'String. May not share its name with any other suppression group on the user. Max 30 characters' 'The name of the new suppression group' %}
  {% parameter description Yes 'String. Max 100 characters' 'A description of the suppression group' %}
  {% parameter is_default No 'Boolean' 'Default value is false' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/asm/groups name=Product+Suggestions&description=Suggestions+for+products+our+users+might+like. %}

{% apiv3requestbody %}
{
  "name": "Product Suggestions",
  "description": "Suggestions for products our users might like.",
  "is_default": true
}
{% endapiv3requestbody %}

{% v3response %}
HTTP/1.1 201 OK

{
  "id":103,
  "name": "Product Suggestions",
  "description": "Suggestions for products our users might like.",
  "is_default": false
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}
Retrieve all suppression groups associated with the user.

{% apiv3example get GET https://api.sendgrid.com/v3/asm/groups %}
{% v3response %}
[
  {
    "id": 100,
    "name": "Newsletters",
    "description": "Our monthly newsletter.",
    "last_email_sent_at": null,
    "is_default": true,
    "unsubscribes": 400
  },
  {
    "id": 101,
    "name": "Alerts",
    "description 2": "Emails triggered by user-defined rules.",
    "last_email_sent_at": null,
    "is_default": false,
    "unsubscribes": 1
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}
Get information on a single suppression group.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/asm/groups/:group_id %}
{% v3response %}
{
    "id": 100,
    "name": "Newsletters",
    "description": "Our monthly newsletter.",
    "last_email_sent_at": null,
    "is_default": true,
    "unsubscribes": 400
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
PATCH
{% endanchor %}
Update a suppression group.

{% parameters patch %}
  {% parameter name No 'String. May not share its name with any other suppression group on the user. Max 30 characters' 'The name of the new suppression group' %}
  {% parameter description No 'String. Max 100 characters' 'A description of the suppression group' %}
{% endparameters %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/asm/groups/:group_id name=Item+Suggestions&description=Suggestions+for+items+our+users+might+like. %}
  {% v3response %}
HTTP/1.1 201 OK

{
  "id":103,
  "name": "Item Suggestions",
  "description": "Suggestions for items our users might like."
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}

Retrieve information about multiple suppression groups.

This endpoint will return information for each group ID that you include in your request. To add a group ID to your request, simply append `&id=` followed by the group ID.

{% parameters get %}
  {% parameter id No Integer 'ID for a suppression group that you want to retrieve information for.' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/asm/groups?id={id1}&id={id2} %}

{% v3response %}
HTTP/1.1 200 OK

[
  {
    "id": 100,
    "name": "Newsletters",
    "description": "Our monthly newsletter.",
    "last_email_sent_at": null,
    "is_default" : true,
    "unsubscribes": 400
  },
  {
    "id": 101,
    "name": "Alerts",
    "description 2": "Emails triggered by user-defined rules.",
    "last_email_sent_at": null,
    "is_default" : false,
    "unsubscribes": 1
  }
]
{% endv3response %}

{% endapiv3example %}

* * * * *

{% anchor h2 %}
DELETE
{% endanchor %}
Delete a suppression group.

{% info %}
If a recipient uses the "one-click unsubscribe" option on an email
associated with a deleted group, that recipient will be added to the
global suppression list.
{% endinfo %}

{% apiv3example delete DELETE https://api.sendgrid.com/v3/asm/groups/:group_id %}
  {% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
  {% endv3response %}
  {%v3response %}
HTTP/1.1 400

{
  "error":"refusing to delete active group: group has been sent to within the past 60 days"
}
  {% endv3response %}
{% endapiv3example %}
