---
layout: page
weight: 0
title: phpBB
navigation:
  show: true
---

phpBB supports sending email over SMTP. To have phpBB relay email through SendGrid go to *Client Communication \> E-mail settings* in the admin panel and change:

-   **Use SMTP server for e-mail** - Yes
-   **SMTP server address:** - smtp.sendgrid.net
-   **SMTP server port** - 587
-   **Authentication method for SMTP** - PLAIN
-   **SMTP username** - sendgrid_username
-   **SMTP password** - sendgrid_password

The following image shows these settings.

![Configure SendGrid with phpBB]({{root_url}}/images/phpbb.gif "Configure SendGrid with phpBB")
