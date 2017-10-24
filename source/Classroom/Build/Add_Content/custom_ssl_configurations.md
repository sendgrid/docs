---
seo:
  title: Custom SSL configurations
title: Custom SSL configurations
layout: page
weight: 0
navigation:
  show: true
---

If for any reason you can't or don't want to use Content Delivery Networks when setting up SSL for click and open tracking, then you can setup custom SSL configuration.

{% anchor h2 %}
Workaround
{% endanchor %}

Let assume that you have set up a valid [email links whitelabel](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/links.html) on your account and it looks like below:

![Email Links Whitelabel]({{root_url}}/images/email_link_whitelabel.png)

1. Prepare proxy (e.g. web application, nginx, Amazon API Gateway, etc.) that will get all traffic for `mailing.example.com` and forward it to `sendgrid.net`.
2. Your proxy needs to use HTTP and HTTPS. For HTTPS provide valid SSL certificate for `mailing.example.com` domain.
3. When forwarding traffic set `Host` HTTP header to `mailing.example.com` domain.
4. Point CNAME record to your proxy, e.g. `CNAME mailing.example.com proxy.example.com`.  
  **Important:** don't validate DNS record again, because after changing CNAME validation will fail and whitelabel will stop working.
5. Finally, contact SendGrid support to enable SSL click and open tracking.