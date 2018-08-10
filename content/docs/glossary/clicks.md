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

SendGrid can replace the links in your email templates with a custom link that when clicked, will redirect your customers to the original link from your template. When the user clicks, SendGrid will record the click event. SendGrid can track 1000 link clicks per email.

In [Stats]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/), The “Clicks” percentage is the total number of times your users have clicked on the various links within your emails, divided by the total number of Delivered messages. The “Unique clicks” percentage is the number of unique individuals that have clicked the links in your emails, divided by the total number of Delivered messages. This statistic requires that the Click Tracking feature be enabled under your Tracking Settings.

Users clicking a SendGrid Unsubscribe link will not count as a Click. However, if you use a third-party unsubscribe link, it will be tracked as a Click.

<call-out>

SendGrid will store tracking data for unique click events for up to 7 days.

</call-out>
