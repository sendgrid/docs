---
layout: page
weight: 100
title: Teammates API
seo:
  description: Create and Manage Your Teammates
  title: Teammates API
navigation:
  show: true
---

{% anchor h2 %}
Retrieve all access requests [GET]
{% endanchor %}

{% apiv3example get GET https://api.sendgrid.com/v3/scopes/requests %}

{% parameters get %}
 {% parameter limit No 'Some integer' 'Optional field to limit the number of results returned.' %}
 {% parameter offset No 'Some integer' 'Optional beginning point in the list to retrieve from.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 200
[
  {
    "id": 1,
    "scope_group_name": "Mail Settings",
    "username": "teammate1",
    "email": "teammate1@example.com",
    "first_name": "Teammate",
    "last_name": "One"
  },
  {
    "id": 2,
    "scope_group_name": "Stats",
    "username": "teammate2",
    "email": "teammate2@example.com",
    "first_name": "Teammate",
    "last_name": "Two"
  }
]
{% endv3response %}

{% endapiv3example %}

{% anchor h2 %}
Deny an access attempt [DELETE]
{% endanchor %}

**Note: Only teammate admins can call this endpoint to approve another teammate's access request.**

{% apiv3example delete DELETE https://api.sendgrid.com/v3/scopes/requests/{request_id} %}

{% parameters get %}
 {% parameter request_id yes 'String' 'The ID of the request that you want to deny.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 204
{% endv3response %}

{% endapiv3example %}

{% anchor h2 %}
Approve an access attempt [PATCH]
{% endanchor %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/scopes/requests/approve/{id} %}

{% parameters get %}
  {% parameter id yes "String" 'The ID of the request that you want to approve.' %}
{% endparameters %}

{% v3response %}
HTTP1.1 201
{
  "id": 10
}
{% endv3response %}

{% endapiv3example %}
