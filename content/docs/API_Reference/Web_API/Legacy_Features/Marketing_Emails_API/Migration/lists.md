---
layout: page
weight: 10
seo:
  title: Legacy Newsletter to Marketing Campaigns - Lists Endpoint Comparison
  description: The comparison of lists endpoints between Legacy Newsletter and Marketing Campaigns
title: Lists Endpoint Comparison
navigation:
  show: true
---

<h2>Table of Contents</h2>

<ul>
  <li><a href="#-Create-new-Recipient-List">Create a new Recipient List</a></li>
  <li><a href="#-Rename-Recipient-List">Rename a Recipient List</a></li>
  <li><a href="#-List-all-Recipient-Lists-on-your-Account-or-check-if-particular-Recipient-List">List all Recipient Lists on your account, or check if a particular Recipient List exists</a></li>
  <li><a href="#-Remove-Recipient-List-From-Your-Account">Remove a Recipient List From Your Account</a></li>
</ul>


<page-anchor el="h3">
Create a new Recipient List
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "message": "success"
}
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/contactdb/lists \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"name":"My List"}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "id": 1,
  "name": "My List",
  "recipient_count": 0
}
{% endcodeblock %}





<page-anchor el="h3">
Rename a Recipient List
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/edit.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list' -F 'newlist=my_new_list'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "message": "success"
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
      "name": "My List",
      "recipient_count": 0
    }
  ]
}
{% endcodeblock %}

Now we can edit the list name:

**Request**

{% codeblock lang:bash %}

curl --request PATCH \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"name":"My NEW List"}'

{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
"id": 1,
"name": "My NEW List",
"recipient_count": 1234
}
{% endcodeblock %}




<page-anchor el="h3">
List all Recipient Lists on your account, or check if a particular Recipient List exists

</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}

curl -X POST https://api.sendgrid.com/api/newsletter/lists/get.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD

{% endcodeblock %}

**Response**

{% codeblock lang:json %}
[
  {
    "id": 1,
    "list": "my_list"
  }
]
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

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
      "name": "My List",
      "recipient_count": 0
    }
  ]
}
{% endcodeblock %}




<page-anchor el="h3">
Remove a Recipient List from your account

</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/lists/delete.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'list=my_list'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "message": "success"
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
      "name": "My List",
      "recipient_count": 0
    }
  ]
}
{% endcodeblock %}

**Request**

{% codeblock lang:bash %}
curl --request DELETE \
--url https://api.sendgrid.com/v3/contactdb/lists/{list_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:bash %}
HTTP/1.1 202
{% endcodeblock %}
