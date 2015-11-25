---
seo:
  title: Whitelabel - Do I need to make DNS changes? (Pro+)
  description: Whitelabel - Do I need to make DNS changes? (Pro+)
  keywords: whitelabel, dns, whitelabel_wizard, IP, click_tracking
title: Whitelabel - Do I need to make DNS changes? (Pro+)
weight: 0
layout: page
zendesk_id: 200181868
navigation:
  show: true
---

With&nbsp;Pro&nbsp;and higher level accounts you are issued a brand new, sender neutral,&nbsp;dedicated IP address. Sending from a dedicated IP is a great way to control your sending reputation, because _you, and only you_, control what is sent from it.&nbsp;

You can take this a step further by completing the Whitelabel and adding a handful of DNS records to your domain. This allows you to control the specific branding of your email to a very fine degree. Here are some things that Whitelabeling allows you to control:

1. **Domain Whitelabel** - Control the domain that is used in the DKIM and SPF signatures of your email. This helps secure your brand and show receivers that you're above board.&nbsp;
2. **Email Links** - This allows you to set the domain that is surfaced on your Click Tracked links and your Open Tracking pixel
3. **IP Whitelabel** - Since we are the owners of this IP it originally resolves back to SendGrid by default. IP Whitelabel allows you to set the reverse DNS for the IP to match your domain.

&nbsp;&nbsp;

![]({{root_url}}/images/makowhitelabel.png)

![]({{root_url}}/images/makowhitelabel2.png)&nbsp;

Since an IP will only support a single rDNS name, it's recommended that you use a single IP per specific top-level domain/account. Learn more about adding additional&nbsp;IPs [here](http://support.sendgrid.com/hc/en-us/articles/200181948-Adding-an-additional-dedicated-IP-to-your-account).

[Subusers](http://support.sendgrid.com/hc/en-us/articles/200181918-What-are-Subusers-)&nbsp;can also be used in conjunction with Whitelabels when sending from multiple domains. Having a single IP assigned to a single Subuser is a great way to segment your traffic.&nbsp;

&nbsp;

For specific questions about how to make the required Whitelabel DNS changes to your domain, please contact your website and/or DNS hosting provider.
