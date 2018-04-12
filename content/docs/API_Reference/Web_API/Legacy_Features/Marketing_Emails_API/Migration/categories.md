---
layout: page
weight: 10
title: Categories Endpoint Comparison
seo:
  title: Legacy Newsletter to Marketing Campaigns Categories Endpoint Comparison
  description: Legacy Newsletter to Marketing Campaigns Categories Endpoint Comparison
  keywords: Legacy Newsletter, Marketing Emails, Marketing Campaigns Migration
navigation:
  show: true
---

<page-anchor el="h2">
Table of Contents
</page-anchor>

* [Create a new Category](#-Create-a-new-Category)
* [Assign a Category to an existing Marketing Email](#-Assign-Category-to-an-Existing-Marketing-Email)
* [Remove Specific Categories, or all Categories from a Marketing Email](#-Remove-Specific-Categories-or-all-Categories-from-Marketing-Email)
* [List all Categories](#-List-all-Categories)

<page-anchor el="h2">
Categories
</page-anchor>

<page-anchor el="h3">
Create a new Category
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/category/create.json -F category="Legacy Newsletter Category" -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
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

With marketing campaigns, categories are created when you create your campaign. Simply include the categories you require in the categories object as an array of strings.

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/campaigns \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"title":"Legacy Newsletter","subject":"subject from Legacy Newsletter","html_content":"html content from Legacy Newsletter", "plain_content":"text content from Legacy Newsletter", "categories": ["Legacy Newsletter Category"]}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "id": 1,
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
{% endcodeblock %}

<page-anchor el="h3">
Assign a Category to an Existing Marketing Email
</page-anchor>

This is achieved when you [Create a new Category](#-Create-a-new-Category), there is no separate Marketing Campaigns API call required.

<page-anchor el="h3">
Remove specific Categories, or all Categories from a Marketing Email
</page-anchor>

There is no equivalent API call in Marketing Campaigns. You may remove categories directly in the [SendGrid UI](https://sendgrid.com/marketing_campaigns/ui/campaigns). Click on the campaign that you want to edit and click the x on the category label to remove it.

<page-anchor el="h3">
List all Categories
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/category/list.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
[
  { "category": "CATEGORY1" },
  { "category": "CATEGORY2" }
]
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

With Marketing Campaigns, categories are created when you create your campaign. Simply include the categories you require in the categories object as an array of strings.

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/categories \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
[
  {"category": "CATEGORY1"},
  {"category": "CATEGORY2"}
]
{% endcodeblock %}
