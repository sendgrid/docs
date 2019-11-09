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

The SendGrid [Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/) lets you stream all [email events]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/) directly to Keen for real-time analysis and long term raw storage.

It only takes a couple of minutes to start streaming email event data from SendGrid to Keen and once you do you can start analyzing and visualizing your data in a whole bunch of different ways.

 ### 	Send your SendGrid Data to Keen

**Create a Keen and SendGrid account**

1. Create a <a href="https://keen.io/signup?utm_source=sendgrid_docs&utm_campaign=sendgrid">Keen account</a> (if you don't already have one)
1. Create a <a href="https://sendgrid.com/user/signup"> SendGrid account</a>


**Activate SendGrid's Event Notification App**

1. Log into your SendGrid account, click on **Settings**.
1. Select <a href="http://app.sendgrid.com/settings/mail_settings">Mail Settings</a>.
1. Then click **Event Notification**.

![SendGrid- Mail Settings]({{root_url}}/images/keen/sendgrid_mailsettings_eventnotification.png)

**Set the HTTP POST URL (example below) as the endpoint where SendGrid will stream all of your email data.**

```
https://api.keen.io/3.0/projects/YOUR_KEEN_PROJECT_ID/email/sendgrid/1.0?api_key=YOUR_KEEN_API_WRITE_KEY
```
You can snag a prebuilt URL in Keen’s UI or make your own.

In the Keen settings, select the events you want to post to Keen. To do this, under **Select Actions**, check **All**.

Going forward, as your emails make their way through SendGrid, all of the event information will be posted to Keen. A new Event Collection, for each type of email event, will be created within your Keen Project.

 ### 	Test Your Integration

Test that everything is working by clicking  on the **"Test Your Integration"** button in SendGrid’s “Event Notification” Settings. This will send sample email data from SendGrid into your Keen Project. In the Keen UI, click on **“Check for SendGrid Data”** button.

Your SendGrid email data should now be populated in Keen.

 ### 	SendGrid Email Analytics

Once you have data successfully flowing from SendGrid to Keen, a new application called SendGrid Email Analytics will appear on your projects page’s “Apps” tab.

To find it, visit your [Keen home screen](https://keen.io/home), select the project you’ve connected, in and click on the “Apps” tab. Find SendGrid and select “Launch App”. If you’ve successfully sent SendGrid data to Keen for storage, you will see the dashboard below.

![SendGrid- Email Analytics App Dashboard Home]({{root_url}}/images/keen/sendgrid_email_analytics_dashboard_empty.png)

Now you can start tracking the performance of your emails by creating segments! In each one you can see Delivered Rates, Unique Opens, Unique Clicks, Click Rates, Unsubscribe Rates, Bounces, and Number of Emails Marked as Spam.

For each of these metrics, you can download a CSV of the detailed event data. Just click on any cell, and you’ll see a menu with the option to download a CSV. Learn who did or did not open an email for example, and with this list of email addresses you can build a more targeted user campaign.


 ### 	Additional Resources:

- [Integration Guide that includes analysis and visualization info]({{root_url}}/for-developers/tracking-events/analytics-with-keen-io/)
- [Keen API Reference](https://keen.io/docs/api/)
- [Docs for Visualization](https://keen.io/docs/visualize/)
