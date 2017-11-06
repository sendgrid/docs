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

The Email Activity feed allows you to view a snapshot of email-related activity associated with your account and any subusers. Enhanced email activity and storage gives you increased visibility into the email delivery flow to help expedite the troubleshooting process.  


* [Filtering email activity](#-Filtering-email-activity)
  * [Basic search](#-Basic-search)
  * [Advanced search](#-Advanced-search)
* [Viewing event history](#-Viewing-event-history)
* [Exporting a CSV](#-Exporting-a-CSV)

With the Email Activity feed you can:

* Troubleshoot email delivery issues faster with comprehensive and sequential event data by email.
* Pinpoint specific emails easily with advanced search and filter options --including subject line and email metadata.
* Customize your data independently with CSV download/export option.
* Increase storage available for up to 60 days for historical visibility within the UI by purchasing an upgrade.
* Call all events by an email from the API with additional storage purchase.

{% info %}
SendGrid stores two days of Email Activity data for free. To increase your storage capability, see LINK
{% endinfo %}

{% anchor h2 %}
Filtering email activity
{% endanchor %}

Events on the Activity feed are organized by email and can be filtered with our basic and advanced search capabilities. 

{% anchor h2 %}
Basic search
{% endanchor %}

By default, the Activity Feed allows you to search by email address and event dates. The email address field filters with approximate, or fuzzy search. The date field pulls filters events that fit within the precies date range specified. 

{% anchor h3 %}
Advanced Search
{% endanchor %}

In addition to viewing the email activity associated with your account by recipient email address, domain, or event date, you can also use the following filters to sort your data:

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

1. At the top of the Activity Feed page, click **Advanced** search. 
1. In the field on the far left, select the criteria you wish to filter your event data by. 
1. Once you have filled in all of the fields associated with that filter, click **Search**. 
   To add additional search criteria, click **Add a Filter**. 

{% info %}
To further narrow your search results, select one of the following options:

* Search emails by **any** of the following - This search will return more results and will pull in all events that meet *one or more* of the criteria specified by the selected filters. 
or
* Search emails by **all** of the following - This search will return fewer results and will pull in events that meet *every* criteria specified by the selected filters. 
{% endinfo %}

{% anchor h2 %}
Viewing Event History
{% endanchor %}

*To view event history:*

1. Navigate to the event you wish to view and click on the entry. 
1. When you have finished reviewing the data, click **close**. 

{% anchor h2 %}
Exporting a CSV
{% endanchor %}

*To export a CSV:*

1. In the top right corner of the activity feed, click **Export CSV**. 
   An email is sent to the email address associated with your SendGrid account. 
1. Open the email and then click **Download**. 
