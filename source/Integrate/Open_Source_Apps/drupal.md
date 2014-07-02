---
layout: page
weight: 0
title: Drupal
navigation:
  show: true
---
To send emails from Drupal using SendGrid, you may use the SMTP Authentication Support module or the Swift Mailer module depending on your needs. 
{% anchor h2 %}
Using the SMTP Authentication Support Module 
{% endanchor %}

To use SendGrid with [Drupal](http://drupal.org/ "Drupal"), use the [SMTP Authentication Support module](http://drupal.org/project/smtp "SMTP Authentication Support"). Install a version of this module that is compatible with your version of Drupal.

![]({{root_url}}/images/drupal_1.png "SMTP Module")

Open your modules page, find the SMTP module, and configure it with the following settings:

-   **SMTP Server** - smtp.sendgrid.net
-   **SMTP Port** - 587
-   **Use Encrypted Protocal** - No. If you want encryption choose "Use SSL" and set SMTP Port to 465
-   **Username** - SendGrid Username
-   **Password** - SendGrid Password

![]({{root_url}}/images/drupal_2.png "SMTP Module Configuration")


{% anchor h2 %}
Using the Swift Mailer Module 
{% endanchor %}

To use the [Swift Mailer module](http://drupal.org/project/swiftmailer "Swift Mailer Module"), install a version of this module that is compatible with your version of Drupal.

Configuration for this module is largely the same as above.

![]({{root_url}}/images/drupal_3.png "SMTP Module Configuration")
