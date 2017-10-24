---
layout: page
weight: 0
title: Sender Identities API
seo:
  title: Sender Identities API
  description: The SendGrid Marketing Campaigns Sender Identities API
  keywords: sender, identities, api, marketing campaigns senders
navigation:
  show: true
---
The Sender Identities API allows you to create and manage sender identities for Marketing Campaigns.

{% info %}
The `nickname`, `from.email`, `address`, `city`, and `country` parameters are required when creating and updating sender identities.
{% endinfo %}

{% anchor h2 %}
Create a Sender Identity [POST]
{% endanchor %}

This endpoint allows you to create a sender identity.

{% info %} You may create up to 100 unique sender identities.{% endinfo %}

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the  `from.email`.

{% apiv3example post POST https://api.sendgrid.com/v3/senders %}
{% apiv3requestbody %}
{
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "exampleexampexample@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States"
}
{% endapiv3requestbody %}

{% v3response %}
{
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "exampleexampexample@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
Retrieve All Sender Identities [GET]
{% endanchor %}

This endpoint allows you to retrieve a list of all of your sender identities.

{% apiv3example get GET https://api.sendgrid.com/v3/senders %}
{% v3response %}
{
  "result": [
    {
      "id": 1,
      "nickname": "My Sender ID",
      "from": {
        "email": "from@example.com",
        "name": "Example INC"
      },
      "reply_to": {
        "email": "exampleexampexample@example.com",
        "name": "Example INC"
      },
      "address": "123 Elm St.",
      "address_2": "Apt. 456",
      "city": "Denver",
      "state": "Colorado",
      "zip": "80202",
      "country": "United States",
      "verified": true,
      "updated_at": 1449872165,
      "created_at": 1449872165,
      "locked": false
    }
  ]
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
Update a Sender Identity [PATCH]
{% endanchor %}

Updates to `from.email` require re-verification. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

Partial updates are allowed, but fields that are marked as "required" in the POST (create) endpoint must not be nil if that field is included in the PATCH request.

{% apiv3example patch PATCH https://api.sendgrid.com/v3/senders/{sender_id} %}

{% apiv3requestbody %}
{
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "exampleexampexample@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States"
}
{% endapiv3requestbody %}

{% v3response %}
{
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "exampleexampexample@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
Delete a Sender Identity [DELETE]
{% endanchor %}

This endpoint allows you to delete one of your sender identities.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/senders/{sender_id} %}

{% v3response %}
HTTP/1.1 204
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
Resend Sender Identity Verification [POST]
{% endanchor %}

This endpoint allows you to resend the sender identity verification email.

{% apiv3example post POST https://api.sendgrid.com/v3/senders/{sender_id}/resend_verification %}

{% v3response %}
HTTP/1.1 204
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
Retrieve a Specific Sender Identity [GET]
{% endanchor %}

This endoint allows you to retrieve a specific sender identity.

{% apiv3example get GET https://api.sendgrid.com/v3/senders/{sender_id} %}

{% v3response %}
{
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "exampleexampexample@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
{% endv3response %}
{% endapiv3example %}
