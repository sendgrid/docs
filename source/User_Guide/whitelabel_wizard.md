---
layout: page
weight: 0
title: Whitelabel Wizard
seo:
  title: Whitelabel Wizard
navigation:
  show: true
---

{% info %}
This feature is available to customers with Silver accounts and higher.
{% endinfo %}

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

Your first step is to choose a subdomain. Common examples are EMAIL, EM, MAIL, CONTACT, NEWS, NEWSLETTER, but you can make it anything you like. Now you just need to run the Whitelabel Wizard from your account and the wizard will generate the DNS records you need to add to your DNS entries. Below are links to some hosting and domain name registrars that you might be using.

{% info %}
The hosting company 1&1 does not support TXT records, so SPF cannot be specified and therefore is not supported by SendGrid.
{% endinfo %}

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
        <td>
          <a href="http://www.dnsmadeeasy.com">DNS Made Easy</a>
        </td>
        <td>
          <a href="http://www.youtube.com/watch?v=hZ1bKYC3gWA=c4-overview-vl=PL2DD16B8270E9D3A0">Getting Started with DNS Made Easy</a>
          <br>
          <a href="http://help.dnsmadeeasy.com/records/spf-record/">Configure SPF Records on DNS Made Easy</a>
          <br>
          <a href="http://help.dnsmadeeasy.com/spry_menu/domainkeys-identified-mail-dkim-record/">Configure DK/DKIM Records on DNS Made Easy</a>
          <br>
          <a href="http://help.dnsmadeeasy.com/records/txt-record/">Configure TXT Records on DNS Made Easy</a>
        </td>
        <tr>
          <td>
            <a href="http://www.godaddy.com">GoDaddy</a>
          </td>
          <td>
            <a href="http://support.godaddy.com/help/4597/setup-dns-using-cpanel">Configure DNS using CPanel</a>
            <br>
            <a href="http://support.godaddy.com/help/198/setting-up-dns-with-your-parallels-plesk-panel-9-server-and-domain-with-us">Configure DNS using Plesk Panel 9</a>
            <br>
            <a href="http://support.godaddy.com/help/6891/setting-up-dns-with-your-parallels-plesk-panel-10-server-and-domain-with-us">Configure DNS using Plesk Panel 10</a>
            <br>
            <a href="http://screencast.com/t/tip4j5ce6b">-Watch a video!-</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="http://www.bluehost.com">Bluehost</a>
          </td>
          <td>
            <a href="https://my.bluehost.com/cgi/help/559">Instructions on how to configure DNS using cPanel on BlueHost</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="http://www.dreamhost.com">Dreamhost</a>
          </td>
          <td>
            <a href="http://wiki.dreamhost.com/Custom_DNS">Instructions on how to configure custom DNS on DreamHost</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="http://www.hover.com">Hover</a>
          </td>
          <td>
            <a href="https://www.hover.com/help/edit-dns-records-cname-mx-txt-and-srv">Instructions on how to edit your DNS configuration on Hover</a>
          </td>
        </tr>
      </tr>
   </tbody>
</table>

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

The following records are needed for links, SPF, DomainKeys, and DKIM to work correctly.

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
