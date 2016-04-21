---
layout: page
weight: 0
title: Sender Identities API
seo:
  title: Sender Identities API
  description: The SendGrid Marketing Campaigns Sender Identities API
  keywords: Senders, identities api, marketing campaigns senders
navigation:
  show: true
---
The Sender Identities API allows you to create and manage sender identities for Marketing Campaigns.

{% anchor h2 %}
POST
{% endanchor %}

Create a sender identity

{% apiv3example POST https://api.sendgrid.com/v3/marketing_campaigns/senders %}
{% apiv3requestbody %}
{
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "replyto@example.com",
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
{% endapiv3example %}
