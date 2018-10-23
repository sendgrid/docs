---
layout: page
weight: 0
title: Qmail
group: mail-servers
navigation:
  show: true
---

Qmail does not come with SMTP authentication functionality installed. However you can add [the netqmail TLS+SMTPauth patch](http://notes.sagredo.eu/node/84).

Alternately, you can [take a look at Fehcom's very complete description of authentication on mail servers](http://www.fehcom.de/qmail/smtpauth.html), or just jump down to the section about [configuring SMTPAUTH for qmail](https://www.fehcom.de/qmail/smtpauth.html##SETUP).

In general, you will need to add the following to **/var/qmail/control/smtproutes**, but you should verify the actual path and file you need to update.

``` :smtp.sendgrid.net:587 username password ``` As with all configuration changes, make sure to restart qmail.
