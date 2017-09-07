---
layout: page
weight: 90
title: Email Event Data with Keen IO
navigation:
  show: true
seo:
  title:  Email Event Data with Keen IO
---

The SendGrid [Event Webhook](https://sendgrid.com/docs/API_Reference/Webhooks/event.html) lets you stream all of the events that happen within an email directly to Keen IO for real-time analysis and long term raw storage. These events are things like Delivered, Opened, Clicked, Marked as Spam… and [lots more](https://sendgrid.com/docs/API_Reference/Webhooks/event.html)!

It only takes a couple minutes to start streaming email event data from SendGrid to Keen IO and once you do you can start analyzing and visualizing your data in a whole bunch of different ways.

{% anchor h3 %}
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

{% anchor h3 %}
Test Your Integration
{% endanchor h3 %}

Test that everything is working by clicking  on the **"Test Your Integration"** button in SendGrid’s “Event Notification” Settings. This will send sample email data from SendGrid into your Keen IO Project. In the Keen UI, click on **“Check for SendGrid Data”** button.

Using Keen IO and SendGrid’s Email Analytics app, you can quickly and easily view email reports, run custom analysis, and permanently store all of your email event information.

{% anchor h3 %}
Introducing - SendGrid Email Analytics
{% endanchor h3 %}

Once you have data successfully flowing from SendGrid to Keen, a new application called SendGrid Email Analytics will appear on your projects page’s “Apps” tab.

To find it, visit your [Keen home screen](https://keen.io/home), select the project you’ve connected, in and click on the “Apps” tab. Select “SendGrid”. If you’ve successfully completed Step 1 and sent SendGrid data to Keen for storage, you will see the dashboard below.

![SendGrid- Email Analytics App Dashboard Home]({{root_url}}/images/keen/sendgrid_email_analytics_dashboard.png)

A report for “All of your Mail” will be created automatically. You can see Delivered Rates, Unique Opens, Unique Clicks, Click Rates, Unsubscribe Rates, Bounces, and Number of Emails Marked as Spam.

For each of these metrics, you can download a CSV of the detailed event data. Just click on any cell, and you’ll see a menu with the option to download a CSV. Learn who did or did not open an email for example, and with this list of email addresses you can build a more targeted user campaign.


{% anchor h4 %}
Additional Resources:
{% endanchor h4 %}

- [Integration Guide that includes analysis and visualization info](https://sendgrid.com/docs/Integrate/Tutorials/analytics_with_keen_io.html)
- [Keen IO API Reference](https://keen.io/docs/api/)
- [Docs for Visualization](https://keen.io/docs/visualize/)
