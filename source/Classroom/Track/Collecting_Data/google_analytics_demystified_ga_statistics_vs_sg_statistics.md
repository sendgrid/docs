---
seo:
  title: Google Analytics Demystified&#58; GA Statistics vs SG Statistics
  description: Google Analytics Demystified&#58; GA Statistics vs SG Statistics
  keywords: statistics, page, tracking, URL, google, analytics, GA, stats, events, view, UTM
title: Google Analytics Demystified&#58; GA Statistics vs SG Statistics
weight: 0
layout: page
zendesk_id: 200181468
navigation:
  show: true
---

SendGrid's [Google Analytics Tracking ](https://app.sendgrid.com/settings/tracking)appends links to integrate with Google Analytics.

[Google Analytics](http://support.google.com/analytics/?hl=en) is a great tool for tracking how people get to your site, and what they do there.

This article describes differences in the results and terminology of both. In general what they track & what terms they use are different than what we do, so we thought it would be helpful to provide the following equivalencies.

_For general guidance on how our Google Analytics app works, please refer to our [documentation](http://sendgrid.com/docs/Apps/google_analytics.html)._

Google Analytics has Clicks, Visits, Visitors, Pageviews, and Unique Pageviews. SendGrid has Clicks & Opens, as well as all of our [Delivery Metrics](http://sendgrid.com/docs/Delivery_Metrics/index.html). 
The key here is that Google Analytics Clicks **are in no way related**  to SendGrid Clicks.

Google Analytics **Visits** should generally correlate to Sendgrid **Unique Clicks**. However:

- If you link to a non-GA tracked site, there will be more Clicks than Visits.
- If a user clicks a link in an email multiple times within the 30 minute Analytics "session" window, there will be a Click for every time they clicked, but only one Unique Click and one Visit.
- If have links to multiple GA-tracked sites in a single email, you'll have a Visit logged in each, but only one Unique Click. Unique Clicks are tracked per message, not per link in the message.
- If a recipient forwards a message, or revisits your site after 30 minutes, you'll have more Visits than Unique Clicks, though there will be a Click for each. Currently, we cannot differentiate when a message has been forwarded, so there's only one Unique Click.

A few scenarios:

- You link to your Facebook profile in your email. A recipient clicks the link, which will result in 1 SG **Click** , but no GA **Visits**.
- A recipient clicks a link in your message, forwards it to their friend who also clicks a link, or they re-open it in a new browser/device. This will log 1 **Unique Click** , 2 **Clicks** , 2 **Visitors** , and 2 **Visits**.
- A recipient clicks a link in your message, comes back an hour later, and clicks the same or a different link in the message to get back to your site. This will log 1 **Unique Click** , 2 **Clicks** , 1 **Visitor** , and 2 **Visits**.
