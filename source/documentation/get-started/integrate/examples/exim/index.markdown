---
comments: false
date: 2011-03-25 15:47:44
layout: page
slug: exim
title: Exim
wordpress_id: 244
---

Exim is a Mail Transfer Agent (MTA) from the University of Cambridge that is licensed under the GNU General Public License. Exim is designed to work only on compatible Unix compatible operating systems like Ubuntu Server. The current version of Exim (released May 17th, 2012) is v4.80. The installation comes as a tarball. You can [find more details in the documentation](http://exim.org/exim-html-current/doc/html/spec_html/index.html) included in the installation or on the [community supported Wiki](http://wiki.exim.org/). There also appears to be 



> **WARNING >> **Versions of Exim prior to the current major release are considered obsolete. If you are using Exim 3.x or earlier it is suggested by the Exim development team that you upgrade to the current release.



The following configuration file, which can be found at **/etc/exim4/update-exim4.conf.conf**, was pulled from Ubuntu Server 10.4 and is only a sample:  
  


`
dc_eximconfig_configtype='smarthost'
dc_other_hostnames=''
dc_local_interfaces='127.0.0.1'
dc_readhost='your.server.name'
dc_relay_domains=''
dc_minimaldns='false'
dc_relay_nets=''
dc_smarthost='smtp.sendgrid.net::587'
CFILEMODE='644'
dc_use_split_config='false'
dc_hide_mailname='true'
dc_mailname_in_oh='true' 
`

You will need to enable TLS support in **/etc/exim4/exim4.conf.localmacros**:  


`
MAIN_TLS_ENABLE = 1
`



> **NOTE >> **If this file does not exist, you will need to create it.



You will need to create credentials that will allow Exim to access SendGrid's server in **/etc/exim4/passwd.client**:  


`
*:sendgridusername:sendgridpassword
`

Once you have completed and saved all changes to Exim's configuration files, you will need to restart it to activate those changes: 

`
$ /etc/init.d/exim4 restart
`

  



## cPanel


If you are using cPanel with Exim and want to relay your email through SendGrid you will need to modify the configuration. When logged into cPanel as the admin, go to **Main > Service Configuration > Exim Configuration Editor** and click on the Advanced Editor button. In the Advanced Editor you can enter the following data:

`
begin authenticators

sendgrid_login:
  driver = plaintext
  public_name = LOGIN
  client_send = : username@example.com : YourSendgridPassword
`



> **NOTE >> **Only include "begin authenticators" if it's not already in the configuration



Add a Router in the **Router Configuration** Box:
`
send_via_sendgrid:
  driver = manualroute
  domains = ! +local_domains
  transport = sendgrid_smtp
  route_list = "* smtp.sendgrid.net::587 byname"
  host_find_failed = defer
  no_more
`

Add a Transport to the **Transport Configuration** Box:
`
sendgrid_smtp:
  driver = smtp
  hosts = smtp.sendgrid.net
  hosts_require_auth = smtp.sendgrid.net
  hosts_require_tls = smtp.sendgrid.net
`

Once you have completed and saved all changes to Exim's configuration files, you will need to restart it to activate those changes: 

`
$ /etc/init.d/exim4 restart
`
