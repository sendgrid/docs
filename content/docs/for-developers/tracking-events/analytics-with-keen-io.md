---
seo:
  title: Keen Integration
  description: Analyze, Visualize, and Store SendGrid Email Event Data
  keywords: Keen, integrate, event data, analytics
title: Analyze, Visualize, and Store SendGrid Event Data with Keen
group: partners
weight: 142
layout: page
navigation:
  show: true
---
The SendGrid [Event Webhook]({{root_url}}/for-developers/tracking-events/event/) lets you stream all [email events]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/) directly to <a href="https://keen.io/users/signup?utm_campaign=SendGrid%202020&utm_source=SendGrid&utm_medium=SendGrid%20Hosted%20Docs">Keen</a> for real-time analysis and long term raw storage.

It only takes a couple of minutes to start streaming email event data from SendGrid to Keen, and once you do, you’ll get tools to create flexible email analytics and stunning dashboards.


## 	Sending Your SendGrid Data to Keen

**Create a Keen and SendGrid account**

1. Create a [Keen account](https://keen.io/users/signup?utm_campaign=SendGrid%202020&utm_source=SendGrid&utm_medium=SendGrid%20Hosted%20Docs) if you don't already have one.
1. Add a new project in the Keen UI for your SendGrid Email Event Data.
1. Navigate to the Access tab and copy your Project ID and API Write Key.
1. Create a [SendGrid account](https://sendgrid.com/user/signup).

**Activate SendGrid's Event Notification App**

1. Log into your SendGrid account.
1. Click **Settings** from the left menu.
1. Select [**Mail Settings**](http://app.sendgrid.com/settings/mail_settings) and then click **Event Webhook**.

![SendGrid - Mail Settings - Event Webhook]({{root_url}}/images/keen/sendgrid_mailsettings_eventwebhook.png)

## 	Set the HTTP POST URL
The HTTP Post URL is the endpoint where SendGrid will stream all of your email data.

 ```
 https://api.keen.io/3.0/projects/YOUR_KEEN_PROJECT_ID/email/sendgrid/1.0?api_key=YOUR_KEEN_API_WRITE_KEY
 ```
1. Copy and paste the above URL into the HTTP POST URL field. Make sure to replace `YOUR_KEEN_PROJECT_ID` and `YOUR_KEEN_API_WRITE_KEY` with your Project ID and API Write Key available in the Access tab. Set Authorization Method to **None**.
2. In the settings, select the events you want to post to Keen (why not all of them?). To do this, check **Select All** under **Events to be POSTed to your URL**. You can refer to SendGrid’s [event documentation]({{root_url}}/for-developers/tracking-events/event/) for more information on these events.

That’s it! Now, as your emails make their way through SendGrid, all of the event information will be posted to Keen. A new Event Collection, aptly named for each type of email event, will be created within your Keen Project.

## 	Testing Your Integration

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

_To explore each data model:_
1. Log into your Keen account.
1. Select your SendGrid Project and click **Streams**.
1. In the search bar type in “email” to check out your data collections associated with SendGrid email data. You can click into an email event to view all of the different data you have to work with.

<call-out>

Use the property `message_id` or `singlesend_name` contained in each event to track a particular email across all of these possible actions. Similarly, you can follow a particular user's behavior via the `email` property.

</call-out>


## 	Using the Data Explorer

*To use the Data Explorer:*

1. Log into your Keen account and then select your project.
1. Select **Streams**.
1. In the "Event Streams" search bar type in “email” to check out your data collections associated with SendGrid email data. A separate Event Collection, aptly named for each type of email event, is created within your Keen Project.

![Keen Event Streams - SenGrid Email Event Data]({{root_url}}/images/keen/sendgrid_stream_new.png)

4. Run some basic queries by selecting **Explorer** and entering `count` as the “Analysis Type,” select `email_delivered` as your “Collection Name,” and click “**Run Query**.

![Explorer to Run Query]({{root_url}}/images/keen/sendgrid_basic_count_new.png)

The breadth of analysis you can do is pretty vast. [Here's a link](https://keen.io/docs/compute/) to read up on the types of queries you can do with Keen. Some example query types are sums, averages, min or max, funnels, and select_unique. Keen also offers a [step-by-step guide](https://www.keen.io/blog/how-to-build-sendgrid-email-marketing-dashboard-with-keenio) on creating queries for a SendGrid email marketing dashboard.

For some extra-pretty graphs and custom analyses here are some tips:

- Adding an “Interval” (e.g. “daily”) will give you a line graph over time (Ex. Number of emails processed daily for the previous 30 days)
- Include a “Group By” property (e.g. “campaign”)  to view results categorically
- Use “Filters” to refine the scope of your query
- Use the chart type drop down on the  upper right to choose how you view data: as an area graph, bar chart, column chart, table, [or more](https://keen.io/docs/data-visualizations/widgets/funnel-chart/)
- Download a CSV of the data you found by clicking on the “Download CSV” button

![Explorer Sample Query]({{root_url}}/images/keen/sendgrid_sample_query.png)

## Save Your Query & Make Your First Dashboard

Do you often run the same analysis on a regular basis, or want to be able to save a quick link to your work to revisit again sometime?

Once you’ve found the query you need, you can either copy the URL right from your browser’s address bar and share it with a colleague, or you can save the query and make yourself a dashboard with Keen.

Here’s how:

1. Save your query. Create your query in the Explorer and then click **Run**.
2. After running the query, select **Save**.

![Save Your Query]({{root_url}}/images/keen/sendgrid_saved_query_new.png)

Saved queries are a super user-friendly way to revisit your favorite metrics. Rather than entering the same query parameters over and over again, queries can be shared with your teammates. Notice that your saved query can be edited and cloned.

Next, you'll want to add your graph to a dashboard.
1. Navigate to **Dashboards** and select **New Dashboard**.
1. Name your dashboard.
1. Add the query you saved by hovering over "Add item" and then dragging a metric chart into the dashboard. Select the saved query from a dropdown in the right hand ribbon.
1. Click **Save** to save your Dashboard.

![Add Query to Dashboard]({{root_url}}/images/keen/sendgrid_create_dashboard_new.png)

Congratulations! You’ve created your first dashboard!

## Embedding SendGrid Analytics Into Your App
With Keen, you will have access to all of your raw data for as long as you need it. An archive of all of your email data is created, which means you will have access to your historical data and can query for past user behavior.

Just like SendGrid, Keen is 100% powered by APIs. This means you can embed rich analytics anywhere you can write code.

Many customers find it useful to embed analytics into their products for their customers or customer success teams. Here’s a link to our [Customer Facing Analytics Guide](https://keen.io/docs/visualize/customer-facing-analytics/) that will give you step-by-step instructions on how to embed your SendGrid analytics into your product. Some customers also take advantage of Keen's [S3 Streaming](https://keen.io/docs/streams/extended-functionality/amazon-s3/) capabilities to write a copy of all their data to AWS.


## 	Additional Resources:

- Check out [Keen's API reference](https://keen.io/docs/api/) to learn about the full capability of the platform.
- Build a campaign and email marketing dashboard. Create and display your email metrics using [Keen's Data Viz Library](http://keen.io/docs/data-visualizations/create-dashboard/).
- SendGrid's complete [Event Webhook Documentation]({{root_url}}/for-developers/tracking-events/event/) is a great resource on SendGrid email events. As you start to do more analysis, it's worth a read. You can even skip a lot of the sections because we've done much of the work for you.
