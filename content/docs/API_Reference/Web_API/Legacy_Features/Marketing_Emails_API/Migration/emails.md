---
layout: page
weight: 10
seo:
  title: Legacy Newsletter to Marketing Campaigns - Emails Endpoint Comparison
  description: The comparison of emails endpoints between Legacy Newsletter and Marketing Campaigns
title: Emails Endpoint Comparison
navigation:
  show: true
---
<h2>Table of Contents</h2>

<ul>
  <li><a href="#-Add-one-or-more-emails-to-a-Recipient-List">Add one or more emails to a Recipient List</a></li>
  <li><a href="#-Get-the-email-addresses-and-associated-fields-for-Recipient-List">Get the email addresses and associated fields for a Recipient List</a></li>
  <li><a href="#-Retrieve-the-number-of-entries-on-Recipient-List">Retrieve the number of entries on a Recipient List</a></li>
  <li><a href="#-Remove-one-or-more-emails-from-Recipient-List">Remove one or more emails from a Recipient List</a></li>
</ul>


<page-anchor el="h2">
Emails
</page-anchor>

<page-anchor el="h3">
Add one or more emails to a Recipient List
</page-anchor>

<page-anchor el="h3">
Add an email recipient to a list
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

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

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

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
{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "example@example.com",
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

{% codeblock lang:bash %}
HTTP/1.1 201
{% endcodeblock %}

<page-anchor el="h3">
Add an email recipient with multiple data fields
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

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

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

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
{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "example@example.com",
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

{% codeblock lang:bash %}
HTTP/1.1 201
{% endcodeblock %}




<page-anchor el="h3">
Add multiple email recipients to a list
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

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

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

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

{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "example@example.com",
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
      "email": "example@example.com",
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

{% codeblock lang:bash %}
HTTP/1.1 201
{% endcodeblock %}


<page-anchor el="h3">
Get the email addresses and associated fields for a Recipient List
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/get.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
[
  {
    "email": "example@example.com",
    "name": "Example User"
  }
]
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "recipients": [
    {
      "created_at": 1422395108,
      "email": "example@example.com",
      "first_name": "Example User",
      "id": "YUBh",
      "last_clicked": null,
      "last_emailed": null,
      "last_name": null,
      "last_opened": null,
      "updated_at": 1422395108
    }
  ]
}
{% endcodeblock %}



<page-anchor el="h3">
Retrieve the number of entries on a Recipient List
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/count.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "count": 1
}
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

First, we need to get the list_id:

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
{
"lists": [
  {
    "id": 1,
    "name": "the jones",
    "recipient_count": 1
  }
]
}
{% endcodeblock %}

Now we can retrieve the number of entries in the list:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "id": 1,
  "name": "my_list",
  "recipient_count": 1
}
{% endcodeblock %}

<page-anchor el="h3">
Remove one or more emails from a Recipient List

</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/email/delete.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F email[]=example@example.com
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "removed": 1
}
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

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

{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "example@example.com",
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
      "email": "example@example.com",
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

Now we can delete the recipient to the desired list:


**Request**

{% codeblock lang:bash %}
curl --request DELETE \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients/{recipient_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:bash %}
HTTP/1.1 204
{% endcodeblock %}
