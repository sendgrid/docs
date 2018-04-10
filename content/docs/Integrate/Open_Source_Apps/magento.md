---
layout: page
weight: 0
title: Magento
navigation:
  show: true
---

To send email through SendGrid using Magento we recommend the [ASchroder.com SMTP Pro Email](http://www.magentocommerce.com/magento-connect/ASchroder/extension/1865/aschroder.com-smtp-pro) free extension. Once installed you need to change at least the following options:

-   **Authentication** - Login
-   **Username** - SendGrid Username
-   **Password** - SendGrid Password
-   **Host** - smtp.sendgrid.net
-   **Port** - 587
-   **SSL Security** -SSL TLS

The following image shows these settings.

![Magento SMTP with SendGrid]({{root_url}}/images/magento.png "Magento SMTP with SendGrid")
