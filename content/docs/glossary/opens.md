---
layout: page
weight: 0
title: Opens & Unique Opens
navigation:
  show: false
seo:
  title: Opens & Unique Opens
  override: true
  description: Track how many times your emails are opened with SendGrid
---
SendGrid inserts a small, transparent image into all emails that will be tracked. When a customer reads an email, their client application loads the tracking image which registers the open event with SendGrid.

Not all email clients load images by default. Microsoft’s Outlook, Apple’s Mail.app, Mozilla’s Thunderbird, and Google’s Gmail do not load images. As such, there may be many occasions where recipients will have received a message, opened it, and it will never be counted as opened because there is no way to track the event.

In [Statistics]({{root_url}}/knowledge-center/analytics-and-reporting/stats-overview/) the "opens percentage" is the total number of times your users opened your emails, divided by the total number of Delivered messages.

The “Unique opens” percentage is the number of unique individuals that have opened your emails, divided by the total number of Delivered messages.

<call-out>

SendGrid will store tracking data for unique open events for up to 7 days.

</call-out>
