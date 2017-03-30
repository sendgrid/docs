---
layout: page
weight: 10
seo:
  title: Legacy Newsletter to Marketing Campaigns - Sender Address Endpoint Comparison
  description: The comparison of Sender Address endpoints between Legacy Newsletter and Marketing Campaigns
title: Sender Address Endpoint Comparison
navigation:
  show: true
---


<h2>Table of Contents</h2>
<ul>
  <li><a href="#-Create-New-Sender-Address">Create a new Sender Address</a></li>
  <li><a href="#-Edit-an-Existing-Sender-Address">Edit an Existing Sender Address</a></li>
  <li><a href="#-Retrieve-Information-Associated-With-Particular-Sender-Address">Retrieve Information Associated With a Particular Sender Address</a></li>
  <li><a href="#-List-All-Sender-Addresse-on-Your-Account-or-check-if-Particular-Sender-Address-Exists">List All Sender Addresses on Your Account, or Check if a Particular Sender Address Exists</a></li>
  <li><a href="#-Remove-Sender-Address-From-Your-Account">Remove a Sender Address From Your Account</a></li>
</ul>




{% anchor h3 %}
Create a New Sender Address

{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/identity/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'identity=Test Identity' -F 'name=Example User' -F 'email=example@example.com' -F 'address=929_Pearl_Street' -F 'city=Boulder' -F 'state=Colorado' -F 'zip=80302' -F 'country=US'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/senders \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"nickname":"My Sender ID","from":{"email":"example@example.com","name":"Example User"},"reply_to":{"email":"example@example.com","name":"Example User"},"address":"929 Pearl Street","city":"Boulder","state":"Colorado","zip":"80302","country":"US"}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "example@example.com",
    "name": "Example User"
  },
  "reply_to": {
    "email": "example@example.com",
    "name": "Example User"
  },
  "address": "929 Pearl Street",
  "city": "Boulder",
  "state": "Colorado",
  "zip": "80302",
  "country": "US",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}

{% endcodeblock %}




{% anchor h3 %}
Edit an Existing Sender Address

{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/identity/edit.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'identity=Test Identity' -F 'name=Example User 2' -F 'email=example@example.com' -F 'address=929_Pearl_Street' -F 'city=Boulder' -F 'state=Colorado' -F 'zip=80302' -F 'country=US'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

First, get the appropriate Sender ID:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/senders \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
        "email": "replyto@example.com",
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
{% endcodeblock %}

Then we can edit the Sender:

**Request**

{% codeblock lang:bash %}

curl --request PATCH \
--url https://api.sendgrid.com/v3/senders/{sender_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"nickname":"My Sender ID","from":{"email":"example@example.com","name":"Example User 2"},"reply_to":{"email":"example@example.com","name":"Example User 2"},"address":"929 Pearl Street","city":"Boulder","state":"Colorado","zip":"80302","country":"US"}'

{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "example@example.com",
    "name": "Example User 2"
  },
  "reply_to": {
    "email": "example@example.com",
    "name": "Example User 2"
  },
  "address": "929 Pearl Street",
  "city": "Boulder",
  "state": "Colorado",
  "zip": "80302",
  "country": "US",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
{% endcodeblock %}





{% anchor h3 %}
Retrieve Information Associated With a Particular Sender Address

{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/identity/get.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'identity=Sender_Address'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "city": "Boulder",
  "name": "Name",
  "zip": "80302",
  "replyto": "example@example.com",
  "country": "US",
  "state": "CO",
  "address": "929 Pearl Street",
  "email": "example@sendgrid.com",
  "identity": "Sender_Address"
}
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/senders \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
        "email": "replyto@example.com",
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
{% endcodeblock %}





{% anchor h3 %}
List all Sender Addresses on Your Account, or Check if a Particular Sender Address Exists
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/identity/list.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
[
  {
    "identity": "Sender_Address"
  }
]
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/senders \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

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
        "email": "replyto@example.com",
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

{% endcodeblock %}



{% anchor h3 %}
Remove a Sender Address From Your Account
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/identity/delete.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'identity=Sender_Address'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

First, we need to get the sender_id:


**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/senders \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

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
        "email": "replyto@example.com",
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

{% endcodeblock %}


Then, we can delete the specified sender_id:

**Request**

{% codeblock lang:bash %}
curl --request DELETE \
--url https://api.sendgrid.com/v3/senders/{sender_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:bash %}
HTTP/1.1 204
{% endcodeblock %}
