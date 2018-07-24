---
layout: page
weight: 100
title: SendGrid Source
seo:
  description: Learn how to integrate your SendGrid account with Segment.
navigation:
  show: true
---

By using [SendGrid Source](https://segment.com/sources/sendgrid/?utm_medium=docs&utm_source=stripe&utm_campaign=sources) with your SendGrid data in your data warehouse, you’ll be able to analyze your email activity (opens, clicks, deliveries, and bounces), lists, and recipients via SQL. Additionally, you can join your SendGrid data with Segment event and other source data you’re already sending to your warehouse, so you can correlate product feature usage with email activity, or tie referral sources into your customer journey analysis.

This documentation is managed by [Segment](https://segment.com/?utm_medium=docs&utm_source=sendgrid&utm_campaign=sources). If you have any questions please contact Segment's support team at friends@segment.com.

## Getting Started


1. Create a Segment [account](https://segment.com/sources/sendgrid)
2. Add SendGrid in the “Cloud Apps” Category and enter your credentials
3. Setup a warehouse by bringing your own or having Segment setup and host
4. Give the Source a nickname and schema name. *We recommend sticking to something that reflects the source itself, like `SendGrid` for nickname and `sengrid` or `sendgrid_prod` for the schema name.*
4. You’ll soon see SendGrid data in your data warehouse


Note that you can add multiple instances if you have multiple SendGrid accounts. That’s why we allow you to customize the source’s nickname and schema name!

In order to pull information about your contacts, we’ll make requests to SendGrid’s API with our [sync component](#sync). So the first step in setting up the integration is to retrieve your API Keys and drop them into the Segment interface. You can create an API Key by navigating to **Settings > API Keys**, clicking **General API Key**.

We recommend providing read permissions for **Email Activity** and **Marketing Activity**.

Finally, copy the resulting API Key into the Segment interface, taking care to trim any errant trailing spaces from copying and pasting, and press connect. 

In the next step, copy the auto-generated Webhook URL and paste it into SendGrid’s Event Notification settings pane under **Settings > Mail Settings**.

Once you enable the Event Notification, you’re good to go! Press **Next**, and then **Finish** to wrap up the setup flow.

### Event URL

SendGrid has a single Event URL location. By using the SendGrid source, you will be using your only Event URL location. If you remove a pre-existing URL, then that location will no longer receive events. 

## Components

### Sync

SendGrid has a sync component, which means we’ll make requests to their API on your behalf on a 3 hour interval to pull the latest data into Segment. In the initial sync, we’ll grab all the SendGrid objects (and their corresponding properties) according to the [Collections Table]() below. SendGrid objects will be written into a separate schema, corresponding to the source instance’s schema name you designated upon creation.

Our sync component gets resources from SendGrid and forwards them to Segment using an upsert API, so the dimensional data in your warehouse loaded will reflect the latest state of the corresponding resource in SendGrid. For example,  if `lists.recipient_count` goes from `100` to `200` between syncs, on its next flush to your warehouse, that tickets status will be  `200`. 


### Streaming

The SendGrid source also has a streaming component which listens in real time for inbound webhooks from SendGrid’s Event Notifications and batches the events to be uploaded on your next warehouse flush. These events are only ever appended to your warehouse. At present, there is no way to retrieve email event history from SendGrid, so you will only have access to data that we’ve collected after you successfully enable this component of the source integration.


## Collections

Collections are the groupings of resources we pull from your source. In your warehouse, each collection gets its own table. 

**Object** collections are updated with each sync. These are pulled via our sync component. 

**Event** collections are append only, represent a user action or activity, and may be likened to fact tables in a traditional data warehouse.

For a complete visual breakdown of the SendGrid collections and all their properties, [view the Visual Schema here](https://www.lucidchart.com/invitations/accept/c639887d-09da-4f91-a846-1409f6dd0d56).

|  Collection | Type | Description |
|  ------ | ------ | ------ |
|  activity | Event | The union of all SendGrid **event** tables. Useful for creating funnels |
|  _open | Event | Recipient has opened the HTML message. You need to enable Open Tracking for getting this type of event. |
|  click | Event | Recipient clicked on a link within the message. You need to enable Click Tracking for getting this type of event. |
|  bounce | Event | Receiving server could not or would not accept message. |
|  delivered | Event | Message has been successfully delivered to the receiving server. |
|  processed | Event | Triggered when the email is processed |
|  dropped | Event | You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota |
|  deferred | Event | Recipient’s email server temporarily rejected message. |
|  unsubscribe | Event | Recipient clicked on message’s subscription management link. You need to enable Subscription Tracking for getting this type of event. |
|  spam_report | Event | Recipient marked message as spam. |
|  lists | Object | [Groups of contacts](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html). |
|  segments | Object | [Slices of lists](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html). |
|  recipients | Object | All contacts who have received an email, with information about their last activities and custom activities. [More Info](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html) |
