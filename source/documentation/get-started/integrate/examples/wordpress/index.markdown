---
comments: false
date: 2011-03-26 16:54:55
layout: page
slug: wordpress
title: Wordpress
wordpress_id: 272
---

To send email through SendGrid using Wordpress we recommend [WP Mail SMTP](http://wordpress.org/extend/plugins/wp-mail-smtp/).  To install do it through the Plugins section in your Wordpress admin panel or follow [these instructions](http://wordpress.org/extend/plugins/wp-mail-smtp/installation/).  Once installed you need to change at least the following options in _Options > Email panel_:




  
  * **Mailer** - Send all WordPress emails via SMTP.

  
  * **SMTP Host** - smtp.sendgrid.net

  
  * **SMTP Port** - 587

  
  * **Encryption** - No encryption.  If you want encryption choose "Use SSL encryption" and use port 465

  
  * **Authentication** - Yes: Use SMTP authentication.

  
  * **Username** - SendGrid Username

  
  * **Password** - SendGrid Password



The following image shows these settings.
[![Configure SendGrid with Wordpress](http://docs.sendgrid.com/wp-content/uploads/2011/03/wordpresssmtp.gif)](http://docs.sendgrid.com/wp-content/uploads/2011/03/wordpresssmtp.gif)

