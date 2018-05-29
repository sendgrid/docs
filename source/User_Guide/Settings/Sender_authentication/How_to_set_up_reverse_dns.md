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

<iframe src="https://player.vimeo.com/video/265831363" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% info %}
You can only set up reverse DNS if you have a dedicated IP.
{% endinfo %}

- [What is reverse DNS?](#-What-is-reverse-DNS)
- [Key terminology](#-Key terminology)
    - [DNS](#-DNS)
    - [CDN](#-CDN)
    - [CNAME](#-CNAME)
- [Setting up reverse DNS](#-Setting-up-reverse-DNS)
    - [Before you begin](#-Before-you-begin)
    - [Setting up DNS](#-Setting-up-DNS)
- [Advanced settings](#-Advanced-settings)
    - [Using a custom return path](#-Using-a-custom-return-path)
    - [Assigning a subuser](#-Assigning-a-subuser)

{% anchor h2 %}
What is reverse DNS?
{% endanchor %}

Setting up reverse DNS on IP addresses allows mailbox providers to verify the sender when they do a reverse DNS lookup upon receipt of the emails you send. When you updateyour DNS provider with a DNS record provided by SendGrid, when you send mail over your IP, the email service provider performs a reverse DNS lookup (rDNS) using an A Record (address record). An A record maps your domain to your IP address. When a mailbox provider looks up your A Record, they see your SendGrid IP address. When they look at your IP address, they see the rDNS that matches your A Record. This circular checking proves that your SendGrid IP is associated with your domain and that your domain is associated with your SendGrid IP.

{% anchor h2 %}
Key terminology
{% endanchor %}

{% anchor h3 %}
DNS
{% endanchor %}

DNS stands for Domain Name System. This is a naming system for domains on the internet. When SendGrid refers to your DNS, we are talking about your domain name that you want to send emails from, or that you want to link images from. When we talk about your DNS provider, we are talking about the service that hosts your domain name. For example, GoDaddy, Rackspace, or Cloudflare. For more information about DNS, see our [DNS glossary page]({{root_url}}/Glossary/dns.html).

{% anchor h3 %}
CDN
{% endanchor %}

A CDN (content delivery network) is a network that delivers the content of webpages to the end user. The network selects the servers for delivery based on the location of the end user, the originating location of the webpage and the location of the content delivery server. Content Delivery Networks are a great mechanism that you can use to serve up content very quickly and easily across multiple mediums as well as handle security certificates for you.

We suggest [CloudFlare]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-CloudFlare), [Fastly]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-Fastly), or [KeyCDN]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-KeyCDN) when using Content Delivery Networks with SendGrid.

{% anchor h3 %}
CNAME
{% endanchor %}

The CNAME record creates an alias for subdomain.yourdomain.com and points to sendgrid.net. The CNAME is needed for our click and open tracking features in order for those statistics to be routed back to your SendGrid account. This will also be what your messages are signed by, so your recipients will be able see what you have chosen for your CNAME. You set up the CNAME files that SendGrid provides with your DNS host. For more information about CNAME, see our [CNAME glossary page]({{root_url}}/Glossary/cname.html).

{% anchor h3 %}
Before you begin
{% endanchor %}

To set up link branding, you must submit the DNS records provided by SendGrid to your DNS or hosting provider (for example, GoDaddy, Hover, CloudFlare, etc.). First, figure out who your hosting provider is and if you have access. If you don't have access to your DNS or hosting provider, you should figure out who in your company has this access before you begin setting up link branding.

{% info %}
Note that you can also set up link branding when you set up your domain authentication and you may not need to set it up again.
{% endinfo %}

*To set up and verify link branding:*

1. In the SendGrid UI, select [Settings > Sender Authentication](https://app.sendgrid.com/settings/whitelabel).
1. In the link branding section, click **Get Started**.
1. Next, add in information about your DNS host. CLick **Next**.
1. Enter the domain that you want to brand the links and images with and add advanced settings. Make sure that you only enter the name of your root domain. Do not include `www` or `http://www` in this field! Your domain needs to match the domain of your from address on the emails you are sending out. For example, if I am branding with the domain `example.sendgrid.com`, I would set my link branding domain to be `sendgrid.com`. Click **Next**. For more information about advanced settings, see [Advanced settings](#-Advanced-settings).
1. Next, you need to add all of the CNAME records on this screen to your DNS host. This process varies depending on your DNS host. For videos on how to add your CNAME to some popular DNS service providers, check out these [videos](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/providers.html). If you don't have access to modify your companies DNS records, you can also email a request to a co-worker. This email includes a direct link to the CNAME records. This link does expire. The recipient doesn't need login access to your SendGrid account.

Now links and images in your emails are from your custom domain. You only need to update your link branding if you want to update the domain that appears in the links in your email.

It can take up to 48 hours for the records to verify after you upload them into your DNS host, so you will likely have to come back later to verify.

{% anchor h3 %}
Verifying your DNS
{% endanchor %}

Once you add the CNAME records to your DNS host, return to the [Sender authentication page](https://app.sendgrid.com/settings/whitelabel) and click **Verify**.

{% info %}
If you click verify, and only half of your CNAME records verify, this usually means that you need to wait a bit longer. It's also possible that you entered one of your records in incorrectly. For other troubleshooting information, see [Sender authentication troubleshooting]({{root_url}}/User_Guide/Settings/Sender_authentication/Troubleshooting.html).
{% endinfo %}

Any time that you send an email with image or links that match the branded link, SendGrid applies that link to your email. You only need to update your link branding if you want to update the links used in your emails.

{% anchor h2 %}
Advanced settings
{% endanchor %}

{% anchor h3 %}
Using a custom subdomain for links
{% endanchor %}

*To customize your subdomain:*

When you are in the process of branding a link, and on the screen where you input domain settings, open the advanced settings, select **Custom subdomain for links** and input letters or numbers to build a custom domain. If you don't select these, SendGrid automatically selects them for you. Make sure the characters you select are different from what SendGrid assigned you initially.

{% anchor h3 %}
Assigning a subuser
{% endanchor %}

By assigning a domain whitelabel to one of your subusers, you can give them the benefit of improved authentication and security, but also separate from the sending reputation of your parent account. If you assign a subusers domain, they can't edit or delete it.

*To assign an authenticated domain to a subuser:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Assign to a subuser**, and select a subuser to assign to that domain.

{% anchor h2 %}
Migrating from legacy Whitelabel
{% endanchor %}

If you set up a whitelabel before 2015, your whitelabel will still work. However, if you need to change or update it, you need to delete it and recreate it as an authenticated domain in our new system. If you do set up a new branded link, make sure to keep the same subdomain for domain authentication, but then use a different one for link branding.

If you set up a whitelabel after 2015, it has been automatically migrated to our new sender authentication system.

{% anchor h2 %}
Additional resources
{% endanchor %}

- [How to set up domain authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html)
- [How to set up reverse DNS]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_reverse_dns.html)
- [Troubleshooting]({{root_url}}/User_Guide/Settings/Sender_authentication/Troubleshooting.html)


<iframe src="https://player.vimeo.com/video/265831363" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

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
What do I do if I have more than 10 IPs
{% endanchor %}

There is a character limit in SPF records that means that if you have more than 10 IP addresses, they will not fit in the record. When this is true, we will provide you with the generic SendGrid SPF record which includes all IPs at SendGrid, not just yours. If you would like to secure your SPF record to only include your IPs, you can chain multiple SPF records together manually. For more information see Open SPF’s website.

{% anchor h2 %}
Additional resources
{% endanchor %}

- [How to set up link branding]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_link_branding.html)
- [How to set up domain authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html)
- [Troubleshooting]({{root_url}}/User_Guide/Settings/Sender_authentication/Troubleshooting.html)
