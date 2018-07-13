---
layout: page
weight: 0
title: ssmtp
navigation:
  show: true
---

Adding SendGrid as a SMTP relay for ssmtp is easy. Edit **/etc/ssmtp/ssmtp.conf** and add the following:
{% codeblock %}
mailhub=smtp.sendgrid.net:587
AuthUser=sendgridusername
AuthPass=sendgridpassword
UseSTARTTLS=YES
{% endcodeblock %}

Your changes will come into effect as soon as the next message is sent via `ssmtp`
