---
layout: page
weight: 0
title: How to set up reverse DNS
navigation:
  show: true
seo:
  title: How to set up reverse DNS
  override: true
  description: Set up reverse DNS to improve your deliverability and security of your emails.
---

<iframe src="https://player.vimeo.com/video/149816616" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% info %}
If you plan to send from multiple domains, you should whitelabel at least one IP address per domain.
{% endinfo %}

Whitelabeling IP addresses allows mailbox providers to verify the sender when they do a reverse DNS lookup upon receipt of the emails you send. This differs from domain whitelabeling in that, while you should have your IP addresses in your SPF records, actually whitelabeling the IP addresses does not require a change to SPF or DKIM records.

{% info %}
Only the parent account can whitelabel IP addresses. The parent account can then assign the IPs to the subusers accordingly.
{% endinfo %}

An individual IP address can only be whitelabeled to a single domain, but a domain can have many IPs whitelabeled to it. This allows for you to use IP pooling for your email sending.

{% anchor h2 %}
IP Whitelabel Settings
{% endanchor %}

{% anchor h3 %}
IP Address
{% endanchor %}

The list of the IP addresses that are available on your account and you can choose to whitelabel a single IP address that currently does not have a whitelabel setup.

From here, you can see which subusers have access to send from each of these IPs as well as where the current reverse DNS (rDNS) points. Once whitelabeled and verified, the rDNS should point to your IP whitelabel subdomain.

{% anchor h3 %}
Subdomain
{% endanchor %}

This is the “prefix” of the domain that you are actually whitelabeling.

{% info %}
We suggest that you use the same subdomain as your domain whitelabel.
{% endinfo %}

We will then prepend a second level subdomain similar to ```o1``` incrementing the numeric value of this string as you add IP whitelabels to this subdomain.

{% anchor h3 %}
Domain
{% endanchor %}

The root domain for your subdomain. This is the domain that will receive the email reputation from the whitelabel. Your root domain should match your FROM email address. If you are sending from newsletteexampexample@example.com, then you should whitelabel example.com so the domains match.

{% anchor h3 %}
Use New Domain
{% endanchor %}

Allows you to add a new domain to your whitelabel options.

{% anchor h3 %}
Default IP Whitelabel
{% endanchor %}

There is no default IP whitelabel. If you only have a single IP address, this will be the only IP address that SendGrid sends from on your behalf.

{% anchor h2 %}
Creating an IP Whitelabel
{% endanchor %}

When you enter the information for your IP whitelabel and click “Save”, SendGrid will update its own internal DNS to prepare for your whitelabel settings. This process may take up to 60 seconds.

We will then give you the DNS A record entry that you need to enter at your host or registrar to match the new IP address.

{% anchor h2 %}
Validate Your IP Whitelabel
{% endanchor %}

{% warning %}
Your IP whitelabel will not work properly until the A record is propagated and validated by SendGrid.
{% endwarning %}

Once you have made the DNS changes, you need to validate your whitelabel:

1. Return to IP whitelabels
2. Click the whitelabel you just added (or the gear icon to the right of the whitelabel)
3. Click “Validate”

If everything is set up properly and the DNS records have propagated, then SendGrid will verify your whitelabel.

{% anchor h3 %}
Viewing Your IP Whitelabel
{% endanchor %}

If you need to check the status of a whitelabel, you can see the “at a glance” information from the IP Whitelabel page. However, if you’re looking for more in-depth information or you need to find the DNS settings for your whitelabel then just click the gear icon next to the whitelabel and select “View.”

From this page you will be able to see all of the settings you entered when setting up your whitelabel, whether the whitelabel is valid, and all of the DNS settings you need for this whitelabel.

{% anchor h3 %}
Adding An IP To Your Account
{% endanchor %}

When you add an IP address to your SendGrid account then you will likely want to add a whitelabel for this IP address.

{% anchor h2 %}
Deleting an IP Whitelabel
{% endanchor %}

{% warning %}
Deleting an IP whitelabel is permanent and can not be rolled back.
{% endwarning %}

When you view your detailed whitelabel information, you will notice at the bottom of the page that you can delete this whitelabel. If you click the button and then confirm that you are sure you want to delete this whitelabel, then SendGrid will delete it.

{% anchor h2 %}
Using the API
{% endanchor %}

[Manage your IP whitelabel via our v3 API]({{root_url}}/API_Reference/Web_API_v3/Whitelabel/ips.html)

{% anchor h2 %}
Additional resources
{% endanchor %}

- [How to set up link branding]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_link_branding.html)
- [How to set up domain authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html)
- [Troubleshooting]({{root_url}}/User_Guide/Settings/Sender_authentication/Troubleshooting.html)
