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
Then restart ssmtp. All set!
