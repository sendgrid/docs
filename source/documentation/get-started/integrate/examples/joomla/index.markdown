---
comments: false
date: 2011-03-26 17:34:49
layout: page
slug: joomla
title: Joomla
wordpress_id: 284
---

Joomla supports sending email over SMTP.  To have Joomla relay email through SendGrid go to _Site > Global Configuration_ and change:




  
  * **SMTP Auth** - Yes

  
  * **SMTP User** - sendgrid_username

  
  * **SMTP Pass** - sendgrid_password

  
  * **SMTP Host** - smtp.sendgrid.net



The following image shows these settings.
[![Joomla configured to use SendGrid](http://docs.sendgrid.com/wp-content/uploads/2011/03/joomlasmtp.gif)](http://docs.sendgrid.com/wp-content/uploads/2011/03/joomlasmtp.gif)
