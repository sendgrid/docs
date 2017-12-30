---
layout: page
weight: 
title: Email Activity Feed - Beta
navigation:
  show: true
seo:
  title: Email Activity Feed Beta
  override: true
  description:
---

The Email Activity feed allows you to view a snapshot of email-related activity associated with your account and any subusers. Enhanced email activity and storage gives you increased visibility into the email delivery flow to help expedite the troubleshooting process.  


* [Types of Email activity data](#-Filtering-email-activity)
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
SendGrid stores two days of Email Activity data for free. To increase your storage capability, you may purchase more storage (pricing coming soon!).
{% endinfo %}

{% anchor H2 %}
Types of email activity data
{% endanchor %}

The Email Activity feed allows you to view specific information about messages sent from your account. 


<table class="table" style="table-layout:fixed">
  <tr>
    <th class="tg-031e">Processed</th>
    <th class="tg-yw4l">Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.</th>
  </tr>
  <tr>
    <td class="tg-031e">Clicks</td>
    <td class="tg-yw4l">Whenever a recipient clicks one of the Click Tracked links in your email.</td>
  </tr>
  <tr>
    <td class="tg-031e">Delivered</td>
    <td class="tg-yw4l">An email that was delivered to a recipient.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Opens</td>
    <td class="tg-yw4l">Whenever an email is opened by a recipient.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Unsubscribes</td>
    <td class="tg-yw4l">Whenever a recipient unsubscribes from your emails. </td>
  </tr>
  <tr>
    <td class="tg-yw4l">Group Unsubscribes</td>
    <td class="tg-yw4l">Whenever a recipient unsubscribes from a suppression group.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Group Resubscribes</td>
    <td class="tg-yw4l">When a recipient resubscribes themselves to a suppression group.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Deferred</td>
    <td class="tg-yw4l">The recipient mail server asked SendGrid to stop sending emails so fast.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Drops</td>
    <td class="tg-yw4l">SendGrid will drop an email when the contact on that email is in one of your suppression groups, the recipient email previously bounced, or that recipient has marked your email as spam.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Bounces </td>
    <td class="tg-yw4l">When an email is attempted to be delivered, but the recipient mail server rejects it.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blocks</td>
    <td class="tg-yw4l">Blocks - When your IP address has been blacklisted or blocked by an ISP or messaging organization. Blocks are less severe than bounces and do not result in permanent suppressions: subsequent sends to blocked email addresses are not automatically suppressed.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Spam Reports</td>
    <td class="tg-yw4l">Spam Reports - Whenever a recipient marks your email as spam and their mail server tells us about it.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Parse</td>
    <td class="tg-yw4l">Whenever an incoming email is processed through the Inbound Parse Webhook.</td>
  </tr>
</table>

{% anchor H2 %}
Filtering email activity
{% endanchor %}

Events on the Activity feed are organized by email and can be filtered with our basic and advanced search capabilities. 


{% anchor H3 %}
Basic search
{% endanchor %}

By default, the Activity Feed allows you to search by email address and event dates. The email address field filters with approximate, or fuzzy search. The date field pulls filters events that fit within the precies date range specified. 

{% anchor H3 %}
Advanced Search
(% endanchor %)

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

(% anchor H2 %)
Viewing Event History
(% endanchor %)

*To view event history:*

1. Navigate to the event you wish to view and click on the entry. 
1. When you have finished reviewing the data, click **close**. 

(% anchor H2 %)
Exporting a CSV
(% endanchor %)

*To export a CSV:*

1. In the top right corner of the activity feed, click **Export CSV**. 
   An email is sent to the email address associated with your SendGrid account. 
1. Open the email and then click **Download**. 
