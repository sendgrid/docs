---
layout: page
weight: 10
seo:
  title: Legacy Newsletter to Marketing Campaigns - Campaigns Endpoint Comparison
  description: The comparison of campaigns endpoints between Legacy Newsletter and Marketing Campaigns
title: Campaigns Endpoint Comparison
navigation:
  show: true
---

<h2>Table of Contents</h2>
<ul>
  <li><a href="#-Schedule-Delivery-Time-for-an-Existing-Marketing-Email">Schedule a Delivery Time for an Existing Marketing Email</a></li>
  <li><a href="#-Retrieve-the-Scheduled-Delivery-Time-for-an-Existing-Marketing-Email">Retrieve the Scheduled Delivery Time for an Existing Marketing Email</a></li>
  <li><a href="#-Cancel-Scheduled-Send-for-Marketing-Email">Cancel a Scheduled Send for a Marketing Email</a></li>
</ul>


<page-anchor el="h3">
Schedule a delivery time for an existing Marketing Email
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/schedule/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'name=SendGrid_Test' -F 'at=2013-12-20T11:55:00-05:00'
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

First, we need to get the campaign_id:

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

Then, we can update the scheduled time:


**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/campaigns/{campaign_id}/schedules \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"send_at": 1489771528}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "id": 986724,
  "send_at": 1489771528,
  "status": "Scheduled"
}
{% endcodeblock %}


<page-anchor el="h3">
Retrieve the scheduled delivery time for an existing Marketing Email
</page-anchor>


<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/schedule/get.json -F 'name=SendGrid_Test' api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
{
  "date": "2017-10-24 21:22:02"
}
{% endcodeblock %}

<page-anchor el="h4">
Marketing Campaigns
</page-anchor>

First, we need to get the campaign_id:

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

Then we can get the schedule time:

**Request**

{% codeblock lang:bash %}
curl --request GET \
--url https://api.sendgrid.com/v3/{campaign_id}/schedules \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "send_at": 1490778528
}
{% endcodeblock %}





<page-anchor el="h3">
Cancel a scheduled send for a Marketing Email
</page-anchor>

<page-anchor el="h4">
Legacy Newsletter
</page-anchor>

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/schedule/delete.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'name=SendGrid_Test'
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

First, we need to get the campaign_id:

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

Then, we can delete the scheduled time:


**Request**

{% codeblock lang:bash %}
curl --request DELETE \
--url https://api.sendgrid.com/v3/campaigns/{campaign_id}/schedules \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'
{% endcodeblock %}

**Response**

{% codeblock lang:bash %}
HTTP/1.1 204
{% endcodeblock %}
