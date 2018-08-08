---
layout: page
weight: 0
title: Categories
navigation:
  show: false
seo:
  title: Categories
  override: true
  description: Paying attention to your deliverability metrics can help optimize your delivery rate and reduce the risk of being seen as a spammer.
---

Categories help organize your email analytics by enabling you to tag emails you send by topics you define.

Just as you can view the statistics on all your activity under the '[Statistics]({{root_url}}/user-interface/analytics-and-reporting/stats-overview)' tab, you can go a step further and view the [statistics broken down to a particular category]({{root_url}}/user-interface/analytics-and-reporting/categories/).

The events that can be associated with category include:

-   Emails sent
-   Clicks
-   Opens
-   Bounces
-   Spam Reports
-   Unsubscribes

The actual statistics included vary depending upon the set of enabled apps. Emails sent, bounces and spam reports will always get tracked. [Unsubscribes]({{root_url}}/user-interface/sending-email/subscription-tracking/), [Clicks]({{root_url}}/user-interface/analytics-and-reporting/click-tracking/), and Opens require that the associated Setting is enabled. Check out [Settings](https://app.sendgrid.com/settings) to see which apps you have enabled.

In order to add the X-SMTPAPI categories header, please look at our [SMTP API Categories]({{root_url}}/for-developers/sending-email/categories/)) documentation. You can also
get a [full category list]({{root_url}}/for-developers/sending-email/categories#get) or get [category specific statistics](https://sendgrid.com/docs/API_Reference/Web_API_v3/Stats/categories.html) from the SendGrid API.
