---
layout: page
weight: 0
title: Exim 4
navigation:
  show: true
seo:
  title: Exim 4 configuration for SendGrid
  keywords: Exim Internet Mailer, Exim, Exim and SendGrid
  description: Configuration information for Exim 4 and Sendgrid.
---

{% warning %}
Versions of Exim prior to the current major release are considered obsolete. If you are using Exim 3.x or earlier it is suggested by the Exim development team that you upgrade to the current release. 
{% endwarning %}

The following configuration file, which can be found at **/etc/exim4/update-exim4.conf.conf**, was pulled from Ubuntu Server 10.4 and is for example purposes only:

{% codeblock lang:bash %}
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
{% endcodeblock %}

Enable TLS support in **/etc/exim4/exim4.conf.localmacros**.

  
 
{% info %}
If this file does not exist, you will need to create it: 
{% endinfo %}

{% codeblock lang:bash %}
MAIN_TLS_ENABLE = 1
{% endcodeblock %}

Enter credentials that will allow Exim to access SendGrid in **/etc/exim4/passwd.client**:

{% codeblock lang:bash %}
*:sendgridusername:sendgridpassword
{% endcodeblock %}

Once you have completed and saved all changes to Exim's configuration files, you will need to restart it to activate those changes:

{% codeblock lang:bash %}
$ /etc/init.d/exim4 restart
{% endcodeblock %}

 
{% anchor h2 %}
cPanel 
{% endanchor %}

If you are using cPanel with Exim and want to relay your email through SendGrid, go to **Main \> Service Configuration \> Exim Configuration Editor**, click on the Advanced Editor button, and enter the following in the **AUTH** Box:

{% codeblock lang:bash %}
begin authenticators

sendgrid_login:
  driver = plaintext
  public_name = LOGIN
  client_send = : YourSendGridUsername : YourSendGridPassword
{% endcodeblock %}

 
{% info %}
Only include "begin authenticators" if it's not already in the configuration. 
{% endinfo %}

Add a route in the **Router Configuration** Box:

{% codeblock lang:bash %}
send_via_sendgrid:
  driver = manualroute
  domains = ! +local_domains
  transport = sendgrid_smtp
  route_list = "* smtp.sendgrid.net::587 byname"
  host_find_failed = defer
  no_more
{% endcodeblock %}

Add a transport to the **Transport Configuration** Box:

{% codeblock lang:bash %}
sendgrid_smtp:
  driver = smtp
  hosts = smtp.sendgrid.net
  hosts_require_auth = <; $host_address
  hosts_require_tls = <; $host_address
{% endcodeblock %}

Once you have completed and saved all changes to Exim's configuration files, you will need to restart it to activate those changes:

{% codeblock lang:bash %}
$ /etc/init.d/exim4 restart
{% endcodeblock %}

{% anchor h2 %}
Exim Documentation
{% endanchor %}
If your version of Exim does not match the version above or you are not finding the answer you need, please check out the Official [Exim Documentation](http://www.exim.org/docs.html) for more information.
