---
seo:
  title: Click and Open Tracking with SSL Enabled
title: Click and Open Tracking with SSL Enabled
layout: page
weight: 0
navigation:
  show: true
---

{% anchor h2 %}
Overview
{% endanchor %}

SendGrid supports SSL enabled click and open tracking. This feature is enabled automatically if you are using a shared IP address or have a non-whitelabeled domain. To enable SSL click and open tracking for a whitelabeled domain, additional configuration for SSL keys is required.

{% anchor h2 %}
Configuring SSL Certificates and Keys
{% endanchor %}

In order for click and open tracking to work over SSL, SendGrid needs to present a valid certificate that will be trusted by the email recipient's browser. For whitelabeled domains, SendGrid is not able to request and/or manage certificates, as it is not the record owner for the domain.

To work around this restriction, you may use a CDN service, such as [CloudFlare]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html) or [Fastly](http://fastly.com) to manage certificates and keys for your domain. These services can then forward traffic onwards to SendGrid so that click and open tracking can be performed.

Once you have followed the configuration guide for either of these
services, please contact support and they will enable SSL click and
opening tracking for you.

{% anchor h2 %}
Using Fastly
{% endanchor %}

[Sign up for Fastly](https://www.fastly.com/signup/) or login to your
existing account.

Click on the "Configure" button on the Dashboard. 
 
![Fastly Dashboard]({{root_url}}/images/fastly1.png)

Click New Service
 
![CloudFlare Service]({{root_url}}/images/fastly2.png)

Set the options as follows:

*Name*: SendGrid (or whatever you like)

*Origin Server Address*: yourcompanyname.ct.sendgrid.net : 443 (Insert your company name. Note the connection on the SSL port 443)

*Domain Name*: email.example.com (whitelabel domain name is, from the SendGrid WhiteLabel Wizard. This value will be what recipients see in your SSL enabled clicktracking links that SendGrid creates in your emails).

Fastly has a few different options for SSL termination. If you want to be able to use your SendGrid whitelabel Domain with SSL, you'll need to select either the Shared Certificate, Shared Wildcard Certificate, or Customer Certificate Hosting options. If you need to add your SendGrid whitelabel domain to your Fastly managed certificate, you can open a ticket with Fastly via the support tab or by mailing support@fastly.com, and they will walk you through the process. Please put "SSL Certificate Request" in the subject.

Now configure your DNS provider with a CNAME record for email.example.com (e.g. your desired whitelabel domain) to global.prod.fastly.net.

Finally; contact SendGrid support, and they'll validate the CDN settings and enable SSL click and open
tracking.

