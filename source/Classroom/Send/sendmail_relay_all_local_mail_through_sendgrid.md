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

If you want sendgrid to be used for all your local mail too without it skipping the relay for local domains, e.g. the servers domain.

After following the Sendgrid article on setting up send mail (http://sendgrid.com/docs/Integrate/Mail\_Servers/sendmail.html). Do the following in /etc/mail/sendmail.mc

After the SMART\_HOST entry add:

[code]

define(`MAIL_HUB', `smtp.sendgrid.net')  
[/code]

After the access\_db entry add:

[code]  
FEATURE(`stickyhost')  
[/code]

Restart sendmail:

[code]  
sudo /etc/init.d/sendmail restart  
[/code]
