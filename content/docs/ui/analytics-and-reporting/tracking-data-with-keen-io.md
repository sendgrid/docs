---
layout: page
weight: 90
group: partners
title: Email Event Data with Keen
navigation:
  show: true
seo:
  title:  Email Event Data with Keen
---

The SendGrid [Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/) lets you stream all [email events]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/) directly to [Keen](https://keen.io/users/signup?utm_campaign=SendGrid%202020&utm_source=SendGrid&utm_medium=SendGrid%20Hosted%20Docs) for real-time analysis and long term raw storage.

It only takes a couple of minutes to start streaming email event data from SendGrid to Keen, and once you do, you’ll get tools to create flexible email analytics and stunning email marketing dashboards.

 ## 	Send your SendGrid Data to Keen
 
 To get started, the first thing you'll need to do is create create a Keen and SendGrid account. 

 1. Create a [Keen account](https://keen.io/users/signup?utm_campaign=SendGrid%202020&utm_source=SendGrid&utm_medium=SendGrid%20Hosted%20Docs). 
 1. Add a new project in the Keen UI for your SendGrid Email Event Data.
 1. Copy your Project ID and API Write Key from the Access tab.
 1. Create a [SendGrid account](https://sendgrid.com/user/signup). 

## Activate SendGrid's Event Notification App

 1. Log into your SendGrid account.
 1. Navigate to **Settings** from the left menu. 
 1.Select [**Mail Settings**](http://app.sendgrid.com/settings/mail_settings) and then click **Event Webhook**.

 ![SendGrid- Mail Settings - Event Webhook]({{root_url}}/images/keen/sendgrid_mailsettings_eventwebhook.png)

### Set the HTTP POST URL

The HTTP Post URL is the endpoint where SendGrid will stream all of your email data.
 ```
 https://api.keen.io/3.0/projects/YOUR_KEEN_PROJECT_ID/email/sendgrid/1.0?api_key=YOUR_KEEN_API_WRITE_KEY
 ```
1. Copy and paste the above URL into the HTTP POST URL field. Make sure to replace `YOUR_KEEN_PROJECT_ID` and `YOUR_KEEN_API_WRITE_KEY` with your Project ID and API Write Key available in the Access tab. Set Authorization Method to None.
2. In the settings, select the events you want to post to Keen (why not all of them?). To do this, check **Select All** under **Events to be POSTed to your URL**. You can refer to SendGrid’s [event documentation]({{root_url}}/for-developers/tracking-events/event/) for more information on these events.

That’s it! Now, as your emails make their way through SendGrid, all of the event information will be posted to Keen. A new Event Collection, aptly named for each type of email event, will be created within your Keen Project.


 ## Testing Your Integration

To test that everything is working, navigate to **Event Webhook Settings** in the SendGrid app and then click **"Test Your Integration"**. This will send sample email data from SendGrid into your Keen Project. In the Keen UI, navigate to the **Streams** tab to check for sample SendGrid data. After you've confirmed the data was sent, enable the Event Webhook and your SendGrid email data will now be sent to Keen in real-time.


 ## Your Data: SendGrid Data Models

In the SendGrid app, navigate to **Mail Settings** and then select  **Event Webhook**. Each email event type that is selected will be recorded as a separate Event Collection in your Keen project. We recommended checking **Select All** to access full functionality of the Keen app’s reporting.

 The email events that are recorded are:

- `email_bounce`
- `email_click`
- `email_deferred`
- `email_delivered`
- `email_dropped`
- `email_group_resubscribe`
- `email_group_unsubscribe`
- `email_open`
- `email_processed`
- `email_spamreport`
- `email_unsubscribe`

As SendGrid email data streams to Keen, it will be enhanced using Keen's [Data Enrichment](https://keen.io/docs/streams/data-enrichment-overview/) capabilities. Keen’s data enrichments turn IP addresses into geographic locations and break out timestamps, URLs, and user agent strings into more easy-to-use data such as `device type`, `day_of_the_week`, and URL `path`.

To explore all of the email data you have at your fingertips, log into your Keen account, select your Project with SendGrid data and open the **Streams** tab. In the search bar type in “email” to check out your data collections associated with SendGrid email data. You can click into an email event like `email_open` to view all of the different data you have to work with.

<call-out>

Use the property `message_id` or `singlesend_name` contained in each event to track a particular email across all of these possible actions. Similarly, you can follow a particular user's behavior via the `email` property.

</call-out> 

## 	How to Use the Data Explorer

![Keen Open Rate Query]({{root_url}}/images/keen/sendgrid_open_rate_query.png)

Keen’s Data Explorer enables you to create powerful email marketing metrics by running queries on your Sendgrid event data. You can also use filters, timeframes and groupings to view different cuts of the data. After you’ve created your email metrics, you can present them all in one place using Keen’s Dashboard Creator.

Check out Keen’s tutorial on [how to build a SendGrid email analytics dashboard](https://www.keen.io/blog/how-to-build-sendgrid-email-marketing-dashboard-with-keenio?utm_campaign=SendGrid%202020&utm_source=SendGrid&utm_medium=SendGrid%20Hosted%20Docs) to learn more!

## Embedding SendGrid Analytics Into Your App

With Keen, you will have access to all of your raw data for as long as you need it. An archive of all of your email data is created, which means you will have access to your historical data and can query for past user behavior.

Just like SendGrid, Keen is 100% powered by APIs. This means you can embed rich analytics anywhere you can write code.

Many SendGrid users find it useful to embed these email analytics into a report if they need to share the results with a client. Here’s a link to our [Customer Facing Analytics Guide](https://keen.io/docs/visualize/customer-facing-analytics/) that will give you step-by-step instructions on how to embed your SendGrid analytics into your product. You can also grab a shareable link in the Dashboard Creator. Some users also take advantage of Keen's [S3 Streaming](https://keen.io/docs/streams/extended-functionality/amazon-s3/) capabilities to write a copy of all their data to AWS.


 ## 	Additional Resources:

 - Check out Keen's tutorial on [How to Build a SendGrid Email Marketing Dashboard](https://www.keen.io/blog/how-to-build-sendgrid-email-marketing-dashboard-with-keenio?utm_campaign=SendGrid%202020&utm_source=SendGrid&utm_medium=SendGrid%20Hosted%20Docs) for a step-by-step guide on creating additional queries.
 - Keen  offers a [3-part video series](https://www.youtube.com/playlist?list=PL6E4U2hk0KgOqdPkaDVqKGHLfUEJsRBW3) which covers setting up the integration, creating email metrics, and building an email marketing dashboard.
 - SendGrid's complete [Event Webhook Documentation]({{root_url}}/for-developers/tracking-events/event/) is a great resource on SendGrid email events. As you start to do more analysis, it's worth a read. You can even skip a lot of the sections because we've done much of the work for you.
