---
comments: false
date: 2011-06-14 10:39:19
layout: page
slug: whitelabel-wizard
title: Whitelabel Wizard
wordpress_id: 1166
following_users:
- support_docs
---

_**NOTE: This feature is available to customers with Silver, Gold, or Platinum accounts.**_

Depending on the set of Apps you have chosen, SendGrid can alter or add links to emails. This includes unsubscribe links, click tracking, and open tracking. In addition, SendGrid adds email headers that reference SendGrid's servers so remote servers can verify the authenticity of emails. These links and headers reference the sendgrid.me or sendgrid.com domain.



> **WARNING >> **SendGrid does not host domains. Do not attempt to transfer a domain to SendGrid. If you need a domain registrar service, we suggest you check out Hover. If you have already registered a domain, then you have a registrar, and it is likely the hosting company you have your website on.





> **WARNING >> **Follow the instructions shown here very carefully. Any changes you make to DNS can immediately affect your clients ability to reach your resources. We cannot take any responsibility for any changes you make to DNS, so please be very VERY careful. If you have any questions, check our Knowledgebase and Community Support Forums.





> **TIP >> **When in doubt, contact your DNS registrar or web hosting service's technical support department. All information in this document complies with the DNS standards, but some registrar's and web hosting providers handle things differently, use slightly different language, or enforce limits or one kind or another.



SendGrid allows companies to customize the domain that appears, a process called Whitelabeling. SendGrid does this using a subdomain for your domain. For example, if your domain is EXAMPLE.COM, you might use EMAIL.EXAMPLE.COM, where EMAIL is your sub-domain.

Your first step is to choose a subdomain. Common examples are EMAIL, MAIL, CONTACT, NEWS, NEWSLETTER, but you can make it anything you like. Now you just need to run the Whitelabel Wizard from your account and the wizard will generate the DNS records you need to add to your DNS entries. Below are links to some hosting and domain name registrars that you might be using.



> **NOTE >> **The hosting company 1&1 does not support TXT records, so SPF cannot be specified and therefore is not supported by SendGrid. If you host on 1&1, you will need to transfer your domain to a different domain registrar in order to add the requisite DNS entries for SendGrid support.





 





[![](http://docs.sendgrid.com/wp-content/uploads/2011/06/imgres.jpeg)](http://docs.sendgrid.com/wp-content/uploads/2011/06/imgres.jpeg)


[Configure DNS using CPanel](http://support.godaddy.com/help/4597/setup-dns-using-cpanel)
[Configure DNS using Plesk Panel 9](http://support.godaddy.com/help/198/setting-up-dns-with-your-parallels-plesk-panel-9-server-and-domain-with-us)
[Configure DNS using Plesk Panel 10](http://support.godaddy.com/help/6891/setting-up-dns-with-your-parallels-plesk-panel-10-server-and-domain-with-us)

[-Watch a video!-](http://screencast.com/t/tip4j5ce6b)






![](http://docs.sendgrid.com/wp-content/uploads/2011/06/my.bluehost.gif)


[Instructions on how to configure DNS using cPanel on BlueHost](https://my.bluehost.com/cgi/help/559)






![](http://docs.sendgrid.com/wp-content/uploads/2011/06/imgres-1.jpeg)


[Instructions on how to configure custom DNS on DreamHost](http://wiki.dreamhost.com/Custom_DNS)






[![](http://docs.sendgrid.com/wp-content/uploads/2011/06/Screen-Shot-2012-02-27-at-8.39.10-PM.png)](http://docs.sendgrid.com/wp-content/uploads/2011/06/Screen-Shot-2012-02-27-at-8.39.10-PM.png)


[Instructions on how to edit your DNS configuration on Hover](https://www.hover.com/help/edit-dns-records-cname-mx-txt-and-srv)







> **WARNING >> **It is CRITICAL that you select a subdomain that does not already exist. MAIL is a common subdomain. If you do not have access to your domain registrar, check with your service administrator.





## Whitelabel Wizard


Our Whitelabel Wizard makes it easier to setup your Whitelabel by walking you through the necessary steps and verifying your settings along the way. You can access the Whitelabel Wizard by navigating to the “Developers” menu and choosing “Whitelabel”

[![](http://docs.sendgrid.com/wp-content/uploads/2011/06/sg_wlwiz_start.jpg)](http://docs.sendgrid.com/wp-content/uploads/2011/06/sg_wlwiz_start.jpg)  
  
  




> **NOTE >> **The Whitelabel Wizard provides you with your static IP address



**DNS Records**

The following records are needed for links, SPF, DomainKeys, and DKIM to work correctly.







location
type
value





email.example.com.


CNAME


sendgrid.net.






example.com.


TXT


v=spf1 a mx include:sendgrid.net ~all






smtpapi._domainkey.example.com.


CNAME


dkim.sendgrid.net.






smtpapi._domainkey.email.example.com.


CNAME


dkim.sendgrid.net.







> **TIP >> **If you already have an SPF record, you can simply add include:sendgrid.net to this entry. Make sure to add it BEFORE the “all” mechanism as “all” always matches and typically goes at the end of the SPF record.



**Underscore Problems?** If your DNS server does not allow underscores in CNAMES you will have problems adding the smtpapi._domainkey CNAME records. If that is the case please create the following TXT records instead:







location
type
value





smtpapi._domainkey.example.com.


TXT


See Below.






smtpapi._domainkey.email.example.com.


TXT


See Below.




DomainKey Value:
`k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB`


## Dedicated IP Setup


SendGrid allows you to have your own dedicated IP address to help build your own reputation. These IPs need to be mapped to real names. SendGrid handles the mapping of an IP to a name, reverse DNS records (RDNS), and expects the mapping of the name to match the IP in the RDNS record. Please use the Whitelabel Wizard or contact support for the IPs and the names needed to be setup. In this case, an IP of 192.168.2.1 has been given the name o1.email.domain.com. SendGrid assigns the mapping of 192.168.2.1 to o1.email.example.com, and the following A record is needed to map o1.email.domain.com to 192.168.2.1:



> **WARNING >> **In order to use a custom IP address, this step must be completed.










location
type
value





o1.email.example.com.


A


192.168.2.1




