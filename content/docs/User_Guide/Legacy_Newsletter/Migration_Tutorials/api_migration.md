---
layout: page
weight: 50
seo:
  title: Legacy Newsletter to Marketing Campaigns API Migration
  description:
title: Migrating Using API Calls
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is now retired.
As a safety net, you may **retrieve** data for a short grace period. Please act now to download your data or migrate any assets to Marketing Campaigns.
{% endwarning %}

For assistance please [contact our support team](https://support.sendgrid.com/). Login to see your contact options.

Before attempting to migrate your content, please review our [Migration Toolkit](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter//Migration_Tutorials/index.html). Then, using our API as described below, you can automate a portion of the process. We are giving all of our examples in curl, but the steps should translate to whichever language you used to build your application.

<page-anchor el="h2">
Table of Contents
</page-anchor>

* [Migrate Your Legacy Newsletter Content](#-Migrate-Your-Legacy-Newsletter-Content)
    * [Retrieve all newsletters](#-Retrieve-all-newsletters)
    * [Retrieve newsletter content](#-Retrieve-newsletter-content)
    * [Import newsletter content into Marketing Campaigns](#-Import-newsletter-content-into-Marketing-Campaigns)
* [Migrate Your Legacy Newsletter Recipient Lists](#-Migrate-Your-Legacy-Newsletter-Recipient-Lists)
    * [Retrieve all recipient lists](#-Retrieve-all-recipient-lists)
    * [Retrieve recipient names and email addresses](#-Retrieve-recipient-names-and-email-addresses)
    * [Create Marketing Campaigns contact lists](#-Create-Marketing-Campaigns-contact-lists)
    * [Import Legacy Newsletter recipients into Marketing Campaigns](#-Import-Legacy-Newsletter-recipients-into-Marketing-Campaigns)
    * [Add contacts to new lists](#-Add-contacts-to-new-lists)

<page-anchor el="h2">
Migrate Your Legacy Newsletter Content
</page-anchor>

<page-anchor el="h3">
Retrieve all newsletters
</page-anchor>

Before you can migrate all of your marketing email content from Legacy Newsletter into Marketing Campaigns, you must first collect the name of every newsletter in your account.

You will use this list of names to retrieve the content of those newsletters.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl https://api.sendgrid.com/api/newsletter/list.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:json %}
[
  {
    "name": "Legacy Newsletter",
    "newsletter_id": 560308
  },
  {
    "name": "Legacy Newsletter Test",
    "newsletter_id": 560869
  }
]
{% endcodeblock %}

<page-anchor el="h3">
Retrieve newsletter content
</page-anchor>

Now that you have a list of your newsletters, use the following request to retrieve the content of those newsletters.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl https://api.sendgrid.com/api/newsletter/get.json -F name="Legacy Newsletter" -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:json %}
{
  "can_edit": false,
  "content_preview": 0,
  "date_schedule": null,
  "subject": "subject from Legacy Newsletter",
  "text": "text content from Legacy Newsletter",
  "html": "html content from Legacy Newsletter",
  "timezone_id": 16,
  "total_recipients": 1,
  "type": "html",
  "winner_sending_time": null
}
{% endcodeblock %}

<page-anchor el="h3">
Import newsletter content into Marketing Campaigns
</page-anchor>

Take the exported content from the previous API call and import it into Marketing Campaigns using the following API call.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl --request POST \
  --url https://api.sendgrid.com/v3/campaigns \
  --header 'accept: application/json' \
  --header 'authorization: Bearer SENDGRID_API_KEY' \
  --header 'content-type: application/json' \
  --data '{"title":"Legacy Newsletter","subject":"subject from Legacy Newsletter","html_content":"html content from Legacy Newsletter", "plain_content":"text content from Legacy Newsletter"}'
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:json %}
{
  "id": 1,
  "title": "Name of newsletter",
  "ip_pool": "",
  "categories": [],
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

Now, you can use the [Marketing Campaigns API]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html#Update-a-Campaign-PATCH) or the [SendGrid UI](https://sendgrid.com/marketing_campaigns/ui/campaigns) to make further changes to your campaign.

<page-anchor el="h2">
Migrate Your Legacy Newsletter Recipient Lists
</page-anchor>

Before attempting to migrate your recipient lists, please review our [Migrating Recipient Lists tutorial]({{root_url}}/User_Guide/Legacy_Newsletter//Migration_Tutorials/migrating_recipient_lists.html). Then, using our API as described below, you can automate a portion of the process.

<page-anchor el="h3">
Retrieve all recipient lists
</page-anchor>

First, collect all of your Legacy Newsletter recipient lists.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl https://api.sendgrid.com/api/newsletter/lists/get.json -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:json %}
[
  {
    "id": 1,
    "list": "Legacy Newsletter list of recipients"
  }
]
{% endcodeblock %}

<page-anchor el="h2">
Retrieve recipient names and email addresses
</page-anchor>

Next, get a list of emails and names that belong to each recipient list retrieved in the previous step.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl https://api.sendgrid.com/api/newsletter/lists/email/get.json -F list="Legacy Newsletter list of recipients" -F api_user=SENDGRID_USERNAME -F api_key=SENDGRID_PASSWORD
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:json %}
[
  {
    "email": "dx@sendgrid.com",
    "name": "SendGrid DX Team"
  }
]
{% endcodeblock %}

<page-anchor el="h3">
Create Marketing Campaigns contact lists
</page-anchor>

It is important to create individual contact lists in Marketing Campaigns that match the different recipient lists you created in Legacy Newsletter. This allows you to seamlessly move your recipients into Marketing Campaigns.

Use the list names you retrieved in the first step to create new contact lists in Marketing Campaigns.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl --request POST \
  --url https://api.sendgrid.com/v3/contactdb/lists \
  --header 'accept: application/json' \
  --header 'authorization: Bearer SENDGRID_API_KEY' \
  --header 'content-type: application/json' \
  --data '{"name":" list of recipients"}'
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:json %}
{
  "id": 1,
  "name": " list of recipients",
  "recipient_count": 0
}
{% endcodeblock %}

<page-anchor el="h3">
Import Legacy Newsletter recipients into Marketing Campaigns
</page-anchor>

Before you can assign contacts to your individual lists, you must first do a bulk import of your Legacy Newsletter recipients to your default Marketing Campaigns contact list.

Save the `persisted_recipient` values, as these map to the `list_id` in the following API call.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl --request POST \
  --url https://api.sendgrid.com/v3/contactdb/recipients \
  --header 'accept: application/json' \
  --header 'authorization: Bearer SENDGRID_API_KEY' \
  --header 'content-type: application/json' \
  --data '[{"email":"dx@sendgrid.com", "name":"SendGrid DX Team"},{"email":"dx+test@sendgrid.com", "name":"SendGrid DX Team Test Email"}]'
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:json %}
{
  "new_count": 2,
  "persisted_recipients": [
    "YUBh",
    "YUBhYUBh"
  ]
}
{% endcodeblock %}

<page-anchor el="h3">
Add contacts to new lists
</page-anchor>

Now that you have imported all of your Legacy Newsletter recipients into your default Marketing Campaigns contact list, you can assign different contacts to their respective lists.

To ensure that each contact is added to the correct list, use the `persisted_recipient` value from the previous call. This value maps directly to the `list_id` used to identify contact lists in Marketing Campaigns.

<page-anchor el="h4">
Request
</page-anchor>

{% codeblock lang:bash %}
curl --request POST \
  --url https://api.sendgrid.com/v3/contactdb/lists/1/recipients \
  --header 'accept: application/json' \
  --header 'authorization: Bearer SENDGRID_API_KEY' \
  --header 'content-type: application/json' \
  --data '["YUBh","YUBhYUBh"]'
{% endcodeblock %}

<page-anchor el="h4">
Response
</page-anchor>

{% codeblock lang:bash %}
HTTP/1.1 201
{% endcodeblock %}

<page-anchor el="h2">
Additional Resources
</page-anchor>

- [Migrating Your API Integrations]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/Migrating_API.html)
- [Migration Tutorials]({{root_url}}/User_Guide/Legacy_Newsletter//Migration_Tutorials/index.html)
- [SendGrid Support]({{site.support_url}})
