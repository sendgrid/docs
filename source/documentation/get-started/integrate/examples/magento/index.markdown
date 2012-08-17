---
comments: false
date: 2011-03-30 14:52:04
layout: page
slug: magento
title: Magento
wordpress_id: 292
---

To send email through SendGrid using Magento we recommend [ASchroder.com SMTP Pro Email](http://www.magentocommerce.com/magento-connect/ASchroder/extension/1865/aschroder.com-smtp-pro) free extension.  Once installed you need to change at least the following options:




  
  * **Authentication** - Login

  
  * **Username** - SendGrid Username

  
  * **Password** - SendGrid Password

  
  * **Host** - smtp.sendgrid.net

  
  * **Port** - 587

  
  * **SSL Security** -SSL TLS



The following image shows these settings.
[![Magento SMTP with SendGrid](http://docs.sendgrid.com/wp-content/uploads/2011/03/magentosmtp.gif)](http://docs.sendgrid.com/wp-content/uploads/2011/03/magentosmtp.gif)
