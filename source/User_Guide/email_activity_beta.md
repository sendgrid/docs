---
layout: page
weight: 
title: Email Activity Feed - Beta
navigation:
  show: false
seo:
  title: Email Activity Feed Beta
  override: true
  description:
---

The Email Activity feed allows you to view a snapshot of email-related activity associated with your account and any subusers. Our latest enhancementss to Email Activity give you increased visibility into the email delivery flow to help expedite the troubleshooting process.


* [Filtering email activity](#-Filtering-email-activity)
  * [Basic search](#-Basic-search)
  * [Advanced search](#-Advanced-search)
* [Viewing event history](#-Viewing-event-history)
* [Exporting a CSV](#-Exporting-a-CSV)

With the Email Activity feed you can:

* Troubleshoot email delivery issues faster with comprehensive and sequential event data.
* Pinpoint specific emails easily with advanced search and filter options -- including subject line and email metadata.
* Customize your data independently with CSV download/export option.
* Increase storage available for up to 60 days for historical visibility within the UI by purchasing an upgrade.
* Complete an API call to gather specific email events when additional storage is purchased.

{% info %}
SendGrid stores two days of Email Activity data for free. To increase your storage capability, see LINK
{% endinfo %}

{% anchor h2 %}
Filtering email activity
{% endanchor %}

Events on the Activity feed are organized by recipient email address and can be filtered with our basic and advanced search capabilities. 

{% anchor h3 %}
Basic search
{% endanchor %}

By default, the Activity feed allows you to search by recipient email address and event timeframe. The To email address field will filter results including approximate data, or fuzzy search. The date field will filter results that fit the precise date range specified.

{% anchor h3 %}
Advanced Search
{% endanchor %}

In addition to viewing the email activity associated with your account by recipient email address, domain, or event date, the following filters are also available:

* Campaign ID
* Campaign Name
* Categories
* Event Type
* From Address
* Message ID
* Sending API Key ID
* Sending API Key Name
* Sending IP Address
* Subject Line
* Template ID
* Template Name
* Unique Arguments

*To use advanced search:*

1. At the top of the Activity Feed page, click **Advanced** search, in the upper right of the search window.
1. In the field on the far left, select the criteria you wish to filter your event data by. 
1. Once you have selected all the desired criteria associated with your search, click **Search**. 
  
To add additional search criteria, click **Add a Filter**. 

{% info %}
To further narrow your search results, select one of the following options:

* Search emails by **any** of the following - This search is an expansive. It will return more results and will pull in all events that meet *one or more* of the criteria specified by the selected filters.
* Search emails by **all** of the following - This search is limiting. It will return fewer results and will pull in events that meet *every* criteria specified by the selected filters. 
{% endinfo %}

{% anchor h2 %}
Viewing Event History
{% endanchor %}

*To view event history:*

1. Navigate to the event you wish to view and click on the entry. 
1. When you have finished reviewing the event data, click **close**. 

{% anchor h2 %}
Exporting a CSV
{% endanchor %}

*To export a CSV:*

1. In the top right corner of the Activity feed, click **Export CSV**. 
   An email is sent to the email address associated with your SendGrid account *or* the address associated with your Marketing Campaigns feature found under **Notifications**.
1. Open the email and then click **Download**.
