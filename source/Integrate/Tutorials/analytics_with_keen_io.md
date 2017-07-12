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

- [Sending your SendGrid Data to Keen IO](#-sending-your-sendgrid-data-to-keen-io)
- [Analyzing and Visualizing your SendGrid Data](#-analyzing-your-sendgrid-data)
- [Doing Drilldowns & Reporting on Your Data](#-doing-drilldowns-and-reporting-on-your-data)
- [Embedding SendGrid Analytics Into Your App](#-embedding-sendgrid-analytics-into-your-app)

{% anchor h3 %}
Sending your SendGrid Data to Keen IO
{% endanchor h3 %}

{% anchor h4 %}
Step 1: Create a Keen IO account
{% endanchor h4 %}

* Create a <a href="https://keen.io/signup">Keen IO account</a> (if you don't already have one)

{% anchor h4 %}
Step 2: Activate SendGrid's Event Notification App
{% endanchor h4 %}

1. First click on [Mail Settings](http://app.sendgrid.com/settings/mail_settings) within Settings in the left column. Next, locate and activate the Event Notification Setting.
![SendGrid- Mail Settings]({{root_url}}/images/keen/sendgrid_mailsettings_eventnotification.png)
2. Enter the Keen HTTP POST URL, exampled below, as the endpoint where SendGrid will send event notifications. You can find your `KEEN_PROJECT_ID` and `KEEN_API_WRITE_KEY` listed in the [Access tab](https://keen.io/projects) of your Keen project.
    ```https://api.keen.io/3.0/projects/KEEN_PROJECT_ID/partners/sendgrid/versions/v3?api_key=KEEN_API_WRITE_KEY```
    If you're using Version 1 or 2 of the SendGrid Event API, use this as your Post Event URL instead:
    ```https://api.keen.io/3.0/projects/KEEN_PROJECT_ID/partners/sendgrid/versions/v2?api_key=KEEN_API_WRITE_KEY```
3. In the settings, select the events you want to post to Keen IO (why not all of them?). To do this, check "Select All" under the "Select Actions", or select just the ones you'd like to send to Keen IO.

That’s it! Now, as your emails make their way through SendGrid, all of the event information will be posted to Keen IO. A new Event Collection, aptly named "SendGrid Email Events", will be created within your project.


{% anchor h4 %}
Step 3: Send a test email!
{% endanchor h4 %}

To test this out, you can click on the “Test Your Integration” button in the Event Notification settings inside of SendGrid, which creates a set of sample email events from SendGrid into your Keen IO Project.

Your SendGrid email data should now be populated in Keen IO. To check, head over to your Keen IO project page. Check out the "Streams" tab, select "SendGrid Email Events" from the drop-down list, and then you can see your Last 10 Events streamed. This should show at least one of our delivered email events, or more if you went to your inbox and opened it!

{% anchor h3 %}
Analyzing Your SendGrid Data
{% endanchor h3 %}

{% anchor h4 %}
Step 1: Log into your Keen account, select your Project
{% endanchor h4 %}

Open the “Streams” tab, and select the `SendGrid Email Events` to check out your data collection.

![Keen Streams Manager - SendGrid Email Events]({{root_url}}/images/keen/sendgrid_stream.png)

{% anchor h4 %}
Step 2: Run some basic queries
{% endanchor h4 %}

Open the “Explorer” tab
Enter `count` as the “Analysis Type”, select `SendGrid Email Events` as your “Collection Name”, and press “Run Query”. You ran a query!
![Explorer to Run Query]({{root_url}}/images/keen/basic_count.png)

The type of analysis you can do is vast, here’s a [link to read up on what those are](https://keen.io/docs/compute/). Adding an “Interval” will give you a line graph over time, you can “Group By” properties to view results categorically, and you can add “Filters” to refine the scope of your query.


{% anchor h3 %}
Saving Your Query & Making Your First Dashboard
{% endanchor h3 %}

{% anchor h4 %}
Step 1: Save your first query
{% endanchor h4 %}

![Save Your Query]({{root_url}}/images/keen/save_query.png)

{% anchor h4 %}
Step 2:  Add your graph to a dashboard
{% endanchor h4 %}

Select “Create Dashboard”, name your dashboard, and add the query we saved to the first tile. Then click “Save”.

![Add Query to Dashboard]({{root_url}}/images/keen/create_dashboard.png)


Congratulations! You’ve created your first dashboard!

Now start digging into your data and creating more custom analyses & visualizations.

{% anchor h3 %}
Doing Drilldowns and Reporting on Your Data
{% endanchor h3 %}

{% anchor h4 %}
Select_Unique
{% endanchor h4 %}

`Select_Unique` allows you extract many properties from a single field and filter on a specific segment of users based on any number of fields such as campaigns, clicks, and companyID.

Return a list of unique property values for a single “Target Property”, among all events matching given criteria. You can [download the results as a .CSV](https://intercom.help/keen/explorer-ui-how-to-guides/how-do-i-download-keen-io-data-to-csv).

Some example uses for this analysis type:

- List all of the email addresses for people who clicked a certain URL
- List all of the countries where your email was opened
- List all of the email addresses for a specific company
- List all of the bounced emails from the last six months

![Download Select Unique Results to CSV]({{root_url}}/images/keen/download_select_unique.png)


{% anchor h4 %}
Extractions
{% endanchor h4 %}

The `Extraction` feature returns full-form event data with all property values. We strongly believe you should always have full access to all of your data, and we aim to make that as simple and painless as possible.

You can do all the things you can do with `Select_Unique`, but we will return you with more data.

{% anchor h4 %}
Funnels
{% endanchor h4 %}

Returns the number of unique actors that successfully (or unsuccessfully) make it through a series of steps. “Actors” could mean email addresses, campaigns, or any other identifiers that are meaningful to you.

Actors will fall off at each step, to varying degrees, so a funnel analysis reveals where a given flow loses the most users.

For example, a funnel could include these steps:

1. Successful email delivery
2. Opened email
3. Clicked URL
4. Lastly, you can grab a list of all of the actors in any step of your funnel, in this case, maybe you want a list of all the email addresses for people who opened an email and clicked a URL.

You can add as many filters as you’d like to make your funnel more targeted.
![Filters for your Funnel]({{root_url}}/images/keen/funnel_filters.png)

Here’s an example funnel:
![Three Step Email Funnel]({{root_url}}/images/keen/funnel.png)


{% anchor h4 %}
Embedding SendGrid Analytics Into Your App
{% endanchor h4 %}

Just like SendGrid, Keen IO is 100% powered by APIs. This means you can embed rich analytics anywhere you can write code. Here’s a link to our [Native Analytics Guide](https://keen.io/guides/native-analytics/) that will give you step-by-step instructions on how to embed your SendGrid analytics into your product.

*Hope you have some fun with data and happy hacking!*
