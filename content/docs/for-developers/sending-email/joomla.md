---
layout: page
weight: 0
title: Joomla
group: open-source
navigation:
  show: true
---

Joomla supports sending email over SMTP. To have Joomla relay email through SendGrid go to _Site \> Global Configuration_ and change:

- **Mailer** – SMTP
- **SMTP Host** - smtp.sendgrid.net
- **SMTP Port** – 587
- **SMTP Security** – STARTTLS
- **SMTP Authentication** - Yes
- **SMTP User** - "apikey"  
  SMTP User must be the exact string, "apikey"
- **SMTP Pass** - <Your API Key>  
  SMTP Pass is your actual API key
