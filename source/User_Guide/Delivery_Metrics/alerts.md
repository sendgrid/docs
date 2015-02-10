---
layout: page
weight: 0
title: Alerts
navigation:
  show: true
---

SendGrid can send an email alert to you at a frequency you desire for several types of events.

You can access this feature on the [Account Overview](https://sendgrid.com/account/overview) page when you login. Select the [Alert Settings](https://sendgrid.com/alerts) link to begin and then [Add New Alert](https://sendgrid.com/alerts/add) link to add a new Alert.

Following are the various Alert Types:

{% anchor h2 %}
Stats Notifications 
{% endanchor %}

An email containing your stats. If sent weekly, stats shown will be for the period of one week.

* * * * *

{% anchor h2 %}
IP Blacklisted 
{% endanchor %}

An email will be sent when your sent IP is being blacklisted.

* * * * *

{% anchor h2 %}
Invalid DNS Setting (Whitelabel) 
{% endanchor %}

This will check your Whitelabel wizard setting to see if the mail domain is matched with the IP and vice versa.

* * * * *

{% anchor h2 %}
Reputation rate drops below X% 
{% endanchor %}

You can enter a custom percentage value for your reputation rate. For example, you can get an alert if your reputation rate drops below 98% by entering the value 98. The alert frequency will alert you again if your current reputation rate has not improved. Your daily reputation rate is calculated as: (sum of bounces / sum of requests) / sum of requests.

* * * * *

{% anchor h2 %}
Daily delivery rate drops below X% 
{% endanchor %}

An email is sent when your rate of delivery drops below the specified percentage.

See more information about [Daily delivery rates](https://support.sendgrid.com/hc/en-us/articles/203805163?flash_digest=97d89bf8df6b346d5db106a66931de6044788f99)

* * * * *

{% anchor h2 %}
Outbound mail queue exceeds X 
{% endanchor %}

This is the number of emails that are pending to be sent. If the queue exceeds a certain amount of emails, you can get notified by setting up this alert option.

* * * * *

{% anchor h2 %}
IP filter status in Hotmail SNDS becomes Yellow or Red 
{% endanchor %}

This alert occurs when [Hotmail Smart Network Data Services (SNDS)](https://postmaster.live.com/snds/) changes the status of your IP. We will record this change and let you know when it has changed to Yellow or Red. You have to create multiple status alerts (yellow/red) to be notified of all status changes.

A yellow alert means that between 10% and 90% of the mail from an IP looks like spam to SNDS. A red alert means more than 90% of the email looks like spam.

* * * * *

{% anchor h2 %}
Usage Limit 
{% endanchor %}

Receive an alert when you have used the specified percentage of your email credits for the current billing period.

* * * * *

{% anchor h2 %}
Service Notifications 
{% endanchor %}

We may occasionally send out notifications regarding SendGrid service. These are always sent "as needed" and no scheduling is required.

* * * * *

You can then choose to have the alerts sent hourly, daily, weekly or monthly to the specified email address. The **"As Needed"** setting will send no more than once an hour.
