---
st:
  published_at: 2016-12-02
  type: Classroom
seo:
  title: How to Setup an IP Whitelabel
  description: Learn how to setup an IP whitelabel
  keywords: whitelabel, A record, A, DKIM, SPF, CNAME, MX, TXT, IP whitelabel, IP, how to, tutorial
title: How to Setup an IP Whitelabel
weight: 0
layout: page
navigation:
  show: true
---

Much like [domain whitelabeling]({{root_url}}/Classroom/Basics/Whitelabel/setup_domain_whitelabel.html), IP whitelabeling provides an additional way to authenticate your email. When you send an email from a whitelabeled IP address, your recipients' inbox providers are able to verify that your IP address is authorized to send email on behalf of your domain.

This is accomplished by performing a **reverse DNS lookup** (rDNS) using an **A Record** (address record) that SendGrid generates for your whitelabeled IP address. An A record simply maps a domain to an IP address. When a mailbox provider looks up your A Record, they will see your SendGrid IP address. When they look at your IP address, they will see the rDNS which will match with your A Record. This circular checking proves that your SendGrid IP is associated with your domain and that your domain is associated with your SendGrid IP.

Whitelabeling an IP address is easy, and only requires that you update your DNS provider with a single DNS record.

{% anchor h2 %}
Creating an IP Whitelabel
{% endanchor %}

{% info %}
Only the parent account or a Teammate with the Whitelabel permission can create IP whitelabels; however, the parent account can assign the whitelabeled IP to subusers.
{% endinfo %}

**(1)** Navigate to your SendGrid Dashboard, click **Settings** in the left hand sidebar, and select **Whitelabels**.

**(2)** Under **Whitelabeled IPs**, click **+Add IP**.

![]({{root_url}}/images/ip_whitelabel_setup_1.png)

You will be shown a window containing a list of all of your IP addresses, the account they are assigned to, and their generic SendGrid rDNS information.

**(3)** Select the IP address you want to whitelabel.

**(4)** Under **Subdomain**, make sure to use the same subdomain that was used when whitelabeling that domain.

**(5)** Select the domain that you would like to whitelabel this IP address to under the **Domain** drop down menu.

![]({{root_url}}/images/ip_whitelabel_setup_2.png)

{% info %}
An IP address can only be whitelabeled to a single domain. However, you can whitelabel multiple IP addresses to the same domain or different domains depending on your sending needs.
{% endinfo %}

**(6)** Once you have entered the subdomain and selected the domain, click **Save**.

**(7)** Click **Confirm** in the validation notification that appears.

**(8)** You should be taken to the IP validation page where you can review the IP address being whitelabeled, the user that this IP whitelabel will be assigned to, the updated rDNS information, and the A record that you will need to give your DNS provider.

![]({{root_url}}/images/ip_whitelabel_setup_3.png)

**(9)** Once you have given your new A Record to your DNS provider, and your provider propagates the changes, you can validate your IP whitelabel.

**(10)** Your IP address is now associated with your sending domain via an A Record. Whenever your recipients' mailbox providers perform an rDNS check, they will see that your IP address matches the sending domain. If your rDNS doesn't match, many mailbox providers will reject your email.

{% anchor h2 %}
Managing Your IP Whitelabels
{% endanchor %}

{% anchor h3 %}
Adding an IP Address
{% endanchor %}

Whenever you add a dedicated IP address to your account, you should make sure to whitelabel it by following the steps above. To add additional IPs to your Pro or Premier account, first, log into your account, and then click the **Add a Dedicated IP** button on the [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page.

{% anchor h3 %}
Deleting an IP Whitelabel
{% endanchor %}

You can delete an IP whitelabel at any time. Simply navigating to your SendGrid dashboard, click **Settings** in the lefthand sidebar, and click **IPs** under **Whitelabels**. You will see a list of your IP whitelabels. Click the action menu next to the whitelabel you want to delete and click **Delete**.

{% warning %}
Deleting an IP whitelabel is permanent! You cannot recover a deleted IP whitelabel.

Deleting an IP whitelabel from SendGrid will not remove that IP's A record from your DNS provider's settings. After you delete an IP whitelabel, make sure to go to your DNS host's DNS settings to remove the associated A record.
{% endwarning %}
