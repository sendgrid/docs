---
layout: page
weight: 0
title: Sendmail
navigation:
  show: true
---

{% warning %}
Sendmail requires libsasl in order to properly send authentication requests to SendGrid servers. The saslauthd server daemon is not required unless you plan to receive authentication requests to the same server. [For more information on configuring sendmail for SASL support, check the official documentation](http://www.sendmail.com/sm/open_source/tips/compiling_sendmail/#SASL). 
{% endwarning %}

Set the authorization credentials in **/etc/mail/access**

{% warning %}
We have had reports that some customers have needed to install `cyrus-sasl-plain` in order to avoid authentication issues as well. We have not validated this requirement, so please make sure your system administrators, Ops, and/or InfoSec people approve this change before you make it!
{% endwarning %}

{% codeblock lang:bash %}
AuthInfo:smtp.sendgrid.net "U:yourUserName" "P:yourPassword" "M:PLAIN"
{% endcodeblock %}

Define the Smart Host in **/etc/mail/sendmail.mc** You should add these lines just after the commented "\#dnl define('SMART_HOST', 'smtp.your.provider')dnl" line in the file

{% codeblock lang:bash %}
define(`SMART_HOST', `smtp.sendgrid.net')dnl
FEATURE(`access_db')dnl
define(`RELAY_MAILER_ARGS', `TCP $h 587')dnl
define(`ESMTP_MAILER_ARGS', `TCP $h 587')dnl
{% endcodeblock %}

Update sendmail.cf and access.db files

(You will need to run these commands as 'su' or 'root') 

{% codeblock lang:bash %}
$ cd /etc/mail
$ m4 sendmail.mc >sendmail.cf
$ makemap hash access < access
{% endcodeblock %}

On older distros, you can run restart sendmail like so:

{% codeblock lang:bash %}
$ /etc/init.d/sendmail restart
{% endcodeblock %}

If, however, you're using a newer version, do the following to restart:

{% codeblock lang:bash %}
$ service sendmail restart
{% endcodeblock %}
