---
layout: page
weight: 0
seo:
  title: Alert Settings
title: Alert Settings
navigation:
  show: true
---

![]({{root_url}}/images/alert_settings_1.png "Alert Settings")

You can setup alerts to be sent to a specific email address on a recurring basis, whether for informational purposes or when specific account actions occur.

For most alerts, you can choose to have the alert sent to you As Needed, Hourly, Daily, Weekly, or Monthly. The information contained in your alert will be for the last period of the alert. For example, if you choose weekly for the Stats alert, you will receive the stats for the last week.

You can also change which email address to which these alerts will be sent.

{% anchor h2 %}
Alert Options
{% endanchor %}

**Stats Notification**
: An email notification of your SendGrid stats.
: This alert can only be sent daily, weekly, or monthly<br />

**IP Blacklisted**
: You will receive a notification if one of your IP addresses is put on one of the blacklists SendGrid monitors.
: This alert can only be sent daily, weekly, monthly, or as needed<br />

**Invalid DNS Setting (Whitelabel)**
: If one or more of your whitelabel settings is not properly set up, you will be notified.<br />

**Reputation Rate Drops Below**
: If your sender reputation rate drops below the threshold you set, you will be notified.
: Percentage should be a whole number. Example 10 for 10%<br />

**Daily Delivery Rate Drops Below
: If your delivery rate drops below the threshold you set, you will be notified.
: Percentage should be a whole number. Example 10 for 10%<br />

**Outbound Mail Queue Exceeds**
: If your outbound mail queue exceeds the threshold you set, you will be notified.<br />

**IP Filter status in Hotmail SNDS becomes**
: Will alert you when your SNDS IP Health becomes red or yellow
: This alert can only be sent daily, weekly, monthly, or as needed<br />

**Service Notifications**
: A notification will be sent to the email supplied for all Service Notifications.<br />

**Usage Limit**
: If your usage limit or number of emails sent by your account reaches the threshold percent of available email credits on your account, you will be notified.
: Percentage should be a whole number. Example 90 for 90%. This indicates the percentage used, not the percentage remaining.<br />

{% anchor h2 %}
Add A New Alert
{% endanchor %}

![]({{root_url}}/images/alert_settings_1.png "Add new Alert")

1. Click "Add New Alert"
2. Choose the alert you would like to send
3. Fill in the threshold if there is one
4. Choose the frequency you would like these alerts
5. Enter the email address where you'd like to receive these alerts
6. Click "Add New Alert" button after the form
