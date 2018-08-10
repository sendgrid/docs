---
seo:
  title: Adding a Custom SSL configuration
title: Adding a Custom SSL configuration
layout: page
weight: 0
group: account-management
navigation:
  show: true
---

If you can't or don't want to use Content Delivery Networks when setting up SSL for click and open tracking, then you can setup custom SSL configuration.

Before Adding a Custom SSL configuration, you need to set up a valid [link branding]({{root_url}}/ui/sending-email/how-to-set-up-link-branding/) on your account like this:

![Email Links Whitelabel]({{root_url}}/images/email_link_whitelabel.png)

*To add a custom SSL configuration:*

1. Prepare a proxy (like web application, nginx, or Amazon API Gateway) to take all traffic for `mailing.example.com` and forward it to `sendgrid.net`.
1. Set up the proxy to use HTTP or HTTPS. For HTTPS, provide valid SSL certificate for `mailing.example.com` domain.
1. To forward traffic, set `Host` HTTP header to `mailing.example.com` domain.
1. Point the CNAME record to your proxy. For example, `CNAME mailing.example.com proxy.example.com`.

<call-out type="warning">

Don't validate the DNS record more than once, because after changing the CNAME, a second validation fails and the authentication stops working.

</call-out>

[Contact SendGrid Support](https://support.sendgrid.com/hc/en-us) to enable SSL click and open tracking.
