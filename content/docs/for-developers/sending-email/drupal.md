---
layout: page
weight: 0
title: Drupal
group: plugins
navigation:
  show: true
---
To send emails from Drupal using SendGrid, you may use the SendGrid Integration module, the SMTP Authentication Support module, or the Swift Mailer module depending on your needs.

## 	Using the SendGrid Integration Module
 	
The SendGrid Integration Module uses the SendGrid API webservices to send email. It does not use SMTP. Depending on the workload of your website, this could be of benefit to you in performance. This module also provides charts for reports of vital statistics. The module does require an advanced knowledge of Drupal in order to install and setup. Usage of Drush is required.

Download and install the [SendGrid Integration Module](https://www.drupal.org/project/sendgrid_integration "SendGrid Integration Module") from Drupal.org and perform updates via Drush with Composer Manger.

Once installed access `admin/config/services/sendgrid` to configure your API credentials.

For detailed instructions, please refer to the [module documenation](http://cgit.drupalcode.org/sendgrid_integration/tree/README.md).


## 	Using the SMTP Authentication Support Module 
 	
To use SendGrid with [Drupal](https://www.drupal.org/ "Drupal"), use the [SMTP Authentication Support module](https://www.drupal.org/project/smtp "SMTP Authentication Support"). Install a version of this module that is compatible with your version of Drupal.

![]({{root_url}}/images/drupal_1.png "SMTP Module")

Open your modules page, find the SMTP module, and configure it with the following settings:

-   **SMTP Server** - smtp.sendgrid.net
-   **SMTP Port** - 587
-   **Use Encrypted Protocol** - No. If you want encryption choose "Use SSL" and set SMTP Port to 465
-   **Username** - SendGrid Username
-   **Password** - SendGrid Password

![]({{root_url}}/images/drupal_2.png "SMTP Module Configuration")

## 	Using the Swift Mailer Module 
 	
To use the [Swift Mailer module](https://www.drupal.org/project/swiftmailer "Swift Mailer Module"), install a version of this module that is compatible with your version of Drupal.

Configuration for this module is largely the same as above.

![]({{root_url}}/images/drupal_3.png "SMTP Module Configuration")
