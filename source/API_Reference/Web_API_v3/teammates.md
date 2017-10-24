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

* [Retrieve all access requests](#-Retrieve-all-access-requests-GET)
* [Deny an access request](#-Deny-an-access-request-DELETE)
* [Approve an access request](#-Approve-an-access-request-PATCH)
* [Resend a teammate invite](#-Resend-a-teammate-invite-POST)
* [Retrieve a list of all pending teammates](#-Retrieve-a-list-of-all-pending-teammates-GET)
* [Delete a pending teammate invite](#-Delete-a-pending-teammate-invite-DELETE)
* [Invite a teammate](#-Invite-a-teammate-POST)
* [Retrieve a list of all teammates](#-Retrieve-a-list-of-all-teammates-GET)
* [Retrieve a specific teammate](#-Retrieve-a-specific-teammate-GET)
* [Update teammate's permissions](#-Update-teammates-permissions-PATCH)
* [Delete a teammate](#-Delete-a-teammate-DELETE)

{% anchor h2 %}
Retrieve all access requests [GET]
{% endanchor %}

This endpoint allows you to retrieve a list of all recent access requests.

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

*****

{% anchor h2 %}
Deny an access request [DELETE]
{% endanchor %}

This endpoint allows you to deny an attempt to access your account.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/scopes/requests/{request_id} %}

{% parameters get %}
 {% parameter request_id yes 'String' 'The ID of the request that you want to deny.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 204
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Approve an access request [PATCH]
{% endanchor %}

This endpoint allows you to approve an access attempt.

**Note: Only teammate admins can call this endpoint to approve another teammate's access request.**

{% apiv3example patch PATCH https://api.sendgrid.com/v3/scopes/requests/approve/{id} %}

{% parameters get %}
  {% parameter id yes "String" 'The ID of the request that you want to approve.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 201
{
  "id": 10
}
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Resend a teammate invite [POST]
{% endanchor %}

This endpoint allows you to resend a teammate invite.

**Note: Teammate invitations will expire after 7 days. Resending an invite will reset the expiration date.**

{% apiv3example post POST https://api.sendgrid.com/v3/teammates/pending/{token}/resend %}

{% parameters get %}
 {% parameter token yes 'String' 'The token for the invite that you want to resend.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 200
{
  "pending_id": "abc123abc",
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ],
  "is_admin": false
}
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Retrieve a list of all pending teammates [GET]
{% endanchor %}

This endpoint allows you to retrieve a list of all pending teammate invitations.

**Note: Each teammate invitation is valid for 7 days. Users may resend the invite to refresh the expiration date.**

{% apiv3example get GET https://api.sendgrid.com/v3/teammates/pending %}

{% v3response %}
HTTP/1.1 200
{
  "result": [
    {
      "email": "user1@example.com",
      "scopes": [
        "user.profile.read",
        "user.profile.edit"
      ],
      "is_admin": false,
      "pending_id": "abcd123abc",
      "expiration_date": 1456424263
    },
    {
      "email": "exampexample@example.comom",
      "scopes": [],
      "is_admin": true,
      "pending_id": "bcde234bcd",
      "expiration_date": 1456424263
    }
  ]
}
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Delete a pending teammate invite [DELETE]
{% endanchor %}

This endpoint allows you to delete a pending teammate invite.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/teammates/pending/{token} %}

{% parameters get %}
 {% parameter token yes 'String' 'The token for the invite that you want to delete.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 204
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Invite a teammate [POST]
{% endanchor %}

This endpoint allows you to send a teammate invitation via email with a predefined set of scopes, or permissions. A teammate invite will expire after 7 days, but you may resend the invite at any time to reset the expiration date. **Essentials, [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html), and Free Trial users may create up to one teammate per account. There is not a teammate limit for Pro and higher plans.**

{% apiv3example post POST https://api.sendgrid.com/v3/teammates %}

{% apiv3requestbody %}
{
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ],
  "is_admin": false
}
{% endapiv3requestbody %}

{% v3response %}
HTTP/1.1 201
{
  "pending_id": "abc123abc",
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ],
  "is_admin": false
}
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Retrieve a list of all teammates [GET]
{% endanchor %}

This endpoint allows you to retrieve a list of all current teammates.

{% info %}
Each account may have no more than 1,000 teammates.
{% endinfo %}

{% apiv3example get GET https://api.sendgrid.com/v3/teammates %}

{% parameters get %}
 {% parameter limit No 'Some integer' 'Optional field to limit the number of results returned.' %}
 {% parameter offset No 'Some integer' 'Optional beginning point in the list to retrieve from.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 200
{
  "results": [
    {
      "username": "teammate1",
      "email": "teammate1@example.com",
      "first_name": "Jane",
      "last_name": "Doe",
      "user_type": "owner",
      "is_admin": true,
      "phone": "123-345-3453",
      "website": "www.example.com",
      "company": "ACME Inc.",
      "address": "123 Acme St",
      "address2": "",
      "city": "City",
      "state": "CA",
      "country": "USA",
      "zip": "12345"
    },
    {
      "username": "teammate2",
      "email": "teammate2@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "user_type": "teammate",
      "is_admin": false,
      "phone": "123-345-3453",
      "website": "www.example.com",
      "company": "ACME Inc.",
      "address": "123 Acme St",
      "address2": "",
      "city": "City",
      "state": "CA",
      "country": "USA",
      "zip": "12345"
    },
    {
      "username": "teammate3",
      "email": "exampleexampexample@example.com",
      "first_name": "Steve",
      "last_name": "Doe",
      "user_type": "admin",
      "is_admin": true,
      "phone": "123-345-3453",
      "website": "www.example.com",
      "company": "ACME Inc.",
      "address": "123 Acme St",
      "address2": "",
      "city": "City",
      "state": "CA",
      "country": "USA",
      "zip": "12345"
    }
  ]
}
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Retrieve a specific teammate [GET]
{% endanchor %}

This endpoint allows you to retrieve a specific teammate by username.

{% apiv3example get GET https://api.sendgrid.com/v3/teammates/{username} %}

{% parameters get %}
 {% parameter username Yes 'String' 'The username of the teammate that you want to retrieve.' %}
{% endparameters %}

{% v3response %}
HTTP/1.1 200
{
  "username": "teammate1",
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update",
    "..."
  ],
  "user_type": "admin",
  "is_admin": true,
  "phone": "123-345-3453",
  "website": "www.example.com",
  "company": "ACME Inc.",
  "address": "123 Acme St",
  "address2": "",
  "city": "City",
  "state": "CA",
  "country": "USA",
  "zip": "12345"
}
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Update teammate's permissions [PATCH]
{% endanchor %}

This endpoint allows you to update a teammate's permissions.

To turn a teammate into an admin, the request body should contain an `is_admin` set to `true`. Otherwise, set `is_admin` to false and pass in all the scopes that a teammate should have.

{% info %}
Only the parent user or other admin teammates can update another teammate's permissions.

Admin users can only update permissions.
{% endinfo %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/teammates/{username} %}

{% apiv3requestbody %}
{
  "scopes": [
    "user.profile.read",
    "user.profile.edit"
  ],
  "is_admin": false
}
{% endapiv3requestbody %}

{% v3response %}
HTTP/1.1 200
{
  "username": "teammate1",
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.edit"
  ],
  "user_type": "teammate",
  "is_admin": false,
  "phone": "123-345-3453",
  "website": "www.example.com",
  "company": "ACME Inc.",
  "address": "123 Acme St",
  "address2": "",
  "city": "City",
  "state": "CA",
  "country": "USA",
  "zip": "12345"
}
{% endv3response %}

{% endapiv3example %}

*****

{% anchor h2 %}
Delete a teammate [DELETE]
{% endanchor %}

This endpoint allows you to delete a teammate.

{% info %}
Only the parent user or an admin teammate can delete another teammate.
{% endinfo %}

{% apiv3example delete DELETE https://api.sendgrid.com/v3/teammates/{username} %}

{% v3response %}
HTTP/1.1 204
{% endv3response %}

{% endapiv3example %}
