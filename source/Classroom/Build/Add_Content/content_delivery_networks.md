---
seo:
  title: Content Delivery Networks
title: Content Delivery Networks
layout: page
weight: 0
navigation:
  show: true
---

Content Delivery Networks are a great mechanism that you can use to serve up content very quickly and easily across multiple mediums as well as handle security certificates for you.

We suggest [CloudFlare]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-CloudFlare),  [Fastly]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-Fastly), or [KeyCDN]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-KeyCDN) when using Content Delivery Networks with SendGrid.

{% anchor h2 %}
Using CloudFlare
{% endanchor %}

{% anchor h3 %}
Creating a New CloudFlare Account
{% endanchor %}

If you are not already a CloudFlare customer, you have two options for setting up your account. You can follow their Sign Up process, which requires that you make CloudFlare the authoritative provider for your DNS, or you can choose to perform a "CNAME configuration".

Unless you are comfortable changing your authoritative DNS provider, please follow the instructions for [getting CloudFlare up and running using a CNAME based configuration](https://support.cloudflare.com/hc/en-us/articles/200168706-How-do-I-do-CNAME-setup-).

{% anchor h3 %}
Configuring CloudFlare
{% endanchor %}

First, login to your CloudFlare account.

Click on the SETTINGS button on the Dashboard.

![CloudFlare Dashboard]({{root_url}}/images/cloudflare1.png)

Now click on CLOUDFLARE SETTINGS.

![CloudFlare Settings]({{root_url}}/images/cloudflare2.png)

Ensure that SSL mode is set to "Full SSL"

![CloudFlare SSL]({{root_url}}/images/cloudflare3.png)

{% info %}
SendGrid is working with CloudFlare to resolve an issue that precludes the use of "Strict SSL". We recognize that "Strict SSL" is optimal, but unfortunately it can only be enabled by requesting a special configuration modification from CloudFlare. If your threat model requires the use of "Strict SSL", let us know and we will ask CloudFlare to enable the workaround for you.
{% endinfo %}

Now, go back to WEBSITES, and click on DNS SETTINGS.

![CloudFlare DNS]({{root_url}}/images/cloudflare4.png)

Add a new CNAME entry that points your desired Email Links WhiteLabel domain to $customer.ct.sendgrid.net, e.g.:

![CloudFlare CNAME]({{root_url}}/images/cloudflare5.png)

Now click on I AM DONE WITH CNAME SETUP. Once done; contact SendGrid support,
and they'll validate the CDN settings and enable SSL click and open
tracking.

{% anchor h2 %}
Using Fastly
{% endanchor %}

[Sign up for Fastly](https://www.fastly.com/signup/) or login to your
existing account.

Click on the CONFIGURE button on the Dashboard.

![Fastly Dashboard]({{root_url}}/images/fastly1.png)

Click NEW SERVICE

![CloudFlare Service]({{root_url}}/images/fastly2.png)

Set the options as follows:

*Name*: SendGrid (or whatever you like)

*Origin Server Address*: sendgrid.net : 443 (Note the connection on the SSL port 443)

*Domain Name*: email.example.com (Enter your Email Links WhiteLabel domain here. Ensure it matches the domain configured in the SendGrid WhiteLabel Wizard. This value will be what recipients see in your SSL enabled clicktracking links).

Fastly has a few different options for SSL termination. If you want to be able to use your SendGrid Email Links WhiteLabel Domain with SSL, you'll need to select either the Shared Certificate, Shared Wildcard Certificate, or Customer Certificate Hosting options. If you need to add your SendGrid whitelabel domain to your Fastly managed certificate, you can open a ticket with Fastly via the support tab or by mailing support@fastly.com, and they will walk you through the process. Please put "SSL Certificate Request" in the subject.

After provisioning, update the CNAME record for your domain(s) over to the TLS endpoint provided by Fastly support.

Finally; Contact SendGrid support, and they'll validate the CDN settings and enable SSL click and open
tracking.

{% anchor h2 %}
Using KeyCDN
{% endanchor %}

[Sign up for KeyCDN](https://app.keycdn.com/signup) or login to your
existing account.

Create a pull zone and point the origin URL to https://sendgrid.net.

![KeyCDN Pull Zone]({{root_url}}/images/keycdn1.png)

Enable SSL and HTTP/2 (custom SSL or Let's Encrypt).

![KeyCDN Enable SSL]({{root_url}}/images/keycdn2.png)

Enable the option "Forward Host Header." 

![KeyCDN Forward Host Header]({{root_url}}/images/keycdn3.png)

Add the Zonealias (with the alias you want to use for your email links whitelabel domain)

![KeyCDN Zonealias]({{root_url}}/images/keycdn4.png)

Finally; Contact SendGrid support, and they'll validate the CDN settings and enable SSL click and open
tracking.
