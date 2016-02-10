---
seo:
  title: Upgrading your Whitelabel
  description: Upgrading your Whitelabel
  keywords: whitelabel, dns, link, upgrade, domain, links, whitelabeled, already, exists, duplicate, same
title: Upgrading your Whitelabel
weight: 0
layout: page
zendesk_id: 206855907
navigation:
  show: true
---

On July 6th, 2015 we updated the process by with which users [Whitelabel](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html) their accounts. Users who have set up a legacy whitelabel will be prompted to upgrade their settings. This article will help to walk you through this upgrade process.

If you navigate to the [Whitelabel Overview]({{site.app_url}}/settings/whitelabel) page by going to your Settings, and then selecting Whitelabels, you will see a list of your current whitelabels. After clicking on the Action Cog next to the whitelabel you would like to upgrade, select "Upgrade".

![]({{root_url}}/images/WLupgrade.gif)

If you accept the default settings and click Save, you might see the following error message:

![]({{root_url}}/images/link_whitelabel_conflict.png)

![]({{root_url}}/images/duplicatpeWLdomainerror.gif)

This error occurs if you have another whitelabel that shares the same subdomain as the whitelabel you are attempting to upgrade. **Our new whitelabeling system will not allow you to use the same subdomain for a link whitelabel and a domain whitelabel.** If you are upgrading a domain whitelabel, but you have another link whitelabel that shares the same subdomain you will have to create new DNS records in order to complete the upgrade process.

For example: your legacy whitelabel settings may reference `email.yourdomain.com` in both the domain whitelabel and link whitelabel domain field. An attempt to validate either one will fail, because they use both the same subdomain, `email`.

{% anchor h2 %}
How Upgrading Your Whitelabel Can Impact Deliverability
{% endanchor %}

The changes you will make when upgrading your whitelabel are completely transparent to your recipients. However, there are some important changes that occur behind the scenes.

- Your upgraded whitelabel provides you greater security by providing you a unique SPF record that includes only _your_ sending IPs.
- The domain we sign your mail with will change.

When you send messages with SendGrid, we write some important information into the headers of your messages. Included in this information is your ReturnPath domain, and your DKIM domain. When you upgrade your domain whitelabel, these values will change, and in some rare cases this change can impact your deliverability. That being said, the benefits of our new whitelabel arrangement heavily outweigh the risks.

{% anchor h2 %}
Upgrading A Domain Whitelabel
{% endanchor %}

If you are upgrading a domain whitelabel, we recommend that you create a new subdomain to use for your new domain whitelabel.

It is important to note that the DKIM signature is created based on what value is in the domain field. By changing the subdomain, all emails you send on the new whitelabel will have the same DKIM signature as emails sent on the old whitelabel. However, by changing the subdomain, you will alter the domain in your ReturnPath header.

For example, if you change your whitelabel’s domain from `em.example.com` to `email.example.com`, the DKIM signature will still be signed `d=example.com`. However, the new ReturnPath domain will be changed from `@em.example.com` to `@email.example.com`.

After changing the value in the subdomain field, select whether or not you would like this whitelabel to be the default whitelabel for your account. You may also change whether or not you are using Automated Security.

- By turning Automated Security on, you will be given three CNAME records that you will be prompted to give to your host provider.

- By turning Automated Security off, you will be given one MX record and two TXT records that you will be prompted to give to your host provider.

Finally, click Save. You will then be taken to a page listing your new DNS records that you must enter in your DNS host provider’s settings. Once you have entered those DNS records in your host provider’s settings, return to your SendGrid account and validate your new whitelabel.

{% info %}
If you have a legacy link whitelabel, we recommend that you do not upgrade or alter the DNS records for that whitelabel. If you find yourself unable to upgrade your domain whitelabel due to conflicting DNS records between your domain and link whitelabels, create new DNS records only for your domain whitelabel. Maintaining the original configuration for your link whitelabel ensures that [click tracking]({{root_url}}/Glossary/clicks.html) will continue to function for any links already delivered to your recipients.
{% endinfo %}

{% anchor h2 %}
Why Should I Upgrade My Whitelabel?
{% endanchor %}

Despite the potential difficulties, **we still strongly encourage you to upgrade your legacy domain whitelabels**. Our new whitelabeling system allows for better security via custom, rotating DKIM keys, and better sender authentication via custom SPF records. These improvements are only made possible by creating new and unique DNS records for each of your whitelabels.
