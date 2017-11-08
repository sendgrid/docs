---
seo:
  title: Setting up SSL for click tracking
title: Setting up SSL for click tracking
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

To work around this restriction, you may use a CDN service, such as 
[CloudFlare]({{root_url}}/Classroom/Build/Add_Content/content_delivery_networks.html#-Using-CloudFlare), 
[Fastly]({{root_url}}/Classroom/Build/Add_Content/content_delivery_networks.html#-Using-Fastly), or 
[KeyCDN]({{root_url}}/Classroom/Build/Add_Content/content_delivery_networks.html#-Using-KeyCDN) to manage certificates and keys for your domain. You can also setup [custom SSL configuration]({{root_url}}/Classroom/Build/Add_Content/custom_ssl_configurations.html). These services can then forward traffic onwards to SendGrid so that click and open tracking can be performed.

Once you have followed the configuration guide for either of these
services, please contact support and they will enable SSL click and
opening tracking for you.
