---
comments: false
date: 2011-03-25 15:48:24
layout: page
slug: postfix
title: Postfix
wordpress_id: 248
---

Updating the Postfix configuration to use SendGrid as a relay host is rather straightforward if you only need the server to handle outgoing mail to be processed by SendGrid. For more advanced configuration scenarios, check out the Postfix documentation. In essence, you need to add the following to your main.cfg file and restart Postfix. Navigate to your configuration file, generally here: **/etc/postfix/main.cf**. Backup that file and open it in your favorite editor, then update this:  


`
smtp_sasl_auth_enable = yes 
smtp_sasl_password_maps = static:yourSendgridUsername:yourSendgridPassword 
smtp_sasl_security_options = noanonymous 
smtp_tls_security_level = may
start_tls = yes
header_size_limit = 4096000
relayhost = [smtp.sendgrid.net]:587
`

Make sure to restart Postfix once these changes are done, like so:  

`
$ /etc/init.d/postfix restart
`



> **NOTE >> **If you are getting **_no mechanism available_** error messages it generally indicates that you are missing some SASL authentication libraries. In order to install the missing module dependency, run the appropriate apt-get or Yum install. First, the apt-get version (i.e., Debian, Ubuntu):  


`
$ apt-get install libsasl2-modules
`

Next using a Yum-based system (i.e., RedHat, Fedora, CentOS):  

`
$ yum install cyrus-sasl-plain
`
