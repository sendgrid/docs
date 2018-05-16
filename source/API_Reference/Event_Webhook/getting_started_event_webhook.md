---
seo:
  title: Getting Started
  description: Use RequestBin to get started or to troubleshoot your Event Webhook.
  keywords: webhook, RequestBin, troubleshoot, event webhook
title: Getting Started
weight: 100
layout: page
navigation:
  show: true
---

- [Getting started](#-Getting-started)
- [Next steps](#-Next-steps)
    - [Data storage](#-Data-storage)
    - [Integrating](#-Integrating)

SendGrid's Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email. You can use this data to remove unsubscribes, react to spam reports, [determine unengaged recipients]({{site.blog_url}}/infer-engagement-with-the-event-api/), identify bounced email addresses, or create advanced analytics of your email program. With Unique Arguments and Category parameters, you can insert dynamic data that will help build a sharp, clear image of your mailings.

You should set up the Event Webhook if you want to keep track of more event data than we store for you. Due to the sheer volume of email we send, we can only store so much information. Your [Email Activity Feed]({{root_url}}/User_Guide/email_activity_feed.html) can hold up to 30 days worth of events. After that time passes, the email event data is gone.

{% anchor h2 %}
Getting started
{% endanchor %}

*To get started with the Event Webhook:*

1. Go to [RequestBin](https://requestb.in/). Select **Private (only viewable from this browser)**.
1. Select that you're not a robot, and then click **Create a RequestBin**.
1. In the new RequestBin, copy the Bin URL.
1. In a new window, open [Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) in the [SendGrid UI](https://app.sendgrid.com).
1. Turn on **Event Notification**.
1. In the **HTTP POST URL field**, paste the Bin URL that you copied in step 2.
1. Select the Event notifications you would like to test.
1. Click the checkmark in the top corner to save these updates into your settings.
1. Click **Test Your Integration**.
    <br> This returns an HTTP POST containing a JSON array of your selected events in one request after a very short delay. Our servers send these POSTs to the URL you defined in the Event Notification app options.
1. Go back to your RequestBin and reload the page.
     <br> This loads the JSON array of your selected events that you set in the last step.

{% info %}
You can also update your Event Webhook mail settings using the [PATCH /user/webhooks/event/settings](https://sendgrid.api-docs.io/v3.0/webhooks/update-event-notification-settings) API method, and you can test the webhook integration using the [POST /user/webhooks/event/test](https://sendgrid.api-docs.io/v3.0/webhooks/test-event-notification-settings) API method.
{% endinfo %}

{% anchor h2 %}
Next steps
{% endanchor %}

Now that you understand what Event data looks like and the basics of the webhook, it's time to evaluate your own needs for the types of events you want to store, what kind of data storage that requires, and then switch your integration from the RequestBin test to a more permanent integration.

{% anchor h3 %}
Data Storage
{% endanchor %}

Events post every 30 seconds or when the batch size reaches 768 kilobytes - whichever occurs first. This is per server, so if you send a high volume of emails, the webhook URL may receive tens or even hundreds of posts per second. Because of this, storage should be a significant consideration of the type of integration you set up.

Storage integrations are infinitely flexible, but here are some popular options:

- Locally on your servers.
- SendGrid's [open source Event Kit](https://github.com/sendgrid/eventkit-rails) stores the data on a Heroku instance.
- SendGrid's partner, Keen.io provides a platform to analyze, visualize, and store SendGrid Event data. For more information about getting started with Keen IO, see the [Keen.io Getting Started page](https://sendgrid.com/docs/Integrate/Tutorials/analytics_with_keen_io.html).
- You could also use [Snowplow](https://github.com/snowplow/snowplow/wiki/SendGrid-webhook-setup), a web open source platform that supports SendGrid and stores the data on Amazon Redshift.
- Several open source web libraries support SendGrid's Event Webhook. For a full list of these libraries, see the [Webhook libraries section]({{root_url}}/Integrate/libraries.html#-Webhook-Libraries) of our API Libraries list.

{% warning %}
If your email traffic generates a lot of events, the incoming data can quickly overload a web server if not configured correctly. You can load test your endpoints with loader.io for free.
{% endwarning %}

{% anchor h3 %}
Integrating
{% endanchor %}

Once you choose a storage option, follow steps 3 through 8 in [Getting started](#-Getting-started]) to update your [Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) in the [SendGrid UI](https://app.sendgrid.com). Update the **HTTP POST URL field** to your URL, and make sure you've selected the events that you want to receive. The Event Webhook does not follow redirects. If you want to receive encrypted posts, your callback URL needs to support TLS 1.2.

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Event Webhook reference]({{root_url}}/API_Reference/Event_Webhook/event.html)
- [Troubleshooting the Event Webhook]({{root_url}}/API_Reference/Event_Webhook/troubleshooting.html)
- [An Event Webhook case study](https://sendgrid.com/blog/leveraging-sendgrids-event-api/)
- [Webhook web libraries]({{root_url}}/Integrate/libraries.html#-Webhook-Libraries)
- [Getting started with Keen.io]({{root_url}}/Integrate/Tutorials/analytics_with_keen_io.html)
