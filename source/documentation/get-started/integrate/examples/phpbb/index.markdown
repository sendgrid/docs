---
comments: false
date: 2011-03-31 21:50:02
layout: page
slug: phpbb
title: phpBB
wordpress_id: 296
---

phpBB supports sending email over SMTP.  To have phpBB relay email through SendGrid go to _Client Communication > E-mail settings_ in the admin panel and change:




  
  * **Use SMTP server for e-mail** - Yes

  
  * **SMTP server address:** - smtp.sendgrid.net

  
  * **SMTP server port** - 587

  
  * **Authentication method for SMTP** - PLAIN

  
  * **SMTP username** - sendgrid_username

  
  * **SMTP password** - sendgrid_password





> **NOTE >> **SendGrid requires the use of PHP 5.3 or higher.



The following image shows these settings.  
  

[![Configure SendGrid with phpBB](http://docs.sendgrid.com/wp-content/uploads/2011/03/phpbbsmtp.gif)](http://docs.sendgrid.com/wp-content/uploads/2011/03/phpbbsmtp.gif)
