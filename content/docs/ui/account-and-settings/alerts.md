---
seo:
  title: Alert Settings
  description: Manage your SendGrid alerts
  keywords: sendgrid alerts, account alerts, deliverability alerts
title: Alerts
weight: 0
group: account-management
layout: page
navigation:
  show: true
---

You can set up alerts to be sent to a specific email address on a recurring basis, whether for informational purposes or when specific account actions occur.

For most alerts, you can choose to have the alert sent to you as needed, hourly, daily, weekly, or monthly. The information contained in your alert will be for the last period of the alert. For example, if you choose weekly for the statistics alert, you will receive the statistics for the last week.

You can also change which email address these alerts are sent to.

## 	Add alert
 	
To add a new alert, click the large “+” or the “Add Alert” button. When the window appears, select the type of alert you would like to receive. Some alerts have options for being sent when a certain threshold is met or when a time period is met.

## 	Alerts
 	
 ### 	Usage limit
 	
<call-out>

Any accounts or subusers without an email limit alert on May 5th, 2015 or that were created after May 5th, 2015 will find this alert set up with a threshold of 90% on their account automatically.

</call-out>

You will receive an alert when you have used 90% of your current package’s number of emails. Subusers with recurring or nonrecurring email limits will have this alert set up automatically. Subusers who have unlimited emails will not have this alert set up automatically.

 ### 	statistics notifications
 	
An email containing your statistics sent at the frequency you define. For example:

Weekly statistics will be sent once week and show the trailing week.
Daily statistics will be sent every day, but with trailing 7 day statistics included.

For more in depth statistics, we suggest using the [Event Webhook]({{root_url}}/for-developers/tracking-events/event/).
