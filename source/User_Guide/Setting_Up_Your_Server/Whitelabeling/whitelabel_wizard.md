---
layout: page
weight: 0
title: Whitelabel Wizard
seo:
  title: Whitelabel Wizard
navigation:
  show: true
---

Depending on the set of Apps you have chosen, SendGrid can alter or add links to emails. This includes unsubscribe links, click tracking, and open tracking. In addition, SendGrid adds email headers that reference SendGrid's servers so remote servers can verify the authenticity of emails. These links and headers reference the sendgrid.me or sendgrid.com domain.

{% info %}
SendGrid does not host domains. Do not attempt to transfer a domain to SendGrid. If you have already registered a domain, then you have a registrar, and it is likely the hosting company you have your website on.
{% endinfo %}

{% warning %}
Any changes you make to DNS can immediately affect your client's ability to reach your resources. We cannot take any responsibility for any changes you make to DNS, so please be very careful. If you have any questions, please contact our support team.
{% endwarning %}

{% info %}
When in doubt, contact your DNS registrar or web hosting service's technical support department. All information in this document complies with the DNS standards, but some registrars and web hosting providers handle things differently.
{% endinfo %}

SendGrid allows companies to customize the domain that appears, a process called Whitelabeling. SendGrid does this using a subdomain for your domain. For example, if your domain is EXAMPLE.COM, you might use EM.EXAMPLE.COM, where EM is your sub-domain.

Your first step is to choose a subdomain. Common examples are EMAIL, EM, MAIL, CONTACT, NEWS, NEWSLETTER, but you can make it anything you like. Now you just need to run the Whitelabel Wizard from your account and the wizard will generate the DNS records you need to add to your DNS entries. It's important to know that [Instructions for modifying DNS settings]({{root_url}}/User_Guide/Setting_Up_Your_Server/Whitelabeling/dns_setup.html) may change depending on your host or registrar.

{% warning %}
It is critical that you select a subdomain that does not already exist. MAIL is a common subdomain. If you do not have access to your domain registrar, check with your service administrator.
{% endwarning %}

{% anchor h2 %}
Whitelabel Wizard
{% endanchor %}

Our Whitelabel Wizard makes it easier to setup your Whitelabel by walking you through the necessary steps and verifying your settings along the way. You can access the Whitelabel Wizard by navigating to the "Developers" menu and choosing "Whitelabel"

![]({{root_url}}/images/whitelabel_1.png "sg_wlwiz_start")

{% info %}
The Whitelabel Wizard provides you with your static IP address.
{% endinfo %}

{% anchor h3 %}
DNS Records
{% endanchor %}

The following are the default records that are needed for links, SPF, DomainKeys, and DKIM to work correctly.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>location</th>
         <th>type</th>
         <th>value</th>
      </tr>
      <tr>
         <td>em.example.com.</td>
         <td>CNAME</td>
         <td>sendgrid.net.</td>
      </tr>
      <tr>
         <td>example.com.</td>
         <td>TXT</td>
         <td>v=spf1 include:sendgrid.net ~all</td>
      </tr>
      <tr>
         <td>smtpapi._domainkey.example.com.</td>
         <td>CNAME</td>
         <td>dkim.sendgrid.net.</td>
      </tr>
      <tr>
         <td>smtpapi._domainkey.em.example.com.</td>
         <td>CNAME</td>
         <td>dkim.sendgrid.net.</td>
      </tr>
   </tbody>
</table>

You can [customize your DKIM records]({{site.support_url}}/hc/en-us/articles/204116386) to your domain.

{% info %}
If you already have an SPF record, you can simply add include:sendgrid.net to this entry. Make sure to add it BEFORE the "all" mechanism as "all" always matches and typically goes at the end of the SPF record.
{% endinfo %}

**Underscore Problems?**

If your DNS server does not allow underscores in CNAMES you will have problems adding the smtpapi._domainkey CNAME records. If that is the case please create the following TXT records instead:

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>location</th>
         <th>type</th>
         <th>value</th>
      </tr>
      <tr>
         <td>smtpapi._domainkey.example.com.</td>
         <td>TXT</td>
         <td>See Below.</td>
      </tr>
      <tr>
         <td>smtpapi._domainkey.em.example.com.</td>
         <td>TXT</td>
         <td>See Below.</td>
      </tr>
   </tbody>
</table>

DomainKey Value:

{% codeblock %} k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB {% endcodeblock %}
{% anchor h2 %}
Dedicated IP Setup
{% endanchor %}

SendGrid allows you to have your own dedicated IP address to help build your own reputation. These IPs need to be mapped to real names. SendGrid handles the mapping of an IP to a name, reverse DNS records (RDNS), and expects the mapping of the name to match the IP in the RDNS record. Please use the Whitelabel Wizard or contact support for the IPs and the names needed to be setup. In this case, an IP of 192.168.2.1 has been given the name o1.em.domain.com. SendGrid assigns the mapping of 192.168.2.1 to o1.em.example.com, and the following A record is needed to map o1.em.domain.com to 192.168.2.1:

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>location</th>
         <th>type</th>
         <th>value</th>
      </tr>
      <tr>
         <td>o1.em.example.com.</td>
         <td>A</td>
         <td>192.168.2.1</td>
      </tr>
   </tbody>
</table>
