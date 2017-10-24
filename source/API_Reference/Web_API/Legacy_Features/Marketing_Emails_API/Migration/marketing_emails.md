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
  <li><a href="#-Create-new-Marketing-Email">Create a new Marketing Email</a></li>
  <li><a href="#-Edit-an-existing-Marketing-Email">Edit an existing Marketing Email</a></li>
  <li><a href="#-Retrieve-the-Contents-of-an-Existing-Marketing-Email">Retrieve the Contents of an Existing Marketing Email</a></li>
  <li><a href="#-Retrieve-List-Of-All-Existing-Marketing-Email">Retrieve a List of All Existing Marketing Email</a></li>
  <li><a href="#-Remove-an-Existing-Marketing-Email">Remove an Existing Marketing Email</a></li>
</ul>


{% anchor h3 %}
Create a new Marketing Email
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/add.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'identity=Sender_Address' -F 'name=SendGrid_Test' -F 'subject=Test Subject' -F 'text=Text Content' --form-string 'html=<html><body>HTML content</body></html>'
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

First you need to find your sender_id:

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
        "email": "example@example.com",
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

Then you can create your campaign.

**Request**

{% codeblock lang:bash %}
curl --request POST \
--url https://api.sendgrid.com/v3/campaigns \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json' \
--data '{"sender_id": 124451, "title":"SendGrid_Test", "subject":"Test Subject", "plain_content": "Text Content", "html_content": "<html><body>HTML content</body></html>"}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
    {
  "id": 986724,
  "title": "SendGrid_Test",
  "subject": "Test Subject",
  "sender_id": 124451,
  "html_content": "<html><body>HTML content</body></html>",
  "plain_content": "Text Content",
  "status": "Draft"
}
{% endcodeblock %}



{% anchor h3 %}
Edit an existing Marketing Email
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/edit.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'identity=Sender_Address' -F 'name=SendGrid_Test'-F 'newname=SendGrid_Test_2' -F 'subject=Test Subject' -F 'text=Text Content' --form-string 'html=<html><body>HTML content</body></html>'
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

First, find the campaign_id:

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
--data '{"title":"SendGrid_Test_2", "subject":"Test Subject", "plain_content":"Text Content", "html_content":"<html><body>HTML content</body></html>"}'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "id": 986724,
  "title": "SendGrid_Test_2",
  "subject": "Test Subject",
  "sender_id": 124451,
  "html_content": "<html><body>HTML content</body></html>",
  "plain_content": "Text Content",
  "status": "Draft"
}
{% endcodeblock %}




{% anchor h3 %}
Retrieve the contents of an existing Marketing Email
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/get.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'name=SendGrid_Test'
{% endcodeblock %}

**Response**

{% codeblock lang:json %}

{
  "can_edit": true,
  "name": "SendGrid_Test",
  "text": null,
  "newsletter_id": 38074,
  "total_recipients": 1,
  "html": null,
  "type": "html",
  "date_schedule": null,
  "identity": "d22de3a53fac1abef944c80c19032c2c",
  "subject": null
}

{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

First, find the campaign_id:

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



{% anchor h3 %}
Retrieve a list of all existing Marketing Email
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/list.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

**Response**

{% codeblock lang:json %}
[
  {
    "name": "Just Testing",
    "newsletter_id": 560308
  },
  {
    "name": "LSRC",
    "newsletter_id": 560869
  },
  {
    "name": "LSRC test",
    "newsletter_id": 560908
  },
  {
    "name": "Test",
    "newsletter_id": 38074
  }
]
{% endcodeblock %}

{% anchor h4 %}
Marketing Campaigns
{% endanchor %}

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




{% anchor h3 %}
Remove an existing Marketing Email
{% endanchor %}

{% anchor h4 %}
Legacy Newsletter
{% endanchor %}

**Request**

{% codeblock lang:bash %}
curl -X POST https://api.sendgrid.com/api/newsletter/delete.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD -F 'name=SendGrid_Test'
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

First, find the campaign_id:

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

Then, we can delete the campaign:

**Request**

{% codeblock lang:bash %}

curl --request DELETE \
--url https://api.sendgrid.com/v3/campaigns/{campaign_id} \
--header 'accept: application/json' \
--header 'authorization: Bearer SENDGRID_API_KEY' \
--header 'content-type: application/json'

{% endcodeblock %}

**Response**

{% codeblock lang:bash %}
HTTP/1.1 204
{% endcodeblock %}
