---
layout: page
title: Suppressions
weight: 80
navigation:
  show: true
---

Suppressions are email addresses that can be added to [groups]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html) to prevent certain types of emails from being delivered to those addresses.

{% anchor h2 %}
GET
{% endanchor %}

Get all suppressions.

{% apiv3example get GET https://api.sendgrid.com/v3/asm/suppressions %}
{% v3response %}
HTTP/1.1 200
[
  {
    "email":"test@example.com",
    "group_id": 1,
    "group_name": "Weekly News",
    "created_at": 1410986704
  },
  {
    "email":"test1@example.com",
    "group_id": 2,
    "group_name": "Daily News",
    "created_at": 1411493671
  },
  {
    "email":"test2@example.com",
    "group_id": 2,
    "group_name": "Daily News",
    "created_at": 1411493671
  }
]
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
GET
{% endanchor %}

Retrieve all unsubscribe groups that the given email address has been added to.

{% parameters post %}
  {% parameter email Yes 'String' 'Email address to search for across all groups.' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/asm/suppressions/{email} %}
{% v3response %}
HTTP/1.1 200
[
  {
    "created": 1492995026
    "email": "test@example.com"
    "reason": "550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces."
    "status": "5.1.1"
  }
]
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
POST
{% endanchor %}

Add recipient addresses to the suppressions list for a given group.

{% info %}
If the group has been deleted, this request will add the address to the global suppression.
{% endinfo %}

{% parameters post %}
  {% parameter recipient_emails Yes 'Array of valid email addresses' 'Addresses to add to the suppression group' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/asm/groups/:group_id/suppressions recipient_emails=['test1@example.com','test2@example.com'] %}
{% v3response %}
HTTP/1.1 201
{
  "recipient_emails": [
    "test1@example.com",
    "test2@example.com"
  ]
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}

Get suppressed addresses for a given group.

{% apiv3example get GET https://api.sendgrid.com/v3/asm/groups/:group_id/suppressions %}
{% v3response %}
HTTP/1.1 200
[
  "test1@example.com",
  "test2@example.com"
]
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
DELETE
{% endanchor %}

Delete a recipient email from the suppressions list for a group.

{% apiv3example get DELETE https://api.sendgrid.com/v3/asm/groups/:group_id/suppressions/:email_address %}
{% v3response %}
HTTP/1.1 204
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
POST
{% endanchor %}

Use this endpoint to determine if a given list of emails exists in the given suppression group.

When given a list of email addresses and a group ID, this endpoint will return only the email addresses that have been unsubscribed from the given group.

{% parameters post %}
  {% parameter group_id Yes 'integer' 'The ID of the group that you would like to search.' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/asm/groups/:group_id/suppressions/search %}

{% apiv3requestbody %}
{
  "recipient_emails": [
    "test1@example.com",
    "test2@example.com",
    "test3@example.com"
  ]
}
{% endapiv3requestbody %}

{% v3response %}
HTTP/1.1 200

{
  "recipient_emails":[
    "test1@example.com",
    "test2@example.com"
  ]
}

{% endv3response %}
{% endapiv3example %}
