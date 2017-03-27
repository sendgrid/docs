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

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F 'data={"email":"example@example.com", "name":"Example User"}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "inserted": 1
}
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

To insert a recipient into a list, you need the list id and the recipient id.

First, we get the list id:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
{% endcodeblock %}

Then, we get the recipient id (alternatively, you can get the recipient id by base64 encoding the email address):

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
{% endcodeblock %}

Now we can add the recipient to the desired list:

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients/{recipient_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Request**

{% codeblock lang:json %}
HTTP/1.1 201
{% endcodeblock %}

{% anchor h3 %}
Add an email recipient with multiple data fields
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F 'data={"email":"example@example.com", "name":"Example User", "city":"Denver", "country":"USA"}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "inserted": 1
}
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

First, we get the list id:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
{% endcodeblock %}

Then, we get the recipient id (alternatively, you can get the recipient id by base64 encoding the email address):

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
{% endcodeblock %}

Now we can add the recipient to the desired list:

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients/{recipient_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
HTTP/1.1 201
{% endcodeblock %}

{% anchor h3 %}
Add multiple email recipients to a list
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F 'data[]={"email":"example@example.com", "name":"Example User"}' -F 'data[]={"email":"example2@example.com", "name":"Example User2"}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "inserted": 2
}
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

First, we get the list id:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
{% endcodeblock %}

Then, we get the recipient id (alternatively, you can get the recipient id by base64 encoding the email address):

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
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
{% endcodeblock %}

Now we can add the recipient to the desired list.

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '["YUBh","YUBhx"]'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
HTTP/1.1 201
{% endcodeblock %}

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
