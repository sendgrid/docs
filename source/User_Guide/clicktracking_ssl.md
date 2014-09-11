---
title: SSL Enabled Click and Open Tracking 
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Overview
{% endanchor %}

SendGrid supports SSL enabled click and open tracking. This feature is enabled automatically if you are using a shared IP address or have non-whitelabeled domain. To enable SSL click and open tracking for a whitelabeled domain, additional configuration for SSL keys is required.

{% anchor h2 %}
Configuring SSL Certificates and Keys
{% endanchor %}

In order for click and open tracking to work over SSL, SendGrid needs to present a valid certificate that will be trusted by the email recipient's browser. For whitelabeled domains, SendGrid is not able to request and/or manage certificates, as it is not the owner of record for the domain.

To work around this restriction, you may use a CDN service, such as [CloudFlare](http://cloudflare.com) or [Fastly](http://fastly.com) to manage certificates and keys for your domain. These services can then forward traffic onwards to SendGrid so that click and open tracking can be performed.

Once you have followed the configuration guide for either of these
services, please contact support and they will enable SSL click and
opening tracking for you.

{% anchor h2 %}
Using CloudFlare
{% endanchor %}

{% anchor h3 %}
Creating a New CloudFlare Account
{% endanchor %}

If you are not already a CloudFlare customer, you have two options for setting up your account. You can follow their Sign Up process, which requires that you make CloudFlare the authoritative provider for your DNS, or you can choose to perform a "CNAME configuration".

Unless you are comfortable changing your authoritative DNS provider, please follow the instructions for [getting CloudFlare up and running using a CNAME based configuration](https://support.cloudflare.com/hc/en-us/articles/200168706-How-do-I-do-CNAME-setup-).

{% anchor h2 %}
Configuring CloudFlare
{% endanchor %}

First, login to your CloudFlare account. 

Click on the "Settings" button on the Dashboard. 

![CloudFlare Dashboard]({{root_url}}/images/cloudflare1.png)

Now click on CloudFlare settings.

![CloudFlare Settings]({{root_url}}/images/cloudflare2.png)

Ensure that SSL mode is set to "Full SSL"

![CloudFlare SSL]({{root_url}}/images/cloudflare3.png)

{% info %}
SendGrid is working with CloudFlare to resolve an issue that precludes the use of "Strict SSL". We recognize that "Strict SSL" is optimal, but unfortunately it can only be enabled by requesting a special configuration modification from CloudFlare. If your threat model requires the use of "Strict SSL", let us know and we will ask CloudFlare to enable the workaround for you.
{% endinfo %}

Now, go back to "Websites", and click on "DNS Settings".

![CloudFlare DNS]({{root_url}}/images/cloudflare4.png)

Add a new CNAME entry that points your desired whitelabel domain to $customer.ct.sendgrid.net, e.g.:

![CloudFlare CNAME]({{root_url}}/images/cloudflare5.png)

Now click on "I'm done with CNAME setup". Now contact SendGrid support,
and they'll validate the CDN settings and enable SSL click and open
tracking.

