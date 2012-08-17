---
comments: false
date: 2011-03-25 15:47:26
layout: page
slug: qmail
title: Qmail
wordpress_id: 242
---

The qmail server does not come with any kind of SMTP authentication functionality already installed, so you'll have to add one, and we can suggest two! First, [check out differentpla.net's nice and concise run through for forms of authentication and adding the netqmail](http://www.differentpla.net/content/2004/03/installing-smtp-auth-with-qmail) TLS+SMTPauth patch. Alternatively, you can [take a look at Fehcom's very complete description of authentication on mail servers](http://www.fehcom.de/qmail/smtpauth.html), or just [jump down to the section about configuring SMTPAUTH for qmail](http://www.fehcom.de/qmail/smtpauth.html##SETUP). 
In general practice, you will want to add the following to **/var/qmail/control/smtproutes**, but you should verify the actual path and file you need to update and the exact syntax required before committing. 
`
:smtp.sendgrid.net:587 username password
`

As with all configuration changes, make sure to restart qmail after that.
