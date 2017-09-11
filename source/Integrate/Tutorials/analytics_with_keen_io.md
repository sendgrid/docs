---
seo:
  title: Keen IO Integration
  description: Analyze, Visualize, and Store SendGrid Email Event Data
  keywords: Keen IO, integrate, event data, analytics
title: Analyze, Visualize, and Store SendGrid Event Data with Keen IO
weight: 142
layout: page
navigation:
  show: true
---
The SendGrid [Event Webhook](https://sendgrid.com/docs/API_Reference/Webhooks/event.html) lets you stream all of the events that happen within an email directly to Keen IO for real-time analysis and long term raw storage. These events are things like Delivered, Opened, Clicked, Marked as Spam, and [lots more](https://sendgrid.com/docs/API_Reference/Webhooks/event.html)!

It only takes a few minutes to start streaming data over and once you do you can start analyzing and visualizing your data in many different ways.

*This guide covers:*

- [Send Your SendGrid Data to Keen IO](#send-your-sendgrid-data-to-keen-io)
- [Test Your Integration](#test-your-integration)
- [SendGrid Email Analytics App: How to Guide](#sendgrid-email-analytics-how-to-guide)
- [Ad-Hoc Querying & Raw Data Access](#ad-hoc-querying-and-raw-data-access)
- [Embedding SendGrid Analytics Into Your App](#embedding-sendgrid-analytics-into-your-app)
- [Additional Resources](#additional-resources)

{% anchor h3 send-your-sendgrid-data-to-keen-io %}
Send your SendGrid Data to Keen IO
{% endanchor h3 %}

**Step 1: Create a Keen IO and SendGrid account**

* Create a <a href="https://keen.io/signup">Keen IO account</a> (if you don't already have one)
* Create a <a href="https://sendgrid.com/user/signup"> SendGrid account</a>


**Step 2: Activate SendGrid's Event Notification App**

Log into your SendGrid account, click on Settings from the left menu → Select <a href="http://app.sendgrid.com/settings/mail_settings">Mail Settings</a>. Then click on “Event Notification”.

![SendGrid- Mail Settings]({{root_url}}/images/keen/sendgrid_mailsettings_eventnotification.png)

**Step 3: Set the HTTP POST URL (example below) as the endpoint where SendGrid will stream all of your email data. **

```
https://api.keen.io/3.0/projects/YOUR_KEEN_PROJECT_ID/email/sendgrid/1.0?api_key=YOUR_KEEN_API_WRITE_KEY
```
You can snag a prebuilt URL in Keen’s UI or make your own.  

In the settings, select the events you want to post to Keen IO (why not all of them?). To do this, check “All” under the “Select Actions”.

That’s it! Now, as your emails make their way through SendGrid, all of the event information will be posted to Keen IO. A new Event Collection, aptly named for each type of email event, will be created within your Keen Project.

{% anchor h3 test-your-integration %}
Test Your Integration
{% endanchor h3 %}

Test that everything is working by clicking  on the **"Test Your Integration"** button in SendGrid’s “Event Notification” Settings. This will send sample email data from SendGrid into your Keen IO Project. In the Keen UI, click on **“Check for SendGrid Data”** button.

Your SendGrid email data should now be populated in Keen IO. You’ll have one segment automatically created for “All Mail”, and you can now start customizing your email report.

{% anchor h3 sendgrid-email-analytics-how-to-guide %}
SendGrid Email Analytics: How to Guide
{% endanchor h3 %}

Once you have data successfully flowing from SendGrid to Keen, a new application called SendGrid Email Analytics will appear on your projects page’s “Apps” tab.

To find it, visit your [Keen home screen](https://keen.io/home), select the project you’ve connected, in and click on the “Apps” tab. Select “SendGrid”. If you’ve successfully completed Step 1 and sent SendGrid data to Keen for storage, you will see the dashboard below.

![SendGrid- Email Analytics App Dashboard Home]({{root_url}}/images/keen/sendgrid_email_analytics_dashboard.png)

A report for “All of your Mail” will be created automatically. You can see Delivered Rates, Unique Opens, Unique Clicks, Click Rates, Unsubscribe Rates, Bounces, and Number of Emails Marked as Spam.

For each of these metrics, you can download a CSV of the detailed event data. Just click on any cell, and you’ll see a menu with the option to download a CSV. Learn who did or did not open an email for example, and with this list of email addresses you can build a more targeted user campaign.

{% anchor h4 %}
Add a Segment
{% endanchor h4 %}

Now that you have an idea of the metrics that can be viewed for all of your mail, let’s create a more targeted segment. A segment will allow you to track a specific campaign or filter on a particular field like a customer ID.

To create a custom segment, select “Add Segment” from the top left corner. The following pop-out menu will allow you to define your segment name, the date you’d like to look at, and, most importantly, select a property by which you’d like to measure the effectiveness of a campaign.

Here’s an example of a segment created to look at delivered, open, and click rates for emails sent within the United States.

![SendGrid- Email Analytics App Create a Segment]({{root_url}}/images/keen/sendgrid_create_a_segment.png)

Your custom segment will appear in the application here:

![SendGrid- Email Analytics App Segment Now Created]({{root_url}}/images/keen/sendgrid_segment_created.png)

To edit a segment, click on the segment you newly created: you’ll find a menu that allows you to edit it, clone, or remove it.

![SendGrid- Email Analytics App Edit or Clone Segment menu]({{root_url}}/images/keen/sendgrid_edit_segment.png)

{% anchor h4 %}
Custom Attributes
{% endanchor h4 %}

SendGrid gives you the ability to include additional data about your contacts using [custom fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html). These fields are automatically fully available for segmentation and filtering in this app.

Once you’ve added an attribute you’d like to use for analysis (for example customer_ID, company_name, or email campaign ID or campaign names), you can use segments to track email performance for these custom attributes. Here’s an example:

![SendGrid- Email Analytics App Create a Custom Segment]({{root_url}}/images/keen/sendgrid_create_custom_segment.png)

{% anchor h4 %}
Analyze Different Time Periods
{% endanchor h4 %}

You can track your campaign’s performance over time by selecting the timeframe for which you’d like to see analyses and metrics. You can change your timeframes to compare campaign performance from the first 24 hours to the first 14 days of the campaign.

![SendGrid- Email Analytics App Timeframe Picker]({{root_url}}/images/keen/sendgrid_timeframe.png)

The app’s dashboard defaults to 72 Hours, so you can compare all of your campaigns and email performance for each segment against that campaign’s first 72 hours. Uniform timeframes that compare each campaign to the same period of performance gives you consistent data points that you can measure against.

Your data is stored in Keen and does not expire for as long as your account is active. The SendGrid Email Analytics integration results in a data warehouse or archive of all of your SendGrid email data. This means your user transaction and email behavior data is stored for as long as you need it.

The report has fixed timeframe options, but that doesn’t mean that we stop storing your data after 14 days. If you need to access older data, see the section below on [Ad-hoc Querying](#ad-hoc-querying-and-raw-data-access).

{% anchor h4 %}
Understand User Behavior
{% endanchor h4 %}

Each column in the the Analytics App represents a different user action and each column is a unique step. As we look from left to right, the columns display the number of people that successfully make it through these series of steps. As we get to the right side, the fewest number of users will have successfully been delivered an email, gone ahead and opened it, clicked, and then unsubscribed.     

![SendGrid- Email Analytics App Funnel]({{root_url}}/images/keen/sendgrid_funnel.png)

The value presented shows the number or percentage of users who completed the action successfully. With the Units option, you can toggle between percentage or raw numbers.

![SendGrid- Email Analytics App Units Picker]({{root_url}}/images/keen/sendgrid_units.png)

{% anchor h4 %}
Download Email Addresses to CSV
{% endanchor h4 %}

For each segment in each step, you can download the segment and retrieve a list of all unique email address who successfully completed the user action or the inverse. You can download a CSV for every custom segment that you create. As an example below, you can download a list of all customers who successfully opened and email and clicked on a link, or a list of all the users who opened the email but didn’t click.

![SendGrid- Email Analytics App Choose to Download to CSV]({{root_url}}/images/keen/sendgrid_segment_created.png)

{% anchor h3 ad-hoc-querying-and-raw-data-access %}
Ad-Hoc Querying and Access to Raw Data
{% endanchor h3 %}

In addition to the data views you see in the Keen SendGrid App, all of your SendGrid data flowing into Keen is also available for raw analysis, programmatic querying via API, and full resolution download.

Use the ‘Explorer’ tab to create ad-hoc queries and supplemental dashboards.

{% anchor h3 %}
How to Use the Data Explorer
{% endanchor h3 %}

**Step 1: Log into your Keen account, select your Project**

Open the “Streams” tab, and select the `SendGrid Email Events` to check out your data collection.

![Keen Streams Manager - SendGrid Email Events]({{root_url}}/images/keen/sendgrid_stream.png)

**Step 2: Run some basic queries**

Open the “Explorer” tab and enter `count` as the “Analysis Type”, select `email_delivered` as your “Collection Name”, and press “Run Query”. You ran a query!

![Explorer to Run Query]({{root_url}}/images/keen/sendgrid_basic_count.png)

The breadth of analysis you can do is pretty vast. [Here's a link](https://keen.io/docs/compute/) to read up on the types of queries you can do with Keen. Some example query types are sums, averages, min or max, funnels, and select_unique.

For some extra-pretty graphs and custom analyses here are some tips:

- Adding an “Interval” (e.g. “daily”) will give you a line graph over time
- Include a “Group By” property (e.g. “campaign”)  to view results categorically
- Use “Filters” to refine the scope of your query
- Use the chart type drop down on the  upper right to choose how you view data: as an area graph, bar chart, column chart, table, [or more](https://keen.io/docs/visualize/common-chart-examples/)
- Download a CSV of the data you found by clicking on the “Download CSV” button

{% anchor h4 %}
Save Your Query & Make Your First Dashboard
{% endanchor h4 %}

Do you often run the same analysis on a regular basis, or want to be able to save a quick link to your work to revisit again sometime?

Once you’ve found the query you need, you can either copy the URL right from your browser’s address bar and share it with a colleague, or you can save the query and make yourself a dashboard with Keen.

Here’s how:

**Step 1: Let’s save your query.** Create your query in the Explorer and click “Run”. After running the query, press “Save”.  

![Save Your Query]({{root_url}}/images/keen/sendgrid_saved_query.png)

Saved queries are a super user-friendly way to revisit your favorite metrics. Rather than entering the same query parameters over and over again, queries can shared with your teammates. Notice that your saved query can be edited and cloned.

**Step 2: Add your graph to a dashboard.** Select “Create Dashboard”, name your dashboard, and add the query we saved to the first tile. Then click “Save”.

![Add Query to Dashboard]({{root_url}}/images/keen/sendgrid_create_dashboard.png)

Congratulations! You’ve created your first dashboard!

{% anchor h3 embedding-sendgrid-analytics-into-your-app %}
Embedding SendGrid Analytics Into Your App
{% endanchor h3 %}

With Keen, you will have access to all of your raw data for as long as you need it. An archive of all of your email data is created, which means you will have access to your historical data and can query for past user behavior.

Just like SendGrid, Keen IO is 100% powered by APIs. This means you can embed rich analytics anywhere you can write code.

Many customers find it useful to embed analytics into their products for their customers or customer success teams. Here’s a link to our [Native Analytics Guide](https://keen.io/guides/native-analytics/) that will give you step-by-step instructions on how to embed your SendGrid analytics into your product. Some customers also take advantage of Keen IO's [S3 Streaming](https://keen.io/docs/streams/amazon-s3/) capabilities to write a copy of all their data to AWS.

{% anchor h3 additional-resources %}
Additional Resources:
{% endanchor h3 %}

- Know someone who’d appreciate SendGrid Email Analytics? Share our [product briefing](https://keen.io/sendgrid-email-analytics/) with them
- SendGrid's complete <a href="https://sendgrid.com/docs/API_Reference/Webhooks/event.html">Event Webhooks Documentation</a> is a great resource on SendGrid email events. As you start to do more analysis, it's worth a read. You can even skip a lot of the sections, because we've done much of the work for you.
- Build a campaign and email marketing dashboard. Create and display your email metrics using one of our [dashboard templates](http://keen.github.io/dashboards/).
