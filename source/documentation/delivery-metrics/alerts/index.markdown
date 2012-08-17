---
comments: false
date: 2011-06-29 11:05:10
layout: page
slug: alerts
title: Alerts
wordpress_id: 1606
following_users:
- support_docs
---

_SendGrid can send an email alert to you at a frequency you desire for several types of events._


You can access this feature on the [Dashboard](http://sendgrid.com/account/overview) tab when you login. Select the [Add New Alert](http://sendgrid.com/alerts/add) link to begin.

Following are the various Alert Types:

**IP Blacklisted**



	
  * An email will be sent when your sent IP is being blacklisted.


**Invalid DNS Setting (Whitelabel)**



	
  * This will check your Whitelabel wizard setting to see if the mail domain is matched with the IP and vice versa.


**Reputation rate drops below X%**



	
  * You can enter a custom percentage value for your reputation rate. For example, you can get an alert if your reputation rate drops below 98% by entering the value 98. The alert frequency will alert you again if your current reputation rate has not improved. Your daily reputation rate is calculated as: (sum of bounces / sum of requests) / sum of requests.


**Daily delivery rate drops below X%**



	
  * An email is sent when your rate of delivery drops below the specified percentage.


**Outbound mail queue exceeds X**



	
  * This is the number of emails that are pending to be sent. If the queue exceeds a certain amount of emails, you can get notified by setting up this alert option.


**IP filter status in Hotmail SDNS becomes Yellow or Red**



	
  * This alert occurs when Hotmail Smart Network Data Services (SNDS) changes the status of your IP. We will record this change and let you know when it has changed to Yellow or Red. You have to create multiple status alerts (yellow/red) with us if you want to be notified of all status changes


You can then choose to have the alerts sent hourly, daily, weekly or monthly to the specified email address. The **"As Needed"** setting will send no more than once an hour.
