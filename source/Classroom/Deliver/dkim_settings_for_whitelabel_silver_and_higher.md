---
seo:
  title: DKIM Settings for Whitelabel (Silver+)
  description: DKIM Settings for Whitelabel (Silver+)
  keywords: gmail, dkim, on behalf, via, white, label, whitelabel, outlook, list, wizard, whitelabeling, whitelist, email., em.
title: DKIM Settings for Whitelabel (Silver+)
weight: 0
layout: page
zendesk_id: 200181458
navigation:
  show: true
---

In order to help you get the best deliverability possible as well as ensure you receive Spam Reporting information from all domains that share it, here are the recommended SendGrid DKIM App Settings.

&nbsp;

First, the dedicated IP(s) associated with your account must be [Whitelabeled](http://support.sendgrid.com/entries/21195838-whitelabel-why-do-i-need-to-make-dns-changes). If you are unsure about your Whitelabel status, go ahead and check the [SendGrid Whitelabel Wizard](http://sendgrid.com/whitelabel). If your IP Is Whitelabeled you are ready to configure the DKIM App.

&nbsp;

We recommend that the DKIM App be configured to match your full Whitelabel including the subdomain. Yahoo and some other mail providers require that the DKIM app match the full sending domain, which in this case includes the Whitelabeled subdomain. In this example let's assume that the Whitelabeled domain is em.domain.com. You will enter 'em.domain.com' in the _Domain_&nbsp;entry field and ensure the option for _Set The DKIM Domain To Match The FROM Domain_&nbsp;is unchecked:

![]({{root_url}}/images/dkimapp.png)

| From: address@domain.com via em.domain.com |

A side effect of this is that some other mail providers, such as Gmail, sign messages with the subdomain. You may see a 'via' or 'on behalf of' message next to your FROM address with the full sending domain. With our example subdomain you would see:

To get around this, use a FROM address that lies under the full sending domain such as address@em.domain.com. You will then need to enable your mail server to receive messages at the subdomain and sending address in case any of your recipients reply to your emails.

