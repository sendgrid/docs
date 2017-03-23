---
layout: page
weight: 10
seo:
  title: Legacy Newsletter to Marketing Campaigns Endpoint Comparison
  description:
title: Legacy Newsletter to Marketing Campaigns Endpoint Comparison
navigation:
  show: true
---

The following map of API calls is designed to assist with a migration from Legacy Newsletter to Marketing Campaigns.

{% anchor h2 %}
Table of Contents
{% endanchor %}

* Categories
    * Create a new Category
    * Assign a Category to an existing Marketing Email
    * Remove specific Categories, or all Categories from a Marketing Email
    * List all Categories
* Emails
    * Add one or more emails to a Recipient List
    * Get the email addresses and associated fields for a Recipient List
    * Retrieve the number of entries on a Recipient List
    * Remove one or more emails from a Recipient List
* Lists
    * Create a new Recipient List
    * Rename a Recipient List
    * List all Recipient Lists on your account, or check if a particular Recipient List exists
    * Remove a Recipient List from your account
* Marketing Emails
    * Create a new Marketing Email
    * Edit an existing Marketing Email
    * Retrieve the contents of an existing Marketing Email
    * Retrieve a list of all existing Marketing Email
    * Remove an existing Marketing Email
* Recipients
    * Assign a List to a Marketing Email
    * Get all lists assigned to a particular Marketing Email
    * Remove assigned lists from a Marketing Email
* Schedule
    * Schedule a delivery time for an existing Marketing Email
    * Retrieve the scheduled delivery time for an existing Marketing Email
    * Cancel a scheduled send for a Marketing Email
* Sender Address
    * Create a new Sender Address
    * Edit an existing Sender Address
    * Retrieve information associated with a particular Sender Address
    * List all Sender Addresses on your account, or check if a particular Sender Address exists
    * Remove a Sender Address from your account
* Variations

{% anchor h2 %}
Categories
{% endanchor %}

{% anchor h3 %}
Create a new Category
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

```bash
curl -X POST https://api.sendgrid.com/api/newsletter/category/create.json -F category="Legacy Newsletter Category" -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
```

**Response**

```json
{
  "message": "success"
}
```

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

With marketing campaigns, categories are created when you create your campaign. Simply include the categories you require in the categories object as an array of strings.

**Request**

```bash
curl --request POST \
--url https://api.sendgrid.com/v3/campaigns \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"title":"Legacy Newsletter","subject":"subject from Legacy Newsletter","html_content":"html content from Legacy Newsletter", "plain_content":"text content from Legacy Newsletter", "categories": ["Legacy Newsletter Category"]}'
```

**Response**

```json
{
  "id": UNIQUE_ID,
  "title": "Legacy Newsletter",
  "ip_pool": "",
  "categories": [
    "legacy newsletter category"
  ],
  "plain_content": "",
  "html_content": "html content from Legacy Newsletter",
  "subject": "subject from Legacy Newsletter",
  "sender_id": null,
  "list_ids": [],
  "segment_ids": [],
  "suppression_group_id": null,
  "custom_unsubscribe_url": "",
  "status": "Draft"
}
```

{% anchor h3 %}
Assign a Category to an existing Marketing Email
{% endanchor %}

