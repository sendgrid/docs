---
layout: page
weight: 0
title: Joomla
navigation:
  show: true
---

Joomla supports sending email over SMTP. To have Joomla relay email through SendGrid go to *Site \> Global Configuration* and change:

-   **Mailer** – SMTP
-   **SMTP Host** - smtp.sendgrid.net
-   **SMTP Port** – 587
-   **SMTP Security** – STARTTLS
-   **SMTP Authentication** - Yes
-   **SMTP User** - sendgrid_username
-   **SMTP Pass** - sendgrid_password
