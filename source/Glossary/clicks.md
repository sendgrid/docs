---
layout: page
weight: 0
title: Clicks and Unique Clicks
navigation:
  show: false
seo:
  title: Clicks and Unique Clicks
  override: true
  description: Track the links your customers click from your emails with SendGrid.
---

{% info %}
In order to track clicks, you must have the [Click Tracking App]({{root_url}}/User_Guide/Settings/tracking.html) enabled.
{% endinfo %}

SendGrid can replace the links in your email templates with a custom link that when clicked, will redirect your customers to the original link from your template. When the user clicks, SendGrid will record the click event. We track 1000 link clicks per email.

In [Statistics]({{root_url}}/User_Guide/Delivery_Metrics/email_activity.html), “clicks percentage" is the total number of times your users have clicked on the various links within your emails, divided by the total number of Delivered messages. The “Unique clicks” percentage is the number of unique individuals that have clicked the links in your emails, divided by the total number of delivered messages.

Users clicking a SendGrid Unsubscribe link will not count as a Click. However, if you use a third-party unsubscribe link, it will be tracked as a click.

{% info %}
SendGrid will store tracking data for unique click events for up to 7 days.
{% endinfo %}