This is achieved when you [Create a new Category](#-Create-a-new-Category), there is no separate Marketing Campaigns API call required.

{% anchor h3 %}
Remove specific Categories, or all Categories from a Marketing Email
{% endanchor %}

There is no equivalent API call in Marketing Campaigns. You may remove categories directly in the [SendGrid UI](https://sendgrid.com/marketing_campaigns/ui/campaigns). Click on the campaign that you want to edit and click the x on the category label to remove it.

{% anchor h3 %}
List all Categories
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

```bash
curl -X POST https://api.sendgrid.com/api/newsletter/category/list.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
```

**Response**

```json
[
  { "category": "CATEGORY1" },
  { "category": "CATEGORY2" }
]
```

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

With Marketing Campaigns, categories are created when you create your campaign. Simply include the categories you require in the categories object as an array of strings.

**Request**

```bash
curl --request GET \
--url https://api.sendgrid.com/v3/categories \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
[
  {"category": "CATEGORY1"},
  {"category": "CATEGORY2"}
]
```

{% anchor h2 %}
Emails
{% endanchor %}

{% anchor h3 %}
Add one or more emails to a Recipient List
{% endanchor %}

{% anchor h3 %}
Add an email recipient to a list
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

```bash
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F 'data={"email":"example@example.com", "name":"Example User"}'
```

**Response**

```json
{
  "inserted": 1
}
```

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

To insert a recipient into a list, you need the list id and the recipient id.

First, we get the list id:

**Request**

```bash
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
HTTP/1.1 200
{
  "lists": [
    {
      "id": 1,
      "name": "my_list",
      "recipient_count": 1
    }
  ]
}
```

Then, we get the recipient id (alternatively, you can get the recipient id by base64 encoding the email address):

**Request**

```bash
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
HTTP/1.1 200
{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "jones@example.com",
      "first_name": null,
      "id": "YUBh",
      "last_clicked": null,
      "last_emailed": null,
      "last_name": "Jones",
      "last_opened": null,
      "updated_at": 1422313790,
      "custom_fields": [
        {
          "id": 23,
          "name": "pet",
          "value": "Indiana",
          "type": "text"
        }
      ]
    }
  ]
}
```

Now we can add the recipient to the desired list:

**Request**

```bash
curl --request POST \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients/{recipient_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Request**

```json
HTTP/1.1 201
```

{% anchor h3 %}
Add an email recipient with multiple data fields
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

```bash
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F 'data={"email":"example@example.com", "name":"Example User", "city":"Denver", "country":"USA"}'
```

**Response**

```json
{
  "inserted": 1
}
```

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

First, we get the list id:

**Request**

```bash
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
HTTP/1.1 200
{
  "lists": [
    {
      "id": 1,
      "name": "my_list",
      "recipient_count": 1
    }
  ]
}
```

Then, we get the recipient id (alternatively, you can get the recipient id by base64 encoding the email address):

**Request**

```bash
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
HTTP/1.1 200
{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "jones@example.com",
      "first_name": null,
      "id": "YUBh",
      "last_clicked": null,
      "last_emailed": null,
      "last_name": "Jones",
      "last_opened": null,
      "updated_at": 1422313790,
      "custom_fields": [
        {
          "id": 23,
          "name": "pet",
          "value": "Indiana",
          "type": "text"
        }
      ]
    }
  ]
}
```

Now we can add the recipient to the desired list:

**Request**

```bash
curl --request POST \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients/{recipient_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
HTTP/1.1 201
```

{% anchor h3 %}
Add multiple email recipients to a list
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

```bash
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F 'data[]={"email":"example@example.com", "name":"Example User"}' -F 'data[]={"email":"example2@example.com", "name":"Example User2"}'
```

**Response**

```json
{
  "inserted": 2
}
```

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

First, we get the list id:

**Request**

```bash
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
HTTP/1.1 200
{
  "lists": [
    {
      "id": 1,
      "name": "my_list",
      "recipient_count": 1
    }
  ]
}
```

Then, we get the recipient id (alternatively, you can get the recipient id by base64 encoding the email address):

**Request**

```bash
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
```

**Response**

```json
HTTP/1.1 200
{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "jones@example.com",
      "first_name": null,
      "id": "YUBh",
      "last_clicked": null,
      "last_emailed": null,
      "last_name": "Jones",
      "last_opened": null,
      "updated_at": 1422313790,
      "custom_fields": [
        {
          "id": 23,
          "name": "pet",
          "value": "Indiana",
          "type": "text"
        }
      ]
    },
    {
      "created_at": 1432313607,
      "email": "jones2@example.com",
      "first_name": null,
      "id": "YUBhx",
      "last_clicked": null,
      "last_emailed": null,
      "last_name": "Jonesy",
      "last_opened": null,
      "updated_at": 1423313790,
      "custom_fields": [
        {
          "id": 23,
          "name": "pet",
          "value": "Indiana",
          "type": "text"
        }
      ]
    }
  ]
}
```

Now we can add the recipient to the desired list.

**Request**

```bash
curl --request POST \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '["YUBh","YUBhx"]'
```

**Response**

```json
HTTP/1.1 201
```

{% anchor h2 %}
Lists
{% endanchor %}

{% anchor h2 %}
Marketing Emails
{% endanchor %}

{% anchor h2 %}
Recipients
{% endanchor %}

{% anchor h2 %}
Schedule
{% endanchor %}

{% anchor h2 %}
Sender Address
{% endanchor %}

{% anchor h2 %}
Variations
{% endanchor %}
