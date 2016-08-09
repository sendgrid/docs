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

We suggest [CloudFlare]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-CloudFlare), [Fastly]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-Fastly), or [KeyCDN]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-KeyCDN) when using Content Delivery Networks with SendGrid.

{% anchor h2 %}
Using CloudFlare
{% endanchor %}

The following instructions assume you already have a CloudFlare account made, using either a [Full DNS setup](https://support.cloudflare.com/hc/en-us/articles/205195708) or a [CNAME setup](https://support.cloudflare.com/hc/en-us/articles/200168706). You can compare the two different setups [here](https://support.cloudflare.com/hc/en-us/articles/203685674). Note that a CNAME setup is only available to Business or Enterprise level CloudFlare plans.

Begin by logging into your CloudFlare account, and navigating to the DNS settings for your domain.

![CloudFlare DNS Settings]({{root_url}}/images/cloudflare1.png)

Add a new CNAME entry that points your configured Email Links WhiteLabel domain to sendgrid.net.

![CloudFlare DNS Addition]({{root_url}}/images/cloudflare2.png)

Once the record is created, click on the cloud icon under the Status column to turn it orange and enable HTTP proxy.

![CloudFlare DNS HTTP proxy]({{root_url}}/images/cloudflare3.png)

Next, navigate to the Page Rules settings for your domain. You will need to create a Page Rule for your Email Links Whitelabel domain that sets SSL to Full. This is necessary due to how [CloudFlare validates the certificate on the origin](https://support.cloudflare.com/hc/en-us/articles/200721975). You can find more information on the different SSL options [here](https://support.cloudflare.com/hc/en-us/articles/200170416).

![CloudFlare Page Rules Addition]({{root_url}}/images/cloudflare4.png)

Ensure that the Page Rule is On.

![CloudFlare Page Rules Verification]({{root_url}}/images/cloudflare5.png)

If you are using a CNAME setup, you will also need to change DNS to point to the CloudFlare CNAME you created.

Once all of this is done, you will need to contact [SendGrid support](https://support.sendgrid.com/) and request that SSL click and open tracking be enabled on your account. They will then verify the configuration and enable the setting on your account.

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

This section is maintained by KeyCDN, if you have any questions about KeyCDN please [contact their support](https://www.keycdn.com/support/) team.

[Sign up for KeyCDN](https://www.keycdn.com) or login to your
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
