---
layout: page
weight: 10
seo:
  title: Legacy Newsletter to Marketing Campaigns - Recipients Endpoint Comparison
  description: The comparison of recipients endpoints between Legacy Newsletter and Marketing Campaigns
title: Recipients Endpoint Comparison
navigation:
  show: true
---

<h2>Table of Contents</h2>
<ul>
  <li><a href="#-Assign-List-to-Marketing-Email">Assign a List to a Marketing Email</a></li>
  <li><a href="#-Get-all-Lists-Assigned-to-Particular-Marketing-Email">Get all Lists Assigned to a Particular Marketing Email</a></li>
  <li><a href="#-Remove-Assigned-Lists-From-Marketing-Email">Remove Assigned Lists From a Marketing Email</a></li>
</ul>


<page-anchor el="h3">
Assign a List to a Marketing Email
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/recipients/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'name=SendGrid_Test' -F 'list=Test List'
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


Add lists to a new campaign:

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/campaigns \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"sender_id": 124451, "title":"SendGrid_Test", "subject":"Test Subject", "plain_content": "Text Content", "html_content": "<html><body>HTML content</body></html>", "list_ids":[1,2]}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "id": 986724,
  "title": "SendGrid_Test",
  "subject": "Test Subject",
  "sender_id": 124451,
  "list_ids": [
    1,
    2
  ],
  "html_content": "<html><body>HTML content</body></html>",
  "plain_content": "Text Content",
  "status": "Draft"
}
{% endcodeblock %}


If you have a campaign id, you can update a campaign with that list (Note that this will overwrite the current list_ids):


**Request**

{% codeblock lang:bash %}
curl --request PATCH \
--url https://api.sendgrid.com/v3/campaigns/{campaign_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"title":"SendGrid_Test_2", "subject":"Test Subject", "plain_content": "Text Content", "html_content": "<html><body>HTML content</body></html>", "list_ids":[1,2]}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "id": 986724,
  "title": "SendGrid_Test_2",
  "subject": "Test Subject",
  "sender_id": 124451,
  "list_ids": [
    1,
    2
  ],
  "html_content": "<html><body>HTML content</body></html>",
  "plain_content": "Text Content",
  "status": "Draft"
}
{% endcodeblock %}


<page-anchor el="h3">
Get all lists assigned to a particular Marketing Email

</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/recipients/get.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'name=SendGrid_Test'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
[
  {
    "list": "Training Contacts"
  }
]
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

Get all of your campaigns and view the lists on each:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/campaigns \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "result": [
    {
      "id": 986724,
      "title": "March Newsletter",
      "subject": "New Products for Spring!",
      "sender_id": 124451,
      "list_ids": [
        110,
        124
      ],
      "segment_ids": [
        110
      ],
      "categories": [
        "spring line"
      ],
      "suppression_group_id": 42,
      "custom_unsubscribe_url": "",
      "ip_pool": "marketing",
      "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>",
      "plain_content": "Check out our spring line!",
      "status": "Draft"
    },
    {
      "id": 986723,
      "title": "February Newsletter",
      "subject": "Final Winter Product Sale!",
      "sender_id": 124451,
      "list_ids": [
        110,
        124
      ],
      "segment_ids": [
        110
      ],
      "categories": [
        "winter line"
      ],
      "suppression_group_id": 42,
      "custom_unsubscribe_url": "",
      "ip_pool": "marketing",
      "html_content": "<html><head><title></title></head><body><p>Last call for winter clothes!</p></body></html>",
      "plain_content": "Last call for winter clothes!",
      "status": "Sent"
    }
  ]
}
{% endcodeblock %}

You can also get a single campaign to view the lists:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/campaigns/{campaign_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}


{
  "id": 986724,
  "title": "March Newsletter",
  "subject": "New Products for Spring!",
  "sender_id": 124451,
  "list_ids": [
    110,
    124
  ],
  "segment_ids": [
    110
  ],
  "categories": [
    "spring line"
  ],
  "suppression_group_id": 42,
  "custom_unsubscribe_url": "",
  "ip_pool": "marketing",
  "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>",
  "plain_content": "Check out our spring line!",
  "status": "Draft"
}

{% endcodeblock %}



<page-anchor el="h3">
Remove assigned lists from a Marketing Email
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/recipients/delete.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'name=SendGrid_Test' -F 'list=Test'
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

Get the ID of the campaign to Edit:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/campaigns \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "result": [
    {
      "id": 986724,
      "title": "March Newsletter",
      "subject": "New Products for Spring!",
      "sender_id": 124451,
      "list_ids": [
        110,
        124
      ],
      "segment_ids": [
        110
      ],
      "categories": [
        "spring line"
      ],
      "suppression_group_id": 42,
      "custom_unsubscribe_url": "",
      "ip_pool": "marketing",
      "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>",
      "plain_content": "Check out our spring line!",
      "status": "Draft"
    },
    {
      "id": 986723,
      "title": "February Newsletter",
      "subject": "Final Winter Product Sale!",
      "sender_id": 124451,
      "list_ids": [
        110,
        124
      ],
      "segment_ids": [
        110
      ],
      "categories": [
        "winter line"
      ],
      "suppression_group_id": 42,
      "custom_unsubscribe_url": "",
      "ip_pool": "marketing",
      "html_content": "<html><head><title></title></head><body><p>Last call for winter clothes!</p></body></html>",
      "plain_content": "Last call for winter clothes!",
      "status": "Sent"
    }
  ]
}
{% endcodeblock %}

Then we can edit the campaign:

**Request**

{% codeblock lang:bash %}
curl --request PATCH \
--url https://api.sendgrid.com/v3/campaigns/{campaign_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"title":"SendGrid_Test_2", "subject":"Test Subject", "plain_content": "Text Content", "html_content": "<html><body>HTML content</body></html>", "list_ids":[]}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "id": 986724,
  "title": "SendGrid_Test_2",
  "subject": "Test Subject",
  "sender_id": 124451,
  "list_ids": [
    110,
    124
  ],
  "html_content": "<html><body>HTML content</body></html>",
  "plain_content": "Text Content",
  "status": "Draft"
}
{% endcodeblock %}
