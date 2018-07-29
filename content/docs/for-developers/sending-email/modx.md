---
layout: page
weight: 0
title: MODX
group: open-source
navigation:
  show: true
---

MODX supports sending email over SMTP. To have MODX relay email through SendGrid go to *System Settings \> 'Mail' area* and change:

-   **SMTP Authentication** - Yes
-   **SMTP Hosts** - smtp.sendgrid.net
-   **SMTP Password** - sendgrid_password
-   **SMTP Port** - 587
-   **SMTP Connection Prefix** - tls
-   **SMTP User** - sendgrid_username
-   **Use SMTP** - Yes

The following image shows these settings.

![MODX SMTP with SendGrid]({{root_url}}/images/modx.png "MODX SMTP with SendGrid")

