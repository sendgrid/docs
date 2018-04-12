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

<page-anchor el="h2">
Using CloudFlare
</page-anchor>

The following instructions assume you already have a CloudFlare account made, using either a [Full DNS setup](https://support.cloudflare.com/hc/en-us/articles/205195708) or a [CNAME setup](https://support.cloudflare.com/hc/en-us/articles/200168706). You can compare the two different setups [here](https://support.cloudflare.com/hc/en-us/articles/203685674). Note that a CNAME setup is only available to Business or Enterprise level CloudFlare plans.

The instructions also assume that you have set up a valid [email links whitelabel](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/links.html) on your account. This step is essential for the following instructions to work.

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

<page-anchor el="h2">
Using Fastly
</page-anchor>

1. [Sign up for Fastly](https://www.fastly.com/signup/) or [log in](https://manage.fastly.com) to an existing account.
2. Click **Configure** on the Dashboard.
3. Click the gear icon to open the **Manage Service** menu and click **Create**.

Set the options as follows:

* **Server address and port:** `sendgrid.net` : `443` _The connection on the SSL port 443_
* **Domain:** `email.example.com` _Enter your links whitelabel domain here. Ensure it matches the domain configured in the SendGrid whitelabel settings. This value will be what recipients see in your SSL enabled click tracking links._
* **Description:** `SendGrid` (or whatever you like)

Finally, click the **Create**. The new service will appear in the list of available services.

Contact SendGrid support to validate your CDN settings and enable SSL click and open tracking.

{% info %}
For more information, please visit [Fastly's documentation](https://docs.fastly.com/guides/basic-setup/working-with-services#creating-a-new-service).
{% endinfo %}

<page-anchor el="h2">
Using KeyCDN
</page-anchor>

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

Finally, [contact SendGrid support](https://support.sendgrid.com/hc/en-us), and they'll validate the CDN settings and enable SSL click and open
tracking.
