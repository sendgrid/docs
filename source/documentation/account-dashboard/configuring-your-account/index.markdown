---
comments: false
date: 2012-02-14 10:56:15
layout: page
slug: configuring-your-account
title: Configuring Your Account
wordpress_id: 3653
---

Congratulations! You’ve signed up for SendGrid and are ready to configure your account. It’s important to note that these settings are available only in the Account Setup Wizard. If you need to change any settings and are already logged in, you can [check your status in the Wizard](http://sendgrid.com/account/wizardSignup). If you are not logged in, you will be redirected to the login page. Once you login successfully, you will be taken to the Account Setup Wizard.

At this stage, you will have confirmed the email address you entered for account administration and we will have provisioned your account. This document will walk you through the next three steps; Configure Account Settings, Configure Email Notifications, and Start Sending.


## Configure Account Settings


To configure the settings for your account, click on the button, then click the link to open the configuration dialog, as shown below:


[![](http://docs.sendgrid.com/wp-content/uploads/2012/02/acctsettings01-300x134.png)](http://docs.sendgrid.com/wp-content/uploads/2012/02/acctsettings01.png)


By default, the Open and Click Tracking functions are enabled. If you don’t wish to use either of these functions, just uncheck the box. If you don’t want to use a template (i.e., your transactional system already formats email) that option is already selected. Just click Update Settings, and you can move on to the next step.

If your transactional system just sends plain text, you can opt to apply a template using SendGrid. To get started creating a template, just select the **_Yes, I Will Compose It Below_** radio button. The template editor will automatically appear, as shown below:

In Designer mode, you can insert the URL for an image to be automatically inserted into each message and the background color of the email message. In HTML mode, you can enter your own HTML code to better control the appearance of your messages. HTML mode looks like this:

![](http://docs.sendgrid.com/wp-content/uploads/2012/02/acctsettings02-300x94.png)


_**NOTE: If you have not already created email body text for your account, then the HTML editor will just show our helpful boilerplate text.**_


Once you have made your changes, you can preview them, as shown in this screenshot from the simple Designer mode:

[![](http://docs.sendgrid.com/wp-content/uploads/2012/02/acctsettings04.png)](http://docs.sendgrid.com/wp-content/uploads/2012/02/acctsettings04.png)

Once you are satisfied with the changes, click on Update Settings and return to the Wizard.


## Configure Email Notifications


In order for transactional mail to be effective, you need to know how it’s doing. SendGrid offers a range of pre-configured notifications so you stay on top of your mail performance. You are already set up with the two default notifications; Service, delivered as needed, and Stats, delivered weekly. You can add new notifications to suit your needs. The following is a list of the available notifications. [For more details on what these alerts are, see the Alerts page in our documentation](http://docs.sendgrid.com/documentation/delivery-metrics/alerts/):



	
  * Stats Notifications

	
  * IP Blacklisted

	
  * Invalid DNS Setting (Whitelabel)

	
  * Reputation rate drops below

	
  * Daily delivery rate drops below

	
  * Outbound mail queue exceeds

	
  * IP filter status in Hotmail SNDS becomes

	
  * Service Notifications


Each of these notification types can be set to send as one of the following frequency types:

	
  * Hourly

	
  * Daily

	
  * Weekly

	
  * Monthly

	
  * As Needed (sent when specified event occurs)




## Start Sending


Now that you’ve got the basics configured using the Wizard, it’s time to start sending out email. In the final section of the Wizard you can do one of two things. You can integrate SendGrid with your application or you can configure SendGrid to start sending out newsletters.

You can integrate SendGrid with your apps >> **_[Send Email from your Application](http://docs.sendgrid.com/documentation/get-started/integrate/)_**

You can use SendGrid to send your newsletters >> **_[My Newsletters](http://sendgrid.com/newsletter/dashboard)_**
