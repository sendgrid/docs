---
comments: false
date: 2011-08-19 10:27:09
layout: page
slug: drupal
title: Drupal
wordpress_id: 2627
---

To use SendGrid with [Drupal](http://drupal.org/), use the [STMP Authentication Support module](http://drupal.org/project/smtp). Install a version of this module that is compatible with your version of Drupal.

[![](http://docs.sendgrid.com/wp-content/uploads/2011/08/Screen-Shot-2011-08-19-at-10.05.18-AM.png)](http://docs.sendgrid.com/wp-content/uploads/2011/08/Screen-Shot-2011-08-19-at-10.05.18-AM.png)

Open your modules page, find the SMTP module, and configure it with the following settings:



	
  * **SMTP Server** - smtp.sendgrid.net

	
  * **SMTP Port** - 587

	
  * **Use Encrypted Protocal** - No. If you want encryption choose "Use SSL" and set SMTP Port to 465

	
  * **Username** - SendGrid Username

	
  * **Password** - SendGrid Password




[![](http://docs.sendgrid.com/wp-content/uploads/2011/08/Screen-Shot-2011-08-19-at-10.23.10-AM.png)](http://docs.sendgrid.com/wp-content/uploads/2011/08/Screen-Shot-2011-08-19-at-10.23.10-AM.png)[
](http://docs.sendgrid.com/wp-content/uploads/2011/08/Screen-Shot-2011-08-19-at-10.09.39-AM.png)
