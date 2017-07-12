---
layout: page
weight: 90
title: Email Event Data with Keen.io
navigation:
  show: true
seo:
  title:  Email Event Data with Keen.io
---

The SendGrid [Event Webhook](https://sendgrid.com/docs/API_Reference/Webhooks/event.html) lets you stream all of the events that happen within an email directly to Keen IO for real-time analysis and long term raw storage. These events are things like Delivered, Opened, Clicked, Marked as Spam… and [lots more](https://sendgrid.com/docs/API_Reference/Webhooks/event.html)!

It only takes a couple minutes to start streaming email event data from SendGrid to Keen IO and once you do you can start analyzing and visualizing your data in a whole bunch of different ways.

{% anchor h3 %}
Sending your SendGrid Data to Keen IO
{% endanchor h3 %}

{% anchor h4 %}
Step 1: Sign up for Keen IO
{% endanchor h4 %}

Create a <a href="https://keen.io/signup">Keen IO account</a> (if you don't already have one)

{% anchor h4 %}
Step 2: Activate SendGrid's Event Notification App
{% endanchor h4 %}

1. First click on <a href="http://app.sendgrid.com/settings/mail_settings">Mail Settings</a> within Settings in the left column. 
2. Next, locate and activate the Event Notification Setting.
   ![SendGrid- Mail Settings]({{root_url}}/images/keen/sendgrid_mailsettings_eventnotification.png)
3. Enter the Keen HTTP POST URL, exampled below, as the endpoint where SendGrid will send event notifications. You can find your `KEEN_PROJECT_ID` and `KEEN_API_WRITE_KEY` listed in the [Access tab](https://keen.io/projects) of your Keen project.
    ```https://api.keen.io/3.0/projects/KEEN_PROJECT_ID/partners/sendgrid/versions/v3?api_key=KEEN_API_WRITE_KEY```
    If you're using Version 1 or 2 of the SendGrid Event API, use this as your Post Event URL instead:
    ```https://api.keen.io/3.0/projects/KEEN_PROJECT_ID/partners/sendgrid/versions/v2?api_key=KEEN_API_WRITE_KEY```
4. In the settings, select the events you want to post to Keen IO (why not all of them?). To do this, check "Select All" under the "Select Actions", or select just the ones you'd like to send to Keen IO.

That’s it! Now, as your emails make their way through SendGrid, all of the event information will be posted to Keen IO. A new Event Collection, aptly named "SendGrid Email Events", will be created within your project.

{% anchor h4 %}
Step 3: Send a test email!
{% endanchor h4 %}

To test this out, you can click on the “Test Your Integration” button in the Event Notification settings inside of SendGrid, which should create a set of sample email events from SendGrid into your Keen IO Project.

Your SendGrid email data should now be populated in Keen IO. To check, head over to your Keen IO project page. Check out the "Streams" tab, select "SendGrid Email Events" from the drop-down list, and then you can see your Last 10 Events streamed. This should show at least one of our delivered email events, or more if you went to your inbox and opened it!

Now you can open the “Streams” tab in your Keen Project, and select the `SendGrid Email Events` to check out your data collection.

![Keen Streams Manager - SendGrid Email Events]({{root_url}}/images/keen/sendgrid_stream.png)

Ok, you're done with this part but now what?

{% anchor h4 %}
Additional Resources:
{% endanchor h4 %}

- [Integration guide that includes analysis and visualization info](https://sendgrid.com/Integrate/Tutorials/analytics_with_keen_io.html)
- [Keen IO API reference](https://keen.io/docs/api/)
- [Docs for visualization](https://keen.io/docs/visualize/)
