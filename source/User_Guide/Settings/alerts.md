---
seo:
  title: Partner Settings
  description: Manage your SendGrid partner settings
  keywords: sendgrid partner settings, partner settings, 3rd party settings
title: Partners
weight: 0
layout: page
navigation:
  show: true
---

{% info %}
This page refers to our beta UI functionality. To find these features, please click the “Beta” button at the top of the SendGrid Customer Portal.
{% endinfo %}


You can setup alerts to be sent to a specific email address on a recurring basis, whether for informational purposes or when specific account actions occur.

For most alerts, you can choose to have the alert sent to you As Needed, Hourly, Daily, Weekly, or Monthly. The information contained in your alert will be for the last period of the alert. For example, if you choose weekly for the Stats alert, you will receive the stats for the last week.

You can also change which email address to which these alerts will be sent.

{% anchor h2 %}
Add Alert
{% endanchor %}

To add a new alert, click the large “+” or the “Add Alert” button. When the window appears, select the type of alert you would like to receive. Some alert have options for being sent when a certain threshold is met or when a time period is met.

{% anchor h2 %}
Alerts 
{% endanchor %}

{% anchor h3 %}
Usage limit
{% endanchor %}

{% info %}
Any accounts or subusers without a credit limit alert on May 5th, 2015 or that were created after May 5th, 2015 will find this alert set up with a threshold of 90% on their account automatically.
{% endinfo %}

You will receive an alert when you have used 90% of your current package’s number of credits. Subusers with recurring or nonrecurring credit limits will have this alert set up automatically. Subusers who have unlimited credits will not have this alert set up automatically.

{% anchor h3 %}
Stats Notifications
{% endanchor %}

An email containing your stats sent at the frequency you define. For example:

Weekly stats will be sent once week and show the trailing week.
Daily Stats will be sent every day, but with trailing 7 day stats included.  

For more in depth statistics, we suggest using the [Event Webhook]({root_url}/API_Reference/Webhooks/event.html).