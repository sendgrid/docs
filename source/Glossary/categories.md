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

Just as you can view the statistics on all your activity under the '[Statistics]({{root_url}}/User_Guide/Statistics/index.html)' tab, you can go a step further and view the [statistics broken down to a particular category]({{root_url}}/User_Guide/Statistics/categories.html).

The events that can be associated with category include:

-   Emails sent
-   Clicks
-   Opens
-   Bounces
-   Spam Reports
-   Unsubscribes

The actual statistics included vary depending upon the set of enabled [Apps]({{root_url}}/User_Guide/Settings/). Emails sent, bounces and spam reports will always get tracked. [Unsubscribes]({{root_url}}/User_Guide/Settings/tracking.html), [Clicks]({{root_url}}/User_Guide/Settings/tracking.html), and [Opens]({{root_url}}/User_Guide/Settings/tracking.html) require that the associated Setting is enabled. Check out [Settings]({{site.app_url}}/settings) to see which apps you have enabled.

In order to add the X-SMTPAPI categories header, please look at our [SMTP API Categories]({{root_url}}/API_Reference/SMTP_API/categories.html) documentation. You can also
get a [full category list]({{root_url}}/API_Reference/Web_API_v3/Categories/categories.html#-GET) or get [category specific statistics]({{root_url}}/API_Reference/Web_API_v3/Stats/categories.html) from the SendGrid API.
