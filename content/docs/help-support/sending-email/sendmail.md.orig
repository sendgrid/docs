---
seo:
  title: sendmail&#58; Relay all local mail through Sendgrid
  description: sendmail&#58; Relay all local mail through Sendgrid
  keywords:
title: sendmail&#58; Relay all local mail through Sendgrid
weight: 0
layout: page
zendesk_id: 200185188
navigation:
  show: true
---

If you want SendGrid to be used for all of your local email without it skipping the relay for local domains (e.g. the servers domain), refer to the following steps.

After following [this article]({{root_url}}/Integrate/Mail\_Servers/sendmail.html) on setting up send mail, add the following to /etc/mail/sendmail.mc

After the SMART\_HOST entry add:

<code>define(`MAIL_HUB', `smtp.sendgrid.net')</code>

After the `access\_db` entry add:

<code>FEATURE(`stickyhost')</code>

Restart sendmail:

<code>sudo /etc/init.d/sendmail restart</code>
