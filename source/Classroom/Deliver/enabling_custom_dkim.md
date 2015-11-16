---
seo:
  title: Enabling custom DKIM
  description: Enabling custom DKIM
  keywords: dkim, key, developers, rsa, selector, custom
title: Enabling custom DKIM
weight: 0
layout: page
zendesk_id: 204116386
navigation:
  show: true
---

Custom DKIM allows you to generate a custom DKIM key for use specifically with your own domain, as opposed to using the default key that Sendgrid&nbsp;provides&nbsp;when running&nbsp;the Whitelabel Wizard.&nbsp;

&nbsp;

**1.)** To get started, under the [Developers](https://sendgrid.com/developer) section, you can find&nbsp;the option for "Custom DKIM" option. Click on "Create new custom domain"

![]({{root_url}}/images/customDKIM1.png)

&nbsp;

&nbsp;

**2.)** Next, supply your primary domain in the Domain field and a selector in the Selector field. The selector is a specific flag that is added&nbsp;to the domain name, and is used to find DKIM public key information. In a nutshell, a selector defines a 1:1 relationship between a DKIM DNS record for a domain, and the public key associated with it.&nbsp;

A selector can be any alphanumeric string you like. For more information on DKIM selectors, [click here.](https://www.emailarchitect.net/domainkeys/doc/html/selector.htm)

![]({{root_url}}/images/customDKIM2.png)

![]({{root_url}}/images/customDKIM3_5.png)

&nbsp;

&nbsp;

**3.)** After adding your domain and selector, click "Create Custom DKIM"&nbsp;

**_Please note:_** What is displayed in the "Public Key" section in this step is not the entire key you will need. Please proceed to the next step for the full key.&nbsp;

![]({{root_url}}/images/customDKIM3.png)

&nbsp;

&nbsp;

**4.)** Now, click on the "TXT Record Info". You'll note that it not currently active, we'll get to that soon.&nbsp;&nbsp;

Here you will see the Location and Value fields displayed. These values are what you will need to publish in the DNS host for your domain.&nbsp;

| Location | Type | Value |
| <selector>.\_domainkey.yourdomain.com | TXT | Variable, copy what you are shown in the Value field. |

![]({{root_url}}/images/customDKIM4.png)

&nbsp;

&nbsp;

**5.)** Once you have published the TXT record as shown in the previous step, click "OK". Clicking this will attempt to validate the DNS record you have created.&nbsp;If successful, you will be taken to&nbsp;main Custom DKIM page.&nbsp;

![]({{root_url}}/images/customDKIM5.png)

&nbsp;

&nbsp;

**6.)** Finally, click "Activate DKIM" button to apply your changes.

&nbsp;

**Notes:**

- Enabling Custom DKIM will use the existing Domain settings in your [DKIM App](https://sendgrid.com/app/appSettings/type/dkim/id/21), and will respect your choice to "Set the DKIM domain to match the FROM domain.
- You can only create a single custom DKIM record per domain, but you may create as many as you like for additional domains you send from and control.
- There is currently not a way to delete a Custom&nbsp;DKIM entry from within the UI, please&nbsp; [submit a ticket](/hc/en-us/requests/new) in order to get an entry deleted.
